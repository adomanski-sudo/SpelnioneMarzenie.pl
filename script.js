// ------------------------
// Zmienne Globalne
// ------------------------

let dreamsData = [];

// ------------------------
// Pobieranie danych z Backend (API)
// ------------------------
async function fetchDreamsFromDatabase() {
    try {
        // 1. Wysyłamy zapytanie do API
        const response = await fetch('/api/dreams');
        
        // 2. Jeśli coś poszło nie tak (np. błąd serwera), rzuć błąd
        if (!response.ok) {
            throw new Error('Błąd pobierania danych');
        }

        // 3. Przetwórz odpowiedź (JSON) na tablicę obiektów
        const data = await response.json();
        
        // 4. Zapisz dane do zmiennej globalnej
        dreamsData = data;

        // 5. Dopiero teraz, gdy mamy dane, generujemy  kafelki!
        generateDreams();

    } catch (error) {
        console.error("Wystąpił problem:", error);
        alert("Nie udało się pobrać marzeń z bazy danych 😢");
    }
}

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
            <div class="dream" id="${dream.dream_id}" style="background-image: url('${dream.image}');">
                <div class="dream-top-bar">
                    <span class="icon">${dream.icon}</span> ${dream.category}
                </div>
                <div class="dream-content">
                    ${dream.title}
                </div>
                <button class="dream-btn" onclick="showDreamDetails('${dream.dream_id}')">Spełnij</button>
            </div>
        `;
    });

    container.innerHTML = htmlCode;
}

function showDreamDetails(id) {
    const dream = dreamsData.find(d => d.dream_id === id);
    const container = document.getElementById("dreams");

    // Przełączamy widok
    container.style.display = "block";

    container.innerHTML = `
        <div class="dream-one" id="details-${dream.dream_id}">
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
    
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

fetchDreamsFromDatabase();