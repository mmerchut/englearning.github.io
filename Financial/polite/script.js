const words = [
    {english: "please - A polite word used to make a request more courteous", polish: "proszę - Grzeczne słowo używane do składania prośby w sposób bardziej uprzejmy."},
    {english: "thank you - An expression of gratitude", polish: "dziękuję - Wyrażenie wdzięczności."},
    {english: "you're welcome - A polite response to 'thank you'", polish: "proszę bardzo - Grzeczna odpowiedź na 'dziękuję'."},
    {english: "excuse me - A polite way to get someone's attention or apologize", polish: "przepraszam - Grzeczny sposób na przyciągnięcie czyjejś uwagi lub przeproszenie."},
    {english: "sorry - An expression of apology", polish: "przepraszam - Wyrażenie przeprosin."},
    {english: "could you please - A polite way to make a request", polish: "czy mógłbyś proszę - Grzeczny sposób na złożenie prośby."},
    {english: "may I - A formal way to ask for permission", polish: "czy mogę - Formalny sposób na zapytanie o pozwolenie."},
    {english: "I would appreciate it if - A polite way to request something", polish: "byłbym wdzięczny, gdyby - Grzeczny sposób na złożenie prośby."},
    {english: "it would be a pleasure - A polite way to express willingness", polish: "to będzie przyjemność - Grzeczny sposób wyrażenia chęci."},
    {english: "please accept my apologies - A formal way to apologize", polish: "proszę przyjąć moje przeprosiny - Formalny sposób przeprosin."},
    {english: "thank you for your understanding - A polite phrase used to express appreciation for someone's patience or understanding", polish: "dziękuję za zrozumienie - Grzeczna fraza wyrażająca wdzięczność za czyjeś zrozumienie lub cierpliwość."},
    {english: "pardon me - A polite way to ask for repetition or clarification", polish: "przepraszam, czy mógłbyś powtórzyć - Grzeczny sposób na poproszenie o powtórzenie lub wyjaśnienie."},
    {english: "would you mind - A polite way to ask if something is acceptable", polish: "czy mógłbyś - Grzeczny sposób zapytania, czy coś jest akceptowalne."},
    {english: "I am sorry for the inconvenience - A polite apology for causing trouble", polish: "przepraszam za niedogodności - Grzeczne przeprosiny za spowodowanie problemów."},
    {english: "thank you for your time - A polite expression of appreciation for someone's attention", polish: "dziękuję za poświęcony czas - Grzeczne wyrażenie wdzięczności za czyjąś uwagę."},
    {english: "please let me know - A polite request for information", polish: "proszę daj mi znać - Grzeczna prośba o informację."},
    {english: "how may I assist you - A polite way to offer help", polish: "w czym mogę pomóc - Grzeczny sposób zaoferowania pomocy."},
    {english: "it was a pleasure speaking with you - A polite phrase to conclude a conversation", polish: "to była przyjemność rozmawiać z tobą - Grzeczna fraza na zakończenie rozmowy."},
    {english: "I appreciate your help - A polite expression of gratitude for someone's assistance", polish: "doceniam twoją pomoc - Grzeczne wyrażenie wdzięczności za czyjąś pomoc."},
    {english: "would you be so kind as to - A very polite way to make a request", polish: "czy byłbyś tak uprzejmy - Bardzo grzeczny sposób na złożenie prośby."},
    {english: "I beg your pardon - A polite way to ask someone to repeat what they said or to apologize", polish: "proszę wybaczyć - Grzeczny sposób, aby poprosić kogoś o powtórzenie tego, co powiedział, lub przeprosić."},
    {english: "please forgive me - A polite way to apologize for an error or offense", polish: "proszę wybaczyć - Grzeczny sposób na przeproszenie za błąd lub wykroczenie."},
    {english: "if you don’t mind - A polite phrase used when asking for something or making a request", polish: "jeśli nie masz nic przeciwko - Grzeczna fraza używana przy proszeniu o coś lub składaniu prośby."},
    {english: "could I possibly - A polite and somewhat formal way to make a request", polish: "czy mógłbym - Grzeczny i dość formalny sposób na złożenie prośby."},
    {english: "might I suggest - A polite way to offer advice or a recommendation", polish: "czy mogę zasugerować - Grzeczny sposób na udzielenie rady lub rekomendacji."},
    {english: "I hope you don’t mind - A polite phrase used when asking someone for permission or when suggesting something", polish: "mam nadzieję, że nie masz nic przeciwko - Grzeczna fraza używana przy proszeniu o pozwolenie lub sugerowaniu czegoś."},
    {english: "may I ask - A polite way to inquire about something", polish: "czy mogę zapytać - Grzeczny sposób na zapytanie o coś."},
    {english: "thank you for your patience - A polite phrase to express appreciation for someone's understanding and time", polish: "dziękuję za cierpliwość - Grzeczna fraza wyrażająca wdzięczność za czyjeś zrozumienie i czas."},
    {english: "please don’t hesitate to - A polite phrase used to encourage someone to take action", polish: "proszę, nie wahaj się - Grzeczna fraza używana, by zachęcić kogoś do podjęcia działania."},
    {english: "I hope this helps - A polite phrase used after offering assistance or advice", polish: "mam nadzieję, że to pomoże - Grzeczna fraza używana po udzieleniu pomocy lub porady."},
    {english: "with all due respect - A polite phrase used to introduce a disagreeing opinion", polish: "z całym szacunkiem - Grzeczna fraza używana do wyrażenia niezgody lub innego zdania."},
    {english: "may I have your attention - A polite phrase used to request someone's focus", polish: "czy mogę prosić o uwagę - Grzeczna fraza używana, by poprosić o czyjąś uwagę."},
    {english: "it would be greatly appreciated - A formal and polite way to express gratitude in advance", polish: "byłoby to bardzo docenione - Formalny i grzeczny sposób wyrażenia wdzięczności z góry."},
    {english: "I look forward to - A polite phrase used to express anticipation or excitement about a future event", polish: "czekam z niecierpliwością - Grzeczna fraza wyrażająca oczekiwanie lub ekscytację na przyszłe wydarzenie."},
    {english: "if it’s not too much trouble - A polite way to make a request", polish: "jeśli to nie jest problem - Grzeczny sposób na złożenie prośby."},
    {english: "please be advised - A formal and polite way to inform someone", polish: "proszę przyjąć do wiadomości - Formalny i grzeczny sposób na poinformowanie kogoś."},
    {english: "I would be happy to - A polite way to express willingness to help or do something", polish: "będę z przyjemnością - Grzeczny sposób wyrażenia chęci pomocy lub wykonania czegoś."},
    {english: "please allow me to - A polite phrase used to offer assistance or make a request", polish: "proszę pozwól mi - Grzeczna fraza używana przy oferowaniu pomocy lub składaniu prośby."},
    {english: "thank you for your kind consideration - A polite way to express gratitude for someone's thoughtfulness", polish: "dziękuję za życzliwe rozważenie - Grzeczny sposób na wyrażenie wdzięczności za czyjeś życzliwość."},
    {english: "I would be grateful if - A polite and formal way to make a request", polish: "byłbym wdzięczny, gdyby - Grzeczny i formalny sposób na złożenie prośby."},
    {english: "please feel free to - A polite phrase encouraging someone to take action without hesitation", polish: "proszę czuć się swobodnie - Grzeczna fraza zachęcająca kogoś do podjęcia działania bez wahania."},
    {english: "I hope you're doing well - A polite greeting to inquire about someone's well-being", polish: "mam nadzieję, że masz się dobrze - Grzeczne powitanie, aby zapytać o czyjeś samopoczucie."},
    {english: "I appreciate your time - A polite expression of gratitude for someone's time", polish: "doceniam twój czas - Grzeczne wyrażenie wdzięczności za czyjś czas."},
    {english: "please let me know if you need anything - A polite way to offer assistance", polish: "proszę daj mi znać, jeśli czegoś potrzebujesz - Grzeczny sposób oferowania pomocy."},
    {english: "would it be possible - A polite way to inquire if something can be done", polish: "czy byłoby to możliwe - Grzeczny sposób na zapytanie, czy coś może zostać zrobione."},
    {english: "I hope everything is going well - A polite way to express goodwill", polish: "mam nadzieję, że wszystko idzie dobrze - Grzeczny sposób wyrażenia życzliwości."},
    {english: "with your permission - A polite way to ask for approval", polish: "za twoim pozwoleniem - Grzeczny sposób na zapytanie o pozwolenie."},
    {english: "I would like to express my gratitude - A formal way to say thank you", polish: "chciałbym wyrazić moją wdzięczność - Formalny sposób na wyrażenie podziękowań."},
    {english: "could you kindly - A polite and formal way to make a request", polish: "czy mogłbyś uprzejmie - Grzeczny i formalny sposób na złożenie prośby."},
    {english: "please accept my sincere thanks - A formal way to express gratitude", polish: "proszę przyjąć moje szczere podziękowania - Formalny sposób na wyrażenie wdzięczności."},
    {english: "it would be a privilege - A polite way to express honor or excitement to do something", polish: "byłoby to zaszczytem - Grzeczny sposób wyrażenia zaszczytu lub ekscytacji związanej z czymś."},
    {english: "I'm at your service - A polite way to offer help", polish: "jestem do państwa usług - Grzeczny sposób oferowania pomocy."},
    {english: "please take your time - A polite way to encourage someone to not rush", polish: "proszę nie spieszyć się - Grzeczna fraza zachęcająca kogoś do nieśpieszenia się."},
    {english: "I am happy to help - A polite way to offer assistance", polish: "z przyjemnością pomogę - Grzeczny sposób oferowania pomocy."},
    {english: "it was a pleasure speaking with you - A polite way to end a conversation", polish: "to była przyjemność rozmawiać z tobą - Grzeczna fraza na zakończenie rozmowy."},
    {english: "thank you for your cooperation - A polite phrase expressing appreciation for working together", polish: "dziękuję za współpracę - Grzeczna fraza wyrażająca wdzięczność za wspólną pracę."},
    {english: "I trust this will meet your expectations - A polite phrase indicating confidence that something is satisfactory", polish: "mam nadzieję, że to spełni twoje oczekiwania - Grzeczna fraza wskazująca na przekonanie, że coś jest zadowalające."},
    {english: "I would like to kindly remind you - A polite way to remind someone of something", polish: "chciałbym uprzejmie przypomnieć - Grzeczny sposób przypomnienia komuś o czymś."},
    {english: "I hope this finds you well - A polite way to begin a message, expressing goodwill", polish: "mam nadzieję, że wszystko u Ciebie w porządku - Grzeczna fraza rozpoczynająca wiadomość, wyrażająca życzliwość."},
    {english: "please accept my apologies - A polite way to offer an apology", polish: "proszę przyjąć moje przeprosiny - Grzeczny sposób na przeprosiny."},
    {english: "I appreciate your understanding - A polite expression of gratitude for someone's patience or understanding", polish: "doceniam twoje zrozumienie - Grzeczne wyrażenie wdzięczności za czyjeś zrozumienie."},
    {english: "thank you for your kind assistance - A polite expression of gratitude for help or support", polish: "dziękuję za uprzejmą pomoc - Grzeczna fraza wyrażająca wdzięczność za pomoc lub wsparcie."},
    {english: "would you be so kind - A formal and polite way to make a request", polish: "czy byłbyś tak uprzejmy - Formalny i grzeczny sposób składania prośby."},
    {english: "I would appreciate it if - A polite and formal way to make a request or offer", polish: "byłbym wdzięczny, gdyby - Grzeczny i formalny sposób składania prośby lub oferty."},
    {english: "please let me know if you require further assistance - A polite phrase to offer continued support", polish: "proszę daj mi znać, jeśli potrzebujesz dalszej pomocy - Grzeczna fraza oferująca kontynuację wsparcia."},
    {english: "I trust this information is helpful - A polite way to express confidence in the usefulness of provided information", polish: "mam nadzieję, że ta informacja jest pomocna - Grzeczna fraza wyrażająca przekonanie o przydatności udzielonej informacji."},
    {english: "I would be delighted to - A polite and enthusiastic way to express willingness or pleasure", polish: "byłbym zachwycony - Grzeczny i entuzjastyczny sposób wyrażenia chęci lub przyjemności."},
    {english: "I regret to inform you - A polite way to introduce bad news or an unfavorable situation", polish: "z przykrością informuję - Grzeczny sposób wprowadzenia złych wiadomości lub niekorzystnej sytuacji."},
    {english: "please do not hesitate to contact me - A polite way to offer help or encourage communication", polish: "proszę nie wahaj się ze mną skontaktować - Grzeczny sposób oferowania pomocy lub zachęcania do kontaktu."},
    {english: "I would be pleased to - A polite way to express willingness to assist or perform a task", polish: "byłbym zadowolony - Grzeczny sposób wyrażenia chęci pomocy lub wykonania zadania."},
    {english: "thank you for bringing this to my attention - A polite expression of gratitude for being informed of something important", polish: "dziękuję za zwrócenie uwagi na to - Grzeczne wyrażenie wdzięczności za poinformowanie o czymś ważnym."},
    {english: "I’m sorry for the inconvenience - A polite way to apologize for causing any trouble or difficulty", polish: "przepraszam za niedogodności - Grzeczny sposób na przeprosiny za spowodowanie jakichkolwiek trudności."},
    {english: "please feel free to reach out - A polite and inviting way to offer further communication or assistance", polish: "proszę nie wahaj się skontaktować - Grzeczny i zachęcający sposób na oferowanie dalszej komunikacji lub pomocy."},
    {english: "I look forward to hearing from you - A polite phrase used to express anticipation of a reply", polish: "czekam na odpowiedź - Grzeczna fraza wyrażająca oczekiwanie na odpowiedź."},
    {english: "may I kindly ask - A polite way to introduce a question or request", polish: "czy mogę uprzejmie zapytać - Grzeczny sposób na wprowadzenie pytania lub prośby."}

];

let selectedWords = [];
let currentIndex = 0;
let isEnglishToPolish = true;
let score = 0;
let answerGiven = false; // Track if an answer has been given
let isSpeakingEnabled = false; // Track if speaking is enabled

// DOM Elements
const container = document.getElementById("containerAnswer");
const wordDisplay = document.getElementById('wordDisplay');
const userInput = document.getElementById('userInput');
const submitBtn = document.getElementById('submitBtn');
const result = document.getElementById('result');
const nextBtn = document.getElementById('nextBtn');
const optionsContainer = document.getElementById('optionsContainer');
const translationDisplay = document.getElementById('translationDisplay');
const toggleTranslationBtn = document.getElementById('toggleTranslationBtn');
const switchLanguageBtn = document.getElementById('switchLanguageBtn');
const toggleSpeakBtn = document.getElementById('toggleSpeakBtn'); // New button for toggling speaking

// Initialization
function init() {
    selectedWords = words.slice(); // Select all words
    currentIndex = 0;
    translationDisplay.style.display = 'none'; // Hide translation by default
    displayWord(); // Display the first word
}

// Displaying the word
function displayWord() {
    if (selectedWords.length === 0) {
        result.textContent = "Nie wybrano słówek do nauki!";
        return;
    }

    const currentWord = isEnglishToPolish ? selectedWords[currentIndex].english : selectedWords[currentIndex].polish;
    wordDisplay.textContent = currentWord;
    generateOptions(isEnglishToPolish ? selectedWords[currentIndex].polish : selectedWords[currentIndex].english);
    userInput.value = '';
    result.textContent = '';

    // Speak the word only if speaking is enabled
    if (isSpeakingEnabled) {
        speakWord(); // Automatically speak the displayed word
    }

    // Update the translation display
    const correctTranslation = isEnglishToPolish ? selectedWords[currentIndex].polish : selectedWords[currentIndex].english;
    translationDisplay.textContent = correctTranslation; // Show the current translation
}

// Function to speak the current word
function speakWord() {
    const currentWord = wordDisplay.textContent; // Read the word from the wordDisplay div
    const utterance = new SpeechSynthesisUtterance(currentWord);
    utterance.lang = isEnglishToPolish ? 'en-US' : 'pl-PL'; // Set language
    window.speechSynthesis.speak(utterance);
}

// Select words
document.querySelectorAll('.word-select-btn').forEach(button => {
    button.addEventListener('click', () => {
        const count = button.getAttribute('data-count');
        if (count === 'all') {
            selectedWords = words.slice(); // Select all words
        } else {
            const num = Math.min(parseInt(count), words.length);
            selectedWords = getRandomWords(words, num); // Select random words
        }
        currentIndex = 0;
        result.textContent = `Wybrano ${selectedWords.length} słówek do nauki.`; // Display information
        setTimeout(displayWord, 2000); // Display the first word
    });
});

// Random word selection function
function getRandomWords(sourceArray, count) {
    const shuffled = sourceArray.slice().sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// Generating options for selection
function generateOptions(correctAnswer) {
    optionsContainer.innerHTML = ''; // Clear previous options

    const options = [correctAnswer];
    while (options.length < 4) {
        const randomWord = selectedWords[Math.floor(Math.random() * selectedWords.length)];
        if (isEnglishToPolish) {
            if (!options.includes(randomWord.polish)) options.push(randomWord.polish);
        } else {
            if (!options.includes(randomWord.english)) options.push(randomWord.english);
        }
    }

    shuffle(options); // Shuffle options

    options.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.className = 'option-btn';
        btn.addEventListener('click', () => checkAnswer(option, correctAnswer));
        optionsContainer.appendChild(btn);
    });
}

// Check the answer
function checkAnswer(selected, correct) {
    if (answerGiven) return; // If an answer has already been given, do nothing

    const isCorrect = selected === correct || userInput.value.trim().toLowerCase() === correct.toLowerCase();
    
    if (isCorrect) {
        result.textContent = "Dobrze!";
        score++; // Increase score
        container.classList.add('bounce'); // Bounce animation

        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(button => button.classList.add('btn-yellow'));
        toggleTranslationBtn.classList.add("BtnGreen");
        switchLanguageBtn.classList.add("BtnGreen");
        nextBtn.classList.add("nextBtnGreen");
        submitBtn.classList.add("submitBtnGreen");
        toggleSpeakBtn.classList.add("BtnGreen");

        // Wait 2 seconds, then show the next word
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % selectedWords.length; // Move to the next word
            answerGiven = false; // Reset state
            displayWord(); // Display new word
        }, 600);

        setTimeout(() => {
            container.classList.remove('bounce');
            buttons.forEach(button => button.classList.remove('btn-yellow'));
            toggleTranslationBtn.classList.remove("BtnGreen");
            switchLanguageBtn.classList.remove("BtnGreen");
            nextBtn.classList.remove("nextBtnGreen");
            submitBtn.classList.remove("submitBtnGreen");
            toggleSpeakBtn.classList.remove("BtnGreen");
        }, 600);
    } else {
        result.textContent = `Źle! Poprawne tłumaczenie to: ${correct}`;
        container.classList.add('shake'); // Shake animation

        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(button => button.classList.add('btn-red'));
        toggleTranslationBtn.classList.add("btn-red");
        switchLanguageBtn.classList.add("btn-red");
        nextBtn.classList.add("nextBtnRed");
        submitBtn.classList.add("submitBtnRed");
        toggleSpeakBtn.classList.add("btn-red");

        setTimeout(() => {
            container.classList.remove('shake');
            buttons.forEach(button => button.classList.remove('btn-red'));
            toggleTranslationBtn.classList.remove("btn-red");
            switchLanguageBtn.classList.remove("btn-red");
            nextBtn.classList.remove("nextBtnRed");
            submitBtn.classList.remove("submitBtnRed");
            toggleSpeakBtn.classList.remove("btn-red");
        }, 600);
    }

    answerGiven = true; // Mark that an answer has been given
}

// Handle submit button click
submitBtn.addEventListener('click', () => {
    const correctTranslation = isEnglishToPolish ? selectedWords[currentIndex].polish : selectedWords[currentIndex].english;
    checkAnswer(null, correctTranslation);
});

// Handle next button click
nextBtn.addEventListener('click', () => {
    if (!answerGiven) return; // If an answer hasn't been given, do nothing
    currentIndex = (currentIndex + 1) % selectedWords.length; // Move to the next word (cyclically)
    answerGiven = false; // Reset state
    displayWord();
});

// Toggle translation visibility
toggleTranslationBtn.addEventListener('click', () => {
    if (translationDisplay.style.display === 'none' || !translationDisplay.style.display) {
        translationDisplay.style.display = 'block'; // Show the translation
    } else {
        translationDisplay.style.display = 'none'; // Hide the translation
    }
});

// Switch language
switchLanguageBtn.addEventListener('click', () => {
    isEnglishToPolish = !isEnglishToPolish; // Change language direction
    displayWord(); // Refresh displayed word
});

// Toggle speaking
toggleSpeakBtn.addEventListener('click', () => {
    isSpeakingEnabled = !isSpeakingEnabled; // Toggle speaking on/off
    toggleSpeakBtn.innerHTML = isSpeakingEnabled ? '<i class="fa-solid fa-volume-low"></i>' : '<i class="fa-solid fa-volume-low"></i>'; // Update button text
});

// Initialization
init();

// Shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Toggle word selection container
const toggleButton = document.getElementById('hideButton');
const myDiv = document.getElementById('wordSelectContainer');

toggleButton.addEventListener('click', () => {
    myDiv.style.display = myDiv.style.display === 'none' ? 'block' : 'none'; // Toggle visibility
});