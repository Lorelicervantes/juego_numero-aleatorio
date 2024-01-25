let nombreUsuario = prompt("¿Cuál es tu nombre?:");
alert(`Hola ${nombreUsuario}. Bienvenido al juego del número secreto`);

//variables
let numMaximo = 100;
let eleccion = 0;
let intentos = 1;

//calculo del número aleatorio
let numeroSecreto = parseInt(Math.random() * numMaximo) + 1;

//let palabraIntentos = 'intento';
let maxIntentos = 3;

while (eleccion != numeroSecreto) {
    //ya no debe definirse la variable eleccion porque ya la definimos en la parte de arriba
    eleccion = parseInt(prompt(`Para iniciar con el juego, debes indicarme un numero del 1 al ${numMaximo}:`));

    console.log(eleccion);
    /*
    Este código realiza
    la comparación
    */
    console.log(eleccion == numeroSecreto);

    if (eleccion == numeroSecreto) {
        //condicón cumplida
        alert(`Acertaste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}, el numero es ${numeroSecreto}. ¡Enhorabuena!`);
    } else {
        //condición no cumplida
        //entra a nuevo if anidado
        if (eleccion > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //se incrementan los intentos cuando el usuario no acierta
        intentos++;
        //si intenta más de una vez la palabrá intento cambiará a plural
        //palabraIntentos = 'intentos';
        if (intentos > 3) {
            alert(`Llegaste al número máximo de ${maxIntentos} de intentos, el número secreto era: ${numeroSecreto}`);
            break; //detiene el loop rompiendo la condición.
        }
    }
}