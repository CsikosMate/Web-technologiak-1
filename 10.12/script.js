
var emberek = {
    nev: "Máté",
    eletkor: 21,
    lakcim: "Miskolc"
}

var autok = [
    {
    tipus: "Opel",
    szin: "Fehér",
    evjarat: "2007"
    },
    {
    tipus: "Ford",
    szin: "Piros",
    evjarat: "2014"
    }
]
function emberekKiir() {
    var emberekElement = document.getElementById("emberek")
    emberekElement.innerText = `Név: ${emberek.nev}
            Kor: ${emberek.eletkor}
            Lakcím: ${emberek.lakcim}`;
}

function veletlenSzamKiir() {
    var szam = Math.floor(Math.random() * 100)
    var Element = document.getElementById("szam")
    Element.innerText = szam
}

function autokKiir() {
    var Element = document.getElementById("autok")
    Element.innerText = ""
    for (let index = 0; index < autok.length; index++) {
        const auto = autok[index];
        Element.innerText += `Típus: ${auto.tipus}
        Szín: ${auto.szin}
        Évjárat: ${auto.evjarat}\n`;
        
    }
}

function datumKiir() {
    const datum = new Date();
    var Element = document.getElementById("datum")
    Element.innerText = datum.toLocaleDateString()
}