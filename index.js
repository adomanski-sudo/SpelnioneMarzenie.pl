async function loadUsers() {
    try {
        const response = await fetch('/api/users');
        if (!response.ok) throw new Error("Błąd pobierania");
        const users = await response.json();

        const container = document.getElementById('users-grid');
        let html = '';

        users.forEach(user => {
            // Linkujemy do profil.html, przekazując ID
            html += `
                <a href="profil.html?id=${user.id}" class="user-card">
                    <img src="${user.image}" alt="${user.first_name}" class="user-avatar">
                    <div class="user-name">
                        ${user.first_name} <br> ${user.last_name}
                    </div>
                </a>
            `;
        });

        container.innerHTML = html;

    } catch (error) {
        console.error(error);
        alert("Nie udało się załadować użytkowników");
    }
}

loadUsers();