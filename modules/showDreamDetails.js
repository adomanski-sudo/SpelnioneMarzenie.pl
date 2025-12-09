export function showDreamDetails(dreamId, allDreams) {
    // 1. Znajdź marzenie w tablicy
    const dream = allDreams.find(d => d.dream_id === dreamId || d.id == dreamId);

    if (!dream) {
        console.error("Nie znaleziono marzenia o ID:", dreamId);
        return;
    }

    const container = document.getElementById("dreams");
    
    // Sprawdź, czy użytkownik jest właścicielem
    const storedUser = localStorage.getItem('loggedUser');
    const loggedUser = storedUser ? JSON.parse(storedUser) : null;
    const isOwner = loggedUser && loggedUser.id === dream.idUser;

    // Generujemy przyciski w zależności od isOwner
    let actionButtonsHtml = '';

    if (isOwner) {
        // --- PANEL WŁAŚCICIELA ---
        const statusText = dream.is_fulfilled ? "Oznacz jako niespełnione ❌" : "Oznacz jako spełnione 🎉";
        
        actionButtonsHtml = `
            <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; margin-top: 20px;">
                <button class="btn-primary" onclick="window.toggleDreamStatus(${dream.id}, ${dream.is_fulfilled})">
                    ${statusText}
                </button>
                <button class="btn-outline" onclick="window.editDream(${dream.id})" style="border-color: blue; color: blue;">
                    Edytuj ✏️
                </button>
                <button class="btn-outline" onclick="window.deleteDream(${dream.id})" style="border-color: red; color: red;">
                    Usuń 🗑️
                </button>
            </div>
        `;
    } else {
        // --- PANEL GOŚCIA ---
        if (dream.is_fulfilled) {
            // Jeśli spełnione -> Pokaż gratulacje, ukryj przyciski spełnienia
            actionButtonsHtml = `
                <div style="margin-top: 30px; padding: 20px; background-color: #e8f5e9; border-radius: 10px; color: #2e7d32;">
                    <h3>✨ Marzenie Spełnione! ✨</h3>
                    <p>To marzenie zostało już zrealizowane. Dziękujemy!</p>
                </div>
            `;
        } else {
            // Jeśli niespełnione -> Pokaż przyciski do spełnienia
            actionButtonsHtml = `
                <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px;">
                    <button class="dream-btn-large" onclick="alert('Funkcja płatności wkrótce!')">Spełnij Marzenie (${dream.price})</button>
                    <button class="dream-btn-secondary" onclick="alert('Zrzutka wkrótce!')">Zaproponuj zrzutkę</button>
                </div>
            `;
        }
    }

    // Generujemy HTML widoku szczegółowego
    // (Używamy display: block, żeby wyjść z Grida kafelków)
    container.style.display = "block";
    
    container.innerHTML = `
        <div class="dream-details-card">
            <button class="back-btn" onclick="window.location.reload()">← Wróć</button>
            
            <div class="details-header">
                <img src="${dream.image}" alt="${dream.title}" class="details-image">
                <div class="details-info">
                    <span class="category-tag">${dream.icon} ${dream.category}</span>
                    <h1>${dream.title}</h1>
                    <p class="price-tag">Koszt: ${dream.price}</p>
                    <p class="description">${dream.description}</p>
                    
                    ${actionButtonsHtml}
                    
                </div>
            </div>
        </div>
    `;

    // Przewiń do góry, żeby user zobaczył szczegóły
    window.scrollTo({ top: 0, behavior: 'smooth' });
}