const container = document.querySelector('#container');
const btnNew = document.querySelector('#btn-new');

function createGrid(size) {
    // Cuci grid lama
    container.innerHTML = '';

    // Kira saiz kotak supaya muat dalam 600px
    const squareSize = 600 / size;

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;

        // Extra credit: Progressive darkening (mula dengan opacity rendah)
        div.style.opacity = "0.1";

        div.addEventListener('mouseenter', () => {
            // 1. Random Color (kalau kotak masih putih)
            if (div.style.backgroundColor === "rgb(255, 255, 255)" || div.style.backgroundColor === "") {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }

            // 2. Tambah gelap 10% setiap kali lalu
            let currentOpacity = parseFloat(div.style.opacity);
            if (currentOpacity < 1) {
                div.style.opacity = (currentOpacity + 0.1).toString();
            }
        });

        container.appendChild(div);
    }
}

btnNew.addEventListener('click', () => {
    let num = prompt("Masukkan jumlah kotak (Max: 100):");
    num = parseInt(num);

    if (num > 0 && num <= 100) {
        createGrid(num);
    } else {
        alert("Sila masukkan nombor antara 1 - 100.");
    }
});

// Start dengan 16x16
createGrid(16);