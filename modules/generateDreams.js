export function generateDreams(dreams) {
    const container = document.getElementById("dreams");
    container.style.display = "grid"; 
    let htmlCode = "";

    dreams.forEach(dream => {
        htmlCode += `
            <div class="dream" id="${dream.dream_id}" style="background-image: url('${dream.image}');">
                <div class="dream-top-bar">
                    <span class="icon">${dream.icon}</span> ${dream.category}
                </div>
                <div class="dream-content">
                    ${dream.title}
                </div>
                <button class="dream-btn" onclick="window.triggerDetails('${dream.dream_id}')">Spełnij</button>
            </div>
        `;
    });

    container.innerHTML = htmlCode;
}