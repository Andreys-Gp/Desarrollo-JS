class Animal {
    //el constructor es especial se ejecuta en el momento de la instancia de la clase

    constructor(nombre, genero) {
        this.nombre = nombre
        this.genero = genero
    }
    /*     metodos
     */
    sonar() {
        console.log("hago sonidos por que estoy vivo")
    }
    saludar() {
        console.log(`hola me llamo ${this.nombre}`)
    }
}
class Perro extends Animal {
    constructor(nombre, genero, tamanio) {
        //el metodo super() se manda a llamar el constructor de la clase padre
        super(nombre, genero)
        this.tamanio = tamanio
        this.raza = null
    }
    sonar() {
        console.log("Soy un perro y mi sonido es un ladrido")
    }
    ladrar() {
        console.log("HUAA HUAAA")
    }
    //metodo estaticos se puede ejecutar sin necesidad de instanciar la clase 
    static queEres() {
        console.log("Los perros son animales mamiferos que pertenecemos  a la familia de los caninos somos considerados los mejores amigos del hombre")
    }

    /* Los metodos getter y setter son metodos especiales que nos permiten establecer y obtener los
    valores de atributos de nuestra clase
 */
    /* obtenedor */
    get getRaza() {
        return this.raza
    }
    /* establecedor */
    set setRaza(raza) {
        this.raza = raza
    }

}

Perro.queEres()

const mimi = new Animal("Mimi", "Hembra")
scooby = new Perro("Scoooby", "Macho", "Gigante")

console.log(mimi)
console.log(scooby)

scooby.setRaza = "Gran Danes"
console.log(scooby.getRaza)