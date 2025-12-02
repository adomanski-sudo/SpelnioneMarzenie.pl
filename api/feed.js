import mysql from 'mysql2/promise';

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
    
    const [rows] = await connection.execute(`
      SELECT 
        dreams.title, 
        dreams.icon, 
        users.first_name, 
        users.image AS user_image
      FROM dreams 
      JOIN users ON dreams.idUser = users.id 
      ORDER BY RAND() 
      LIMIT 1
    `);

    await connection.end();

    // Zwracamy ten jeden wylosowany obiekt
    res.status(200).json(rows[0]);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Błąd feedu' });
  }
}