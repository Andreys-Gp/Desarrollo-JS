const iterable = [1, 2, 3, 4, 5, 6];

const iterador = iterable[Symbol.iterator]();
console.log(iterable);
console.log(iterador);
/* RECORRIENDO
 */
/* console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.clear(); */

let next = iterador.next();
while (!next.done) {
    console.log(next.value);
    next = iterador.next();
};
