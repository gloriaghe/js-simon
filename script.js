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


const numberHtml = document.querySelector("h1");

//numeri
const numberRandom = creaRandomNum(5, 1, 100);
numberHtml.innerHTML += "I tuoi numeri da ricordare sono: " + numberRandom;
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
    let numeriUtenteUno = parseInt(prompt("Inserisci il primo numero"));
    let numeriUtenteDue = parseInt(prompt("Inserisci il secondo numero"));
    let numeriUtenteTre = parseInt(prompt("Inserisci il terzo numero"));
    let numeriUtenteQuattro = parseInt(prompt("Inserisci il quarto numero"));
    let numeriUtentecinque = parseInt(prompt("Inserisci il quinto numero"));
    numUtenteArray.push(numeriUtenteUno);
    numUtenteArray.push(numeriUtenteDue);
    numUtenteArray.push(numeriUtenteTre);
    numUtenteArray.push(numeriUtenteQuattro);
    numUtenteArray.push(numeriUtentecinque);

    

   
    console.log(numUtenteArray);

    let numIndovinati = [];

    for (let i= 0; i<numberRandom.length; i++)  {
    
        if (numUtenteArray.includes(numberRandom[i])){
            
        
            numIndovinati.push(numberRandom[i]);
        
           
        
        }
    }
    console.log(numIndovinati)
    document.querySelector("h2").innerHTML= "I numeri che hai indovinato sono: " + numIndovinati;
}

