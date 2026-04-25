function playGame() {
    // Langkah 4: Deklarasi variabel skor di dalam scope playGame
    let humanScore = 0;
    let computerScore = 0;

    // Langkah 2: Logika untuk mendapatkan pilihan komputer
    function getComputerChoice() {
        let random = Math.random();
        if (random < 0.33) {
            return "rock";
        } else if (random < 0.66) {
            return "paper";
        } else {
            return "scissors";
        }
    }

    // Langkah 3: Logika untuk mendapatkan pilihan manusia
    function getHumanChoice() {
        let choice = prompt("Pilih: rock, paper, atau scissors?");
        return choice;
    }

    // Langkah 5: Logika untuk memainkan satu ronde
    function playRound(humanChoice, computerChoice) {
        // Membuat input menjadi case-insensitive
        humanChoice = humanChoice.toLowerCase();

        console.log(`Kamu memilih: ${humanChoice}`);
        console.log(`Komputer memilih: ${computerChoice}`);

        if (humanChoice === computerChoice) {
            console.log("Seri! Tidak ada poin.");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`Kamu menang ronde ini! ${humanChoice} mengalahkan ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`Kamu kalah ronde ini! ${computerChoice} mengalahkan ${humanChoice}`);
            computerScore++;
        }
        
        console.log(`Skor Sementara - Anda: ${humanScore} | Komputer: ${computerScore}`);
        console.log("-----------------------");
    }

    // Langkah 6: Memainkan 5 ronde
    // Kita memanggil playRound sebanyak 5 kali secara manual
    
    // Ronde 1
    playRound(getHumanChoice(), getComputerChoice());
    // Ronde 2
    playRound(getHumanChoice(), getComputerChoice());
    // Ronde 3
    playRound(getHumanChoice(), getComputerChoice());
    // Ronde 4
    playRound(getHumanChoice(), getComputerChoice());
    // Ronde 5
    playRound(getHumanChoice(), getComputerChoice());

    // Deklarasi pemenang akhir
    console.log("HASIL AKHIR:");
    if (humanScore > computerScore) {
        console.log(`Selamat! Kamu menang dengan skor ${humanScore} vs ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`Yah, kamu kalah! Skor: ${humanScore} vs ${computerScore}`);
    } else {
        console.log(`Hasilnya Seri! Skor: ${humanScore} vs ${computerScore}`);
    }
}

// Jalankan game
playGame();