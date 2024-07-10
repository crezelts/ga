document.addEventListener('DOMContentLoaded', function() {
    const img = document.querySelector('#popcat1');
    const heart = document.querySelector('.heart');
    const button = document.querySelector('.button');
    const modal_screen = document.querySelector('.modal_screen');
    const sound = new Audio('loveSong.mp3');
    let isPlaying = false;
    let specialScores = [1, 18, 30]; // 특별 상태가 되는 점수들
    let score = 0;

    // 이미지 클릭 이벤트
    img.addEventListener('mousedown', () => {
        if (specialScores.includes(score)) {
            // 특별 점수일 때
            if (img.src.endsWith('kk_heart.png')) {
                // 특별 이미지 상태에서 클릭하면 원래 상태로 돌아감
                img.src = 'kk.jpg';
                heart.style.display = "none";
                stopSound();
                addToCounter();
            } else {
                // 특별 이미지가 아직 나타나지 않았다면 나타나게 함
                img.src = 'kk_heart.png';
                heart.style.display = "block";
                playSound();
            }
        } else {
            // 일반적인 경우
            if (img.src.endsWith('kk.jpg')) {
                img.src = 'kk2.jpg';
            } else {
                img.src = 'kk.jpg';
            }
            addToCounter();
        }
    });

    // 이미지 클릭 해제 이벤트
    img.addEventListener('mouseup', () => {
        if (!specialScores.includes(score) && img.src.endsWith('kk2.jpg')) {
            img.src = 'kk.jpg';
        }
    });

    button.addEventListener('click', () => {
        modal_screen.style.display = 'none';
    });

    function playSound() {
        if (!isPlaying) {
            sound.currentTime = 0;
            sound.play();
            isPlaying = true;
        }
    }

    function stopSound() {
        if (isPlaying) {
            sound.pause();
            sound.currentTime = 0;
            isPlaying = false;
        }
    }

    function addToCounter() {
        score++;
        document.querySelector('#target').innerHTML = score;
    }
});