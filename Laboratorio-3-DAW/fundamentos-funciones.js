// variables
let userName = "Richard Soria" // String
const cedula = 1728569664 // int
let user = true // boolean
const email = "richard.soria@epn.edu.ec"

// tipo compuesto
let dataUser = {user1:"Richard", estado:true} // objeto
let dataUserCompleto = ["Richard", 19, false] // array

let producto = "PlayStation®5 console (slim)" // string
let precio = 499.00 // float
let cantidad = 30 // int

// métodos
console.log(email.toLocaleUpperCase())

// templeate strings
console.log(`El productO ${producto.toUpperCase()} tiene un precio de ${precio} y están disponibles ${cantidad} en stock.`)

let impuesto = 0.15 // float
let precioString = "499.00"

// casting
console.log(+precioString+(precio*impuesto))

// operador ternario
console.log(user ? "El usuario está activo." : "El usuario está inactivo.")

// comparación estricta
cupon = 1899
cupon === "1899" ? console.log("Descuento aplicado correctamente.") : console.log("Error al aplicar el cupón de descuento.")

// loops
const juegosDisponibles = ["Spider-Man 2", "The Last of Us Part 1", "God of War Ragnarök", "UNCHARTED™: Legacy of Thieves Collection", "Stellar Blade"]
juegosDisponibles.forEach((juegosDisponibles) => {console.log(juegosDisponibles)})

// función anónima
// (function(){
//     console.log("PlayStation el mejor lugar para jugar")
// })()

// función declarada
function getProducto(){
    console.log("Obteniendo PlayStation®5 console (slim)")
}

// función expresada
const descuentos = function(){
    console.log("Cupón aplicado con éxito.")
}

// argumentos
const validarCredenciales = function(email, password){
    console.log(`El usuario ${email} ha ingresado con la contraseña ${password}.`)
}
validarCredenciales("richard.soria@epn.edu.ec", 1899)

// retorno
function infoUser(){
    return{
        name: "Richard",
        age: 20,
        userName: "RichardSSJ",
        id: 1899
    }
}
console.log(infoUser())

// funciones flechas
const descuentoAplicado = () => {console.log("Descuento aplicado.")}
descuentoAplicado()

const codigos = (codigo) =>{
    console.log(`Descuento aplicado con el código: ${codigo}`)
}

codigos(1899)

// objetos
const factura = {
    id: 1899,
    nombre: "Richard",
    product: "PlayStation®5 console (slim)",
    price: 573.85,
    descuento: 20
}
console.log(factura.descuento)

// desestructuracción
const {id, nombre, product, price, descuento} = factura
console.log(price)

// propiedades
factura.dirreccion = "13 de junio y Catequilla Lote 10"
delete factura.descuento
console.log(factura)

Object.values(factura).includes("") ? console.log("La facturada no ha sido generada.") : console.log("La factura ha sido generada con éxito.")

// operador spread
const productoVerificacion = {
    name: "PlayStation®5 console (slim)", precio: 573.85
}

const enviarFactura = {...factura, ...productoVerificacion}
console.log(enviarFactura)

// nombres abreviados de propiedades
const nombreProducto = "PlayStation®5 console (slim)"
const precioProducto = 573.85
const info = {nombreProducto, precioProducto}
console.log(info)