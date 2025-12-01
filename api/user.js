import mysql from 'mysql2/promise';

let selectedUser = 2;

export default async function handler(req, res) {
  const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306,
  };

  try {
    const connection = await mysql.createConnection(dbConfig);

    const [rows] = await connection.execute(
      'SELECT first_name, last_name, description, image FROM users WHERE id = ?',
      [selectedUser]
    );

    await connection.end();

    if (rows.length > 0) {
        res.status(200).json(rows[0]); // Zwracamy tylko jeden obiekt (nie tablicę)
    } else {
        res.status(404).json({ error: 'Użytkownik nieznany' });
    }

  } catch (error) {
    res.status(500).json({ error: 'Błąd pobierania profilu' });
  }
}