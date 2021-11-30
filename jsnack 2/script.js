/*
Crea un array di numeri interi e fai la somma di tutti
gli elementi che sono in posizione dispari
*/

const number = [
    25,
    42,
    37,
    3,
    97,
    78,
    61,
    88,
    57,
    19
];

let sum = 0;

for (let i = 1; i < number.length; i= i+2) {
    sum += number[i];
    console.log(sum);
}

