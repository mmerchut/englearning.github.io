const sentences = [
  {
    polish: "Samolot leciał przez dwie godziny, zanim wylądował.",
    tense: "Past Perfect Continuous",
    correctForm: "The plane had been flying for two hours before it landed.",
    rule: "Podmiot + had been + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Perfect Continuous",
    description: "The plane + had been + flying. Akcja trwała przed inną akcją w przeszłości."
  },
  {
    polish: "Ona uczyła się angielskiego przez rok przed egzaminem.",
    tense: "Past Perfect Continuous",
    correctForm: "She had been studying English for a year before the exam.",
    rule: "Podmiot + had been + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Perfect Continuous",
    description: "She + had been + studying. Nauka trwała do momentu egzaminu."
  },
  {
    polish: "Pracowali nad projektem przez kilka tygodni przed prezentacją.",
    tense: "Past Perfect Continuous",
    correctForm: "They had been working on the project for weeks before the presentation.",
    rule: "Podmiot + had been + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Perfect Continuous",
    description: "They + had been + working. Ciągła praca do momentu prezentacji."
  },
  {
    polish: "Padało przez godzinę, zanim przestało.",
    tense: "Past Perfect Continuous",
    correctForm: "It had been raining for an hour before it stopped.",
    rule: "Podmiot + had been + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Perfect Continuous",
    description: "It + had been + raining. Deszcz trwał w przeszłości przez jakiś czas."
  },
  {
    polish: "Biegałem przez 30 minut, zanim się zatrzymałem.",
    tense: "Past Perfect Continuous",
    correctForm: "I had been running for 30 minutes before I stopped.",
    rule: "Podmiot + had been + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Perfect Continuous",
    description: "I + had been + running. Bieganie trwało do momentu zatrzymania."
  },
  {
    polish: "Ona czekała na autobus przez pół godziny.",
    tense: "Past Perfect Continuous",
    correctForm: "She had been waiting for the bus for half an hour.",
    rule: "Podmiot + had been + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Perfect Continuous",
    description: "She + had been + waiting. Oczekiwanie przez pewien czas przed przeszłym momentem."
  },
  {
    polish: "Gotowali przez dwie godziny przed przybyciem gości.",
    tense: "Past Perfect Continuous",
    correctForm: "They had been cooking for two hours before the guests arrived.",
    rule: "Podmiot + had been + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Perfect Continuous",
    description: "They + had been + cooking. Gotowanie trwało przed przybyciem."
  },
  {
    polish: "Uczyłem się przez całą noc przed testem.",
    tense: "Past Perfect Continuous",
    correctForm: "I had been studying all night before the test.",
    rule: "Podmiot + had been + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Perfect Continuous",
    description: "I + had been + studying. Nauka przez określony czas przed testem."
  },
  {
    polish: "Grali w piłkę przez godzinę zanim zaczęło padać.",
    tense: "Past Perfect Continuous",
    correctForm: "They had been playing football for an hour before it started raining.",
    rule: "Podmiot + had been + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Perfect Continuous",
    description: "They + had been + playing. Gra trwała przed deszczem."
  },
  {
    polish: "On pisał książkę przez kilka miesięcy przed jej wydaniem.",
    tense: "Past Perfect Continuous",
    correctForm: "He had been writing the book for several months before it was published.",
    rule: "Podmiot + had been + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Perfect Continuous",
    description: "He + had been + writing. Długotrwała czynność zakończona w przeszłości."
  },
  {
    polish: "Oni rozmawiali przez telefon przez godzinę.",
    tense: "Past Perfect Continuous",
    correctForm: "They had been talking on the phone for an hour.",
    rule: "Podmiot + had been + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Perfect Continuous",
    description: "They + had been + talking. Rozmowa trwała przed przeszłym momentem."
  },
  {
    polish: "Czekałem na ciebie przez 20 minut.",
    tense: "Past Perfect Continuous",
    correctForm: "I had been waiting for you for 20 minutes.",
    rule: "Podmiot + had been + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Perfect Continuous",
    description: "I + had been + waiting. Oczekiwanie przez określony czas."
  },
  {
    polish: "On ćwiczył codziennie przed zawodami.",
    tense: "Past Perfect Continuous",
    correctForm: "He had been training every day before the competition.",
    rule: "Podmiot + had been + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Perfect Continuous",
    description: "He + had been + training. Regularna czynność trwająca przed wydarzeniem."
  },
  {
    polish: "Mieszkała tam przez pięć lat zanim się przeprowadziła.",
    tense: "Past Perfect Continuous",
    correctForm: "She had been living there for five years before she moved.",
    rule: "Podmiot + had been + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Perfect Continuous",
    description: "She + had been + living. Długotrwałe mieszkanie zakończone przeprowadzką."
  },
  {
    polish: "On prowadził auto przez 4 godziny zanim zrobił przerwę.",
    tense: "Past Perfect Continuous",
    correctForm: "He had been driving for four hours before he took a break.",
    rule: "Podmiot + had been + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Perfect Continuous",
    description: "He + had been + driving. Jazda trwająca przed inną czynnością."
  },
  {
    polish: "Dyskutowali przez długi czas przed decyzją.",
    tense: "Past Perfect Continuous",
    correctForm: "They had been discussing for a long time before the decision.",
    rule: "Podmiot + had been + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Perfect Continuous",
    description: "They + had been + discussing. Dyskusja poprzedzająca decyzję."
  },
  {
    polish: "Pisałem e-mail, zanim zadzwoniłeś.",
    tense: "Past Perfect Continuous",
    correctForm: "I had been writing an email before you called.",
    rule: "Podmiot + had been + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Perfect Continuous",
    description: "I + had been + writing. Pisanie trwające przed telefonem."
  },
  {
    polish: "Naprawiał samochód przez godzinę zanim się poddał.",
    tense: "Past Perfect Continuous",
    correctForm: "He had been fixing the car for an hour before he gave up.",
    rule: "Podmiot + had been + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Perfect Continuous",
    description: "He + had been + fixing. Naprawa zakończona decyzją o rezygnacji."
  },
  {
    polish: "Sprzątaliśmy cały dzień przed wizytą.",
    tense: "Past Perfect Continuous",
    correctForm: "We had been cleaning all day before the visit.",
    rule: "Podmiot + had been + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Perfect Continuous",
    description: "We + had been + cleaning. Sprzątanie przed wydarzeniem."
  },
  {
    polish: "Szukał pracy przez kilka miesięcy zanim ją znalazł.",
    tense: "Past Perfect Continuous",
    correctForm: "He had been looking for a job for several months before he found one.",
    rule: "Podmiot + had been + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Perfect Continuous",
    description: "He + had been + looking. Poszukiwania przed znalezieniem."
  },
  {
    polish: "Pisali test przez godzinę zanim go oddali.",
    tense: "Past Perfect Continuous",
    correctForm: "They had been writing the test for an hour before submitting it.",
    rule: "Podmiot + had been + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Perfect Continuous",
    description: "They + had been + writing. Praca nad testem przez określony czas."
  },
  {
    polish: "Ona malowała pokój cały weekend.",
    tense: "Past Perfect Continuous",
    correctForm: "She had been painting the room all weekend.",
    rule: "Podmiot + had been + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Perfect Continuous",
    description: "She + had been + painting. Ciągła czynność trwająca przez weekend."
  },
  {
    polish: "Uczyli się razem przez kilka tygodni.",
    tense: "Past Perfect Continuous",
    correctForm: "They had been studying together for a few weeks.",
    rule: "Podmiot + had been + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Perfect Continuous",
    description: "They + had been + studying. Nauka przed innym momentem w przeszłości."
  },
  {
    polish: "On naprawiał rower przed wyjazdem.",
    tense: "Past Perfect Continuous",
    correctForm: "He had been repairing the bike before the trip.",
    rule: "Podmiot + had been + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Perfect Continuous",
    description: "He + had been + repairing. Czynność przygotowawcza."
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


