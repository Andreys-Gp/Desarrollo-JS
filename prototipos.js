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

// herencia prototipica 

function Perro(nombre, genero, tamano) {
    this.super = Animal
    this.super(nombre, genero)
    this.tamano = tamano
}

/* perro hereda de animal
 */
Perro.prototype = new Animal
Perro.prototype.constructor = Perro

/* sobre escritura de metodos del prototipo padre en el hijo
 */
Perro.prototype.sonar = function () {
    console.log("soy un perro y mi sonido es un ladrido")
}
Perro.prototype.ladrar = function () {
    console.log("GUAA GUAA !!!!")
}





const snoopy = new Perro("Snooopy", "Macho", "Mediano")
lolabunny = new Animal("Lola Bunny", "Hembra")


console.log(snoopy)
console.log(lolabunny)

/*
snoopy.sonar()
snoopy.saludar() */