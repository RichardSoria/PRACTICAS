// Fundamentos API

// Consumo de una API


fetch('https://v2.jokeapi.dev/joke/Any?lang=es&type=single')
    .then(response => response.json())
    .then(json => console.log(json))

// idioma chiste = cs, de, en, es, fr, pt
const obtenerChiste = async (idiomaChiste)=>{
    const peticion = await fetch(`https://v2.jokeapi.dev/joke/Any?lang=${idiomaChiste}&type=single`)
    const response = await peticion.json()
    console.log(`Categoría del chiste: ${response.category}\nEl chiste: ${response.joke}`)
}

obtenerChiste('es')

// Guardar un Objeto en Local Storage

// En un entorno Node.js localStorage no esta disponible, en su lugar se usa la siguiente biblioteca
// para simular un localStorage

const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch')

fetch('https://v2.jokeapi.dev/joke/Any?lang=es&type=single')
    .then(response => response.json())
    .then(json => {
    {
        let chiste = {
            id:json.id,
            category:json.category,
            joke:json.joke
        }
        guardarLocalStorage(chiste)
    }
})

const guardarLocalStorage = (data) => {
    localStorage.setItem('joke',JSON.stringify(data))
}

// Obtener un objeto en el LocalStorage
const obtenerLocalStorage = () => {
    const respuesta = localStorage.getItem('joke') ? JSON.parse(localStorage.getItem('joke')) : "No existe data"
    console.log(respuesta)
}

obtenerLocalStorage()

// Eliminar un objeto en el LocalStorage
const eliminarLocalStorage = () => {
    !localStorage.getItem('joke') ? console.log('No hay clave') : localStorage.removeItem('joke');console.log("Objeto Eliminado")
}

eliminarLocalStorage()

// Módulos
const {login, LIKES} = require('./module.js')

login()
console.log(LIKES)