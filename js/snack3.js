/* SNACK 3*/
/*
 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */

const zucchine = [
    {
        misura: 10,
        peso: 100
    },

    {
        misura: 20,
        peso: 150
    },

    {
        misura: 8,
        peso: 110
    },

    {
        misura: 12,
        peso: 120
    },

    {
        misura: 9,
        peso: 130
    },

    {
        misura: 13,
        peso: 90
    },

    {
        misura: 21,
        peso: 70
    },

    {
        misura: 18,
        peso: 130
    },

    {
        misura: 22,
        peso: 140
    },

    {
        misura: 25,
        peso: 65
    }
]

// Dividi in due array separati le zucchine che misurano meno o più di 15cm.

const miniZucchine = [];
const maxiZucchine = [];

zucchine.forEach((filter) => {

    if (filter.misura <= 15) {
        miniZucchine.push(filter);
    } else {
        maxiZucchine.push(filter);
    }
})


console.log('Le zucchine piccole sono: ', miniZucchine);
console.log('Le zucchine grandi sono: ', maxiZucchine);

// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

let pesoMiniZucchine = 0;

for (let i = 0; i < miniZucchine.length; i++) {
    pesoMiniZucchine += miniZucchine[i].peso;
}

console.log('Peso totale delle mini Zucchine: ', pesoMiniZucchine);

let pesoMaxiZucchine = 0;

for (let i = 0; i < maxiZucchine.length; i++) {
    pesoMaxiZucchine += maxiZucchine[i].peso;
}

console.log('Peso totale delle maxi Zucchine: ', pesoMaxiZucchine);