console.log("Hello, World!");

// FUNCIONES CON PARAMETROS
function nombreDeLaFuncion(){
  console.log('Hola a todos')
}

nombreDeLaFuncion()

// Funciones sin parametros con retorno de datos

function multiplicacion(numero1, numero2){
  return numero1 * numero2
} 

const resultadoDeMultiplicacion = multiplicacion(2, 3) // 6

console.log(resultadoDeMultiplicacion)

// Funciones con parametros y retorno de datos

function resta(numero1, numero2){
  return numero1 - numero2
}

const resultadoDeResta = resta(10, 5) // 5
console.log(resultadoDeResta)


//Arrow function
//sin parametros
const imprimiendoSaludo = () => console.log('Hola a todos')
imprimiendoSaludo()

//con parametros

const otraSuma = (numero1, numero2) => console.log(numero1 + numero2)
otraSuma(5, 10) // 15

// Funciones sin parametros con retorno de datos

const otraMultiplicacion = (numero1, numero2) => numero1 * numero2

console.log(otraMultiplicacion(2, 3)) // 6


//Funciones sin parametros en multiples lineas

const saludoEnMayuscula = (nombre) => {
  const nombreEnMayuscula = nombre.toUpperCase()

  return 'Hola ' + nombreEnMayuscula + '!!'
}

console.log(saludoEnMayuscula('Juan')) // Hola JUAN!!

//Funciones con parametros por defecto con retorno y en multiples lineas

const otrosSaludoConParametrosPorDefecto = (nombre= 'Anonimo') => {
  const nombreEnMayuscula = nombre.toUpperCase()

  return 'Hola ' + nombreEnMayuscula + '!!'
}

console.log(otrosSaludoConParametrosPorDefecto()) // Hola ANONIMO!!|
console.log(otrosSaludoConParametrosPorDefecto('Hiroito')) 

const listaDeNumeros = [6,33, 998, 1, -66, 453]

// Math.max.max(listaDeNumeros)
console.log(
  Math.max(...listaDeNumeros),
  Math.min(...listaDeNumeros) // -66
)

// Spread operator (...)

const frutas = ['manzana', 'pera', 'naranja', 'platanos', 'sandia']
const FrutasYVerduras = ['lechuga', 'tomate', 'zanahoria', ...frutas]
console.log(frutas)
console.log(FrutasYVerduras) // ['lechuga', 'tomate', 'zanahoria', 'manzana', 'pera', 'naranja', 'platanos', 'sandia']

const persona = {
  nombre : 'Victor',
  apellido : 'Villazon',
  edad: 30,
}

const stack = {
  javasript: 'Reactjs',
  python: 'Django',
  nodejs: 'Expressjs'
}

const personaYStack = {
  ...persona,
  ...stack
}

console.log(personaYStack) // { nombre: 'Victor', apellido: 'Villazon', edad: 30, javasript: 'Reactjs', python: 'Django', nodejs: 'Expressjs' }
