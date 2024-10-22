const sentences = [
    { polish: "Jem obiad.", tense: "Present Simple", correctForm: "I eat lunch.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie jem obiadu.", tense: "Present Simple", correctForm: "I do not eat lunch.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy jem obiad?", tense: "Present Simple", correctForm: "Do I eat lunch?", rule: "Czy + podmiot + czasownik w formie podstawowej?", type: "Interrogative" },

    { polish: "Oni grają w piłkę.", tense: "Present Simple", correctForm: "They play soccer.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie grają w piłkę.", tense: "Present Simple", correctForm: "They do not play soccer.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy oni grają w piłkę?", tense: "Present Simple", correctForm: "Do they play soccer?", rule: "Czy + podmiot + czasownik w formie podstawowej?", type: "Interrogative" },

    { polish: "Czytam książkę.", tense: "Present Simple", correctForm: "I read a book.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie czytam książki.", tense: "Present Simple", correctForm: "I do not read a book.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy czytam książkę?", tense: "Present Simple", correctForm: "Do I read a book?", rule: "Czy + podmiot + czasownik w formie podstawowej?", type: "Interrogative" },

    { polish: "Oni oglądają film.", tense: "Present Simple", correctForm: "They watch a movie.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie oglądają filmu.", tense: "Present Simple", correctForm: "They do not watch a movie.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy oni oglądają film?", tense: "Present Simple", correctForm: "Do they watch a movie?", rule: "Czy + podmiot + czasownik w formie podstawowej?", type: "Interrogative" },

    { polish: "Piję wodę.", tense: "Present Simple", correctForm: "I drink water.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie piję wody.", tense: "Present Simple", correctForm: "I do not drink water.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy piję wodę?", tense: "Present Simple", correctForm: "Do I drink water?", rule: "Czy + podmiot + czasownik w formie podstawowej?", type: "Interrogative" },

    { polish: "Jestem zmęczony.", tense: "Present Simple", correctForm: "I am tired.", rule: "Podmiot + 'am/is/are' + przymiotnik.", type: "Affirmative" },
    { polish: "Nie jestem zmęczony.", tense: "Present Simple", correctForm: "I am not tired.", rule: "Podmiot + 'am/is/are not' + przymiotnik.", type: "Negative" },
    { polish: "Czy jestem zmęczony?", tense: "Present Simple", correctForm: "Am I tired?", rule: "Czy + podmiot + 'am/is/are' + przymiotnik?", type: "Interrogative" },

    { polish: "Znam odpowiedź.", tense: "Present Simple", correctForm: "I know the answer.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie znam odpowiedzi.", tense: "Present Simple", correctForm: "I do not know the answer.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy znam odpowiedź?", tense: "Present Simple", correctForm: "Do I know the answer?", rule: "Czy + podmiot + czasownik w formie podstawowej?", type: "Interrogative" },

    { polish: "Piszę list.", tense: "Present Simple", correctForm: "I write a letter.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie piszę listu.", tense: "Present Simple", correctForm: "I do not write a letter.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy piszę list?", tense: "Present Simple", correctForm: "Do I write a letter?", rule: "Czy + podmiot + czasownik w formie podstawowej?", type: "Interrogative" },

    { polish: "Oni jedzą kolację.", tense: "Present Simple", correctForm: "They eat dinner.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie jedzą kolacji.", tense: "Present Simple", correctForm: "They do not eat dinner.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy oni jedzą kolację?", tense: "Present Simple", correctForm: "Do they eat dinner?", rule: "Czy + podmiot + czasownik w formie podstawowej?", type: "Interrogative" },

    { polish: "Uczę się angielskiego.", tense: "Present Simple", correctForm: "I study English.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie uczę się angielskiego.", tense: "Present Simple", correctForm: "I do not study English.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy uczę się angielskiego?", tense: "Present Simple", correctForm: "Do I study English?", rule: "Czy + podmiot + czasownik w formie podstawowej?", type: "Interrogative" },

    { polish: "Widzimy się jutro.", tense: "Present Simple", correctForm: "We see each other tomorrow.", rule: "Podmiot + czasownik w formie podstawowej + okolicznik czasu.", type: "Affirmative" },
    { polish: "Nie widzimy się jutro.", tense: "Present Simple", correctForm: "We do not see each other tomorrow.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej + okolicznik czasu.", type: "Negative" },
    { polish: "Czy widzimy się jutro?", tense: "Present Simple", correctForm: "Do we see each other tomorrow?", rule: "Czy + podmiot + czasownik w formie podstawowej + okolicznik czasu?", type: "Interrogative" },
    { polish: "Słucham muzyki.", tense: "Present Simple", correctForm: "I listen to music.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie słucham muzyki.", tense: "Present Simple", correctForm: "I do not listen to music.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy słucham muzyki?", tense: "Present Simple", correctForm: "Do I listen to music?", rule: "Czy + podmiot + czasownik w formie podstawowej?", type: "Interrogative" },

    { polish: "Oni biegają w parku.", tense: "Present Simple", correctForm: "They run in the park.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie biegają w parku.", tense: "Present Simple", correctForm: "They do not run in the park.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy oni biegają w parku?", tense: "Present Simple", correctForm: "Do they run in the park?", rule: "Czy + podmiot + czasownik w formie podstawowej?", type: "Interrogative" },

    { polish: "Robię zakupy.", tense: "Present Simple", correctForm: "I do shopping.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie robię zakupów.", tense: "Present Simple", correctForm: "I do not do shopping.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy robię zakupy?", tense: "Present Simple", correctForm: "Do I do shopping?", rule: "Czy + podmiot + czasownik w formie podstawowej?", type: "Interrogative" },

    { polish: "Oni rozmawiają.", tense: "Present Simple", correctForm: "They talk.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie rozmawiają.", tense: "Present Simple", correctForm: "They do not talk.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy oni rozmawiają?", tense: "Present Simple", correctForm: "Do they talk?", rule: "Czy + podmiot + czasownik w formie podstawowej?", type: "Interrogative" },

    { polish: "Odwiedzam babcię.", tense: "Present Simple", correctForm: "I visit my grandmother.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie odwiedzam babci.", tense: "Present Simple", correctForm: "I do not visit my grandmother.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy odwiedzam babcię?", tense: "Present Simple", correctForm: "Do I visit my grandmother?", rule: "Czy + podmiot + czasownik w formie podstawowej?", type: "Interrogative" },

    { polish: "Siedzę na kanapie.", tense: "Present Simple", correctForm: "I sit on the couch.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie siedzę na kanapie.", tense: "Present Simple", correctForm: "I do not sit on the couch.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy siedzę na kanapie?", tense: "Present Simple", correctForm: "Do I sit on the couch?", rule: "Czy + podmiot + czasownik w formie podstawowej?", type: "Interrogative" },

    { polish: "Piję herbatę.", tense: "Present Simple", correctForm: "I drink tea.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie piję herbaty.", tense: "Present Simple", correctForm: "I do not drink tea.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy piję herbatę?", tense: "Present Simple", correctForm: "Do I drink tea?", rule: "Czy + podmiot + czasownik w formie podstawowej?", type: "Interrogative" },

    { polish: "Oni tańczą na imprezie.", tense: "Present Simple", correctForm: "They dance at the party.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie tańczą na imprezie.", tense: "Present Simple", correctForm: "They do not dance at the party.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy oni tańczą na imprezie?", tense: "Present Simple", correctForm: "Do they dance at the party?", rule: "Czy + podmiot + czasownik w formie podstawowej?", type: "Interrogative" },

    { polish: "Szukam pracy.", tense: "Present Simple", correctForm: "I am looking for a job.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie szukam pracy.", tense: "Present Simple", correctForm: "I am not looking for a job.", rule: "Podmiot + 'am/is/are not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy szukam pracy?", tense: "Present Simple", correctForm: "Am I looking for a job?", rule: "Czy + podmiot + 'am/is/are' + czasownik w formie podstawowej?", type: "Interrogative" },

    { polish: "Oni grają na instrumentach.", tense: "Present Simple", correctForm: "They play instruments.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie grają na instrumentach.", tense: "Present Simple", correctForm: "They do not play instruments.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy oni grają na instrumentach?", tense: "Present Simple", correctForm: "Do they play instruments?", rule: "Czy + podmiot + czasownik w formie podstawowej?", type: "Interrogative" },

    { polish: "Zamykam okno.", tense: "Present Simple", correctForm: "I close the window.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie zamykam okna.", tense: "Present Simple", correctForm: "I do not close the window.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy zamykam okno?", tense: "Present Simple", correctForm: "Do I close the window?", rule: "Czy + podmiot + czasownik w formie podstawowej?", type: "Interrogative" },
    { polish: "Biorę prysznic.", tense: "Present Simple", correctForm: "I take a shower.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie biorę prysznica.", tense: "Present Simple", correctForm: "I do not take a shower.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy biorę prysznic?", tense: "Present Simple", correctForm: "Do I take a shower?", rule: "Czy + podmiot + czasownik w formie podstawowej?", type: "Interrogative" },

    { polish: "Oni jedzą lody.", tense: "Present Simple", correctForm: "They eat ice cream.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie jedzą lodów.", tense: "Present Simple", correctForm: "They do not eat ice cream.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy oni jedzą lody?", tense: "Present Simple", correctForm: "Do they eat ice cream?", rule: "Czy + podmiot + czasownik w formie podstawowej?", type: "Interrogative" },

    { polish: "Rozpoczynam pracę.", tense: "Present Simple", correctForm: "I start work.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie rozpoczynam pracy.", tense: "Present Simple", correctForm: "I do not start work.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy rozpoczynam pracę?", tense: "Present Simple", correctForm: "Do I start work?", rule: "Czy + podmiot + czasownik w formie podstawowej?", type: "Interrogative" },

    { polish: "Oni budują dom.", tense: "Present Simple", correctForm: "They build a house.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie budują domu.", tense: "Present Simple", correctForm: "They do not build a house.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy oni budują dom?", tense: "Present Simple", correctForm: "Do they build a house?", rule: "Czy + podmiot + czasownik w formie podstawowej?", type: "Interrogative" },

    { polish: "Wspólnie gotujemy.", tense: "Present Simple", correctForm: "We cook together.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie gotujemy wspólnie.", tense: "Present Simple", correctForm: "We do not cook together.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy wspólnie gotujemy?", tense: "Present Simple", correctForm: "Do we cook together?", rule: "Czy + podmiot + czasownik w formie podstawowej?", type: "Interrogative" },

    { polish: "Słyszę dźwięki.", tense: "Present Simple", correctForm: "I hear sounds.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie słyszę dźwięków.", tense: "Present Simple", correctForm: "I do not hear sounds.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy słyszę dźwięki?", tense: "Present Simple", correctForm: "Do I hear sounds?", rule: "Czy + podmiot + czasownik w formie podstawowej?", type: "Interrogative" },

    { polish: "Kupuję nowy samochód.", tense: "Present Simple", correctForm: "I buy a new car.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie kupuję nowego samochodu.", tense: "Present Simple", correctForm: "I do not buy a new car.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy kupuję nowy samochód?", tense: "Present Simple", correctForm: "Do I buy a new car?", rule: "Czy + podmiot + czasownik w formie podstawowej?", type: "Interrogative" },

    { polish: "Oni malują obraz.", tense: "Present Simple", correctForm: "They paint a picture.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie malują obrazu.", tense: "Present Simple", correctForm: "They do not paint a picture.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy oni malują obraz?", tense: "Present Simple", correctForm: "Do they paint a picture?", rule: "Czy + podmiot + czasownik w formie podstawowej?", type: "Interrogative" },

    { polish: "Wchodzę do pokoju.", tense: "Present Simple", correctForm: "I enter the room.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie wchodzę do pokoju.", tense: "Present Simple", correctForm: "I do not enter the room.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy wchodzę do pokoju?", tense: "Present Simple", correctForm: "Do I enter the room?", rule: "Czy + podmiot + czasownik w formie podstawowej?", type: "Interrogative" },

    { polish: "Oni uczą się matematyki.", tense: "Present Simple", correctForm: "They study math.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie uczą się matematyki.", tense: "Present Simple", correctForm: "They do not study math.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy oni uczą się matematyki?", tense: "Present Simple", correctForm: "Do they study math?", rule: "Czy + podmiot + czasownik w formie podstawowej?", type: "Interrogative" },

    { polish: "Czytam wiadomości.", tense: "Present Simple", correctForm: "I read the news.", rule: "Podmiot + czasownik w formie podstawowej.", type: "Affirmative" },
    { polish: "Nie czytam wiadomości.", tense: "Present Simple", correctForm: "I do not read the news.", rule: "Podmiot + 'do/does not' + czasownik w formie podstawowej.", type: "Negative" },
    { polish: "Czy czytam wiadomości?", tense: "Present Simple", correctForm: "Do I read the news?", rule: "Czy + podmiot + czasownik w formie podstawowej?", type: "Interrogative" }
];

let currentSentence = {};
let score = 0;
let hasAttempted = false;

function getRandomSentence() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
}

function displayNewSentence() {
    currentSentence = getRandomSentence();
    hasAttempted = false;
    
    document.getElementById("polish-sentence").innerText = currentSentence.polish;
    document.getElementById("tense-info").innerText = `Czas: ${currentSentence.tense}`;
    document.getElementById("type-info").innerText = `Typ: ${currentSentence.type}`;
    document.getElementById("user-input").value = '';
    document.getElementById("result").innerText = '';
    document.getElementById("building-rule").innerText = '';
}

function checkAnswer() {
    const userInput = document.getElementById("user-input").value.trim();
    
    if (!hasAttempted) {
        if (userInput.toLowerCase() === currentSentence.correctForm.toLowerCase()) {
            score++;
            document.getElementById("score").innerText = score;
            document.getElementById("result").innerText = `Brawo! Poprawnie. Punkty: ${score}`;
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

document.getElementById("check-btn").addEventListener("click", checkAnswer);
document.getElementById("next-btn").addEventListener("click", displayNewSentence);

// Initialization
displayNewSentence();