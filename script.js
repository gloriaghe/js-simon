// funzione numeri random
let randommynum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// funzione genera numeri da 1 a tot tutti diversi
function creaRandomNum(maxRange, min, max) {
    const arreyInt = [];
    while (arreyInt.length < maxRange) {
        let RandomNumInt = randommynum(min, max);
        if (!arreyInt.includes(RandomNumInt)) {
            arreyInt.push(RandomNumInt);
        }
    }
    return arreyInt;
}


const numberHtml = document.querySelector("h2");

//numeri
const numberRandom = creaRandomNum(5, 1, 100);
numberHtml.innerHTML += numberRandom;
let ArreynumRandom = [];
ArreynumRandom.push(numberRandom);
console.log(ArreynumRandom)

//10 secondi durata numeri
setTimeout(numRandomTime, 10000);

function numRandomTime() {
    numberHtml.innerHTML = "";
}

let numUtenteArray = [];

setTimeout(numRandomTimeUser, 20000);
function numRandomTimeUser() {
    let numeriUtente = prompt("Inserisci i 5 numeri visti");

    console.log(numeriUtente);
    numUtenteArray.push(numeriUtente);
    console.log(numUtenteArray);
}

debugger;
let numIndovinati = [];
if (ArreynumRandom.includes(numUtenteArray)){
    
    numIndovinati.push(numUtenteArray);
    console.log(numIndovinati)
}