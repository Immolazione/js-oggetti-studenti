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
const listaStudenti = document.getElementById('lista-studenti');

// ! 1 CREIAMO OGGETTO DESCRIZIONE STUDENTE
const studente = {
    nome: 'Federico',
    cognome: 'Bernardi', 
    età: '24'
}
console.log(studente);


// ! 2 STAMPARE A SCHERMO
for (let key in studente) {
    const datiStudente = `Nome: ${studente['nome']} | cognome: ${studente['cognome']} | età: ${studente['età']}`;
    printStudente.innerHTML = datiStudente;
}

// ! 3 CREO ARRAY OGGETTI STUDENTI
let alunni = [
    {
        nome: 'Antonio',
        cognome: 'Nicodemo', 
        età: '25'
    },
    {
        nome: 'Pietro',
        cognome: 'Scandola', 
        età: '23'
    }
];
console.log(alunni);

// ! 4 CICLO SU TUTTI GLI STUDENTI E STAMPO
for (i = 0; i < alunni.length; i++) {
    const datiStudente = alunni[i];
    // listaStudenti.innerHTML += `${datiStudente['nome']}, ${datiStudente['cognome']}, ${datiStudente['età']} | `;

    const alunnoPerRiga = document.createElement('p');
    alunnoPerRiga.appendChild;
    alunnoPerRiga.innerHTML = `${datiStudente['nome']}, ${datiStudente['cognome']}, ${datiStudente['età']}`;
    listaStudenti.innerHTML = alunnoPerRiga;
    console.log(alunnoPerRiga);
};