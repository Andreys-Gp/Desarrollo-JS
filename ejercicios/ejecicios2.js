/*       5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
        6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
        7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
        8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
 */

//5)

/* const invertirCadena=(cadena="")=>(!cadena)
 ? console.warn("no ingresaste cadena de texto")
 : console.info(cadena.split("").reverse().join(""))

 invertirCadena()
 invertirCadena("Hola como estas")
 console.clear() */

//6)
/* const tectoEnCadena=(cadena="",texto="")=>{ (!cadena)
            ? console.warn("no ingresaste cadena de texto")
            : console.info(cadena.split("").reverse().join(""))
            let i=0;
            let contador=0;
            while(i !==-1){
                i=cadena.indexOf(texto,i)
                if (i !==-1) {
                    i++
                    contador++
                }
            }
            return console.info(`la palabra ${texto} se repite ${contador}`)
        }
        tectoEnCadena()
        tectoEnCadena("sed cillum eiusmod dolor sed deserunt consectetur consectetur est fugiat","dolor")

    console.clear() */

/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
 */

const palindromo = (palabra = "") => {
    if (!palabra) return console.warn("no ingresaste una palabra o frace")

    palabra = palabra.toLowerCase()
    let alReves = palabra.split("").reverse().join("")

    return (palabra === alReves) ?
        console.info(`si es palindromo, palabra original ${palabra} palabra al reves ${alReves}`) :
        console.info(`no es palindromo, palabra original ${palabra} palabra al reves ${alReves}`)
}
palindromo()

/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
     pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
 */
const eliminarCaracteres = (texto = "", patron = "") => (!texto) ?
    console.warn("no ingresaste texto") :
    (!patron) ?
    console.warn("no ingresastes caracteres") :
    console.info(texto.replace(new RegExp(patron, "ig"), ""))

eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")

/*  9) Programa una función que obtenga un numero aleatorio entre 501 y 
 600. */

const aleatorio = () => console.info(Math.round((Math.random() * 100) + 500))
aleatorio()
/* 10) Programa una función que reciba un número y evalúe si es capicúa o no
 (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */

const capicua = (numero = 0) => {
    if (!numero) return console.warn("no ingresaste numero")
    if (typeof numero !== "number") return console.error(`el valor "${numero}" ingresado no es un numero`)
    numero = numero.toString()
    let alReves = numero.split("").reverse().join("")

    return (numero === alReves) ?
        console.info(`si es capicua ${numero} al reves ${alReves}`) :
        console.info(`no es capicua ${numero} al reves ${alReves}`)
}
capicua(2002)


/* 11) Programa una función que calcule el factorial de un número
     (El factorial de un entero positivo n, se define como el producto de todos los 
        números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
 */

const factorial = (numero = undefined) => {
    if (numero === undefined) return console.warn("No ingreso un numero");
    if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado no es un numero `);
    if (numero === 0) return console.error("El numero no puede ser 0");
    if (Math.sign(numero) === -1) return console.error(`El numero no puede ser negativo "${numero}" `);

    let factorial = 1;
    for (let i = 1; i > 1; i--) {
        factorial *= i;
    }
}