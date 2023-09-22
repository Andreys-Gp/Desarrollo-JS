const numeros = [1, 2, 3]

/* sin destruturacion */
let uno = numeros[0]
dos = numeros[1]
tres = numeros[2]
console.log(uno, dos, tres)

/* Con destructuracion */
const [one, thow, three] = numeros
console.log(one, thow, three)

const persona = {
    nombre: "brayan",
    edad: 35,
    apellido: "Gonzalez"
}
let {
    nombre,
    apellido,
    edad
} = persona
console.log(nombre, edad, apellido)