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

const array = [2, 7, 5, 11];

array.push(9);

console.log(array);

/* --- Reto 9 --- */

function promedioArreglo(array) {
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
console.log('Salida: ', promedioArreglo(entrada));