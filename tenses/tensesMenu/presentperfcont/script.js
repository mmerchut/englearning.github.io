const sentences = [
  {
    polish: "Ona uczy się angielskiego od dwóch godzin.",
    tense: "Present Perfect Continuous",
    correctForm: "She has been learning English for two hours.",
    rule: "Podmiot + have/has + been + czasownik z -ing.",
    type: "Twierdzące - Present Perfect Continuous",
    description: "She + has + been + learning. Czynność zaczęta w przeszłości i trwająca."
  },
  {
    polish: "My pracujemy nad tym projektem od rana.",
    tense: "Present Perfect Continuous",
    correctForm: "We have been working on this project since morning.",
    rule: "Podmiot + have + been + czasownik -ing.",
    type: "Twierdzące - Present Perfect Continuous",
    description: "We + have + been + working. Czynność w toku."
  },
  {
    polish: "On gra w piłkę od południa.",
    tense: "Present Perfect Continuous",
    correctForm: "He has been playing football since noon.",
    rule: "Podmiot + has + been + czasownik -ing.",
    type: "Twierdzące - Present Perfect Continuous",
    description: "He + has + been + playing. Działanie trwające od konkretnego czasu."
  },
  {
    polish: "Oni czekają na autobus przez 30 minut.",
    tense: "Present Perfect Continuous",
    correctForm: "They have been waiting for the bus for 30 minutes.",
    rule: "Podmiot + have + been + czasownik -ing.",
    type: "Twierdzące - Present Perfect Continuous",
    description: "They + have + been + waiting. Oczekiwanie trwające do teraz."
  },
  {
    polish: "Czy ty biegasz od rana?",
    tense: "Present Perfect Continuous",
    correctForm: "Have you been running since morning?",
    rule: "Have/Has + podmiot + been + czasownik -ing?",
    type: "Pytające - Present Perfect Continuous",
    description: "Have + you + been + running. Pytanie o kontynuowaną aktywność."
  },
  {
    polish: "Ona nie ćwiczy od tygodnia.",
    tense: "Present Perfect Continuous",
    correctForm: "She hasn’t been exercising for a week.",
    rule: "Podmiot + haven’t/hasn’t + been + czasownik -ing.",
    type: "Przeczące - Present Perfect Continuous",
    description: "She + hasn’t + been + exercising. Brak czynności przez pewien czas."
  },
  {
    polish: "Czy on pracuje tutaj długo?",
    tense: "Present Perfect Continuous",
    correctForm: "Has he been working here for a long time?",
    rule: "Has + podmiot + been + czasownik -ing?",
    type: "Pytające - Present Perfect Continuous",
    description: "Has + he + been + working. Pytanie o długotrwałość."
  },
  {
    polish: "Dzieci bawią się cały dzień.",
    tense: "Present Perfect Continuous",
    correctForm: "The children have been playing all day.",
    rule: "Podmiot + have + been + czasownik -ing.",
    type: "Twierdzące - Present Perfect Continuous",
    description: "The children + have + been + playing. Trwająca aktywność."
  },
  {
    polish: "Ja gotuję przez godzinę.",
    tense: "Present Perfect Continuous",
    correctForm: "I have been cooking for an hour.",
    rule: "Podmiot + have + been + czasownik -ing.",
    type: "Twierdzące - Present Perfect Continuous",
    description: "I + have + been + cooking. Czynność w toku."
  },
  {
    polish: "Czy oni rozmawiają od dawna?",
    tense: "Present Perfect Continuous",
    correctForm: "Have they been talking for a long time?",
    rule: "Have + podmiot + been + czasownik -ing?",
    type: "Pytające - Present Perfect Continuous",
    description: "Have + they + been + talking. Pytanie o długość rozmowy."
  },
  {
    polish: "Nie uczyłem się ostatnio.",
    tense: "Present Perfect Continuous",
    correctForm: "I haven’t been studying recently.",
    rule: "Podmiot + haven’t + been + czasownik -ing.",
    type: "Przeczące - Present Perfect Continuous",
    description: "I + haven’t + been + studying. Brak ciągłości nauki."
  },
  {
    polish: "On pisze książkę od miesiąca.",
    tense: "Present Perfect Continuous",
    correctForm: "He has been writing a book for a month.",
    rule: "Podmiot + has + been + czasownik -ing.",
    type: "Twierdzące - Present Perfect Continuous",
    description: "He + has + been + writing. Długotrwały projekt."
  },
  {
    polish: "Czy pada deszcz przez całą noc?",
    tense: "Present Perfect Continuous",
    correctForm: "Has it been raining all night?",
    rule: "Has + podmiot + been + czasownik -ing?",
    type: "Pytające - Present Perfect Continuous",
    description: "Has + it + been + raining. Pogoda trwająca."
  },
  {
    polish: "Nie czułem się dobrze przez kilka dni.",
    tense: "Present Perfect Continuous",
    correctForm: "I haven’t been feeling well for a few days.",
    rule: "Podmiot + haven’t + been + czasownik -ing.",
    type: "Przeczące - Present Perfect Continuous",
    description: "I + haven’t + been + feeling. Trwały stan."
  },
  {
    polish: "Ona śpiewa przez godzinę.",
    tense: "Present Perfect Continuous",
    correctForm: "She has been singing for an hour.",
    rule: "Podmiot + has + been + czasownik -ing.",
    type: "Twierdzące - Present Perfect Continuous",
    description: "She + has + been + singing. Czynność w toku."
  },
  {
    polish: "Czy ty ćwiczysz regularnie ostatnio?",
    tense: "Present Perfect Continuous",
    correctForm: "Have you been exercising regularly lately?",
    rule: "Have + podmiot + been + czasownik -ing?",
    type: "Pytające - Present Perfect Continuous",
    description: "Have + you + been + exercising. Nawyk w czasie teraźniejszym."
  },
  {
    polish: "Nie pisali do mnie przez tydzień.",
    tense: "Present Perfect Continuous",
    correctForm: "They haven’t been writing to me for a week.",
    rule: "Podmiot + haven’t + been + czasownik -ing.",
    type: "Przeczące - Present Perfect Continuous",
    description: "They + haven’t + been + writing. Brak kontaktu."
  },
  {
    polish: "On uczy się niemieckiego przez pół roku.",
    tense: "Present Perfect Continuous",
    correctForm: "He has been learning German for half a year.",
    rule: "Podmiot + has + been + czasownik -ing.",
    type: "Twierdzące - Present Perfect Continuous",
    description: "He + has + been + learning. Trwający proces edukacji."
  },
  {
    polish: "Czy ona dużo pracuje ostatnio?",
    tense: "Present Perfect Continuous",
    correctForm: "Has she been working a lot recently?",
    rule: "Has + podmiot + been + czasownik -ing?",
    type: "Pytające - Present Perfect Continuous",
    description: "Has + she + been + working. Obserwowalna intensywność."
  },
  {
    polish: "Ja czytam tę książkę od wczoraj.",
    tense: "Present Perfect Continuous",
    correctForm: "I have been reading this book since yesterday.",
    rule: "Podmiot + have + been + czasownik -ing.",
    type: "Twierdzące - Present Perfect Continuous",
    description: "I + have + been + reading. Czynność w toku."
  },
  {
    polish: "Oni mieszkają tu od lat.",
    tense: "Present Perfect Continuous",
    correctForm: "They have been living here for years.",
    rule: "Podmiot + have + been + czasownik -ing.",
    type: "Twierdzące - Present Perfect Continuous",
    description: "They + have + been + living. Długa ciągłość."
  },
  {
    polish: "Czy uczysz się do egzaminu od rana?",
    tense: "Present Perfect Continuous",
    correctForm: "Have you been studying for the exam since morning?",
    rule: "Have + podmiot + been + czasownik -ing?",
    type: "Pytające - Present Perfect Continuous",
    description: "Have + you + been + studying. Pytanie o przygotowanie."
  },
  {
    polish: "Nie śpię dobrze przez kilka nocy.",
    tense: "Present Perfect Continuous",
    correctForm: "I haven’t been sleeping well for a few nights.",
    rule: "Podmiot + haven’t + been + czasownik -ing.",
    type: "Przeczące - Present Perfect Continuous",
    description: "I + haven’t + been + sleeping. Problem ze snem."
  },
  {
    polish: "On rozmawia z szefem od 10 minut.",
    tense: "Present Perfect Continuous",
    correctForm: "He has been talking to the boss for 10 minutes.",
    rule: "Podmiot + has + been + czasownik -ing.",
    type: "Twierdzące - Present Perfect Continuous",
    description: "He + has + been + talking. Czynność trwająca."
  },
  {
    polish: "Czy oni pracują nad tym od tygodnia?",
    tense: "Present Perfect Continuous",
    correctForm: "Have they been working on it for a week?",
    rule: "Have + podmiot + been + czasownik -ing?",
    type: "Pytające - Present Perfect Continuous",
    description: "Have + they + been + working. Pytanie o kontynuację."
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


