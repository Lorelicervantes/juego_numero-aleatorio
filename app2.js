//document Objet Model elementos de html que permite la interación html y js

//Estas 2 lineas fueron sustituidas por la funcion que asigna texto a un elemento
//let parrafo = document.querySelector('p');
//parrafo.innerHTML = "Ingresa un número del 1 al 10";
let numeroSecreto = generaNumSecreto();

function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = document.getElementById('valorUsuario').value;
    // console.log(numeroUsuario); //valida que se este obteniendo el numero del input del usuario
    return;
}

function generaNumSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}

asignarTexto("h1", "Juego del número secreto"); //llamar esta funcion me permite que se ejecute en el DOM y verla aplicada, de lo contrario se muestra vacia
asignarTexto('p', "Ingresa un número del 1 al 10");