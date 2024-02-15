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

