const bil = document.getElementById('bil');
const sten = document.getElementById('sten');
const puntos = document.getElementById('puntos');
const skott = document.getElementById('skott');
const cooldownBar = document.getElementById('cooldown-bar');
const cooldownContainer = document.getElementById('cooldown-container');

let canShoot = true; // Flag to check if the player can shoot

// Function to handle jumping
function jump() {
    bil.classList.add('hopp');
    setTimeout(() => {
        bil.classList.remove('hopp');
    }, 500);
}

// Function to handle shooting
function skjut() {
    if (!canShoot) return; // If shooting is on cooldown, exit

    // Reset the shot position and make it visible
    skott.style.left = '80px'; 
    skott.style.display = 'block'; 

    canShoot = false; // Lock shooting ability

    // Add shooting animation class
    skott.classList.add('skjut');

    // Show the cooldown bar and start animating the width to 0%
    cooldownContainer.style.display = 'block';
    cooldownBar.style.width = '100%';

    // After 0.5 seconds (shot animation), reset the shot and hide it
    setTimeout(() => {
        skott.classList.remove('skjut');
        skott.style.display = 'none'; // Hide shot after animation
    }, 500);

    // Set cooldown for 3 seconds
    setTimeout(() => {
        canShoot = true; // Re-enable shooting after cooldown
        cooldownBar.style.width = '0%'; // Reset the cooldown bar width to 0%

        // After cooldown, hide the bar smoothly after 3 seconds
        setTimeout(() => {
            cooldownContainer.style.display = 'none'; // Hide cooldown container
        }, 500); // Add a small delay to allow the transition to complete
    }, 3000); // 3 seconds cooldown
}

// Event listener for keydown (Spacebar for shooting, other keys for jumping)
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        skjut(); // Handle shooting
    } else if (event.code !== 'Space' && !bil.classList.contains('hopp')) {
        jump(); // Handle jumping
    }
});

// Game loop (every 20ms)
setInterval(() => {
    // Update score (for now we just increment it for simplicity)
    score.innerText++;

    const bilTop = parseInt(window.getComputedStyle(bil).getPropertyValue('top'));
    const stenLeft = parseInt(window.getComputedStyle(sten).getPropertyValue('left'));
    const skottActive = skott.classList.contains('skjut');
    let skottLeft = 0;

    // Only calculate skottLeft if shot is active
    if (skottActive) {
        skottLeft = parseInt(window.getComputedStyle(skott).getPropertyValue('left'));
    }

    // Handle stone logic (hide if off-screen)
    if (stenLeft < 0) {
        sten.style.display = 'none';
    } else {
        sten.style.display = ''; // Reset visibility
    }

    // Handle collision detection (if shot collides with stone)
    if (skottActive && Math.abs(stenLeft - skottLeft) < 30) {
        sten.style.display = 'none'; // Hide stone if shot hits it
    }

    // Game over check (if stone hits the car)
    if (stenLeft < 50 && stenLeft > 0 && bilTop > 150) {
        // Trigger Game Over (e.g., stop the game or show a message)
       // alert('Game Over');
    }

}, 20); // Set interval for game loop (20ms for smooth updates)
