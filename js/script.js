console.log('JS OK');

// Descrizione:
// 1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// 2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// 3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
// 4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
// 5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.
// BONUS:
// Usiamo il DOM per stampare e chiedere le informazioni all'utente!

// RECUPERO ELEMENTI
const printStudente = document.getElementById('studente');

// ! 1 CREIAMO OGGETTO DESCRIZIONE STUDENTE
const studente = {
    nome: 'Federico',
    cognome: 'Bernardi', 
    età: '24'
}
console.log(studente);



for (let key in studente) {
    const datiStudente = `Nome: ${studente['nome']} | cognome: ${studente['cognome']} | età: ${studente['età']}`;
    printStudente.innerHTML = datiStudente;
}

let alunni = [
    {
        nome: 'Antonio',
        cognome: 'Nicodemo', 
        età: '24'
    },
    {
        nome: 'Federico',
        cognome: 'Bernardi', 
        età: '24'
    }
];