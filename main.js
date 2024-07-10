document.addEventListener('DOMContentLoaded', function() {
    const img = document.querySelector('#popcat1');
    const heart = document.querySelector('.heart');
    const button = document.querySelector('.button');
    const modal_screen = document.querySelector('.modal_screen');
    const sound = new Audio('loveSong.mp3');
    let isPlaying = false;
    let score = 0;

    // 이미지 클릭 이벤트 (모바일과 데스크탑 모두 지원)
    img.addEventListener('mousedown', handleImageClick); // 데스크탑
    img.addEventListener('touchstart', handleImageClick); // 모바일

    // 이미지 클릭 해제 이벤트 (모바일과 데스크탑 모두 지원)
    img.addEventListener('mouseup', handleImageRelease); // 데스크탑
    img.addEventListener('touchend', handleImageRelease); // 모바일

    button.addEventListener('click', () => {
        modal_screen.style.display = 'none';
    });

    function handleImageClick() {
        if (img.src.endsWith('kk.jpg')) {
            img.src = 'kk2.jpg';
            addToCounter();
            if (score === 18 || score === 1 || score === 30 || score === 100) {
                heart.style.display = "block";
                playSound();
            } else {
                heart.style.display = "none";
                stopSound();
            }
        } else {
            img.src = 'kk.jpg';
        }
    }

    function handleImageRelease() {
        if (img.src.endsWith('kk2.jpg')) {
            img.src = 'kk.jpg';
        }
    }

    function playSound() {
        if (!isPlaying) {
            sound.currentTime = 0; // 사운드 재생 위치를 초기화
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
