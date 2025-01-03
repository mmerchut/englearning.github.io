const words = [
    {english: "exchange-traded products (ETPs) - ETPs are investment products that are traded on stock exchanges, similar to stocks, and include ETFs, ETNs, and ETCs", polish: "produkty notowane na giełdach (ETP) - ETP to produkty inwestycyjne, które są notowane na giełdach papierów wartościowych, podobnie jak akcje, i obejmują ETF, ETN i ETC."},
    {english: "commodity futures - Commodity futures are contracts to buy or sell a commodity at a future date for a predetermined price", polish: "futures na towary - Futures na towary to kontrakty na zakup lub sprzedaż towaru w przyszłości po ustalonej cenie."},
    {english: "fixed income securities - Fixed income securities are investments that pay a return in the form of regular, fixed payments", polish: "papiery wartościowe o stałym dochodzie - Papiery wartościowe o stałym dochodzie to inwestycje, które wypłacają regularne, stałe płatności."},
    {english: "forex trading - Forex trading involves buying and selling currencies with the goal of making a profit from exchange rate fluctuations", polish: "handel walutami - Handel walutami polega na kupnie i sprzedaży walut w celu uzyskania zysku z wahań kursów wymiany."},
    {english: "cryptocurrency - Cryptocurrency is a digital or virtual currency that uses cryptography for security and operates independently of a central bank", polish: "kryptowaluty - Kryptowaluty to cyfrowa lub wirtualna waluta, która wykorzystuje kryptografię do zapewnienia bezpieczeństwa i działa niezależnie od centralnego banku."},
    {english: "index-linked bonds - Index-linked bonds are bonds where the return is tied to a specific index, such as inflation", polish: "obligacje indeksowane - Obligacje indeksowane to papiery dłużne, których zwrot jest powiązany z określonym indeksem, takim jak inflacja."},
    {english: "call option - A call option is a financial contract that gives the holder the right to buy an asset at a specific price within a specific time frame", polish: "opcja kupna - Opcja kupna to kontrakt finansowy, który daje posiadaczowi prawo do zakupu aktywa po określonej cenie w określonym czasie."},
    {english: "put option - A put option is a financial contract that gives the holder the right to sell an asset at a specific price within a specific time frame", polish: "opcja sprzedaży - Opcja sprzedaży to kontrakt finansowy, który daje posiadaczowi prawo do sprzedaży aktywa po określonej cenie w określonym czasie."},
    {english: "collateralized debt obligations (CDOs) - CDOs are financial products that pool together a portfolio of debt instruments and divide them into different tranches", polish: "obligacje zabezpieczone długiem (CDO) - CDO to produkty finansowe, które łączą portfel instrumentów dłużnych i dzielą je na różne tranches."},
    {english: "municipal bonds - Municipal bonds are debt securities issued by local governments or municipalities to fund public projects", polish: "obligacje municypalne - Obligacje municypalne to papiery dłużne emitowane przez samorządy lokalne w celu finansowania projektów publicznych."},
    {english: "credit default swaps (CDS) - CDS are financial derivatives that act as a form of insurance against the default of debt", polish: "swap ryzyka kredytowego (CDS) - CDS to instrumenty pochodne, które stanowią formę ubezpieczenia przed niewypłacalnością długu."},
    {english: "structured notes - Structured notes are debt securities with embedded derivatives that offer customized returns based on the performance of an underlying asset", polish: "obligacje strukturyzowane - Obligacje strukturyzowane to papiery dłużne z wbudowanymi instrumentami pochodnymi, które oferują dostosowane zwroty w zależności od wydajności aktywa bazowego."},
    {english: "asset-backed securities (ABS) - ABS are financial securities created by pooling together various types of loans, such as mortgages or car loans, and issuing securities backed by these assets", polish: "papierów wartościowych zabezpieczonych aktywami (ABS) - ABS to papiery wartościowe stworzone poprzez połączenie różnych rodzajów pożyczek, takich jak kredyty hipoteczne lub kredyty samochodowe, i wydanie papierów wartościowych zabezpieczonych tymi aktywami."},
    {english: "commodity ETFs - Commodity ETFs are exchange-traded funds that invest in physical commodities, such as gold, silver, or oil", polish: "fundusze ETF na towary - Fundusze ETF na towary to fundusze notowane na giełdach, które inwestują w fizyczne towary, takie jak złoto, srebro czy ropa."},
    {english: "direct stock purchase plans (DSPPs) - DSPPs allow investors to purchase stock directly from a company without a broker", polish: "plany zakupu akcji bezpośrednich (DSPP) - DSPP pozwalają inwestorom na zakup akcji bezpośrednio od firmy bez pośrednika."},
    {english: "capital preservation - Capital preservation is an investment strategy focused on preventing loss of principal while providing modest returns", polish: "zachowanie kapitału - Zachowanie kapitału to strategia inwestycyjna skoncentrowana na zapobieganiu utracie kapitału przy jednoczesnym uzyskaniu umiarkowanych zwrotów."},
    {english: "synthetic ETF - A synthetic ETF is an exchange-traded fund that aims to replicate the performance of an index through the use of derivatives", polish: "syntetyczny ETF - Syntetyczny ETF to fundusz notowany na giełdach, który ma na celu odwzorowanie wyników indeksu za pomocą instrumentów pochodnych."},
    {english: "preferred shares - Preferred shares are a type of equity that gives shareholders priority over common stockholders for dividends and in liquidation", polish: "akcje uprzywilejowane - Akcje uprzywilejowane to rodzaj akcji, które dają akcjonariuszom pierwszeństwo przed akcjonariuszami akcji zwykłych w wypłacie dywidendy i w przypadku likwidacji."},
    {english: "stocks - Stocks represent ownership in a company and constitute a claim on part of the company’s assets and earnings", polish: "akcje - Akcje reprezentują własność w firmie i stanowią roszczenie do części aktywów i zysków firmy."},
    {english: "bonds - Bonds are debt securities issued by corporations or governments to raise capital, with the promise to repay the principal with interest", polish: "obligacje - Obligacje to papiery dłużne emitowane przez korporacje lub rządy w celu pozyskania kapitału, z obietnicą spłaty kapitału wraz z odsetkami."},
    {english: "mutual funds - Mutual funds pool money from many investors to purchase a diversified portfolio of stocks, bonds, or other securities", polish: "fundusze inwestycyjne - Fundusze inwestycyjne gromadzą środki od wielu inwestorów, aby zakupić zdywersyfikowany portfel akcji, obligacji lub innych papierów wartościowych."},
    {english: "exchange-traded funds (ETFs) - ETFs are investment funds that hold a diversified portfolio of assets and are traded on stock exchanges", polish: "fundusze ETF - Fundusze ETF to fundusze inwestycyjne, które posiadają zdywersyfikowany portfel aktywów i są notowane na giełdach papierów wartościowych."},
    {english: "real estate investment trusts (REITs) - REITs are companies that own, operate, or finance real estate that produces income", polish: "fundusze inwestycyjne w nieruchomości (REIT) - REIT to firmy, które posiadają, zarządzają lub finansują nieruchomości generujące dochód."},
    {english: "certificate of deposit (CD) - A CD is a savings account offered by banks with a fixed interest rate and maturity date", polish: "certyfikat depozytowy (CD) - CD to rachunek oszczędnościowy oferowany przez banki, z ustaloną stopą procentową i terminem zapadalności."},
    {english: "options - Options are financial derivatives that give the holder the right, but not the obligation, to buy or sell an asset at a predetermined price before a specific date", polish: "opcje - Opcje to instrumenty finansowe pochodne, które dają posiadaczowi prawo, ale nie obowiązek, zakupu lub sprzedaży aktywa po ustalonej cenie przed określoną datą."},
    {english: "futures - Futures are standardized contracts obligating the buyer to purchase, or the seller to sell, an asset at a predetermined price and date", polish: "kontrakty futures - Kontrakty futures to standaryzowane umowy zobowiązujące kupującego do zakupu, a sprzedającego do sprzedaży aktywa po ustalonej cenie i dacie."},
    {english: "commodities - Commodities are basic goods used in commerce that are interchangeable with other goods of the same type, such as gold, oil, or agricultural products", polish: "towary - Towary to podstawowe dobra używane w handlu, które są wymienne z innymi dobrami tego samego typu, takimi jak złoto, ropa czy produkty rolne."},
    {english: "foreign exchange (Forex) - Forex refers to the global marketplace for buying and selling currencies", polish: "rynek walutowy (Forex) - Forex to globalny rynek, na którym dokonuje się zakupu i sprzedaży walut."},
    {english: "treasury bills - Treasury bills are short-term government securities with maturities of one year or less", polish: "bony skarbowe - Bony skarbowe to krótkoterminowe papiery wartościowe emitowane przez rząd, o terminie zapadalności do roku."},
    {english: "municipal bonds - Municipal bonds are debt securities issued by local governments or municipalities to fund public projects", polish: "obligacje municypalne - Obligacje municypalne to papiery dłużne emitowane przez samorządy lokalne w celu finansowania projektów publicznych."},
    {english: "preferred stock - Preferred stock is a class of stock that provides shareholders with a fixed dividend, paid before common stock dividends", polish: "akcje uprzywilejowane - Akcje uprzywilejowane to rodzaj akcji, które zapewniają akcjonariuszom stałą dywidendę, wypłacaną przed dywidendami z akcji zwykłych."},
    {english: "common stock - Common stock represents ownership in a company and gives shareholders voting rights, but dividends are not guaranteed", polish: "akcje zwykłe - Akcje zwykłe reprezentują własność w firmie i dają akcjonariuszom prawo głosu, ale dywidendy nie są gwarantowane."},
    {english: "index funds - Index funds are mutual funds or ETFs that track a specific market index, such as the S&P 500", polish: "fundusze indeksowe - Fundusze indeksowe to fundusze inwestycyjne lub ETF, które śledzą określony indeks rynkowy, taki jak S&P 500."},
    {english: "hedge funds - Hedge funds are pooled investment funds that employ various strategies to earn high returns for their investors", polish: "fundusze hedgingowe - Fundusze hedgingowe to fundusze inwestycyjne, które stosują różnorodne strategie w celu osiągnięcia wysokich zwrotów dla swoich inwestorów."},
    {english: "private equity - Private equity refers to investment funds that directly invest in private companies or buy out public companies", polish: "kapitał prywatny - Kapitał prywatny odnosi się do funduszy inwestycyjnych, które inwestują bezpośrednio w prywatne firmy lub wykupują firmy publiczne."},
    {english: "venture capital - Venture capital is a type of private equity funding that is typically used to invest in start-ups or early-stage companies", polish: "kapitał venture - Kapitał venture to rodzaj finansowania kapitałowego, który jest zazwyczaj wykorzystywany do inwestowania w start-upy lub firmy na wczesnym etapie rozwoju."},
    {english: "structured products - Structured products are pre-packaged investment strategies that typically involve derivatives and aim to provide specific returns or outcomes", polish: "produkty strukturyzowane - Produkty strukturyzowane to gotowe strategie inwestycyjne, które zazwyczaj obejmują instrumenty pochodne i mają na celu uzyskanie określonych zwrotów lub wyników."},
    {english: "crowdfunding - Crowdfunding is the practice of funding a project or venture by raising small amounts of money from a large number of people, typically via the internet", polish: "crowdfunding - Crowdfunding to praktyka finansowania projektu lub przedsięwzięcia poprzez zbieranie niewielkich kwot od dużej liczby osób, zazwyczaj za pośrednictwem internetu."},
    {english: "debt securities - Debt securities are financial instruments representing a loan made by an investor to a borrower, usually a corporation or government", polish: "papiery dłużne - Papiery dłużne to instrumenty finansowe reprezentujące pożyczkę udzieloną przez inwestora pożyczkodawcy, zwykle korporacji lub rządowi."},
    {english: "futures contract - A futures contract is a standardized agreement to buy or sell a specific asset at a predetermined price at a future date", polish: "kontrakt terminowy - Kontrakt terminowy to standardowa umowa na zakup lub sprzedaż określonego aktywa po ustalonej cenie w przyszłości."},
    {english: "foreign direct investment (FDI) - FDI refers to investments made by a company or individual in assets or businesses located in a foreign country", polish: "bezpośrednie inwestycje zagraniczne (FDI) - FDI odnosi się do inwestycji dokonywanych przez firmę lub osobę w aktywa lub firmy znajdujące się w obcym kraju."},
    {english: "investment portfolio - An investment portfolio is a collection of assets, such as stocks, bonds, and real estate, owned by an individual or institution", polish: "portfel inwestycyjny - Portfel inwestycyjny to zbiór aktywów, takich jak akcje, obligacje i nieruchomości, posiadanych przez osobę lub instytucję."},
    {english: "market capitalization - Market capitalization refers to the total value of a company's outstanding shares of stock, calculated by multiplying the stock price by the total number of shares", polish: "kapitalizacja rynkowa - Kapitalizacja rynkowa odnosi się do całkowitej wartości wyemitowanych akcji spółki, obliczanej przez pomnożenie ceny akcji przez łączną liczbę akcji."},
    {english: "real estate investment trust (REIT) - A REIT is a company that owns, operates, or finances income-producing real estate", polish: "fundusz inwestycyjny w nieruchomości (REIT) - REIT to firma, która posiada, zarządza lub finansuje nieruchomości przynoszące dochód."},
    {english: "leveraged buyout (LBO) - An LBO is a financial transaction in which a company is purchased using a significant amount of borrowed money", polish: "wykup lewarowany (LBO) - LBO to transakcja finansowa, w której firma jest kupowana przy użyciu znacznej ilości pożyczonych pieniędzy."},
    {english: "private equity - Private equity involves investing in private companies that are not publicly traded, often through venture capital or buyouts", polish: "kapitał prywatny - Kapitał prywatny obejmuje inwestowanie w prywatne firmy, które nie są notowane na giełdzie, często za pośrednictwem venture capital lub wykupów."},
    {english: "debt-to-equity ratio - The debt-to-equity ratio is a financial metric used to assess a company's financial leverage by comparing its total debt to its equity", polish: "wskaźnik zadłużenia do kapitału własnego - Wskaźnik zadłużenia do kapitału własnego to miara finansowa używana do oceny dźwigni finansowej firmy poprzez porównanie jej całkowitego zadłużenia do kapitału własnego."},
    {english: "spread betting - Spread betting is a type of financial betting where the payoff is based on the accuracy of the investor's prediction of an asset's price movement", polish: "zakłady na różnice kursowe - Zakłady na różnice kursowe to rodzaj zakładów finansowych, w których wypłata zależy od trafności prognozy inwestora dotyczącej ruchu ceny aktywa."},
    {english: "distressed securities - Distressed securities are financial instruments issued by companies that are in financial trouble or near bankruptcy", polish: "papiery wartościowe w trudnej sytuacji - Papiery wartościowe w trudnej sytuacji to instrumenty finansowe emitowane przez firmy, które mają problemy finansowe lub są bliskie bankructwa."},
    {english: "convertible bonds - Convertible bonds are debt securities that can be converted into a predetermined number of the company’s equity shares", polish: "obligacje zamienne - Obligacje zamienne to papiery dłużne, które mogą zostać przekształcone w ustaloną liczbę akcji kapitałowych firmy."},
    {english: "corporate bonds - Corporate bonds are debt securities issued by corporations to raise capital, with fixed or variable interest payments", polish: "obligacje korporacyjne - Obligacje korporacyjne to papiery dłużne emitowane przez korporacje w celu pozyskania kapitału, z ustalonymi lub zmiennymi płatnościami odsetkowymi."},
    {english: "Treasury bonds - Treasury bonds are long-term debt securities issued by a government to support government spending", polish: "obligacje skarbowe - Obligacje skarbowe to długoterminowe papiery dłużne emitowane przez rząd w celu wspierania wydatków rządowych."},
    {english: "capital gains tax - Capital gains tax is a tax levied on the profit made from the sale of an asset or investment", polish: "podatek od zysków kapitałowych - Podatek od zysków kapitałowych to podatek nakładany na zysk uzyskany ze sprzedaży aktywa lub inwestycji."},
    {english: "hedge fund - A hedge fund is a pooled investment fund that employs various strategies to earn a high return for its investors", polish: "fundusz hedgingowy - Fundusz hedgingowy to zbiorowy fundusz inwestycyjny, który stosuje różne strategie w celu osiągnięcia wysokich zwrotów dla swoich inwestorów."},
    {english: "short selling - Short selling is the practice of selling an asset that the seller does not own, with the intention of buying it back at a lower price", polish: "sprzedaż krótka - Sprzedaż krótka to praktyka sprzedaży aktywa, którego sprzedawca nie posiada, z zamiarem odkupienia go po niższej cenie."},
    {english: "mutual funds - Mutual funds are investment vehicles that pool together funds from multiple investors to purchase a diversified portfolio of assets", polish: "fundusze inwestycyjne - Fundusze inwestycyjne to pojazdy inwestycyjne, które zbierają fundusze od wielu inwestorów w celu zakupu zdywersyfikowanego portfela aktywów."},
    {english: "venture capital - Venture capital is a type of private equity funding provided to startups and small businesses with high growth potential", polish: "venture capital - Venture capital to rodzaj finansowania kapitałem prywatnym udzielanego startupom i małym firmom z dużym potencjałem wzrostu."},
    {english: "index fund - An index fund is a type of mutual fund or ETF that aims to replicate the performance of a specific market index", polish: "fundusz indeksowy - Fundusz indeksowy to rodzaj funduszu inwestycyjnego lub ETF, który ma na celu odwzorowanie wyników określonego indeksu rynkowego."},
    {english: "alternative investments - Alternative investments refer to investment assets that fall outside traditional categories like stocks, bonds, or cash", polish: "inwestycje alternatywne - Inwestycje alternatywne to aktywa inwestycyjne, które znajdują się poza tradycyjnymi kategoriami takimi jak akcje, obligacje czy gotówka."},
    {english: "currency exchange - Currency exchange is the process of converting one country's currency into another", polish: "wymiana walut - Wymiana walut to proces przekształcania jednej waluty na walutę innego kraju."},
    {english: "capital preservation - Capital preservation is an investment strategy aimed at preventing the loss of an investor's initial capital", polish: "preserwacja kapitału - Preserwacja kapitału to strategia inwestycyjna mająca na celu zapobieżenie utracie początkowego kapitału inwestora."},
    {english: "securitization - Securitization is the process of transforming illiquid assets into tradable securities", polish: "sekurytyzacja - Sekurytyzacja to proces przekształcania aktywów nieliqudnych w papiery wartościowe, które można handlować."},
    {english: "commodity trading - Commodity trading involves buying and selling raw materials or primary agricultural products", polish: "handel towarami - Handel towarami obejmuje kupno i sprzedaż surowych materiałów lub podstawowych produktów rolnych."},
    {english: "structured products - Structured products are pre-packaged investment strategies based on derivatives, typically created by investment banks", polish: "produkty strukturyzowane - Produkty strukturyzowane to z góry zapakowane strategie inwestycyjne oparte na instrumentach pochodnych, zwykle tworzone przez banki inwestycyjne."},
    {english: "real estate crowdfunding - Real estate crowdfunding allows investors to pool money to finance real estate projects", polish: "crowdfunding nieruchomości - Crowdfunding nieruchomości pozwala inwestorom na połączenie funduszy w celu finansowania projektów nieruchomościowych."},
    {english: "municipal bonds - Municipal bonds are debt securities issued by local government entities to fund public projects", polish: "obligacje municypalne - Obligacje municypalne to papiery dłużne emitowane przez lokalne jednostki rządowe w celu finansowania projektów publicznych."},
    {english: "private placement - A private placement is the sale of securities to a small group of investors, typically without a public offering", polish: "oferta prywatna - Oferta prywatna to sprzedaż papierów wartościowych do małej grupy inwestorów, zazwyczaj bez publicznej oferty."},
    {english: "capital appreciation - Capital appreciation refers to the increase in the value of an asset over time", polish: "aprecjacja kapitałowa - Aprecjacja kapitałowa odnosi się do wzrostu wartości aktywa w czasie."},
    {english: "credit default swap - A credit default swap is a financial contract that provides protection against the default of debt obligations", polish: "swap kredytowy - Swap kredytowy to umowa finansowa, która zapewnia ochronę przed niewykonaniem zobowiązań dłużnych."},
    {english: "stock buyback - A stock buyback is when a company repurchases its own shares from the marketplace", polish: "odkup akcji - Odkup akcji to sytuacja, w której firma odkupi swoje akcje z rynku."},
    {english: "warrants - Warrants are securities that give the holder the right, but not the obligation, to buy a stock at a specific price before a certain date", polish: "warranty - Warranty to papiery wartościowe, które dają posiadaczowi prawo, ale nie obowiązek, zakupu akcji po określonej cenie przed określoną datą."},
    {english: "short-term investments - Short-term investments are financial assets that are intended to be sold or converted into cash within one year", polish: "inwestycje krótkoterminowe - Inwestycje krótkoterminowe to aktywa finansowe, które mają być sprzedane lub przekształcone w gotówkę w ciągu roku."},
    {english: "fixed income securities - Fixed income securities are investment instruments that pay a fixed interest over a predetermined period", polish: "papiery wartościowe o stałym dochodzie - Papiery wartościowe o stałym dochodzie to instrumenty inwestycyjne, które wypłacają stałe odsetki przez określony czas."},
    {english: "mutual fund management - Mutual fund management involves overseeing the operations of a mutual fund, including investment decisions", polish: "zarządzanie funduszem inwestycyjnym - Zarządzanie funduszem inwestycyjnym obejmuje nadzorowanie operacji funduszu inwestycyjnego, w tym podejmowanie decyzji inwestycyjnych."},
    {english: "treasury bills - Treasury bills are short-term debt securities issued by the government, typically with maturities of one year or less", polish: "bony skarbowe - Bony skarbowe to krótkoterminowe papiery dłużne emitowane przez rząd, zazwyczaj o terminie zapadalności do roku lub krótszym."},
    {english: "investment grade bonds - Investment grade bonds are bonds that are rated by credit agencies as having a relatively low risk of default", polish: "obligacje o ratingu inwestycyjnym - Obligacje o ratingu inwestycyjnym to obligacje, które otrzymały ocenę od agencji ratingowych jako o stosunkowo niskim ryzyku niewypłacalności."},
    {english: "portfolio diversification - Portfolio diversification is an investment strategy that involves spreading investments across various asset classes to reduce risk", polish: "dywersyfikacja portfela - Dywersyfikacja portfela to strategia inwestycyjna, która polega na rozpraszaniu inwestycji w różnych klasach aktywów w celu zmniejszenia ryzyka."},
    {english: "capital gains - Capital gains are the profits earned from the sale of an asset such as stocks or real estate", polish: "zyski kapitałowe - Zyski kapitałowe to zyski uzyskane ze sprzedaży aktywów, takich jak akcje lub nieruchomości."},
    {english: "municipal bond funds - Municipal bond funds are mutual funds that invest primarily in municipal bonds", polish: "fundusze obligacji municypalnych - Fundusze obligacji municypalnych to fundusze inwestycyjne, które inwestują głównie w obligacje municypalne."}

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