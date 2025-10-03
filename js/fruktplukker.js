// Først, opprett en knapp for å generere fruktene
const button = document.createElement("button");
button.innerHTML = "Generer frukt";
document.body.appendChild(button);
// Når knappen klikkes, generer en ny frukt
button.addEventListener("click", nyFrukt)

function nyFrukt() 
{
    const frukt = document.createElement("div");
    frukt.innerHTML = "🍎"; // Du kan endre dette til forskjellige frukt emojis
    frukt.style.fontSize = "2em";
    frukt.style.position = "absolute";
    const fruktSpawnLeft = Math.random() * window.innerWidth / 1.1; // Plasser frukten på en tilfeldig x-posisjon
    frukt.style.left = fruktSpawnLeft + "px";
    const fruktSpawnTop = window.innerHeight - 70; // Plasser frukten på en tilfeldig y-posisjon
    frukt.style.top = fruktSpawn + "px"; 
    document.body.appendChild(frukt);

    // Når frukten klikkes, fjern den fra skjermen
    frukt.addEventListener("click", fjernFrukt)

    let posLeft = fruktSpawnLeft;

    function moveLeft(timestamp) {
        posLeft += 1
        frukt.style.left = posLeft + "px";
        requestAnimationFrame(moveLeft)
    }
    requestAnimationFrame(moveLeft)
}


/* Legg merke til bokstaven e inne i parentesen på linja under. 
Dette betyr at vi sender informasjon om hendelsen (event) som trigget funksjonen inn i funksjonen. e kalles hendelses-objektet */
function fjernFrukt(e)
{
    document.body.removeChild(e.target); 
    //e.target er det elementet som trigget hendelsen, det vil si elementet vi klikket på for å aktivere funksjonen.
}

