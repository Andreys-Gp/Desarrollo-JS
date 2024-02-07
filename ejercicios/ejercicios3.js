/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe.miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
 */
const contarLetras = (cadena = "") => {
    if (cadena = "") return console.log("no ingresaste una cadena texto");
    if (typeof cadena !== "string") return console.log(`el valor ${cadena} ingresado no es una cadena`);
    let vocales = 0,
        consonantes = 0;
    cadena = cadena.toLowerCase;
    for (let letra of cadena) {
        if (/[aeiou]/.test(letra)) vocales++;

        if (/[bcdfghjklmñpqrstvwxyz]/.test(letra)) consonantes++;

    }
    return console.log({
        cadena,
        vocales,
        consonantes
    });
}

/* 19) Programa una función que valide que un texto sea un nombre válido, pe.miFuncion("Jonathan MirCha") devolverá verdadero.
 */

/* 20) Programa una función que valide que un texto sea un email válido, pe.miFuncion("jonmircha@gmail.com") devolverá verdadero. */

/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe.mi_funcion([1, 4, 5]) devolverá[1, 16, 25].
 */

/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe.miFuncion([1, 4, 5, 99, -60]) devolverá[99, -60].
 */

/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe.miFuncion([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) devolverá {
    pares: [2, 4, 6, 8, 0],
    impares: [1, 3, 5, 7, 9]
 */