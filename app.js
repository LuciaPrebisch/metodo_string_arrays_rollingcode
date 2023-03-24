const variable = "Hola Mundo"

console.log(variable)

console.log(variable.toUpperCase()) // sirve para poner mayusculas 

console.log(variable.toLowerCase()) // minusculas

console.log(variable.charAt(0)) //indicando posicion se muestra "que" hay 

console.log(variable.charAt(variable.length-1)) // toma la ultima posicion de la varaible del string "o"

console.log(variable.endsWith("Mundo")) // indica booleano si esa palabra coincide con la ultima de la variable

const numero = "8"
console.log(typeof numero)  // esto indica que tipo de variable es (si stringo o number)

const numeroParseado = parseInt(numero) // para pasar de string a number
console.log(typeof numeroParseado)

const texto = "Este , es , un , nuevo , texto "
const palabras = texto.split(" ,") // corta por medio de varios caracteres
console.log(palabras)

console.log(palabras.join(`,`)) // une en un string las partes de un vector separado por un caracter(lo contrario)

const vari = "rolling code"
console.log(vari.replace("code", "stones")) // reemplaza el valor de la variable por el que deseo agregar


/*  --------- ARRAYS ---------------- */



let numero1 = [1, 2, 3]
let numero2 = [4, 5, 6]
let numero3 = [7 , 8 ,9]

const todosLosNumeros = numero1.concat(numero2,numero3) // concatena todos los los arrays en el otden que se escribe (si pongo numero 3 primero que nunero 2 se ve numero 3)
console.log(todosLosNumeros)

const verduras = ["lechuga", "tomate", "remolacha"]
const posicion = verduras.indexOf("lechuga") // encuentra la posicion de mi string dentro del vector
console.log(posicion)

const existeVerduras = verduras.includes("pepino") //devuelve booleano dentro del vector verduras
console.log(existeVerduras)

verduras.forEach(verdura => {      // for each es una funcion. Muestra vector alistado
    console.log(verdura)
})

const verduraArray = verduras.map((verdura) => {
 return (verdura)
})
console.log(verduraArray)    //MAP devuelve un array no valores alistados del vector. 

const datosPersonales = {
    id: 1 ,
    nombre: "Lucia",
}
const keys = Object.keys(datosPersonales)  // genera un array con las claves
console.log(keys)

const values = Object.values(datosPersonales) // genera un array con el contenido del objeto
console.log(values)

const claveValor = Object.entries(datosPersonales)
console.log(claveValor)    // genera en un vector dos arrays