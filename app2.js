//document Objet Model elementos de html que permite la interación html y js

let numeroSecreto = generaNumSecreto();
let intentos = 1;

function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value); //parseInt transforma en int el numero que recibe del usuario
    console.log(numeroUsuario); //valida que se este obteniendo el numero del input del usuario

    if (numeroUsuario === numeroSecreto) {
        asignarTexto('p', `Acertaste en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        //usuario no acierta
        if (numeroUsuario > numeroSecreto) {
            asignarTexto('p', 'Anda, es más bajo');
        } else {
            asignarTexto('p', 'Andas bien, dale hacia arriba');
        }
        intentos++;
        limpiarInput();
    }
    return;
}

function limpiarInput() {
    document.querySelector('#valorUsuario').value = '';
}

function generaNumSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}

function condicionesIniciales() {
    //se reestablecen los textos, se inicia el contador de intentos en 1, y genera un nuevo numero secreto
    asignarTexto("h1", "Juego del número secreto"); //llamar esta funcion me permite que se ejecute en el DOM y verla aplicada, de lo contrario se muestra vacia
    asignarTexto('p', "Ingresa un número del 1 al 10");
    numeroSecreto = generaNumSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpia input
    limpiarInput();
    //lee descripcion de condiciones iniciales
    condicionesIniciales();
    //bloquear botón nuevamente
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
