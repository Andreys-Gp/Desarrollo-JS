/* 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD. -
    Todos los datos del objeto son obligatorios. -
    Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los
7 restantes números. -
    Valida que el título no rebase los 100 caracteres. -
    Valida que el director no rebase los 50 caracteres. -
    Valida que el año de estreno sea un número entero de 4 dígitos. -
    Valida que el país o paises sea introducidos en forma de arreglo. -
    Valida que los géneros sean introducidos en forma de arreglo. -
    Valida que los géneros introducidos esten dentro de los géneros
aceptados * . -
    Crea un método estático que devuelva los géneros aceptados * . -
    Valida que la calificación sea un número entre 0 y 10 pudiendo ser
decimal de una posición. -
    Crea un método que devuelva toda la ficha técnica de la película. -
    Apartir de un arreglo con la información de 3 películas genera 3
instancias de la clase de forma automatizada e imprime la ficha técnica
de cada película.

    *Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary, Drama, Family, Fantasy, Film Noir, Game - Show, History, Horror, Musical, Music, Mystery, News, Reality - TV, Romance, Sci - Fi, Short, Sport, Talk - Show, Thriller, War, Western. */


class Pelicula {
    constructor({
        id,
        titulo,
        director,
        estreno,
        pais,
        generos,
        calificacion
    }) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.calificacion = calificacion;
        this.generos = generos;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.ValidarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);

    }
    static get listaGeneros() {
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy",
            " Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game - Show",
            "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality - TV",
            "Romance", "Sci - Fi, Short", "Sport", "Talk - Show", "Thriller", "War", "Western"
        ]
    }
    static generosAceptados() {
        return console.log(`los generos aceptados son "${Pelicula.listaGeneros.join(", ")}"`);
    }

    // funciones simples
    validarCadena(propiedad, valor) {
        if (!valor) return console.log(`${propiedad} "${valor}" esta vacio`);
        if (typeof valor !== "string") return console.log(`${propiedad} "${valor}" ingresado no es una cadena de texto`);
        return true;

    }
    validarLongitudCadena(propiedad, valor, longitud) {
        if (valor.length > longitud) return console.log(`${propiedad} "${valor}" excede el numero de caracteres  permitidos (${longitud})`);
        return true;
    }
    validarNumero(propiedad, valor) {
        if (!valor) return console.log(`${propiedad} "${valor}" esta vacio`);
        if (typeof valor !== "number") return console.log(`${propiedad} "${valor}" ingresado no es un numero`);
        return true;
    }
    validarAreglo(propiedad, valor) {
        if (!valor) return console.log(`${propiedad} "${valor}" esta vacio`);
        if (!(valor instanceof Array)) return console.log(`${propiedad} "${valor}" ingresado no es un arreglo`);
        if (valor.length === 0) return console.log(`${propiedad} "${valor}" no tiene datos`);
        for (let cadena of valor) {
            if (typeof cadena !== "string") return console.log(`el valor "${cadena}" ingresado no es una cadena e texto`);
        }
        return true;
    }


    // funciones compueestas 

    validarIMDB(id) {
        if (this.validarCadena("IMDB", id)) {
            if (!(/^([a-z]{2}([0-9]){7})$/).test(id)) {
                return console.log(`IMDB id "${id}" no es valido, debe tener 9 caracteres, 2 primeror letras minusculas,7 restantes numeros`);

            }
        }
    }

    validarTitulo(titulo) {
        if (this.validarCadena("titulo", titulo))
            this.validarLongitudCadena("titulo", titulo, 100);
    }

    validarDirector(director) {
        if (this.validarCadena("director", director)) {

            this.validarLongitudCadena("titulo", director, 50);
        }
    }
    ValidarEstreno(estreno) {
        if (this.validarNumero("año de estreno", estreno)) {
            if (!(/^([0-9]){4}$/.test(estreno))) {
                return console.log(`Año de estreno "${estreno}" no es valido, debe tener maximo cuatro numeros`);
            }
        }

    }

    validarPais(pais) {
        this.validarAreglo("pais", pais);
    }
    validarGeneros(generos) {
        if (this.validarAreglo("genero", generos)) {
            for (let genero of generos) {
                console.log(genero, Pelicula.listaGeneros.includes(genero));
                if (!Pelicula.listaGeneros.includes(genero)) {
                    console.log(`genero(s) incorrectos "${generos.join(", ")}"`);
                    Pelicula.generosAceptados();
                }
            }
        }
    }
    validarCalificacion(calificacion) {
        if (this.validarNumero("calificacion", calificacion))
            return (calificacion < 0 || calificacion > 10) ?
                console.log(`la calificacion tiene que estar entre 0 a 10`) :
                this.calificacion = calificacion.toFixed(1);
    }

    fichaTecnica() {
        console.log(`Ficha tecnica:\n Titulo:"${this.titulo}"\n
        Director:"${this.director}"\n
        Año:"${this.estreno}"\n
        Pais:"${this.pais.join("-")}"\n
        Generos:"${this.generos.join(", ")}"\n
        Calificacion:"${this.calificacion}"\n
        MDB id:"${this.id}"
        `)
    }
}

/* Pelicula.generosAceptados();
 */ // const peli = new Pelicula

/* const peli = new Pelicula({
    id: "tt1234567",
    titulo: "Brayan Gonzalez",
    director: "ing Gonzalez",
    estreno: 2020,
    pais: ["Mexico", "francia"],
    generos: ["Action"],
    calificacion: 1.094

})
peli.fichaTecnica(); */

const misPelis = [{
        id: "tt1234567",
        titulo: "Brayan Gonzalez",
        director: "ing Gonzalez",
        estreno: 2020,
        pais: ["Mexico", "francia"],
        generos: ["Action"],
        calificacion: 1.094
    },
    {
        id: "tt2345256",
        titulo: "El suspenso",
        director: "ing Andreys",
        estreno: 2022,
        pais: ["colombia", "ecuador"],
        generos: ["Action"],
        calificacion: 1.243
    },
    {
        id: "tt2556254",
        titulo: "Anochecer",
        director: "ing Perez",
        estreno: 2024,
        pais: ["venezuela"],
        generos: ["Action"],
        calificacion: 1.343
    }

]

misPelis.forEach(el => new Pelicula(el).fichaTecnica());