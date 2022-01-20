/*Regole inserimento dati*/

let eta = parseInt(prompt("Inserisci la tua età"));
console.log(eta);
let km = parseInt(prompt("Inserisci i chilometri da percorrere"));
console.log(km);
let prezzo = 0.21 * km;
console.log(prezzo);




/*Risultato finale*/

if (eta < 18) {

    let scontoMin = prezzo*20/100;
    let prezzoMin = prezzo - scontoMin;
    document.getElementById('prezzo-finale').innerHTML = Math.round(prezzoMin * 100)/100 + "\u20AC" + " , grazie allo sconto per i Minorenni!";
    console.log(prezzoMin);

} else if (eta >= 65) {

    let scontoOver = prezzo*40/100;
    let prezzoOver = prezzo - scontoOver;
    document.getElementById('prezzo-finale').innerHTML = Math.round(prezzoOver * 100)/100 + "\u20AC" + " , grazie allo sconto per gli Over 65!";
    console.log(prezzoOver);

} else {

    document.getElementById('prezzo-finale').innerHTML = Math.round(prezzo * 100)/100 + "\u20AC";
    console.log(prezzo);

}