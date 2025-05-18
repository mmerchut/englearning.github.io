const sentences = [
   {
    polish: "Ona właśnie zjadła obiad.",
    tense: "Present Perfect",
    correctForm: "She has just eaten lunch.",
    rule: "Podmiot + have/has + czasownik w III formie.",
    type: "Twierdzące - Present Perfect",
    description: "She + has + eaten. Rezultat niedawnej czynności."
  },
  {
    polish: "Ja już widziałem ten film.",
    tense: "Present Perfect",
    correctForm: "I have already seen this movie.",
    rule: "Podmiot + have + III forma.",
    type: "Twierdzące - Present Perfect",
    description: "I + have + seen. Doświadczenie życiowe."
  },
  {
    polish: "Oni skończyli pracę.",
    tense: "Present Perfect",
    correctForm: "They have finished work.",
    rule: "Podmiot + have + III forma.",
    type: "Twierdzące - Present Perfect",
    description: "They + have + finished. Rezultat działania."
  },
  {
    polish: "On jeszcze nie wrócił.",
    tense: "Present Perfect",
    correctForm: "He hasn’t come back yet.",
    rule: "Podmiot + hasn’t/haven’t + III forma.",
    type: "Przeczące - Present Perfect",
    description: "He + hasn’t + come. Czynność jeszcze się nie zakończyła."
  },
  {
    polish: "Czy kiedykolwiek byłeś w Paryżu?",
    tense: "Present Perfect",
    correctForm: "Have you ever been to Paris?",
    rule: "Have/Has + podmiot + III forma?",
    type: "Pytające - Present Perfect",
    description: "Have + you + been. Pytanie o doświadczenie."
  },
  {
    polish: "On właśnie odszedł.",
    tense: "Present Perfect",
    correctForm: "He has just left.",
    rule: "Podmiot + has + III forma.",
    type: "Twierdzące - Present Perfect",
    description: "He + has + left. Niedawno zakończona czynność."
  },
  {
    polish: "Zgubiłem klucze.",
    tense: "Present Perfect",
    correctForm: "I have lost my keys.",
    rule: "Podmiot + have + III forma.",
    type: "Twierdzące - Present Perfect",
    description: "I + have + lost. Aktualna sytuacja będąca skutkiem."
  },
  {
    polish: "Czy skończyliście projekt?",
    tense: "Present Perfect",
    correctForm: "Have you finished the project?",
    rule: "Have + podmiot + III forma?",
    type: "Pytające - Present Perfect",
    description: "Have + you + finished. Pytanie o zakończony proces."
  },
  {
    polish: "Jeszcze nie przeczytałem tej książki.",
    tense: "Present Perfect",
    correctForm: "I haven’t read this book yet.",
    rule: "Podmiot + haven’t/hasn’t + III forma.",
    type: "Przeczące - Present Perfect",
    description: "I + haven’t + read. Oczekiwany, niezrealizowany rezultat."
  },
  {
    polish: "Ona mieszka tu od 2010 roku.",
    tense: "Present Perfect",
    correctForm: "She has lived here since 2010.",
    rule: "Podmiot + has + III forma + since/for.",
    type: "Twierdzące - Present Perfect",
    description: "She + has + lived. Czynność rozpoczęta w przeszłości i trwająca."
  },
  {
    polish: "Czy coś się zmieniło?",
    tense: "Present Perfect",
    correctForm: "Has anything changed?",
    rule: "Has + podmiot + III forma?",
    type: "Pytające - Present Perfect",
    description: "Has + anything + changed. Pytanie o nowy stan."
  },
  {
    polish: "Nie spotkaliśmy ich wcześniej.",
    tense: "Present Perfect",
    correctForm: "We haven’t met them before.",
    rule: "Podmiot + haven’t + III forma.",
    type: "Przeczące - Present Perfect",
    description: "We + haven’t + met. Brak doświadczenia."
  },
  {
    polish: "On zbudował nowy dom.",
    tense: "Present Perfect",
    correctForm: "He has built a new house.",
    rule: "Podmiot + has + III forma.",
    type: "Twierdzące - Present Perfect",
    description: "He + has + built. Widoczny rezultat."
  },
  {
    polish: "Oni właśnie przyjechali.",
    tense: "Present Perfect",
    correctForm: "They have just arrived.",
    rule: "Podmiot + have + III forma.",
    type: "Twierdzące - Present Perfect",
    description: "They + have + arrived. Akcja niedawno zakończona."
  },
  {
    polish: "Czy on kiedykolwiek grał w tenisa?",
    tense: "Present Perfect",
    correctForm: "Has he ever played tennis?",
    rule: "Has + podmiot + III forma?",
    type: "Pytające - Present Perfect",
    description: "Has + he + played. Pytanie o doświadczenie."
  },
  {
    polish: "Nie zjadłem jeszcze śniadania.",
    tense: "Present Perfect",
    correctForm: "I haven’t eaten breakfast yet.",
    rule: "Podmiot + haven’t + III forma.",
    type: "Przeczące - Present Perfect",
    description: "I + haven’t + eaten. Brak wykonanej czynności."
  },
  {
    polish: "On zna ją od dzieciństwa.",
    tense: "Present Perfect",
    correctForm: "He has known her since childhood.",
    rule: "Podmiot + has + III forma + since.",
    type: "Twierdzące - Present Perfect",
    description: "He + has + known. Długotrwała relacja."
  },
  {
    polish: "Czy przeczytałeś mój e-mail?",
    tense: "Present Perfect",
    correctForm: "Have you read my email?",
    rule: "Have + podmiot + III forma?",
    type: "Pytające - Present Perfect",
    description: "Have + you + read. Pytanie o zakończoną czynność."
  },
  {
    polish: "Nie napisał jeszcze raportu.",
    tense: "Present Perfect",
    correctForm: "He hasn’t written the report yet.",
    rule: "Podmiot + hasn’t + III forma.",
    type: "Przeczące - Present Perfect",
    description: "He + hasn’t + written. Oczekiwana, opóźniona czynność."
  },
  {
    polish: "Oni odwiedzili wiele krajów.",
    tense: "Present Perfect",
    correctForm: "They have visited many countries.",
    rule: "Podmiot + have + III forma.",
    type: "Twierdzące - Present Perfect",
    description: "They + have + visited. Doświadczenie życiowe."
  },
  {
    polish: "Czy kiedykolwiek jadłeś sushi?",
    tense: "Present Perfect",
    correctForm: "Have you ever eaten sushi?",
    rule: "Have + podmiot + III forma?",
    type: "Pytające - Present Perfect",
    description: "Have + you + eaten. Pytanie o kulinarne doświadczenie."
  },
  {
    polish: "Zawsze chciałem tam pojechać.",
    tense: "Present Perfect",
    correctForm: "I have always wanted to go there.",
    rule: "Podmiot + have + III forma.",
    type: "Twierdzące - Present Perfect",
    description: "I + have + wanted. Trwałe pragnienie."
  },
  {
    polish: "Ona nigdy nie była w Hiszpanii.",
    tense: "Present Perfect",
    correctForm: "She has never been to Spain.",
    rule: "Podmiot + has + never + III forma.",
    type: "Przeczące - Present Perfect",
    description: "She + has + never + been. Brak doświadczenia."
  },
  {
    polish: "Czy oni zakończyli negocjacje?",
    tense: "Present Perfect",
    correctForm: "Have they finished the negotiations?",
    rule: "Have + podmiot + III forma?",
    type: "Pytające - Present Perfect",
    description: "Have + they + finished. Pytanie o rezultat."
  },
  {
    polish: "Nie widziałem cię od lat.",
    tense: "Present Perfect",
    correctForm: "I haven’t seen you for years.",
    rule: "Podmiot + haven’t + III forma + for.",
    type: "Przeczące - Present Perfect",
    description: "I + haven’t + seen. Czas trwania od przeszłości do teraz."
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


