// seleziono div element
const element = document.getElementsByClassName("element");
// console.log(element);

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
    }// ciclo infinito
    else if(activeElement === element.length -1){
    
        // tolgo classe active
        element[activeElement].classList.remove("active");

        // torno a indice 0
        activeElement = 0;

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
    }   // ciclo infinito
    else if(activeElement === 0){
        
        // tolgo classe active
        element[activeElement].classList.remove("active");

        // torno a ultimo indice 
        activeElement === element.length - 1;

        // aggiungo classe active al prossimo elemento
        element[activeElement].classList.add("active");
    }
});