/* SNACK 2*/
/*
 * Si scriva una funzione che accetti tre argomenti, 
 * un array e due numeri (a più piccolo di b). 
 * La funzione ritornerà un nuovo array con i valori 
 * che hanno la posizione compresa tra i due numeri.
 */

function creaNuovoArray(array, numA, numB) {
    const rangeArray = [];
    for (let i = 0; i < 100; i++) {
        //console.log(array[i]);
        if (numA <= array[i] && numB >= array[i]) {
            rangeArray.push(array[i]);
        }
    }
    return rangeArray;
}

const nuovoArray = [];
for (let i = 1; i <= 100; i++) {
    nuovoArray.push(i);
}
//console.log(nuovoArray);

const numeroA = 20;
const numeroB = 35;

const rangeArray = creaNuovoArray(nuovoArray, numeroA, numeroB);
console.log(rangeArray);