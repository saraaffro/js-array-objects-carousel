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
const divContainer = document.querySelector(".container");

const carousel = 
`<div class="carousel">
    <div class="element-container">
        <div class="element active">
            <img src="${images[0].image}" alt="immagine">
        </div>
        <div class="element">
            <img src="${images[1].image}" alt="immagine">
        </div>
        <div class="element">
            <img src="${images[2].image}" alt="immagine">
        </div>
        <div class="element">
            <img src="${images[3].image}" alt="immagine">
        </div>
        <div class="element">
            <img src="${images[4].image}" alt="immagine">
        </div>
        <div class="next-button"><i class="fa-solid fa-arrow-up"></i></div>
        <div class="back-button"><i class="fa-solid fa-arrow-down"></i></div>
    </div>
</div>`

divContainer.innerHTML += carousel;

// setto elemento con classe active che farà cambiare immagine
let activeElement = 0;

// seleziono next-button
const nextButton = document.querySelector(".next-button");

// azioni al click del bottone next
nextButton.addEventListener("click", function(){

    if(activeElement < element.length -1){
        // tolgo classe active
        element[activeElement].classList.remove("active");

        // incremento indice dell'elemento per andare all'elemento successivo
        activeElement++;

        // aggiungo classe active al prossimo elemento
        element[activeElement].classList.add("active");
    }
});

// seleziono back-button
const backButton = document.querySelector(".back-button");

// azioni al click del bottone back
backButton.addEventListener("click", function(){

    if(activeElement > 0){
        // tolgo classe active all'elemento precedente
        element[activeElement].classList.remove("active");

        // decremento incide dell'elemento per andare all'elemento precedente 
        activeElement--;

        // aggiungo classe active all'elemento
        element[activeElement].classList.add("active");
    }
});