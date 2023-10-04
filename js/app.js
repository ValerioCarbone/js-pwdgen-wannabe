// # GENERATORE DI PASSWORD

//  - Chiedere all'utente il suo nome
//    - Dichiarare una variabile
//    - Assegnare alla variabile il risultato del prompt con cui chiediamo all'utente il suo nome

const userName = prompt('Ciao, qual è il tuo nome?');
console.log(userName);

//  - Chiedere all'utente il suo cognome
//    - Dichiarare una variabile
//    - Assegnare alla variabile il risultato del prompt con cui chiediamo all'utente il suo cognome

const userSurname = prompt('Qual è il tuo cognome?');
console.log(userSurname);

// - Chiedere all'utente il suo colore preferito
// - Dichiarare una variabile
// - Assegnare alla variabile il risultato del prompt con cui chiediamo all'utente il suo colore preferito

const userFavColor = prompt('Qual è il tuo colore preferito?');
console.log(userFavColor);

//  - Generare un numero casuale
//    - Dichiarare una variabile 
//    - Assegnare alla variabile il risultato di un generatore casuale di numeri

const randomNumber = getRandomInt(999);
console.log(randomNumber);

//  - Generare una variabile che concatena le quattro variabili precedenti in un'unica stringa
//    - Dichiarare una variabile
//    - Assegnare alla variabile il risultato della concatenazione delle quattro variabili precedenti

const passwordGenerated = userName + userSurname + userFavColor + randomNumber;
console.log(passwordGenerated);

//  - Mostrare all'utente il risultato della password generata
//    - Inserire nell'html un elemento che contenga un testo
//    - Richiamare nel js l'id dell'elemento
//      - Dichiarare una variabile
//      - Assegnare a tale variabile il contenuto dell'elemento richiamato tramite id
//    - Modificare tale elemento con il risultato della variabile di concatenazione

const yourPassword = document.getElementById('your_password');
yourPassword.innerHTML = passwordGenerated;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};