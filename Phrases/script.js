const phrases = [
    { phrase: "Let's touch base.", translation: "Skontaktujmy się." },
    { phrase: "Can we circle back?", translation: "Czy możemy wrócić do tego później?" },
    { phrase: "Think outside the box.", translation: "Myśl nieszablonowo." },
    { phrase: "Let's take this offline.", translation: "Omówmy to poza spotkaniem." },
    { phrase: "I’ll ping you.", translation: "Skontaktuję się z Tobą." },
    { phrase: "Let's drill down.", translation: "Zagłębmy się w szczegóły." },
    { phrase: "We need to align on this.", translation: "Musimy się w tym zgodzić." },
    { phrase: "Can you give me a heads up?", translation: "Czy możesz mnie wcześniej poinformować?" },
    { phrase: "Let's loop in the team.", translation: "Włączmy w to zespół." },
    { phrase: "I need to get back to you on that.", translation: "Muszę wrócić do Ciebie w tej sprawie." },
    { phrase: "At the end of the day.", translation: "Na koniec dnia." },
    { phrase: "Let's take a step back.", translation: "Zróbmy krok w tył." },
    { phrase: "Can we take this discussion offline?", translation: "Czy możemy omówić to poza tym spotkaniem?" },
    { phrase: "We need to touch on this topic.", translation: "Musimy poruszyć ten temat." },
    { phrase: "Let's get the ball rolling.", translation: "Zacznijmy działać." },
    { phrase: "It's a no-brainer.", translation: "To nie wymaga zastanowienia." },
    { phrase: "Let's put our heads together.", translation: "Połączmy siły." },
    { phrase: "We should leverage our resources.", translation: "Powinniśmy wykorzystać nasze zasoby." },
    { phrase: "Can you give me the lowdown?", translation: "Czy możesz mi to wyjaśnić?" },
    { phrase: "Let's prioritize this.", translation: "Postawmy to na pierwszym miejscu." },
    { phrase: "We need to get on the same page.", translation: "Musimy być zgodni." },
    { phrase: "Can you give me a ballpark figure?", translation: "Czy możesz podać przybliżoną wartość?" },
    { phrase: "Let's run it up the flagpole.", translation: "Zgłośmy to." },
    { phrase: "We need to drill down into the details.", translation: "Musimy zagłębić się w szczegóły." },
    { phrase: "It's time to pivot.", translation: "Czas na zmianę kierunku." },
    { phrase: "Let's take a deep dive.", translation: "Zróbmy dokładną analizę." },
    { phrase: "We need to think long-term.", translation: "Musimy myśleć długoterminowo." },
    { phrase: "Let's keep the lines of communication open.", translation: "Utrzymujmy otwartą komunikację." },
    { phrase: "Can you touch base with them?", translation: "Czy możesz się z nimi skontaktować?" },
    { phrase: "We should put this on the back burner.", translation: "Powinniśmy odłożyć to na później." },
    { phrase: "Let's not reinvent the wheel.", translation: "Nie wymyślajmy na nowo koła." },
    { phrase: "We're on the same wavelength.", translation: "Mamy wspólne myślenie." },
    { phrase: "We need to manage expectations.", translation: "Musimy zarządzać oczekiwaniami." },
    { phrase: "It's a win-win situation.", translation: "To sytuacja korzystna dla obu stron." },
    { phrase: "Let's keep it under wraps.", translation: "Trzymajmy to w tajemnicy." },
    { phrase: "Can you take the lead on this?", translation: "Czy możesz to prowadzić?" },
    { phrase: "Let's take it up a notch.", translation: "Podnieśmy poprzeczkę." },
    { phrase: "We need to move the needle.", translation: "Musimy wprowadzić zmiany." },
    { phrase: "It's all hands on deck.", translation: "Wszyscy muszą być zaangażowani." },
    { phrase: "Let's bring this to the table.", translation: "Przedstawmy to na stole." },
    { phrase: "We need to streamline our processes.", translation: "Musimy uprościć nasze procesy." },
    { phrase: "It's a game changer.", translation: "To zmienia zasady gry." },
    { phrase: "Let's not get bogged down.", translation: "Nie dajmy się wciągnąć w szczegóły." },
    { phrase: "We're in the same boat.", translation: "Jesteśmy w tej samej sytuacji." },
    { phrase: "Can you give me an update?", translation: "Czy możesz dać mi aktualizację?" },
    { phrase: "Let's take a proactive approach.", translation: "Podejdźmy do tego proaktywnie." },
    { phrase: "We need to hit the ground running.", translation: "Musimy zacząć od razu." },
    { phrase: "Let's get our ducks in a row.", translation: "Zorganizujmy się." },
    { phrase: "It's not rocket science.", translation: "To nie jest skomplikowane." },
    { phrase: "Can we get the ball rolling?", translation: "Czy możemy zacząć?" },
    { phrase: "Let's move forward.", translation: "Przejdźmy do przodu." },
    { phrase: "We need to circle back to that.", translation: "Musimy do tego wrócić." },
    { phrase: "Can you think about it?", translation: "Czy możesz o tym pomyśleć?" },
    { phrase: "Let's get this show on the road.", translation: "Rozpocznijmy to." },
    { phrase: "We should take a step back and reassess.", translation: "Powinniśmy cofnąć się i ocenić sytuację." },
    { phrase: "It's a paradigm shift.", translation: "To zmiana paradygmatu." },
    { phrase: "Let's make sure we're aligned.", translation: "Upewnijmy się, że jesteśmy zgodni." },
    { phrase: "Let's touch base.", translation: "Skontaktujmy się." },
    { phrase: "Can we circle back?", translation: "Czy możemy wrócić do tego później?" },
    { phrase: "Think outside the box.", translation: "Myśl nieszablonowo." },
    { phrase: "Let's take this offline.", translation: "Omówmy to poza spotkaniem." },
    { phrase: "I’ll ping you.", translation: "Skontaktuję się z Tobą." },
    { phrase: "Let's drill down.", translation: "Zagłębmy się w szczegóły." },
    { phrase: "We need to align on this.", translation: "Musimy się w tym zgodzić." },
    { phrase: "Can you give me a heads up?", translation: "Czy możesz mnie wcześniej poinformować?" },
    { phrase: "Let's loop in the team.", translation: "Włączmy w to zespół." },
    { phrase: "I need to get back to you on that.", translation: "Muszę wrócić do Ciebie w tej sprawie." },
    { phrase: "At the end of the day.", translation: "Na koniec dnia." },
    { phrase: "Let's take a step back.", translation: "Zróbmy krok w tył." },
    { phrase: "Can we take this discussion offline?", translation: "Czy możemy omówić to poza tym spotkaniem?" },
    { phrase: "We need to touch on this topic.", translation: "Musimy poruszyć ten temat." },
    { phrase: "Let's get the ball rolling.", translation: "Zacznijmy działać." },
    { phrase: "It's a no-brainer.", translation: "To nie wymaga zastanowienia." },
    { phrase: "Let's put our heads together.", translation: "Połączmy siły." },
    { phrase: "We should leverage our resources.", translation: "Powinniśmy wykorzystać nasze zasoby." },
    { phrase: "Can you give me the lowdown?", translation: "Czy możesz mi to wyjaśnić?" },
    { phrase: "Let's prioritize this.", translation: "Postawmy to na pierwszym miejscu." },
    { phrase: "We need to get on the same page.", translation: "Musimy być zgodni." },
    { phrase: "Can you give me a ballpark figure?", translation: "Czy możesz podać przybliżoną wartość?" },
    { phrase: "Let's run it up the flagpole.", translation: "Zgłośmy to." },
    { phrase: "We need to drill down into the details.", translation: "Musimy zagłębić się w szczegóły." },
    { phrase: "It's time to pivot.", translation: "Czas na zmianę kierunku." },
    { phrase: "Let's take a deep dive.", translation: "Zróbmy dokładną analizę." },
    { phrase: "We need to think long-term.", translation: "Musimy myśleć długoterminowo." },
    { phrase: "Let's keep the lines of communication open.", translation: "Utrzymujmy otwartą komunikację." },
    { phrase: "Can you touch base with them?", translation: "Czy możesz się z nimi skontaktować?" },
    { phrase: "We should put this on the back burner.", translation: "Powinniśmy odłożyć to na później." },
    { phrase: "Let's not reinvent the wheel.", translation: "Nie wymyślajmy na nowo koła." },
    { phrase: "We're on the same wavelength.", translation: "Mamy wspólne myślenie." },
    { phrase: "We need to manage expectations.", translation: "Musimy zarządzać oczekiwaniami." },
    { phrase: "It's a win-win situation.", translation: "To sytuacja korzystna dla obu stron." },
    { phrase: "Let's keep it under wraps.", translation: "Trzymajmy to w tajemnicy." },
    { phrase: "Can you take the lead on this?", translation: "Czy możesz to prowadzić?" },
    { phrase: "Let's take it up a notch.", translation: "Podnieśmy poprzeczkę." },
    { phrase: "We need to move the needle.", translation: "Musimy wprowadzić zmiany." },
    { phrase: "It's all hands on deck.", translation: "Wszyscy muszą być zaangażowani." },
    { phrase: "Let's bring this to the table.", translation: "Przedstawmy to na stole." },
    { phrase: "We need to streamline our processes.", translation: "Musimy uprościć nasze procesy." },
    { phrase: "It's a game changer.", translation: "To zmienia zasady gry." },
    { phrase: "Let's not get bogged down.", translation: "Nie dajmy się wciągnąć w szczegóły." },
    { phrase: "We're in the same boat.", translation: "Jesteśmy w tej samej sytuacji." },
    { phrase: "Can you give me an update?", translation: "Czy możesz dać mi aktualizację?" },
    { phrase: "Let's take a proactive approach.", translation: "Podejdźmy do tego proaktywnie." },
    { phrase: "We need to hit the ground running.", translation: "Musimy zacząć od razu." },
    { phrase: "Let's get our ducks in a row.", translation: "Zorganizujmy się." },
    { phrase: "It's not rocket science.", translation: "To nie jest skomplikowane." },
    { phrase: "Can we get the ball rolling?", translation: "Czy możemy zacząć?" },
    { phrase: "Let's move forward.", translation: "Przejdźmy do przodu." },
    { phrase: "We need to circle back to that.", translation: "Musimy do tego wrócić." },
    { phrase: "Can you think about it?", translation: "Czy możesz o tym pomyśleć?" },
    { phrase: "Let's get this show on the road.", translation: "Rozpocznijmy to." },
    { phrase: "We should take a step back and reassess.", translation: "Powinniśmy cofnąć się i ocenić sytuację." },
    { phrase: "It's a paradigm shift.", translation: "To zmiana paradygmatu." },
    { phrase: "Let's make sure we're aligned.", translation: "Upewnijmy się, że jesteśmy zgodni." },
    { phrase: "Let's think strategically.", translation: "Myślmy strategicznie." },
    { phrase: "Can we revisit that?", translation: "Czy możemy do tego wrócić?" },
    { phrase: "We need to get the right people on board.", translation: "Musimy zaangażować odpowiednich ludzi." },
    { phrase: "It's a matter of priority.", translation: "To kwestia priorytetu." },
    { phrase: "Let's take it offline for now.", translation: "Zostawmy to na później." },
    { phrase: "We should have a contingency plan.", translation: "Powinniśmy mieć plan awaryjny." },
    { phrase: "Let's circle back after the meeting.", translation: "Wracajmy do tego po spotkaniu." },
    { phrase: "We need to enhance our collaboration.", translation: "Musimy poprawić naszą współpracę." },
    { phrase: "Can you put that on your radar?", translation: "Czy możesz to mieć na uwadze?" },
    { phrase: "It's time to pivot our strategy.", translation: "Czas na zmianę strategii." },
    { phrase: "We need to find a balance.", translation: "Musimy znaleźć równowagę." },
    { phrase: "Let's set the groundwork.", translation: "Ustalmy podstawy." },
    { phrase: "We should keep an open mind.", translation: "Powinniśmy mieć otwarty umysł." },
    { phrase: "Let's leverage our strengths.", translation: "Wykorzystajmy nasze mocne strony." },
    { phrase: "It's important to foster innovation.", translation: "Ważne jest wspieranie innowacji." },
    { phrase: "We need to clarify our objectives.", translation: "Musimy wyjaśnić nasze cele." },
    { phrase: "Let's streamline our efforts.", translation: "Uprośćmy nasze wysiłki." },
    { phrase: "We should align our goals.", translation: "Powinniśmy zharmonizować nasze cele." },
    { phrase: "Can we collaborate on this?", translation: "Czy możemy współpracować w tej kwestii?" },
    { phrase: "It's essential to build relationships.", translation: "Kluczowe jest budowanie relacji." },
    { phrase: "Let's focus on the big picture.", translation: "Skupmy się na ogólnym obrazie." },
    { phrase: "We need to be proactive, not reactive.", translation: "Musimy być proaktywni, a nie reaktywni." },
    { phrase: "Let's drive this initiative forward.", translation: "Wprowadźmy tę inicjatywę do przodu." },
    { phrase: "We should benchmark against industry standards.", translation: "Powinniśmy porównywać się z normami branżowymi." },
    { phrase: "It's critical to stay agile.", translation: "Krytyczne jest, aby pozostać elastycznym." },
    { phrase: "Let's map out a plan.", translation: "Zróbmy plan działania." },
    { phrase: "We need to foster a culture of feedback.", translation: "Musimy wspierać kulturę informacji zwrotnej." },
    { phrase: "It's time to recalibrate our approach.", translation: "Czas na dostosowanie naszego podejścia." },
    { phrase: "Let's engage in constructive dialogue.", translation: "Angażujmy się w konstruktywny dialog." },
    { phrase: "We need to align our strategies.", translation: "Musimy zharmonizować nasze strategie." },
    { phrase: "Let's emphasize our core values.", translation: "Podkreślmy nasze wartości podstawowe." },
    { phrase: "We should capitalize on opportunities.", translation: "Powinniśmy wykorzystać nadarzające się okazje." },
    { phrase: "It's important to celebrate small wins.", translation: "Ważne jest, aby świętować małe osiągnięcia." },
    { phrase: "Let's work towards a common goal.", translation: "Pracujmy w kierunku wspólnego celu." },
    { phrase: "Let's put this on the agenda.", translation: "Wprowadźmy to do porządku obrad." },
    { phrase: "We need to shift gears.", translation: "Musimy zmienić tempo." },
    { phrase: "That's a different ball game.", translation: "To zupełnie inna sprawa." },
    { phrase: "Let's keep our options open.", translation: "Zachowajmy otwarte opcje." },
    { phrase: "We should follow up on this.", translation: "Powinniśmy to śledzić." },
    { phrase: "Let's not lose sight of the goal.", translation: "Nie traćmy z oczu celu." },
    { phrase: "It's time to regroup.", translation: "Czas na zebranie sił." },
    { phrase: "Let's connect the dots.", translation: "Połączmy fakty." },
    { phrase: "We need to be on the lookout.", translation: "Musimy być czujni." },
    { phrase: "It's important to stay focused.", translation: "Ważne jest, aby pozostać skoncentrowanym." },
    { phrase: "We should take a holistic approach.", translation: "Powinniśmy podejść do tego całościowo." },
    { phrase: "Can we align our timelines?", translation: "Czy możemy dostosować nasze harmonogramy?" },
    { phrase: "Let's break it down into manageable tasks.", translation: "Podzielmy to na mniejsze zadania." },
    { phrase: "We need to step up our game.", translation: "Musimy poprawić nasze wyniki." },
    { phrase: "Let's add some value.", translation: "Dodajmy wartość." },
    { phrase: "We should follow best practices.", translation: "Powinniśmy stosować najlepsze praktyki." },
    { phrase: "Let's get our priorities straight.", translation: "Ustalmy nasze priorytety." },
    { phrase: "It's time to scale up.", translation: "Czas na rozwój." },
    { phrase: "Let's sync our calendars.", translation: "Zsynchronizujmy nasze kalendarze." },
    { phrase: "We need to push back on this.", translation: "Musimy się temu przeciwstawić." },
    { phrase: "Let's set the record straight.", translation: "Wyjaśnijmy sprawę." },
    { phrase: "We should aim for synergy.", translation: "Powinniśmy dążyć do synergii." },
    { phrase: "It's crucial to stay competitive.", translation: "Kluczowe jest, aby pozostać konkurencyjnym." },
    { phrase: "Let's revisit our strategy.", translation: "Przyjrzyjmy się naszej strategii." },
    { phrase: "We need to clarify roles and responsibilities.", translation: "Musimy wyjaśnić role i odpowiedzialności." },
    { phrase: "Let's focus on deliverables.", translation: "Skupmy się na rezultatach." },
    { phrase: "We should brainstorm some ideas.", translation: "Powinniśmy przeprowadzić burzę mózgów." },
    { phrase: "Let's take a holistic view.", translation: "Podejdźmy do tego całościowo." },
    { phrase: "We need to maximize efficiency.", translation: "Musimy maksymalizować efektywność." },
    { phrase: "Let's put together a proposal.", translation: "Przygotujmy propozycję." },
    { phrase: "We need to gather insights.", translation: "Musimy zebrać informacje." },
    { phrase: "Let's not rush this process.", translation: "Nie przyspieszajmy tego procesu." },
    { phrase: "We should leverage technology.", translation: "Powinniśmy wykorzystać technologię." },
    { phrase: "Let's establish some KPIs.", translation: "Ustalmy kilka wskaźników efektywności." },
    { phrase: "We need to validate our assumptions.", translation: "Musimy potwierdzić nasze założenia." },
    { phrase: "Let's set a timeline.", translation: "Ustalmy harmonogram." },
    { phrase: "We should evaluate the risks.", translation: "Powinniśmy ocenić ryzyko." },
    { phrase: "It's important to stay adaptable.", translation: "Ważne jest, aby pozostać elastycznym." },
    { phrase: "Let's build a strong foundation.", translation: "Zbudujmy solidne podstawy." },
    { phrase: "We need to communicate effectively.", translation: "Musimy efektywnie się komunikować." },
    { phrase: "Let's create a roadmap.", translation: "Stwórzmy plan działania." },
    { phrase: "We should share best practices.", translation: "Powinniśmy dzielić się najlepszymi praktykami." },
    { phrase: "Let's keep the momentum going.", translation: "Utrzymajmy pęd." },
    { phrase: "We need to get buy-in from stakeholders.", translation: "Musimy uzyskać poparcie interesariuszy." },
    { phrase: "It's time to streamline communication.", translation: "Czas na uproszczenie komunikacji." },
    { phrase: "Let's identify our target audience.", translation: "Zidentyfikujmy naszą grupę docelową." },
    { phrase: "We should build on our strengths.", translation: "Powinniśmy budować na naszych mocnych stronach." },
    { phrase: "Let's take a proactive stance.", translation: "Podejdźmy do tego proaktywnie." },
    { phrase: "We need to gather feedback.", translation: "Musimy zebrać informacje zwrotne." },
    { phrase: "Let's focus on continuous improvement.", translation: "Skupmy się na ciągłym doskonaleniu." },
    { phrase: "We should aim for excellence.", translation: "Powinniśmy dążyć do doskonałości." },
    { phrase: "Let's leverage our network.", translation: "Wykorzystajmy naszą sieć kontaktów." },
    { phrase: "We need to stay ahead of the curve.", translation: "Musimy wyprzedzać wydarzenia." },
    { phrase: "Let's create a collaborative environment.", translation: "Stwórzmy środowisko współpracy." },
    { phrase: "We should prioritize customer satisfaction.", translation: "Powinniśmy priorytetowo traktować satysfakcję klienta." },
    { phrase: "Let's conduct a SWOT analysis.", translation: "Przeprowadźmy analizę SWOT." },
    { phrase: "We need to align our vision.", translation: "Musimy zharmonizować naszą wizję." },
    { phrase: "Let's evaluate our progress.", translation: "Oceńmy nasze postępy." },
    { phrase: "We should focus on core competencies.", translation: "Powinniśmy skupić się na kompetencjach kluczowych." },
    { phrase: "Let's build trust within the team.", translation: "Zbudujmy zaufanie w zespole." },
    { phrase: "We need to foster creativity.", translation: "Musimy wspierać kreatywność." },
    { phrase: "Let's capitalize on our advantages.", translation: "Wykorzystajmy nasze zalety." },
    { phrase: "We should share our vision.", translation: "Powinniśmy podzielić się naszą wizją." },
    { phrase: "Let's make data-driven decisions.", translation: "Podejmujmy decyzje oparte na danych." },
    { phrase: "We need to address concerns promptly.", translation: "Musimy szybko zająć się obawami." },
    { phrase: "Let's create a culture of accountability.", translation: "Stwórzmy kulturę odpowiedzialności." },
    { phrase: "We should set achievable goals.", translation: "Powinniśmy ustalać osiągalne cele." },
    { phrase: "Let's establish a feedback loop.", translation: "Utwórzmy pętlę informacji zwrotnej." },
    { phrase: "We need to engage with our audience.", translation: "Musimy angażować naszą publiczność." },
    { phrase: "Let's align our messaging.", translation: "Zharmonizujmy nasze komunikaty." },
    { phrase: "We should monitor our performance metrics.", translation: "Powinniśmy monitorować nasze wskaźniki wydajności." },
    { phrase: "Let's ensure compliance with regulations.", translation: "Upewnijmy się, że przestrzegamy przepisów." },
    { phrase: "We need to celebrate our achievements.", translation: "Musimy świętować nasze osiągnięcia." },
    { phrase: "Let's invest in employee development.", translation: "Zainwestujmy w rozwój pracowników." },
    { phrase: "We should enhance our brand presence.", translation: "Powinniśmy zwiększyć naszą obecność marki." },
    { phrase: "Let's address any roadblocks.", translation: "Rozwiążmy wszelkie przeszkody." },
    { phrase: "We need to cultivate relationships.", translation: "Musimy pielęgnować relacje." },
    { phrase: "Let's establish clear communication channels.", translation: "Ustalmy jasne kanały komunikacji." },
    { phrase: "We should focus on long-term sustainability.", translation: "Powinniśmy skupić się na długoterminowej zrównoważoności." },
    { phrase: "Let's encourage innovation.", translation: "Zachęcajmy do innowacji." },
    { phrase: "We need to remain agile and flexible.", translation: "Musimy pozostać elastyczni." },
    { phrase: "Let's streamline our workflow.", translation: "Uprośćmy nasz przepływ pracy." },
    { phrase: "We should embrace change.", translation: "Powinniśmy przyjąć zmiany." },
    { phrase: "Let's keep our eye on the prize.", translation: "Skupmy się na nagrodzie." },
    { phrase: "Let's brainstorm solutions.", translation: "Przeprowadźmy burzę mózgów, aby znaleźć rozwiązania." },
    { phrase: "We need to solidify our strategy.", translation: "Musimy umocnić naszą strategię." },
    { phrase: "Let's clarify our objectives.", translation: "Ustalmy nasze cele." },
    { phrase: "We should benchmark our performance.", translation: "Powinniśmy ocenić naszą wydajność w stosunku do standardów." },
    { phrase: "Let's foster collaboration.", translation: "Zachęćmy do współpracy." },
    { phrase: "We need to drive results.", translation: "Musimy dążyć do rezultatów." },
    { phrase: "Let's outline our key initiatives.", translation: "Sporządźmy listę kluczowych inicjatyw." },
    { phrase: "We should prioritize quality.", translation: "Powinniśmy stawiać na jakość." },
    { phrase: "Let's gather actionable insights.", translation: "Zbierzmy praktyczne spostrzeżenia." },
    { phrase: "We need to stay aligned with our mission.", translation: "Musimy pozostać zgodni z naszą misją." },
    { phrase: "Let's invest in training programs.", translation: "Zainwestujmy w programy szkoleniowe." },
    { phrase: "We should develop a contingency plan.", translation: "Powinniśmy opracować plan awaryjny." },
    { phrase: "Let's maximize our reach.", translation: "Maksymalizujmy nasz zasięg." },
    { phrase: "We need to build strong partnerships.", translation: "Musimy budować silne partnerstwa." },
    { phrase: "Let's focus on customer engagement.", translation: "Skupmy się na zaangażowaniu klientów." },
    { phrase: "We should conduct market research.", translation: "Powinniśmy przeprowadzić badania rynku." },
    { phrase: "Let's streamline our decision-making process.", translation: "Uprośćmy proces podejmowania decyzji." },
    { phrase: "We need to reduce redundancies.", translation: "Musimy zredukować zbędne działania." },
    { phrase: "Let's enhance our service offerings.", translation: "Zwiększmy nasze usługi." },
    { phrase: "We should tailor our approach.", translation: "Powinniśmy dostosować nasze podejście." },
    { phrase: "Let's create a positive work environment.", translation: "Stwórzmy pozytywne środowisko pracy." },
    { phrase: "We need to advocate for our clients.", translation: "Musimy działać na rzecz naszych klientów." },
    { phrase: "Let's identify key stakeholders.", translation: "Zidentyfikujmy kluczowych interesariuszy." },
    { phrase: "We should focus on return on investment.", translation: "Powinniśmy skupić się na zwrocie z inwestycji." },
    { phrase: "Let's break down the barriers.", translation: "Złamańmy bariery." },
    { phrase: "We need to identify growth opportunities.", translation: "Musimy zidentyfikować możliwości rozwoju." },
    { phrase: "Let's develop a strategic plan.", translation: "Opracujmy plan strategiczny." },
    { phrase: "We should engage in active listening.", translation: "Powinniśmy praktykować aktywne słuchanie." },
    { phrase: "Let's build a culture of innovation.", translation: "Stwórzmy kulturę innowacji." },
    { phrase: "We need to clarify our brand message.", translation: "Musimy wyjaśnić nasze przesłanie marki." },
    { phrase: "Let's encourage team spirit.", translation: "Zachęcajmy do ducha zespołu." },
    { phrase: "We should be proactive in our approach.", translation: "Powinniśmy działać proaktywnie." },
    { phrase: "Let's gather feedback from the team.", translation: "Zbierzmy opinie od zespołu." },
    { phrase: "We need to leverage our strengths.", translation: "Musimy wykorzystać nasze mocne strony." },
    { phrase: "Let's address any gaps in our strategy.", translation: "Zajmijmy się lukami w naszej strategii." },
    { phrase: "We should focus on operational efficiency.", translation: "Powinniśmy skupić się na efektywności operacyjnej." },
    { phrase: "Let's communicate our vision clearly.", translation: "Jasno przedstawmy naszą wizję." },
    { phrase: "We need to stay on top of industry trends.", translation: "Musimy być na bieżąco z trendami w branży." },
    { phrase: "Let's identify potential risks.", translation: "Zidentyfikujmy potencjalne ryzyka." },
    { phrase: "We should ensure alignment across departments.", translation: "Powinniśmy zapewnić zgodność między działami." },
    { phrase: "Let's strengthen our online presence.", translation: "Wzmocnijmy naszą obecność w Internecie." },
    { phrase: "We need to create a sense of urgency.", translation: "Musimy stworzyć poczucie pilności." },
    { phrase: "Let's invest in customer relationships.", translation: "Zainwestujmy w relacje z klientami." },
    { phrase: "We should track our progress regularly.", translation: "Powinniśmy regularnie śledzić nasze postępy." },
    { phrase: "Let's focus on data integrity.", translation: "Skupmy się na integralności danych." },
    { phrase: "We need to foster a culture of accountability.", translation: "Musimy wspierać kulturę odpowiedzialności." },
    { phrase: "Let's work collaboratively.", translation: "Pracujmy razem." },
    { phrase: "We should celebrate our milestones.", translation: "Powinniśmy świętować nasze osiągnięcia." },
    { phrase: "Let's create a customer-centric approach.", translation: "Stwórzmy podejście skoncentrowane na kliencie." },
    { phrase: "We need to be transparent in our processes.", translation: "Musimy być przejrzysi w naszych procesach." },
    { phrase: "Let's prioritize our initiatives.", translation: "Ustalmy priorytety naszych inicjatyw." },
    { phrase: "We should facilitate knowledge sharing.", translation: "Powinniśmy ułatwić dzielenie się wiedzą." },
    { phrase: "Let's align our resources effectively.", translation: "Skutecznie zharmonizujmy nasze zasoby." },
    { phrase: "We need to ensure stakeholder engagement.", translation: "Musimy zapewnić zaangażowanie interesariuszy." },
    { phrase: "Let's streamline our operations.", translation: "Uprośćmy nasze operacje." },
    { phrase: "We should set clear expectations.", translation: "Powinniśmy ustalić jasne oczekiwania." },
    { phrase: "Let's embrace new technologies.", translation: "Przyjmijmy nowe technologie." },
    { phrase: "We need to enhance our customer experience.", translation: "Musimy poprawić doświadczenia naszych klientów." },
    { phrase: "Let's conduct a gap analysis.", translation: "Przeprowadźmy analizę luk." },
    { phrase: "We should focus on team development.", translation: "Powinniśmy skupić się na rozwoju zespołu." },
    { phrase: "Let's evaluate alternative solutions.", translation: "Oceńmy alternatywne rozwiązania." },
    { phrase: "We need to create a feedback culture.", translation: "Musimy stworzyć kulturę informacji zwrotnej." },
    { phrase: "Let's promote work-life balance.", translation: "Zachęcajmy do równowagi między pracą a życiem prywatnym." },
    { phrase: "We should clarify our target market.", translation: "Powinniśmy wyjaśnić nasz rynek docelowy." },
    { phrase: "Let's explore new markets.", translation: "Badajmy nowe rynki." },
    { phrase: "We need to maintain open communication.", translation: "Musimy utrzymywać otwartą komunikację." },
    { phrase: "Let's refine our messaging.", translation: "Udoskonalmy nasze komunikaty." },
    { phrase: "We should establish performance benchmarks.", translation: "Powinniśmy ustalić wskaźniki wydajności." },
    { phrase: "Let's focus on user experience.", translation: "Skupmy się na doświadczeniu użytkownika." },
    { phrase: "We need to identify our unique selling proposition.", translation: "Musimy zidentyfikować naszą unikalną propozycję sprzedaży." },
    { phrase: "Let's create a strategic alliance.", translation: "Stwórzmy strategiczny sojusz." },
    { phrase: "We should implement best practices.", translation: "Powinniśmy wdrażać najlepsze praktyki." },
    { phrase: "Let's encourage professional development.", translation: "Zachęcajmy do rozwoju zawodowego." },
    { phrase: "We need to monitor industry changes.", translation: "Musimy śledzić zmiany w branży." },
    { phrase: "Let's address potential challenges.", translation: "Zajmijmy się potencjalnymi wyzwaniami." },
    { phrase: "We should focus on sustainability initiatives.", translation: "Powinniśmy skupić się na inicjatywach zrównoważonego rozwoju." },
    { phrase: "Let's prioritize our action items.", translation: "Ustalmy priorytety naszych zadań." },
    { phrase: "We need to increase our visibility.", translation: "Musimy zwiększyć naszą widoczność." },
    { phrase: "Let's clarify our target objectives.", translation: "Wyjaśnijmy nasze cele." },
    { phrase: "We should facilitate cross-functional collaboration.", translation: "Powinniśmy wspierać współpracę między działami." },
    { phrase: "Let's explore innovative solutions.", translation: "Badajmy innowacyjne rozwiązania." },
    { phrase: "We need to enhance our brand recognition.", translation: "Musimy zwiększyć rozpoznawalność naszej marki." },
    { phrase: "Let's streamline the approval process.", translation: "Uprośćmy proces zatwierdzania." },
    { phrase: "We should analyze our competition.", translation: "Powinniśmy przeanalizować naszą konkurencję." },
    { phrase: "Let's create an implementation plan.", translation: "Opracujmy plan wdrożenia." },
    { phrase: "We need to ensure quality control.", translation: "Musimy zapewnić kontrolę jakości." },
    { phrase: "Let's cultivate a diverse workplace.", translation: "Stwórzmy różnorodne środowisko pracy." },
    { phrase: "We should promote our key values.", translation: "Powinniśmy promować nasze kluczowe wartości." },
    { phrase: "Let's utilize our resources efficiently.", translation: "Wykorzystajmy nasze zasoby efektywnie." },
    { phrase: "We need to assess our current capabilities.", translation: "Musimy ocenić nasze obecne możliwości." },
    { phrase: "Let's develop a comprehensive strategy.", translation: "Opracujmy kompleksową strategię." },
    { phrase: "We should communicate our goals effectively.", translation: "Powinniśmy skutecznie komunikować nasze cele." },
    { phrase: "Let's build a strong brand identity.", translation: "Zbudujmy silną tożsamość marki." },
    { phrase: "We need to identify performance gaps.", translation: "Musimy zidentyfikować luki w wydajności." },
    { phrase: "Let's implement feedback mechanisms.", translation: "Wdrożmy mechanizmy informacji zwrotnej." },
    { phrase: "We should conduct regular reviews.", translation: "Powinniśmy przeprowadzać regularne przeglądy." },
    { phrase: "Let's encourage open dialogue.", translation: "Zachęcajmy do otwartego dialogu." },
    { phrase: "We need to stay committed to our vision.", translation: "Musimy pozostać wierni naszej wizji." },
    { phrase: "Let's assess our marketing strategy.", translation: "Oceńmy naszą strategię marketingową." },
    { phrase: "We should invest in research and development.", translation: "Powinniśmy zainwestować w badania i rozwój." },
    { phrase: "Let's define our key performance indicators.", translation: "Zdefiniujmy nasze kluczowe wskaźniki wydajności." },
    { phrase: "We need to maximize stakeholder engagement.", translation: "Musimy maksymalizować zaangażowanie interesariuszy." },
    { phrase: "Let's create a culture of learning.", translation: "Stwórzmy kulturę uczenia się." },
    { phrase: "We should evaluate our communication channels.", translation: "Powinniśmy ocenić nasze kanały komunikacji." },
    { phrase: "Let's develop a talent management strategy.", translation: "Opracujmy strategię zarządzania talentami." },
    { phrase: "We need to focus on customer loyalty.", translation: "Musimy skupić się na lojalności klientów." },
    { phrase: "Let's align our teams around common goals.", translation: "Zharmonizujmy nasze zespoły wokół wspólnych celów." },
    { phrase: "We should integrate feedback into our processes.", translation: "Powinniśmy integrować opinie w nasze procesy." },
    { phrase: "Let's leverage data analytics.", translation: "Wykorzystajmy analitykę danych." },
    { phrase: "We need to create an inclusive environment.", translation: "Musimy stworzyć inkluzywne środowisko." },
    { phrase: "Let's identify key trends in the market.", translation: "Zidentyfikujmy kluczowe trendy na rynku." },
    { phrase: "We should optimize our operational workflows.", translation: "Powinniśmy optymalizować nasze procesy operacyjne." },
    { phrase: "Let's develop a crisis management plan.", translation: "Opracujmy plan zarządzania kryzysowego." },
    { phrase: "We need to establish clear accountability.", translation: "Musimy ustalić jasną odpowiedzialność." },
    { phrase: "Let's set benchmarks for success.", translation: "Ustalmy wskaźniki sukcesu." },
    { phrase: "We should encourage continuous feedback.", translation: "Powinniśmy zachęcać do ciągłej informacji zwrotnej." },
    { phrase: "Let's prioritize our sustainability efforts.", translation: "Ustalmy priorytety naszych działań na rzecz zrównoważonego rozwoju." },
    { phrase: "We need to assess customer needs regularly.", translation: "Musimy regularnie oceniać potrzeby klientów." },
    { phrase: "Let's create a robust onboarding process.", translation: "Stwórzmy solidny proces wdrażania." },
    { phrase: "We should monitor our competitive landscape.", translation: "Powinniśmy monitorować nasze otoczenie konkurencyjne." },
    { phrase: "Let's collaborate on cross-departmental projects.", translation: "Współpracujmy przy projektach międzydziałowych." },
    { phrase: "We need to align our branding efforts.", translation: "Musimy zharmonizować nasze działania w zakresie brandingu." },
    { phrase: "Let's strengthen our client relationships.", translation: "Wzmocnijmy nasze relacje z klientami." },
    { phrase: "We should evaluate the effectiveness of our campaigns.", translation: "Powinniśmy ocenić skuteczność naszych kampanii." },
    { phrase: "Let's stay updated on industry regulations.", translation: "Bądźmy na bieżąco z regulacjami branżowymi." },
    { phrase: "We need to enhance employee engagement.", translation: "Musimy zwiększyć zaangażowanie pracowników." },
    { phrase: "Let's foster a spirit of innovation.", translation: "Zachęcajmy do ducha innowacji." },
    { phrase: "We should promote ethical practices.", translation: "Powinniśmy promować etyczne praktyki." },
    { phrase: "Let's streamline our supply chain.", translation: "Uprośćmy nasz łańcuch dostaw." },
    { phrase: "We need to conduct regular risk assessments.", translation: "Musimy przeprowadzać regularne oceny ryzyka." },
    { phrase: "Let's create a framework for decision-making.", translation: "Stwórzmy ramy dla podejmowania decyzji." },
    { phrase: "We should develop a clear communication strategy.", translation: "Powinniśmy opracować jasną strategię komunikacji." },
    { phrase: "Let's engage in proactive problem-solving.", translation: "Zaangażujmy się w proaktywne rozwiązywanie problemów." },
    { phrase: "We need to improve our customer support services.", translation: "Musimy poprawić nasze usługi wsparcia klienta." },
    { phrase: "Let's build a strong team culture.", translation: "Zbudujmy silną kulturę zespołową." },
    { phrase: "We should monitor our social media presence.", translation: "Powinniśmy monitorować naszą obecność w mediach społecznościowych." },
    { phrase: "Let's focus on talent acquisition.", translation: "Skupmy się na pozyskiwaniu talentów." },
    { phrase: "We need to enhance our product offerings.", translation: "Musimy zwiększyć naszą ofertę produktów." },
    { phrase: "Let's create a more engaging user experience.", translation: "Stwórzmy bardziej angażujące doświadczenie użytkownika." },
    { phrase: "We should align our messaging with our values.", translation: "Powinniśmy zharmonizować nasze komunikaty z naszymi wartościami." },
    { phrase: "Let's utilize customer feedback for improvement.", translation: "Wykorzystajmy opinie klientów do poprawy." },
    { phrase: "We need to address performance issues promptly.", translation: "Musimy szybko zająć się problemami z wydajnością." },
    { phrase: "Let's focus on operational excellence.", translation: "Skupmy się na doskonałości operacyjnej." },
    { phrase: "We should evaluate the impact of our initiatives.", translation: "Powinniśmy ocenić wpływ naszych inicjatyw." },
    { phrase: "Let's create a strategic communication plan.", translation: "Opracujmy strategiczny plan komunikacji." }
];

// Continue adding more phrases until you reach 500...


const phraseElement = document.getElementById('phrase');
const translationElement = document.getElementById('translation');
const userInput = document.getElementById('userInput');
const checkBtn = document.getElementById('checkBtn');
const optionsContainer = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const resultElement = document.getElementById('result');
const toggleTranslationBtn = document.getElementById('toggleTranslationBtn');
const toggleLanguageBtn = document.getElementById('toggleLanguageBtn');

let currentPhrase;
let showTranslation = false;
let displayInPolish = true; // Flaga do określenia, w jakim języku wyświetlać frazę

function getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}

function displayPhrase() {
    currentPhrase = getRandomPhrase();
    updateDisplay();
}

function updateDisplay() {
    phraseElement.textContent = displayInPolish ? currentPhrase.translation : currentPhrase.phrase;
    translationElement.textContent = showTranslation ? (displayInPolish ? currentPhrase.phrase : currentPhrase.translation) : '';
    userInput.value = '';
    resultElement.textContent = '';
    nextBtn.style.display = 'none';
    generateOptions();
}

function generateOptions() {
    optionsContainer.innerHTML = '';
    const correctOption = displayInPolish ? currentPhrase.phrase : currentPhrase.translation; // Zawsze angielski
    const options = [correctOption];

    while (options.length < 4) {
        const randomPhrase = getRandomPhrase();
        const option = displayInPolish ? randomPhrase.phrase : randomPhrase.translation; // Zawsze angielski
        if (!options.includes(option)) {
            options.push(option);
        }
    }

    options.sort(() => Math.random() - 0.5);

    options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.textContent = option;
        optionDiv.classList.add('option');
        optionDiv.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(optionDiv);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = displayInPolish ? currentPhrase.phrase : currentPhrase.translation; // Zawsze angielski
    if (selectedOption === correctAnswer) {
        resultElement.textContent = "Dobrze!";
        nextBtn.style.display = 'block'; // Pokaż przycisk "Dalej"
    } else {
        resultElement.textContent = "Spróbuj ponownie.";
    }
}

checkBtn.addEventListener('click', () => {
    const userAnswer = userInput.value.trim();
    const correctAnswer = displayInPolish ? currentPhrase.phrase : currentPhrase.translation; // Zawsze angielski

    if (userAnswer === correctAnswer) {
        resultElement.textContent = "Poprawnie!";
        nextBtn.style.display = 'block'; // Pokaż przycisk "Dalej"
    } else {
        resultElement.textContent = "Spróbuj ponownie.";
    }
});

toggleTranslationBtn.addEventListener('click', (event) => {
    event.preventDefault();
    showTranslation = !showTranslation;
    translationElement.textContent = showTranslation ? (displayInPolish ? currentPhrase.phrase : currentPhrase.translation) : '';
    generateOptions();
});

toggleLanguageBtn.addEventListener('click', () => {
    displayInPolish = !displayInPolish; // Zmiana języka
    updateDisplay(); // Odśwież wyświetlanie bez zmiany frazy
});

// Przycisk "Dalej"
nextBtn.addEventListener('click', displayPhrase);

// Początkowe wyświetlenie
displayPhrase();