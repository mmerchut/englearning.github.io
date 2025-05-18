const sentences = [
  {
    polish: "Samolot wylądował.",
    tense: "Past Simple",
    correctForm: "The plane landed.",
    rule: "Podmiot + czasownik w 2. formie.",
    type: "Twierdzące - Past Simple",
    description: "The plane + landed. Zakończony ruch w przeszłości."
  },
  {
    polish: "Ona zjadła śniadanie.",
    tense: "Past Simple",
    correctForm: "She ate breakfast.",
    rule: "Podmiot + czasownik w 2. formie.",
    type: "Twierdzące - Past Simple",
    description: "She + ate + breakfast. Ukończona czynność w przeszłości."
  },
  {
    polish: "Poszliśmy do kina.",
    tense: "Past Simple",
    correctForm: "We went to the cinema.",
    rule: "Podmiot + czasownik w 2. formie.",
    type: "Twierdzące - Past Simple",
    description: "We + went + to the cinema. Jednorazowe zdarzenie w przeszłości."
  },
  {
    polish: "On kupił nowy samochód.",
    tense: "Past Simple",
    correctForm: "He bought a new car.",
    rule: "Podmiot + czasownik w 2. formie.",
    type: "Twierdzące - Past Simple",
    description: "He + bought + a new car. Dokonany zakup w przeszłości."
  },
  {
    polish: "Dzieci bawiły się w parku.",
    tense: "Past Simple",
    correctForm: "The children played in the park.",
    rule: "Podmiot + czasownik w 2. formie.",
    type: "Twierdzące - Past Simple",
    description: "The children + played + in the park. Zakończona czynność."
  },
  {
    polish: "Zrobiłem zadanie domowe.",
    tense: "Past Simple",
    correctForm: "I did my homework.",
    rule: "Podmiot + czasownik w 2. formie.",
    type: "Twierdzące - Past Simple",
    description: "I + did + my homework. Skończone zadanie w przeszłości."
  },
  {
    polish: "Przeczytała książkę.",
    tense: "Past Simple",
    correctForm: "She read a book.",
    rule: "Podmiot + czasownik w 2. formie.",
    type: "Twierdzące - Past Simple",
    description: "She + read + a book. Czynność dokonana."
  },
  {
    polish: "Otworzyli drzwi.",
    tense: "Past Simple",
    correctForm: "They opened the door.",
    rule: "Podmiot + czasownik w 2. formie.",
    type: "Twierdzące - Past Simple",
    description: "They + opened + the door. Prosta czynność w przeszłości."
  },
  {
    polish: "Zadzwonił do mamy.",
    tense: "Past Simple",
    correctForm: "He called his mom.",
    rule: "Podmiot + czasownik w 2. formie.",
    type: "Twierdzące - Past Simple",
    description: "He + called + his mom. Czynność zakończona."
  },
  {
    polish: "Napisała list.",
    tense: "Past Simple",
    correctForm: "She wrote a letter.",
    rule: "Podmiot + czasownik w 2. formie.",
    type: "Twierdzące - Past Simple",
    description: "She + wrote + a letter. Skończona czynność pisania."
  },
  {
    polish: "Spotkaliśmy się w kawiarni.",
    tense: "Past Simple",
    correctForm: "We met at the café.",
    rule: "Podmiot + czasownik w 2. formie.",
    type: "Twierdzące - Past Simple",
    description: "We + met + at the café. Jednorazowe spotkanie."
  },
  {
    polish: "Zgubiłem klucze.",
    tense: "Past Simple",
    correctForm: "I lost my keys.",
    rule: "Podmiot + czasownik w 2. formie.",
    type: "Twierdzące - Past Simple",
    description: "I + lost + my keys. Zdarzenie z przeszłości."
  },
  {
    polish: "Zamknął okno.",
    tense: "Past Simple",
    correctForm: "He closed the window.",
    rule: "Podmiot + czasownik w 2. formie.",
    type: "Twierdzące - Past Simple",
    description: "He + closed + the window. Jednorazowe działanie."
  },
  {
    polish: "Ugotowaliśmy obiad.",
    tense: "Past Simple",
    correctForm: "We cooked dinner.",
    rule: "Podmiot + czasownik w 2. formie.",
    type: "Twierdzące - Past Simple",
    description: "We + cooked + dinner. Czynność zakończona."
  },
  {
    polish: "Ona obejrzała film.",
    tense: "Past Simple",
    correctForm: "She watched a movie.",
    rule: "Podmiot + czasownik w 2. formie.",
    type: "Twierdzące - Past Simple",
    description: "She + watched + a movie. Skończona czynność oglądania."
  },
  {
    polish: "Pojechaliśmy do Krakowa.",
    tense: "Past Simple",
    correctForm: "We went to Krakow.",
    rule: "Podmiot + czasownik w 2. formie.",
    type: "Twierdzące - Past Simple",
    description: "We + went + to Krakow. Wycieczka w przeszłości."
  },
  {
    polish: "Wypił herbatę.",
    tense: "Past Simple",
    correctForm: "He drank tea.",
    rule: "Podmiot + czasownik w 2. formie.",
    type: "Twierdzące - Past Simple",
    description: "He + drank + tea. Prosta czynność."
  },
  {
    polish: "Zostali w domu.",
    tense: "Past Simple",
    correctForm: "They stayed at home.",
    rule: "Podmiot + czasownik w 2. formie.",
    type: "Twierdzące - Past Simple",
    description: "They + stayed + at home. Opis zachowania w przeszłości."
  },
  {
    polish: "Zadali pytanie.",
    tense: "Past Simple",
    correctForm: "They asked a question.",
    rule: "Podmiot + czasownik w 2. formie.",
    type: "Twierdzące - Past Simple",
    description: "They + asked + a question. Zakończona interakcja."
  },
  {
    polish: "Naprawił rower.",
    tense: "Past Simple",
    correctForm: "He fixed the bike.",
    rule: "Podmiot + czasownik w 2. formie.",
    type: "Twierdzące - Past Simple",
    description: "He + fixed + the bike. Jednorazowa czynność w przeszłości."
  },
  {
    polish: "Zatańczyli razem.",
    tense: "Past Simple",
    correctForm: "They danced together.",
    rule: "Podmiot + czasownik w 2. formie.",
    type: "Twierdzące - Past Simple",
    description: "They + danced + together. Ukończona czynność taneczna."
  },
  {
    polish: "Zaczęli pracę o ósmej.",
    tense: "Past Simple",
    correctForm: "They started work at eight.",
    rule: "Podmiot + czasownik w 2. formie.",
    type: "Twierdzące - Past Simple",
    description: "They + started + work at eight. Konkretna godzina w przeszłości."
  },
  {
    polish: "Wysłałem e-mail.",
    tense: "Past Simple",
    correctForm: "I sent an email.",
    rule: "Podmiot + czasownik w 2. formie.",
    type: "Twierdzące - Past Simple",
    description: "I + sent + an email. Czynność zakończona."
  },
  {
    polish: "Zasnął na kanapie.",
    tense: "Past Simple",
    correctForm: "He fell asleep on the couch.",
    rule: "Podmiot + czasownik w 2. formie.",
    type: "Twierdzące - Past Simple",
    description: "He + fell asleep + on the couch. Zdarzenie w przeszłości."
  },
  {
    polish: "Zbudowali dom.",
    tense: "Past Simple",
    correctForm: "They built a house.",
    rule: "Podmiot + czasownik w 2. formie.",
    type: "Twierdzące - Past Simple",
    description: "They + built + a house. Zakończona budowa."
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


