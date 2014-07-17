# Założenia projektu

*	## Elastyczność

	Projekt ma być w stanie obsłużyć:

	*	Dowolny zewnętrzny moduł robiący wszystko po swojemu
	*	Dowolny zewnętrzny program ładowany w pływającym okienku
	*	Moduły dedykowane

*	## Bezpieczeństwo
	
	Projekt powinien zapewnić bezpieczeństwo danych użytkownika. Niezależnie od miejsca jego instalacji przy poprawnej konfiguracji powinien być możliwie odporny na możliwość podejrzenia i edycji danych użytkownika, jeżeli ten użytkownik sam na to nie pozwoli.

	Dzięki temu każdy będzie mógł postawić własną instancję i mieć prywatne &bdquo;Swoje Miejsce&rdquo;, jak i mniej zaawansowani użytkownicy będą mogli mieć &bdquo;Swoje Miejsce&rdquo; na publicznej instancji usługi.

*	## Otwartość

	Otwarty kod źródłowy i przejrzystość w jego rozwijaniu jest dodatkowym gwarantem bezpieczeństwa. Poza tym bezpłatna licencja do użytku niekomercyjnego (kosztem reklam) oraz licencja płatna do użytku komercyjnego mi pozwala zarabiać, firmom za uczciwe pieniądze korzystać z dobrego narzędzia, a wszystkim osobom prywatnym korzystać i uczyć się dobrego narzędzia.

*	## Technologie

	* ### Front:

		* #### Style 

			Sass (być może w połączeniu z Compass'em)

		* #### JavaScript

			Istnieją 4 sensowne opcje: 

			*	Czysty js, w którym samoistnie powstanie framework 

				Może się okazać całkiem fajne i lekkie, ale z drugiej strony wtedy każdy musi się uczyć wielu nowych rzeczy chcąc pisać nowe moduły. Od frameworka, poprzez architekturę projektu, po API.

			*	AngularJS z dużą bazą własnych modułów

				Jest ok, bo Angular'a wszyscy znają i kochają. Ma wiele fajnych rzeczy, ale z drugiej strony może się okazać zwyczajnie za ciężki na taki projekt. Sam narzut Angular'a może być za duży. A programiści i tak będą mieli dużo się do nauczenia.

			*	ES6 z wykorzystaniem Traceur'a od Google

				Kuszący pomysł. Łatwo będzie przejść na ES6, gdy przeglądarki zaczną go obsługiwać. Dużo rzeczy i tak trzeba będzie samemu napisać, ale będzie o wiele prościej, niż w ES5. Za to może być problem, jeżeli przeglądarki nie zaczną nawet obsługiwać ES6 albo Traceur zostanie porzucony.

			*	Microsoftowy TypeScript.

				Trochę ES6 ze statycznym typowaniem. Z jednej strony fajna sprawa, z drugiej zaś statyczne typowanie czasami może stanowić problem.

		* #### HTML

			Kuszące jest zorganizowanie sobie automatycznego odświeżania widoku po zmianie modelu i używanie własnych tagów. Akurat własne tagi są bez problemu obsługiwane przez najnowsze przeglądarki. Dwustronne podpinanie można bardzo elegancko i naturalnie rozwiązać za pomocą zdarzeń bez zabawy rzeczami w stylu `ngClick` z Angular'a. No i gdyby się udało, to możnaby próbować przygotować własną bibliotekę komponentów do użytku wewnątrz projektu.

	* ### Back:

		Jego rola ma ograniczyć się do wystawienia sensownego API RESTowego. Więc potrzebne jest coś, co można szybko postawić oraz wygodnie skonfigurować w tym rozbudowany routing oraz narzędzia do obsługi baz danych.

		* #### Baza danych

			Opcja z wykorzystaniem Mongo jako bazy pierwszego dostępu oraz z tyłu jakiegoś SQL-oewgo kombajnu brzmi ok. Można też od razu skoczyć na Postgre. Albo i użyć jakiegoś ORM(+ODM?) i być niezależnym od bazy danych.

			Najprościej będzie zacząć z samym Postgresem. Jeżeli będzie coś cięższego do zrobienia, to wtedy dopiero będzie można w jakiś sposób używać jakieś NoSQL w przedsionku.

			Czyli Postgres.

		* #### Język

			Jedyne znane to PHP i Python. Jeszcze jest NodeJS, który rozwiązuje problem przenośności encji, ale na tym jego zalety się kończą. PHP ma tę zaletę, że nie stawia sobie sam serwera. Da się w nim również sensownie programować, jest dostępny cache. Znane mi Symfony załatwia potrzebne rzeczy w elegancki sposób. Dla Pythona natomiast jest Django oraz Pyramid, które, delikatnie rzecz biorąc, dają ciała. Choćby z powodu stawiania własnego serwera.

			Czyli PHP z Symfony 2.