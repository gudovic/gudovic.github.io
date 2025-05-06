const bil = document.getElementById('bil');
const sten = document.getElementById('sten');
const puntos = document.getElementById('puntos');



function jump() {
    bil.classList.add('hopp');
    setTimeout(() => {
        bil.classList.remove('hopp');
    }, 500);
}

document.addEventListener('keydown', function(event){
    if (!bil.classList.contains('hopp'))
    jump();
}); 

setInterval(() => {
    score.innerText++;
    const bilTop = parseInt(window.getComputedStyle(bil)
    .getPropertyValue('top'));
    const stenLeft = parseInt(window.getComputedStyle(sten)
    .getPropertyValue('left'));

    if (stenLeft < 0) {
        sten.style.display = 'none';
    } else {
        sten.style.display = '';
    }

    if (stenLeft < 50 && stenLeft > 0 && bilTop > 150 ) {
       // alert('game over');
    }

}, 50);


