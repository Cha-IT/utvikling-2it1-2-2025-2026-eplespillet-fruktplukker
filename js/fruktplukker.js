// Først, opprett en knapp for å generere fruktene
const button = document.createElement("button");
button.innerHTML = "Generer frukt";
document.body.appendChild(button);
// Når knappen klikkes, generer en ny frukt
button.addEventListener("click", nyFrukt)

const OppLvL = document.querySelector("#OppgraderLvL")

let OppgraderLvL = 2

OppLvL.innerHTML = OppgraderLvL

let OppgraderKost = 10

let eplePoeng = document.querySelector("#Poeng")
eplePoeng.innerHTML = 0
let Poeng = 0

function nyFrukt() 
{
    let whichFruit = Math.floor(Math.random() * OppgraderLvL)

    let pointsGiven = 0

    const frukt = document.createElement("div");
    if (whichFruit == 0) {
        frukt.type = {
            navn: "bombe",
            icon: "💣",
            poeng: -10
        }
        frukt.innerHTML = frukt.type.icon; // Du kan endre dette til forskjellige frukt emojis
        
    }
    else if (whichFruit == 1) {
        frukt.type = {
            navn: "eple",
            icon: "🍎",
            poeng: 1
        }
        frukt.innerHTML = frukt.type.icon; // Du kan endre dette til forskjellige frukt emojis
        
    }

    else if (whichFruit == 2) {
        frukt.type = {
            navn: "banan",
            icon: "🍌",
            poeng: 3
        }
        frukt.innerHTML = frukt.type.icon; // Du kan endre dette til forskjellige frukt emojis
        
    }

    else if (whichFruit == 3) {
        frukt.type = {
            navn: "Appelsin",
            icon: "🍊",
            poeng: 5
        }
        frukt.innerHTML = frukt.type.icon; // Du kan endre dette til forskjellige frukt emojis
        
    }

    else if (whichFruit == 4) {
        frukt.type = {
            navn: "vannMelon",
            icon: "🍉",
            poeng: 10
        }
        frukt.innerHTML = frukt.type.icon; // Du kan endre dette til forskjellige frukt emojis
        
    }

    

    frukt.style.fontSize = "3em";
    frukt.style.position = "absolute";
    frukt.style.left = Math.random() * window.innerWidth + 'px'; // Plasser frukten på en tilfeldig x-posisjon
    frukt.style.top = Math.random() * window.innerHeight + 'px'; // Plasser frukten på en tilfeldig y-posisjon
    document.body.appendChild(frukt);
    
 
    // Når frukten klikkes, fjern den fra skjermen
    frukt.addEventListener("click", fjernFrukt)
}

    
/* Legg merke til bokstaven e inne i parentesen på linja under. 
Dette betyr at vi sender informasjon om hendelsen (event) som trigget funksjonen inn i funksjonen. e kalles hendelses-objektet */
function fjernFrukt(e)
{
    document.body.removeChild(e.target); 
    Poeng = Poeng + e.target.type.poeng
    eplePoeng.innerHTML = Poeng
    
    //e.target er det elementet som trigget hendelsen, det vil si elementet vi klikket på for å aktivere funksjonen.
}

const Oppgrader = document.querySelector("#Oppgrader")



Oppgrader.onclick = function() {
    if (eplePoeng.innerHTML == OppgraderKost)
        OppgraderLvL+= 1
        Poeng = Poeng - OppgraderKost
        eplePoeng.innerHTML=Poeng
        OppgraderKost*= 5
}