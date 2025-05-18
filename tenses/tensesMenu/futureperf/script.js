const sentences = [
  {
    polish: "Do jutra skończę ten raport.",
    tense: "Future Perfect",
    correctForm: "I will have finished this report by tomorrow.",
    rule: "Podmiot + will + have + III forma czasownika (past participle).",
    type: "Twierdzące - Future Perfect",
    description: "I + will + have + finished. Czynność zakończona przed określonym momentem w przyszłości."
  },
  {
    polish: "Ona już wyjdzie, kiedy przyjedziesz.",
    tense: "Future Perfect",
    correctForm: "She will have left by the time you arrive.",
    rule: "Podmiot + will + have + III forma czasownika.",
    type: "Twierdzące - Future Perfect",
    description: "She + will + have + left. Zakończona czynność w przyszłości."
  },
  {
    polish: "Czy oni zdążą skończyć projekt do piątku?",
    tense: "Future Perfect",
    correctForm: "Will they have finished the project by Friday?",
    rule: "Will + podmiot + have + III forma czasownika?",
    type: "Pytające - Future Perfect",
    description: "Will + they + have + finished. Pytanie o ukończenie przed przyszłym momentem."
  },
  {
    polish: "Nie będę jeszcze przeczytał książki do jutra.",
    tense: "Future Perfect",
    correctForm: "I will not (won’t) have read the book by tomorrow.",
    rule: "Podmiot + will not + have + III forma czasownika.",
    type: "Przeczące - Future Perfect",
    description: "I + won’t + have + read. Zaprzeczenie ukończenia czynności."
  },
  {
    polish: "My ukończymy pracę do końca dnia.",
    tense: "Future Perfect",
    correctForm: "We will have completed the work by the end of the day.",
    rule: "Podmiot + will + have + III forma czasownika.",
    type: "Twierdzące - Future Perfect",
    description: "We + will + have + completed. Zakończenie czynności."
  },
  {
    polish: "Czy ty zjesz cały obiad do godziny 8?",
    tense: "Future Perfect",
    correctForm: "Will you have eaten all the dinner by 8 o’clock?",
    rule: "Will + podmiot + have + III forma czasownika?",
    type: "Pytające - Future Perfect",
    description: "Will + you + have + eaten. Pytanie o zakończenie czynności."
  },
  {
    polish: "Oni nie zakończą zadania przed naszym przybyciem.",
    tense: "Future Perfect",
    correctForm: "They won’t have finished the task before we arrive.",
    rule: "Podmiot + will not + have + III forma czasownika.",
    type: "Przeczące - Future Perfect",
    description: "They + won’t + have + finished. Zaprzeczenie ukończenia."
  },
  {
    polish: "On skończy naukę do końca tygodnia.",
    tense: "Future Perfect",
    correctForm: "He will have finished studying by the end of the week.",
    rule: "Podmiot + will + have + III forma czasownika.",
    type: "Twierdzące - Future Perfect",
    description: "He + will + have + finished. Czynność zakończona w przyszłości."
  },
  {
    polish: "Czy wy już będziecie przygotowani na czas?",
    tense: "Future Perfect",
    correctForm: "Will you have been ready on time?",
    rule: "Will + podmiot + have + III forma czasownika?",
    type: "Pytające - Future Perfect",
    description: "Will + you + have + been. Pytanie o stan zakończony w przyszłości."
  },
  {
    polish: "Nie zdążę napisać listu do jutra.",
    tense: "Future Perfect",
    correctForm: "I won’t have written the letter by tomorrow.",
    rule: "Podmiot + will not + have + III forma czasownika.",
    type: "Przeczące - Future Perfect",
    description: "I + won’t + have + written. Zaprzeczenie ukończenia."
  },
  {
    polish: "Ona już skończy pracę, kiedy zadzwonisz.",
    tense: "Future Perfect",
    correctForm: "She will have finished work when you call.",
    rule: "Podmiot + will + have + III forma czasownika.",
    type: "Twierdzące - Future Perfect",
    description: "She + will + have + finished. Zakończenie czynności."
  },
  {
    polish: "Czy oni skończą budowę przed zimą?",
    tense: "Future Perfect",
    correctForm: "Will they have completed the construction before winter?",
    rule: "Will + podmiot + have + III forma czasownika?",
    type: "Pytające - Future Perfect",
    description: "Will + they + have + completed. Pytanie o ukończenie."
  },
  {
    polish: "My nie ukończymy projektu do poniedziałku.",
    tense: "Future Perfect",
    correctForm: "We won’t have finished the project by Monday.",
    rule: "Podmiot + will not + have + III forma czasownika.",
    type: "Przeczące - Future Perfect",
    description: "We + won’t + have + finished. Zaprzeczenie ukończenia."
  },
  {
    polish: "Ja przeczytam tę książkę do końca miesiąca.",
    tense: "Future Perfect",
    correctForm: "I will have read this book by the end of the month.",
    rule: "Podmiot + will + have + III forma czasownika.",
    type: "Twierdzące - Future Perfect",
    description: "I + will + have + read. Ukończenie w przyszłości."
  },
  {
    polish: "Czy ona już zrozumie ten temat do zajęć?",
    tense: "Future Perfect",
    correctForm: "Will she have understood this topic by the class?",
    rule: "Will + podmiot + have + III forma czasownika?",
    type: "Pytające - Future Perfect",
    description: "Will + she + have + understood. Pytanie o efekt w przyszłości."
  },
  {
    polish: "Oni nie skończą pracy przed terminem.",
    tense: "Future Perfect",
    correctForm: "They won’t have finished the work before the deadline.",
    rule: "Podmiot + will not + have + III forma czasownika.",
    type: "Przeczące - Future Perfect",
    description: "They + won’t + have + finished. Zaprzeczenie."
  },
  {
    polish: "On skończy naprawę auta do wieczora.",
    tense: "Future Perfect",
    correctForm: "He will have fixed the car by the evening.",
    rule: "Podmiot + will + have + III forma czasownika.",
    type: "Twierdzące - Future Perfect",
    description: "He + will + have + fixed. Zakończenie czynności."
  },
  {
    polish: "Czy wy zorganizujecie wszystko przed imprezą?",
    tense: "Future Perfect",
    correctForm: "Will you have organized everything before the party?",
    rule: "Will + podmiot + have + III forma czasownika?",
    type: "Pytające - Future Perfect",
    description: "Will + you + have + organized. Pytanie o przygotowanie."
  },
  {
    polish: "Nie ukończę zadania przed kolacją.",
    tense: "Future Perfect",
    correctForm: "I won’t have completed the task before dinner.",
    rule: "Podmiot + will not + have + III forma czasownika.",
    type: "Przeczące - Future Perfect",
    description: "I + won’t + have + completed. Zaprzeczenie."
  },
  {
    polish: "Ona skończy naukę języka do końca roku.",
    tense: "Future Perfect",
    correctForm: "She will have learned the language by the end of the year.",
    rule: "Podmiot + will + have + III forma czasownika.",
    type: "Twierdzące - Future Perfect",
    description: "She + will + have + learned. Ukończenie nauki."
  },
  {
    polish: "Czy oni przygotują raport do poniedziałku?",
    tense: "Future Perfect",
    correctForm: "Will they have prepared the report by Monday?",
    rule: "Will + podmiot + have + III forma czasownika?",
    type: "Pytające - Future Perfect",
    description: "Will + they + have + prepared. Pytanie o zakończenie."
  },
  {
    polish: "Nie skończymy remontu przed świętami.",
    tense: "Future Perfect",
    correctForm: "We won’t have finished the renovation before the holidays.",
    rule: "Podmiot + will not + have + III forma czasownika.",
    type: "Przeczące - Future Perfect",
    description: "We + won’t + have + finished. Zaprzeczenie ukończenia."
  },
  {
    polish: "Ja już zrobię zakupy do jutra.",
    tense: "Future Perfect",
    correctForm: "I will have done the shopping by tomorrow.",
    rule: "Podmiot + will + have + III forma czasownika.",
    type: "Twierdzące - Future Perfect",
    description: "I + will + have + done. Zakończenie czynności."
  },
  {
    polish: "Czy ty już skończysz pracę do 18?",
    tense: "Future Perfect",
    correctForm: "Will you have finished work by 6 PM?",
    rule: "Will + podmiot + have + III forma czasownika?",
    type: "Pytające - Future Perfect",
    description: "Will + you + have + finished. Pytanie o czas zakończenia."
  },
  {
    polish: "Oni nie ukończą testu przed czasem.",
    tense: "Future Perfect",
    correctForm: "They won’t have finished the test ahead of time.",
    rule: "Podmiot + will not + have + III forma czasownika.",
    type: "Przeczące - Future Perfect",
    description: "They + won’t + have + finished. Zaprzeczenie."
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


