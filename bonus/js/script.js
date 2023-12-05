/*
Consegna:
Dato un array di oggetti letterali con: - url dell’immagine - titolo - descrizione
Creare un carosello come nella foto allegata. [vi ripasso quella completa di thumbnails ma quelle rimangono Bonus]

Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.
*/

const images = [ 
    { image: 'img/01.webp', title: 'Marvel\'s Spiderman Miles Morale', text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', }, 
    { image: 'img/02.webp', title: 'Ratchet & Clank: Rift Apart', text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', }, 
    { image: 'img/03.webp', title: 'Fortnite', text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", }, 
    { image: 'img/04.webp', title: 'Stray', text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', }, 
    { image: 'img/05.webp', title: "Marvel's Avengers", text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', } 
];

// seleziono div 
const element = document.getElementsByClassName("element");
const elementContainer = document.querySelector(".element-container");

for (let i = 0; i < images.length; i++){
    let divEelment = 
    `<div class="element">
        <img src="${images[i].image}" alt="immagine">
        <div class="title">${images[i].title}</div>
        <div class="description">${images[i].text}</div>
    </div>`;
    elementContainer.innerHTML += divEelment;
}

// setto elemento con classe active che farà cambiare immagine
let activeElement = 0;

if(activeElement === 0){
    addClass("active");
}

// seleziono next-button
const nextButton = document.querySelector(".next-button");

// azioni al click del bottone next
nextButton.addEventListener("click", function(){

    if(activeElement < element.length -1){
        // tolgo classe active
        removeClass("active");

        // incremento indice dell'elemento per andare all'elemento successivo
        activeElement++;

        // aggiungo classe active al prossimo elemento
        addClass("active");
    }// ciclo infinito
    else if(activeElement === element.length -1){
    
        // tolgo classe active
        removeClass("active");

        // torno a indice 0
        activeElement = 0;

        // aggiungo classe active al prossimo elemento
        addClass("active");
   }
   
});

// seleziono back-button
const backButton = document.querySelector(".back-button");

// azioni al click del bottone back
backButton.addEventListener("click", function(){

    if(activeElement > 0){
        // tolgo classe active all'elemento precedente
        removeClass("active");

        // decremento incide dell'elemento per andare all'elemento precedente 
        activeElement--;

        // aggiungo classe active all'elemento
        addClass("active");
    }   // ciclo infinito
    else if(activeElement === 0){
        
        // tolgo classe active
        removeClass("active");

        // torno a ultimo indice 
        activeElement = 4;

        // aggiungo classe active al prossimo elemento
        addClass("active");
    }
});

// Avvio del timer all'avvio della pagina
startTimer();

// FUNZIONI
// aggiuno classe ad element
function addClass(classname){
    element[activeElement].classList.add(classname);
};

// rimuovo classe ad element
function removeClass(classname){
    element[activeElement].classList.remove(classname);
};

// cambiare slide automaticamente ogni 3 secondi
function startTimer() {
    setInterval(function() {
        if (activeElement < element.length - 1) {
            removeClass("active");
            activeElement++;
            addClass("active");
        } else {
            removeClass("active");
            activeElement = 0;
            addClass("active");
        }
    }, 3000);
}


