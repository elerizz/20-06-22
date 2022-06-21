// 1 -> Sciviamo una funzione che accetta due parametri e torna la somma di entrambi
// sum(1,3); -> 4

const sum = function (num1, num2) {
  return num1 + num2;
};

console.log(sum(1, 3));

// 2 -> Scriviamo una versione migliorata della prima che controlla l'esistenza dei due parametri e che siano numeri
// sum(1) -> Errore in console che spiega cosa non va

const sumBetter = function (num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    console.error("Per favore inserisci un numero");
  } else {
    console.log(num1 + num2);
  }
};

// 3 -> Scriviamo come per il punto due, anche per moltiplicazione, divisione, e sottrazione
// div(2,0) -> il programma div deve dire che non posso dividere per 0

//moltiplicazione
const mult = function (num1, num2) {
  return num1 * num2;
};

console.log(mult(1, 3));

//sottrazione
const sub = function (num1, num2) {
  return num1 - num2;
};

console.log(sub(1, 3));

// divisione
const div = function (num1, num2) {
  if (num2 === 0) {
    console.log("non puoi dividere per 0");
  } else {
    console.log(num1 / num2);
  }
};

div(4, 2);

// 4 -> Scriviamo una funzione che possa eseguire le 4 precedenti
// es:
// operation( sum, 1 , 3 ) -> 4
// operation( div, 1 , 0 ) -> Errore: non divisibile per zero :(

const calc = function (operator, num1, num2) {
  return operator(num1, num2);
};

console.log(calc(sum, 1, 3));
console.log(calc(sub, 7, 5));
console.log(calc(div, 15, 5));
console.log(calc(mult, 4, 4));
