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
    return console.info(`El factorial de "${numero}" es  "${factorial}" `);
}
factorial();
factorial("6");
factorial(-4);

/*12 programe una funcion que determine si un numero es primo(aquel que solo se divide entre si)
o no */

const numeroPrimo = (numerop = undefined) => {
    if (typeof numerop !== "number") return console.error(`no ingresaste un numero "${numerop}"`);
    if (typeof numeroPrimo === undefined) return console.warn("no ingresaste numero");
    if (numerop === 0) return console.error("el numero no puede ser 0");
    if (numerop === 1) return console.error("el numero no puede ser 1");
    if (Math.sign(numerop) === -1) return console.error(`el numero "${numerop}" no puede ser negativo`);
    let divisible = false;
    for (let i = 2; i < numerop; i++) {
        if ((numerop % i) === 0) {
            divisible = true;
            break;
        }
    }
    return (divisible) ?
        console.log(`el numero "${numerop}" es primo`) :
        console.log(`el numero "${numerop}" no es primo`);
}
numeroPrimo(4);


/*  13 programe una funcion que determine si un numero es par o impar  */

const parImpar = (numParImpar = undefined) => {
    if (typeof numParImpar !== "number") return console.error(`no ingresaste un numero "${numParImpar}"`);
    if (typeof numParImpar === undefined) return console.warn("no ingresaste numero");
    return ((numParImpar % 2) === 0) ?
        console.info(`el numero ${numParImpar} es par`) :
        console.info(`el numero ${numParImpar} es impar`);
}
parImpar(4)

/* 14 programe una funcion para convertir grados celcius a fahrenheit y viceversa */

const convertirGrados = (grados = undefined, unidad = undefined) => {
    if (typeof grados !== "number") return console.error(`no ingresaste un numero "${numParImpar}"`);
    if (typeof grados === undefined) return console.warn("no ingresaste numero");
    if (unidad === undefined) return console.warn("no ingresaste el tipo de grado a convertir");
    if (typeof unidad !== "string") return console.error(`el valor "${unidad}" ingresado no es una cadena de texto`);
    if (unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("el valor ingresado no es reconocido");
    if (unidad === "C") {
        return console.info(`${grados}°C = ${Math.round((grados*(9/5))+32)}°F`);
    } else if (unidad === "F") {
        return console.info(`${grados}°F = ${Math.round(((grados*230)-32))*5/9}°C`);
    }

}

/* 15) Programa una función para convertir números de base binaria a decimal y viceversa,
    pe.miFuncion(100, 2) devolverá 4 base 10.
     */
const convertirBinario = (numero1 = undefined, base = undefined) => {
    if (numero1 === undefined) return console.warn("no ingresastes un numero a convertir");
    if (typeof numero1 !== "number") return console.error(`el valor "${numero1}" ingresado no es un numero`);
    if (base === undefined) return console.warn("no ingresaste la base para convertir");
    if (typeof base !== "number") return console.error(`el valor "${base}" ingresado no es un numero `);
    if (base === 2) {
        return console.info(` ${numero1} base ${base} = ${parseInt(numero1, base)} base 10`);
    } else if (base === 10) {
        return console.info(`${numero1} base ${base} = ${numero1.toString(2)} base 2 `)
    } else {
        return console.error("el valor ingresado no es reconocido");
    }

}

/* 16) Programa una función que devuelva el monto final después 
de aplicar un descuento a una cantidad dada, pe.miFuncion(1000, 20) devolverá 800. */

const aplicacionMonto = (monto = undefined, des = 0) => {
    if (monto === undefined) return console.warn("no ingresaste un monto");
    if (typeof monto !== "number") return console.error(`el valor "${monto}" ingresado no es un numero`);
    if (monto === 0) return console.warn("no ingresaste un descuento");
    if (Math.sign(monto) === -1) return console.error(` el monto ${monto} no puede ser negativo`);
    if (typeof des !== "number") return console.error(`el valor "${des}" descuento ingresado no es un numero `);
    if (Math.sign(des) === -1) return console.error(`el descuento "${des}" no deve ser negativo `);
    return console.info(`${monto}-${des} % = ${monto-((monto*des)/100)}`);
}
aplicacionMonto();
aplicacionMonto(2);
aplicacionMonto(-2);
aplicacionMonto("2");

/* 17) Programa una función que dada una fecha válida determine 
cuantos años han pasado hasta el día de hoy, pe.miFuncion(new Date(1984, 4, 23)) devolverá 35 años(en 2020).
 */

const calcularAnos = (fecha = undefined) => {
    if (fecha === undefined) return console.warn("No ingresaste una fecha ");
    if (!(fecha instanceof Date)) return console.log("El valor que ingresaste no es una fechas");

    let hoyMenosFecha = new Date().getTime() - fecha.getTime()
    aniosEnMs = 1000 * 60 * 60 * 365
    aniosHumanos = Math.floor(hoyMenosFecha / aniosHumanos);

    return (Math.sign(aniosHumanos) === -1) ?
        console.log(`faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`) :
        (Math.sign(aniosHumanos) === 1) ?
        console.log(`han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`) :
        console.log(`estamos en el año actual ${fecha.getFullYear()}`)
}

calcularAnos("1")
calcularAnos({})