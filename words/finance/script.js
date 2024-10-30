const words = [
    { english: "account", polish: "konto" },
    { english: "asset", polish: "aktywa" },
    { english: "balance", polish: "bilans" },
    { english: "bank", polish: "bank" },
    { english: "bond", polish: "obligacja" },
    { english: "budget", polish: "budżet" },
    { english: "capital", polish: "kapitał" },
    { english: "cash", polish: "gotówka" },
    { english: "charge", polish: "opłata" },
    { english: "credit", polish: "kredyt" },
    { english: "debt", polish: "dług" },
    { english: "deficit", polish: "deficyt" },
    { english: "dividend", polish: "dywidenda" },
    { english: "equity", polish: "kapitał własny" },
    { english: "expense", polish: "wydatek" },
    { english: "finance", polish: "finanse" },
    { english: "forecast", polish: "prognoza" },
    { english: "fund", polish: "fundusz" },
    { english: "income", polish: "dochód" },
    { english: "inflation", polish: "inflacja" },
    { english: "investment", polish: "inwestycja" },
    { english: "liability", polish: "zobowiązanie" },
    { english: "loan", polish: "pożyczka" },
    { english: "margin", polish: "marża" },
    { english: "market", polish: "rynek" },
    { english: "net", polish: "netto" },
    { english: "portfolio", polish: "portfel" },
    { english: "profit", polish: "zysk" },
    { english: "rate", polish: "stawka" },
    { english: "return", polish: "zwrot" },
    { english: "risk", polish: "ryzyko" },
    { english: "savings", polish: "oszczędności" },
    { english: "security", polish: "bezpieczeństwo" },
    { english: "share", polish: "udział" },
    { english: "stock", polish: "akcja" },
    { english: "tax", polish: "podatek" },
    { english: "transaction", polish: "transakcja" },
    { english: "valuation", polish: "wycena" },
    { english: "wealth", polish: "bogactwo" },
    { english: "yield", polish: "dochód" },
    { english: "revenue", polish: "przychód" },
    { english: "cost", polish: "koszt" },
    { english: "creditor", polish: "wierzyciel" },
    { english: "debtor", polish: "dłużnik" },
    { english: "liquid", polish: "płynny" },
    { english: "acquisition", polish: "przejęcie" },
    { english: "amortization", polish: "amortyzacja" },
    { english: "appreciation", polish: "aprecjacja" },
    { english: "arbitrage", polish: "arbitraż" },
    { english: "assessment", polish: "ocena" },
    { english: "audit", polish: "audyt" },
    { english: "balance sheet", polish: "bilans" },
    { english: "bear market", polish: "rynek niedźwiedzia" },
    { english: "bull market", polish: "rynek byka" },
    { english: "capital gain", polish: "zysk kapitałowy" },
    { english: "cash flow", polish: "przepływ gotówki" },
    { english: "cost of goods sold", polish: "koszt sprzedanych towarów" },
    { english: "credit score", polish: "wynik kredytowy" },
    { english: "current assets", polish: "aktywa bieżące" },
    { english: "current liabilities", polish: "zobowiązania bieżące" },
    { english: "depreciation", polish: "deprecjacja" },
    { english: "financial statement", polish: "sprawozdanie finansowe" },
    { english: "fixed assets", polish: "aktywa trwałe" },
    { english: "forex", polish: "forex" },
    { english: "franchise", polish: "franczyza" },
    { english: "futures", polish: "futures" },
    { english: "GDP", polish: "PKB" },
    { english: "hedge", polish: "hedging" },
    { english: "index", polish: "indeks" },
    { english: "inflation rate", polish: "wskaźnik inflacji" },
    { english: "interest rate", polish: "oprocentowanie" },
    { english: "investment bank", polish: "bank inwestycyjny" },
    { english: "leveraged buyout", polish: "przejęcie lewarowane" },
    { english: "liquidity", polish: "płynność" },
    { english: "M&A", polish: "fuzje i przejęcia" },
    { english: "market capitalization", polish: "kapitalizacja rynkowa" },
    { english: "mortgage", polish: "hipoteka" },
    { english: "net income", polish: "dochód netto" },
    { english: "net profit", polish: "zysk netto" },
    { english: "option", polish: "opcja" },
    { english: "overhead", polish: "koszty stałe" },
    { english: "payable", polish: "zobowiązanie" },
    { english: "receivable", polish: "należność" },
    { english: "retirement", polish: "emerytura" },
    { english: "supply chain", polish: "łańcuch dostaw" },
    { english: "synergy", polish: "synergia" },
    { english: "tender", polish: "przetarg" },
    { english: "underwriter", polish: "ubezpieczyciel" },
    { english: "valuation model", polish: "model wyceny" },
    { english: "venture capital", polish: "kapitał ryzykowny" },
    { english: "working capital", polish: "kapitał obrotowy" },
    { english: "write-off", polish: "umorzenie" },
    { english: "appraisal", polish: "wycena" },
    { english: "backtesting", polish: "testowanie wsteczne" },
    { english: "barter", polish: "barter" },
    { english: "benchmark", polish: "benchmark" },
    { english: "beta", polish: "beta" },
    { english: "bid", polish: "oferta" },
    { english: "blue chip", polish: "blue chip" },
    { english: "break-even", polish: "punkt rentowności" },
    { english: "broker", polish: "broker" },
    { english: "bullish", polish: "wzrostowy" },
    { english: "bearish", polish: "spadkowy" },
    { english: "capital structure", polish: "struktura kapitału" },
    { english: "cash equivalents", polish: "ekwiwalenty gotówkowe" },
    { english: "change", polish: "zmiana" },
    { english: "CPI", polish: "wskaźnik cen konsumpcyjnych" },
    { english: "cost-benefit analysis", polish: "analiza kosztów i korzyści" },
    { english: "current ratio", polish: "wskaźnik bieżący" },
    { english: "diversification", polish: "dywersyfikacja" },
    { english: "earnings", polish: "dochody" },
    { english: "economic indicator", polish: "wskaźnik ekonomiczny" },
    { english: "exchange rate", polish: "kurs wymiany" },
    { english: "financial advisor", polish: "doradca finansowy" },
    { english: "financial risk", polish: "ryzyko finansowe" },
    { english: "fiscal policy", polish: "polityka fiskalna" },
    { english: "fixed income", polish: "stały dochód" },
    { english: "foreclosure", polish: "przejęcie nieruchomości" },
    { english: "going public", polish: "wejście na giełdę" },
    { english: "goodwill", polish: "wartość firmy" },
    { english: "hedging", polish: "hedging" },
    { english: "impact investing", polish: "inwestowanie z wpływem" },
    { english: "initial public offering", polish: "pierwsza oferta publiczna" },
    { english: "insider trading", polish: "handel wewnętrzny" },
    { english: "investment strategy", polish: "strategia inwestycyjna" },
    { english: "issuer", polish: "emiter" },
    { english: "leverage", polish: "lewarowanie" },
    { english: "liquidity risk", polish: "ryzyko płynności" },
    { english: "market risk", polish: "ryzyko rynkowe" },
    { english: "monetary policy", polish: "polityka monetarna" },
    { english: "net asset value", polish: "wartość aktywów netto" },
    { english: "overvalued", polish: "przeszacowany" },
    { english: "undervalued", polish: "niedoszacowany" },
    { english: "pension", polish: "emerytura" },
    { english: "real estate", polish: "nieruchomość" },
    { english: "recession", polish: "recesja" },
    { english: "risk assessment", polish: "ocena ryzyka" },
    { english: "savings account", polish: "konto oszczędnościowe" },
    { english: "scale", polish: "skala" },
    { english: "speculation", polish: "spekulacja" },
    { english: "spread", polish: "spread" },
    { english: "stock exchange", polish: "giełda" },
    { english: "trader", polish: "trader" },
    { english: "valuation report", polish: "raport wyceny" },
    { english: "volatile", polish: "zmienny" },
    { english: "wealth management", polish: "zarządzanie majątkiem" },
    { english: "zero-sum game", polish: "gra o sumie zerowej" },
    { english: "accrual", polish: "nagromadzenie" },
    { english: "bankruptcy", polish: "upadłość" },
    { english: "benefit", polish: "korzyść" },
    { english: "business model", polish: "model biznesowy" },
    { english: "capital investment", polish: "inwestycja kapitałowa" },
    { english: "collateral", polish: "zabezpieczenie" },
    { english: "compliance", polish: "zgodność" },
    { english: "contribution", polish: "wkład" },
    { english: "cost structure", polish: "struktura kosztów" },
    { english: "credit limit", polish: "limit kredytowy" },
    { english: "cyclical", polish: "cykliczny" },
    { english: "deferred", polish: "odroczony" },
    { english: "demand", polish: "popyt" },
    { english: "economic growth", polish: "wzrost gospodarczy" },
    { english: "expenditure", polish: "wydatki" },
    { english: "fixed cost", polish: "koszt stały" },
    { english: "fiscal year", polish: "rok obrotowy" },
    { english: "globalization", polish: "globalizacja" },
    { english: "gross margin", polish: "marża brutto" },
    { english: "insolvency", polish: "niewypłacalność" },
    { english: "intangible asset", polish: "aktywo niematerialne" },
    { english: "key performance indicator", polish: "kluczowy wskaźnik efektywności" },
    { english: "loan term", polish: "okres pożyczki" },
    { english: "monopoly", polish: "monopol" },
    { english: "negative equity", polish: "ujemny kapitał własny" },
    { english: "non-performing loan", polish: "kredyt przeterminowany" },
    { english: "operating income", polish: "dochód operacyjny" },
    { english: "par value", polish: "wartość nominalna" },
    { english: "peer-to-peer lending", polish: "pożyczki między użytkownikami" },
    { english: "pro forma", polish: "pro forma" },
    { english: "real return", polish: "realny zwrot" },
    { english: "retained earnings", polish: "zyski zatrzymane" },
    { english: "risk management", polish: "zarządzanie ryzykiem" },
    { english: "sensitivity analysis", polish: "analiza wrażliwości" },
    { english: "sovereign debt", polish: "dług publiczny" },
    { english: "subsidy", polish: "subwencja" },
    { english: "tangible asset", polish: "aktywo materialne" },
    { english: "tax return", polish: "zeznanie podatkowe" },
    { english: "trough", polish: "dno" },
    { english: "unsecured loan", polish: "pożyczka nie zabezpieczona" },
    { english: "utility", polish: "użyteczność" },
    { english: "vulnerability", polish: "wrażliwość" },
    { english: "wage", polish: "płaca" },
    { english: "yield curve", polish: "krzywa dochodowości" },
    { english: "zero-based budgeting", polish: "budżetowanie zerowe" },
    { english: "accrued interest", polish: "odsetki naliczone" },
    { english: "advisory fee", polish: "opłata doradcza" },
    { english: "annual report", polish: "raport roczny" },
    { english: "arbitration", polish: "arbitraż" },
    { english: "asset allocation", polish: "alokacja aktywów" },
    { english: "bear", polish: "niedźwiedź" },
    { english: "bonds payable", polish: "obligacje do zapłaty" },
    { english: "bull", polish: "byk" },
    { english: "capital budgeting", polish: "budżetowanie kapitałowe" },
    { english: "cash reserve", polish: "rezerwa gotówkowa" },
    { english: "charitable donation", polish: "darowizna charytatywna" },
    { english: "compounding", polish: "złożony" },
    { english: "contingency", polish: "kontyngencja" },
    { english: "currency risk", polish: "ryzyko walutowe" },
    { english: "discretionary spending", polish: "wydatki dowolne" },
    { english: "financial planning", polish: "planowanie finansowe" },
    { english: "interest expense", polish: "koszt odsetek" },
    { english: "merchant", polish: "handlowiec" },
    { english: "mortgage-backed security", polish: "papier wartościowy zabezpieczony hipoteką" },
    { english: "overdraft", polish: "debetr" },
    { english: "payroll", polish: "wynagrodzenia" },
    { english: "revenue stream", polish: "strumień przychodów" },
    { english: "self-employment", polish: "samozatrudnienie" },
    { english: "special assessment", polish: "specjalna ocena" },
    { english: "unemployment rate", polish: "wskaźnik bezrobocia" },
    { english: "workforce", polish: "siła robocza" },
    { english: "yield management", polish: "zarządzanie dochodami" },
    { english: "zoning", polish: "strefowanie" },
    { english: "accounting", polish: "księgowość" },
    { english: "advance", polish: "zaliczka" },
    { english: "advocate", polish: "adwokat" },
    { english: "aggregate", polish: "agregat" },
    { english: "allocation", polish: "alokacja" },
    { english: "benchmarking", polish: "benchmarking" },
    { english: "breakdown", polish: "podział" },
    { english: "brokerage", polish: "biuro maklerskie" },
    { english: "certification", polish: "certyfikacja" },
    { english: "collaboration", polish: "współpraca" },
    { english: "commitment", polish: "zaangażowanie" },
    { english: "comparison", polish: "porównanie" },
    { english: "consolidation", polish: "konsolidacja" },
    { english: "contingent", polish: "warunkowy" },
    { english: "correlation", polish: "korelacja" },
    { english: "counterparty", polish: "kontrahent" },
    { english: "deduction", polish: "odliczenie" },
    { english: "deviation", polish: "odchylenie" },
    { english: "disclosure", polish: "ujawnienie" },
    { english: "divestment", polish: "wycofanie inwestycji" },
    { english: "duty", polish: "obowiązek" },
    { english: "equilibrium", polish: "równowaga" },
    { english: "exempt", polish: "zwolniony" },
    { english: "extrapolate", polish: "ekstrapolować" },
    { english: "forecasting", polish: "prognozowanie" },
    { english: "fundamentals", polish: "fundamenty" },
    { english: "impairment", polish: "niedobór" },
    { english: "incentive", polish: "zachęta" },
    { english: "infrastructure", polish: "infrastruktura" },
    { english: "integrity", polish: "integralność" },
    { english: "intermediary", polish: "pośrednik" },
    { english: "inventory", polish: "inwentarz" },
    { english: "liquidation", polish: "likwidacja" },
    { english: "merger", polish: "fuzja" },
    { english: "national debt", polish: "dług narodowy" },
    { english: "net worth", polish: "wartość netto" },
    { english: "obligation", polish: "obowiązek" },
    { english: "opportunity cost", polish: "koszt alternatywny" },
    { english: "organization", polish: "organizacja" },
    { english: "outlook", polish: "prognoza" },
    { english: "partnership", polish: "partnerstwo" },
    { english: "performance", polish: "wynik" },
    { english: "profit margin", polish: "marża zysku" },
    { english: "progress", polish: "postęp" },
    { english: "regulation", polish: "regulacja" },
    { english: "retirement plan", polish: "plan emerytalny" },
    { english: "risk tolerance", polish: "tolerancja ryzyka" },
    { english: "schedule", polish: "harmonogram" },
    { english: "sustainability", polish: "zrównoważony rozwój" },
    { english: "transaction cost", polish: "koszt transakcji" },
    { english: "transparency", polish: "przejrzystość" },
    { english: "trustee", polish: "powiernik" },
    { english: "valuation adjustment", polish: "korekta wyceny" },
    { english: "warranty", polish: "gwarancja" },
    { english: "yield spread", polish: "spread dochodowy" },
    { english: "zoning law", polish: "prawo strefowe" }
];

let selectedWords = [];
let currentIndex = 0;
let isEnglishToPolish = true;
let score = 0;
let answerGiven = false; // Śledzenie, czy odpowiedź została podana

// Elementy DOM
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

// Inicjalizacja
function init() {
    selectedWords = words.slice(); // Wybierz wszystkie słowa
    currentIndex = 0;
    displayWord(); // Wyświetl pierwsze słowo
}

// Wybór słów
document.querySelectorAll('.word-select-btn').forEach(button => {
    button.addEventListener('click', () => {
        const count = button.getAttribute('data-count');
        if (count === 'all') {
            selectedWords = words.slice(); // Wybierz wszystkie słowa
        } else {
            const num = Math.min(parseInt(count), words.length);
            selectedWords = getRandomWords(words, num); // Wybierz losowe słowa
        }
        currentIndex = 0;
        result.textContent = `Wybrano ${selectedWords.length} słówek do nauki.`; // Wyświetl informację
        setTimeout(displayWord, 2000); // Wyświetl pierwsze słowo
    });
});

// Funkcja losująca słowa
function getRandomWords(sourceArray, count) {
    const shuffled = sourceArray.slice().sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// Wyświetlanie słowa
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
}

// Generowanie opcji do wyboru
function generateOptions(correctAnswer) {
    optionsContainer.innerHTML = ''; // Wyczyść poprzednie opcje

    const options = [correctAnswer];
    while (options.length < 4) {
        const randomWord = selectedWords[Math.floor(Math.random() * selectedWords.length)];
        if (isEnglishToPolish) {
            if (!options.includes(randomWord.polish)) options.push(randomWord.polish);
        } else {
            if (!options.includes(randomWord.english)) options.push(randomWord.english);
        }
    }

    shuffle(options); // Tasowanie opcji

    options.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.className = 'option-btn';
        btn.addEventListener('click', () => checkAnswer(option, correctAnswer));
        optionsContainer.appendChild(btn);
    });
}

// Sprawdzanie odpowiedzi
function checkAnswer(selected, correct) {
    if (answerGiven) return; // Jeśli odpowiedź została już podana, nie rób nic

    const isCorrect = selected === correct || userInput.value.trim().toLowerCase() === correct.toLowerCase();
    
    if (isCorrect) {
        result.textContent = "Dobrze!";
        score++; // Zwiększ wynik
        container.classList.add('bounce'); // Animacja bounce

        // Dodaj klasę .btn-yellow do wszystkich przycisków
        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(button => button.classList.add('btn-yellow'));

        // Usuń klasy po pewnym czasie
        setTimeout(() => {
            container.classList.remove('bounce');
            buttons.forEach(button => button.classList.remove('btn-yellow'));
        }, 600);
    } else {
        result.textContent = `Źle! Poprawne tłumaczenie to: ${correct}`;
        container.classList.add('shake'); // Animacja shake

        // Dodaj klasę .btn-red do wszystkich przycisków
        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(button => button.classList.add('btn-red'));

        // Usuń klasy po pewnym czasie
        setTimeout(() => {
            container.classList.remove('shake');
            buttons.forEach(button => button.classList.remove('btn-red'));
        }, 600);
    }

    answerGiven = true; // Oznacz, że odpowiedź została podana
}

// Obsługa przycisku "Submit"
submitBtn.addEventListener('click', () => {
    const correctTranslation = isEnglishToPolish ? selectedWords[currentIndex].polish : selectedWords[currentIndex].english;
    checkAnswer(null, correctTranslation);
});

// Obsługa przycisku "Next"
nextBtn.addEventListener('click', () => {
    if (!answerGiven) return; // Jeśli odpowiedź nie została podana, nie rób nic
    currentIndex = (currentIndex + 1) % selectedWords.length; // Przechodź do następnego słowa (cyklicznie)
    answerGiven = false; // Zresetuj stan
    displayWord();
});

// Toggle tłumaczenia
toggleTranslationBtn.addEventListener('click', () => {
    const correctTranslation = isEnglishToPolish ? selectedWords[currentIndex].polish : selectedWords[currentIndex].english;
    translationDisplay.textContent = translationDisplay.textContent ? '' : correctTranslation;
});

// Zmiana języka
switchLanguageBtn.addEventListener('click', () => {
    isEnglishToPolish = !isEnglishToPolish; // Zmień kierunek języka
    displayWord(); // Odśwież wyświetlane słowo
});

// Inicjalizacja
init();

// Funkcja tasująca
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Przycisk do ukrywania/pokazywania kontenera wyboru słów
const toggleButton = document.getElementById('hideButton');
const myDiv = document.getElementById('wordSelectContainer');

toggleButton.addEventListener('click', () => {
    myDiv.style.display = myDiv.style.display === 'none' ? 'block' : 'none'; // Przełącz widoczność
});