const sentences = [
    // Present Simple
    {
        polish: "Jem obiad.",
        tense: "Present Simple",
        correctForm: "I eat lunch.",
        rule: "Podmiot + czasownik w formie podstawowej.",
        type: "Twierdzące - Present Simple",
        description: "Używamy czasu Present Simple do opisywania rutynowych czynności. Podmiot (I) + czasownik (eat) + dopełnienie (lunch)."
    },
    {
        polish: "Nie jem obiadu.",
        tense: "Present Simple",
        correctForm: "I do not eat lunch.",
        rule: "Podmiot + 'do not' + czasownik w formie podstawowej.",
        type: "Przeczące - Present Simple",
        description: "Czas Present Simple w zdaniach negatywnych wskazuje na brak wykonywania danej czynności. Dodajemy 'do not' po podmiocie (I)."
    },
    {
        polish: "Czy jem obiad?",
        tense: "Present Simple",
        correctForm: "Do I eat lunch?",
        rule: "Czy + podmiot + czasownik w formie podstawowej?",
        type: "Pytające - Present Simple",
        description: "Pytania w Present Simple służą do ustalania faktów lub rutyn. Zaczynamy od 'Do', następnie podmiot (I) i czasownik (eat)."
    },

    // Present Continuous
    {
        polish: "Jem obiad teraz.",
        tense: "Present Continuous",
        correctForm: "I am eating lunch.",
        rule: "Podmiot + 'am/is/are' + czasownik z końcówką '-ing'.",
        type: "Twierdzące - Present Continuous",
        description: "Czas Present Continuous używamy do opisywania czynności odbywających się w chwili mówienia. Podmiot (I) + 'am' + czasownik (eating) + dopełnienie (lunch)."
    },
    {
        polish: "Nie jem obiadu teraz.",
        tense: "Present Continuous",
        correctForm: "I am not eating lunch.",
        rule: "Podmiot + 'am/is/are' + 'not' + czasownik z końcówką '-ing'.",
        type: "Przeczące - Present Continuous",
        description: "W zdaniach negatywnych Present Continuous wskazujemy na brak czynności trwającej w danym momencie. Dodajemy 'not' po 'am' (I)."
    },
    {
        polish: "Czy jem obiad teraz?",
        tense: "Present Continuous",
        correctForm: "Am I eating lunch?",
        rule: "Czy + podmiot + 'am/is/are' + czasownik z końcówką '-ing'?",
        type: "Pytające - Present Continuous",
        description: "Pytania w Present Continuous służą do zapytania o czynności bieżące. Zaczynamy od 'Am', następnie podmiot (I) i czasownik (eating)."
    },

    // Present Perfect
    {
        polish: "Zjadłem obiad.",
        tense: "Present Perfect",
        correctForm: "I have eaten lunch.",
        rule: "Podmiot + 'have/has' + past participle.",
        type: "Twierdzące - Present Perfect",
        description: "Czas Present Perfect używamy do wyrażania czynności, które miały miejsce w przeszłości, ale mają związek z teraźniejszością. Podmiot (I) + 'have' + czasownik w III formie (eaten) + dopełnienie (lunch)."
    },
    {
        polish: "Nie zjadłem obiadu.",
        tense: "Present Perfect",
        correctForm: "I have not eaten lunch.",
        rule: "Podmiot + 'have/has' + 'not' + past participle.",
        type: "Przeczące - Present Perfect",
        description: "W zdaniach negatywnych Present Perfect wskazujemy na brak dokonania czynności w przeszłości. Dodajemy 'not' po 'have' (I)."
    },
    {
        polish: "Czy zjadłem obiad?",
        tense: "Present Perfect",
        correctForm: "Have I eaten lunch?",
        rule: "Czy + podmiot + 'have/has' + past participle?",
        type: "Pytające - Present Perfect",
        description: "Pytania w Present Perfect służą do zapytania o dokonane czynności w przeszłości. Zaczynamy od 'Have', następnie podmiot (I) i czasownik (eaten)."
    },

    // Past Simple
    {
        polish: "Zjadłem obiad wczoraj.",
        tense: "Past Simple",
        correctForm: "I ate lunch yesterday.",
        rule: "Podmiot + czasownik w II formie.",
        type: "Twierdzące - Past Simple",
        description: "Czas Past Simple używamy do opisywania czynności, które miały miejsce w przeszłości. Podmiot (I) + czasownik (ate) + dopełnienie (lunch yesterday)."
    },
    {
        polish: "Nie zjadłem obiadu wczoraj.",
        tense: "Past Simple",
        correctForm: "I did not eat lunch yesterday.",
        rule: "Podmiot + 'did not' + czasownik w formie podstawowej.",
        type: "Przeczące - Past Simple",
        description: "W zdaniach negatywnych Past Simple wskazujemy na brak dokonania czynności w przeszłości. Dodajemy 'did not' po podmiocie (I)."
    },
    {
        polish: "Czy zjadłem obiad wczoraj?",
        tense: "Past Simple",
        correctForm: "Did I eat lunch yesterday?",
        rule: "Czy + podmiot + czasownik w formie podstawowej?",
        type: "Pytające - Past Simple",
        description: "Pytania w Past Simple służą do zapytania o przeszłe zdarzenia. Zaczynamy od 'Did', następnie podmiot (I) i czasownik (eat)."
    },

    // Past Continuous
    {
        polish: "Jadłem obiad, gdy zadzwonił telefon.",
        tense: "Past Continuous",
        correctForm: "I was eating lunch when the phone rang.",
        rule: "Podmiot + 'was/were' + czasownik z końcówką '-ing'.",
        type: "Twierdzące - Past Continuous",
        description: "Czas Past Continuous używamy do opisywania czynności, które trwały w przeszłości w określonym momencie. Podmiot (I) + 'was' + czasownik (eating) + dopełnienie (lunch) + okolicznik czasu."
    },
    {
        polish: "Nie jadłem obiadu, gdy zadzwonił telefon.",
        tense: "Past Continuous",
        correctForm: "I was not eating lunch when the phone rang.",
        rule: "Podmiot + 'was/were' + 'not' + czasownik z końcówką '-ing'.",
        type: "Przeczące - Past Continuous",
        description: "W zdaniach negatywnych Past Continuous wskazujemy na brak czynności, która trwała w przeszłości. Dodajemy 'not' po 'was' (I)."
    },
    {
        polish: "Czy jadłem obiad, gdy zadzwonił telefon?",
        tense: "Past Continuous",
        correctForm: "Was I eating lunch when the phone rang?",
        rule: "Czy + podmiot + 'was/were' + czasownik z końcówką '-ing'?",
        type: "Pytające - Past Continuous",
        description: "Pytania w Past Continuous służą do zapytania o czynności trwające w przeszłości. Zaczynamy od 'Was', następnie podmiot (I) i czasownik (eating)."
    },

    // Future Simple
    {
        polish: "Będę jadł obiad jutro.",
        tense: "Future Simple",
        correctForm: "I will eat lunch tomorrow.",
        rule: "Podmiot + 'will' + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Czas Future Simple używamy do opisywania czynności, które wydarzą się w przyszłości. Podmiot (I) + 'will' + czasownik (eat) + dopełnienie (lunch tomorrow)."
    },
    {
        polish: "Nie będę jadł obiadu jutro.",
        tense: "Future Simple",
        correctForm: "I will not eat lunch tomorrow.",
        rule: "Podmiot + 'will not' + czasownik w formie podstawowej.",
        type: "Przeczące - Future Simple",
        description: "W zdaniach negatywnych Future Simple wskazujemy na brak przyszłej czynności. Dodajemy 'not' po 'will' (I)."
    },
    {
        polish: "Czy będę jadł obiad jutro?",
        tense: "Future Simple",
        correctForm: "Will I eat lunch tomorrow?",
        rule: "Czy + podmiot + 'will' + czasownik w formie podstawowej?",
        type: "Pytające - Future Simple",
        description: "Pytania w Future Simple służą do zapytania o przyszłe zdarzenia. Zaczynamy od 'Will', następnie podmiot (I) i czasownik (eat)."
    },

    // Future Continuous
    {
        polish: "Będę jadł obiad o 12:00.",
        tense: "Future Continuous",
        correctForm: "I will be eating lunch at 12:00.",
        rule: "Podmiot + 'will be' + czasownik z końcówką '-ing'.",
        type: "Twierdzące - Future Continuous",
        description: "Czas Future Continuous używamy do opisywania czynności, które będą trwały w określonym czasie w przyszłości. Podmiot (I) + 'will be' + czasownik (eating) + dopełnienie (lunch) + okolicznik czasu."
    },
    {
        polish: "Nie będę jadł obiadu o 12:00.",
        tense: "Future Continuous",
        correctForm: "I will not be eating lunch at 12:00.",
        rule: "Podmiot + 'will not be' + czasownik z końcówką '-ing'.",
        type: "Przeczące - Future Continuous",
        description: "W zdaniach negatywnych Future Continuous wskazujemy na brak czynności trwającej w przyszłości. Dodajemy 'not' po 'will be' (I)."
    },
    {
        polish: "Czy będę jadł obiad o 12:00?",
        tense: "Future Continuous",
        correctForm: "Will I be eating lunch at 12:00?",
        rule: "Czy + podmiot + 'will be' + czasownik z końcówką '-ing'?",
        type: "Pytające - Future Continuous",
        description: "Pytania w Future Continuous służą do zapytania o trwające czynności w przyszłości. Zaczynamy od 'Will', następnie podmiot (I) i czasownik (eating)."
    },

    // Future Perfect
    {
        polish: "Będę zjadł obiad do jutra.",
        tense: "Future Perfect",
        correctForm: "I will have eaten lunch by tomorrow.",
        rule: "Podmiot + 'will have' + past participle.",
        type: "Twierdzące - Future Perfect",
        description: "Czas Future Perfect używamy do wyrażania czynności, które będą zakończone przed określonym momentem w przyszłości. Podmiot (I) + 'will have' + czasownik w III formie (eaten) + dopełnienie (lunch)."
    },
    {
        polish: "Nie będę zjadł obiadu do jutra.",
        tense: "Future Perfect",
        correctForm: "I will not have eaten lunch by tomorrow.",
        rule: "Podmiot + 'will not have' + past participle.",
        type: "Przeczące - Future Perfect",
        description: "W zdaniach negatywnych Future Perfect wskazujemy na brak zakończenia czynności w przyszłości. Dodajemy 'not' po 'will have' (I)."
    },
    {
        polish: "Czy będę zjadł obiad do jutra?",
        tense: "Future Perfect",
        correctForm: "Will I have eaten lunch by tomorrow?",
        rule: "Czy + podmiot + 'will have' + past participle?",
        type: "Pytające - Future Perfect",
        description: "Pytania w Future Perfect służą do zapytania o zakończenie czynności przed określonym czasem w przyszłości. Zaczynamy od 'Will', następnie podmiot (I) i czasownik (eaten)."
    },
    {
        polish: "Oni chodzą do pracy codziennie.",
        tense: "Present Simple",
        correctForm: "They go to work every day.",
        rule: "Podmiot + czasownik w formie podstawowej.",
        type: "Twierdzące - Present Simple",
        description: "Używamy Present Simple do opisywania rutynowych działań. Podmiot (They) + czasownik (go) + dopełnienie (to work every day)."
    },
    {
        polish: "Nie chodzą do pracy codziennie.",
        tense: "Present Simple",
        correctForm: "They do not go to work every day.",
        rule: "Podmiot + 'do not' + czasownik w formie podstawowej.",
        type: "Przeczące - Present Simple",
        description: "Czas Present Simple w zdaniach negatywnych wskazuje na brak rutynowego działania. Dodajemy 'do not' po podmiocie (They)."
    },
    {
        polish: "Czy oni chodzą do pracy codziennie?",
        tense: "Present Simple",
        correctForm: "Do they go to work every day?",
        rule: "Czy + podmiot + czasownik w formie podstawowej?",
        type: "Pytające - Present Simple",
        description: "Pytania w Present Simple służą do ustalania faktów o rutynach. Zaczynamy od 'Do', następnie podmiot (they) i czasownik (go)."
    },

    // Present Continuous
    {
        polish: "Oni pracują teraz nad projektem.",
        tense: "Present Continuous",
        correctForm: "They are working on the project now.",
        rule: "Podmiot + 'am/is/are' + czasownik z końcówką '-ing'.",
        type: "Twierdzące - Present Continuous",
        description: "Czas Present Continuous używamy do opisywania czynności trwających w chwili mówienia. Podmiot (They) + 'are' + czasownik (working) + dopełnienie (on the project)."
    },
    {
        polish: "Nie pracują teraz nad projektem.",
        tense: "Present Continuous",
        correctForm: "They are not working on the project now.",
        rule: "Podmiot + 'am/is/are' + 'not' + czasownik z końcówką '-ing'.",
        type: "Przeczące - Present Continuous",
        description: "W zdaniach negatywnych Present Continuous wskazujemy na brak czynności trwającej teraz. Dodajemy 'not' po 'are' (They)."
    },
    {
        polish: "Czy oni pracują teraz nad projektem?",
        tense: "Present Continuous",
        correctForm: "Are they working on the project now?",
        rule: "Czy + podmiot + 'am/is/are' + czasownik z końcówką '-ing'?",
        type: "Pytające - Present Continuous",
        description: "Pytania w Present Continuous służą do zapytania o bieżące czynności. Zaczynamy od 'Are', następnie podmiot (they) i czasownik (working)."
    },

    // Present Perfect
    {
        polish: "Oni skończyli projekt.",
        tense: "Present Perfect",
        correctForm: "They have finished the project.",
        rule: "Podmiot + 'have/has' + past participle.",
        type: "Twierdzące - Present Perfect",
        description: "Czas Present Perfect używamy do wyrażania czynności, które mają związek z teraźniejszością. Podmiot (They) + 'have' + czasownik w III formie (finished) + dopełnienie (the project)."
    },
    {
        polish: "Nie skończyli projektu.",
        tense: "Present Perfect",
        correctForm: "They have not finished the project.",
        rule: "Podmiot + 'have/has' + 'not' + past participle.",
        type: "Przeczące - Present Perfect",
        description: "W zdaniach negatywnych Present Perfect wskazujemy na brak zakończenia czynności. Dodajemy 'not' po 'have' (They)."
    },
    {
        polish: "Czy oni skończyli projekt?",
        tense: "Present Perfect",
        correctForm: "Have they finished the project?",
        rule: "Czy + podmiot + 'have/has' + past participle?",
        type: "Pytające - Present Perfect",
        description: "Pytania w Present Perfect służą do zapytania o dokonane czynności. Zaczynamy od 'Have', następnie podmiot (they) i czasownik (finished)."
    },

    // Past Simple
    {
        polish: "Oni zjedli kolację wczoraj.",
        tense: "Past Simple",
        correctForm: "They ate dinner yesterday.",
        rule: "Podmiot + czasownik w II formie.",
        type: "Twierdzące - Past Simple",
        description: "Czas Past Simple używamy do opisywania czynności, które miały miejsce w przeszłości. Podmiot (They) + czasownik (ate) + dopełnienie (dinner yesterday)."
    },
    {
        polish: "Nie zjedli kolacji wczoraj.",
        tense: "Past Simple",
        correctForm: "They did not eat dinner yesterday.",
        rule: "Podmiot + 'did not' + czasownik w formie podstawowej.",
        type: "Przeczące - Past Simple",
        description: "W zdaniach negatywnych Past Simple wskazujemy na brak dokonania czynności. Dodajemy 'did not' po podmiocie (They)."
    },
    {
        polish: "Czy oni zjedli kolację wczoraj?",
        tense: "Past Simple",
        correctForm: "Did they eat dinner yesterday?",
        rule: "Czy + podmiot + czasownik w formie podstawowej?",
        type: "Pytające - Past Simple",
        description: "Pytania w Past Simple służą do zapytania o przeszłe wydarzenia. Zaczynamy od 'Did', następnie podmiot (they) i czasownik (eat)."
    },

    // Past Continuous
    {
        polish: "Oni jedli kolację, gdy zadzwonił telefon.",
        tense: "Past Continuous",
        correctForm: "They were eating dinner when the phone rang.",
        rule: "Podmiot + 'was/were' + czasownik z końcówką '-ing'.",
        type: "Twierdzące - Past Continuous",
        description: "Czas Past Continuous używamy do opisywania czynności trwających w przeszłości. Podmiot (They) + 'were' + czasownik (eating) + dopełnienie (dinner) + okolicznik czasu."
    },
    {
        polish: "Nie jedli kolacji, gdy zadzwonił telefon.",
        tense: "Past Continuous",
        correctForm: "They were not eating dinner when the phone rang.",
        rule: "Podmiot + 'was/were' + 'not' + czasownik z końcówką '-ing'.",
        type: "Przeczące - Past Continuous",
        description: "W zdaniach negatywnych Past Continuous wskazujemy na brak czynności trwającej w danym momencie w przeszłości. Dodajemy 'not' po 'were' (They)."
    },
    {
        polish: "Czy oni jedli kolację, gdy zadzwonił telefon?",
        tense: "Past Continuous",
        correctForm: "Were they eating dinner when the phone rang?",
        rule: "Czy + podmiot + 'was/were' + czasownik z końcówką '-ing'?",
        type: "Pytające - Past Continuous",
        description: "Pytania w Past Continuous służą do zapytania o trwające czynności w przeszłości. Zaczynamy od 'Were', następnie podmiot (they) i czasownik (eating)."
    },

    // Future Simple
    {
        polish: "Oni zjedzą kolację jutro.",
        tense: "Future Simple",
        correctForm: "They will eat dinner tomorrow.",
        rule: "Podmiot + 'will' + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Czas Future Simple używamy do opisywania przyszłych czynności. Podmiot (They) + 'will' + czasownik (eat) + dopełnienie (dinner tomorrow)."
    },
    {
        polish: "Nie zjedzą kolacji jutro.",
        tense: "Future Simple",
        correctForm: "They will not eat dinner tomorrow.",
        rule: "Podmiot + 'will not' + czasownik w formie podstawowej.",
        type: "Przeczące - Future Simple",
        description: "W zdaniach negatywnych Future Simple wskazujemy na brak przyszłej czynności. Dodajemy 'not' po 'will' (They)."
    },
    {
        polish: "Czy oni zjedzą kolację jutro?",
        tense: "Future Simple",
        correctForm: "Will they eat dinner tomorrow?",
        rule: "Czy + podmiot + 'will' + czasownik w formie podstawowej?",
        type: "Pytające - Future Simple",
        description: "Pytania w Future Simple służą do zapytania o przyszłe wydarzenia. Zaczynamy od 'Will', następnie podmiot (they) i czasownik (eat)."
    },

    // Future Continuous
    {
        polish: "Oni będą jedli kolację o 19:00.",
        tense: "Future Continuous",
        correctForm: "They will be eating dinner at 7:00 PM.",
        rule: "Podmiot + 'will be' + czasownik z końcówką '-ing'.",
        type: "Twierdzące - Future Continuous",
        description: "Czas Future Continuous używamy do opisywania czynności, które będą trwały w określonym czasie w przyszłości. Podmiot (They) + 'will be' + czasownik (eating) + dopełnienie (dinner) + okolicznik czasu."
    },
    {
        polish: "Nie będą jedli kolacji o 19:00.",
        tense: "Future Continuous",
        correctForm: "They will not be eating dinner at 7:00 PM.",
        rule: "Podmiot + 'will not be' + czasownik z końcówką '-ing'.",
        type: "Przeczące - Future Continuous",
        description: "W zdaniach negatywnych Future Continuous wskazujemy na brak czynności trwającej w przyszłości. Dodajemy 'not' po 'will be' (They)."
    },
    {
        polish: "Czy oni będą jedli kolację o 19:00?",
        tense: "Future Continuous",
        correctForm: "Will they be eating dinner at 7:00 PM?",
        rule: "Czy + podmiot + 'will be' + czasownik z końcówką '-ing'?",
        type: "Pytające - Future Continuous",
        description: "Pytania w Future Continuous służą do zapytania o trwające czynności w przyszłości. Zaczynamy od 'Will', następnie podmiot (they) i czasownik (eating)."
    },

    // Future Perfect
    {
        polish: "Oni zjedzą kolację do jutra.",
        tense: "Future Perfect",
        correctForm: "They will have eaten dinner by tomorrow.",
        rule: "Podmiot + 'will have' + past participle.",
        type: "Twierdzące - Future Perfect",
        description: "Czas Future Perfect używamy do wyrażania czynności, które będą zakończone przed określonym momentem w przyszłości. Podmiot (They) + 'will have' + czasownik w III formie (eaten) + dopełnienie (dinner)."
    },
    {
        polish: "Nie zjedzą kolacji do jutra.",
        tense: "Future Perfect",
        correctForm: "They will not have eaten dinner by tomorrow.",
        rule: "Podmiot + 'will not have' + past participle.",
        type: "Przeczące - Future Perfect",
        description: "W zdaniach negatywnych Future Perfect wskazujemy na brak zakończenia czynności w przyszłości. Dodajemy 'not' po 'will have' (They)."
    },
    {
        polish: "Czy oni zjedzą kolację do jutra?",
        tense: "Future Perfect",
        correctForm: "Will they have eaten dinner by tomorrow?",
        rule: "Czy + podmiot + 'will have' + past participle?",
        type: "Pytające - Future Perfect",
        description: "Pytania w Future Perfect służą do zapytania o zakończenie czynności przed określonym czasem w przyszłości. Zaczynamy od 'Will', następnie podmiot (they) i czasownik (eaten)."
    },

    // Present Simple
    {
        polish: "Czytam gazetę.",
        tense: "Present Simple",
        correctForm: "I read the newspaper.",
        rule: "Podmiot + czasownik w formie podstawowej.",
        type: "Twierdzące - Present Simple",
        description: "Używamy Present Simple do opisania czynności, które wykonujemy regularnie. Podmiot (I) + czasownik (read) + dopełnienie (the newspaper)."
    },
    {
        polish: "Nie czytam gazety.",
        tense: "Present Simple",
        correctForm: "I do not read the newspaper.",
        rule: "Podmiot + 'do not' + czasownik w formie podstawowej.",
        type: "Przeczące - Present Simple",
        description: "W zdaniach negatywnych Present Simple wskazujemy na brak czynności regularnej. Dodajemy 'do not' po podmiocie (I)."
    },
    {
        polish: "Czy czytam gazetę?",
        tense: "Present Simple",
        correctForm: "Do I read the newspaper?",
        rule: "Czy + podmiot + czasownik w formie podstawowej?",
        type: "Pytające - Present Simple",
        description: "Pytania w Present Simple używamy do zapytania o nawyki. Zaczynamy od 'Do', następnie podmiot (I) i czasownik (read)."
    },

    // Present Continuous
    {
        polish: "Czytam książkę teraz.",
        tense: "Present Continuous",
        correctForm: "I am reading a book now.",
        rule: "Podmiot + 'am/is/are' + czasownik z końcówką '-ing'.",
        type: "Twierdzące - Present Continuous",
        description: "Czas Present Continuous używamy do opisywania czynności, które trwają w chwili mówienia. Podmiot (I) + 'am' + czasownik (reading) + dopełnienie (a book)."
    },
    {
        polish: "Nie czytam książki teraz.",
        tense: "Present Continuous",
        correctForm: "I am not reading a book now.",
        rule: "Podmiot + 'am/is/are' + 'not' + czasownik z końcówką '-ing'.",
        type: "Przeczące - Present Continuous",
        description: "W zdaniach negatywnych Present Continuous wskazujemy na brak trwającej czynności. Dodajemy 'not' po 'am' (I)."
    },
    {
        polish: "Czy czytam książkę teraz?",
        tense: "Present Continuous",
        correctForm: "Am I reading a book now?",
        rule: "Czy + podmiot + 'am/is/are' + czasownik z końcówką '-ing'?",
        type: "Pytające - Present Continuous",
        description: "Pytania w Present Continuous używamy do zapytania o czynności trwające w chwili mówienia. Zaczynamy od 'Am', następnie podmiot (I) i czasownik (reading)."
    },

    // Present Perfect
    {
        polish: "Przeczytałem książkę.",
        tense: "Present Perfect",
        correctForm: "I have read the book.",
        rule: "Podmiot + 'have/has' + past participle.",
        type: "Twierdzące - Present Perfect",
        description: "Czas Present Perfect używamy do wyrażania czynności, które mają wpływ na teraźniejszość. Podmiot (I) + 'have' + czasownik w III formie (read) + dopełnienie (the book)."
    },
    {
        polish: "Nie przeczytałem książki.",
        tense: "Present Perfect",
        correctForm: "I have not read the book.",
        rule: "Podmiot + 'have/has' + 'not' + past participle.",
        type: "Przeczące - Present Perfect",
        description: "W zdaniach negatywnych Present Perfect wskazujemy na brak dokonania czynności. Dodajemy 'not' po 'have' (I)."
    },
    {
        polish: "Czy przeczytałem książkę?",
        tense: "Present Perfect",
        correctForm: "Have I read the book?",
        rule: "Czy + podmiot + 'have/has' + past participle?",
        type: "Pytające - Present Perfect",
        description: "Pytania w Present Perfect służą do zapytania o dokonane czynności. Zaczynamy od 'Have', następnie podmiot (I) i czasownik (read)."
    },

    // Past Simple
    {
        polish: "Przeczytałem książkę wczoraj.",
        tense: "Past Simple",
        correctForm: "I read the book yesterday.",
        rule: "Podmiot + czasownik w II formie.",
        type: "Twierdzące - Past Simple",
        description: "Czas Past Simple używamy do opisywania czynności dokonanych w przeszłości. Podmiot (I) + czasownik (read) + dopełnienie (the book yesterday)."
    },
    {
        polish: "Nie przeczytałem książki wczoraj.",
        tense: "Past Simple",
        correctForm: "I did not read the book yesterday.",
        rule: "Podmiot + 'did not' + czasownik w formie podstawowej.",
        type: "Przeczące - Past Simple",
        description: "W zdaniach negatywnych Past Simple wskazujemy na brak dokonania czynności. Dodajemy 'did not' po podmiocie (I)."
    },
    {
        polish: "Czy przeczytałem książkę wczoraj?",
        tense: "Past Simple",
        correctForm: "Did I read the book yesterday?",
        rule: "Czy + podmiot + czasownik w formie podstawowej?",
        type: "Pytające - Past Simple",
        description: "Pytania w Past Simple służą do zapytania o przeszłe wydarzenia. Zaczynamy od 'Did', następnie podmiot (I) i czasownik (read)."
    },

    // Past Continuous
    {
        polish: "Czytałem książkę, gdy przyszedł kolega.",
        tense: "Past Continuous",
        correctForm: "I was reading the book when my friend came.",
        rule: "Podmiot + 'was/were' + czasownik z końcówką '-ing'.",
        type: "Twierdzące - Past Continuous",
        description: "Czas Past Continuous używamy do opisywania czynności trwających w przeszłości. Podmiot (I) + 'was' + czasownik (reading) + dopełnienie (the book) + okolicznik czasu."
    },
    {
        polish: "Nie czytałem książki, gdy przyszedł kolega.",
        tense: "Past Continuous",
        correctForm: "I was not reading the book when my friend came.",
        rule: "Podmiot + 'was/were' + 'not' + czasownik z końcówką '-ing'.",
        type: "Przeczące - Past Continuous",
        description: "W zdaniach negatywnych Past Continuous wskazujemy na brak czynności trwającej w danym momencie w przeszłości. Dodajemy 'not' po 'was' (I)."
    },
    {
        polish: "Czy czytałem książkę, gdy przyszedł kolega?",
        tense: "Past Continuous",
        correctForm: "Was I reading the book when my friend came?",
        rule: "Czy + podmiot + 'was/were' + czasownik z końcówką '-ing'?",
        type: "Pytające - Past Continuous",
        description: "Pytania w Past Continuous służą do zapytania o trwające czynności w przeszłości. Zaczynamy od 'Was', następnie podmiot (I) i czasownik (reading)."
    },

    // Future Simple
    {
        polish: "Zadzwonię do ciebie jutro.",
        tense: "Future Simple",
        correctForm: "I will call you tomorrow.",
        rule: "Podmiot + 'will' + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Czas Future Simple używamy do opisania przyszłych czynności. Podmiot (I) + 'will' + czasownik (call) + dopełnienie (you tomorrow)."
    },
    {
        polish: "Nie zadzwonię do ciebie jutro.",
        tense: "Future Simple",
        correctForm: "I will not call you tomorrow.",
        rule: "Podmiot + 'will not' + czasownik w formie podstawowej.",
        type: "Przeczące - Future Simple",
        description: "W zdaniach negatywnych Future Simple wskazujemy na brak przyszłej czynności. Dodajemy 'not' po 'will' (I)."
    },
    {
        polish: "Czy zadzwonię do ciebie jutro?",
        tense: "Future Simple",
        correctForm: "Will I call you tomorrow?",
        rule: "Czy + podmiot + 'will' + czasownik w formie podstawowej?",
        type: "Pytające - Future Simple",
        description: "Pytania w Future Simple służą do zapytania o przyszłe wydarzenia. Zaczynamy od 'Will', następnie podmiot (I) i czasownik (call)."
    },

    // Future Continuous
    {
        polish: "Będę dzwonił do ciebie o 15:00.",
        tense: "Future Continuous",
        correctForm: "I will be calling you at 3:00 PM.",
        rule: "Podmiot + 'will be' + czasownik z końcówką '-ing'.",
        type: "Twierdzące - Future Continuous",
        description: "Czas Future Continuous używamy do opisywania czynności, które będą trwały w określonym czasie w przyszłości. Podmiot (I) + 'will be' + czasownik (calling) + dopełnienie (you) + okolicznik czasu."
    },
    {
        polish: "Nie będę dzwonił do ciebie o 15:00.",
        tense: "Future Continuous",
        correctForm: "I will not be calling you at 3:00 PM.",
        rule: "Podmiot + 'will not be' + czasownik z końcówką '-ing'.",
        type: "Przeczące - Future Continuous",
        description: "W zdaniach negatywnych Future Continuous wskazujemy na brak czynności trwającej w przyszłości. Dodajemy 'not' po 'will be' (I)."
    },
    {
        polish: "Czy będę dzwonił do ciebie o 15:00?",
        tense: "Future Continuous",
        correctForm: "Will I be calling you at 3:00 PM?",
        rule: "Czy + podmiot + 'will be' + czasownik z końcówką '-ing'?",
        type: "Pytające - Future Continuous",
        description: "Pytania w Future Continuous służą do zapytania o trwające czynności w przyszłości. Zaczynamy od 'Will', następnie podmiot (I) i czasownik (calling)."
    },

    // Future Perfect
    {
        polish: "Będę zadzwonił do ciebie do jutra.",
        tense: "Future Perfect",
        correctForm: "I will have called you by tomorrow.",
        rule: "Podmiot + 'will have' + past participle.",
        type: "Twierdzące - Future Perfect",
        description: "Czas Future Perfect używamy do wyrażania czynności, które będą zakończone przed określonym momentem w przyszłości. Podmiot (I) + 'will have' + czasownik w III formie (called) + dopełnienie (you)."
    },
    {
        polish: "Nie będę zadzwonił do ciebie do jutra.",
        tense: "Future Perfect",
        correctForm: "I will not have called you by tomorrow.",
        rule: "Podmiot + 'will not have' + past participle.",
        type: "Przeczące - Future Perfect",
        description: "W zdaniach negatywnych Future Perfect wskazujemy na brak zakończenia czynności w przyszłości. Dodajemy 'not' po 'will have' (I)."
    },
    {
        polish: "Czy będę zadzwonił do ciebie do jutra?",
        tense: "Future Perfect",
        correctForm: "Will I have called you by tomorrow?",
        rule: "Czy + podmiot + 'will have' + past participle?",
        type: "Pytające - Future Perfect",
        description: "Pytania w Future Perfect służą do zapytania o zakończenie czynności przed określonym czasem w przyszłości. Zaczynamy od 'Will', następnie podmiot (I) i czasownik (called)."
    },
      // Present Simple
      {
        polish: "Ona pisze list.",
        tense: "Present Simple",
        correctForm: "She writes a letter.",
        rule: "Podmiot + czasownik w formie podstawowej.",
        type: "Twierdzące - Present Simple",
        description: "Używamy Present Simple do opisania czynności wykonywanych regularnie. Podmiot (She) + czasownik (writes) + dopełnienie (a letter)."
    },
    {
        polish: "Nie pisze listu.",
        tense: "Present Simple",
        correctForm: "She does not write a letter.",
        rule: "Podmiot + 'does not' + czasownik w formie podstawowej.",
        type: "Przeczące - Present Simple",
        description: "W zdaniach negatywnych wskazujemy na brak regularnej czynności. Dodajemy 'does not' po podmiocie (She)."
    },
    {
        polish: "Czy ona pisze list?",
        tense: "Present Simple",
        correctForm: "Does she write a letter?",
        rule: "Czy + podmiot + czasownik w formie podstawowej?",
        type: "Pytające - Present Simple",
        description: "Pytania w Present Simple używamy do zapytania o nawyki. Zaczynamy od 'Does', następnie podmiot (she) i czasownik (write)."
    },

    // Present Continuous
    {
        polish: "Oni oglądają film teraz.",
        tense: "Present Continuous",
        correctForm: "They are watching a movie now.",
        rule: "Podmiot + 'am/is/are' + czasownik z końcówką '-ing'.",
        type: "Twierdzące - Present Continuous",
        description: "Czas Present Continuous używamy do opisywania czynności, które odbywają się w chwili mówienia. Podmiot (They) + 'are' + czasownik (watching) + dopełnienie (a movie)."
    },
    {
        polish: "Nie oglądają filmu teraz.",
        tense: "Present Continuous",
        correctForm: "They are not watching a movie now.",
        rule: "Podmiot + 'am/is/are' + 'not' + czasownik z końcówką '-ing'.",
        type: "Przeczące - Present Continuous",
        description: "W zdaniach negatywnych Present Continuous wskazujemy na brak trwającej czynności. Dodajemy 'not' po 'are' (They)."
    },
    {
        polish: "Czy oni oglądają film teraz?",
        tense: "Present Continuous",
        correctForm: "Are they watching a movie now?",
        rule: "Czy + podmiot + 'am/is/are' + czasownik z końcówką '-ing'?",
        type: "Pytające - Present Continuous",
        description: "Pytania w Present Continuous służą do zapytania o czynności trwające w chwili mówienia. Zaczynamy od 'Are', następnie podmiot (they) i czasownik (watching)."
    },

    // Present Perfect
    {
        polish: "Zrobiłem zakupy.",
        tense: "Present Perfect",
        correctForm: "I have done the shopping.",
        rule: "Podmiot + 'have/has' + past participle.",
        type: "Twierdzące - Present Perfect",
        description: "Czas Present Perfect używamy do wyrażania czynności, które mają wpływ na teraźniejszość. Podmiot (I) + 'have' + czasownik w III formie (done) + dopełnienie (the shopping)."
    },
    {
        polish: "Nie zrobiłem zakupów.",
        tense: "Present Perfect",
        correctForm: "I have not done the shopping.",
        rule: "Podmiot + 'have/has' + 'not' + past participle.",
        type: "Przeczące - Present Perfect",
        description: "W zdaniach negatywnych Present Perfect wskazujemy na brak dokonania czynności. Dodajemy 'not' po 'have' (I)."
    },
    {
        polish: "Czy zrobiłem zakupy?",
        tense: "Present Perfect",
        correctForm: "Have I done the shopping?",
        rule: "Czy + podmiot + 'have/has' + past participle?",
        type: "Pytające - Present Perfect",
        description: "Pytania w Present Perfect służą do zapytania o dokonane czynności. Zaczynamy od 'Have', następnie podmiot (I) i czasownik (done)."
    },

    // Past Simple
    {
        polish: "Widziałem ten film.",
        tense: "Past Simple",
        correctForm: "I saw that movie.",
        rule: "Podmiot + czasownik w II formie.",
        type: "Twierdzące - Past Simple",
        description: "Czas Past Simple używamy do opisywania czynności dokonanych w przeszłości. Podmiot (I) + czasownik (saw) + dopełnienie (that movie)."
    },
    {
        polish: "Nie widziałem tego filmu.",
        tense: "Past Simple",
        correctForm: "I did not see that movie.",
        rule: "Podmiot + 'did not' + czasownik w formie podstawowej.",
        type: "Przeczące - Past Simple",
        description: "W zdaniach negatywnych Past Simple wskazujemy na brak dokonania czynności. Dodajemy 'did not' po podmiocie (I)."
    },
    {
        polish: "Czy widziałem ten film?",
        tense: "Past Simple",
        correctForm: "Did I see that movie?",
        rule: "Czy + podmiot + czasownik w formie podstawowej?",
        type: "Pytające - Past Simple",
        description: "Pytania w Past Simple służą do zapytania o przeszłe wydarzenia. Zaczynamy od 'Did', następnie podmiot (I) i czasownik (see)."
    },

    // Past Continuous
    {
        polish: "Oglądałem film, gdy zadzwonił telefon.",
        tense: "Past Continuous",
        correctForm: "I was watching a movie when the phone rang.",
        rule: "Podmiot + 'was/were' + czasownik z końcówką '-ing'.",
        type: "Twierdzące - Past Continuous",
        description: "Czas Past Continuous używamy do opisywania czynności trwających w przeszłości. Podmiot (I) + 'was' + czasownik (watching) + dopełnienie (a movie) + okolicznik czasu."
    },
    {
        polish: "Nie oglądałem filmu, gdy zadzwonił telefon.",
        tense: "Past Continuous",
        correctForm: "I was not watching a movie when the phone rang.",
        rule: "Podmiot + 'was/were' + 'not' + czasownik z końcówką '-ing'.",
        type: "Przeczące - Past Continuous",
        description: "W zdaniach negatywnych Past Continuous wskazujemy na brak czynności trwającej w danym momencie w przeszłości. Dodajemy 'not' po 'was' (I)."
    },
    {
        polish: "Czy oglądałem film, gdy zadzwonił telefon?",
        tense: "Past Continuous",
        correctForm: "Was I watching a movie when the phone rang?",
        rule: "Czy + podmiot + 'was/were' + czasownik z końcówką '-ing'?",
        type: "Pytające - Past Continuous",
        description: "Pytania w Past Continuous służą do zapytania o trwające czynności w przeszłości. Zaczynamy od 'Was', następnie podmiot (I) i czasownik (watching)."
    },

    // Future Simple
    {
        polish: "Zjadę ciasto jutro.",
        tense: "Future Simple",
        correctForm: "I will eat the cake tomorrow.",
        rule: "Podmiot + 'will' + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Czas Future Simple używamy do opisania przyszłych czynności. Podmiot (I) + 'will' + czasownik (eat) + dopełnienie (the cake)."
    },
    {
        polish: "Nie zjem ciasta jutro.",
        tense: "Future Simple",
        correctForm: "I will not eat the cake tomorrow.",
        rule: "Podmiot + 'will not' + czasownik w formie podstawowej.",
        type: "Przeczące - Future Simple",
        description: "W zdaniach negatywnych Future Simple wskazujemy na brak przyszłej czynności. Dodajemy 'not' po 'will' (I)."
    },
    {
        polish: "Czy zjem ciasto jutro?",
        tense: "Future Simple",
        correctForm: "Will I eat the cake tomorrow?",
        rule: "Czy + podmiot + 'will' + czasownik w formie podstawowej?",
        type: "Pytające - Future Simple",
        description: "Pytania w Future Simple służą do zapytania o przyszłe wydarzenia. Zaczynamy od 'Will', następnie podmiot (I) i czasownik (eat)."
    },

    // Future Perfect
    {
        polish: "Będę już zjadł ciasto do jutra.",
        tense: "Future Perfect",
        correctForm: "I will have eaten the cake by tomorrow.",
        rule: "Podmiot + 'will have' + past participle.",
        type: "Twierdzące - Future Perfect",
        description: "Czas Future Perfect używamy do wyrażania czynności, które będą zakończone przed określonym momentem w przyszłości. Podmiot (I) + 'will have' + czasownik w III formie (eaten) + dopełnienie (the cake)."
    },
    {
        polish: "Nie będę już zjadł ciasta do jutra.",
        tense: "Future Perfect",
        correctForm: "I will not have eaten the cake by tomorrow.",
        rule: "Podmiot + 'will not have' + past participle.",
        type: "Przeczące - Future Perfect",
        description: "W zdaniach negatywnych Future Perfect wskazujemy na brak zakończenia czynności w przyszłości. Dodajemy 'not' po 'will have' (I)."
    },
    {
        polish: "Czy będę już zjadł ciasto do jutra?",
        tense: "Future Perfect",
        correctForm: "Will I have eaten the cake by tomorrow?",
        rule: "Czy + podmiot + 'will have' + past participle?",
        type: "Pytające - Future Perfect",
        description: "Pytania w Future Perfect służą do zapytania o zakończenie czynności przed określonym czasem w przyszłości. Zaczynamy od 'Will', następnie podmiot (I) i czasownik (eaten)."
    },

    // Future Perfect Continuous
    {
        polish: "Będę pracował nad projektem przez trzy godziny do jutra.",
        tense: "Future Perfect Continuous",
        correctForm: "I will have been working on the project for three hours by tomorrow.",
        rule: "Podmiot + 'will have been' + czasownik z końcówką '-ing'.",
        type: "Twierdzące - Future Perfect Continuous",
        description: "Czas Future Perfect Continuous używamy do opisywania czynności, które będą trwały przez określony czas przed momentem w przyszłości. Podmiot (I) + 'will have been' + czasownik (working) + dopełnienie (on the project) + okolicznik czasu."
    },
    {
        polish: "Nie będę pracował nad projektem przez trzy godziny do jutra.",
        tense: "Future Perfect Continuous",
        correctForm: "I will not have been working on the project for three hours by tomorrow.",
        rule: "Podmiot + 'will not have been' + czasownik z końcówką '-ing'.",
        type: "Przeczące - Future Perfect Continuous",
        description: "W zdaniach negatywnych Future Perfect Continuous wskazujemy na brak trwającej czynności przed określonym czasem w przyszłości. Dodajemy 'not' po 'will have been' (I)."
    },
    {
        polish: "Czy będę pracował nad projektem przez trzy godziny do jutra?",
        tense: "Future Perfect Continuous",
        correctForm: "Will I have been working on the project for three hours by tomorrow?",
        rule: "Czy + podmiot + 'will have been' + czasownik z końcówką '-ing'?",
        type: "Pytające - Future Perfect Continuous",
        description: "Pytania w Future Perfect Continuous służą do zapytania o trwające czynności przed określonym czasem w przyszłości. Zaczynamy od 'Will', następnie podmiot (I) i czasownik (working)."
    },
       {
        polish: "On gra na gitarze.",
        tense: "Present Simple",
        correctForm: "He plays the guitar.",
        rule: "Podmiot + czasownik w formie podstawowej.",
        type: "Twierdzące - Present Simple",
        description: "Używamy Present Simple do opisywania czynności, które są stałe lub powtarzające się. Podmiot (He) + czasownik (plays) + dopełnienie (the guitar)."
    },
    {
        polish: "Nie gra na gitarze.",
        tense: "Present Simple",
        correctForm: "He does not play the guitar.",
        rule: "Podmiot + 'does not' + czasownik w formie podstawowej.",
        type: "Przeczące - Present Simple",
        description: "W zdaniach negatywnych wskazujemy na brak wykonywania czynności. Dodajemy 'does not' po podmiocie (He)."
    },
    {
        polish: "Czy on gra na gitarze?",
        tense: "Present Simple",
        correctForm: "Does he play the guitar?",
        rule: "Czy + podmiot + czasownik w formie podstawowej?",
        type: "Pytające - Present Simple",
        description: "Pytania w Present Simple używamy do zapytania o nawyki lub rutyny. Zaczynamy od 'Does', następnie podmiot (he) i czasownik (play)."
    },

    // Present Continuous
    {
        polish: "Oni biegają w parku.",
        tense: "Present Continuous",
        correctForm: "They are running in the park.",
        rule: "Podmiot + 'am/is/are' + czasownik z końcówką '-ing'.",
        type: "Twierdzące - Present Continuous",
        description: "Czas Present Continuous używamy do opisywania czynności odbywających się w danym momencie. Podmiot (They) + 'are' + czasownik (running) + dopełnienie (in the park)."
    },
    {
        polish: "Nie biegają w parku.",
        tense: "Present Continuous",
        correctForm: "They are not running in the park.",
        rule: "Podmiot + 'am/is/are' + 'not' + czasownik z końcówką '-ing'.",
        type: "Przeczące - Present Continuous",
        description: "W zdaniach negatywnych wskazujemy na brak czynności trwającej w chwili mówienia. Dodajemy 'not' po 'are' (They)."
    },
    {
        polish: "Czy oni biegają w parku?",
        tense: "Present Continuous",
        correctForm: "Are they running in the park?",
        rule: "Czy + podmiot + 'am/is/are' + czasownik z końcówką '-ing'?",
        type: "Pytające - Present Continuous",
        description: "Pytania w Present Continuous służą do zapytania o trwające czynności. Zaczynamy od 'Are', następnie podmiot (they) i czasownik (running)."
    },

    // Present Perfect
    {
        polish: "Oni już skończyli pracę.",
        tense: "Present Perfect",
        correctForm: "They have finished the work.",
        rule: "Podmiot + 'have/has' + past participle.",
        type: "Twierdzące - Present Perfect",
        description: "Czas Present Perfect używamy do wskazania na czynności zakończone, które mają wpływ na teraźniejszość. Podmiot (They) + 'have' + czasownik w III formie (finished) + dopełnienie (the work)."
    },
    {
        polish: "Nie skończyli pracy.",
        tense: "Present Perfect",
        correctForm: "They have not finished the work.",
        rule: "Podmiot + 'have/has' + 'not' + past participle.",
        type: "Przeczące - Present Perfect",
        description: "W zdaniach negatywnych wskazujemy na brak dokonania czynności. Dodajemy 'not' po 'have' (They)."
    },
    {
        polish: "Czy oni skończyli pracę?",
        tense: "Present Perfect",
        correctForm: "Have they finished the work?",
        rule: "Czy + podmiot + 'have/has' + past participle?",
        type: "Pytające - Present Perfect",
        description: "Pytania w Present Perfect służą do zapytania o zakończone czynności. Zaczynamy od 'Have', następnie podmiot (they) i czasownik (finished)."
    },

    // Past Simple
    {
        polish: "Wczoraj gotowałem obiad.",
        tense: "Past Simple",
        correctForm: "I cooked dinner yesterday.",
        rule: "Podmiot + czasownik w II formie.",
        type: "Twierdzące - Past Simple",
        description: "Czas Past Simple używamy do opisywania czynności, które miały miejsce w przeszłości. Podmiot (I) + czasownik (cooked) + dopełnienie (dinner) + okolicznik czasu (yesterday)."
    },
    {
        polish: "Nie gotowałem obiadu wczoraj.",
        tense: "Past Simple",
        correctForm: "I did not cook dinner yesterday.",
        rule: "Podmiot + 'did not' + czasownik w formie podstawowej.",
        type: "Przeczące - Past Simple",
        description: "W zdaniach negatywnych Past Simple wskazujemy na brak dokonania czynności. Dodajemy 'did not' po podmiocie (I)."
    },
    {
        polish: "Czy gotowałem obiad wczoraj?",
        tense: "Past Simple",
        correctForm: "Did I cook dinner yesterday?",
        rule: "Czy + podmiot + czasownik w formie podstawowej?",
        type: "Pytające - Past Simple",
        description: "Pytania w Past Simple służą do zapytania o przeszłe wydarzenia. Zaczynamy od 'Did', następnie podmiot (I) i czasownik (cook)."
    },

    // Past Continuous
    {
        polish: "Czytałem książkę, gdy spadł deszcz.",
        tense: "Past Continuous",
        correctForm: "I was reading a book when it started to rain.",
        rule: "Podmiot + 'was/were' + czasownik z końcówką '-ing'.",
        type: "Twierdzące - Past Continuous",
        description: "Czas Past Continuous używamy do opisywania czynności, które trwały w danym momencie przeszłości. Podmiot (I) + 'was' + czasownik (reading) + dopełnienie (a book) + okolicznik czasu."
    },
    {
        polish: "Nie czytałem książki, gdy spadł deszcz.",
        tense: "Past Continuous",
        correctForm: "I was not reading a book when it started to rain.",
        rule: "Podmiot + 'was/were' + 'not' + czasownik z końcówką '-ing'.",
        type: "Przeczące - Past Continuous",
        description: "W zdaniach negatywnych Past Continuous wskazujemy na brak czynności trwającej w momencie, gdy coś innego miało miejsce. Dodajemy 'not' po 'was' (I)."
    },
    {
        polish: "Czy czytałem książkę, gdy spadł deszcz?",
        tense: "Past Continuous",
        correctForm: "Was I reading a book when it started to rain?",
        rule: "Czy + podmiot + 'was/were' + czasownik z końcówką '-ing'?",
        type: "Pytające - Past Continuous",
        description: "Pytania w Past Continuous służą do zapytania o czynności, które trwały w przeszłości. Zaczynamy od 'Was', następnie podmiot (I) i czasownik (reading)."
    },

    // Future Simple
    {
        polish: "Będę się uczył angielskiego jutro.",
        tense: "Future Simple",
        correctForm: "I will study English tomorrow.",
        rule: "Podmiot + 'will' + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Czas Future Simple używamy do opisania przyszłych czynności. Podmiot (I) + 'will' + czasownik (study) + dopełnienie (English) + okolicznik czasu (tomorrow)."
    },
    {
        polish: "Nie będę się uczył angielskiego jutro.",
        tense: "Future Simple",
        correctForm: "I will not study English tomorrow.",
        rule: "Podmiot + 'will not' + czasownik w formie podstawowej.",
        type: "Przeczące - Future Simple",
        description: "W zdaniach negatywnych Future Simple wskazujemy na brak przyszłej czynności. Dodajemy 'not' po 'will' (I)."
    },
    {
        polish: "Czy będę się uczył angielskiego jutro?",
        tense: "Future Simple",
        correctForm: "Will I study English tomorrow?",
        rule: "Czy + podmiot + 'will' + czasownik w formie podstawowej?",
        type: "Pytające - Future Simple",
        description: "Pytania w Future Simple służą do zapytania o przyszłe wydarzenia. Zaczynamy od 'Will', następnie podmiot (I) i czasownik (study)."
    },

    // Future Perfect
    {
        polish: "Skończę pracę do piątku.",
        tense: "Future Perfect",
        correctForm: "I will have finished the work by Friday.",
        rule: "Podmiot + 'will have' + past participle.",
        type: "Twierdzące - Future Perfect",
        description: "Czas Future Perfect używamy do wyrażania czynności, które będą zakończone przed określonym momentem w przyszłości. Podmiot (I) + 'will have' + czasownik w III formie (finished) + dopełnienie (the work) + okolicznik czasu (by Friday)."
    },
    {
        polish: "Nie skończę pracy do piątku.",
        tense: "Future Perfect",
        correctForm: "I will not have finished the work by Friday.",
        rule: "Podmiot + 'will not have' + past participle.",
        type: "Przeczące - Future Perfect",
        description: "W zdaniach negatywnych Future Perfect wskazujemy na brak zakończenia czynności w przyszłości. Dodajemy 'not' po 'will have' (I)."
    },
    {
        polish: "Czy skończę pracę do piątku?",
        tense: "Future Perfect",
        correctForm: "Will I have finished the work by Friday?",
        rule: "Czy + podmiot + 'will have' + past participle?",
        type: "Pytające - Future Perfect",
        description: "Pytania w Future Perfect służą do zapytania o zakończenie czynności przed określonym czasem w przyszłości. Zaczynamy od 'Will', następnie podmiot (I) i czasownik (finished)."
    },

    // Future Perfect Continuous
    {
        polish: "Będę pracował nad tym projektem przez dwa tygodnie do końca miesiąca.",
        tense: "Future Perfect Continuous",
        correctForm: "I will have been working on this project for two weeks by the end of the month.",
        rule: "Podmiot + 'will have been' + czasownik z końcówką '-ing'.",
        type: "Twierdzące - Future Perfect Continuous",
        description: "Czas Future Perfect Continuous używamy do opisywania czynności, które będą trwały przez określony czas przed momentem w przyszłości. Podmiot (I) + 'will have been' + czasownik (working) + dopełnienie (on this project) + okolicznik czasu."
    },
    {
        polish: "Nie będę pracował nad tym projektem przez dwa tygodnie do końca miesiąca.",
        tense: "Future Perfect Continuous",
        correctForm: "I will not have been working on this project for two weeks by the end of the month.",
        rule: "Podmiot + 'will not have been' + czasownik z końcówką '-ing'.",
        type: "Przeczące - Future Perfect Continuous",
        description: "W zdaniach negatywnych Future Perfect Continuous wskazujemy na brak trwającej czynności przed określonym czasem w przyszłości. Dodajemy 'not' po 'will have been' (I)."
    },
    {
        polish: "Czy będę pracował nad tym projektem przez dwa tygodnie do końca miesiąca?",
        tense: "Future Perfect Continuous",
        correctForm: "Will I have been working on this project for two weeks by the end of the month?",
        rule: "Czy + podmiot + 'will have been' + czasownik z końcówką '-ing'?",
        type: "Pytające - Future Perfect Continuous",
        description: "Pytania w Future Perfect Continuous służą do zapytania o trwające czynności przed określonym czasem w przyszłości. Zaczynamy od 'Will', następnie podmiot (I) i czasownik (working)."
    },
    {
        polish: "Czytam książkę.",
        tense: "Present Simple",
        correctForm: "I read a book.",
        rule: "Podmiot + czasownik w formie podstawowej.",
        type: "Twierdzące - Present Simple",
        description: "Używamy czasu Present Simple do opisywania rutynowych czynności. Podmiot (I) + czasownik (read) + dopełnienie (a book)."
    },
    {
        polish: "Jem śniadanie codziennie.",
        tense: "Present Simple",
        correctForm: "I eat breakfast every day.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple jest używany do opisywania nawyków. Podmiot (I) + czasownik (eat) + dopełnienie (breakfast every day)."
    },
    {
        polish: "Oglądam telewizję wieczorem.",
        tense: "Present Simple",
        correctForm: "I watch television in the evening.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Używamy tego czasu do opisywania regularnych aktywności. Podmiot (I) + czasownik (watch) + dopełnienie (television in the evening)."
    },
    {
        polish: "Chodzę na spacer co niedzielę.",
        tense: "Present Simple",
        correctForm: "I go for a walk every Sunday.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple używany jest do opisywania regularnych czynności. Podmiot (I) + czasownik (go) + dopełnienie (for a walk every Sunday)."
    },
    {
        polish: "Piję kawę rano.",
        tense: "Present Simple",
        correctForm: "I drink coffee in the morning.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Używamy czasu Present Simple do opisywania codziennych nawyków. Podmiot (I) + czasownik (drink) + dopełnienie (coffee in the morning)."
    },
    {
        polish: "Uczę się języka angielskiego.",
        tense: "Present Simple",
        correctForm: "I study English.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple stosujemy do rutynowych działań. Podmiot (I) + czasownik (study) + dopełnienie (English)."
    },
    {
        polish: "Gram w piłkę nożną w weekendy.",
        tense: "Present Simple",
        correctForm: "I play football on weekends.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple opisuje regularne czynności. Podmiot (I) + czasownik (play) + dopełnienie (football on weekends)."
    },
    {
        polish: "Słucham muzyki codziennie po pracy.",
        tense: "Present Simple",
        correctForm: "I listen to music every day after work.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Używamy Present Simple do opisania rutyn. Podmiot (I) + czasownik (listen) + dopełnienie (to music every day after work)."
    },
    {
        polish: "Piszę dziennik co wieczór.",
        tense: "Present Simple",
        correctForm: "I write a diary every evening.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Present Simple używamy do opisania codziennych aktywności. Podmiot (I) + czasownik (write) + dopełnienie (a diary every evening)."
    },
    {
        polish: "Zamawiam jedzenie na wynos raz w tygodniu.",
        tense: "Present Simple",
        correctForm: "I order takeout once a week.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple opisuje regularne działania. Podmiot (I) + czasownik (order) + dopełnienie (takeout once a week)."
    },
    {
        polish: "Biegam codziennie rano.",
        tense: "Present Simple",
        correctForm: "I run every morning.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple jest używany do opisania rutynowych działań. Podmiot (I) + czasownik (run) + dopełnienie (every morning)."
    },
    {
        polish: "Szukam pracy w internecie.",
        tense: "Present Simple",
        correctForm: "I look for a job online.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Używamy Present Simple do opisywania nawyków. Podmiot (I) + czasownik (look) + dopełnienie (for a job online)."
    },
    {
        polish: "Sprzątam dom w soboty.",
        tense: "Present Simple",
        correctForm: "I clean the house on Saturdays.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple używany jest do rutynowych czynności. Podmiot (I) + czasownik (clean) + dopełnienie (the house on Saturdays)."
    },
    {
        polish: "Kładę się spać o dziesiątej.",
        tense: "Present Simple",
        correctForm: "I go to bed at ten o'clock.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Present Simple opisuje codzienne rutyny. Podmiot (I) + czasownik (go) + dopełnienie (to bed at ten o'clock)."
    },
    {
        polish: "Zawsze jem kolację o siedemnastej.",
        tense: "Present Simple",
        correctForm: "I always have dinner at five o'clock.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Używamy Present Simple do opisania codziennych zwyczajów. Podmiot (I) + czasownik (have) + dopełnienie (dinner at five o'clock)."
    },
    {
        polish: "Często spotykam się z przyjaciółmi.",
        tense: "Present Simple",
        correctForm: "I often meet with my friends.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple opisuje powtarzające się czynności. Podmiot (I) + czasownik (meet) + dopełnienie (with my friends)."
    },
    {
        polish: "Zawsze chodzę na zakupy w sobotę.",
        tense: "Present Simple",
        correctForm: "I always go shopping on Saturday.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple używany jest do opisywania regularnych aktywności. Podmiot (I) + czasownik (go) + dopełnienie (shopping on Saturday)."
    },
    {
        polish: "W każdy poniedziałek odprowadzam dzieci do szkoły.",
        tense: "Present Simple",
        correctForm: "I take my children to school every Monday.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple stosuje się do rutynowych działań. Podmiot (I) + czasownik (take) + dopełnienie (my children to school every Monday)."
    },
    {
        polish: "Rysuję obrazki w wolnym czasie.",
        tense: "Present Simple",
        correctForm: "I draw pictures in my free time.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Używamy Present Simple do opisywania hobby. Podmiot (I) + czasownik (draw) + dopełnienie (pictures in my free time)."
    },
    {
        polish: "Odwiedzam babcię w każdą niedzielę.",
        tense: "Present Simple",
        correctForm: "I visit my grandmother every Sunday.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple opisuje rutynowe czynności. Podmiot (I) + czasownik (visit) + dopełnienie (my grandmother every Sunday)."
    },
    {
        polish: "Co roku jeżdżę na wakacje.",
        tense: "Present Simple",
        correctForm: "I go on vacation every year.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Używamy Present Simple do opisywania corocznych zwyczajów. Podmiot (I) + czasownik (go) + dopełnienie (on vacation every year)."
    },
    {
        polish: "Regularnie chodzę na siłownię.",
        tense: "Present Simple",
        correctForm: "I regularly go to the gym.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple jest używany do opisywania stałych nawyków. Podmiot (I) + czasownik (go) + dopełnienie (to the gym)."
    },
    {
        polish: "Przygotowuję posiłki dla rodziny.",
        tense: "Present Simple",
        correctForm: "I prepare meals for my family.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple używany jest do opisywania rutynowych działań. Podmiot (I) + czasownik (prepare) + dopełnienie (meals for my family)."
    },
    {
        polish: "Odwiedzam przyjaciół w weekendy.",
        tense: "Present Simple",
        correctForm: "I visit friends on weekends.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple opisuje regularne interakcje. Podmiot (I) + czasownik (visit) + dopełnienie (friends on weekends)."
    },
    {
        polish: "Uczestniczę w spotkaniach raz w miesiącu.",
        tense: "Present Simple",
        correctForm: "I attend meetings once a month.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple jest używany do opisania stałych działań. Podmiot (I) + czasownik (attend) + dopełnienie (meetings once a month)."
    },
    {
        polish: "Często jem owoce na deser.",
        tense: "Present Simple",
        correctForm: "I often eat fruit for dessert.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple używamy do opisywania nawyków żywieniowych. Podmiot (I) + czasownik (eat) + dopełnienie (fruit for dessert)."
    },
    {
        polish: "Szukam inspiracji w książkach.",
        tense: "Present Simple",
        correctForm: "I look for inspiration in books.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Używamy Present Simple do opisywania czynności twórczych. Podmiot (I) + czasownik (look) + dopełnienie (for inspiration in books)."
    },
    {
        polish: "Regularnie oglądam filmy dokumentalne.",
        tense: "Present Simple",
        correctForm: "I regularly watch documentaries.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple jest używany do opisania stałych nawyków. Podmiot (I) + czasownik (watch) + dopełnienie (documentaries)."
    },
    {
        polish: "Często biorę udział w wydarzeniach kulturalnych.",
        tense: "Present Simple",
        correctForm: "I often participate in cultural events.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple opisuje regularne uczestnictwo. Podmiot (I) + czasownik (participate) + dopełnienie (in cultural events)."
    },
    {
        polish: "Czasami jem sushi na lunch.",
        tense: "Present Simple",
        correctForm: "I sometimes eat sushi for lunch.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple używany jest do opisywania sporadycznych nawyków. Podmiot (I) + czasownik (eat) + dopełnienie (sushi for lunch)."
    },
    {
        polish: "Słucham podcastów w drodze do pracy.",
        tense: "Present Simple",
        correctForm: "I listen to podcasts on my way to work.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple opisuje regularne działania. Podmiot (I) + czasownik (listen) + dopełnienie (to podcasts on my way to work)."
    },
    {
        polish: "Często chodzę na koncerty.",
        tense: "Present Simple",
        correctForm: "I often go to concerts.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple używany jest do opisywania nawyków związanych z rozrywką. Podmiot (I) + czasownik (go) + dopełnienie (to concerts)."
    },
    {
        polish: "Codziennie wykonuję ćwiczenia.",
        tense: "Present Simple",
        correctForm: "I do exercises every day.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple opisuje codzienne rutyny. Podmiot (I) + czasownik (do) + dopełnienie (exercises every day)."
    },
    {
        polish: "Biorę udział w kursach online.",
        tense: "Present Simple",
        correctForm: "I take online courses.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple jest używany do opisywania edukacyjnych nawyków. Podmiot (I) + czasownik (take) + dopełnienie (online courses)."
    },
    {
        polish: "Często podróżuję służbowo.",
        tense: "Present Simple",
        correctForm: "I often travel for business.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple opisuje częste podróże. Podmiot (I) + czasownik (travel) + dopełnienie (for business)."
    },
    {
        polish: "Regularnie odwiedzam muzea.",
        tense: "Present Simple",
        correctForm: "I regularly visit museums.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple używany jest do opisywania kulturowych aktywności. Podmiot (I) + czasownik (visit) + dopełnienie (museums)."
    },
    {
        polish: "W każdy piątek jem pizzę.",
        tense: "Present Simple",
        correctForm: "I eat pizza every Friday.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple opisuje regularne nawyki żywieniowe. Podmiot (I) + czasownik (eat) + dopełnienie (pizza every Friday)."
    },
    {
        polish: "Często chodzę do kina z przyjaciółmi.",
        tense: "Present Simple",
        correctForm: "I often go to the cinema with my friends.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple opisuje aktywności towarzyskie. Podmiot (I) + czasownik (go) + dopełnienie (to the cinema with my friends)."
    },
    {
        polish: "Prowadzę bloga o gotowaniu.",
        tense: "Present Simple",
        correctForm: "I run a cooking blog.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple używany jest do opisywania działań twórczych. Podmiot (I) + czasownik (run) + dopełnienie (a cooking blog)."
    },
    {
        polish: "Zbieram znaczki od dzieciństwa.",
        tense: "Present Simple",
        correctForm: "I collect stamps since childhood.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple opisuje długotrwałe zainteresowania. Podmiot (I) + czasownik (collect) + dopełnienie (stamps since childhood)."
    },
    {
        polish: "Często uprawiam jogę w domu.",
        tense: "Present Simple",
        correctForm: "I often practice yoga at home.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple jest używany do opisywania regularnych zajęć. Podmiot (I) + czasownik (practice) + dopełnienie (yoga at home)."
    },
    {
        polish: "Zawsze organizuję przyjęcia na urodziny.",
        tense: "Present Simple",
        correctForm: "I always organize birthday parties.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple opisuje rutynowe działania związane z organizacją. Podmiot (I) + czasownik (organize) + dopełnienie (birthday parties)."
    },
    {
        polish: "Często kupuję nowe książki.",
        tense: "Present Simple",
        correctForm: "I often buy new books.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple opisuje zakupy. Podmiot (I) + czasownik (buy) + dopełnienie (new books)."
    },
    {
        polish: "Czasami graję na pianinie.",
        tense: "Present Simple",
        correctForm: "I sometimes play the piano.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple opisuje sporadyczne działania. Podmiot (I) + czasownik (play) + dopełnienie (the piano)."
    },
    {
        polish: "Oglądam filmy wieczorami.",
        tense: "Present Simple",
        correctForm: "I watch movies in the evenings.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple opisuje rutynowe działania. Podmiot (I) + czasownik (watch) + dopełnienie (movies in the evenings)."
    },
    {
        polish: "Zawsze próbuję nowych przepisów.",
        tense: "Present Simple",
        correctForm: "I always try new recipes.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple opisuje długotrwałe zainteresowania kulinarne. Podmiot (I) + czasownik (try) + dopełnienie (new recipes)."
    },
    {
        polish: "Często rozmawiam z rodzicami przez telefon.",
        tense: "Present Simple",
        correctForm: "I often talk to my parents on the phone.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple opisuje regularne interakcje. Podmiot (I) + czasownik (talk) + dopełnienie (to my parents on the phone)."
    },
    {
        polish: "Prowadzę notatnik ze swoimi pomysłami.",
        tense: "Present Simple",
        correctForm: "I keep a notebook with my ideas.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple używany jest do opisywania działań twórczych. Podmiot (I) + czasownik (keep) + dopełnienie (a notebook with my ideas)."
    },
    {
        polish: "Od czasu do czasu jeżdżę na rowerze.",
        tense: "Present Simple",
        correctForm: "I ride my bike from time to time.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple opisuje sporadyczne aktywności. Podmiot (I) + czasownik (ride) + dopełnienie (my bike from time to time)."
    },
    {
        polish: "Piszemy wspólnie opowiadania.",
        tense: "Present Simple",
        correctForm: "We write stories together.",
        rule: "Podmiot + czasownik w formie podstawowej + dopełnienie.",
        type: "Twierdzące - Present Simple",
        description: "Czas Present Simple używany jest do opisywania wspólnych działań. Podmiot (We) + czasownik (write) + dopełnienie (stories together)."
    },
    {
        polish: "Czytam teraz książkę.",
        tense: "Present Continuous",
        correctForm: "I am reading a book now.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Używamy czasu Present Continuous do opisywania działań, które odbywają się w chwili obecnej. Podmiot (I) + am + czasownik (reading) + dopełnienie (a book now)."
    },
    {
        polish: "Jem śniadanie w tej chwili.",
        tense: "Present Continuous",
        correctForm: "I am eating breakfast right now.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Present Continuous opisuje czynności, które odbywają się w danym momencie. Podmiot (I) + am + czasownik (eating) + dopełnienie (breakfast right now)."
    },
    {
        polish: "Oglądam telewizję teraz.",
        tense: "Present Continuous",
        correctForm: "I am watching television now.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Używamy Present Continuous do opisania aktualnych działań. Podmiot (I) + am + czasownik (watching) + dopełnienie (television now)."
    },
    {
        polish: "Chodzę na spacer teraz.",
        tense: "Present Continuous",
        correctForm: "I am going for a walk now.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Present Continuous opisuje czynności w trakcie wykonywania. Podmiot (I) + am + czasownik (going) + dopełnienie (for a walk now)."
    },
    {
        polish: "Piję kawę teraz.",
        tense: "Present Continuous",
        correctForm: "I am drinking coffee right now.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Czas Present Continuous stosujemy do działań aktualnych. Podmiot (I) + am + czasownik (drinking) + dopełnienie (coffee right now)."
    },
    {
        polish: "Uczę się języka angielskiego teraz.",
        tense: "Present Continuous",
        correctForm: "I am studying English right now.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Używamy Present Continuous do opisywania działań odbywających się teraz. Podmiot (I) + am + czasownik (studying) + dopełnienie (English right now)."
    },
    {
        polish: "Gram w piłkę nożną w tej chwili.",
        tense: "Present Continuous",
        correctForm: "I am playing football at the moment.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Czas Present Continuous opisuje czynności w trakcie wykonywania. Podmiot (I) + am + czasownik (playing) + dopełnienie (football at the moment)."
    },
    {
        polish: "Słucham muzyki teraz.",
        tense: "Present Continuous",
        correctForm: "I am listening to music now.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Present Continuous używamy do opisywania aktualnych działań. Podmiot (I) + am + czasownik (listening) + dopełnienie (to music now)."
    },
    {
        polish: "Piszę dziennik w tej chwili.",
        tense: "Present Continuous",
        correctForm: "I am writing a diary at the moment.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Czas Present Continuous stosujemy do czynności wykonywanych teraz. Podmiot (I) + am + czasownik (writing) + dopełnienie (a diary at the moment)."
    },
    {
        polish: "Zamawiam jedzenie na wynos teraz.",
        tense: "Present Continuous",
        correctForm: "I am ordering takeout right now.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Używamy Present Continuous do opisywania działań w trakcie. Podmiot (I) + am + czasownik (ordering) + dopełnienie (takeout right now)."
    },
    {
        polish: "Biegam codziennie rano teraz.",
        tense: "Present Continuous",
        correctForm: "I am running every morning now.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Czas Present Continuous opisuje czynności, które się odbywają. Podmiot (I) + am + czasownik (running) + dopełnienie (every morning now)."
    },
    {
        polish: "Szukam pracy w internecie teraz.",
        tense: "Present Continuous",
        correctForm: "I am looking for a job online now.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Używamy Present Continuous do opisywania bieżących działań. Podmiot (I) + am + czasownik (looking) + dopełnienie (for a job online now)."
    },
    {
        polish: "Sprzątam dom w tej chwili.",
        tense: "Present Continuous",
        correctForm: "I am cleaning the house at the moment.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Czas Present Continuous używany jest do opisywania aktualnych działań. Podmiot (I) + am + czasownik (cleaning) + dopełnienie (the house at the moment)."
    },
    {
        polish: "Kładę się spać teraz.",
        tense: "Present Continuous",
        correctForm: "I am going to bed now.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Present Continuous opisuje działania w trakcie wykonywania. Podmiot (I) + am + czasownik (going) + dopełnienie (to bed now)."
    },
    {
        polish: "Zawsze jem kolację o siedemnastej.",
        tense: "Present Continuous",
        correctForm: "I am having dinner at five o'clock.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Czas Present Continuous używany jest do opisania bieżących działań. Podmiot (I) + am + czasownik (having) + dopełnienie (dinner at five o'clock)."
    },
    {
        polish: "Często spotykam się z przyjaciółmi teraz.",
        tense: "Present Continuous",
        correctForm: "I am meeting with my friends now.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Czas Present Continuous opisuje czynności, które się odbywają. Podmiot (I) + am + czasownik (meeting) + dopełnienie (with my friends now)."
    },
    {
        polish: "Zawsze chodzę na zakupy w sobotę.",
        tense: "Present Continuous",
        correctForm: "I am going shopping on Saturday.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Czas Present Continuous opisuje bieżące działania. Podmiot (I) + am + czasownik (going) + dopełnienie (shopping on Saturday)."
    },
    {
        polish: "W każdy poniedziałek odprowadzam dzieci do szkoły.",
        tense: "Present Continuous",
        correctForm: "I am taking my children to school every Monday.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Czas Present Continuous używany jest do opisywania działań aktualnych. Podmiot (I) + am + czasownik (taking) + dopełnienie (my children to school every Monday)."
    },
    {
        polish: "Rysuję obrazki w wolnym czasie teraz.",
        tense: "Present Continuous",
        correctForm: "I am drawing pictures in my free time now.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Present Continuous opisuje działania w trakcie wykonywania. Podmiot (I) + am + czasownik (drawing) + dopełnienie (pictures in my free time now)."
    },
    {
        polish: "Słucham audiobooków teraz.",
        tense: "Present Continuous",
        correctForm: "I am listening to audiobooks now.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Czas Present Continuous opisuje bieżące działania. Podmiot (I) + am + czasownik (listening) + dopełnienie (to audiobooks now)."
    },
    {
        polish: "Uczę się gotować teraz.",
        tense: "Present Continuous",
        correctForm: "I am learning to cook now.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Używamy Present Continuous do opisania aktualnych działań. Podmiot (I) + am + czasownik (learning) + dopełnienie (to cook now)."
    },
    {
        polish: "Wysyłam wiadomość teraz.",
        tense: "Present Continuous",
        correctForm: "I am sending a message now.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Czas Present Continuous używany jest do opisywania bieżących działań. Podmiot (I) + am + czasownik (sending) + dopełnienie (a message now)."
    },
    {
        polish: "Biorę prysznic teraz.",
        tense: "Present Continuous",
        correctForm: "I am taking a shower now.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Czas Present Continuous opisuje działania w trakcie wykonywania. Podmiot (I) + am + czasownik (taking) + dopełnienie (a shower now)."
    },
    {
        polish: "Rozmawiam z kolegą przez telefon teraz.",
        tense: "Present Continuous",
        correctForm: "I am talking to my colleague on the phone now.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Present Continuous używamy do opisywania aktualnych interakcji. Podmiot (I) + am + czasownik (talking) + dopełnienie (to my colleague on the phone now)."
    },
    {
        polish: "Bawię się z moim psem w tej chwili.",
        tense: "Present Continuous",
        correctForm: "I am playing with my dog at the moment.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Czas Present Continuous opisuje czynności wykonywane w danym momencie. Podmiot (I) + am + czasownik (playing) + dopełnienie (with my dog at the moment)."
    },
    {
        polish: "Patrzę na widok za oknem teraz.",
        tense: "Present Continuous",
        correctForm: "I am looking at the view outside the window now.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Czas Present Continuous używany jest do opisywania bieżących działań. Podmiot (I) + am + czasownik (looking) + dopełnienie (at the view outside the window now)."
    },
    {
        polish: "Uczę się grać na gitarze w tej chwili.",
        tense: "Present Continuous",
        correctForm: "I am learning to play the guitar at the moment.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Present Continuous opisuje działania aktualne. Podmiot (I) + am + czasownik (learning) + dopełnienie (to play the guitar at the moment)."
    },
    {
        polish: "Pracuję nad nowym projektem teraz.",
        tense: "Present Continuous",
        correctForm: "I am working on a new project now.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Czas Present Continuous stosujemy do opisania działań w trakcie. Podmiot (I) + am + czasownik (working) + dopełnienie (on a new project now)."
    },
    {
        polish: "Czyszczę biurko teraz.",
        tense: "Present Continuous",
        correctForm: "I am cleaning my desk now.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Czas Present Continuous opisuje czynności aktualne. Podmiot (I) + am + czasownik (cleaning) + dopełnienie (my desk now)."
    },
    {
        polish: "Cieszę się, że mogę Cię zobaczyć teraz.",
        tense: "Present Continuous",
        correctForm: "I am happy to see you now.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Czas Present Continuous używany jest do wyrażania bieżących emocji. Podmiot (I) + am + czasownik (happy) + dopełnienie (to see you now)."
    },
    {
        polish: "Rozwiązuje zagadkę teraz.",
        tense: "Present Continuous",
        correctForm: "I am solving a puzzle right now.",
        rule: "Podmiot + am/is/are + czasownik z -ing.",
        type: "Twierdzące - Present Continuous",
        description: "Czas Present Continuous opisuje czynności wykonywane w danym momencie. Podmiot (I) + am + czasownik (solving) + dopełnienie (a puzzle right now)."
    },
    {
        polish: "Wczoraj jadłem obiad.",
        tense: "Past Simple",
        correctForm: "I ate lunch yesterday.",
        rule: "Podmiot + czasownik w formie przeszłej + dopełnienie.",
        type: "Twierdzące - Past Simple",
        description: "Używamy czasu Past Simple do opisywania zakończonych czynności w przeszłości. Podmiot (I) + czasownik (ate) + dopełnienie (lunch yesterday)."
    },
    {
        polish: "Odwiedziłem moich dziadków w zeszłym tygodniu.",
        tense: "Past Simple",
        correctForm: "I visited my grandparents last week.",
        rule: "Podmiot + czasownik w formie przeszłej + dopełnienie.",
        type: "Twierdzące - Past Simple",
        description: "Past Simple opisuje konkretne zdarzenia w przeszłości. Podmiot (I) + czasownik (visited) + dopełnienie (my grandparents last week)."
    },
    {
        polish: "Czytałem książkę wczoraj.",
        tense: "Past Simple",
        correctForm: "I read a book yesterday.",
        rule: "Podmiot + czasownik w formie przeszłej + dopełnienie.",
        type: "Twierdzące - Past Simple",
        description: "Czas Past Simple jest używany do opisania działań, które miały miejsce w przeszłości. Podmiot (I) + czasownik (read) + dopełnienie (a book yesterday)."
    },
    {
        polish: "Słuchałem muzyki wieczorem.",
        tense: "Past Simple",
        correctForm: "I listened to music in the evening.",
        rule: "Podmiot + czasownik w formie przeszłej + dopełnienie.",
        type: "Twierdzące - Past Simple",
        description: "Past Simple opisuje czynności, które zostały zakończone w przeszłości. Podmiot (I) + czasownik (listened) + dopełnienie (to music in the evening)."
    },
    {
        polish: "Biegałem w parku wczoraj rano.",
        tense: "Past Simple",
        correctForm: "I ran in the park yesterday morning.",
        rule: "Podmiot + czasownik w formie przeszłej + dopełnienie.",
        type: "Twierdzące - Past Simple",
        description: "Czas Past Simple opisuje zakończone działania w przeszłości. Podmiot (I) + czasownik (ran) + dopełnienie (in the park yesterday morning)."
    },
    {
        polish: "Spotkałem się z przyjacielem w zeszły piątek.",
        tense: "Past Simple",
        correctForm: "I met a friend last Friday.",
        rule: "Podmiot + czasownik w formie przeszłej + dopełnienie.",
        type: "Twierdzące - Past Simple",
        description: "Używamy Past Simple do opisywania przeszłych spotkań. Podmiot (I) + czasownik (met) + dopełnienie (a friend last Friday)."
    },
    {
        polish: "Pisałem wiersz wczoraj.",
        tense: "Past Simple",
        correctForm: "I wrote a poem yesterday.",
        rule: "Podmiot + czasownik w formie przeszłej + dopełnienie.",
        type: "Twierdzące - Past Simple",
        description: "Past Simple opisuje twórcze działania w przeszłości. Podmiot (I) + czasownik (wrote) + dopełnienie (a poem yesterday)."
    },
    {
        polish: "Widziałem świetny film w weekend.",
        tense: "Past Simple",
        correctForm: "I saw a great movie on the weekend.",
        rule: "Podmiot + czasownik w formie przeszłej + dopełnienie.",
        type: "Twierdzące - Past Simple",
        description: "Czas Past Simple używany jest do opisywania przeszłych doświadczeń. Podmiot (I) + czasownik (saw) + dopełnienie (a great movie on the weekend)."
    },
    {
        polish: "Zrobiłem zakupy wczoraj.",
        tense: "Past Simple",
        correctForm: "I did the shopping yesterday.",
        rule: "Podmiot + czasownik w formie przeszłej + dopełnienie.",
        type: "Twierdzące - Past Simple",
        description: "Past Simple opisuje działania, które miały miejsce w przeszłości. Podmiot (I) + czasownik (did) + dopełnienie (the shopping yesterday)."
    },
    {
        polish: "Często chodziłem na spacery w zeszłym roku.",
        tense: "Past Simple",
        correctForm: "I often went for walks last year.",
        rule: "Podmiot + czasownik w formie przeszłej + dopełnienie.",
        type: "Twierdzące - Past Simple",
        description: "Czas Past Simple używany jest do opisywania przeszłych nawyków. Podmiot (I) + czasownik (went) + dopełnienie (for walks last year)."
    },
    {
        polish: "Wczoraj gotowałem obiad.",
        tense: "Past Simple",
        correctForm: "I cooked dinner yesterday.",
        rule: "Podmiot + czasownik w formie przeszłej + dopełnienie.",
        type: "Twierdzące - Past Simple",
        description: "Past Simple opisuje zakończone działania w przeszłości. Podmiot (I) + czasownik (cooked) + dopełnienie (dinner yesterday)."
    },
    {
        polish: "Zjechałem na nartach w górach w zeszłym miesiącu.",
        tense: "Past Simple",
        correctForm: "I skied in the mountains last month.",
        rule: "Podmiot + czasownik w formie przeszłej + dopełnienie.",
        type: "Twierdzące - Past Simple",
        description: "Czas Past Simple opisuje przeszłe aktywności. Podmiot (I) + czasownik (skied) + dopełnienie (in the mountains last month)."
    },
    {
        polish: "Byłem w Paryżu w zeszłym roku.",
        tense: "Past Simple",
        correctForm: "I was in Paris last year.",
        rule: "Podmiot + czasownik w formie przeszłej + dopełnienie.",
        type: "Twierdzące - Past Simple",
        description: "Past Simple używamy do opisywania przeszłych lokalizacji. Podmiot (I) + czasownik (was) + dopełnienie (in Paris last year)."
    },
    {
        polish: "Napisałem list do mojej cioci.",
        tense: "Past Simple",
        correctForm: "I wrote a letter to my aunt.",
        rule: "Podmiot + czasownik w formie przeszłej + dopełnienie.",
        type: "Twierdzące - Past Simple",
        description: "Czas Past Simple opisuje działania twórcze. Podmiot (I) + czasownik (wrote) + dopełnienie (a letter to my aunt)."
    },
    {
        polish: "Odwiedziłem nowe muzeum.",
        tense: "Past Simple",
        correctForm: "I visited a new museum.",
        rule: "Podmiot + czasownik w formie przeszłej + dopełnienie.",
        type: "Twierdzące - Past Simple",
        description: "Past Simple używany jest do opisywania przeszłych doświadczeń. Podmiot (I) + czasownik (visited) + dopełnienie (a new museum)."
    },
    {
        polish: "Znalazłem zaginiony klucz.",
        tense: "Past Simple",
        correctForm: "I found the lost key.",
        rule: "Podmiot + czasownik w formie przeszłej + dopełnienie.",
        type: "Twierdzące - Past Simple",
        description: "Czas Past Simple opisuje zakończone działania. Podmiot (I) + czasownik (found) + dopełnienie (the lost key)."
    },
    {
        polish: "Zagrałem w nową grę komputerową.",
        tense: "Past Simple",
        correctForm: "I played a new video game.",
        rule: "Podmiot + czasownik w formie przeszłej + dopełnienie.",
        type: "Twierdzące - Past Simple",
        description: "Czas Past Simple opisuje przeszłe aktywności. Podmiot (I) + czasownik (played) + dopełnienie (a new video game)."
    },
    {
        polish: "Otrzymałem prezent na urodziny.",
        tense: "Past Simple",
        correctForm: "I received a gift for my birthday.",
        rule: "Podmiot + czasownik w formie przeszłej + dopełnienie.",
        type: "Twierdzące - Past Simple",
        description: "Czas Past Simple opisuje konkretne zdarzenia. Podmiot (I) + czasownik (received) + dopełnienie (a gift for my birthday)."
    },
    {
        polish: "Zacząłem nową pracę w zeszłym miesiącu.",
        tense: "Past Simple",
        correctForm: "I started a new job last month.",
        rule: "Podmiot + czasownik w formie przeszłej + dopełnienie.",
        type: "Twierdzące - Past Simple",
        description: "Past Simple opisuje rozpoczęcie nowych doświadczeń. Podmiot (I) + czasownik (started) + dopełnienie (a new job last month)."
    },
    {
        polish: "Pomogłem sąsiadowi w sobotę.",
        tense: "Past Simple",
        correctForm: "I helped my neighbor on Saturday.",
        rule: "Podmiot + czasownik w formie przeszłej + dopełnienie.",
        type: "Twierdzące - Past Simple",
        description: "Czas Past Simple używany jest do opisywania przeszłych interakcji. Podmiot (I) + czasownik (helped) + dopełnienie (my neighbor on Saturday)."
    },
    {
        polish: "Zrozumiałem temat po lekcji.",
        tense: "Past Simple",
        correctForm: "I understood the topic after the lesson.",
        rule: "Podmiot + czasownik w formie przeszłej + dopełnienie.",
        type: "Twierdzące - Past Simple",
        description: "Past Simple opisuje proces zrozumienia. Podmiot (I) + czasownik (understood) + dopełnienie (the topic after the lesson)."
    },
    {
        polish: "Udało mi się zdać egzamin.",
        tense: "Past Simple",
        correctForm: "I passed the exam.",
        rule: "Podmiot + czasownik w formie przeszłej + dopełnienie.",
        type: "Twierdzące - Past Simple",
        description: "Czas Past Simple opisuje zakończone osiągnięcia. Podmiot (I) + czasownik (passed) + dopełnienie (the exam)."
    },
    {
        polish: "Pojadłem na wakacje w zeszłym roku.",
        tense: "Past Simple",
        correctForm: "I went on vacation last year.",
        rule: "Podmiot + czasownik w formie przeszłej + dopełnienie.",
        type: "Twierdzące - Past Simple",
        description: "Czas Past Simple opisuje przeszłe podróże. Podmiot (I) + czasownik (went) + dopełnienie (on vacation last year)."
    },
    {
        polish: "Kupiłem nowy telefon.",
        tense: "Past Simple",
        correctForm: "I bought a new phone.",
        rule: "Podmiot + czasownik w formie przeszłej + dopełnienie.",
        type: "Twierdzące - Past Simple",
        description: "Past Simple opisuje zakupy w przeszłości. Podmiot (I) + czasownik (bought) + dopełnienie (a new phone)."
    },
    {
        polish: "Wysłalem e-mail do kolegi.",
        tense: "Past Simple",
        correctForm: "I sent an email to my colleague.",
        rule: "Podmiot + czasownik w formie przeszłej + dopełnienie.",
        type: "Twierdzące - Past Simple",
        description: "Czas Past Simple opisuje zakończone interakcje. Podmiot (I) + czasownik (sent) + dopełnienie (an email to my colleague)."
    },
    {
        polish: "Znalazłem nowego przyjaciela w szkole.",
        tense: "Past Simple",
        correctForm: "I found a new friend at school.",
        rule: "Podmiot + czasownik w formie przeszłej + dopełnienie.",
        type: "Twierdzące - Past Simple",
        description: "Czas Past Simple opisuje nowe znajomości. Podmiot (I) + czasownik (found) + dopełnienie (a new friend at school)."
    },
    {
        polish: "Udało mi się wyjść na czas.",
        tense: "Past Simple",
        correctForm: "I managed to leave on time.",
        rule: "Podmiot + czasownik w formie przeszłej + dopełnienie.",
        type: "Twierdzące - Past Simple",
        description: "Czas Past Simple opisuje osiągnięcia. Podmiot (I) + czasownik (managed) + dopełnienie (to leave on time)."
    },
    {
        polish: "Słyszałem ciekawe historie.",
        tense: "Past Simple",
        correctForm: "I heard interesting stories.",
        rule: "Podmiot + czasownik w formie przeszłej + dopełnienie.",
        type: "Twierdzące - Past Simple",
        description: "Czas Past Simple opisuje przeszłe doświadczenia. Podmiot (I) + czasownik (heard) + dopełnienie (interesting stories)."
    },
    {
        polish: "Miałem przyjemność uczestniczyć w konferencji.",
        tense: "Past Simple",
        correctForm: "I had the pleasure of attending the conference.",
        rule: "Podmiot + czasownik w formie przeszłej + dopełnienie.",
        type: "Twierdzące - Past Simple",
        description: "Czas Past Simple opisuje przeszłe doświadczenia. Podmiot (I) + czasownik (had) + dopełnienie (the pleasure of attending the conference)."
    },
    {
        polish: "Wczoraj o 18:00 jadłem obiad.",
        tense: "Past Continuous",
        correctForm: "I was eating lunch at 6 PM yesterday.",
        rule: "Podmiot + was/were + czasownik z -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Past Continuous opisuje czynności, które trwały w określonym momencie w przeszłości. Podmiot (I) + was + czasownik (eating) + dopełnienie (lunch at 6 PM yesterday)."
    },
    {
        polish: "Odwiedzałem moich dziadków, gdy zadzwoniłeś.",
        tense: "Past Continuous",
        correctForm: "I was visiting my grandparents when you called.",
        rule: "Podmiot + was/were + czasownik z -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Past Continuous opisuje trwające czynności, które były przerywane przez inne wydarzenia. Podmiot (I) + was + czasownik (visiting) + dopełnienie (my grandparents when you called)."
    },
    {
        polish: "Czytałem książkę, gdy zasnąłem.",
        tense: "Past Continuous",
        correctForm: "I was reading a book when I fell asleep.",
        rule: "Podmiot + was/were + czasownik z -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Past Continuous opisuje czynności, które miały miejsce w trakcie innej czynności. Podmiot (I) + was + czasownik (reading) + dopełnienie (a book when I fell asleep)."
    },
    {
        polish: "Słuchałem muzyki, gdy zaczęło padać.",
        tense: "Past Continuous",
        correctForm: "I was listening to music when it started to rain.",
        rule: "Podmiot + was/were + czasownik z -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Czas Past Continuous opisuje działania trwające w przeszłości. Podmiot (I) + was + czasownik (listening) + dopełnienie (to music when it started to rain)."
    },
    {
        polish: "Biegałem w parku, kiedy spotkałem przyjaciela.",
        tense: "Past Continuous",
        correctForm: "I was running in the park when I met a friend.",
        rule: "Podmiot + was/were + czasownik z -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Past Continuous opisuje czynności w toku, które były przerywane. Podmiot (I) + was + czasownik (running) + dopełnienie (in the park when I met a friend)."
    },
    {
        polish: "Oglądałem telewizję, gdy zadzwonił telefon.",
        tense: "Past Continuous",
        correctForm: "I was watching TV when the phone rang.",
        rule: "Podmiot + was/were + czasownik z -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Czas Past Continuous opisuje czynności, które miały miejsce w czasie innego zdarzenia. Podmiot (I) + was + czasownik (watching) + dopełnienie (TV when the phone rang)."
    },
    {
        polish: "Uczyłem się do egzaminu przez kilka godzin.",
        tense: "Past Continuous",
        correctForm: "I was studying for the exam for several hours.",
        rule: "Podmiot + was/were + czasownik z -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Past Continuous opisuje długotrwałe działania w przeszłości. Podmiot (I) + was + czasownik (studying) + dopełnienie (for the exam for several hours)."
    },
    {
        polish: "Grałem na gitarze, kiedy przyszedł gość.",
        tense: "Past Continuous",
        correctForm: "I was playing the guitar when the guest arrived.",
        rule: "Podmiot + was/were + czasownik z -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Czas Past Continuous opisuje czynności, które trwały podczas innego zdarzenia. Podmiot (I) + was + czasownik (playing) + dopełnienie (the guitar when the guest arrived)."
    },
    {
        polish: "Patrzyłem na film, gdy zgasło światło.",
        tense: "Past Continuous",
        correctForm: "I was watching a movie when the lights went out.",
        rule: "Podmiot + was/were + czasownik z -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Past Continuous opisuje czynności trwające w czasie innego zdarzenia. Podmiot (I) + was + czasownik (watching) + dopełnienie (a movie when the lights went out)."
    },
    {
        polish: "Kiedy ty pracowałeś, ja odpoczywałem.",
        tense: "Past Continuous",
        correctForm: "When you were working, I was resting.",
        rule: "Podmiot + was/were + czasownik z -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Past Continuous używany jest do opisywania równoległych czynności w przeszłości. Podmiot (I) + was + czasownik (resting) + dopełnienie (when you were working)."
    },
    {
        polish: "Kiedy oni przyjechali, my jedliśmy kolację.",
        tense: "Past Continuous",
        correctForm: "When they arrived, we were having dinner.",
        rule: "Podmiot + was/were + czasownik z -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Czas Past Continuous opisuje działania trwające w czasie innego zdarzenia. Podmiot (we) + were + czasownik (having) + dopełnienie (dinner when they arrived)."
    },
    {
        polish: "Myślałem o wakacjach, gdy mnie zawołano.",
        tense: "Past Continuous",
        correctForm: "I was thinking about the vacation when I was called.",
        rule: "Podmiot + was/were + czasownik z -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Czas Past Continuous używany jest do opisywania trwających myśli. Podmiot (I) + was + czasownik (thinking) + dopełnienie (about the vacation when I was called)."
    },
    {
        polish: "Rozmawiałem z kolegą, gdy zadzwonił telefon.",
        tense: "Past Continuous",
        correctForm: "I was talking to a colleague when the phone rang.",
        rule: "Podmiot + was/were + czasownik z -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Past Continuous opisuje czynności, które były przerywane przez inne zdarzenia. Podmiot (I) + was + czasownik (talking) + dopełnienie (to a colleague when the phone rang)."
    },
    {
        polish: "Słuchałem podcastu, gdy przyszła wiadomość.",
        tense: "Past Continuous",
        correctForm: "I was listening to a podcast when the message arrived.",
        rule: "Podmiot + was/were + czasownik z -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Czas Past Continuous opisuje działania, które miały miejsce w czasie innego zdarzenia. Podmiot (I) + was + czasownik (listening) + dopełnienie (to a podcast when the message arrived)."
    },
    {
        polish: "Bawiłem się z dziećmi, gdy zaczęło padać.",
        tense: "Past Continuous",
        correctForm: "I was playing with the kids when it started to rain.",
        rule: "Podmiot + was/were + czasownik z -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Czas Past Continuous opisuje działania w toku. Podmiot (I) + was + czasownik (playing) + dopełnienie (with the kids when it started to rain)."
    },
    {
        polish: "Czekałem na autobus, kiedy zobaczyłem znajomego.",
        tense: "Past Continuous",
        correctForm: "I was waiting for the bus when I saw a friend.",
        rule: "Podmiot + was/were + czasownik z -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Past Continuous opisuje czynności, które trwały, gdy wydarzyło się coś innego. Podmiot (I) + was + czasownik (waiting) + dopełnienie (for the bus when I saw a friend)."
    },
    {
        polish: "Oglądałem zdjęcia, kiedy przyjechał gość.",
        tense: "Past Continuous",
        correctForm: "I was looking at photos when the guest arrived.",
        rule: "Podmiot + was/were + czasownik z -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Czas Past Continuous opisuje czynności, które trwały w czasie innego zdarzenia. Podmiot (I) + was + czasownik (looking) + dopełnienie (at photos when the guest arrived)."
    },
    {
        polish: "Podczas gdy ona gotowała, ja sprzątałem.",
        tense: "Past Continuous",
        correctForm: "While she was cooking, I was cleaning.",
        rule: "Podmiot + was/were + czasownik z -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Past Continuous używany jest do opisywania równoległych czynności w przeszłości. Podmiot (I) + was + czasownik (cleaning) + dopełnienie (while she was cooking)."
    },
    {
        polish: "Biegałem, gdy usłyszałem hałas.",
        tense: "Past Continuous",
        correctForm: "I was running when I heard a noise.",
        rule: "Podmiot + was/were + czasownik z -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Czas Past Continuous opisuje trwające działania, które były przerywane. Podmiot (I) + was + czasownik (running) + dopełnienie (when I heard a noise)."
    },
    {
        polish: "Kiedy ona malowała, ja czytałem książkę.",
        tense: "Past Continuous",
        correctForm: "When she was painting, I was reading a book.",
        rule: "Podmiot + was/were + czasownik z -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Past Continuous opisuje działania trwające w czasie innego zdarzenia. Podmiot (I) + was + czasownik (reading) + dopełnienie (a book when she was painting)."
    },
    {
        polish: "Pracowałem nad projektem, kiedy dostałem telefon.",
        tense: "Past Continuous",
        correctForm: "I was working on the project when I received a call.",
        rule: "Podmiot + was/were + czasownik z -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Czas Past Continuous opisuje działania, które miały miejsce w czasie innego zdarzenia. Podmiot (I) + was + czasownik (working) + dopełnienie (on the project when I received a call)."
    },
    {
        polish: "Rozmawiałem z klientem, gdy zniknął internet.",
        tense: "Past Continuous",
        correctForm: "I was talking to a client when the internet went down.",
        rule: "Podmiot + was/were + czasownik z -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Czas Past Continuous opisuje czynności trwające w czasie innego zdarzenia. Podmiot (I) + was + czasownik (talking) + dopełnienie (to a client when the internet went down)."
    },
    {
        polish: "Oglądałem nowy serial, kiedy zasnąłem.",
        tense: "Past Continuous",
        correctForm: "I was watching a new series when I fell asleep.",
        rule: "Podmiot + was/were + czasownik z -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Czas Past Continuous opisuje czynności, które były w toku. Podmiot (I) + was + czasownik (watching) + dopełnienie (a new series when I fell asleep)."
    },
    {
        polish: "Zastanawiałem się nad przyszłością, gdy się obudziłem.",
        tense: "Past Continuous",
        correctForm: "I was thinking about the future when I woke up.",
        rule: "Podmiot + was/were + czasownik z -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Past Continuous używany jest do opisywania myśli w czasie. Podmiot (I) + was + czasownik (thinking) + dopełnienie (about the future when I woke up)."
    },
    {
        polish: "Jadłem kolację, gdy zaczęła padać deszcz.",
        tense: "Past Continuous",
        correctForm: "I was having dinner when it started to rain.",
        rule: "Podmiot + was/were + czasownik z -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Czas Past Continuous opisuje czynności, które miały miejsce w czasie innego zdarzenia. Podmiot (I) + was + czasownik (having) + dopełnienie (dinner when it started to rain)."
    },
    {
        polish: "Kiedy oglądałem film, ona pracowała.",
        tense: "Past Continuous",
        correctForm: "When I was watching a movie, she was working.",
        rule: "Podmiot + was/were + czasownik z -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Past Continuous używany jest do opisywania równoległych czynności. Podmiot (I) + was + czasownik (watching) + dopełnienie (a movie when she was working)."
    },
    {
        polish: "Jutro zjem obiad.",
        tense: "Future Simple",
        correctForm: "I will eat lunch tomorrow.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Czas Future Simple używamy do wyrażania przyszłych czynności. Podmiot (I) + will + czasownik (eat) + dopełnienie (lunch tomorrow)."
    },
    {
        polish: "W przyszłym tygodniu zacznę nową pracę.",
        tense: "Future Simple",
        correctForm: "I will start a new job next week.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Future Simple opisuje przyszłe działania. Podmiot (I) + will + czasownik (start) + dopełnienie (a new job next week)."
    },
    {
        polish: "Pomogę ci jutro.",
        tense: "Future Simple",
        correctForm: "I will help you tomorrow.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Czas Future Simple wyraża przyszłe obietnice. Podmiot (I) + will + czasownik (help) + dopełnienie (you tomorrow)."
    },
    {
        polish: "Zrozumiem ten temat w przyszłym tygodniu.",
        tense: "Future Simple",
        correctForm: "I will understand this topic next week.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Future Simple używamy do wyrażania przyszłych przemyśleń. Podmiot (I) + will + czasownik (understand) + dopełnienie (this topic next week)."
    },
    {
        polish: "Udam się na wakacje w lipcu.",
        tense: "Future Simple",
        correctForm: "I will go on vacation in July.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Czas Future Simple opisuje przyszłe plany. Podmiot (I) + will + czasownik (go) + dopełnienie (on vacation in July)."
    },
    {
        polish: "Kupię nowy telefon w przyszłym miesiącu.",
        tense: "Future Simple",
        correctForm: "I will buy a new phone next month.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Future Simple wyraża przyszłe zakupy. Podmiot (I) + will + czasownik (buy) + dopełnienie (a new phone next month)."
    },
    {
        polish: "Wyślę e-mail do kolegi.",
        tense: "Future Simple",
        correctForm: "I will send an email to my colleague.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Czas Future Simple opisuje przyszłe interakcje. Podmiot (I) + will + czasownik (send) + dopełnienie (an email to my colleague)."
    },
    {
        polish: "Znajdę nowego przyjaciela w szkole.",
        tense: "Future Simple",
        correctForm: "I will find a new friend at school.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Future Simple używamy do wyrażania przyszłych relacji. Podmiot (I) + will + czasownik (find) + dopełnienie (a new friend at school)."
    },
    {
        polish: "Uda mi się wyjść na czas.",
        tense: "Future Simple",
        correctForm: "I will manage to leave on time.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Czas Future Simple wyraża przyszłe osiągnięcia. Podmiot (I) + will + czasownik (manage) + dopełnienie (to leave on time)."
    },
    {
        polish: "Usłyszę ciekawe historie.",
        tense: "Future Simple",
        correctForm: "I will hear interesting stories.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Future Simple opisuje przyszłe doświadczenia. Podmiot (I) + will + czasownik (hear) + dopełnienie (interesting stories)."
    },
    {
        polish: "Będę miał przyjemność uczestniczyć w konferencji.",
        tense: "Future Simple",
        correctForm: "I will have the pleasure of attending the conference.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Czas Future Simple używamy do wyrażania przyszłych doświadczeń. Podmiot (I) + will + czasownik (have) + dopełnienie (the pleasure of attending the conference)."
    },
    {
        polish: "Jutro pobiegnę na siłownię.",
        tense: "Future Simple",
        correctForm: "I will run to the gym tomorrow.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Czas Future Simple opisuje przyszłe plany. Podmiot (I) + will + czasownik (run) + dopełnienie (to the gym tomorrow)."
    },
    {
        polish: "Będę uczył się nowego języka.",
        tense: "Future Simple",
        correctForm: "I will learn a new language.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Future Simple wyraża przyszłe nauki. Podmiot (I) + will + czasownik (learn) + dopełnienie (a new language)."
    },
    {
        polish: "Pojadę na wycieczkę w przyszłym roku.",
        tense: "Future Simple",
        correctForm: "I will go on a trip next year.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Czas Future Simple używamy do wyrażania przyszłych planów podróżniczych. Podmiot (I) + will + czasownik (go) + dopełnienie (on a trip next year)."
    },
    {
        polish: "Zorganizuję przyjęcie w sobotę.",
        tense: "Future Simple",
        correctForm: "I will organize a party on Saturday.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Future Simple opisuje przyszłe wydarzenia. Podmiot (I) + will + czasownik (organize) + dopełnienie (a party on Saturday)."
    },
    {
        polish: "Wyjdę na spacer po pracy.",
        tense: "Future Simple",
        correctForm: "I will go for a walk after work.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Czas Future Simple wyraża przyszłe plany. Podmiot (I) + will + czasownik (go) + dopełnienie (for a walk after work)."
    },
    {
        polish: "Zobaczę film w weekend.",
        tense: "Future Simple",
        correctForm: "I will watch a movie this weekend.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Future Simple opisuje przyszłe aktywności. Podmiot (I) + will + czasownik (watch) + dopełnienie (a movie this weekend)."
    },
    {
        polish: "Zadzwonię do ciebie później.",
        tense: "Future Simple",
        correctForm: "I will call you later.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Czas Future Simple wyraża przyszłe plany kontaktowe. Podmiot (I) + will + czasownik (call) + dopełnienie (you later)."
    },
    {
        polish: "Będę uczyć się na egzamin.",
        tense: "Future Simple",
        correctForm: "I will study for the exam.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Future Simple opisuje przyszłe przygotowania. Podmiot (I) + will + czasownik (study) + dopełnienie (for the exam)."
    },
    {
        polish: "Przygotuję się do spotkania.",
        tense: "Future Simple",
        correctForm: "I will prepare for the meeting.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Czas Future Simple używamy do wyrażania przyszłych działań przygotowawczych. Podmiot (I) + will + czasownik (prepare) + dopełnienie (for the meeting)."
    },
    {
        polish: "W przyszłym miesiącu odwiedzę rodzinę.",
        tense: "Future Simple",
        correctForm: "I will visit my family next month.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Future Simple opisuje przyszłe wizyty. Podmiot (I) + will + czasownik (visit) + dopełnienie (my family next month)."
    },
    {
        polish: "Zadzwonię do lekarza.",
        tense: "Future Simple",
        correctForm: "I will call the doctor.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Czas Future Simple wyraża przyszłe działania zdrowotne. Podmiot (I) + will + czasownik (call) + dopełnienie (the doctor)."
    },
    {
        polish: "Przygotuję obiad dla rodziny.",
        tense: "Future Simple",
        correctForm: "I will prepare dinner for my family.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Future Simple opisuje przyszłe działania kulinarne. Podmiot (I) + will + czasownik (prepare) + dopełnienie (dinner for my family)."
    },
    {
        polish: "Pójdę na zakupy w sobotę.",
        tense: "Future Simple",
        correctForm: "I will go shopping on Saturday.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Czas Future Simple wyraża przyszłe plany zakupowe. Podmiot (I) + will + czasownik (go) + dopełnienie (shopping on Saturday)."
    },
    {
        polish: "W przyszłym roku uczynię coś wielkiego.",
        tense: "Future Simple",
        correctForm: "I will do something great next year.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Future Simple używamy do wyrażania przyszłych ambicji. Podmiot (I) + will + czasownik (do) + dopełnienie (something great next year)."
    },
    {
        polish: "Znajdę czas na relaks.",
        tense: "Future Simple",
        correctForm: "I will find time to relax.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Czas Future Simple wyraża przyszłe plany relaksacyjne. Podmiot (I) + will + czasownik (find) + dopełnienie (time to relax)."
    },
    {
        polish: "Zorganizuję wyjazd w przyszłym miesiącu.",
        tense: "Future Simple",
        correctForm: "I will organize a trip next month.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Czas Future Simple opisuje przyszłe plany podróżnicze. Podmiot (I) + will + czasownik (organize) + dopełnienie (a trip next month)."
    },
    {
        polish: "Spędzę czas z przyjaciółmi.",
        tense: "Future Simple",
        correctForm: "I will spend time with my friends.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Future Simple używamy do wyrażania przyszłych spotkań. Podmiot (I) + will + czasownik (spend) + dopełnienie (time with my friends)."
    },
    {
        polish: "Zobaczę, co się stanie.",
        tense: "Future Simple",
        correctForm: "I will see what happens.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Czas Future Simple wyraża przyszłe obserwacje. Podmiot (I) + will + czasownik (see) + dopełnienie (what happens)."
    },
    {
        polish: "Będę pisać codziennie.",
        tense: "Future Simple",
        correctForm: "I will write every day.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Future Simple opisuje przyszłe działania. Podmiot (I) + will + czasownik (write) + dopełnienie (every day)."
    },
    {
        polish: "Zamierzam nauczyć się grać na pianinie.",
        tense: "Future Simple",
        correctForm: "I will learn to play the piano.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Czas Future Simple używamy do wyrażania przyszłych nauk. Podmiot (I) + will + czasownik (learn) + dopełnienie (to play the piano)."
    },
    {
        polish: "Będę się starał o pracę.",
        tense: "Future Simple",
        correctForm: "I will apply for a job.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Czas Future Simple opisuje przyszłe działania związane z pracą. Podmiot (I) + will + czasownik (apply) + dopełnienie (for a job)."
    },
    {
        polish: "Pojadę do innego miasta na weekend.",
        tense: "Future Simple",
        correctForm: "I will go to another city for the weekend.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Future Simple wyraża przyszłe plany podróżnicze. Podmiot (I) + will + czasownik (go) + dopełnienie (to another city for the weekend)."
    },
    {
        polish: "Kupię książkę, którą poleciłeś.",
        tense: "Future Simple",
        correctForm: "I will buy the book you recommended.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Czas Future Simple opisuje przyszłe zakupy. Podmiot (I) + will + czasownik (buy) + dopełnienie (the book you recommended)."
    },
    {
        polish: "Zgłoszę się na kurs w przyszłym miesiącu.",
        tense: "Future Simple",
        correctForm: "I will sign up for a course next month.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Future Simple wyraża przyszłe decyzje edukacyjne. Podmiot (I) + will + czasownik (sign) + dopełnienie (up for a course next month)."
    },
    {
        polish: "Będę brać udział w wydarzeniu.",
        tense: "Future Simple",
        correctForm: "I will participate in the event.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Czas Future Simple opisuje przyszłe uczestnictwo. Podmiot (I) + will + czasownik (participate) + dopełnienie (in the event)."
    },
    {
        polish: "Przeczytam książkę, którą mi dałeś.",
        tense: "Future Simple",
        correctForm: "I will read the book you gave me.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Future Simple opisuje przyszłe działania czytelnicze. Podmiot (I) + will + czasownik (read) + dopełnienie (the book you gave me)."
    },
    {
        polish: "Stworzę nowy projekt w przyszłym miesiącu.",
        tense: "Future Simple",
        correctForm: "I will create a new project next month.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Czas Future Simple używamy do wyrażania przyszłych działań kreatywnych. Podmiot (I) + will + czasownik (create) + dopełnienie (a new project next month)."
    },
    {
        polish: "Będę starać się lepiej pracować.",
        tense: "Future Simple",
        correctForm: "I will try to work better.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Future Simple wyraża przyszłe dążenia. Podmiot (I) + will + czasownik (try) + dopełnienie (to work better)."
    },
    {
        polish: "Zamierzam spotkać się z tobą w przyszłym tygodniu.",
        tense: "Future Simple",
        correctForm: "I will meet you next week.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Czas Future Simple wyraża przyszłe plany spotkań. Podmiot (I) + will + czasownik (meet) + dopełnienie (you next week)."
    },
    {
        polish: "Jutro o tej porze będę jadł obiad.",
        tense: "Future Continuous",
        correctForm: "I will be eating lunch at this time tomorrow.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Czas Future Continuous używamy do wyrażania czynności, które będą trwały w określonym czasie w przyszłości. Podmiot (I) + will be + czasownik (eating) + dopełnienie (lunch at this time tomorrow)."
    },
    {
        polish: "W przyszłym tygodniu będę pracował nad projektem.",
        tense: "Future Continuous",
        correctForm: "I will be working on the project next week.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Future Continuous opisuje działania, które będą miały miejsce w przyszłości. Podmiot (I) + will be + czasownik (working) + dopełnienie (on the project next week)."
    },
    {
        polish: "W sobotę będę się uczył do egzaminu.",
        tense: "Future Continuous",
        correctForm: "I will be studying for the exam on Saturday.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Czas Future Continuous wyraża przyszłe działania edukacyjne. Podmiot (I) + will be + czasownik (studying) + dopełnienie (for the exam on Saturday)."
    },
    {
        polish: "O 10 rano będę biegał w parku.",
        tense: "Future Continuous",
        correctForm: "I will be running in the park at 10 AM.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Future Continuous opisuje przyszłe działania w określonym czasie. Podmiot (I) + will be + czasownik (running) + dopełnienie (in the park at 10 AM)."
    },
    {
        polish: "Kiedy przyjedziesz, będę oglądał film.",
        tense: "Future Continuous",
        correctForm: "When you arrive, I will be watching a movie.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Czas Future Continuous opisuje działania, które będą trwały w czasie innego zdarzenia. Podmiot (I) + will be + czasownik (watching) + dopełnienie (a movie when you arrive)."
    },
    {
        polish: "W przyszłym miesiącu będę uczył się nowego języka.",
        tense: "Future Continuous",
        correctForm: "I will be learning a new language next month.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Future Continuous używamy do wyrażania przyszłych nauk. Podmiot (I) + will be + czasownik (learning) + dopełnienie (a new language next month)."
    },
    {
        polish: "Zaraz po pracy będę robił zakupy.",
        tense: "Future Continuous",
        correctForm: "I will be shopping right after work.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Czas Future Continuous opisuje działania, które będą trwały w określonym czasie. Podmiot (I) + will be + czasownik (shopping) + dopełnienie (right after work)."
    },
    {
        polish: "Będę uczestniczył w konferencji w przyszłym tygodniu.",
        tense: "Future Continuous",
        correctForm: "I will be attending the conference next week.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Future Continuous wyraża przyszłe uczestnictwo w wydarzeniach. Podmiot (I) + will be + czasownik (attending) + dopełnienie (the conference next week)."
    },
    {
        polish: "Kiedy wyjdziesz, ja będę sprzątał.",
        tense: "Future Continuous",
        correctForm: "When you leave, I will be cleaning.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Czas Future Continuous opisuje równoległe działania w przyszłości. Podmiot (I) + will be + czasownik (cleaning) + dopełnienie (when you leave)."
    },
    {
        polish: "O 8 wieczorem będę gotował kolację.",
        tense: "Future Continuous",
        correctForm: "I will be cooking dinner at 8 PM.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Future Continuous używamy do wyrażania przyszłych czynności kulinarnych. Podmiot (I) + will be + czasownik (cooking) + dopełnienie (dinner at 8 PM)."
    },
    {
        polish: "W przyszłym roku będę podróżował po Europie.",
        tense: "Future Continuous",
        correctForm: "I will be traveling around Europe next year.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Czas Future Continuous opisuje przyszłe podróże. Podmiot (I) + will be + czasownik (traveling) + dopełnienie (around Europe next year)."
    },
    {
        polish: "Podczas gdy oni będą rozmawiać, ja będę pracował.",
        tense: "Future Continuous",
        correctForm: "While they are talking, I will be working.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Future Continuous opisuje równoległe działania w przyszłości. Podmiot (I) + will be + czasownik (working) + dopełnienie (while they are talking)."
    },
    {
        polish: "W piątek będę robił porządki w domu.",
        tense: "Future Continuous",
        correctForm: "I will be cleaning the house on Friday.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Czas Future Continuous wyraża przyszłe plany porządkowe. Podmiot (I) + will be + czasownik (cleaning) + dopełnienie (the house on Friday)."
    },
    {
        polish: "W weekend będę odpoczywał z rodziną.",
        tense: "Future Continuous",
        correctForm: "I will be relaxing with my family this weekend.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Future Continuous opisuje przyszłe plany relaksacyjne. Podmiot (I) + will be + czasownik (relaxing) + dopełnienie (with my family this weekend)."
    },
    {
        polish: "Kiedy wrócisz, ja będę uczył się do egzaminu.",
        tense: "Future Continuous",
        correctForm: "When you come back, I will be studying for the exam.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Czas Future Continuous opisuje działania, które będą trwały w czasie innego zdarzenia. Podmiot (I) + will be + czasownik (studying) + dopełnienie (for the exam when you come back)."
    },
    {
        polish: "O tej porze w przyszłym roku będę w pracy.",
        tense: "Future Continuous",
        correctForm: "I will be at work at this time next year.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Future Continuous opisuje przyszłe plany zawodowe. Podmiot (I) + will be + czasownik (at work) + dopełnienie (at this time next year)."
    },
    {
        polish: "W przyszłym miesiącu będę spotykał się z nowymi ludźmi.",
        tense: "Future Continuous",
        correctForm: "I will be meeting new people next month.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Czas Future Continuous wyraża przyszłe plany towarzyskie. Podmiot (I) + will be + czasownik (meeting) + dopełnienie (new people next month)."
    },
    {
        polish: "Będę grał na pianinie w niedzielę.",
        tense: "Future Continuous",
        correctForm: "I will be playing the piano on Sunday.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Future Continuous opisuje przyszłe działania artystyczne. Podmiot (I) + will be + czasownik (playing) + dopełnienie (the piano on Sunday)."
    },
    {
        polish: "W przyszłym tygodniu będę prowadził warsztaty.",
        tense: "Future Continuous",
        correctForm: "I will be conducting workshops next week.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Czas Future Continuous wyraża przyszłe plany edukacyjne. Podmiot (I) + will be + czasownik (conducting) + dopełnienie (workshops next week)."
    },
    {
        polish: "Będę sprawdzał wiadomości w poniedziałek rano.",
        tense: "Future Continuous",
        correctForm: "I will be checking the news on Monday morning.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Czas Future Continuous opisuje przyszłe działania informacyjne. Podmiot (I) + will be + czasownik (checking) + dopełnienie (the news on Monday morning)."
    },
    {
        polish: "Kiedy ty będziesz spać, ja będę czytał książkę.",
        tense: "Future Continuous",
        correctForm: "When you are sleeping, I will be reading a book.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Czas Future Continuous opisuje działania, które będą miały miejsce w czasie innego zdarzenia. Podmiot (I) + will be + czasownik (reading) + dopełnienie (a book when you are sleeping)."
    },
    {
        polish: "O 5 po południu będę pracował nad nowym projektem.",
        tense: "Future Continuous",
        correctForm: "I will be working on a new project at 5 PM.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Future Continuous opisuje przyszłe działania zawodowe. Podmiot (I) + will be + czasownik (working) + dopełnienie (on a new project at 5 PM)."
    },
    {
        polish: "Będę pisał e-maile w czasie wolnym.",
        tense: "Future Continuous",
        correctForm: "I will be writing emails in my free time.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Czas Future Continuous wyraża przyszłe działania biurowe. Podmiot (I) + will be + czasownik (writing) + dopełnienie (emails in my free time)."
    },
    {
        polish: "Kiedy będziesz oglądał telewizję, ja będę ćwiczył.",
        tense: "Future Continuous",
        correctForm: "While you are watching TV, I will be exercising.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Future Continuous opisuje równoległe działania w przyszłości. Podmiot (I) + will be + czasownik (exercising) + dopełnienie (while you are watching TV)."
    },
    {
        polish: "O 6 wieczorem będę rozmawiał z przyjacielem.",
        tense: "Future Continuous",
        correctForm: "I will be talking to my friend at 6 PM.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Czas Future Continuous opisuje przyszłe spotkania towarzyskie. Podmiot (I) + will be + czasownik (talking) + dopełnienie (to my friend at 6 PM)."
    },
    {
        polish: "W środę będę grał w tenisa.",
        tense: "Future Continuous",
        correctForm: "I will be playing tennis on Wednesday.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Future Continuous wyraża przyszłe plany sportowe. Podmiot (I) + will be + czasownik (playing) + dopełnienie (tennis on Wednesday)."
    },
    {
        polish: "Będę organizował przyjęcie w przyszłym miesiącu.",
        tense: "Future Continuous",
        correctForm: "I will be organizing a party next month.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Czas Future Continuous opisuje przyszłe plany towarzyskie. Podmiot (I) + will be + czasownik (organizing) + dopełnienie (a party next month)."
    },
    {
        polish: "W przyszłym roku będę prowadził bloga.",
        tense: "Future Continuous",
        correctForm: "I will be blogging next year.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Future Continuous wyraża przyszłe działania pisarskie. Podmiot (I) + will be + czasownik (blogging) + dopełnienie (next year)."
    },
    {
        polish: "Kiedy przyjdziesz, ja będę pracował w ogrodzie.",
        tense: "Future Continuous",
        correctForm: "When you come, I will be working in the garden.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Czas Future Continuous opisuje działania, które będą trwały w czasie innego zdarzenia. Podmiot (I) + will be + czasownik (working) + dopełnienie (in the garden when you come)."
    },
    {
        polish: "Będę się uczył do egzaminu w przyszłym tygodniu.",
        tense: "Future Continuous",
        correctForm: "I will be studying for the exam next week.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Future Continuous wyraża przyszłe działania edukacyjne. Podmiot (I) + will be + czasownik (studying) + dopełnienie (for the exam next week)."
    },
    {
        polish: "O tej porze w przyszłym miesiącu będę podróżował.",
        tense: "Future Continuous",
        correctForm: "I will be traveling at this time next month.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Czas Future Continuous używamy do opisywania przyszłych podróży. Podmiot (I) + will be + czasownik (traveling) + dopełnienie (at this time next month)."
    },
    {
        polish: "Będę w kontakcie z tobą przez cały tydzień.",
        tense: "Future Continuous",
        correctForm: "I will be in touch with you all week.",
        rule: "Podmiot + will be + czasownik z -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Future Continuous opisuje przyszłe relacje. Podmiot (I) + will be + czasownik (in touch) + dopełnienie (with you all week)."
    },
    {
        polish: "Wczoraj zjadłem pizzę.",
        tense: "Past Simple",
        correctForm: "I ate pizza yesterday.",
        rule: "Podmiot + czasownik w formie przeszłej.",
        type: "Twierdzące - Past Simple",
        description: "Opisuje zakończoną czynność z przeszłości."
    },
    {
        polish: "Nie widziałem tego filmu.",
        tense: "Past Simple",
        correctForm: "I did not see that movie.",
        rule: "Podmiot + did not + czasownik w formie podstawowej.",
        type: "Przeczące - Past Simple",
        description: "Używamy 'did not' (didn't) do przeczenia."
    },
    {
        polish: "Czy on napisał książkę?",
        tense: "Past Simple",
        correctForm: "Did he write a book?",
        rule: "Did + podmiot + czasownik w formie podstawowej?",
        type: "Pytające - Past Simple",
        description: "Zadawanie pytań w czasie Past Simple."
    },
    {
        polish: "Ona uczyła się przez cały dzień.",
        tense: "Past Continuous",
        correctForm: "She was studying all day.",
        rule: "Podmiot + was/were + czasownik z końcówką -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Opisuje czynność trwającą w przeszłości."
    },
    {
        polish: "Nie pisałem maila wczoraj.",
        tense: "Past Continuous",
        correctForm: "I was not writing an email yesterday.",
        rule: "Podmiot + was/were not + czasownik z końcówką -ing.",
        type: "Przeczące - Past Continuous",
        description: "Przeczenie w czasie Past Continuous."
    },
    {
        polish: "Czy oni biegli w parku, gdy zaczął padać deszcz?",
        tense: "Past Continuous",
        correctForm: "Were they running in the park when it started to rain?",
        rule: "Were + podmiot + czasownik z końcówką -ing?",
        type: "Pytające - Past Continuous",
        description: "Zadawanie pytań o czynności trwające w przeszłości."
    },
    {
        polish: "W weekend odwiedziłem moich dziadków.",
        tense: "Past Simple",
        correctForm: "I visited my grandparents over the weekend.",
        rule: "Podmiot + czasownik w formie przeszłej.",
        type: "Twierdzące - Past Simple",
        description: "Opisuje zakończoną czynność."
    },
    {
        polish: "Nie czytałem tej książki.",
        tense: "Past Simple",
        correctForm: "I did not read that book.",
        rule: "Podmiot + did not + czasownik w formie podstawowej.",
        type: "Przeczące - Past Simple",
        description: "Używamy 'did not' do przeczenia."
    },
    {
        polish: "Czy ona widziała ten obraz?",
        tense: "Past Simple",
        correctForm: "Did she see that painting?",
        rule: "Did + podmiot + czasownik w formie podstawowej?",
        type: "Pytające - Past Simple",
        description: "Zadawanie pytań w czasie Past Simple."
    },
    {
        polish: "Myślałem o wakacjach, gdy dzwoniłeś.",
        tense: "Past Continuous",
        correctForm: "I was thinking about the holidays when you called.",
        rule: "Podmiot + was/were + czasownik z końcówką -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Opisuje myślenie trwające w przeszłości."
    },
    {
        polish: "Nie oglądaliśmy meczu.",
        tense: "Past Continuous",
        correctForm: "We were not watching the match.",
        rule: "Podmiot + was/were not + czasownik z końcówką -ing.",
        type: "Przeczące - Past Continuous",
        description: "Przeczenie w czasie Past Continuous."
    },
    {
        polish: "Czy oni tańczyli, gdy zagrano muzykę?",
        tense: "Past Continuous",
        correctForm: "Were they dancing when the music played?",
        rule: "Were + podmiot + czasownik z końcówką -ing?",
        type: "Pytające - Past Continuous",
        description: "Zadawanie pytań o czynności trwające w przeszłości."
    },
    // Dodaj więcej zdań
    {
        polish: "Wczoraj słuchałem muzyki.",
        tense: "Past Simple",
        correctForm: "I listened to music yesterday.",
        rule: "Podmiot + czasownik w formie przeszłej.",
        type: "Twierdzące - Past Simple",
        description: "Opisuje zakończoną czynność."
    },
    {
        polish: "Nie kupiłem żadnych owoców.",
        tense: "Past Simple",
        correctForm: "I did not buy any fruits.",
        rule: "Podmiot + did not + czasownik w formie podstawowej.",
        type: "Przeczące - Past Simple",
        description: "Używamy 'did not' do przeczenia."
    },
    {
        polish: "Czy ona rozmawiała ze mną wczoraj?",
        tense: "Past Simple",
        correctForm: "Did she talk to me yesterday?",
        rule: "Did + podmiot + czasownik w formie podstawowej?",
        type: "Pytające - Past Simple",
        description: "Zadawanie pytań w czasie Past Simple."
    },
    {
        polish: "Siedziałem w parku przez dwie godziny.",
        tense: "Past Continuous",
        correctForm: "I was sitting in the park for two hours.",
        rule: "Podmiot + was/were + czasownik z końcówką -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Opisuje czynność trwającą w przeszłości."
    },
    {
        polish: "Nie spałem dobrze wczoraj w nocy.",
        tense: "Past Continuous",
        correctForm: "I was not sleeping well last night.",
        rule: "Podmiot + was/were not + czasownik z końcówką -ing.",
        type: "Przeczące - Past Continuous",
        description: "Przeczenie w czasie Past Continuous."
    },
    {
        polish: "Czy oni rozwiązywali krzyżówkę wczoraj?",
        tense: "Past Continuous",
        correctForm: "Were they solving a crossword yesterday?",
        rule: "Were + podmiot + czasownik z końcówką -ing?",
        type: "Pytające - Past Continuous",
        description: "Zadawanie pytań o czynności trwające w przeszłości."
    },
    // Kontynuuj dodawanie kolejnych zdań
    {
        polish: "Znalazłem zgubiony klucz.",
        tense: "Past Simple",
        correctForm: "I found the lost key.",
        rule: "Podmiot + czasownik w formie przeszłej.",
        type: "Twierdzące - Past Simple",
        description: "Opisuje zakończoną czynność."
    },
    {
        polish: "Nie widziałem mojego przyjaciela od dawna.",
        tense: "Past Simple",
        correctForm: "I did not see my friend for a long time.",
        rule: "Podmiot + did not + czasownik w formie podstawowej.",
        type: "Przeczące - Past Simple",
        description: "Używamy 'did not' do przeczenia."
    },
    {
        polish: "Czy oni zapomnieli o spotkaniu?",
        tense: "Past Simple",
        correctForm: "Did they forget about the meeting?",
        rule: "Did + podmiot + czasownik w formie podstawowej?",
        type: "Pytające - Past Simple",
        description: "Zadawanie pytań w czasie Past Simple."
    },
    {
        polish: "Ona malowała obraz, gdy przyjechałem.",
        tense: "Past Continuous",
        correctForm: "She was painting a picture when I arrived.",
        rule: "Podmiot + was/were + czasownik z końcówką -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Opisuje czynność trwającą w przeszłości."
    },
    {
        polish: "Nie gotowałem obiadu wczoraj.",
        tense: "Past Continuous",
        correctForm: "I was not cooking dinner yesterday.",
        rule: "Podmiot + was/were not + czasownik z końcówką -ing.",
        type: "Przeczące - Past Continuous",
        description: "Przeczenie w czasie Past Continuous."
    },
    {
        polish: "Czy ty ćwiczyłeś wczoraj wieczorem?",
        tense: "Past Continuous",
        correctForm: "Were you exercising last night?",
        rule: "Were + podmiot + czasownik z końcówką -ing?",
        type: "Pytające - Past Continuous",
        description: "Zadawanie pytań o czynności trwające w przeszłości."
    },
     // Past Simple
     {
        polish: "Wczoraj poszłem do sklepu.",
        tense: "Past Simple",
        correctForm: "I went to the store yesterday.",
        rule: "Podmiot + czasownik w formie przeszłej.",
        type: "Twierdzące - Past Simple",
        description: "Opisuje zakończoną czynność."
    },
    {
        polish: "Nie zjadłem śniadania rano.",
        tense: "Past Simple",
        correctForm: "I did not eat breakfast in the morning.",
        rule: "Podmiot + did not + czasownik w formie podstawowej.",
        type: "Przeczące - Past Simple",
        description: "Używamy 'did not' do przeczenia."
    },
    {
        polish: "Czy ona zadzwoniła do mnie wczoraj?",
        tense: "Past Simple",
        correctForm: "Did she call me yesterday?",
        rule: "Did + podmiot + czasownik w formie podstawowej?",
        type: "Pytające - Past Simple",
        description: "Zadawanie pytań w czasie Past Simple."
    },
    {
        polish: "Biegałem po parku, gdy zaczęło padać.",
        tense: "Past Continuous",
        correctForm: "I was running in the park when it started to rain.",
        rule: "Podmiot + was/were + czasownik z końcówką -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Opisuje czynność trwającą w przeszłości."
    },
    {
        polish: "Nie oglądałem telewizji wczoraj wieczorem.",
        tense: "Past Continuous",
        correctForm: "I was not watching TV last night.",
        rule: "Podmiot + was/were not + czasownik z końcówką -ing.",
        type: "Przeczące - Past Continuous",
        description: "Przeczenie w czasie Past Continuous."
    },
    {
        polish: "Czy oni grali w piłkę nożną, gdy przyszliśmy?",
        tense: "Past Continuous",
        correctForm: "Were they playing football when we arrived?",
        rule: "Were + podmiot + czasownik z końcówką -ing?",
        type: "Pytające - Past Continuous",
        description: "Zadawanie pytań o czynności trwające w przeszłości."
    },
    {
        polish: "Wczoraj napisałem list.",
        tense: "Past Simple",
        correctForm: "I wrote a letter yesterday.",
        rule: "Podmiot + czasownik w formie przeszłej.",
        type: "Twierdzące - Past Simple",
        description: "Opisuje zakończoną czynność."
    },
    {
        polish: "Nie znalazłem moich kluczy.",
        tense: "Past Simple",
        correctForm: "I did not find my keys.",
        rule: "Podmiot + did not + czasownik w formie podstawowej.",
        type: "Przeczące - Past Simple",
        description: "Używamy 'did not' do przeczenia."
    },
    {
        polish: "Czy ty sprzątałeś pokój wczoraj?",
        tense: "Past Simple",
        correctForm: "Did you clean your room yesterday?",
        rule: "Did + podmiot + czasownik w formie podstawowej?",
        type: "Pytające - Past Simple",
        description: "Zadawanie pytań w czasie Past Simple."
    },
    {
        polish: "Oni siedzieli na ławce, gdy padał deszcz.",
        tense: "Past Continuous",
        correctForm: "They were sitting on the bench when it was raining.",
        rule: "Podmiot + was/were + czasownik z końcówką -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Opisuje czynność trwającą w przeszłości."
    },
    {
        polish: "Nie czytałem książki wczoraj.",
        tense: "Past Continuous",
        correctForm: "I was not reading a book yesterday.",
        rule: "Podmiot + was/were not + czasownik z końcówką -ing.",
        type: "Przeczące - Past Continuous",
        description: "Przeczenie w czasie Past Continuous."
    },
    {
        polish: "Czy ona czekała na mnie wczoraj?",
        tense: "Past Continuous",
        correctForm: "Was she waiting for me yesterday?",
        rule: "Was/were + podmiot + czasownik z końcówką -ing?",
        type: "Pytające - Past Continuous",
        description: "Zadawanie pytań o czynności trwające w przeszłości."
    },
    {
        polish: "Zadzwoniłem do ciebie wczoraj.",
        tense: "Past Simple",
        correctForm: "I called you yesterday.",
        rule: "Podmiot + czasownik w formie przeszłej.",
        type: "Twierdzące - Past Simple",
        description: "Opisuje zakończoną czynność."
    },
    {
        polish: "Nie kupiłem niczego w sklepie.",
        tense: "Past Simple",
        correctForm: "I did not buy anything at the store.",
        rule: "Podmiot + did not + czasownik w formie podstawowej.",
        type: "Przeczące - Past Simple",
        description: "Używamy 'did not' do przeczenia."
    },
    {
        polish: "Czy on grał na gitarze wczoraj?",
        tense: "Past Simple",
        correctForm: "Did he play the guitar yesterday?",
        rule: "Did + podmiot + czasownik w formie podstawowej?",
        type: "Pytające - Past Simple",
        description: "Zadawanie pytań w czasie Past Simple."
    },
    {
        polish: "Ona malowała przez trzy godziny.",
        tense: "Past Continuous",
        correctForm: "She was painting for three hours.",
        rule: "Podmiot + was/were + czasownik z końcówką -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Opisuje czynność trwającą w przeszłości."
    },
    {
        polish: "Nie spacerowałem wczoraj wieczorem.",
        tense: "Past Continuous",
        correctForm: "I was not walking yesterday evening.",
        rule: "Podmiot + was/were not + czasownik z końcówką -ing.",
        type: "Przeczące - Past Continuous",
        description: "Przeczenie w czasie Past Continuous."
    },
    {
        polish: "Czy oni rozmawiali o książkach?",
        tense: "Past Continuous",
        correctForm: "Were they talking about books?",
        rule: "Were + podmiot + czasownik z końcówką -ing?",
        type: "Pytające - Past Continuous",
        description: "Zadawanie pytań o czynności trwające w przeszłości."
    },
    // Kontynuuj dodawanie kolejnych zdań
    {
        polish: "Odwiedziłem moją babcię wczoraj.",
        tense: "Past Simple",
        correctForm: "I visited my grandmother yesterday.",
        rule: "Podmiot + czasownik w formie przeszłej.",
        type: "Twierdzące - Past Simple",
        description: "Opisuje zakończoną czynność."
    },
    {
        polish: "Nie widziałem jej od zeszłego tygodnia.",
        tense: "Past Simple",
        correctForm: "I did not see her since last week.",
        rule: "Podmiot + did not + czasownik w formie podstawowej.",
        type: "Przeczące - Past Simple",
        description: "Używamy 'did not' do przeczenia."
    },
    {
        polish: "Czy ty czytałeś tę książkę?",
        tense: "Past Simple",
        correctForm: "Did you read that book?",
        rule: "Did + podmiot + czasownik w formie podstawowej?",
        type: "Pytające - Past Simple",
        description: "Zadawanie pytań w czasie Past Simple."
    },
    {
        polish: "Byłem w pracy, gdy zadzwoniłeś.",
        tense: "Past Continuous",
        correctForm: "I was at work when you called.",
        rule: "Podmiot + was/were + czasownik z końcówką -ing.",
        type: "Twierdzące - Past Continuous",
        description: "Opisuje czynność trwającą w przeszłości."
    },
    {
        polish: "Nie pisałem eseju wczoraj.",
        tense: "Past Continuous",
        correctForm: "I was not writing an essay yesterday.",
        rule: "Podmiot + was/were not + czasownik z końcówką -ing.",
        type: "Przeczące - Past Continuous",
        description: "Przeczenie w czasie Past Continuous."
    },
    {
        polish: "Czy oni oglądali film wczoraj?",
        tense: "Past Continuous",
        correctForm: "Were they watching a movie yesterday?",
        rule: "Were + podmiot + czasownik z końcówką -ing?",
        type: "Pytające - Past Continuous",
        description: "Zadawanie pytań o czynności trwające w przeszłości."
    },
    {
        polish: "Jutro pójdę na zakupy.",
        tense: "Future Simple",
        correctForm: "I will go shopping tomorrow.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Opisuje czynność, która wydarzy się w przyszłości."
    },
    {
        polish: "Nie będę jadł słodyczy w przyszłym miesiącu.",
        tense: "Future Simple",
        correctForm: "I will not eat sweets next month.",
        rule: "Podmiot + will not + czasownik w formie podstawowej.",
        type: "Przeczące - Future Simple",
        description: "Używamy 'will not' do przeczenia."
    },
    {
        polish: "Czy on przyjdzie na imprezę?",
        tense: "Future Simple",
        correctForm: "Will he come to the party?",
        rule: "Will + podmiot + czasownik w formie podstawowej?",
        type: "Pytające - Future Simple",
        description: "Zadawanie pytań o przyszłe zdarzenia."
    },
    {
        polish: "W przyszłym tygodniu będę pracować nad projektem.",
        tense: "Future Continuous",
        correctForm: "I will be working on the project next week.",
        rule: "Podmiot + will be + czasownik z końcówką -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Opisuje czynność, która będzie trwać w przyszłości."
    },
    {
        polish: "Nie będę się uczyć jutro wieczorem.",
        tense: "Future Continuous",
        correctForm: "I will not be studying tomorrow evening.",
        rule: "Podmiot + will not be + czasownik z końcówką -ing.",
        type: "Przeczące - Future Continuous",
        description: "Przeczenie w czasie Future Continuous."
    },
    {
        polish: "Czy oni będą grać w piłkę nożną w sobotę?",
        tense: "Future Continuous",
        correctForm: "Will they be playing football on Saturday?",
        rule: "Will + podmiot + be + czasownik z końcówką -ing?",
        type: "Pytające - Future Continuous",
        description: "Zadawanie pytań o przyszłe czynności trwające."
    },
    {
        polish: "Za miesiąc zamieszkam w nowym mieście.",
        tense: "Future Simple",
        correctForm: "I will move to a new city next month.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Opisuje czynność, która wydarzy się w przyszłości."
    },
    {
        polish: "Nie zamierzam kupić nowego samochodu.",
        tense: "Future Simple",
        correctForm: "I will not buy a new car.",
        rule: "Podmiot + will not + czasownik w formie podstawowej.",
        type: "Przeczące - Future Simple",
        description: "Używamy 'will not' do przeczenia."
    },
    {
        polish: "Czy ty pojedziesz na wakacje w przyszłym roku?",
        tense: "Future Simple",
        correctForm: "Will you go on vacation next year?",
        rule: "Will + podmiot + czasownik w formie podstawowej?",
        type: "Pytające - Future Simple",
        description: "Zadawanie pytań o przyszłe zdarzenia."
    },
    {
        polish: "W przyszłym miesiącu będę się uczyć języka angielskiego.",
        tense: "Future Continuous",
        correctForm: "I will be learning English next month.",
        rule: "Podmiot + will be + czasownik z końcówką -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Opisuje czynność, która będzie trwać w przyszłości."
    },
    {
        polish: "Nie będę pracować w ten weekend.",
        tense: "Future Continuous",
        correctForm: "I will not be working this weekend.",
        rule: "Podmiot + will not be + czasownik z końcówką -ing.",
        type: "Przeczące - Future Continuous",
        description: "Przeczenie w czasie Future Continuous."
    },
    {
        polish: "Czy ona będzie rozmawiać z klientem w przyszłym tygodniu?",
        tense: "Future Continuous",
        correctForm: "Will she be talking to the client next week?",
        rule: "Will + podmiot + be + czasownik z końcówką -ing?",
        type: "Pytające - Future Continuous",
        description: "Zadawanie pytań o przyszłe czynności trwające."
    },
    {
        polish: "Zaraz wyjadę na wakacje.",
        tense: "Future Simple",
        correctForm: "I will leave for vacation soon.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Opisuje czynność, która wydarzy się w przyszłości."
    },
    {
        polish: "Nie zamierzam zjeść tej pizzy.",
        tense: "Future Simple",
        correctForm: "I will not eat this pizza.",
        rule: "Podmiot + will not + czasownik w formie podstawowej.",
        type: "Przeczące - Future Simple",
        description: "Używamy 'will not' do przeczenia."
    },
    {
        polish: "Czy on pomoże mi w tym projekcie?",
        tense: "Future Simple",
        correctForm: "Will he help me with this project?",
        rule: "Will + podmiot + czasownik w formie podstawowej?",
        type: "Pytające - Future Simple",
        description: "Zadawanie pytań o przyszłe zdarzenia."
    },
    {
        polish: "Będę czytać książkę w przyszły weekend.",
        tense: "Future Continuous",
        correctForm: "I will be reading a book next weekend.",
        rule: "Podmiot + will be + czasownik z końcówką -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Opisuje czynność, która będzie trwać w przyszłości."
    },
    {
        polish: "Nie będę grał w gry w przyszłym tygodniu.",
        tense: "Future Continuous",
        correctForm: "I will not be playing games next week.",
        rule: "Podmiot + will not be + czasownik z końcówką -ing.",
        type: "Przeczące - Future Continuous",
        description: "Przeczenie w czasie Future Continuous."
    },
    {
        polish: "Czy oni będą oglądać film jutro?",
        tense: "Future Continuous",
        correctForm: "Will they be watching a movie tomorrow?",
        rule: "Will + podmiot + be + czasownik z końcówką -ing?",
        type: "Pytające - Future Continuous",
        description: "Zadawanie pytań o przyszłe czynności trwające."
    },
    {
        polish: "W przyszłości będę podróżować dużo.",
        tense: "Future Simple",
        correctForm: "I will travel a lot in the future.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Opisuje czynność, która wydarzy się w przyszłości."
    },
    {
        polish: "Nie zamierzam przychodzić na tę imprezę.",
        tense: "Future Simple",
        correctForm: "I will not come to this party.",
        rule: "Podmiot + will not + czasownik w formie podstawowej.",
        type: "Przeczące - Future Simple",
        description: "Używamy 'will not' do przeczenia."
    },
    {
        polish: "Czy ty kupisz nową sukienkę?",
        tense: "Future Simple",
        correctForm: "Will you buy a new dress?",
        rule: "Will + podmiot + czasownik w formie podstawowej?",
        type: "Pytające - Future Simple",
        description: "Zadawanie pytań o przyszłe zdarzenia."
    },
    {
        polish: "W przyszłym roku będę pracować nad nowym projektem.",
        tense: "Future Continuous",
        correctForm: "I will be working on a new project next year.",
        rule: "Podmiot + will be + czasownik z końcówką -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Opisuje czynność, która będzie trwać w przyszłości."
    },
    {
        polish: "Nie będę chodzić na siłownię w ten weekend.",
        tense: "Future Continuous",
        correctForm: "I will not be going to the gym this weekend.",
        rule: "Podmiot + will not be + czasownik z końcówką -ing.",
        type: "Przeczące - Future Continuous",
        description: "Przeczenie w czasie Future Continuous."
    },
    {
        polish: "Czy ona będzie pracować zdalnie w przyszłym miesiącu?",
        tense: "Future Continuous",
        correctForm: "Will she be working remotely next month?",
        rule: "Will + podmiot + be + czasownik z końcówką -ing?",
        type: "Pytające - Future Continuous",
        description: "Zadawanie pytań o przyszłe czynności trwające."
    },
    {
        polish: "Będę uczyć się na egzamin w przyszłym miesiącu.",
        tense: "Future Simple",
        correctForm: "I will study for the exam next month.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Opisuje czynność, która wydarzy się w przyszłości."
    },
    {
        polish: "Nie zamierzam iść na zakupy jutro.",
        tense: "Future Simple",
        correctForm: "I will not go shopping tomorrow.",
        rule: "Podmiot + will not + czasownik w formie podstawowej.",
        type: "Przeczące - Future Simple",
        description: "Używamy 'will not' do przeczenia."
    },
    {
        polish: "Czy oni odwiedzą nas w weekend?",
        tense: "Future Simple",
        correctForm: "Will they visit us this weekend?",
        rule: "Will + podmiot + czasownik w formie podstawowej?",
        type: "Pytające - Future Simple",
        description: "Zadawanie pytań o przyszłe zdarzenia."
    },
    {
        polish: "Będę rozmawiać z szefem o projekcie.",
        tense: "Future Continuous",
        correctForm: "I will be talking to my boss about the project.",
        rule: "Podmiot + will be + czasownik z końcówką -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Opisuje czynność, która będzie trwać w przyszłości."
    },
    {
        polish: "Nie będę się martwić o to jutro.",
        tense: "Future Continuous",
        correctForm: "I will not be worrying about it tomorrow.",
        rule: "Podmiot + will not be + czasownik z końcówką -ing.",
        type: "Przeczące - Future Continuous",
        description: "Przeczenie w czasie Future Continuous."
    },
    {
        polish: "Czy wy będziecie trenować na siłowni jutro?",
        tense: "Future Continuous",
        correctForm: "Will you be working out at the gym tomorrow?",
        rule: "Will + podmiot + be + czasownik z końcówką -ing?",
        type: "Pytające - Future Continuous",
        description: "Zadawanie pytań o przyszłe czynności trwające."
    },
    {
        polish: "Pojutrze będę pisać raport.",
        tense: "Future Simple",
        correctForm: "I will write the report the day after tomorrow.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Opisuje czynność, która wydarzy się w przyszłości."
    },
    {
        polish: "Nie będę grać w piłkę nożną w przyszłym tygodniu.",
        tense: "Future Simple",
        correctForm: "I will not play football next week.",
        rule: "Podmiot + will not + czasownik w formie podstawowej.",
        type: "Przeczące - Future Simple",
        description: "Używamy 'will not' do przeczenia."
    },
    {
        polish: "Czy ona kupi nowego laptopa?",
        tense: "Future Simple",
        correctForm: "Will she buy a new laptop?",
        rule: "Will + podmiot + czasownik w formie podstawowej?",
        type: "Pytające - Future Simple",
        description: "Zadawanie pytań o przyszłe zdarzenia."
    },
    {
        polish: "W przyszłym miesiącu będę pracować nad nowym projektem.",
        tense: "Future Continuous",
        correctForm: "I will be working on a new project next month.",
        rule: "Podmiot + will be + czasownik z końcówką -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Opisuje czynność, która będzie trwać w przyszłości."
    },
    {
        polish: "Nie będę gotować w ten weekend.",
        tense: "Future Continuous",
        correctForm: "I will not be cooking this weekend.",
        rule: "Podmiot + will not be + czasownik z końcówką -ing.",
        type: "Przeczące - Future Continuous",
        description: "Przeczenie w czasie Future Continuous."
    },
    {
        polish: "Czy oni będą oglądać nowy film?",
        tense: "Future Continuous",
        correctForm: "Will they be watching the new movie?",
        rule: "Will + podmiot + be + czasownik z końcówką -ing?",
        type: "Pytające - Future Continuous",
        description: "Zadawanie pytań o przyszłe czynności trwające."
    },
    {
        polish: "W przyszłym roku będę jeździć na wakacje co miesiąc.",
        tense: "Future Simple",
        correctForm: "I will go on vacation every month next year.",
        rule: "Podmiot + will + czasownik w formie podstawowej.",
        type: "Twierdzące - Future Simple",
        description: "Opisuje czynność, która wydarzy się w przyszłości."
    },
    {
        polish: "Nie zamierzam dzwonić do niej jutro.",
        tense: "Future Simple",
        correctForm: "I will not call her tomorrow.",
        rule: "Podmiot + will not + czasownik w formie podstawowej.",
        type: "Przeczące - Future Simple",
        description: "Używamy 'will not' do przeczenia."
    },
    {
        polish: "Czy ty przyjdziesz na moje urodziny?",
        tense: "Future Simple",
        correctForm: "Will you come to my birthday?",
        rule: "Will + podmiot + czasownik w formie podstawowej?",
        type: "Pytające - Future Simple",
        description: "Zadawanie pytań o przyszłe zdarzenia."
    },
    {
        polish: "Zaraz będę jeść kolację.",
        tense: "Future Continuous",
        correctForm: "I will be having dinner soon.",
        rule: "Podmiot + will be + czasownik z końcówką -ing.",
        type: "Twierdzące - Future Continuous",
        description: "Opisuje czynność, która będzie trwać w przyszłości."
    },
    {
        polish: "Nie będę uczestniczyć w spotkaniu jutro.",
        tense: "Future Continuous",
        correctForm: "I will not be attending the meeting tomorrow.",
        rule: "Podmiot + will not be + czasownik z końcówką -ing.",
        type: "Przeczące - Future Continuous",
        description: "Przeczenie w czasie Future Continuous."
    },
    {
        polish: "Czy ona będzie uczyć się na egzamin?",
        tense: "Future Continuous",
        correctForm: "Will she be studying for the exam?",
        rule: "Will + podmiot + be + czasownik z końcówką -ing?",
        type: "Pytające - Future Continuous",
        description: "Zadawanie pytań o przyszłe czynności trwające."
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
    document.getElementById("type-info").innerText = `Typ: ${currentSentence.type} / ${currentSentence.description} `;
    document.getElementById("user-input").value = '';
    document.getElementById("result").innerText = '';
    document.getElementById("building-rule").innerText = '';

    
    const options = generateOptions(currentSentence.correctForm);
    const optionsContainer = document.createElement("div");
    optionsContainer.id = "options-container";
    
    options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
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
    const userInput = document.getElementById("user-input").value.trim();
    
    if (!hasAttempted) {
        if (userInput.toLowerCase() === currentSentence.correctForm.toLowerCase()) {
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
        if (selectedOption.toLowerCase() === currentSentence.correctForm.toLowerCase()) {
            score++;
            document.getElementById("score").innerText = score;
            document.getElementById("result").innerText = `Brawo! Poprawnie.`;
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


// Initialization
displayNewSentence();

