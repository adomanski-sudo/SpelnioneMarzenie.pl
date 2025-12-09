// hash.js
// Zamiast 'import', używamy 'require'
const bcrypt = require('bcrypt');

const myPlainPassword = 'Diogenes2357!'; // <-- Tu wpisz swoje hasło

async function generate() {
    // 10 to liczba rund (koszt)
    const hash = await bcrypt.hash(myPlainPassword, 10);
    
    console.log("--- TWÓJ HASH ---");
    console.log(hash);
    console.log("-----------------");
}

generate();