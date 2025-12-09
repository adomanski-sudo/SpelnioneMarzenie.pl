import bcrypt from 'bcrypt';

const myPlainPassword = 'Diogenes2357!'; // <-- Tu wpisz hasło, jakie chcesz mieć

async function generate() {
    // 10 to liczba rund (koszt), ta sama, którą masz w register.js
    const hash = await bcrypt.hash(myPlainPassword, 10);
    
    console.log("--- KOPIUJ PONIŻSZĄ LINIJKĘ ---");
    console.log(hash);
    console.log("-------------------------------");
}

generate();