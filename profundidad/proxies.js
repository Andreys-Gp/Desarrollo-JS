const persona = {
    nombre: "",
    apellido: "",
    edad: 0
}
const manejador = {
    Set(obj, prop, valor) {
        if (Object.keys(obj).indexOf(prop) === -1) {
            return console.log(`la propiedad: "${prop}" no existe en el objeto persona`);
        }
        if (
            (prop === "nombre" || prop === "apellido") &&
            (/^[a-zA-Z\s]+$/g.test(valor))) {
            return console.log(`la propiedad ${prop} solo acepta letras y espacios en blanco`)
        }
        obj[prop] = valor;

    }
}
const jon = new Proxy(persona, manejador);
jon.nombre = "jon19";
jon.apellido = "rosario";
jon.edad = 17;
jon.twitter = "@prueba"
console.log(jon);
console.log(persona);
console.log(jon);