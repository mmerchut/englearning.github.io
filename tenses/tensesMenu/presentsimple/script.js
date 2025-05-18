const sentences = [
  {
    polish: "Ona codziennie chodzi do pracy.",
    tense: "Present Simple",
    correctForm: "She goes to work every day.",
    rule: "Podmiot + czasownik (z -s dla he/she/it).",
    type: "Twierdzące - Present Simple",
    description: "She + goes. Rutyna, czynność powtarzająca się."
  },
  {
    polish: "My uczymy się angielskiego.",
    tense: "Present Simple",
    correctForm: "We learn English.",
    rule: "Podmiot + czasownik (bez końcówki dla we/they/I/you).",
    type: "Twierdzące - Present Simple",
    description: "We + learn. Fakt, ogólna prawda."
  },
  {
    polish: "On gra w piłkę nożną w weekendy.",
    tense: "Present Simple",
    correctForm: "He plays football at weekends.",
    rule: "Podmiot + czasownik + -s (dla he/she/it).",
    type: "Twierdzące - Present Simple",
    description: "He + plays. Nawyk, regularna czynność."
  },
  {
    polish: "Ja lubię czekoladę.",
    tense: "Present Simple",
    correctForm: "I like chocolate.",
    rule: "Podmiot + czasownik (bez końcówki dla I).",
    type: "Twierdzące - Present Simple",
    description: "I + like. Uczucia, preferencje."
  },
  {
    polish: "Oni mieszkają w Londynie.",
    tense: "Present Simple",
    correctForm: "They live in London.",
    rule: "Podmiot + czasownik (bez końcówki dla they).",
    type: "Twierdzące - Present Simple",
    description: "They + live. Stały fakt, miejsce zamieszkania."
  },
  {
    polish: "Ona pije kawę rano.",
    tense: "Present Simple",
    correctForm: "She drinks coffee in the morning.",
    rule: "Podmiot + czasownik + -s.",
    type: "Twierdzące - Present Simple",
    description: "She + drinks. Codzienna rutyna."
  },
  {
    polish: "Pociąg odjeżdża o 7:00.",
    tense: "Present Simple",
    correctForm: "The train leaves at 7:00.",
    rule: "Podmiot + czasownik + -s.",
    type: "Twierdzące - Present Simple",
    description: "The train + leaves. Harmonogram, rozkład jazdy."
  },
  {
    polish: "On nie je mięsa.",
    tense: "Present Simple",
    correctForm: "He doesn’t eat meat.",
    rule: "Podmiot + doesn't + bezokolicznik.",
    type: "Przeczące - Present Simple",
    description: "He + doesn't + eat. Negacja, nawyk żywieniowy."
  },
  {
    polish: "Czy ona lubi muzykę klasyczną?",
    tense: "Present Simple",
    correctForm: "Does she like classical music?",
    rule: "Does + podmiot + bezokolicznik?",
    type: "Pytające - Present Simple",
    description: "Does + she + like. Pytanie o preferencje."
  },
  {
    polish: "Zawsze jem śniadanie.",
    tense: "Present Simple",
    correctForm: "I always eat breakfast.",
    rule: "Podmiot + czasownik + (z przysłówkiem częstotliwości).",
    type: "Twierdzące - Present Simple",
    description: "I + eat + always. Nawyk."
  },
  {
    polish: "Ona często czyta książki.",
    tense: "Present Simple",
    correctForm: "She often reads books.",
    rule: "Podmiot + przysłówek + czasownik + -s.",
    type: "Twierdzące - Present Simple",
    description: "She + reads + often. Częstość działania."
  },
  {
    polish: "Nie rozumiem tego słowa.",
    tense: "Present Simple",
    correctForm: "I don’t understand this word.",
    rule: "Podmiot + don't/doesn't + bezokolicznik.",
    type: "Przeczące - Present Simple",
    description: "I + don't + understand. Brak wiedzy/umiejętności."
  },
  {
    polish: "Czy oni mieszkają tutaj?",
    tense: "Present Simple",
    correctForm: "Do they live here?",
    rule: "Do/Does + podmiot + bezokolicznik?",
    type: "Pytające - Present Simple",
    description: "Do + they + live. Pytanie o miejsce zamieszkania."
  },
  {
    polish: "Słońce wschodzi na wschodzie.",
    tense: "Present Simple",
    correctForm: "The sun rises in the east.",
    rule: "Podmiot + czasownik + -s.",
    type: "Twierdzące - Present Simple",
    description: "The sun + rises. Ogólna prawda, fakt naukowy."
  },
  {
    polish: "Zaczynam pracę o ósmej.",
    tense: "Present Simple",
    correctForm: "I start work at eight.",
    rule: "Podmiot + czasownik.",
    type: "Twierdzące - Present Simple",
    description: "I + start. Rutyna dnia codziennego."
  },
  {
    polish: "On nie gra na gitarze.",
    tense: "Present Simple",
    correctForm: "He doesn’t play the guitar.",
    rule: "Podmiot + doesn't + bezokolicznik.",
    type: "Przeczące - Present Simple",
    description: "He + doesn't + play. Brak umiejętności."
  },
  {
    polish: "Czy pracujesz tutaj?",
    tense: "Present Simple",
    correctForm: "Do you work here?",
    rule: "Do + podmiot + bezokolicznik?",
    type: "Pytające - Present Simple",
    description: "Do + you + work. Pytanie o miejsce pracy."
  },
  {
    polish: "Często chodzimy do kina.",
    tense: "Present Simple",
    correctForm: "We often go to the cinema.",
    rule: "Podmiot + przysłówek + czasownik.",
    type: "Twierdzące - Present Simple",
    description: "We + go + often. Zwyczaj, częstotliwość."
  },
  {
    polish: "On zawsze zapomina o moich urodzinach.",
    tense: "Present Simple",
    correctForm: "He always forgets my birthday.",
    rule: "Podmiot + always + czasownik + -s.",
    type: "Twierdzące - Present Simple",
    description: "He + always + forgets. Powtarzająca się sytuacja."
  },
  {
    polish: "Czy twój brat gra w szachy?",
    tense: "Present Simple",
    correctForm: "Does your brother play chess?",
    rule: "Does + podmiot + bezokolicznik?",
    type: "Pytające - Present Simple",
    description: "Does + your brother + play. Pytanie o umiejętność."
  },
  {
    polish: "Nie lubimy horrorów.",
    tense: "Present Simple",
    correctForm: "We don’t like horror films.",
    rule: "Podmiot + don't + bezokolicznik.",
    type: "Przeczące - Present Simple",
    description: "We + don’t + like. Preferencje."
  },
  {
    polish: "Ona zazwyczaj kończy pracę o 17.",
    tense: "Present Simple",
    correctForm: "She usually finishes work at 5 p.m.",
    rule: "Podmiot + usually + czasownik + -s.",
    type: "Twierdzące - Present Simple",
    description: "She + usually + finishes. Regularna czynność."
  },
  {
    polish: "Dzieci bawią się w ogrodzie.",
    tense: "Present Simple",
    correctForm: "The children play in the garden.",
    rule: "Podmiot + czasownik.",
    type: "Twierdzące - Present Simple",
    description: "The children + play. Obecna, rutynowa czynność."
  },
  {
    polish: "Czy twój ojciec pracuje w banku?",
    tense: "Present Simple",
    correctForm: "Does your father work in a bank?",
    rule: "Does + podmiot + bezokolicznik?",
    type: "Pytające - Present Simple",
    description: "Does + your father + work. Pytanie o pracę."
  },
  {
    polish: "Nie rozmawiamy z nim często.",
    tense: "Present Simple",
    correctForm: "We don’t talk to him often.",
    rule: "Podmiot + don’t + bezokolicznik.",
    type: "Przeczące - Present Simple",
    description: "We + don’t + talk. Niska częstotliwość działania."
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


