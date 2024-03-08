/* 
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.

*/
// let squareWrapper = document.createElement('div');
// squareWrapper.className = 'd-flex justify-content-between align-content-center flex-wrap gap-2';
// squareWrapper.setAttribute('id', 'content');

let numBox = 100;
let tmpHtml = '';
let num = 0

for(let i = 1; i < numBox; i++){
    if((i % 3 === 0) && (i % 5 === 0)){
        num = 'fizzbuzz';
        console.log(num);
    }
    else if(i % 5 ===0){
        num = 'buzz';
        console.log(num);
    }else if(i % 3 === 0){
        // tmpHtml += `<div class="box fizz"> fizz </div>`;
         num = 'fizz'
         console.log(num)
     }
     else{
        // tmpHtml += `<div class="box"> ${i + 1} </div>`;
        num = i;
        console.log(num);
    }
}
// squareWrapper.innerHTML = tmpHtml;
// let container = document.querySelector('container');
// container.append(squareWrapper);
