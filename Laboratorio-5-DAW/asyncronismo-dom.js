// Asincronismo
// Página de APIs públicas: https://public-api-lists.github.io/public-api-lists/
// API utilizada: https://collectionapi.metmuseum.org/public/collection/v1/objects
// Endpoint: https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID] 
// Donde [objectID] es el Endpoint y dependiendo del número mostrará un objeto con sus especificaciones

// Uso then - catch
fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/108")
    .then((response) => response.json())
    .then((data) => {
        console.log('Objeto del museo en la lista N°2: ', data)
    })
    .catch((error) => {
        console.log('Error: ', error)
    })

// Uso async - await
const getObjectMuseum = async () => {
    try {
        let response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/215")
        let data = await response.json()
        console.log("Objeto del museo en la lista N°1: ", data)
    } catch (error) {
        console.log('Error: ', error)
    }
}

getObjectMuseum()