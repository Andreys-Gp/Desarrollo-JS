/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

//1)
const contarCaracteres=(cadena="")=>(!cadena)  
                    ? console.warn("no ingresaste ninguna cadena") 
                    : console.info(`la cadena "${cadena}" tiene ${cadena.length} caracteres`)

    contarCaracteres()
    contarCaracteres("Bienbenido hasta luego")
    console.clear()

//2)

const recortarTxt=(cadena="",longitud=undefined)=> (!cadena)
                ? console.warn("no ingresaste ninguna cadena")
                :(longitud===undefined)
                  ? console.warn("no ingresastes texto para recortar")
                  : console.info(cadena.slice(0,longitud))

    recortarTxt("Bienbenido a praticas js",10)
    recortarTxt("",5)
    console.clear()

    //3)

    const cadenaArreglo=(cadena="",separador=undefined)=> (!cadena)
    ? console.warn("no ingresaste ninguna cadena")
    :(separador===undefined)
            ? console.warn("no ingresastes caracter separador")
            : console.info(cadena.split(separador))

        cadenaArreglo("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", " ")

        console.clear()

        //4)
    const repertirTexto=(texto="",veces=undefined)=>{
        if (!texto) return console.warn("no ingresaste texto")
        if (veces===undefined) return console.warn("no ingresaste numero a repetir texto")
        if(veces===0) return console.error("el numero de veces no puede ser igual a 0")
        if(Math.sign(veces)===-1)return console.error("el numero de veces no puede ser un valor negativo")
        for (let index = 0; index < veces; index++) {
            console.info(`${texto},${index}`)
        }
    }
     repertirTexto("musica",4)
     console.clear()

   