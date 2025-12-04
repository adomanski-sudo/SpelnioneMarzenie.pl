// api/feed.js
import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  // ... konfiguracja dbConfig bez zmian ...
  const dbConfig = { /* ... */ };

  try {
    const connection = await mysql.createConnection(dbConfig);

    // ZMIANA: Pobieramy 20 losowych marzeń naraz (zamiast 1)
    const [rows] = await connection.execute(`
      SELECT 
        dreams.dream_id, -- Potrzebne do unikania duplikatów
        dreams.title, 
        dreams.icon, 
        users.first_name, 
        users.image AS user_image
      FROM dreams 
      JOIN users ON dreams.idUser = users.id 
      ORDER BY RAND() 
      LIMIT 20
    `);

    await connection.end();

    // Zwracamy tablicę (paczkę), a nie pojedynczy obiekt
    res.status(200).json(rows);

  } catch (error) {
    res.status(500).json({ error: 'Błąd feedu' });
  }
}