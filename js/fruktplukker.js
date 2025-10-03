// Først, opprett en knapp for å generere fruktene
const button = document.createElement("button");
button.innerHTML = "Generer frukt";
document.body.appendChild(button);

// Når knappen klikkes, generer en ny frukt eller bombe
button.addEventListener("click", nyFrukt)

function nyFrukt() 
{
    const frukt = document.createElement("div");

    // Flere alternativer med frukter + en bombe
    const alternativer = ["🍎", "🍌", "🍇", "🍒", "🍊", "🍉", "💣"];
    const tilfeldig = Math.floor(Math.random() * alternativer.length);

    frukt.innerHTML = alternativer[tilfeldig];
    frukt.style.fontSize = "2em";
    frukt.style.position = "absolute";
    frukt.style.left = Math.random() * (window.innerWidth - 50) + 'px';
    frukt.style.top = Math.random() * (window.innerHeight - 50) + 'px';
    document.body.appendChild(frukt);
 
    // Når frukten eller bomben klikkes, fjern den fra skjermen
    frukt.addEventListener("click", (e) => fjernFrukt(e, frukt.innerHTML))
}

function fjernFrukt(e, symbol)
{
    if (symbol === "💣") {
        alert("Boom! Bomben eksploderte 💥");
        // Fjern ALLE frukter og bomber fra skjermen
        document.querySelectorAll("div").forEach(div => {
            if (div.innerHTML.match(/🍎|🍌|🍇|🍒|🍊|🍉|💣/)) {
                div.remove();
            }
        });
    } else {
        // Fjern bare frukten du klikket på
        e.target.remove();
    }
}
