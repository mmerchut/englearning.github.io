const sentences = [
  {
    polish: "Ona teraz czyta książkę.",
    tense: "Present Continuous",
    correctForm: "She is reading a book now.",
    rule: "Podmiot + is/are/am + czasownik z końcówką -ing.",
    type: "Twierdzące - Present Continuous",
    description: "She + is + reading. Czynność dzieje się w tej chwili."
  },
  {
    polish: "My oglądamy teraz film.",
    tense: "Present Continuous",
    correctForm: "We are watching a movie now.",
    rule: "Podmiot + are + czasownik -ing.",
    type: "Twierdzące - Present Continuous",
    description: "We + are + watching. Czynność w trakcie."
  },
  {
    polish: "On gotuje obiad.",
    tense: "Present Continuous",
    correctForm: "He is cooking dinner.",
    rule: "Podmiot + is + czasownik -ing.",
    type: "Twierdzące - Present Continuous",
    description: "He + is + cooking. Tymczasowa czynność."
  },
  {
    polish: "Ja uczę się angielskiego.",
    tense: "Present Continuous",
    correctForm: "I am learning English.",
    rule: "Podmiot + am + czasownik -ing.",
    type: "Twierdzące - Present Continuous",
    description: "I + am + learning. Proces trwający teraz."
  },
  {
    polish: "Oni grają w piłkę.",
    tense: "Present Continuous",
    correctForm: "They are playing football.",
    rule: "Podmiot + are + czasownik -ing.",
    type: "Twierdzące - Present Continuous",
    description: "They + are + playing. Akcja w toku."
  },
  {
    polish: "Ona teraz nie śpi.",
    tense: "Present Continuous",
    correctForm: "She isn’t sleeping now.",
    rule: "Podmiot + isn’t/aren’t + czasownik -ing.",
    type: "Przeczące - Present Continuous",
    description: "She + isn’t + sleeping. Negacja czynności trwającej."
  },
  {
    polish: "Czy on teraz pracuje?",
    tense: "Present Continuous",
    correctForm: "Is he working now?",
    rule: "Is/Are + podmiot + czasownik -ing?",
    type: "Pytające - Present Continuous",
    description: "Is + he + working. Pytanie o trwającą czynność."
  },
  {
    polish: "Dzieci bawią się w ogrodzie.",
    tense: "Present Continuous",
    correctForm: "The children are playing in the garden.",
    rule: "Podmiot + are + czasownik -ing.",
    type: "Twierdzące - Present Continuous",
    description: "The children + are + playing. Obecna aktywność."
  },
  {
    polish: "Pada deszcz.",
    tense: "Present Continuous",
    correctForm: "It is raining.",
    rule: "Podmiot + is + czasownik -ing.",
    type: "Twierdzące - Present Continuous",
    description: "It + is + raining. Pogoda w tej chwili."
  },
  {
    polish: "Ja teraz nie jem.",
    tense: "Present Continuous",
    correctForm: "I am not eating now.",
    rule: "Podmiot + am not + czasownik -ing.",
    type: "Przeczące - Present Continuous",
    description: "I + am not + eating. Negacja trwającej czynności."
  },
  {
    polish: "Czy oni śmieją się z żartu?",
    tense: "Present Continuous",
    correctForm: "Are they laughing at the joke?",
    rule: "Are + podmiot + czasownik -ing?",
    type: "Pytające - Present Continuous",
    description: "Are + they + laughing. Pytanie o aktualną reakcję."
  },
  {
    polish: "Samolot właśnie ląduje.",
    tense: "Present Continuous",
    correctForm: "The plane is landing now.",
    rule: "Podmiot + is + czasownik -ing.",
    type: "Twierdzące - Present Continuous",
    description: "The plane + is + landing. Ruch w toku."
  },
  {
    polish: "On teraz nie ogląda telewizji.",
    tense: "Present Continuous",
    correctForm: "He isn’t watching TV now.",
    rule: "Podmiot + isn’t + czasownik -ing.",
    type: "Przeczące - Present Continuous",
    description: "He + isn’t + watching. Brak czynności teraz."
  },
  {
    polish: "Czy ty rozmawiasz z nią?",
    tense: "Present Continuous",
    correctForm: "Are you talking to her?",
    rule: "Are + podmiot + czasownik -ing?",
    type: "Pytające - Present Continuous",
    description: "Are + you + talking. Pytanie o trwającą rozmowę."
  },
  {
    polish: "On uczy się do egzaminu.",
    tense: "Present Continuous",
    correctForm: "He is studying for the exam.",
    rule: "Podmiot + is + czasownik -ing.",
    type: "Twierdzące - Present Continuous",
    description: "He + is + studying. Działanie tymczasowe."
  },
  {
    polish: "My właśnie idziemy do kina.",
    tense: "Present Continuous",
    correctForm: "We are going to the cinema now.",
    rule: "Podmiot + are + czasownik -ing.",
    type: "Twierdzące - Present Continuous",
    description: "We + are + going. Akcja w trakcie."
  },
  {
    polish: "Nie pada śnieg.",
    tense: "Present Continuous",
    correctForm: "It isn’t snowing.",
    rule: "Podmiot + isn’t + czasownik -ing.",
    type: "Przeczące - Present Continuous",
    description: "It + isn’t + snowing. Pogoda - negacja."
  },
  {
    polish: "Czy dzieci teraz śpiewają?",
    tense: "Present Continuous",
    correctForm: "Are the children singing now?",
    rule: "Are + podmiot + czasownik -ing?",
    type: "Pytające - Present Continuous",
    description: "Are + the children + singing. Czynność trwająca."
  },
  {
    polish: "On teraz nie dzwoni do niej.",
    tense: "Present Continuous",
    correctForm: "He isn’t calling her now.",
    rule: "Podmiot + isn’t + czasownik -ing.",
    type: "Przeczące - Present Continuous",
    description: "He + isn’t + calling. Brak aktualnej aktywności."
  },
  {
    polish: "Ja teraz nie pracuję.",
    tense: "Present Continuous",
    correctForm: "I am not working now.",
    rule: "Podmiot + am not + czasownik -ing.",
    type: "Przeczące - Present Continuous",
    description: "I + am not + working. Tymczasowy brak działania."
  },
  {
    polish: "Czy on teraz pisze e-maila?",
    tense: "Present Continuous",
    correctForm: "Is he writing an email now?",
    rule: "Is + podmiot + czasownik -ing?",
    type: "Pytające - Present Continuous",
    description: "Is + he + writing. Pytanie o bieżącą czynność."
  },
  {
    polish: "Dzieci nie śpią.",
    tense: "Present Continuous",
    correctForm: "The children aren’t sleeping.",
    rule: "Podmiot + aren’t + czasownik -ing.",
    type: "Przeczące - Present Continuous",
    description: "The children + aren’t + sleeping. Brak działania teraz."
  },
  {
    polish: "Czy oni tańczą?",
    tense: "Present Continuous",
    correctForm: "Are they dancing?",
    rule: "Are + podmiot + czasownik -ing?",
    type: "Pytające - Present Continuous",
    description: "Are + they + dancing. Obserwowana czynność."
  },
  {
    polish: "Ona rozmawia przez telefon.",
    tense: "Present Continuous",
    correctForm: "She is talking on the phone.",
    rule: "Podmiot + is + czasownik -ing.",
    type: "Twierdzące - Present Continuous",
    description: "She + is + talking. Czynność odbywa się teraz."
  },
  {
    polish: "Pies szczeka.",
    tense: "Present Continuous",
    correctForm: "The dog is barking.",
    rule: "Podmiot + is + czasownik -ing.",
    type: "Twierdzące - Present Continuous",
    description: "The dog + is + barking. Odgłos trwający."
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


