import { generateDreams } from './generateDreams.js'; 

export function showDreamDetails(id, allDreams) {
    const dream = allDreams.find(d => d.dream_id === id);
    const container = document.getElementById("dreams");

    container.style.display = "block";

    container.innerHTML = `
        <div class="dream-one" id="details-${dream.dream_id}">
            <div class="dream-one-wrapper">
                <div class="dream-details-header">
                    <button id="back-btn-js" class="btn-back">← Wróć</button>
                    
                    <div class="dream-actions-group">
                        <button class="dream-btn-spelnij" onclick="alert('Dziękuję! ❤️')">Spełnij</button>
                        <button class="dream-btn-zrzutka">Zaproponuj zrzutkę</button>
                    </div>
                </div>
                <div class="dream-one-main">
                    <div class="dream-pic" style="background-image: url('${dream.image}');"></div>
                    <div class="dream-text-container">
                        <div class="dream-desc">${dream.description}</div>
                        <div class="dream-one-price">Przybliżona cena: <strong>${dream.price}</strong></div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Event Listener do przycisku "Wróć"
    document.getElementById('back-btn-js').addEventListener('click', () => {
        generateDreams(allDreams);
    });

    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}