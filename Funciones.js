/* Funcion declarada */
function estoEsUnaFuncion() {
    console.log("uno")
    console.log("dos")
    console.log("tres")

}
/* invocacion de una funcion  */
estoEsUnaFuncion()

function funcionQueDevuelveValor() {
    console.log("uno")
    console.log("dos")
    console.log("tres")
    return "Funcion Que devuelve Valor"
}
let valorFuncion = funcionQueDevuelveValor()
console.log(valorFuncion)

function saludar(nombre, edad) {
    console.log(`Hola mi nombre es ${nombre} y mi edad es ${edad}`)
}
saludar("Brayan Andreys", 24)


/* Funcion anonima 
 */
const funcionExpresada = function () {
    console.log("es una funcion expresada osea que sele a asignado a una variable,tenemos que invocar esta funcion antes de inicializarla ")
}
funcionExpresada()