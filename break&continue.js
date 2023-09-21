const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let index = 0; index < numeros.length; index++) {
    if (index === 5) {
        /* break */
        continue
    }
    /*     console.log(index)
     */
    console.log(numeros[index])
}