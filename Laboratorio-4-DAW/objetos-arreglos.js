// Objetos

const serie ={
    name:'Breaking Bad',
    creator:'Vince Gilligan',
    rating:9.5,
    bestEpisode:{
        name:'Ozymandias',
        season: 5,
        episode: 14,
        rate: 10
    },
    stars:['Bryan Cranston', 'Aaron Paul', 'Anna Gunn'],
    status: false,

    //Uso del this en objetos 
    getName(){
        return `La serie se llama ${this.name}`
    },
    getRating(){
        return `La serie tiene un rating de ${this.rating}/10`
    }
}


console.log(serie.status);

// Va a provocar un error cuando se trabajo cpm arrow fuctions
console.log(serie.getName());
console.log(serie.getRating());

// Agregar y eliminar propiedades al objeto

// Agregar un par de clave y valor al objeto
serie.image = "img/breakingBad.png";

// Eliminar un par de clave y valor al objeto
delete serie.status;

console.log(serie)

// Destructuración de objetos

// const {name, creator, rating, bestEpisode} = serie;
// console.log(name, creator, rating, bestEpisode);

// const {name, creator, rating, myBestEpisode = serie.bestEpisode} = serie;
// console.log(name, creator, rating, myBestEpisode);

// const {name, creator, rating, bestEpisode:{season}} = serie;
// console.log(name, creator, rating, season);

// const {name, creator, ...res} = serie;
// console.log(name, creator, res);

// Congelar un objeto
// Uso de freeze

Object.freeze(serie);
serie.trailer = 'videos/breakigBadTrailer.mp4';
console.log(Object.isFrozen(serie));

// Uso de seal
// Con seal no se puede agregar ni eliminar propiedades, pero
// si se puede modificar las propiedades
Object.seal(serie);
console.log(Object.isSealed(serie));
serie.rating = 10;
console.log(serie)

// Copiar dos objetos 
// Spread operator
const serieTV = {
    name:'Breaking Bad',
    creator:'Vince Gilligan',
    rating:9.5,
}

const extraInformation = {
    bestEpisode:{
        name:'Ozymandias',
        season: 5,
        episode: 14,
        rate: 10
    },
    stars:['Bryan Cranston', 'Aaron Paul', 'Anna Gunn'],
    status: false,
    getName(){
        return `La serie se llama ${this.name}`
    },
    getRating(){
        return `La serie tiene un rating de ${this.rating}/10`
    }
}

const allInformation = {...serieTV, ...extraInformation}

console.log(allInformation)

// Métodos para trabajar con objetos
console.log("Obtener las claves: ",Object.keys(serie));
console.log("Obtener los valores: ", Object.values(serie));
console.log("Obtener las claves y valores de un objeto: ", Object.entries(serie))

//(ES6) Nombres abreviados de propiedades 
const nameMovie = 'Back to the Future';
const yearMovie = 1985;

const newMovie = {
    nameMovie,
    yearMovie
}

console.log(newMovie)

// Arreglos
const listMovies = ['The Shawshank Redemption', 'The Godfather', 'The Dark Knight', 'The Godfather Part II', 'Angry Men'];

const dataNewMovie = ["The Good, the Bad and the Ugly", "Sergio Leone", 1966, true, {rating:8.8}, ['Desert Adventure', 'Western']]

const stars = ['Clint Eastwood', 'Eli Wallach', 'Lee Van Cleef']

const raitings = [9.3, 9.2, 9.0, 9.0]

// Uso de una propiedad de los arreglos
console.log('Número de elementos: ', listMovies.length);
console.log('Número de elementos: ', stars.length);
stars.length > 0 ? console.log("Se tiene un registro de los actores.") : console.log('No se tiene registro de los actores.')

// Recorrido
// Primera forma de iterar sobre los elemntos de un arreglo
for(let i=0; i < listMovies.length; i++){
    console.log(listMovies[i])
}

// Segunda forma de iterar sobre los elementos de un arreglo
listMovies.forEach((e,i) => console.log((`${i+1} - ${e}`)))

// Tercera forma de iterar sobre los elementos de un arreglo
const newListMovies = listMovies.map((e) => `Nueva película: ${e}`)
console.log(listMovies)
console.log(newListMovies)

// En conclusión (map) no altera el arreglo original

const movies = [
    {
        name:'The Shawshank Redemption',
        director:'Frank Darabont',
        year:1994
    },
    {
        name:'The Godfather',
        director:'Francis Ford Coppola',
        year:1972
    }
]
movies.forEach(m => console.log(`${m.name} - ${m.year}`))

// Métodos

// push y unshift

// Agrega al final del arreglo
listMovies.push(dataNewMovie)
// Agrea al inicio del arreglo
listMovies.unshift(stars)

console.log(listMovies)

// pop y shift

// Elimina el elemento del final del arreglo
listMovies.pop(listMovies)
// Elimina el elemento del inicio del arreglo
listMovies.shift(listMovies)

console.log(listMovies)

// método find
const movieOne = listMovies.find((e) => e === 'The Godfather')
console.log(movieOne)

const movieTwo = listMovies.find((e) => e === 'The Godfather 1972')
console.log(movieTwo)

// método filter
const newMovieOne = listMovies.filter((e) => e.startsWith('A'))
console.log(newMovieOne)

const newMovieTwo = listMovies.filter((e) => e!='The')
console.log(newMovieTwo)

// Destructuración
const [movie_1, movie_2, movie_3, movie_4, movie_5] = listMovies

console.log(movie_1)
console.log(movie_2)
console.log(movie_3)
console.log(movie_4)
console.log(movie_5)

// Rest vs Spread
// Rest
const [movie_01, movie_02, ...rest] = listMovies
console.log(movie_01)
console.log(movie_02)
console.log(rest)

// Spread
const allMovies = [...listMovies,...dataNewMovie]
console.log(allMovies)