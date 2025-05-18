const sentences = [
  {
    polish: "Jutro o tej porze będę czytał książkę.",
    tense: "Future Continuous",
    correctForm: "I will be reading a book at this time tomorrow.",
    rule: "Podmiot + will + be + czasownik z końcówką -ing.",
    type: "Twierdzące - Future Continuous",
    description: "I + will + be + reading. Czynność trwająca w określonym momencie w przyszłości."
  },
  {
    polish: "Ona będzie pracowała w biurze jutro.",
    tense: "Future Continuous",
    correctForm: "She will be working in the office tomorrow.",
    rule: "Podmiot + will + be + czasownik -ing.",
    type: "Twierdzące - Future Continuous",
    description: "She + will + be + working. Działanie ciągłe w przyszłości."
  },
  {
    polish: "Czy ty będziesz oglądał film o 8 wieczorem?",
    tense: "Future Continuous",
    correctForm: "Will you be watching a movie at 8 PM?",
    rule: "Will + podmiot + be + czasownik -ing?",
    type: "Pytające - Future Continuous",
    description: "Will + you + be + watching. Pytanie o czynność w określonym czasie."
  },
  {
    polish: "Nie będę pracował w ten weekend.",
    tense: "Future Continuous",
    correctForm: "I will not (won't) be working this weekend.",
    rule: "Podmiot + will not + be + czasownik -ing.",
    type: "Przeczące - Future Continuous",
    description: "I + won’t + be + working. Zaprzeczenie ciągłej czynności."
  },
  {
    polish: "My będziemy jedli obiad o 1 po południu.",
    tense: "Future Continuous",
    correctForm: "We will be having lunch at 1 PM.",
    rule: "Podmiot + will + be + czasownik -ing.",
    type: "Twierdzące - Future Continuous",
    description: "We + will + be + having. Przyszła czynność trwająca."
  },
  {
    polish: "Czy ona będzie rozmawiała z szefem jutro?",
    tense: "Future Continuous",
    correctForm: "Will she be talking to the boss tomorrow?",
    rule: "Will + podmiot + be + czasownik -ing?",
    type: "Pytające - Future Continuous",
    description: "Will + she + be + talking. Pytanie o czynność w przyszłości."
  },
  {
    polish: "Oni nie będą czekali na autobus o 9 rano.",
    tense: "Future Continuous",
    correctForm: "They won’t be waiting for the bus at 9 AM.",
    rule: "Podmiot + will not + be + czasownik -ing.",
    type: "Przeczące - Future Continuous",
    description: "They + won’t + be + waiting. Zaprzeczenie czynności."
  },
  {
    polish: "On będzie pisał raport przez cały dzień.",
    tense: "Future Continuous",
    correctForm: "He will be writing the report all day.",
    rule: "Podmiot + will + be + czasownik -ing.",
    type: "Twierdzące - Future Continuous",
    description: "He + will + be + writing. Czynność trwająca w przyszłości."
  },
  {
    polish: "Czy wy będziecie podróżowali w przyszłym tygodniu?",
    tense: "Future Continuous",
    correctForm: "Will you be traveling next week?",
    rule: "Will + podmiot + be + czasownik -ing?",
    type: "Pytające - Future Continuous",
    description: "Will + you + be + traveling. Pytanie o przyszłą czynność."
  },
  {
    polish: "Nie będę grał w ten mecz.",
    tense: "Future Continuous",
    correctForm: "I won’t be playing in the match.",
    rule: "Podmiot + will not + be + czasownik -ing.",
    type: "Przeczące - Future Continuous",
    description: "I + won’t + be + playing. Zaprzeczenie przyszłej czynności."
  },
  {
    polish: "Ona będzie gotowała kolację, gdy przyjdziemy.",
    tense: "Future Continuous",
    correctForm: "She will be cooking dinner when we arrive.",
    rule: "Podmiot + will + be + czasownik -ing.",
    type: "Twierdzące - Future Continuous",
    description: "She + will + be + cooking. Czynność w trakcie trwania."
  },
  {
    polish: "Czy on będzie czytał gazetę o 7 rano?",
    tense: "Future Continuous",
    correctForm: "Will he be reading the newspaper at 7 AM?",
    rule: "Will + podmiot + be + czasownik -ing?",
    type: "Pytające - Future Continuous",
    description: "Will + he + be + reading. Pytanie o czynność w konkretnym czasie."
  },
  {
    polish: "My nie będziemy oglądali telewizji wieczorem.",
    tense: "Future Continuous",
    correctForm: "We won’t be watching TV in the evening.",
    rule: "Podmiot + will not + be + czasownik -ing.",
    type: "Przeczące - Future Continuous",
    description: "We + won’t + be + watching. Zaprzeczenie czynności."
  },
  {
    polish: "Ja będę uczył się do egzaminu przez cały weekend.",
    tense: "Future Continuous",
    correctForm: "I will be studying for the exam all weekend.",
    rule: "Podmiot + will + be + czasownik -ing.",
    type: "Twierdzące - Future Continuous",
    description: "I + will + be + studying. Przyszła, ciągła czynność."
  },
  {
    polish: "Czy oni będą pracowali nad projektem jutro?",
    tense: "Future Continuous",
    correctForm: "Will they be working on the project tomorrow?",
    rule: "Will + podmiot + be + czasownik -ing?",
    type: "Pytające - Future Continuous",
    description: "Will + they + be + working. Pytanie o przyszłość."
  },
  {
    polish: "Nie będę jeździł samochodem jutro.",
    tense: "Future Continuous",
    correctForm: "I won’t be driving a car tomorrow.",
    rule: "Podmiot + will not + be + czasownik -ing.",
    type: "Przeczące - Future Continuous",
    description: "I + won’t + be + driving. Zaprzeczenie czynności."
  },
  {
    polish: "On będzie spotykał się z klientami przez cały dzień.",
    tense: "Future Continuous",
    correctForm: "He will be meeting clients all day.",
    rule: "Podmiot + will + be + czasownik -ing.",
    type: "Twierdzące - Future Continuous",
    description: "He + will + be + meeting. Trwające spotkania."
  },
  {
    polish: "Czy ty będziesz pracował wieczorem?",
    tense: "Future Continuous",
    correctForm: "Will you be working in the evening?",
    rule: "Will + podmiot + be + czasownik -ing?",
    type: "Pytające - Future Continuous",
    description: "Will + you + be + working. Pytanie o czynność."
  },
  {
    polish: "Oni nie będą śpiewali na koncercie.",
    tense: "Future Continuous",
    correctForm: "They won’t be singing at the concert.",
    rule: "Podmiot + will not + be + czasownik -ing.",
    type: "Przeczące - Future Continuous",
    description: "They + won’t + be + singing. Zaprzeczenie."
  },
  {
    polish: "My będziemy odpoczywali na plaży w przyszłym miesiącu.",
    tense: "Future Continuous",
    correctForm: "We will be relaxing on the beach next month.",
    rule: "Podmiot + will + be + czasownik -ing.",
    type: "Twierdzące - Future Continuous",
    description: "We + will + be + relaxing. Przyszłe działanie."
  },
  {
    polish: "Czy ona będzie malowała obraz jutro?",
    tense: "Future Continuous",
    correctForm: "Will she be painting a picture tomorrow?",
    rule: "Will + podmiot + be + czasownik -ing?",
    type: "Pytające - Future Continuous",
    description: "Will + she + be + painting. Pytanie o aktywność."
  },
  {
    polish: "Nie będę słuchał muzyki w pracy.",
    tense: "Future Continuous",
    correctForm: "I won’t be listening to music at work.",
    rule: "Podmiot + will not + be + czasownik -ing.",
    type: "Przeczące - Future Continuous",
    description: "I + won’t + be + listening. Zaprzeczenie."
  },
  {
    polish: "On będzie czyścił pokój o 10 rano.",
    tense: "Future Continuous",
    correctForm: "He will be cleaning the room at 10 AM.",
    rule: "Podmiot + will + be + czasownik -ing.",
    type: "Twierdzące - Future Continuous",
    description: "He + will + be + cleaning. Działanie w określonym czasie."
  },
  {
    polish: "Czy wy będziecie grali w ten mecz?",
    tense: "Future Continuous",
    correctForm: "Will you be playing in the match?",
    rule: "Will + podmiot + be + czasownik -ing?",
    type: "Pytające - Future Continuous",
    description: "Will + you + be + playing. Pytanie o przyszłość."
  },
  {
    polish: "Nie będą pracowali nad tym zadaniem jutro.",
    tense: "Future Continuous",
    correctForm: "They won’t be working on this task tomorrow.",
    rule: "Podmiot + will not + be + czasownik -ing.",
    type: "Przeczące - Future Continuous",
    description: "They + won’t + be + working. Zaprzeczenie czynności."
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


