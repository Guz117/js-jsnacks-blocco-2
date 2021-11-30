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

const random = [];

for (let i = 0; i < 5; i++){
    let nomiRandom = nomi[Math.floor(Math.random() * nomi.length)] + ' ' + cognomi[Math.floor(Math.random() * cognomi.length)];
    random.push(nomiRandom);
}

console.log(random);








