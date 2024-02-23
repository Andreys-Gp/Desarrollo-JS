function* iterable() {
    yield "hola";
    console.log("hola primera consola");
    yield "hola2";
    console.log("hola segunda consola");
    yield "hola3";
    yield "hola4";

}

let iterador = iterable();
/* console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());

 */
for (let Y of iterador) {
    console.log(Y);
}

const arr = [...iterable()];
console.log(arr);