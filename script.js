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

//10 secondi durata numeri
setTimeout(numRandomTime, 10000);

function numRandomTime() {
    numberHtml.innerHTML = "";
}



