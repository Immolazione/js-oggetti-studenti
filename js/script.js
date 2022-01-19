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
const formName = document.getElementById('fname').value;
const formSurname = document.getElementById('lname').value;
const formAge = document.getElementById('age').value;
const generateButton = document.getElementById('generate');

// ! 1 CREIAMO OGGETTO DESCRIZIONE STUDENTE
const studente = {
    nome: 'Federico',
    cognome: 'Bernardi', 
    età: '24'
}
console.log(studente);

let datiStudente = '';
// ! 2 STAMPARE A SCHERMO
for (let key in studente) {
    console.log(key, studente[key]);
    // const datiStudente = `Nome: ${studente['nome']} | cognome: ${studente['cognome']} | età: ${studente['età']}`;
    datiStudente += key + ': ' + studente[key] + ',';
};
printStudente.innerHTML = datiStudente;

// ! 3 CREO ARRAY OGGETTI STUDENTI
let alunni = [
    alunno1 = {
        nome: 'Antonio',
        cognome: 'Nicodemo', 
        età: '25'
    },
    alunno2 = {
        nome: 'Pietro',
        cognome: 'Scandola', 
        età: '23'
    }
];
console.log(alunni);

// ! 5 CHIEDO ALL'UTENTE DI INSERIRE UNO STUDENTE

alunno3 = {
    nome: prompt("Inserisci il nome del nuovo studente").trim(),
    cognome: prompt("Inserisci il cognome del nuovo studente").trim(),
    età: prompt("Inserisci l'età del nuovo studente").trim()
}
console.log(alunno3);
alunni.push(alunno3);




// ! 4 CICLO SU TUTTI GLI STUDENTI E STAMPO
for (i = 0; i < alunni.length; i++) {
    const nomeStudente = alunni[i]['nome'];
    const cognomeStudente = alunni[i]['cognome'];
    const etàStudente = alunni[i]['età'];

    // listaStudenti.innerHTML += `${datiStudente['nome']}, ${datiStudente['cognome']}, ${datiStudente['età']} | `;

    const alunnoPerRiga = document.createElement('p');
    alunnoPerRiga.innerHTML = `${nomeStudente}, ${cognomeStudente}, ${etàStudente}`;
    listaStudenti.appendChild(alunnoPerRiga);
    console.log(alunnoPerRiga);
};

// ! BONUS

generateButton.addEventListener('click', function(){

    alunno4 = {
        nome: formName,
        cognome: formSurname,
        età: formAge
    }
    console.log(alunno4);
    alunni.push(alunno4);

    const nomeStudente = alunno4['nome'];
    const cognomeStudente = alunno4['cognome'];
    const etàStudente = alunno4['età']

    const alunnoPerRiga = document.createElement('p');
    alunnoPerRiga.innerHTML = `${nomeStudente}, ${cognomeStudente}, ${etàStudente}`;
    listaStudenti.appendChild(alunnoPerRiga);
    console.log(alunnoPerRiga);
})