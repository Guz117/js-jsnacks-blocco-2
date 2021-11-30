/*
Generatore di “nomi cognomi” casuali: 
prendendo una lista di nomi e una lista di cognomi, 
Gatsby vuole generare una falsa lista di invitati.
*/

const nomi = [
    'Marco',
    'Alessia',
    'Luca',
    'Valeria',
    'Daniele'
];

const cognomi = [
    'Mozzi',
    'Moroni',
    'Cattaneo',
    'Zanchi',
    'Ghilardi'
];

let nomiRundomFromFunction = randomNomiInvitati();
console.log(nomiRundomFromFunction);

let cognomiRundomFromFunction = randomCognomiInvitati();
console.log(cognomiRundomFromFunction);

function randomNomiInvitati() {
    let randomNomi = nomi[Math.floor(Math.random() * nomi.length)];
    return randomNomi;
}

function randomCognomiInvitati() {
    let randomCognomi = cognomi[Math.floor(Math.random() * cognomi.length)];
    return randomCognomi;
}




