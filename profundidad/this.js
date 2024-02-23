this.nombre = "contexto globall";

function imprimi() {
    console.log(this.nombre);
}
imprimi();
console.log(this);
const obj = {
    nombre: "contexto globall",
    imprimir: function () {
        console.log(this.nombre);
    }
}
obj.imprimir();