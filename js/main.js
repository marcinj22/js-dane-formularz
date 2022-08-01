let nazwa = document.getElementById("name");
let nazwa2 = document.getElementById("surname");
let numerTelefonu = document.getElementById("phone")
let przycisk = document.querySelector("button"); 
let paragrafime = document.querySelector("p#name")
let paragrafnazwisko = document.querySelector("p#surname")
let paragraftelefon = document.querySelector("p#phone") 

 przycisk.onclick = function() {
    paragrafime.textContent = nazwa.value;
    paragrafnazwisko.textContent = nazwa2.value;
    paragraftelefon.textContent = numerTelefonu.value;
 }

