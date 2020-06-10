//grab the elements by id
const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-again');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

//assign the parts of the hangmant to a variable
const figureParts = document.querySelectorAll('.figure-part');

//create an array of words
const words = ['priority', 'barbecue', 'olives', 'vulture', 'beautiful', 'dinosaur'];

//loop through the words and choose one and assign it to a variable
const selectedWord = words[Math.floor(Math.random() * words.length)];

//test that out
// console.log(selectedWord);

//create array to store correct letters
const correctLetters = ['w', 'o', 'a'];

//create array to store the incorrect letters
const wrongLetters = [];

//show the hidden word
function displayWord() {
    wordEl.innerHTML = `
    ${selectedWord
            //split the word by letter
            // if letter is included display it otherwise display an empty string

            .split('')
            .map(letter => `
                <span class="letter">
                    ${correctLetters.includes(letter) ? letter : ''}
                </span>
            `).join('')}
    `;
    //get rid of hard return after each character so they can display on each line
    const innerWord = wordEl.innerText.replace(/\n/g, '');
    // console.log(wordEl.innerText, innerWord);
}

displayWord()