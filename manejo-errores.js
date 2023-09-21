/* try {
    console.log("en el try se agrega el codigo a evaluar")
} catch (error) {
    console.log("captura cualquier error surgido o lanzado en el try")
}finally{
    console.log("El bloque finally se ejecutara siempre al final de un bloque try-cath")
}
 */

try {
    let numero = 10
    if (isNaN(numero)) {
        throw new Error("El caracter introducido no es un numero")
    }
    console.log(numero * numero)
} catch (error) {
    console.log(`Se produjo el siguiente error: ${error}`)
}