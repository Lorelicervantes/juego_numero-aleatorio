//document Objet Model elementos de html que permite la interación html y js

//Estas 2 lineas fueron sustituidas por la funcion que asigna texto a un elemento
//let parrafo = document.querySelector('p');
//parrafo.innerHTML = "Ingresa un número del 1 al 10";

function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function intentoUsuario() {
    alert('clic desde el botón');
}

asignarTexto("h1", "Juego del número secreto"); //llamar esta funcion me permite que se ejecute en el DOM y verla aplicada, de lo contrario se muestra vacia
asignarTexto('p', "Ingresa un número del 1 al 10");