setTimeout(() => {
    console.log("Hola, esto se ejecuta una sola vez.");
}, /* time sg*/ 10000);

/* setInterval(() => {
    console.log("Hila, esto se ejecuta cada 9 segundos.");
}, 9000 );*/

/* para canceler un setInterval se declara como variable mas condicion */

let temporizador = setTimeout(() => {
    console.log("Hola, esto se ejecuta cada cierto tiempo");
}, 1000);
clearTimeout(temporizador);

/* elimina */
clearInterval(temporizador);

/* callbacks */

function cuadradoCallback(value, callback) {
    let prueba = setTimeout(() => {
        callback(value, value * value);

    }, 0 || Math.random() * 1000);

    clearTimeout(prueba);
}
cuadradoCallback(0, (value, result) => {
    console.log("inicia callback");
    console.log(`callback:${value},${result}`);
    cuadradoCallback(1, (value, result) => {
        console.log("inicia callback");
        console.log(`callback:${value},${result}`);
    })
})


/* promesas */

function cuadradoPromise(value) {
    if (typeof value !== "number") return Promise.reject(console.log(
        `error, el valor ingresado "${value}" ingresado no es un numero `))

    return new Promise((resolve, reject) => {
        let pruebaPromise = setTimeout(() => {

            resolve({
                value: value,
                result: value * value
            });

        }, 0 || Math.random() * 1000);

        clearTimeout(pruebaPromise);

    });
}
cuadradoPromise("")
    .then((obj) => {
        console.log("inicio promesa");
        console.log(`promise:${obj.value},${obj.result}`);
        return cuadradoPromise(1);
    })
    .then((obj) => {
        console.log("inicio promesa");
        console.log(`promise:${obj.value},${obj.result}`);
        return cuadradoPromise(2);
    })
    .catch(err => console.log(err));



/* ASYNC AWAIT */

function cuadradoPromise(value) {
    if (typeof value !== "number") return Promise.reject(console.log(
        `error, el valor ingresado "${value}" ingresado no es un numero `))

    return new Promise((resolve, reject) => {
        let pruebaPromise = setTimeout(() => {

            resolve({
                value: value,
                result: value * value
            });

        }, 0 || Math.random() * 1000);

        clearTimeout(pruebaPromise);

    });
}

async function funcionAsincronaDeclarada() {
    try {
        console.log("inicion de funcion Asyn");
        let obj = cuadradoPromise(0);
        console.log(`Asyn funtion:${obj.value},${obj.result}`)
    } catch {}
}