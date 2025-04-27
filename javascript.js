const validCodes = {
    '1234': { userName: 'Max Mattiasson', userGroup: 'group1' },
    '5678': { userName: 'Bullen', userGroup: 'group2' },
    '1113': { userName: 'Alex Thoresson', userGroup: 'group3' },
    '1114': { userName: 'Emilie Sjunnesson Zackrisson', userGroup: 'group4' },
    '1115': { userName: 'Emma L', userGroup: 'group5' },
    '1116': { userName: 'Håkan', userGroup: 'group6' },

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
        welcomeMessage.textContent = `Välkommen ${userName}!`;
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({ emojis: ['🎉', '✨', '💥', '🔥', '🤯']
            
        });


    }    }
});

function goToNextPage() {
        window.location.href = 'destination.html';
    }

    const groupContent = {
        group1: {
            headline: "Afterski i Alperna!",
            images: ["alperna1.jpg", "alperna2.jpg"],
            texts: [
                "En fantastisk plats med klippiga berg och skippiga ööl",
                "More info about what you'll find here."
            ]
        },
        group2: {
            headline: "Golfresa Marbella",
            images: ["golf1.jpg", "golf2.jpg"],
            texts: [
                "Putta och öla",
                "Swinga höger och vänster"
            ]
        },
        group3: {
            headline: "Pokerhelg i Vegas",
            images: ["vegas1.jpg", "vegas2.jpg"],
            texts: [
                "Spela och bli rik",
                "All in"
            ]
        },
        group4: {
            headline: "Solsemester Hawaii ",
            images: ["hawaii1.jpg", "hawaii2.jpg"],
            texts: [
                "Varm å skönt hulahula",
                "bingibongo"
            ]
        },
        group5: {
            headline: "Safari i Kenya",
            images: ["safari1.jpg", "safari2.jpg"],
            texts: [
                "Giraff, lejon och tiger, håll i hatten!",
                "Härligt härligt men farligt farligt"
            ]
        },
        group6: {
            headline: "Yogaretreat Malaysia",
            images: ["yoga1.jpg", "yoga2.jpg"],
            texts: [
                "Sträck ut dig ordentligt",
                "Kumbaya"
            ]
        }
    };

    document.addEventListener('DOMContentLoaded', function() {
        const userGroup = localStorage.getItem('userGroup');
    
        if (userGroup && groupContent[userGroup]) {
            const content = groupContent[userGroup];
    
            document.getElementById('groupHeadline').textContent = content.headline;
            document.getElementById('image1').innerHTML = `<img src="${content.images[0]}" alt="First image">`;
            document.getElementById('text1').textContent = content.texts[0];
            document.getElementById('image2').innerHTML = `<img src="${content.images[1]}" alt="Second image">`;
            document.getElementById('text2').textContent = content.texts[1];
        } else {
            window.location.href = 'welcome.html';
        }
    });
    