const validCodes = {
    '1234': { userName: 'Max', userGroup: 'group1' },
    '1113': { userName: 'Alex', userGroup: 'group3' },
    '1114': { userName: 'Emilie', userGroup: 'group4' },
    '1116': { userName: 'Håkan', userGroup: 'group5' },
    '1117': { userName: 'Edvin', userGroup: 'group5'},
    '1118': { userName: 'Lukas', userGroup: 'group5'},
    '1119': { userName: 'Magnus', userGroup: 'group5'},
    '108212': { userName: 'Fredrik E', userGroup: 'group4'},
    '102755': { userName: 'Lisa I', userGroup: 'group4'},
    '101230': { userName: 'Erika H', userGroup: 'group4'},
    '101173': { userName: 'Stefan E', userGroup: 'group4'},
    '102511': { userName: 'Sanna L', userGroup: 'group4'},
    '102694': { userName: 'Nicklas S', userGroup: 'group4'},
    '103645': { userName: 'Elin J', userGroup: 'group4'},
    '102205': { userName: 'Anna Å', userGroup: 'group4'},
    '103445': { userName: 'Michael B', userGroup: 'group4'},
    '100978': { userName: 'Marie E', userGroup: 'group3'},
    '102267': { userName: 'Ted W', userGroup: 'group3'},
    '101353': { userName: 'Maja H', userGroup: 'group3'},
    '101839': { userName: 'Dennis S', userGroup: 'group3'},
    '101667': { userName: 'Anna-Karin L', userGroup: 'group3'},
    '100801': { userName: 'Andreas H', userGroup: 'group3'},
    '100612': { userName: 'Unn W', userGroup: 'group3'},
    '101112': { userName: 'Jonas H', userGroup: 'group3'},
    '101294': { userName: 'Maria K', userGroup: 'group7'},
    '102145': { userName: 'Ylva O', userGroup: 'group7'},
    '101479': { userName: 'Thomas E L', userGroup: 'group7'},
    '101726': { userName: 'Åsa K', userGroup: 'group7'},
    '101901': { userName: 'Jösse', userGroup: 'group7'},
    '102084': { userName: 'Linda K', userGroup: 'group7'},
    '101601': { userName: 'Mats G', userGroup: 'group7'},
    '100742': { userName: 'Maria P', userGroup: 'group7'},
    '102938': { userName: 'Rolf G', userGroup: 'group7'},
    '101539': { userName: 'Elin H', userGroup: 'group1'},
    '113552': { userName: 'Peter H', userGroup: 'group1'},
    '104225': { userName: 'Ida S', userGroup: 'group1'},
    '102572': { userName: 'Erik S', userGroup: 'group1'},
    '100001': { userName: 'Emma L', userGroup: 'group1'},
    '100532': { userName: 'Eric B', userGroup: 'group1'},
    '102999': { userName: 'Kristina O', userGroup: 'group1'},
    '101780': { userName: 'Mikael M', userGroup: 'group1'},
    '102328': { userName: 'Sanna A', userGroup: 'group6'},
    '101962': { userName: 'Michael', userGroup: 'group6'},
    '102023': { userName: 'Ulrika K', userGroup: 'group6'},
    '100239': { userName: 'Mårten A', userGroup: 'group6'},
    '100678': { userName: 'Cassandra S', userGroup: 'group6'},
    '102877': { userName: 'Filip M', userGroup: 'group6'},
    '100420': { userName: 'Anna E', userGroup: 'group6'},
    '105886': { userName: 'Gustav N', userGroup: 'group6'},
    '107211': { userName: 'Stefan S', userGroup: 'group6'},
    '131313': { userName: 'Jenny S', userGroup: 'group4'},
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

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('welcome.html')) { 
    
        const userName = localStorage.getItem('userName');
        if (userName) {
        welcomeMessage.textContent = `Incheckad som ${userName}!`;

        }
    }
})

function goToNextPage(url) {
        window.location.href = url;
    }

    const groupContent = {
        group1: {
            headline: "Afterski i Alperna",
            images: ["alperna1.jpg", "alperna2.jpg"],
            texts: [
                "Putsa dina googles, på med mössan och understället",
                "Se upp i backen tusen hål i nacken"
            ]
        },
        group2: {
            headline: "Golfresa till Marbella",
            images: ["golf1.jpg", "golf2.jpg"],
            texts: [
                "Glöm inte kepsen och handsken samt din bästa klubba.",
                "Hole in one beer in two"
            ]
        },
        group3: {
            headline: "Pokerhelg i Vegas",
            images: ["vegas1.jpg", "vegas2.jpg"],
            texts: [
                "Rökfylld lounge och höga insatser",
                "All in"
            ]
        },
        group4: {
            headline: "Solsemester i Hawaii ",
            images: ["hawaii1.jpg", "hawaii2.jpg"],
            texts: [
                "Varm å skönt hulahula",
                "bingibongo"
            ]
        },
        group5: {
            headline: "Safari i Afrika",
            images: ["safari1.jpg", "safari2.jpg"],
            texts: [
                "Giraff, lejon och tiger, håll i hatten på och på med västen!",
                "Härligt härligt men farligt farligt"
            ]
        },
        group6: {
            headline: "Rockfestival i Kalifornien",
            images: ["rock1.jpg", "rock2.jpg"],
            texts: [
                "Hell yeah!",
                "Nitar, läder och ett jävlar anamma"
            ]
        },
        group7: {
            headline: "Countryfestival i Texas",
            images: ["texas1.jpg", "texas2.jpg"],
            texts: [
                "galopp galopp",
                "yeeeee haaaawww"
            ]
        }
    };

    document.addEventListener('DOMContentLoaded', function() {
        if (window.location.pathname.includes('destination.html')) {
        const userGroup = localStorage.getItem('userGroup');
    
        if (userGroup && groupContent[userGroup]) {
            const content = groupContent[userGroup];
    
            document.getElementById('groupHeadline').textContent = content.headline;
            document.getElementById('image1').innerHTML = `<img src="${content.images[0]}" alt="First image">`;
            document.getElementById('text1').textContent = content.texts[0];
            document.getElementById('image2').innerHTML = `<img src="${content.images[1]}" alt="Second image">`;
            document.getElementById('text2').textContent = content.texts[1];
        } else {
            window.location.href = 'index.html';
        }
    }
    });
    

    