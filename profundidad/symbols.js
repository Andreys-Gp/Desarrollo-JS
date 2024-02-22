const NAME = Symbol("nombre");
const SALUDAR = Symbol("saludar");

const persona = {
    /*     symbol []
     */
    [NAME]: "Brayan"
}
console.log(persona);
persona.NAME = "Andreys G";
console.log(persona);
console.log(persona.NAME);
console.log(persona[NAME]);

persona[SALUDAR] = function () {
    console.log("Hola");
}
console.log(persona);
persona[SALUDAR]();

for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona.propiedad);
}
console.log(Object.getOwnPropertySymbols(persona));