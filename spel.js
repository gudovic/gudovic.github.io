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
    const bilTop = parseInt(window.getComputedStyle(bil)
    .getPropertyValue("top"));
    console.log(bilTop)
}, 50);

setInterval(() => {
    const stenTop = parseInt(window.getComputedStyle(sten)
    .getPropertyPriority("top"));
    console.log(stenTop);
}, 50);