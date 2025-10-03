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

    const fruktSpawnLeft = Math.random() * window.innerWidth / 1.5; // Plasser frukten på en tilfeldig x-posisjon
    const fruktSpawnTop = window.innerHeight - 70; // Plasser frukten på en tilfeldig y-posisjon
    frukt.style.top = fruktSpawnTop + "px"; 
    document.body.appendChild(frukt);

    // Når frukten klikkes, fjern den fra skjermen
    frukt.addEventListener("click", fjernFrukt)

    let posLeft = fruktSpawnLeft;
    let randomSpeed = Math.random() + 0.5;
    let baseTop = fruktSpawnTop;
    let startTime = null;
    const moveDuration = 3000; // total animasjonstid i ms
    const amplitude = 300; // px

    function moveLeft(timestamp) {
        posLeft += randomSpeed;
        frukt.style.left = posLeft + "px";
        requestAnimationFrame(moveLeft);
    }

    function moveUpDownSmooth(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        if (elapsed < moveDuration) {
            // Sine wave for smooth up and down
            const progress = elapsed / moveDuration;
            // Fra baseTop, opp og ned med amplitude
            const offset = Math.sin(progress * Math.PI) * amplitude;
            frukt.style.top = (baseTop - offset) + "px";
            requestAnimationFrame(moveUpDownSmooth);
        } else {
            frukt.remove();
        }
    }

    requestAnimationFrame(moveLeft);
    requestAnimationFrame(moveUpDownSmooth);
}


/* Legg merke til bokstaven e inne i parentesen på linja under. 
Dette betyr at vi sender informasjon om hendelsen (event) som trigget funksjonen inn i funksjonen. e kalles hendelses-objektet */
function fjernFrukt(e)
{
    document.body.removeChild(e.target); 
    //e.target er det elementet som trigget hendelsen, det vil si elementet vi klikket på for å aktivere funksjonen.
}

