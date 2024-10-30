const words = [
    { english: "ability", polish: "zdolność" },
    { english: "absence", polish: "nieobecność" },
    { english: "accept", polish: "akceptować" },
    { english: "achieve", polish: "osiągnąć" },
    { english: "action", polish: "działanie" },
    { english: "active", polish: "aktywny" },
    { english: "activity", polish: "aktywność" },
    { english: "actor", polish: "aktor" },
    { english: "add", polish: "dodać" },
    { english: "address", polish: "adres" },
    { english: "advance", polish: "postęp" },
    { english: "advice", polish: "rada" },
    { english: "affect", polish: "wpływać" },
    { english: "afraid", polish: "przestraszony" },
    { english: "age", polish: "wiek" },
    { english: "agency", polish: "agencja" },
    { english: "agree", polish: "zgadzać się" },
    { english: "agreement", polish: "umowa" },
    { english: "allow", polish: "pozwalać" },
    { english: "almost", polish: "prawie" },
    { english: "along", polish: "wzdłuż" },
    { english: "already", polish: "już" },
    { english: "always", polish: "zawsze" },
    { english: "among", polish: "wśród" },
    { english: "amount", polish: "kwota" },
    { english: "analysis", polish: "analiza" },
    { english: "and", polish: "i" },
    { english: "anger", polish: "gniew" },
    { english: "animal", polish: "zwierzę" },
    { english: "answer", polish: "odpowiedź" },
    { english: "anxiety", polish: "lęk" },
    { english: "anxious", polish: "zaniepokojony" },
    { english: "any", polish: "jakikolwiek" },
    { english: "appear", polish: "pojawiać się" },
    { english: "appearance", polish: "wygląd" },
    { english: "apply", polish: "stosować" },
    { english: "appoint", polish: "wyznaczać" },
    { english: "approach", polish: "podejście" },
    { english: "area", polish: "obszar" },
    { english: "argue", polish: "dyskutować" },
    { english: "argument", polish: "argument" },
    { english: "arm", polish: "ramię" },
    { english: "around", polish: "około" },
    { english: "arrive", polish: "przybyć" },
    { english: "art", polish: "sztuka" },
    { english: "article", polish: "artykuł" },
    { english: "artist", polish: "artysta" },
    { english: "as", polish: "jako" },
    { english: "ask", polish: "pytać" },
    { english: "assume", polish: "zakładać" },
    { english: "at", polish: "w" },
    { english: "attempt", polish: "próba" },
    { english: "attend", polish: "uczestniczyć" },
    { english: "attention", polish: "uwaga" },
    { english: "attract", polish: "przyciągać" },
    { english: "avoid", polish: "unikać" },
    { english: "away", polish: "z dala" },
    { english: "back", polish: "plecy" },
    { english: "bad", polish: "zły" },
    { english: "balance", polish: "równowaga" },
    { english: "ball", polish: "piłka" },
    { english: "band", polish: "zespół" },
    { english: "bank", polish: "bank" },
    { english: "bar", polish: "bar" },
    { english: "base", polish: "podstawa" },
    { english: "be", polish: "być" },
    { english: "become", polish: "stać się" },
    { english: "begin", polish: "zacząć" },
    { english: "behave", polish: "zachowywać się" },
    { english: "behavior", polish: "zachowanie" },
    { english: "believe", polish: "wierzyć" },
    { english: "benefit", polish: "korzyść" },
    { english: "best", polish: "najlepszy" },
    { english: "better", polish: "lepszy" },
    { english: "between", polish: "pomiędzy" },
    { english: "beyond", polish: "poza" },
    { english: "big", polish: "duży" },
    { english: "bill", polish: "rachunek" },
    { english: "billion", polish: "bilion" },
    { english: "black", polish: "czarny" },
    { english: "blood", polish: "krew" },
    { english: "blue", polish: "niebieski" },
    { english: "board", polish: "plansza" },
    { english: "body", polish: "ciało" },
    { english: "book", polish: "książka" },
    { english: "born", polish: "urodzony" },
    { english: "both", polish: "obie" },
    { english: "bother", polish: "przeszkadzać" },
    { english: "bottle", polish: "butelka" },
    { english: "bottom", polish: "dno" },
    { english: "branch", polish: "gałąź" },
    { english: "brand", polish: "marka" },
    { english: "break", polish: "przerwa" },
    { english: "bring", polish: "przynieść" },
    { english: "brother", polish: "brat" },
    { english: "build", polish: "budować" },
    { english: "building", polish: "budynek" },
    { english: "burn", polish: "spalić" },
    { english: "business", polish: "biznes" },
    { english: "busy", polish: "zajęty" },
    { english: "buy", polish: "kupić" },
    { english: "call", polish: "wołać" },
    { english: "can", polish: "móc" },
    { english: "capable", polish: "zdolny" },
    { english: "capital", polish: "stolica" },
    { english: "capture", polish: "uchwycić" },
    { english: "care", polish: "troska" },
    { english: "carry", polish: "nieść" },
    { english: "case", polish: "przypadek" },
    { english: "cause", polish: "przyczyna" },
    { english: "certain", polish: "pewien" },
    { english: "change", polish: "zmiana" },
    { english: "character", polish: "postać" },
    { english: "charge", polish: "opłata" },
    { english: "check", polish: "sprawdzić" },
    { english: "child", polish: "dziecko" },
    { english: "choose", polish: "wybierać" },
    { english: "city", polish: "miasto" },
    { english: "class", polish: "klasa" },
    { english: "clear", polish: "czysty" },
    { english: "close", polish: "zamknąć" },
    { english: "coach", polish: "trener" },
    { english: "cold", polish: "zimny" },
    { english: "collect", polish: "zbierać" },
    { english: "college", polish: "uczelnia" },
    { english: "color", polish: "kolor" },
    { english: "come", polish: "przyjść" },
    { english: "common", polish: "wspólny" },
    { english: "community", polish: "społeczność" },
    { english: "company", polish: "firma" },
    { english: "compare", polish: "porównywać" },
    { english: "complete", polish: "kompletny" },
    { english: "computer", polish: "komputer" },
    { english: "condition", polish: "warunek" },
    { english: "connect", polish: "łączyć" },
    { english: "consider", polish: "rozważać" },
    { english: "continue", polish: "kontynuować" },
    { english: "contract", polish: "umowa" },
    { english: "control", polish: "kontrolować" },
    { english: "cost", polish: "koszt" },
    { english: "could", polish: "mógłby" },
    { english: "country", polish: "kraj" },
    { english: "create", polish: "tworzyć" },
    { english: "credit", polish: "kredyt" },
    { english: "culture", polish: "kultura" },
    { english: "cup", polish: "kubek" },
    { english: "current", polish: "aktualny" },
    { english: "cut", polish: "ciąć" },
    { english: "dark", polish: "ciemny" },
    { english: "data", polish: "dane" },
    { english: "day", polish: "dzień" },
    { english: "decide", polish: "decydować" },
    { english: "decision", polish: "decyzja" },
    { english: "deep", polish: "głęboki" },
    { english: "defend", polish: "bronić" },
    { english: "define", polish: "definiować" },
    { english: "degree", polish: "stopień" },
    { english: "deliver", polish: "dostarczyć" },
    { english: "demand", polish: "popyt" },
    { english: "describe", polish: "opisywać" },
    { english: "design", polish: "projekt" },
    { english: "develop", polish: "rozwijać" },
    { english: "different", polish: "inny" },
    { english: "difficult", polish: "trudny" },
    { english: "dinner", polish: "kolacja" },
    { english: "direct", polish: "bezpośredni" },
    { english: "discuss", polish: "dyskutować" },
    { english: "discussion", polish: "dyskusja" },
    { english: "disease", polish: "choroba" },
    { english: "distance", polish: "odległość" },
    { english: "do", polish: "robić" },
    { english: "document", polish: "dokument" },
    { english: "dog", polish: "pies" },
    { english: "double", polish: "podwójny" },
    { english: "down", polish: "w dół" },
    { english: "draw", polish: "rysować" },
    { english: "dream", polish: "sen" },
    { english: "drive", polish: "prowadzić" },
    { english: "drop", polish: "upaść" },
    { english: "during", polish: "podczas" },
    { english: "each", polish: "każdy" },
    { english: "early", polish: "wcześnie" },
    { english: "east", polish: "wschód" },
    { english: "easy", polish: "łatwy" },
    { english: "education", polish: "edukacja" },
    { english: "effect", polish: "efekt" },
    { english: "effective", polish: "skuteczny" },
    { english: "effort", polish: "wysiłek" },
    { english: "either", polish: "albo" },
    { english: "election", polish: "wybory" },
    { english: "else", polish: "inny" },
    { english: "emerge", polish: "wyłonić się" },
    { english: "emergency", polish: "nagły wypadek" },
    { english: "emphasize", polish: "podkreślać" },
    { english: "employ", polish: "zatrudniać" },
    { english: "employee", polish: "pracownik" },
    { english: "employment", polish: "zatrudnienie" },
    { english: "enable", polish: "umożliwiać" },
    { english: "encounter", polish: "napotkać" },
    { english: "encourage", polish: "zachęcać" },
    { english: "end", polish: "koniec" },
    { english: "energy", polish: "energia" },
    { english: "engage", polish: "angażować" },
    { english: "enhance", polish: "zwiększać" },
    { english: "enjoy", polish: "cieszyć się" },
    { english: "enough", polish: "dość" },
    { english: "enter", polish: "wprowadzać" },
    { english: "environment", polish: "środowisko" },
    { english: "equal", polish: "równy" },
    { english: "especially", polish: "szczególnie" },
    { english: "establish", polish: "ustanowić" },
    { english: "evaluate", polish: "oceniać" },
    { english: "even", polish: "nawet" },
    { english: "event", polish: "wydarzenie" },
    { english: "every", polish: "każdy" },
    { english: "evidence", polish: "dowód" },
    { english: "evolve", polish: "ewoluować" },
    { english: "exactly", polish: "dokładnie" },
    { english: "example", polish: "przykład" },
    { english: "exist", polish: "istnieć" },
    { english: "expect", polish: "oczekiwać" },
    { english: "experience", polish: "doświadczenie" },
    { english: "expert", polish: "ekspert" },
    { english: "explain", polish: "wyjaśnić" },
    { english: "factor", polish: "czynnik" },
    { english: "fail", polish: "nie udać się" },
    { english: "failure", polish: "porażka" },
    { english: "fair", polish: "sprawiedliwy" },
    { english: "family", polish: "rodzina" },
    { english: "far", polish: "daleko" },
    { english: "fast", polish: "szybki" },
    { english: "father", polish: "ojciec" },
    { english: "fear", polish: "strach" },
    { english: "feel", polish: "czuć" },
    { english: "feeling", polish: "uczucie" },
    { english: "few", polish: "kilku" },
    { english: "field", polish: "pole" },
    { english: "figure", polish: "figura" },
    { english: "find", polish: "znaleźć" },
    { english: "fine", polish: "dobry" },
    { english: "finish", polish: "skończyć" },
    { english: "first", polish: "pierwszy" },
    { english: "five", polish: "pięć" },
    { english: "follow", polish: "śledzić" },
    { english: "food", polish: "jedzenie" },
    { english: "for", polish: "dla" },
    { english: "forget", polish: "zapomnieć" },
    { english: "form", polish: "forma" },
    { english: "former", polish: "były" },
    { english: "friend", polish: "przyjaciel" },
    { english: "from", polish: "z" },
    { english: "full", polish: "pełny" },
    { english: "future", polish: "przyszłość" },
    { english: "gain", polish: "zyskać" },
    { english: "game", polish: "gra" },
    { english: "garden", polish: "ogród" },
    { english: "gas", polish: "gaz" },
    { english: "get", polish: "dostać" },
    { english: "give", polish: "dać" },
    { english: "goal", polish: "cel" },
    { english: "good", polish: "dobry" },
    { english: "government", polish: "rząd" },
    { english: "great", polish: "świetny" },
    { english: "green", polish: "zielony" },
    { english: "group", polish: "grupa" },
    { english: "grow", polish: "rosnąć" },
    { english: "growth", polish: "wzrost" },
    { english: "guess", polish: "zgadywać" },
    { english: "guide", polish: "przewodnik" },
    { english: "hand", polish: "ręka" },
    { english: "handle", polish: "obsługiwać" },
    { english: "happen", polish: "zdarzyć się" },
    { english: "happy", polish: "szczęśliwy" },
    { english: "hard", polish: "trudny" },
    { english: "have", polish: "mieć" },
    { english: "he", polish: "on" },
    { english: "head", polish: "głowa" },
    { english: "health", polish: "zdrowie" },
    { english: "hear", polish: "słyszeć" },
    { english: "heart", polish: "serce" },
    { english: "heat", polish: "ciepło" },
    { english: "help", polish: "pomóc" },
    { english: "her", polish: "jej" },
    { english: "here", polish: "tutaj" },
    { english: "high", polish: "wysoki" },
    { english: "him", polish: "jego" },
    { english: "his", polish: "jego" },
    { english: "history", polish: "historia" },
    { english: "home", polish: "dom" },
    { english: "hope", polish: "nadzieja" },
    { english: "hospital", polish: "szpital" },
    { english: "hour", polish: "godzina" },
    { english: "house", polish: "dom" },
    { english: "how", polish: "jak" },
    { english: "idea", polish: "pomysł" },
    { english: "identify", polish: "identyfikować" },
    { english: "if", polish: "jeśli" },
    { english: "impact", polish: "wpływ" },
    { english: "important", polish: "ważny" },
    { english: "improve", polish: "ulepszać" },
    { english: "include", polish: "zawierać" },
    { english: "increase", polish: "zwiększyć" },
    { english: "individual", polish: "indywidualny" },
    { english: "information", polish: "informacja" },
    { english: "initial", polish: "początkowy" },
    { english: "institute", polish: "instytut" },
    { english: "interest", polish: "zainteresowanie" },
    { english: "international", polish: "międzynarodowy" },
    { english: "interview", polish: "wywiad" },
    { english: "involve", polish: "angażować" },
    { english: "issue", polish: "kwestia" },
    { english: "it", polish: "to" },
    { english: "job", polish: "praca" },
    { english: "join", polish: "dołączyć" },
    { english: "just", polish: "właśnie" },
    { english: "keep", polish: "trzymać" },
    { english: "key", polish: "klucz" },
    { english: "kind", polish: "rodzaj" },
    { english: "know", polish: "wiedzieć" },
    { english: "knowledge", polish: "wiedza" },
    { english: "last", polish: "ostatni" },
    { english: "late", polish: "późno" },
    { english: "later", polish: "później" },
    { english: "law", polish: "prawo" },
    { english: "lead", polish: "prowadzić" },
    { english: "learn", polish: "uczyć się" },
    { english: "least", polish: "najmniej" },
    { english: "leave", polish: "opuszczać" },
    { english: "left", polish: "lewy" },
    { english: "leg", polish: "noga" },
    { english: "less", polish: "mniej" },
    { english: "let", polish: "pozwolić" },
    { english: "level", polish: "poziom" },
    { english: "life", polish: "życie" },
    { english: "light", polish: "światło" },
    { english: "like", polish: "lubić" },
    { english: "likely", polish: "prawdopodobny" },
    { english: "line", polish: "linia" },
    { english: "list", polish: "lista" },
    { english: "listen", polish: "słuchać" },
    { english: "little", polish: "mały" },
    { english: "live", polish: "żyć" },
    { english: "local", polish: "lokalny" },
    { english: "long", polish: "długi" },
    { english: "look", polish: "patrzeć" },
    { english: "lose", polish: "zgubić" },
    { english: "loss", polish: "strata" },
    { english: "love", polish: "miłość" },
    { english: "low", polish: "niski" },
    { english: "main", polish: "główny" },
    { english: "make", polish: "robić" },
    { english: "manage", polish: "zarządzać" },
    { english: "many", polish: "wiele" },
    { english: "market", polish: "rynek" },
    { english: "may", polish: "może" },
    { english: "mean", polish: "znaczyć" },
    { english: "measure", polish: "mierzyć" },
    { english: "media", polish: "media" },
    { english: "meet", polish: "spotkać" },
    { english: "member", polish: "członek" },
    { english: "mention", polish: "wspomnieć" },
    { english: "message", polish: "wiadomość" },
    { english: "method", polish: "metoda" },
    { english: "middle", polish: "środek" },
    { english: "might", polish: "mógłby" },
    { english: "million", polish: "milion" },
    { english: "mind", polish: "umysł" },
    { english: "minute", polish: "minuta" },
    { english: "miss", polish: "przegapić" },
    { english: "money", polish: "pieniądze" },
    { english: "month", polish: "miesiąc" },
    { english: "more", polish: "więcej" },
    { english: "most", polish: "najwięcej" },
    { english: "move", polish: "przemieszczać się" },
    { english: "much", polish: "dużo" },
    { english: "music", polish: "muzyka" },
    { english: "must", polish: "musieć" },
    { english: "my", polish: "mój" },
    { english: "name", polish: "imię" },
    { english: "nation", polish: "naród" },
    { english: "nature", polish: "natura" },
    { english: "near", polish: "blisko" },
    { english: "need", polish: "potrzebować" },
    { english: "network", polish: "sieć" },
    { english: "never", polish: "nigdy" },
    { english: "new", polish: "nowy" },
    { english: "next", polish: "następny" },
    { english: "nice", polish: "miły" },
    { english: "night", polish: "noc" },
    { english: "no", polish: "nie" },
    { english: "not", polish: "nie" },
    { english: "nothing", polish: "nic" },
    { english: "notice", polish: "zauważyć" },
    { english: "number", polish: "numer" },
    { english: "obtain", polish: "uzyskać" },
    { english: "occur", polish: "zdarzyć się" },
    { english: "office", polish: "biuro" },
    { english: "often", polish: "często" },
    { english: "old", polish: "stary" },
    { english: "on", polish: "na" },
    { english: "once", polish: "raz" },
    { english: "open", polish: "otwarty" },
    { english: "operate", polish: "operować" },
    { english: "opinion", polish: "opinia" },
    { english: "opportunity", polish: "szansa" },
    { english: "or", polish: "lub" },
    { english: "order", polish: "zamówienie" },
    { english: "other", polish: "inny" },
    { english: "our", polish: "nasz" },
    { english: "out", polish: "na zewnątrz" },
    { english: "over", polish: "ponad" },
    { english: "own", polish: "własny" },
    { english: "part", polish: "część" },
    { english: "past", polish: "przeszłość" },
    { english: "patient", polish: "pacjent" },
    { english: "pay", polish: "płacić" },
    { english: "people", polish: "ludzie" },
    { english: "perform", polish: "wykonać" },
    { english: "perhaps", polish: "może" },
    { english: "place", polish: "miejsce" },
    { english: "plan", polish: "plan" },
    { english: "play", polish: "grać" },
    { english: "point", polish: "punkt" },
    { english: "political", polish: "polityczny" },
    { english: "possible", polish: "możliwy" },
    { english: "power", polish: "władza" },
    { english: "present", polish: "obecny" },
    { english: "president", polish: "prezydent" },
    { english: "prevent", polish: "zapobiegać" },
    { english: "probably", polish: "prawdopodobnie" },
    { english: "produce", polish: "produkować" },
    { english: "product", polish: "produkt" },
    { english: "program", polish: "program" },
    { english: "project", polish: "projekt" },
    { english: "property", polish: "własność" },
    { english: "provide", polish: "zapewniać" },
    { english: "public", polish: "publiczny" },
    { english: "purpose", polish: "cel" },
    { english: "quality", polish: "jakość" },
    { english: "question", polish: "pytanie" },
    { english: "quick", polish: "szybki" },
    { english: "quite", polish: "dość" },
    { english: "race", polish: "wyścig" },
    { english: "raise", polish: "podnieść" },
    { english: "range", polish: "zakres" },
    { english: "rate", polish: "wskaźnik" },
    { english: "reach", polish: "osiągnąć" },
    { english: "read", polish: "czytać" },
    { english: "real", polish: "prawdziwy" },
    { english: "reason", polish: "powód" },
    { english: "receive", polish: "otrzymać" },
    { english: "recent", polish: "niedawny" },
    { english: "recognize", polish: "rozpoznać" },
    { english: "record", polish: "nagranie" },
    { english: "red", polish: "czerwony" },
    { english: "reduce", polish: "zmniejszać" },
    { english: "reflect", polish: "odzwierciedlać" },
    { english: "regard", polish: "uznawać" },
    { english: "region", polish: "region" },
    { english: "related", polish: "powiązany" },
    { english: "relationship", polish: "związek" },
    { english: "release", polish: "uwolnić" },
    { english: "remain", polish: "pozostać" },
    { english: "remember", polish: "pamiętać" },
    { english: "remove", polish: "usunąć" },
    { english: "report", polish: "raport" },
    { english: "represent", polish: "reprezentować" },
    { english: "require", polish: "wymagać" },
    { english: "research", polish: "badania" },
    { english: "resource", polish: "zasób" },
    { english: "respond", polish: "odpowiadać" },
    { english: "response", polish: "odpowiedź" },
    { english: "rest", polish: "odpoczywać" },
    { english: "result", polish: "rezultat" },
    { english: "return", polish: "wrócić" },
    { english: "reveal", polish: "ujawnić" },
    { english: "right", polish: "prawy" },
    { english: "risk", polish: "ryzyko" },
    { english: "road", polish: "droga" },
    { english: "rock", polish: "kamień" },
    { english: "role", polish: "rola" },
    { english: "room", polish: "pokój" },
    { english: "run", polish: "bieg" },
    { english: "safe", polish: "bezpieczny" },
    { english: "same", polish: "ten sam" },
    { english: "say", polish: "powiedzieć" },
    { english: "school", polish: "szkoła" },
    { english: "science", polish: "nauka" },
    { english: "second", polish: "drugi" },
    { english: "see", polish: "widzieć" },
    { english: "seem", polish: "wydawać się" },
    { english: "self", polish: "ja" },
    { english: "send", polish: "wysłać" },
    { english: "sense", polish: "zmysł" },
    { english: "serve", polish: "serwować" },
    { english: "service", polish: "usługa" },
    { english: "set", polish: "ustawić" },
    { english: "seven", polish: "siedem" },
    { english: "several", polish: "kilka" },
    { english: "shake", polish: "trząść" },
    { english: "share", polish: "dzielić" },
    { english: "she", polish: "ona" },
    { english: "short", polish: "krótki" },
    { english: "should", polish: "powinien" },
    { english: "show", polish: "pokazać" },
    { english: "side", polish: "strona" },
    { english: "sign", polish: "znak" },
    { english: "similar", polish: "podobny" },
    { english: "simple", polish: "prosty" },
    { english: "since", polish: "od" },
    { english: "situation", polish: "sytuacja" },
    { english: "six", polish: "sześć" },
    { english: "size", polish: "rozmiar" },
    { english: "small", polish: "mały" },
    { english: "social", polish: "społeczny" },
    { english: "some", polish: "niektóre" },
    { english: "someone", polish: "ktoś" },
    { english: "something", polish: "coś" },
    { english: "sometimes", polish: "czasami" },
    { english: "speak", polish: "mówić" },
    { english: "specific", polish: "konkretny" },
    { english: "spend", polish: "wydawać" },
    { english: "spirit", polish: "duch" },
    { english: "spite", polish: "złośliwość" },
    { english: "sport", polish: "sport" },
    { english: "stand", polish: "stać" },
    { english: "start", polish: "zaczynać" },
    { english: "state", polish: "stan" },
    { english: "status", polish: "status" },
    { english: "step", polish: "krok" },
    { english: "still", polish: "jeszcze" },
    { english: "stop", polish: "zatrzymać" },
    { english: "store", polish: "magazyn" },
    { english: "story", polish: "historia" },
    { english: "strategy", polish: "strategia" },
    { english: "strong", polish: "silny" },
    { english: "structure", polish: "struktura" },
    { english: "student", polish: "uczeń" },
    { english: "study", polish: "studiować" },
    { english: "subject", polish: "przedmiot" },
    { english: "success", polish: "sukces" },
    { english: "successful", polish: "udany" },
    { english: "such", polish: "taki" },
    { english: "sudden", polish: "nagły" },
    { english: "suggest", polish: "sugerować" },
    { english: "supply", polish: "dostarczać" },
    { english: "support", polish: "wsparcie" },
    { english: "system", polish: "system" },
    { english: "take", polish: "brać" },
    { english: "talk", polish: "rozmawiać" },
    { english: "task", polish: "zadanie" },
    { english: "team", polish: "zespół" },
    { english: "tell", polish: "powiedzieć" },
    { english: "term", polish: "termin" },
    { english: "test", polish: "test" },
    { english: "than", polish: "niż" },
    { english: "that", polish: "to" },
    { english: "the", polish: "ten" },
    { english: "their", polish: "ich" },
    { english: "them", polish: "ich" },
    { english: "then", polish: "potem" },
    { english: "there", polish: "tam" },
    { english: "these", polish: "te" },
    { english: "they", polish: "oni" },
    { english: "this", polish: "to" },
    { english: "those", polish: "tamci" },
    { english: "through", polish: "przez" },
    { english: "time", polish: "czas" },
    { english: "to", polish: "do" },
    { english: "together", polish: "razem" },
    { english: "too", polish: "też" },
    { english: "top", polish: "szczyt" },
    { english: "total", polish: "całkowity" },
    { english: "trade", polish: "handel" },
    { english: "traditional", polish: "tradycyjny" },
    { english: "training", polish: "szkolenie" },
    { english: "travel", polish: "podróżować" },
    { english: "treatment", polish: "leczenie" },
    { english: "tree", polish: "drzewo" },
    { english: "trial", polish: "proces" },
    { english: "true", polish: "prawdziwy" },
    { english: "try", polish: "spróbować" },
    { english: "turn", polish: "obracać" },
    { english: "two", polish: "dwa" },
    { english: "understand", polish: "rozumieć" },
    { english: "understanding", polish: "zrozumienie" },
    { english: "until", polish: "aż" },
    { english: "up", polish: "w górę" },
    { english: "use", polish: "używać" },
    { english: "value", polish: "wartość" },
    { english: "very", polish: "bardzo" },
    { english: "view", polish: "widok" },
    { english: "vote", polish: "głosować" },
    { english: "wait", polish: "czekać" },
    { english: "walk", polish: "chodzić" },
    { english: "want", polish: "chcieć" },
    { english: "watch", polish: "oglądać" },
    { english: "way", polish: "sposób" },
    { english: "we", polish: "my" },
    { english: "week", polish: "tydzień" },
    { english: "well", polish: "dobrze" },
    { english: "what", polish: "co" },
    { english: "when", polish: "kiedy" },
    { english: "where", polish: "gdzie" },
    { english: "which", polish: "który" },
    { english: "while", polish: "podczas" },
    { english: "white", polish: "biały" },
    { english: "who", polish: "kto" },
    { english: "why", polish: "dlaczego" },
    { english: "will", polish: "będzie" },
    { english: "with", polish: "z" },
    { english: "within", polish: "wewnątrz" },
    { english: "without", polish: "bez" },
    { english: "word", polish: "słowo" },
    { english: "work", polish: "praca" },
    { english: "world", polish: "świat" },
    { english: "write", polish: "pisać" },
    { english: "year", polish: "rok" },
    { english: "yes", polish: "tak" },
    { english: "young", polish: "młody" },
    { english: "your", polish: "twój" }
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