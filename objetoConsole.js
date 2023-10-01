console.log(console)
console.error("Esto es un error")
console.warn("Esto es un aviso")
console.info("Esto es un mensaje informativo")
console.log("Es un registo de lo que ha pasado en nuestra aplicaciones")

let nombre = "Brayan"
apellido = "Gonzalez"
edad = "24"

console.log(nombre, apellido, edad)
console.log(`Hola mi nombre es ${nombre} y mi apellido ${apellido} y mi edad ${edad} años`)
console.log(`Hola mi nombre es %s y mi apellido %s y mi edad %d años`, nombre, apellido, edad)

console.clear()
console.log(window)
console.log(document)
/* dir permite saver todos los atributos y clases de un objecto
 */
console.dir(document)

console.group("Animales de una finca ")
console.log("Vaca")
console.log("Obejas")
console.log("Gallinas")
console.log("Conejos")
console.log("Cerdos")
console.groupEnd()

console.groupCollapsed("Animales de una finca ")
console.log("Vaca")
console.log("Obejas")
console.log("Gallinas")
console.log("Conejos")
console.log("Cerdos")
console.groupEnd()

const numeros = [1, 2, 3, 4, 5]
vocales = ["a", "e", "i", "o", "u"]
console.table(numeros)
console.table(vocales)

const perro = {
    nombre: "Natacha",
    raza: "Pincher",
    color: "Negro con cafe"
}
console.table(perro)


console.log("cuanto tiempo tarda mi codigo ")
const arreglo = Array(1000000)

for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = i
}
console.timeEnd("cuanto tiempo tarda mi codigo ")
console.log(arreglo)

//pruebas assert

let x = 1
y = 2
pruebaXY = "Se espera que x siempre sea menor que y"
console.assert(x < y, (x, y, pruebaXY))