// ----------------- Variabler for spill -----------------
let liv = 3;
let score = 0;
let spillIGang = false;
let spawnInterval;
let spawnTid = 1500;   // starter på 1,5 sek
let minSpawnTid = 400; // hvor raskt det maks kan bli

// Poengsystem for fruktene
const poengTabell = {
    "🍎": 50,
    "🍌": 75,
    "🍇": 100,
    "🍒": 150,
    "🍊": 50,
    "🍉": 200
};

// Alle objekter som kan dukke opp
const alternativer = [...Object.keys(poengTabell), "💣"];

// ----------------- Opprett UI -----------------
const info = document.createElement("div");
info.style.position = "fixed";
info.style.top = "10px";
info.style.right = "10px";
info.style.fontSize = "20px";
info.style.fontFamily = "Arial, sans-serif";
info.style.background = "rgba(255,255,255,0.7)";
info.style.padding = "5px 10px";
info.style.borderRadius = "8px";
document.body.appendChild(info);

oppdaterUI();

// Knapp for å starte spillet
const button = document.createElement("button");
button.innerHTML = "Start spillet";
button.className = "btn btn-success m-3";
document.body.appendChild(button);

button.addEventListener("click", startSpill);

// ----------------- Funksjoner -----------------
function startSpill() {
    if (spillIGang) return; // Ikke start flere ganger
    spillIGang = true;
    spawnLoop();
}

function spawnLoop() {
    if (liv <= 0) return;

    nyFrukt();

    // Gjør spillet gradvis raskere (men aldri under minSpawnTid)
    if (spawnTid > minSpawnTid) {
        spawnTid -= 25; 
    }

    spawnInterval = setTimeout(spawnLoop, spawnTid);
}

function nyFrukt() {
    if (liv <= 0) return;

    const frukt = document.createElement("div");

    // Velg tilfeldig symbol
    const tilfeldig = Math.floor(Math.random() * alternativer.length);
    const symbol = alternativer[tilfeldig];
    frukt.innerHTML = symbol;

    // Tilfeldig størrelse mellom 1em og 4em
    const randomSize = (Math.random() * 3 + 1).toFixed(1) + "em";
    frukt.style.fontSize = randomSize;

    frukt.style.position = "absolute";
    frukt.style.left = Math.random() * (window.innerWidth - 50) + 'px';
    frukt.style.top = Math.random() * (window.innerHeight - 50) + 'px';
    frukt.style.cursor = "pointer";

    document.body.appendChild(frukt);

    // Når elementet klikkes
    frukt.addEventListener("click", (e) => fjernElement(e, symbol));
}

function fjernElement(e, symbol) {
    if (symbol === "💣") {
        liv--;
        if (liv <= 0) {
            alert("💥 Boom! Du mistet alle livene. Game over!");
            clearTimeout(spawnInterval);
            spillIGang = false;
            fjernAlleFrukter();
            oppdaterUI();
            return;
        }
    } else {
        // Legg til poeng basert på hvilken frukt du klikket på
        score += poengTabell[symbol] || 0;
    }

    e.target.remove();
    oppdaterUI();
}

function oppdaterUI() {
    info.innerHTML = `❤️ Liv: ${liv} | ⭐ Score: ${score}`;
}

function fjernAlleFrukter() {
    document.querySelectorAll("div").forEach(div => {
        if (alternativer.includes(div.innerHTML)) {
            div.remove();
        }
    });
}
