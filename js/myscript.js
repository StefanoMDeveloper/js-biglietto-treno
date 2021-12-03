let nKilometri = prompt("Inserisci il numero di Kilometri che vuoi percorrere");
let eta = prompt("Inserisci la tua età");
const euroPerKilometro = 0.21;

let prezzoBiglietto = nKilometri * euroPerKilometro;
let calcoloPrezzo;
console.log(prezzoBiglietto);

if (eta < 18) {
        calcoloPrezzo = (prezzoBiglietto/100) * 20;
        prezzoBiglietto = prezzoBiglietto - calcoloPrezzo;
        document.writeln("Il prezzo del biglietto è: ", parseFloat(prezzoBiglietto).toFixed(2));
}else if (eta >65) {
    calcoloPrezzo = (prezzoBiglietto/100) * 40;
    prezzoBiglietto = prezzoBiglietto - calcoloPrezzo;
    document.writeln("Il prezzo del biglietto è: ", parseFloat(prezzoBiglietto).toFixed(2));
} else {
    document.writeln("Il prezzo del biglietto è: ", parseFloat(prezzoBiglietto).toFixed(2));
}

console.log(prezzoBiglietto);





