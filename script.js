import { fetchDreams, fetchUser } from './api.js';
import { generateProfil } from '.modules/generateProfil.js';
import { generateDreams } from '.modules/generateDreams.js';
import { showDreamDetails } from '.modules/showDreamDetails.js';

// Stan aplikacji
let appState = {
    user: null,
    dreams: []
};

// Funkcja startowa
async function initApp() {
    try {
        // Równoległe pobieranie danych
        const [userData, dreamsData] = await Promise.all([
            fetchUser(),
            fetchDreams()
        ]);

        appState.user = userData;
        appState.dreams = dreamsData;

        // 2. Generujemy widoki
        generateProfil(appState.user);
        generateDreams(appState.dreams);

    } catch (error) {
        console.error(error);
        alert("Błąd ładowania danych 😢");
    }
}

// ---------------------------------------------------------
// MOSTY DLA HTML (Globalne funkcje)
// ---------------------------------------------------------

// HTML (onclick) nie widzi modułów.
// Przypinamy funkcję do obieku window. 
// Diabli wiedzą, dlaczego i jak to działa.

window.triggerDetails = (id) => {
    // Przekazujemy ID i całą tablicę marzeń do funkcji szczegółów
    showDreamDetails(id, appState.dreams);
};

// Start - pobieranie danych i budowanie obu widoków.
initApp();