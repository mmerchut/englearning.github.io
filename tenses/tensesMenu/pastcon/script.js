const sentences = [
    // Present Simple
{
    polish: "Jem obiad.",
    tense: "Past Continuous",
    correctForm: "I was eating lunch.",
    rule: "Podmiot + was/were + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Continuous",
    description: "Używamy czasu Past Continuous do opisywania czynności trwających w określonym momencie w przeszłości. Podmiot (I) + was + eating."
},
{
    polish: "Oni oglądali film.",
    tense: "Past Continuous",
    correctForm: "They were watching a movie.",
    rule: "Podmiot + was/were + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Continuous",
    description: "They + were + watching. Czynność trwała w określonym momencie przeszłości."
},
{
    polish: "Ona czytała książkę.",
    tense: "Past Continuous",
    correctForm: "She was reading a book.",
    rule: "Podmiot + was/were + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Continuous",
    description: "She + was + reading. Past Continuous służy do opisywania trwającej czynności w przeszłości."
},
{
    polish: "My graliśmy w piłkę.",
    tense: "Past Continuous",
    correctForm: "We were playing football.",
    rule: "Podmiot + was/were + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Continuous",
    description: "We + were + playing. Granie w piłkę trwało przez jakiś czas w przeszłości."
},
{
    polish: "On pisał list.",
    tense: "Past Continuous",
    correctForm: "He was writing a letter.",
    rule: "Podmiot + was/were + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Continuous",
    description: "He + was + writing. Czynność niedokończona w danym momencie przeszłości."
},
{
    polish: "Dzieci bawiły się na dworze.",
    tense: "Past Continuous",
    correctForm: "The children were playing outside.",
    rule: "Podmiot + was/were + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Continuous",
    description: "The children + were + playing. Akcja rozgrywała się w tle innych wydarzeń."
},
{
    polish: "Słuchałem muzyki.",
    tense: "Past Continuous",
    correctForm: "I was listening to music.",
    rule: "Podmiot + was/were + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Continuous",
    description: "Czynność trwała przez jakiś czas w przeszłości – I + was + listening."
},
{
    polish: "Oni tańczyli całą noc.",
    tense: "Past Continuous",
    correctForm: "They were dancing all night.",
    rule: "Podmiot + was/were + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Continuous",
    description: "They + were + dancing. Długotrwała czynność w przeszłości."
},
{
    polish: "Pies szczekał na listonosza.",
    tense: "Past Continuous",
    correctForm: "The dog was barking at the postman.",
    rule: "Podmiot + was/were + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Continuous",
    description: "Past Continuous dla trwającego działania – was barking."
},
{
    polish: "Padał deszcz, gdy wyszedłem.",
    tense: "Past Continuous",
    correctForm: "It was raining when I left.",
    rule: "Podmiot + was/were + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Continuous",
    description: "It + was + raining. Trwała czynność została przerwana przez inną (I left)."
},
{
    polish: "Mama gotowała obiad.",
    tense: "Past Continuous",
    correctForm: "Mom was cooking dinner.",
    rule: "Podmiot + was/were + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Continuous",
    description: "Mom + was + cooking. Czynność wykonywana w przeszłości."
},
{
    polish: "Uczeń pisał test.",
    tense: "Past Continuous",
    correctForm: "The student was writing a test.",
    rule: "Podmiot + was/were + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Continuous",
    description: "The student + was + writing. Czynność trwająca w danym momencie."
},
{
    polish: "Pociąg jechał bardzo szybko.",
    tense: "Past Continuous",
    correctForm: "The train was going very fast.",
    rule: "Podmiot + was/were + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Continuous",
    description: "The train + was + going. Akcja trwająca w przeszłości."
},
{
    polish: "Graliśmy w szachy.",
    tense: "Past Continuous",
    correctForm: "We were playing chess.",
    rule: "Podmiot + was/were + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Continuous",
    description: "We + were + playing. Akcja rozgrywająca się przez pewien czas w przeszłości."
},
{
    polish: "Samolot lądował.",
    tense: "Past Continuous",
    correctForm: "The plane was landing.",
    rule: "Podmiot + was/were + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Continuous",
    description: "The plane + was + landing. Ruch w przeszłości w trakcie trwania."
},
{
    polish: "Telefon dzwonił przez całą noc.",
    tense: "Past Continuous",
    correctForm: "The phone was ringing all night.",
    rule: "Podmiot + was/were + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Continuous",
    description: "The phone + was + ringing. Trwała, uporczywa czynność w przeszłości."
},
{
    polish: "Spacerowaliśmy po plaży.",
    tense: "Past Continuous",
    correctForm: "We were walking on the beach.",
    rule: "Podmiot + was/were + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Continuous",
    description: "We + were + walking. Opis działania wykonywanego w przeszłości."
},
{
    polish: "Nauczyciel tłumaczył gramatykę.",
    tense: "Past Continuous",
    correctForm: "The teacher was explaining grammar.",
    rule: "Podmiot + was/were + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Continuous",
    description: "The teacher + was + explaining. Czynność trwająca w przeszłości."
},
{
    polish: "Zmywałem naczynia.",
    tense: "Past Continuous",
    correctForm: "I was washing the dishes.",
    rule: "Podmiot + was/were + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Continuous",
    description: "I + was + washing. Opis czynności wykonywanej w przeszłości."
},
{
    polish: "Sprzątaliśmy pokój.",
    tense: "Past Continuous",
    correctForm: "We were cleaning the room.",
    rule: "Podmiot + was/were + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Continuous",
    description: "We + were + cleaning. Akcja trwała w określonym czasie."
},
{
    polish: "Śpiewali piosenkę.",
    tense: "Past Continuous",
    correctForm: "They were singing a song.",
    rule: "Podmiot + was/were + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Continuous",
    description: "They + were + singing. Czynność trwająca przez chwilę w przeszłości."
},
{
    polish: "On grał na gitarze.",
    tense: "Past Continuous",
    correctForm: "He was playing the guitar.",
    rule: "Podmiot + was/were + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Continuous",
    description: "He + was + playing. Past Continuous dla trwającej czynności."
},
{
    polish: "Piekliśmy ciasto.",
    tense: "Past Continuous",
    correctForm: "We were baking a cake.",
    rule: "Podmiot + was/were + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Continuous",
    description: "We + were + baking. Akcja odbywała się w tle innych wydarzeń."
},
{
    polish: "On malował obraz.",
    tense: "Past Continuous",
    correctForm: "He was painting a picture.",
    rule: "Podmiot + was/were + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Continuous",
    description: "He + was + painting. Długotrwała czynność w przeszłości."
},
{
    polish: "Dziecko płakało.",
    tense: "Past Continuous",
    correctForm: "The baby was crying.",
    rule: "Podmiot + was/were + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Continuous",
    description: "The baby + was + crying. Opis stanu emocjonalnego trwającego w przeszłości."
},
{
    polish: "Ludzie robili zdjęcia.",
    tense: "Past Continuous",
    correctForm: "People were taking photos.",
    rule: "Podmiot + was/were + czasownik z końcówką -ing.",
    type: "Twierdzące - Past Continuous",
    description: "People + were + taking. Past Continuous opisuje czynność w toku."
}


    // Kontynuuj dodawanie innych zdań w podobny sposób...
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


