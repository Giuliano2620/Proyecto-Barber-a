// {const servicios = ["corte", "barba", "cejas"]
// const barbero = {
//   nombre: "Juan",
//   edad: 25,
//   especialidad: "degradé"
// }

const { resolve } = require("node:path")
const { serialize } = require("node:v8")

// // Acceder a un elemento del array (empieza desde 0)
// console.log(servicios[0])    // corte
// console.log(servicios[1])    // barba
// console.log(servicios[2])    // cejas

// // Acceder a una propiedad del objeto
// console.log(barbero.nombre)        // Juan
// console.log(barbero.especialidad)  // degradé}

// function describir(nombre, especialidad) {
//   return nombre + " se especializa en " + especialidad
// }

// console.log(describir("Juan", "degradé"))
// console.log(describir("Pedro", "barba"))
// console.log(describir("Carlos", "corte clásico"))

// const describir = (nombre, especialidad) => nombre + " se especializa en " + especialidad

// console.log(describir("Juan", "degradé"))
// console.log(describir("Pedro", "barba"))
// console.log(describir("Carlos", "corte clásico"))

// const precio = (servicio) => {
//   if (servicio === "corte") {
//     return 2000
// } else if (servicio === "barba") {
//   return 1500
// } else {
//   return "Servicio no encontrado"
//   }
// }

// console.log(precio("corte"))
// console.log(precio("barba"))
// console.log(precio("cejas"))

// const servicios = ["corte", "barba", "cejas"]

// servicios.forEach((servicios) => {
//   console.log(servicios)
// })

// const barberos = ["Jaun", "Pedro", "Nacho"]

// const saludos = barberos.map((barberos) => "Hola soy " + barberos)

// console.log(saludos)

// const barbero = {
//   nombre: "Juan",
//   edad: 25,
//   especialidad: "degradé"
// }

// const { nombre, especialidad } = barbero

// console.log(nombre)
// console.log(especialidad)

// const servicios = ["Corte", "Barba", "Cejas"]

// const [ primero, segundo, tercero ] = servicios

// console.log(primero)
// console.log(segundo)
// console.log(tercero)

// const buscarTurnos = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(["Lunes 10hs", "Martes 14hs", "Viernes 16hs"])
//     }, 2000)
//   })
// }

// const mostrarTurnos = async () => {
//   console.log("Buscando turnos...")
//   const turnos = await buscarTurnos()
//   console.log(turnos)
// }

// mostrarTurnos()

// const obtenerDatos = async () => {
//   const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/1")
//   const datos = await respuesta.json()
//   console.log(datos.name)
//   console.log(datos.email)
// }

// obtenerDatos()  

// Lista de barberos
// const barberos = [
//   { nombre: "Juan", especialidad: "degradé", disponible: true },
//   { nombre: "Pedro", especialidad: "barba", disponible: false },
//   { nombre: "Carlos", especialidad: "corte clásico", disponible: true },
// ]

// // 1. Mostrá solo los barberos disponibles
// const disponibles = barberos.filter((barbero) => barbero.disponible)
// console.log("Barberos disponibles:")
// console.log(disponibles)

// // 2. Creá una lista con los nombres de los barberos disponibles
// const nombres = disponibles.map((barbero) => barbero.nombre)
// console.log("Nombres:")
// console.log(nombres)

// // 3. Destructurá el primer barbero disponible
// const { nombre, especialidad } = disponibles[0]
// console.log("Primer disponible: " + nombre + " - " + especialidad)

// // 4. Simulá buscar el precio de un servicio
// const obtenerPrecio = async (servicio) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       if (servicio === "degradé") {
//         resolve(2500)
//       } else if (servicio === "barba") {
//         resolve(1500)
//       } else {
//         resolve(2000)
//       }
//     }, 1000)
//   })
// }

// // 5. Mostrá el precio del servicio del primer barbero disponible
// const mostrarPrecio = async () => {
//   const precio = await obtenerPrecio(especialidad)
//   console.log("Precio de " + especialidad + ": $" + precio)
// }

// mostrarPrecio()

// const turnos = [
//   { cliente: "Giuliano", servicio: "degradé", pagado: true},
//   { cliente: "Marcos", servicio: "barba", pagado: false}, 
//   { cliente: "Santiago", servicio: "corte clásico", pagado: true}, 
//   { cliente: "Lautaro", servicio: "barba", pagado: false}, 
//   { cliente: "Thomas", servicio: "degradé", pagado: true}, 
// ]

// const pagados = turnos.filter((corte) => corte.pagado)
// console.log("Turnos Pagados:")
// console.log(pagados)

// const names = pagados.map((corte) => corte.cliente)
// console.log("Nombres: ")
// console.log(names)

// const {cliente, servicio } = pagados[2]
// console.log("Último turno pagado: " + cliente + "-" + servicio)

// const totalRecaudado = pagados.reduce((acumulador, turno) => {
//   if (turno.servicio === "degradé") {
//     return acumulador + 2500
//   } else if (turno.servicio === "barba") {
//     return acumulador + 1500
//   } else {
//     return acumulador + 2000
//   }
// }, 0)

// console.log("El total recaudado es: $" + totalRecaudado)