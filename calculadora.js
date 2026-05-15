let numeroEnPantalla = '0';
let numeroPrevio = '';
let operacion = '';
let acabaDePresionarIgual = false;

let pantalla = document.getElementById('pantalla');

function mostrarEnPantalla() {
    pantalla.textContent = numeroEnPantalla;
}

document.querySelector('.botones').addEventListener('click', function(e) {
    let boton = e.target.closest('button');
    if (!boton) return;

    let numero = boton.dataset.numero;
    let signo  = boton.dataset.operador;
    let accion = boton.dataset.accion;

    if (numero !== undefined) {
        if (acabaDePresionarIgual) {
            numeroEnPantalla = numero;
            acabaDePresionarIgual = false;
        } else if (numeroEnPantalla === '0') {
            numeroEnPantalla = numero;
        } else {
            numeroEnPantalla = numeroEnPantalla + numero;
        }
        mostrarEnPantalla();
    }

    if (signo) {
        if (operacion !== '' && acabaDePresionarIgual === false) {
            calcular(true);
        }
        numeroPrevio = numeroEnPantalla;
        operacion = signo;
        acabaDePresionarIgual = false;
        numeroEnPantalla = '0';
    }

    if (accion === 'calcular') calcular();
    if (accion === 'limpiar') limpiarTodo();
    if (accion === 'borrar') borrarUltimo();
    if (accion === 'decimal') ponerPunto();
});

function calcular(encadenado = false) {
    if (operacion === '' || numeroPrevio === '') return;

    let num1 = parseFloat(numeroPrevio);
    let num2 = parseFloat(numeroEnPantalla);
    let resultado;

    if (operacion === '+') resultado = num1 + num2;
    if (operacion === '-') resultado = num1 - num2;
    if (operacion === '*') resultado = num1 * num2;
    if (operacion === '/') {
        if (num2 === 0) {
            resultado = 'Error';
        } else {
            resultado = num1 / num2;
        }
    }

    if (!encadenado) {
        operacion = '';
        numeroPrevio = '';
    }

    if (resultado === 'Error') {
        numeroEnPantalla = 'Error';
    } else {
        numeroEnPantalla = parseFloat(resultado.toFixed(10)).toString();
    }

    acabaDePresionarIgual = true;
    mostrarEnPantalla();
}

function limpiarTodo() {
    numeroEnPantalla = '0';
    numeroPrevio = '';
    operacion = '';
    acabaDePresionarIgual = false;
    mostrarEnPantalla();
}

function borrarUltimo() {
    if (acabaDePresionarIgual) return;
    if (numeroEnPantalla.length > 1) {
        numeroEnPantalla = numeroEnPantalla.slice(0, -1);
    } else {
        numeroEnPantalla = '0';
    }
    mostrarEnPantalla();
}

function ponerPunto() {
    if (acabaDePresionarIgual) {
        numeroEnPantalla = '0.';
        acabaDePresionarIgual = false;
    } else if (!numeroEnPantalla.includes('.')) {
        numeroEnPantalla = numeroEnPantalla + '.';
    }
    mostrarEnPantalla();
}
