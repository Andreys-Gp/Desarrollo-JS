this.lugar = "contexto globall";

function saludar() {
    console.log(`${this.lugar}`);
}
saludar();
const obj = {
    lugar: "contexto objeto"
}
saludar.call(obj);
