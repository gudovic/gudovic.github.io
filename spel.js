import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAbpqrS7En7shMkdfHHtW6bOPQsN6Iq2yY",
  authDomain: "lf-airlines.firebaseapp.com",
  databaseURL: "https://lf-airlines-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lf-airlines",
  storageBucket: "lf-airlines.appspot.com",
  messagingSenderId: "719527670719",
  appId: "1:719527670719:web:a3cdc391b0858a8a72a70a"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const scoresRef = ref(db, "scores");

function submitScore(name, score) {
  push(scoresRef, { name, score });
}

let gameRunning = false;
// TESTA HÄÄÄÄRR
onValue(scoresRef, (snapshot) => {
    const data = snapshot.val();
    const sorted = Object.values(data || {}).sort((a, b) => b.score - a.score).slice(0, 10);
  
    const leaderboard = document.getElementById("leaderboard");
    leaderboard.innerHTML = '';
  
    sorted.forEach(entry => {
      const li = document.createElement("li");
      li.textContent = `${entry.name}: ${entry.score}`;
      leaderboard.appendChild(li);
    });
  });
//AHSJDSDKFDG 
document.getElementById("start-button").addEventListener("click", () => {
    gameRunning = true;
    document.getElementById("start-screen").style.display = "none";
  });

const bil = document.getElementById('bil');
const sten = document.getElementById('sten');
const score = document.getElementById('score');
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
let gameInterval = setInterval(() => {
    if (!gameRunning) return;
  
    score.innerText++;

    const bilTop = parseInt(window.getComputedStyle(bil).getPropertyValue('top'));
    const stenLeft = parseInt(window.getComputedStyle(sten).getPropertyValue('left'));
    const skottActive = skott.classList.contains('skjut');
    let skottLeft = 0;

    if (skottActive) {
        skottLeft = parseInt(window.getComputedStyle(skott).getPropertyValue('left'));
    }
    if (skottActive) {
        skottLeft = skott.getBoundingClientRect().left;
    }
    
    const stenBox = sten.getBoundingClientRect();
    const skottBox = skott.getBoundingClientRect();
    
    // Check if projectile overlaps the stone
    const isHit = (
        skottBox.right > stenBox.left &&
        skottBox.left < stenBox.right &&
        skottBox.top < stenBox.bottom &&
        skottBox.bottom > stenBox.top
    );
    
    if (isHit) {
        sten.style.animation = 'none';
        sten.offsetHeight; // Force browser to reset animation
        sten.style.animation = 'sten 1s infinite linear';
    }

    if (stenLeft < 80 && stenLeft > -30 && bilTop > 160) {
        console.log("Collision detected"); // ← debug log

        const finalScore = parseInt(score.innerText);
        document.getElementById('final-score').innerText = `Din poäng: ${finalScore}`;
        document.getElementById('game-over-screen').style.display = 'flex';
        clearInterval(gameInterval);

        document.getElementById('final-score').innerText = `Din poäng: ${finalScore}`;
        document.getElementById('game-over-screen').style.display = 'flex';

        clearInterval(gameInterval); // ✅ Stop the loop!
    }

    // other game logic...
}, 20);


document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submit-button");

    const playAgainButton = document.getElementById("play-again-button");
    playAgainButton.addEventListener("click", () => {
      location.reload();
    });
  
    submitButton.addEventListener("click", () => {
      const nameInput = document.getElementById("player-name");
      const name = nameInput.value.trim();
      const finalScore = parseInt(score.innerText);
  
      if (!name) {
        alert("Skriv ditt namn först!");
        return;
      }
      
      submitScore(name, finalScore);
      nameInput.disabled = true;
  
      submitButton.innerText = "Score Saved!";
      submitButton.disabled = true;
  
      setTimeout(() => {
        location.reload();
      }, 100);
    });
  });
  