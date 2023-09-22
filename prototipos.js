/* poo
Clases-modelo a seguir
objetos--es una instancia de Clases
Atributos---es una caracteristica o propiedad del objeto(son variables dentro de un objeto)
Metodo---Son las acciones que un objeto puede realizar (son funciones dentro de un objeto) */


/* Funcion constructora  */

/* function Animal(nombre, genero) {
    this.nombre = nombre
    this.genero = genero

    /*     metodo
     */
/* this.sonar = function () {
    console.log("Hago sonidos por que estoy vivo")
}
this.saludar = function () {
    console.log(`Hola me llamo  ${this.nombre}`)
}
}
 */

/* Funcion constructora donde asignamos los metodos al prototipo no a la funcion
 */

function Animal(nombre, genero) {
    this.nombre = nombre
    this.genero = genero
}
Animal.prototype.sonar = function () {
    console.log("Hago sonidos por que estoy vivo")
}
Animal.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre}`)
}
const snoopy = new Animal("Snooopy", "Macho")
lolabunny = new Animal("Lola Bunny", "Hembra")

console.log(snoopy)
console.log(lolabunny)