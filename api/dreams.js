import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  
    // Konfiguracja połączenia - zmienne środowiskowe
  const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306,
  };

  try {
    // Łączenie z bazą SM
    const connection = await mysql.createConnection(dbConfig);

    // Pobieramy dane
    const [rows] = await connection.execute(
      'SELECT dream_id AS id, icon, category, title, image, price, description FROM dreams'
    );

    // Zamknięcie połączenia
    await connection.end();

    // Wysłanie danych do przeglądarki jako plik JSON
    res.status(200).json(rows);

  } catch (error) {
    // Jak coś pójdzie nie tak (np. złe hasło), wyślij błąd
    console.error('Błąd bazy danych:', error);
    res.status(500).json({ error: 'Nie udało się pobrać marzeń' });
  }
}