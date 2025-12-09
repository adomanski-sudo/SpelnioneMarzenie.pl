export function generateDreams(dreams, isOwner) {
    const container = document.getElementById("dreams");
    container.style.display = "grid";
    let htmlCode = "";

    // Jeśli brak marzeń
    if (dreams.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">Brak marzeń... jeszcze! ✨</p>';
        return;
    }

    dreams.forEach((dream) => {
        // Czy marzenie spełnione? Dodaj klasę CSS
        const fulfilledClass = dream.is_fulfilled ? 'fulfilled' : '';

        // MENU AKCJI (Widoczne tylko dla właściciela)
        let actionsHtml = '';
        if (isOwner) {
            actionsHtml = `
                <div class="dream-actions">
                    <button class="action-btn btn-check" onclick="window.toggleDreamStatus(${dream.id}, ${dream.is_fulfilled})" title="Oznacz jako spełnione">✔️</button>
                    <button class="action-btn btn-edit" onclick="window.editDream(${dream.id})" title="Edytuj">✏️</button>
                    <button class="action-btn btn-delete" onclick="window.deleteDream(${dream.id})" title="Usuń">🗑️</button>
                </div>
            `;
        }

        htmlCode += `
        <div class="dream ${fulfilledClass}" id="${dream.dream_id}" style="background-image: url('${dream.image}'); position: relative;">
            
            ${actionsHtml}

            <div class="dream-top-bar">
                <span class="icon">${dream.icon}</span> ${dream.category}
            </div>
            <div class="dream-content">
                ${dream.title}
            </div>
            
            <button class="dream-btn" onclick="window.triggerDetails('${dream.dream_id}')">
                ${dream.is_fulfilled ? 'Zobacz' : 'Spełnij'}
            </button>
        </div>
        `;
    });

    container.innerHTML = htmlCode;
}