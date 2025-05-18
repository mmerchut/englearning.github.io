const sentences = [
  {
    polish: "Do jutra będę już pracował przez 5 godzin.",
    tense: "Future Perfect Continuous",
    correctForm: "I will have been working for 5 hours by tomorrow.",
    rule: "Podmiot + will + have + been + czasownik z końcówką -ing.",
    type: "Twierdzące - Future Perfect Continuous",
    description: "I + will + have + been + working. Czynność trwająca przez określony czas do przyszłego momentu."
  },
  {
    polish: "Ona będzie uczyła się angielskiego przez 3 lata do końca roku.",
    tense: "Future Perfect Continuous",
    correctForm: "She will have been studying English for 3 years by the end of the year.",
    rule: "Podmiot + will + have + been + czasownik z końcówką -ing.",
    type: "Twierdzące - Future Perfect Continuous",
    description: "She + will + have + been + studying. Czynność trwająca do określonego momentu w przyszłości."
  },
  {
    polish: "Czy ty będziesz biegał przez godzinę do 6 wieczorem?",
    tense: "Future Perfect Continuous",
    correctForm: "Will you have been running for an hour by 6 PM?",
    rule: "Will + podmiot + have + been + czasownik z końcówką -ing?",
    type: "Pytające - Future Perfect Continuous",
    description: "Will + you + have + been + running. Pytanie o trwanie czynności do przyszłego momentu."
  },
  {
    polish: "My nie będziemy czekali na ciebie przez 2 godziny do jutra.",
    tense: "Future Perfect Continuous",
    correctForm: "We won’t have been waiting for you for 2 hours by tomorrow.",
    rule: "Podmiot + will not + have + been + czasownik z końcówką -ing.",
    type: "Przeczące - Future Perfect Continuous",
    description: "We + won’t + have + been + waiting. Zaprzeczenie trwania czynności."
  },
  {
    polish: "Oni będą pracowali nad tym projektem przez miesiąc do końca czerwca.",
    tense: "Future Perfect Continuous",
    correctForm: "They will have been working on this project for a month by the end of June.",
    rule: "Podmiot + will + have + been + czasownik z końcówką -ing.",
    type: "Twierdzące - Future Perfect Continuous",
    description: "They + will + have + been + working. Czynność trwająca do przyszłego momentu."
  },
  {
    polish: "Czy on będzie mieszkał w tym domu przez 5 lat do przyszłego roku?",
    tense: "Future Perfect Continuous",
    correctForm: "Will he have been living in this house for 5 years by next year?",
    rule: "Will + podmiot + have + been + czasownik z końcówką -ing?",
    type: "Pytające - Future Perfect Continuous",
    description: "Will + he + have + been + living. Pytanie o trwanie czynności."
  },
  {
    polish: "Ja nie będę jeździł na rowerze przez godzinę do 10 rano.",
    tense: "Future Perfect Continuous",
    correctForm: "I won’t have been riding a bike for an hour by 10 AM.",
    rule: "Podmiot + will not + have + been + czasownik z końcówką -ing.",
    type: "Przeczące - Future Perfect Continuous",
    description: "I + won’t + have + been + riding. Zaprzeczenie trwania czynności."
  },
  {
    polish: "Ty będziesz grał na gitarze przez 2 godziny do wieczora.",
    tense: "Future Perfect Continuous",
    correctForm: "You will have been playing the guitar for 2 hours by the evening.",
    rule: "Podmiot + will + have + been + czasownik z końcówką -ing.",
    type: "Twierdzące - Future Perfect Continuous",
    description: "You + will + have + been + playing. Trwanie czynności do określonego momentu."
  },
  {
    polish: "Czy wy będziecie czekali na autobus przez 30 minut do 9 rano?",
    tense: "Future Perfect Continuous",
    correctForm: "Will you have been waiting for the bus for 30 minutes by 9 AM?",
    rule: "Will + podmiot + have + been + czasownik z końcówką -ing?",
    type: "Pytające - Future Perfect Continuous",
    description: "Will + you + have + been + waiting. Pytanie o trwanie czynności."
  },
  {
    polish: "Oni nie będą biegali przez 3 godziny do jutra.",
    tense: "Future Perfect Continuous",
    correctForm: "They won’t have been running for 3 hours by tomorrow.",
    rule: "Podmiot + will not + have + been + czasownik z końcówką -ing.",
    type: "Przeczące - Future Perfect Continuous",
    description: "They + won’t + have + been + running. Zaprzeczenie trwania."
  },
  {
    polish: "On będzie czytał tę książkę przez cały dzień do soboty.",
    tense: "Future Perfect Continuous",
    correctForm: "He will have been reading this book all day by Saturday.",
    rule: "Podmiot + will + have + been + czasownik z końcówką -ing.",
    type: "Twierdzące - Future Perfect Continuous",
    description: "He + will + have + been + reading. Czynność trwająca do określonego momentu."
  },
  {
    polish: "My będziemy mieszkali w tym mieście przez 10 lat do przyszłego roku.",
    tense: "Future Perfect Continuous",
    correctForm: "We will have been living in this city for 10 years by next year.",
    rule: "Podmiot + will + have + been + czasownik z końcówką -ing.",
    type: "Twierdzące - Future Perfect Continuous",
    description: "We + will + have + been + living. Trwanie czynności."
  },
  {
    polish: "Czy ona będzie pracowała tutaj przez 6 miesięcy do grudnia?",
    tense: "Future Perfect Continuous",
    correctForm: "Will she have been working here for 6 months by December?",
    rule: "Will + podmiot + have + been + czasownik z końcówką -ing?",
    type: "Pytające - Future Perfect Continuous",
    description: "Will + she + have + been + working. Pytanie o trwanie."
  },
  {
    polish: "Ja nie będę gotował przez 2 godziny do 7 wieczorem.",
    tense: "Future Perfect Continuous",
    correctForm: "I won’t have been cooking for 2 hours by 7 PM.",
    rule: "Podmiot + will not + have + been + czasownik z końcówką -ing.",
    type: "Przeczące - Future Perfect Continuous",
    description: "I + won’t + have + been + cooking. Zaprzeczenie."
  },
  {
    polish: "Ty będziesz uczył się francuskiego przez 4 miesiące do stycznia.",
    tense: "Future Perfect Continuous",
    correctForm: "You will have been learning French for 4 months by January.",
    rule: "Podmiot + will + have + been + czasownik z końcówką -ing.",
    type: "Twierdzące - Future Perfect Continuous",
    description: "You + will + have + been + learning. Trwanie czynności."
  },
  {
    polish: "Czy oni będą budowali ten dom przez rok do przyszłego lata?",
    tense: "Future Perfect Continuous",
    correctForm: "Will they have been building this house for a year by next summer?",
    rule: "Will + podmiot + have + been + czasownik z końcówką -ing?",
    type: "Pytające - Future Perfect Continuous",
    description: "Will + they + have + been + building. Pytanie o trwanie."
  },
  {
    polish: "Ona nie będzie pracowała na tym stanowisku przez 5 lat do przyszłego roku.",
    tense: "Future Perfect Continuous",
    correctForm: "She won’t have been working in this position for 5 years by next year.",
    rule: "Podmiot + will not + have + been + czasownik z końcówką -ing.",
    type: "Przeczące - Future Perfect Continuous",
    description: "She + won’t + have + been + working. Zaprzeczenie trwania."
  },
  {
    polish: "My będziemy czekali na ciebie przez 3 godziny do 5 po południu.",
    tense: "Future Perfect Continuous",
    correctForm: "We will have been waiting for you for 3 hours by 5 PM.",
    rule: "Podmiot + will + have + been + czasownik z końcówką -ing.",
    type: "Twierdzące - Future Perfect Continuous",
    description: "We + will + have + been + waiting. Trwanie czynności."
  },
  {
    polish: "Czy ty będziesz ćwiczył przez 2 godziny do jutra?",
    tense: "Future Perfect Continuous",
    correctForm: "Will you have been exercising for 2 hours by tomorrow?",
    rule: "Will + podmiot + have + been + czasownik z końcówką -ing?",
    type: "Pytające - Future Perfect Continuous",
    description: "Will + you + have + been + exercising. Pytanie o trwanie."
  },
  {
    polish: "Oni nie będą podróżowali przez 10 godzin do jutra.",
    tense: "Future Perfect Continuous",
    correctForm: "They won’t have been traveling for 10 hours by tomorrow.",
    rule: "Podmiot + will not + have + been + czasownik z końcówką -ing.",
    type: "Przeczące - Future Perfect Continuous",
    description: "They + won’t + have + been + traveling. Zaprzeczenie trwania."
  },
  {
    polish: "On będzie grał na pianinie przez 4 godziny do wieczora.",
    tense: "Future Perfect Continuous",
    correctForm: "He will have been playing the piano for 4 hours by the evening.",
    rule: "Podmiot + will + have + been + czasownik z końcówką -ing.",
    type: "Twierdzące - Future Perfect Continuous",
    description: "He + will + have + been + playing. Trwanie czynności."
  },
  {
    polish: "Ja będę pisał artykuł przez 3 godziny do północy.",
    tense: "Future Perfect Continuous",
    correctForm: "I will have been writing the article for 3 hours by midnight.",
    rule: "Podmiot + will + have + been + czasownik z końcówką -ing.",
    type: "Twierdzące - Future Perfect Continuous",
    description: "I + will + have + been + writing. Trwanie czynności."
  },
  {
    polish: "Czy wy będziecie oglądali ten serial przez tydzień do przyszłej soboty?",
    tense: "Future Perfect Continuous",
    correctForm: "Will you have been watching this series for a week by next Saturday?",
    rule: "Will + podmiot + have + been + czasownik z końcówką -ing?",
    type: "Pytające - Future Perfect Continuous",
    description: "Will + you + have + been + watching. Pytanie o trwanie."
  },
  {
    polish: "My nie będziemy sprzątali przez 5 godzin do wieczora.",
    tense: "Future Perfect Continuous",
    correctForm: "We won’t have been cleaning for 5 hours by the evening.",
    rule: "Podmiot + will not + have + been + czasownik z końcówką -ing.",
    type: "Przeczące - Future Perfect Continuous",
    description: "We + won’t + have + been + cleaning. Zaprzeczenie trwania."
  }
];

let isDescriptionVisible = true;

function toggleDescription() {
    const descriptionElement = document.getElementById("type-info");
    isDescriptionVisible = !isDescriptionVisible;
    descriptionElement.style.display = isDescriptionVisible ? 'none' : 'block';
    document.getElementById("toggle-description-btn").innerText = isDescriptionVisible ? 'Pokaż opis' : 'Ukryj opis';
}

let currentSentence = {};
let score = 0;
let hasAttempted = false;

function removeDiacritics(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function getRandomSentence() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
}

function generateOptions(correctForm) {
    const options = [correctForm];
    while (options.length < 4) {
        const randomSentence = getRandomSentence().correctForm;
        if (!options.includes(randomSentence)) {
            options.push(randomSentence);
        }
    }
    return options.sort(() => Math.random() - 0.5);
}

function displayNewSentence() {
    currentSentence = getRandomSentence();
    hasAttempted = false;

    document.getElementById("polish-sentence").innerText = currentSentence.polish;
    document.getElementById("tense-info").innerText = `Czas: ${currentSentence.tense}`;
    document.getElementById("type-info").innerText = `Typ: ${currentSentence.type} / ${currentSentence.description}`;
    document.getElementById("user-input").value = '';
    document.getElementById("result").innerText = '';
    document.getElementById("building-rule").innerText = '';

    // Focus input field
    setTimeout(() => {
        document.getElementById("user-input").focus();
    }, 100);

    // Opcje wielokrotnego wyboru
    const options = generateOptions(currentSentence.correctForm);
    const optionsContainer = document.createElement("div");
    optionsContainer.id = "options-container";

    options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = `${index + 1}. ${option}`;
        button.className = "option-btn";
        button.setAttribute("data-index", index);
        button.onclick = () => checkMultipleChoice(option);
        optionsContainer.appendChild(button);
    });

    const container = document.querySelector('.container');
    const existingOptionsContainer = document.getElementById("options-container");
    if (existingOptionsContainer) {
        container.removeChild(existingOptionsContainer);
    }
    container.appendChild(optionsContainer);
}

function checkAnswer() {
    const userInput = removeDiacritics(document.getElementById("user-input").value.trim().toLowerCase());
    const correct = removeDiacritics(currentSentence.correctForm.toLowerCase());

    if (!hasAttempted) {
        if (userInput === correct) {
            score++;
            document.getElementById("score").innerText = score;
            document.getElementById("result").innerText = `Brawo! Poprawnie.`;
            document.getElementById("result").style.color = 'green';
        } else {
            document.getElementById("result").innerText = `Spróbuj ponownie. Poprawna forma: "${currentSentence.correctForm}"`;
            document.getElementById("result").style.color = 'red';
        }
        hasAttempted = true;
    } else {
        document.getElementById("result").innerText = `Już próbowałeś to zdanie. Poprawna forma: "${currentSentence.correctForm}"`;
        document.getElementById("result").style.color = 'orange';
    }

    document.getElementById("building-rule").innerText = currentSentence.rule;
}

function checkMultipleChoice(selectedOption) {
    if (!hasAttempted) {
        if (removeDiacritics(selectedOption.toLowerCase()) === removeDiacritics(currentSentence.correctForm.toLowerCase())) {
            score++;
            document.getElementById("score").innerText = score;
            document.getElementById("result").innerText = `Brawo! Poprawnie.`;
            document.getElementById("result").style.color = 'green';
        } else {
            document.getElementById("result").innerText = `Spróbuj ponownie. Poprawna forma: "${currentSentence.correctForm}"`;
            document.getElementById("result").style.color = 'red';
        }
        hasAttempted = true;
        document.getElementById("building-rule").innerText = currentSentence.rule;
    } else {
        document.getElementById("result").innerText = `Już próbowałeś to zdanie. Poprawna forma: "${currentSentence.correctForm}"`;
        document.getElementById("result").style.color = 'orange';
    }
}

document.getElementById("check-btn").addEventListener("click", checkAnswer);
document.getElementById("next-btn").addEventListener("click", displayNewSentence);
document.getElementById("toggle-description-btn").addEventListener("click", toggleDescription);

// Obsługa ENTER i wyboru klawiszem 1–4
document.addEventListener("keydown", (event) => {
    const key = event.key;

    // ENTER
    if (key === "Enter") {
        event.preventDefault();
        if (!hasAttempted) {
            checkAnswer();
        } else {
            displayNewSentence();
        }
    }

    // Klawisze 1-4
    if (["1", "2", "3", "4"].includes(key)) {
        const index = parseInt(key) - 1;
        const buttons = document.querySelectorAll(".option-btn");
        if (buttons[index]) {
            buttons[index].click();
        }
    }

    // Ustaw focus na input, jeśli piszesz literę
    if (/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]$/.test(key)) {
        document.getElementById("user-input").focus();
    }
});

document.getElementById("user-input").addEventListener("keydown", function(event) {
    if (event.key >= "0" && event.key <= "9") {
        event.preventDefault();
    }
});

// Inicjalizacja
displayNewSentence();


