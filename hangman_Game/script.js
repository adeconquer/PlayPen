const wordEl = document.querySelector('#word');
const wrongLettersEl = document.querySelector('#wrong-letters');
const playAgainBtn = document.querySelector('#play-button');
const popup = document.querySelector('#popup-container');
const notification = document.querySelector('#notification-container');
const finalMessage = document.querySelector('#final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];
const correctLetters = [];
const wrongLetters = [];

// Show hidden word
function displayWord() {
    wordEl.innerHTML = `
    ${selectedWord
    .split('')
    .map(letter => `<span class="letter">
        ${correctLetters.includes(letter) ? letter : ''}
    </span>`)
    .join('')
    }
    `;

    const innerWord = wordEl.innerText.replace(/\n/g, '');

    if(innerWord === selectedWord){
        finalMessage.innerText = 'Congratulations! You won! :)';
        popup.style.display = "flex"
    }
}

// Update the wrong letters
function updateWrongLettersEl(){
    //Display wrong letters
    wrongLettersEl.innerHTML = `
        ${wrongLetters.length > 0 ? '<p>Wrong</p>':''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;
    // Display parts
    figureParts.forEach((part, index) => {
        const errors = wrongLetters.length;

        if (index < errors) {
            part.style.display = 'block';
        }else {
            part.style.display = 'none';
        }
    })
    
    // Check if lost
    if(wrongLetters.length === figureParts.length){
        finalMessage.innerText = "Unfortunately you lost. :(";
        popup.style.display = "flex";
    }
}

// Show Notification
function showNotification(){
    notification.classList.add('show');

    setTimeout(_ => {
    notification.classList.remove('show');

    },2000)
}

// Key down letter press
window.addEventListener('keydown', e => {
    if (e.key.match(/^[a-z]+$/)){
        const letter = e.key;

        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord();
            }else{
                showNotification()    
            }    
        }else {
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);
                updateWrongLettersEl(); 
            }else {
                showNotification()
            }
        }
    }
})

// Restart game and play agian
playAgainBtn.addEventListener('click', () => {
    //Empty arays
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = words[Math.floor(Math.random() * words.length)];

    displayWord();

    updateWrongLettersEl();

    popup.style.display = 'none'
})

displayWord()