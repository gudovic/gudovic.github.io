const validCodes = {
    '1234': { userName: 'Max Mattiasson', userGroup: 'group1' },
    '5678': { userName: 'Bullen', userGroup: 'group2' }
}

const codeInput = document.getElementById('codeInput');
const errorElement = document.getElementById('error');

function submitCode() {
    const code = codeInput.value.trim();
    const userData = validCodes[code];

    if (userData) {
        localStorage.setItem('userName', userData.userName);
        localStorage.setItem('userGroup', userData.userGroup);
        window.location.href = 'welcome.html';
    } else {
        errorElement.textContent = 'Fel bokningsnummer, vänligen försök igen.';
    }
}

const userName = localStorage.getItem('userName');

    if (userName) {
        welcomeMessage.textContent = `Välkommen ${userName}!`;
    }

    function goToNextPage() {
        window.location.href = 'destination.html';
    }