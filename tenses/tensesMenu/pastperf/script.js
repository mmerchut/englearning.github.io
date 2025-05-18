const sentences = [
    // Present Simple
 {
    polish: "Samolot już wylądował, gdy przyjechaliśmy.",
    tense: "Past Perfect",
    correctForm: "The plane had already landed when we arrived.",
    rule: "Podmiot + had + czasownik w 3. formie.",
    type: "Twierdzące - Past Perfect",
    description: "The plane + had + landed. Czynność zakończona przed inną przeszłą czynnością."
  },
  {
    polish: "Ona zjadła śniadanie przed wyjściem.",
    tense: "Past Perfect",
    correctForm: "She had eaten breakfast before leaving.",
    rule: "Podmiot + had + czasownik w 3. formie.",
    type: "Twierdzące - Past Perfect",
    description: "She + had + eaten. Czynność wcześniejsza w przeszłości."
  },
  {
    polish: "Poszliśmy do kina, które już się zaczęło.",
    tense: "Past Perfect",
    correctForm: "We went to the cinema that had already started.",
    rule: "Podmiot + had + czasownik w 3. formie.",
    type: "Twierdzące - Past Perfect",
    description: "The cinema + had started. Film rozpoczął się przed naszym przyjściem."
  },
  {
    polish: "On kupił nowy samochód przed przeprowadzką.",
    tense: "Past Perfect",
    correctForm: "He had bought a new car before moving.",
    rule: "Podmiot + had + czasownik w 3. formie.",
    type: "Twierdzące - Past Perfect",
    description: "He + had + bought. Zakup przed przeprowadzką."
  },
  {
    polish: "Dzieci już się pobawiły, zanim wróciliśmy.",
    tense: "Past Perfect",
    correctForm: "The children had already played before we came back.",
    rule: "Podmiot + had + czasownik w 3. formie.",
    type: "Twierdzące - Past Perfect",
    description: "The children + had + played. Czynność wcześniejsza niż nasz powrót."
  },
  {
    polish: "Zrobiłem zadanie domowe, zanim mama wróciła.",
    tense: "Past Perfect",
    correctForm: "I had done my homework before mom came back.",
    rule: "Podmiot + had + czasownik w 3. formie.",
    type: "Twierdzące - Past Perfect",
    description: "I + had + done. Ukończona czynność przed inną przeszłą."
  },
  {
    polish: "Przeczytała książkę przed spotkaniem.",
    tense: "Past Perfect",
    correctForm: "She had read the book before the meeting.",
    rule: "Podmiot + had + czasownik w 3. formie.",
    type: "Twierdzące - Past Perfect",
    description: "She + had + read. Czytanie ukończone przed spotkaniem."
  },
  {
    polish: "Otworzyli drzwi, które wcześniej zamknęli.",
    tense: "Past Perfect",
    correctForm: "They opened the door they had locked earlier.",
    rule: "Podmiot + had + czasownik w 3. formie.",
    type: "Twierdzące - Past Perfect",
    description: "They + had + locked. Zamknięcie przed otwarciem."
  },
  {
    polish: "Zadzwonił, zanim wyszedłem z domu.",
    tense: "Past Perfect",
    correctForm: "He had called before I left the house.",
    rule: "Podmiot + had + czasownik w 3. formie.",
    type: "Twierdzące - Past Perfect",
    description: "He + had + called. Telefon przed moim wyjściem."
  },
  {
    polish: "Napisała list zanim pojechała na pocztę.",
    tense: "Past Perfect",
    correctForm: "She had written the letter before she went to the post office.",
    rule: "Podmiot + had + czasownik w 3. formie.",
    type: "Twierdzące - Past Perfect",
    description: "She + had + written. Pisanie listu poprzedzało wizytę na poczcie."
  },
  {
    polish: "Spotkaliśmy się, ale już wcześniej rozmawialiśmy online.",
    tense: "Past Perfect",
    correctForm: "We met, but we had already talked online.",
    rule: "Podmiot + had + czasownik w 3. formie.",
    type: "Twierdzące - Past Perfect",
    description: "We + had + talked. Wcześniejsza rozmowa."
  },
  {
    polish: "Zgubiłem klucze, które wcześniej znalazłem.",
    tense: "Past Perfect",
    correctForm: "I had lost the keys I had found earlier.",
    rule: "Podmiot + had + czasownik w 3. formie.",
    type: "Twierdzące - Past Perfect",
    description: "I + had + found. Znalezienie poprzedziło zgubienie."
  },
  {
    polish: "Zamknął okno, które wcześniej otworzył.",
    tense: "Past Perfect",
    correctForm: "He had closed the window he had opened earlier.",
    rule: "Podmiot + had + czasownik w 3. formie.",
    type: "Twierdzące - Past Perfect",
    description: "He + had + opened. Otwarcie przed zamknięciem."
  },
  {
    polish: "Ugotowaliśmy obiad wcześniej.",
    tense: "Past Perfect",
    correctForm: "We had cooked dinner earlier.",
    rule: "Podmiot + had + czasownik w 3. formie.",
    type: "Twierdzące - Past Perfect",
    description: "We + had + cooked. Gotowanie zakończone przed inną czynnością."
  },
  {
    polish: "Ona obejrzała film przed kolacją.",
    tense: "Past Perfect",
    correctForm: "She had watched the movie before dinner.",
    rule: "Podmiot + had + czasownik w 3. formie.",
    type: "Twierdzące - Past Perfect",
    description: "She + had + watched. Oglądanie poprzedziło kolację."
  },
  {
    polish: "Pojechaliśmy do Krakowa, którego wcześniej nie odwiedziliśmy.",
    tense: "Past Perfect",
    correctForm: "We went to Krakow, which we had not visited before.",
    rule: "Podmiot + had + czasownik w 3. formie.",
    type: "Twierdzące - Past Perfect",
    description: "We + had not + visited. Brak wizyty przed wyjazdem."
  },
  {
    polish: "Wypił herbatę, którą wcześniej zaparzył.",
    tense: "Past Perfect",
    correctForm: "He had drunk the tea he had made.",
    rule: "Podmiot + had + czasownik w 3. formie.",
    type: "Twierdzące - Past Perfect",
    description: "He + had + made. Zaparzenie przed wypiciem."
  },
  {
    polish: "Zostali w domu, bo wcześniej źle się czuli.",
    tense: "Past Perfect",
    correctForm: "They had stayed home because they had felt unwell.",
    rule: "Podmiot + had + czasownik w 3. formie.",
    type: "Twierdzące - Past Perfect",
    description: "They + had + felt. Złe samopoczucie poprzedziło decyzję."
  },
  {
    polish: "Zadali pytanie, które wcześniej przygotowali.",
    tense: "Past Perfect",
    correctForm: "They had asked a question they had prepared before.",
    rule: "Podmiot + had + czasownik w 3. formie.",
    type: "Twierdzące - Past Perfect",
    description: "They + had + prepared. Przygotowanie poprzedza pytanie."
  },
  {
    polish: "Naprawił rower przed zawodami.",
    tense: "Past Perfect",
    correctForm: "He had fixed the bike before the race.",
    rule: "Podmiot + had + czasownik w 3. formie.",
    type: "Twierdzące - Past Perfect",
    description: "He + had + fixed. Naprawa zakończona przed wyścigiem."
  },
  {
    polish: "Zatańczyli razem wcześniej.",
    tense: "Past Perfect",
    correctForm: "They had danced together before.",
    rule: "Podmiot + had + czasownik w 3. formie.",
    type: "Twierdzące - Past Perfect",
    description: "They + had + danced. Taniec w przeszłości, przed innym zdarzeniem."
  },
  {
    polish: "Zaczęli pracę, którą wcześniej zaplanowali.",
    tense: "Past Perfect",
    correctForm: "They had started the work they had planned.",
    rule: "Podmiot + had + czasownik w 3. formie.",
    type: "Twierdzące - Past Perfect",
    description: "They + had + planned. Planowanie przed rozpoczęciem pracy."
  },
  {
    polish: "Wysłałem e-mail przed spotkaniem.",
    tense: "Past Perfect",
    correctForm: "I had sent the email before the meeting.",
    rule: "Podmiot + had + czasownik w 3. formie.",
    type: "Twierdzące - Past Perfect",
    description: "I + had + sent. Wysłanie poprzedziło spotkanie."
  },
  {
    polish: "Zasnął, bo wcześniej był zmęczony.",
    tense: "Past Perfect",
    correctForm: "He had fallen asleep because he had been tired.",
    rule: "Podmiot + had + czasownik w 3. formie.",
    type: "Twierdzące - Past Perfect",
    description: "He + had + been. Zmęczenie poprzedziło sen."
  },
  {
    polish: "Zbudowali dom, który wcześniej zaprojektowali.",
    tense: "Past Perfect",
    correctForm: "They had built the house they had designed.",
    rule: "Podmiot + had + czasownik w 3. formie.",
    type: "Twierdzące - Past Perfect",
    description: "They + had + designed. Projekt przed budową."
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


