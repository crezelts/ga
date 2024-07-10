// script.js

document.addEventListener('DOMContentLoaded', function() {
    const img = document.querySelector('#popcat1');
    let score = 0;

    img.addEventListener('click', function() {
        if (img.src.endsWith('kk.jpg')) {
            img.src = 'kk2.jpg';
            addToCounter();
        } else {
            img.src = 'kk.jpg';
        }
    });

    function addToCounter() {
        score++;
        document.querySelector('#target').innerHTML = score;
    }
});
