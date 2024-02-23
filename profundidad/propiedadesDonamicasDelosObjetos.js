const objUsuarios = {};
console.log(objUsuarios);
const usuarios = ["matias", "roman", "feliciano", "camilo"];
usuarios.forEach((usuario, index) => objUsuarios[`9d_${index}`] = usuario);
console.log(objUsuarios);