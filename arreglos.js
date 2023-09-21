const a = []
console.log(a)

const colores = ["Rojo", "Verde", "Azul"]
console.log(colores)

colores.forEach(function (el, index) {
    console.log(`<li id="${index}">${el}</li>`)
})