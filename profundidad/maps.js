let mapa = new Map();
mapa.set("nombre", "Brayan");
mapa.set("apellido", "Gonzalez Perez");
mapa.set("edad", 24);

console.log(mapa);
console.log(mapa.size);
console.log(mapa.has("epoca"));
console.log(mapa.has("nombre"));
console.log(mapa.get("nombre"));

mapa.set(19, "numero diecinueve");
mapa.set(false, "falso");
mapa.set({}, {});
console.log(mapa);

for (let [key, value] of mapa) {
    console.log(`llave:"${key}", valor:"${value}"`);
};

const mapa2 = new Map(
    [
        ["name", "prueba"],
        ["años", 17],
        ["animal", "perro"],
        [null, "nulo"]
    ]
);
console.log(mapa2);

for (let [key, value] of mapa2) {
    console.log(`llave:"${key}", valor:"${value}"`);
};

const llavesmapa2 = [...mapa2.keys()];
const valoresmapa2 = [...mapa2.values()];
console.log(` llaves:"${llavesmapa2}"  \n valores: "${valoresmapa2}" `);