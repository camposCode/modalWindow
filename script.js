"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal"); 


/************Manipulating classes with JavaScript***********/

const openModal = function(){
    modal.classList.remove("hidden"); //hidden without dot because we are not selecting anything and the dot is used only for selections
    overlay.classList.remove("hidden");
}

const closeModal = function (){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

for(let i = 0; i < btnOpenModal.length; i++){
    
    btnOpenModal[i].addEventListener("click", openModal);

    btnCloseModal.addEventListener("click", closeModal);

    overlay.addEventListener("click", closeModal);
}


//****************"Esc" KeyPress Event*********/

//Called global element because it doesnt happen on one specific element. For keyboard elements we usually list and on the whole document.

//Keydown event fires when we press any button from our keyboard

document.addEventListener("keydown", function(e){
    console.log(e.key);

    if(e.key === "Escape" && !modal.classList.contains("hidden")){
            closeModal();
    }
});





