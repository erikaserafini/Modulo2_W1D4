/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
String: contiene generalmente testo e si dichiara con singoli apici, doppi apici o back-tick. Esempio const name = "Mario"/'Mario'/`Mario`;
Number: contiene numeri sia interi che decimali. Esempio const age = 30;
Boolean: può contenere un valore solo di true o false. Esempio const isValid = false / const isTrue = true;
Array: può contenere tutti i tipi di dati e si dichiara fra parentesi quadre, può contenere anche oggetti. Utile per delle liste non ordinate di dati. Esempio const list = [Mario, 30, Torino];
Oggetti: Si dichiara con parentesi graffe e contiene coppie di chiave-valore. Si utilizza per rappresentare entità reali di un applicazione. Esempio const person = { name:"Mario" surname:"Rossi"};
Null: Viene utilizzato quando decidiamo di inizializzare un variabile con nessun valore. Esempio const test = null;
Undefined: Viene utilizzato quando la variabile non è ancora definita. Esempio const test = undefined;
*/


/* ESERCIZIO 2
 Descrivi cos'Ã¨ un oggetto in JavaScript, con parole tue.
*/

/* 
Un'oggetto è come un contenitore in cui troviamo elementi caratterizzati da nomi e valori, chiave:valore. Viene dichiarato dentro le parentesi graffe.
*/



/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

const sum = 12+20
console.log(sum)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12
console.log(x)

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const name = "Erika"
console.log(name) 

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let diff = 4-x 
console.log(diff) 


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: Ã¨ la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

const name1 = "john"
const name2 = "John"
const isEqual = name1 !== name2 
console.log(isEqual)






