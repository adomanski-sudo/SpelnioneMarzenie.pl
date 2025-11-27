// ------------------------
// Baza Danych (Tablica Obiektów)
// ------------------------
const dreamsData = [
    { 
        id: "Krolestwo", 
        icon: "📚", 
        category: "Książka", 
        title: "Królestwo - Jo Nesbø",
        image: "img/dream/krolestwo.jpg", 
        price: "59 zł",
        description: "Jo Nesbø – moja miłość do tego autora jest <b>wierna</b> i ślepą. Każda jego powieść, którą czytałem (a czytałem wszystkie!) była wciągająca jak <b>rzeka</b>. Podobno ta książka znacznie różni się od poprzednich i chyba właśnie to jest w niej takie kuszące. Widziałem jedynie okładkę. Słyszałem pogłoski, a już ciekawość każe moim palcom przewracać kolejne strony. Jeśli chcesz podarować mi kilka godzin napięcia i ekscytacji - chętnię przyjmę ten skromny prezent 😁"
    },
    { 
        id: "Lyzwy", 
        icon: "⛸️", 
        category: "Sport", 
        title: "Łyżwy rozmiar 44",
        image: "img/dream/Lyzwy.jpg",
        price: "159 zł",
        description: "Niedawno, pierwszy raz w życiu miałem na nogach łyżwy. Ten jeden raz wystarczył! Chcę jeździć częściej. Jak najczęściej! Przede wszystkim chciałbym jednak nauczyć się jeździć. Tak, żeby więcej stać na nogach, niż leżeć na lodzie. Jestem przekonany, że własna para łyżew pomoże mi w nauce. Nie jestem pewien, czy odpowiednim rozmiarem będzie 43 czy 44, więc nie zaszkodzi drobna konsultacja, lub wcześniejsza przymiarka."
    },
    { 
        id: "Masaz", 
        icon: "🌿", 
        category: "Zdrowie", 
        title: "Seria masaży",
        image: "img/dream/Masaz.jpg",
        price: "120 zł / sesja",
        description: "Ostatnio staram się bardziej dbać o zdrowie. Częste ćwiczenia nadwyrężają jednak moje plecy. Dobry masaż potrafi podnieść mnie na nogi niczym Łazarza. Jeśli wykonuje go odpowiednia osoba, potrafi też być całkiem przyjemny, więc to nie tylko troska o zdrowie fizyczne, ale także psychiczne – tak ważne, aby wprowadzić do życia odrobinę harmonii 🫀"
    },
    { 
        id: "Spacer", 
        icon: "🏔️", 
        category: "Wspólny czas", 
        title: "Spacer po górach",
        image: "img/dream/Spacer.jpg",
        price: "0 zł",
        description: "Nie jestem alpinistą. Może na początek bardziej pagórki niż ośnieżone szczyty. Jasne, można wędrować samemu, ale z kimś w parze, lub grupie to zawsze większa motywacja, aby wyruszyć na szlak. Okazja do rozmowy i wspólnych doświadczeń. Chwile, gdy można zostawić cały świat za sobą i żyć tylko tym co tu i teraz! Zachęciłem? No to w drogę!"
    },
    { 
        id: "Kimona", 
        icon: "🥋", 
        category: "Sport", 
        title: "Kimono do sztuk walki",
        image: "img/dream/Kimono.jpg",
        price: "120 zł",
        description: "Nie wiem czy to pasja na całe życie. Może tylko chwilowe zauroczenie. Nawet jeśli minie, to zostawi po sobie wile miłych wspomnień. Tak! Właśnie tak. Miłych. Każdy przyjęty cios, choć bolesny i każde trafienie (też bywają bolesne) z czasem przeradzają się w satysfakcję, że spróbowałem i tak wiele z tego wyniosłem. Nie tylko siniaki i zakwasy. Cenną naukę na całe życie. Może to już czas na nowy, bardziej dopasowany strój? Większą motywację, aby iść na kolejny, wyciskający siódme poty trening."
    },
    { 
        id: "Bilet", 
        icon: "🏛️", 
        category: "Bilet", 
        title: "Bilet do muzeum historii naturalnej w Wiedniu",
        image: "img/dream/Bilet.jpg",
        price: "80 zł",
        description: "Od jakiegoś czasu marzy mi się wycieczka do Wiednia. Wiadomo, jak to jest z takimi marzeniami – zawsze znajduje się coś ważniejszego i odkładamy to na później. Mam już plany całej wycieczki, orbitują wokół dwóch stałych punktów: koncert w filharmonii i zwiedzanie tego muzeum. Na samą myśl czuję fascynację, jak mały chłopiec widzący figurkę dinozaura. Tylko teraz już dorosły, no i te dinozaury też odpowiednio większe xD Nie tylko dinozaury, znacznie więcej! Na samą myśl mam gęsią skórkę."
    },
    { 
        id: "Quo", 
        icon: "📚", 
        category: "Książka", 
        title: "Quo vAIdis - Andrzej Dragan",
        image: "img/dream/Quo.jpg",
        price: "50 zł",
        description: "Poprzednia książka Dragana była strzałem w dziesiątkę 🎯 Z tą pewnie będzie podobnie. Tym bardziej, że temat dotyczy nie tylko moich zainteresowań, ale i aspiracji zawodowych… Może… 🤫 Kto wie? "
    },
    { 
        id: "Rekawice", 
        icon: "🥊", 
        category: "Sport", 
        title: "Rękawice grapplingowe",
        image: "img/dream/Rekawice.jpg",
        price: "80 zł",
        description: "Każdy trening to krew, pot i łzy. Tak, łzy też. Ze śmiechu, ze zmęczenia, ze szczęścia, że przetrwałem kolejne wyzwanie. To zawsze jest wyzwanie. Za każdym razem, nawet gdy powtarzamy tę samą sekwencję któryś już raz. Póki co, stawiam im czoła i chciałbym iść w to dalej. Może będzie to pasja na całe życie. A może tylko stałe hobby… Tylko i aż."
    },
    { 
        id: "Koncert", 
        icon: "🎻", 
        category: "Bilet", 
        title: "Koncert muzyki kameralnej",
        image: "img/dream/Koncert.jpg",
        price: "130 zł",
        description: "Co mam powiedzieć? Lubię muzykę kameralną. To nie snobizm, to szczerość. Duże koncerty, choć też mają swoje zalety, nie dają jednego, kluczowego doświadczenia. Drgania żywego instrumentu. Bez wzmacniaczy. Chwila zapomnienia, zanurzenia się w muzyce i wspaniała podróż, w którą zabierają nas artyści. Niezwykła intymność, tego doświadczenia, które jest tylko tu i teraz. Ach rozmarzyłem się."
    },
    { 
        id: "ZnajdzJa", 
        icon: "📚", 
        category: "Książka", 
        title: "Znajdź ją - Lisa Gardner",
        image: "img/dream/ZnajdzJa.jpg",
        price: "40 zł",
        description: "Jestem po kilku książkach Lisy. Polubiliśmy się. Kolejną już sobie upatrzyłem – Znajdź ją. Znajdziesz ją 😉 w każdej księgarni. Taki prezent nie musi czekać na szczególną okazję. Chętnie przyjmę go również z zaskoczenia. Nie ma się nad czym zastanawiać. "
    },
    { 
        id: "Kolacja", 
        icon: "🥂", 
        category: "Wspólny czas", 
        title: "Wspólna kolacja",
        image: "img/dream/Kolacja.jpg",
        price: "0 zł",
        description: "To wcale nie musi być droga restauracja. Ja chętnie coś ugotuję. Doświadczenie uczy, że jedzenie w dobrym towarzystwie smakuje znacznie lepiej. Samo gotowanie dla kogoś to też czysta przyjemność. Może nawet wspólne gotowanie? Masz zacięcie kulinarne? Zachęciłem? To chwytaj za nóż i obieraj ziemniaki xD"
    },
    { 
        id: "Sakwy", 
        icon: "🚲", 
        category: "Sport", 
        title: "Sakwy rowerowe",
        image: "img/dream/Sakwy.jpeg",
        price: "150 zł",
        description: "Lubię wyprawy rowerowe. Kondycja pozwala mi już na takie dłuższe, całodniowe. Chcę jechać dalej, zdobywać świat! No ale w coś trzeba się spakować, a plecak nie pomieści wszystkiego. Wpadłem więc na pomysł, aby przytroczyć do roweru juki. Później dowiedziałem się, że zazwyczaj mówi się na to sakwy. "
    },
    { 
        id: "Skarpetki", 
        icon: "🧦", 
        category: "Ubrania", 
        title: "Wełniane skarpetki",
        image: "img/dream/Skarpetki.jpg",
        price: "40 zł",
        description: "Mówi się, że najgorsze prezenty dla mężczyzny to krawat lub skarpetki. Nie prawda! Krawatów może i nie noszę, ale skarpetki, owszem. Jakiś ciekawy wzór? Może coś zabawnego? To nie musi być praktyczny prezent. Może być z charakterem, lub odrobiną humoru. Pokaż jak dobrze mnie znasz!"
    },
    { 
        id: "Tealighty", 
        icon: "🕯️", 
        category: "Codzienne", 
        title: "Tealighty",
        image: "img/dream/Tealighty.jpg",
        price: "10 zł",
        description: "To zawsze się przyda. Zużywam je w ilościach hurtowych. Ten mały płomyk może przypominać mi właśnie o Tobie. Praktyczne, codzienne. To może być nawet cykliczny prezent 😉"
    }
];

// ------------------------
// Funkcja generująca HTML
// ------------------------

function generateDreams() {
    const container = document.getElementById("dreams");
    // Zmiana stylu diva dreams na grig - siatka
    container.style.display = "grid";
    let htmlCode = "";

    dreamsData.forEach(dream => {
        htmlCode += `
            <div class="dream" id="${dream.id}" style="background-image: url('${dream.image}');">
                <div class="dream-top-bar">
                    <span class="icon">${dream.icon}</span> ${dream.category}
                </div>
                <div class="dream-content">
                    ${dream.title}
                </div>
                <button class="dream-btn" onclick="showDreamDetails('${dream.id}')">Spełnij</button>
            </div>
        `;
    });

    container.innerHTML = htmlCode;
}

function showDreamDetails(id) {
    const dream = dreamsData.find(d => d.id === id);
    const container = document.getElementById("dreams");

    // Przełączamy widok
    container.style.display = "block";

    container.innerHTML = `
        <div class="dream-one" id="details-${dream.id}">
            <div class="dream-one-wrapper">
                
                <div class="dream-details-header">
                    
                    <button onclick="generateDreams()" class="btn-back">
                        ← Wróć
                    </button>

                    <div class="dream-actions-group">
                        <button class="dream-btn-spelnij" onclick="alert('Dziękuję! To wspaniałe ❤️')">Spełnij</button>
                        <button class="dream-btn-zrzutka">Zaproponuj zrzutkę</button>
                    </div>

                </div>

                <div class="dream-one-main">
                    <div class="dream-pic" style="background-image: url('${dream.image}');"></div>
                    
                    <div class="dream-text-container">
                        <div class="dream-desc">
                            ${dream.description}
                        </div>
                        <div class="dream-one-price">Przybliżona cena: <strong>${dream.price}</strong></div>
                    </div>
                </div>

            </div>
        </div>
    `;
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

generateDreams();