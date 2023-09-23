/* --- Reto 1 --- */

/* function promedio(note1, note2, note3, note4) {
    return (note1 + note2 + note3 + note4) / 4;
}

console.log(promedio(20, 18, 17, 16)); */

/* --- Reto 2 --- */

/* const base = 24;
const altura = 56;

function areaRectangulo(b, h) {
    return b * h;
}

console.log(areaRectangulo(base, altura)); */

/* --- Reto 3 --- */

/* const y = 34;
const u = 34;

function areaTriangulo(base, height) {
    return (base * height) / 2;
}

console.log(areaTriangulo(y, u)); */

/* --- Reto 4 --- */

/* const radio = 25;

function areaCircunferencia(r) {
    return 3.14 * r ** 2;
}

console.log(areaCircunferencia(radio)); */

/* --- Reto 5 --- */

/* const sueldo = 100;

const sueldoSemanal = (number) => {
    return number * (8 * 7);
}

console.log(sueldoSemanal(sueldo)); */

/* --- Reto 6 --- */

/* function promedioDolarSoles(soles) {
    return Math.round(soles / 3.73);
}

console.log(promedioDolarSoles(40)); */

/* --- Reto 7 --- */

/* const numbers = [4, 8, 5, 3];

function finalIndex(array) {
    const ultimeIndex = array[array.length - 1];
    return ultimeIndex;
}

console.log(finalIndex(numbers)); */

/* --- Reto 8 --- */

/* const array = [2, 7, 5, 11];

array.push(9);

console.log(array); */

/* --- Reto 9 --- */

/* function promedioArreglo(array) {
    if (array.length === 0) {
        return 0;
    }

    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }

    const promedio = suma / array.length;
    return promedio;
}

const entrada = [2, 6, 1, 8];
console.log('Salida: ', promedioArreglo(entrada)); */

/* --- Reto 10 --- */

/* function arrayPares(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            suma += arreglo[i];
        }
    }
    return suma;
}

const numerosEntrada = [1, 2, 5, 8, 9, 12, 2, 3];
console.log('Salida: ', arrayPares(numerosEntrada)); */

/* --- Reto 11 --- */

/* function booleanoArray(array1, array2) {

    let arrayNuevo = [...array1, ...array2];

    if (arrayNuevo.length >= 10) {
        return true;
    }
    return false;
}

const urano = [2, 5, 2, 3, 7, 2];
const saturno = [1, 5, 3, 3];

console.log(booleanoArray(urano, saturno)); */

/* --- Reto 12 --- */

/* function funcionArray(param1, param2) {

    const result = [...param1].map((valor, indice) => valor * 2 + param2[indice] * 2);

    return result;
}

const arreglo1 = [2, 5, 2];
const arreglo2 = [1, 5, 3];

console.log(funcionArray(arreglo1, arreglo2)); */

/* --- Reto 13 --- */

/* let personas = [
    { nombre: 'boris', hobby: 'correr', salario: 2000 },
    { nombre: 'luis', hobby: 'cantar', salario: 1500 },
    { nombre: 'carmen', hobby: 'cocinar', salario: 800 },
    { nombre: 'percy', hobby: 'cantar', salario: 1100 },
    { nombre: 'rosa', hobby: 'leer', salario: 3000 },
];

const salarioMayor = personas.find((person) => person.salario > 1200);
const singPerson = personas.filter((person) => person.hobby === 'cantar');
const booleanPerson = personas.some((person) => person.hobby === 'leer');

console.log(salarioMayor);
console.log(singPerson);
console.log(booleanPerson); */

/* --- Reto 14 --- */

let diasPersonas = [
    { dia: 'Lunes', persona: 'María' },
    { dia: 'Martes', persona: 'Luis' },
    { dia: 'Miércoles', persona: 'Antonia' },
    { dia: 'Jueves', persona: 'Pedro' },
    { dia: 'Viernes', persona: 'Marisa' },
];

let diaConsulta = prompt('Ingrese el día de la consulta');
let personaConsulta = prompt('Ingrese el nombre de la persona que desea consultar');

const encargoPersona = (param1, param2) => {
    const result = diasPersonas.find((p) => param1 && param2 === p.dia && p.persona);
    alert(result);
}

encargoPersona(diaConsulta, personaConsulta);