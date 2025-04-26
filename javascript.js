const validCodes = {
    '1234': { userName: 'Max', group: 'group1.html' },
    '5678': { userName: 'Bullen', group: 'group2.html' }
}

const codeInput = document.getElementById('codeInput');
const errorElement = document.getElementById('error');

function submitCode() {
    const code = codeInput.value.trim();
    const userData = validCodes[code];

    if (userData) {
        localStorage.setItem('userName', userData.userName);
        localStorage.setItem('groupPage', userData.group);
        window.location.href = 'welcome.html';
    } else {
        errorElement.textContent = 'Fel bokningsnummer, vänligen försök igen.';
    }
}