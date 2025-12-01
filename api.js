export async function fetchDreams() {
    try {
        const response = await fetch('/api/dreams');
        
        if (!response.ok) {
            throw new Error('Błąd pobierania danych');
        }

        return await response.json();

    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
}