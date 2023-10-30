function ShakeFunctie(woordDatGeschudtMoetWorden) {
    let letters = woordDatGeschudtMoetWorden.split('');
    for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    return letters.join('');
}



let woord1 = ShakeFunctie("appel");
console.log(woord1);
let woord2 = ShakeFunctie("Ananas");
console.log(woord2);
let woord3 = ShakeFunctie("peer");
console.log(woord3);

//C//
function leeftijd(jaar,maand,dag){


    let now = new Date();
    let birth = new Date(jaar, maand, dag); 
    let miliseconds = now-birth;
    let geboortejaar = miliseconds/1000/60/60/24/365
    return geboortejaar
    }
    
    let antwoord = leeftijd(2006,9,7);
    console.log(antwoord)