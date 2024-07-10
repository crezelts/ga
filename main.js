// script.js

document.addEventListener('DOMContentLoaded', function() {
    const img = document.querySelector('#popcat1');
    let score = 0;
    let lastClickTime = Date.now();

    img.addEventListener('click', function() {
        const now = Date.now();
        if (now - lastClickTime < 500) {
            return; // 클릭 간격이 500ms 미만인 경우 무시
        }
        
        lastClickTime = now;
        
        if (img.src.endsWith('kk.jpg')) {
            img.src = 'kk2.jpg';
            img.classList.add('clicked'); // 클릭 시 스타일 추가
            addToCounter();
            setTimeout(() => {
                img.classList.remove('clicked'); // 클릭 후 일정 시간(예: 200ms) 후 스타일 제거
            }, 200);
        } else {
            img.src = 'kk.jpg';
        }
    });

    function addToCounter() {
        score++;
        document.querySelector('#target').innerHTML = score;
    }
});
