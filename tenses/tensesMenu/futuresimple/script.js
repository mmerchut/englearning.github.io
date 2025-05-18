const sentences = [
  {
    polish: "Jutro pójdę do kina.",
    tense: "Future Simple",
    correctForm: "I will go to the cinema tomorrow.",
    rule: "Podmiot + will + podstawowa forma czasownika.",
    type: "Twierdzące - Future Simple",
    description: "I + will + go. Plany lub decyzje na przyszłość."
  },
  {
    polish: "On będzie pracował jutro.",
    tense: "Future Simple",
    correctForm: "He will work tomorrow.",
    rule: "Podmiot + will + czasownik w formie podstawowej.",
    type: "Twierdzące - Future Simple",
    description: "He + will + work. Przyszłe działanie."
  },
  {
    polish: "Czy ty pojedziesz na wakacje?",
    tense: "Future Simple",
    correctForm: "Will you go on vacation?",
    rule: "Will + podmiot + czasownik w formie podstawowej?",
    type: "Pytające - Future Simple",
    description: "Will + you + go. Pytanie o przyszłość."
  },
  {
    polish: "Nie będę tego robił.",
    tense: "Future Simple",
    correctForm: "I will not (won’t) do it.",
    rule: "Podmiot + will not + czasownik w formie podstawowej.",
    type: "Przeczące - Future Simple",
    description: "I + won’t + do. Zaprzeczenie przyszłej czynności."
  },
  {
    polish: "Oni pomogą nam później.",
    tense: "Future Simple",
    correctForm: "They will help us later.",
    rule: "Podmiot + will + czasownik.",
    type: "Twierdzące - Future Simple",
    description: "They + will + help. Obietnica lub plan."
  },
  {
    polish: "Czy ona zadzwoni do mnie?",
    tense: "Future Simple",
    correctForm: "Will she call me?",
    rule: "Will + podmiot + czasownik?",
    type: "Pytające - Future Simple",
    description: "Will + she + call. Pytanie o przyszłe działanie."
  },
  {
    polish: "Nie pójdziemy tam jutro.",
    tense: "Future Simple",
    correctForm: "We won’t go there tomorrow.",
    rule: "Podmiot + will not + czasownik.",
    type: "Przeczące - Future Simple",
    description: "We + won’t + go. Zaprzeczenie przyszłości."
  },
  {
    polish: "On zrobi to za godzinę.",
    tense: "Future Simple",
    correctForm: "He will do it in an hour.",
    rule: "Podmiot + will + czasownik.",
    type: "Twierdzące - Future Simple",
    description: "He + will + do. Przewidywanie lub obietnica."
  },
  {
    polish: "Czy wy przyjdziecie na spotkanie?",
    tense: "Future Simple",
    correctForm: "Will you come to the meeting?",
    rule: "Will + podmiot + czasownik?",
    type: "Pytające - Future Simple",
    description: "Will + you + come. Pytanie o przyszłość."
  },
  {
    polish: "Nie zjem teraz obiadu.",
    tense: "Future Simple",
    correctForm: "I won’t eat dinner now.",
    rule: "Podmiot + will not + czasownik.",
    type: "Przeczące - Future Simple",
    description: "I + won’t + eat. Zaprzeczenie czynności."
  },
  {
    polish: "Ona spotka się z nami jutro.",
    tense: "Future Simple",
    correctForm: "She will meet us tomorrow.",
    rule: "Podmiot + will + czasownik.",
    type: "Twierdzące - Future Simple",
    description: "She + will + meet. Przyszłe wydarzenie."
  },
  {
    polish: "Czy on przyjedzie na czas?",
    tense: "Future Simple",
    correctForm: "Will he arrive on time?",
    rule: "Will + podmiot + czasownik?",
    type: "Pytające - Future Simple",
    description: "Will + he + arrive. Pytanie o przyszłość."
  },
  {
    polish: "Nie będziemy oglądać filmu dziś wieczorem.",
    tense: "Future Simple",
    correctForm: "We won’t watch the movie tonight.",
    rule: "Podmiot + will not + czasownik.",
    type: "Przeczące - Future Simple",
    description: "We + won’t + watch. Zaprzeczenie planu."
  },
  {
    polish: "Ja zadzwonię do ciebie później.",
    tense: "Future Simple",
    correctForm: "I will call you later.",
    rule: "Podmiot + will + czasownik.",
    type: "Twierdzące - Future Simple",
    description: "I + will + call. Obietnica."
  },
  {
    polish: "Czy oni zrozumieją to zadanie?",
    tense: "Future Simple",
    correctForm: "Will they understand the task?",
    rule: "Will + podmiot + czasownik?",
    type: "Pytające - Future Simple",
    description: "Will + they + understand. Pytanie o zdolność."
  },
  {
    polish: "On nie przyjdzie na imprezę.",
    tense: "Future Simple",
    correctForm: "He won’t come to the party.",
    rule: "Podmiot + will not + czasownik.",
    type: "Przeczące - Future Simple",
    description: "He + won’t + come. Zaprzeczenie przyszłego działania."
  },
  {
    polish: "Oni zbudują nowy dom w przyszłym roku.",
    tense: "Future Simple",
    correctForm: "They will build a new house next year.",
    rule: "Podmiot + will + czasownik.",
    type: "Twierdzące - Future Simple",
    description: "They + will + build. Plan na przyszłość."
  },
  {
    polish: "Czy ty nauczysz się tego na czas?",
    tense: "Future Simple",
    correctForm: "Will you learn this on time?",
    rule: "Will + podmiot + czasownik?",
    type: "Pytające - Future Simple",
    description: "Will + you + learn. Pytanie o rezultat."
  },
  {
    polish: "Nie będę pił kawy po południu.",
    tense: "Future Simple",
    correctForm: "I won’t drink coffee in the afternoon.",
    rule: "Podmiot + will not + czasownik.",
    type: "Przeczące - Future Simple",
    description: "I + won’t + drink. Zaprzeczenie przyszłej czynności."
  },
  {
    polish: "On pomoże ci z zadaniem.",
    tense: "Future Simple",
    correctForm: "He will help you with the task.",
    rule: "Podmiot + will + czasownik.",
    type: "Twierdzące - Future Simple",
    description: "He + will + help. Obietnica pomocy."
  },
  {
    polish: "Czy my pojedziemy razem na wycieczkę?",
    tense: "Future Simple",
    correctForm: "Will we go on a trip together?",
    rule: "Will + podmiot + czasownik?",
    type: "Pytające - Future Simple",
    description: "Will + we + go. Pytanie o plan."
  },
  {
    polish: "Nie zobaczysz tego filmu.",
    tense: "Future Simple",
    correctForm: "You won’t see this movie.",
    rule: "Podmiot + will not + czasownik.",
    type: "Przeczące - Future Simple",
    description: "You + won’t + see. Zaprzeczenie przyszłej czynności."
  },
  {
    polish: "Ona odwiedzi nas w weekend.",
    tense: "Future Simple",
    correctForm: "She will visit us on the weekend.",
    rule: "Podmiot + will + czasownik.",
    type: "Twierdzące - Future Simple",
    description: "She + will + visit. Plan na przyszłość."
  },
  {
    polish: "Czy oni będą gotowi na czas?",
    tense: "Future Simple",
    correctForm: "Will they be ready on time?",
    rule: "Will + podmiot + czasownik?",
    type: "Pytające - Future Simple",
    description: "Will + they + be. Pytanie o przyszły stan."
  },
  {
    polish: "Nie zadzwonię do niego jutro.",
    tense: "Future Simple",
    correctForm: "I won’t call him tomorrow.",
    rule: "Podmiot + will not + czasownik.",
    type: "Przeczące - Future Simple",
    description: "I + won’t + call. Zaprzeczenie."
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


