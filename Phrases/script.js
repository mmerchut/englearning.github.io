const phrases = [
    { phrase: "Let's touch base.", translation: "Skontaktujmy się." },
    { phrase: "Can we circle back?", translation: "Czy możemy wrócić do tego później?" },
    { phrase: "Think outside the box.", translation: "Myśl nieszablonowo." },
    { phrase: "Let's take this offline.", translation: "Omówmy to poza spotkaniem." },
    { phrase: "I’ll ping you.", translation: "Skontaktuję się z Tobą." },
    { phrase: "Let's drill down.", translation: "Zagłębmy się w szczegóły." },
    { phrase: "We need to align on this.", translation: "Musimy się w tym zgodzić." },
    { phrase: "Can you give me a heads up?", translation: "Czy możesz mnie wcześniej poinformować?" },
    { phrase: "Let's loop in the team.", translation: "Włączmy w to zespół." },
    { phrase: "I need to get back to you on that.", translation: "Muszę wrócić do Ciebie w tej sprawie." }
];

const phraseElement = document.getElementById('phrase');
const translationElement = document.getElementById('translation');
const userInput = document.getElementById('userInput');
const checkBtn = document.getElementById('checkBtn');
const optionsContainer = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const resultElement = document.getElementById('result');

let currentPhrase;

function getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}

function displayPhrase() {
    currentPhrase = getRandomPhrase();
    phraseElement.textContent = currentPhrase.phrase;
    translationElement.textContent = currentPhrase.translation;
    userInput.value = '';
    resultElement.textContent = '';
    nextBtn.style.display = 'none';
    generateOptions();
}

function generateOptions() {
    optionsContainer.innerHTML = '';
    const correctOption = currentPhrase.phrase;
    const options = [correctOption];

    while (options.length < 4) {
        const randomPhrase = getRandomPhrase().phrase;
        if (!options.includes(randomPhrase)) {
            options.push(randomPhrase);
        }
    }

    options.sort(() => Math.random() - 0.5);

    options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.textContent = option;
        optionDiv.classList.add('option');
        optionDiv.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(optionDiv);
    });
}

function checkAnswer(selectedOption) {
    if (selectedOption === currentPhrase.phrase) {
        resultElement.textContent = "Poprawnie!";
        nextBtn.style.display = 'block'; // Show the next button
    } else {
        resultElement.textContent = "Spróbuj ponownie.";
    }
}

checkBtn.addEventListener('click', () => {
    const userAnswer = userInput.value.trim();
    if (userAnswer === currentPhrase.phrase) {
        resultElement.textContent = "Poprawnie!";
        nextBtn.style.display = 'block'; // Show the next button
    } else {
        resultElement.textContent = "Spróbuj ponownie.";
    }
});

nextBtn.addEventListener('click', displayPhrase);

// Initial display
displayPhrase();
