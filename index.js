let appState = {
    users: [] // Pobieramy tylko userów do lewego panelu
};

async function init() {
    try {
        // 1. Pobieramy TYLKO listę użytkowników
        const usersRes = await fetch('/api/users');
        
        if (!usersRes.ok) throw new Error("Błąd API");

        appState.users = await usersRes.json();

        // 2. Renderujemy lewą stronę
        renderUserList(appState.users);

        // 3. Uruchamiamy Live Feed (Pytanie serwera co jakiś czas)
        startLiveFeed();

        // 4. Obsługa wyszukiwarki
        document.getElementById('user-search').addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filteredUsers = appState.users.filter(u => 
                u.first_name.toLowerCase().includes(term) || 
                u.last_name.toLowerCase().includes(term)
            );
            renderUserList(filteredUsers);
        });

    } catch (error) {
        console.error(error);
    }
}

// --- FUNKCJA LEWA STRONA ---
function renderUserList(users) {
    const container = document.getElementById('users-list');
    if (users.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#999">Nie znaleziono nikogo :(</p>';
        return;
    }
    let html = '';
    users.forEach(user => {
        html += `
            <a href="profil.html?id=${user.id}" class="user-card">
                <img src="${user.image}" alt="${user.first_name}" class="user-avatar">
                <div class="user-info">
                    <div class="name">${user.first_name} ${user.last_name}</div>
                </div>
            </a>
        `;
    });
    container.innerHTML = html;
}

// --- FUNKCJA PRAWA STRONA: Live Feed ---
function startLiveFeed() {
    // Pierwsze pobranie od razu
    fetchAndShowNewItem();
    
    // Uruchamiamy pętlę losową
    scheduleNextFeed();
}

function scheduleNextFeed() {
    // 1. Losujemy czas
    const randomTime = Math.floor(Math.random() * (4001) + 2000);
    
    // 2. Ustawiamy JEDNORAZOWY timer
    setTimeout(() => {
        fetchAndShowNewItem();
        
        // 3. Po wykonaniu, planujemy KOLEJNY (rekurencja)
        scheduleNextFeed(); 
    }, randomTime);
}

// Nowa funkcja, która "dzwoni" do nowego API
async function fetchAndShowNewItem() {
    try {
        const res = await fetch('/api/feed'); // Pytamy o losowe marzenie
        if (!res.ok) return; // Jak błąd, to po prostu nic nie rób w tej turze
        
        const data = await res.json(); // Dostajemy gotowy obiekt z imieniem, ikoną itp.
        addFeedItemToDOM(data);

    } catch (err) {
        console.error("Błąd feedu:", err);
    }
}

function addFeedItemToDOM(data) {
    const container = document.getElementById('live-feed-list');

    // Tworzymy HTML z danych z serwera
    const item = document.createElement('div');
    item.className = 'feed-item';
    item.innerHTML = `
        <img src="${data.user_image}" class="feed-avatar">
        <div class="feed-content">
            <div><strong>${data.first_name}</strong> spełnił(a) marzenie:</div>
            <div class="feed-dream-title">${data.icon || '✨'} ${data.title}</div>
        </div>
        <div class="time-ago">przed chwilą</div>
    `;

    container.prepend(item);

    // Sprzątanie (żeby przeglądarka nie "puchła" od tysięcy divów)
    if (container.children.length > 7) {
        container.removeChild(container.lastChild);
    }
}

init();