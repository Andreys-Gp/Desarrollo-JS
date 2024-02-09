/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe.miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
 */
const contarLetras = (cadena = "") => {
    if (cadena = "") return console.log("no ingresaste una cadena texto");
    if (typeof cadena !== "string") return console.log(`el valor ${cadena} ingresado no es una cadena`);
    let vocales = 0,
        consonantes = 0;
    cadena = cadena.toLocaleLowerCase;
    for (let letra of cadena) {

        if (/[aeiou]/.test(letra)) {
            vocales++;
        }
        if (/[bcdfghjklmñpqrstvwxyz]/.test(letra)) {
            consonantes++;
        }
    }
    return console.log({
        cadena,
        vocales,
        consonantes
    });
}
contarLetras

/* 19) Programa una función que valide que un texto sea un nombre válido, pe.miFuncion("Jonathan MirCha") devolverá verdadero.
 */

const validarNombre = (nombre = "") => {
    if (!nombre) return console.log("no ingresaste un nombre");
    if (typeof nombre !== "string") console.log(`el valor "${nombre}" ingresa no es una cadena de texto`);
    let ecpReg = /^[A-Za-z\s]+$/g.test(nombre);
    return (ecpReg) ?
        console.log(`"${nombre}" es un nombre valido`) :
        console.log(`"${nombre}" no es un nombre valido`);
}
validarNombre();
validarNombre(3);
validarNombre("brayan")



/* 20) Programa una función que valide que un texto sea un email válido, pe.miFuncion("jonmircha@gmail.com") devolverá verdadero. */

const validarCorreo = (correo = "") => {
    if (!correo) return console.log("no ingresaste un nombre");
    if (typeof correo !== "string") console.log(`el valor "${correo}" ingresa no es una cadena de texto`);

    let ecpReg = /[a-z0-9]+(\.[a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(correo);
    return (ecpReg) ?
        console.log(`"${correo}" es un correo valido`) :
        console.log(`"${correo}" correo invalido`);
}

validarCorreo()
validarCorreo("brayan@gmail.com");

/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe.mi_funcion([1, 4, 5]) devolverá[1, 16, 25].
 */

const devolverCuadrados = (arr = undefined) => {
    if (arr === undefined) return console.log("no ingresaste arreglo numeros");
    if (!(arr instanceof Array)) return console.log("el valor ingresado no es un arreglo");
    if (arr.length === 0) return console.log("el arreglo esta vacio");
    for (let num of arr) {
        if (typeof num !== "number") return console.log(`el valor "${num}" no es numerico`);
    }
    const newArr = arr.map(el => el * el);
    return console.log(`arreglo origianl: ${arr}, arreglo elevado cuadrado: ${newArr}`);

}

devolverCuadrados([1, 2, 3]);
devolverCuadrados([]);


/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe.miFuncion([1, 4, 5, 99, -60]) devolverá[99, -60].
 */
const arrMinMax = (arr2 = undefined) => {
    if (arr2 === undefined) return console.log("no ingresaste arreglo numeros");
    if (!(arr2 instanceof Array)) return console.log("el valor ingresado no es un arreglo");
    if (arr2.length === 0) return console.log("el arreglo esta vacio");
    for (let num of arr2) {
        if (typeof num !== "number") return console.log(`el valor "${num}" no es numerico`);
    }
    return console.log(`el arreglo original:${arr2}\nvalor mayor: ${Math.max(...arr2)}, \nvalor menor: ${Math.min(...arr2)}`);
}
arrMinMax([1, 2, 2])

/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe.miFuncion([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) devolverá {
    pares: [2, 4, 6, 8, 0],
    impares: [1, 3, 5, 7, 9]
 */

const separarParImpar = (arr3 = undefined) => {
    if (arr3 === undefined) return console.log("no ingresaste arreglo numeros");
    if (!(arr3 instanceof Array)) return console.log("el valor ingresado no es un arreglo");
    if (arr3.length === 0) return console.log("el arreglo esta vacio");
    for (let num of arr3) {
        if (typeof num !== "number") return console.log(`el valor "${num}" no es numerico`);
    }
    return console.log({
        pares: arr3.filter(num => num % 2 === 0),
        impar: arr3.filter(num => num % 2 === 1)
    })
}
separarParImpar([2, 1, 3])


/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe.miFuncion([7, 5, 7, 8, 6]) devolverá {
asc: [5, 6, 7, 7, 8],
desc: [8, 7, 7, 6, 5]
}.
 */
const ordenarArreglo = (arr4 = undefined) => {
    if (arr4 === undefined) return console.log("no ingresaste arreglo numeros");
    if (!(arr4 instanceof Array)) return console.log("el valor ingresado no es un arreglo");
    if (arr4.length === 0) return console.log("el arreglo esta vacio");
    for (let num of arr4) {
        if (typeof num !== "number") return console.log(`el valor "${num}" no es numerico`);
    }
    console.log({
        arr4,
        asc: arr4.map(el => el).sort(),
        des: arr4.map(el => el).sort().reverse()
    })
}
ordenarArreglo([1, 2, 3, 4]);


/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe.miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá["x", 10, 2, "10", true].
 */

const eliminarDuplicados = (arr5 = undefined) => {
    if (arr5 === undefined) return console.log("no ingresaste arreglo numeros");
    if (!(arr5 instanceof Array)) return console.log("el valor ingresado no es un arreglo");
    if (arr5.length === 0) return console.log("el arreglo esta vacio");
    if (arr5.length === 1) return console.log("el arreglo debe tener por lo menos dos elementos");
    /*  return console.log({
        original: arr5,
        sinDuplicados: arr5.filter((value, index, self) => self.indexOf(value) === index)
    })
 */
    return console.log({
        original: arr5,
        sinDuplicados: [...new Set(arr5)]
    })

}
eliminarDuplicados()


/* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe.promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]) devolverá 4.5. */

/* 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD. -
    Todos los datos del objeto son obligatorios. -
    Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los
7 restantes números. -
    Valida que el título no rebase los 100 caracteres. -
    Valida que el director no rebase los 50 caracteres. -
    Valida que el año de estreno sea un número entero de 4 dígitos. -
    Valida que el país o paises sea introducidos en forma de arreglo. -
    Valida que los géneros sean introducidos en forma de arreglo. -
    Valida que los géneros introducidos esten dentro de los géneros
aceptados * . -
    Crea un método estático que devuelva los géneros aceptados * . -
    Valida que la calificación sea un número entre 0 y 10 pudiendo ser
decimal de una posición. -
    Crea un método que devuelva toda la ficha técnica de la película. -
    Apartir de un arreglo con la información de 3 películas genera 3
instancias de la clase de forma automatizada e imprime la ficha técnica
de cada película.

    *Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary, Drama, Family, Fantasy, Film Noir, Game - Show, History, Horror, Musical, Music, Mystery, News, Reality - TV, Romance, Sci - Fi, Short, Sport, Talk - Show, Thriller, War, Western. */