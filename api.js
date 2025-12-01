// dreams.js pobiera dane z tabeli dreams

export async function fetchDreams() {
    const response = await fetch('/api/dreams');
    if (!response.ok) throw new Error('Błąd pobierania marzeń');
    return await response.json();
}

// user.js pobiera dane z tabeli users
export async function fetchUser() {
    const response = await fetch('/api/user');
    if (!response.ok) throw new Error('Błąd pobierania profilu');
    return await response.json();
}