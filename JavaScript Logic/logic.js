// EJERCICIO 4: Función que repita una cadena de texto la cantidad de veces que sea especificada.

let repeatString = (string = "", repeater) => {
    if (!string) console.warn("No ingresaste ninguna cadena de texto")
    else if (repeater === 0) console.warn("La cantidad de veces a repetir no puede ser 0")
    else if (Math.sign(repeater) === -1) console.warn("La cantidad de veces a repetir no puede ser negativa")
    else if (!repeater) console.warn("No ingresaste ninguna cantidad para repetir la cadena de texto")
    else if (!Number.isInteger(repeater)) console.warn("El valor ingresado no es un número")
    else console.info(`La cadena de texto "${string}" es repetida ${repeater} veces y su resultado es: ${string.repeat(repeater)}`)
}

// repeatString()
// repeatString("Hola a todos ")
// repeatString("Hola a todos ", "a")
// repeatString("Hola a todos ", -1)
// repeatString("Hola a todos ", 0)
// repeatString("Hola a todos ", 4)



// EJERCICIO 3: Función que a partir de una cadena de texto, devuelva el texto recortado segun el número de caracteres especificada.

let cutString = (string = "", length) => {
    (!string)
    ? console.warn("No ingresaste ninguna cadena de texto")
    : (!length)
        ? console.warn("No ingresaste una longitud para recortar la cadena de texto")
        : console.info(`La cadena de texto "${string} fue recortada en los primeros ${length} caracteres y su resultado es:  ${string.slice(0, length)}`)
}   

// cutString("") 
// cutString("Hola, como estas?")
// cutString("Hola, como estas?", 4) // Output: "Hola"



// EJERCICIO 2: Función que a partir de una cadena de texto, devuelva un arreglo de textos separados por dicho caracter.
// Ej: Input: function("Hola que tal ?", "") --> ["Hola", "que", "tal", "?"]

let splitString = (string = "", spliter) => {
    (!string)
    ? console.warn("No ingresaste ninguna cadena de texto")
    : console.info(string.split(spliter))
}

// splitString();
// splitString("Hoy es jueves, y esta nublado", "");



// EJERCICIO 1: Función que cuente el número de caracteres de una cadena de texto.

//Función Declarada
function countCharacters(string = "") {
    if (!string) {
        console.warn("No ingresaste ninguna cadena de texto")
    } else {
        console.info(`La cadena de texto "${string}" contiene ${string.length} caracteres.`)
    }
}

// countCharacters();
// countCharacters("Hola, mi nombre es Marcelo Barredo");

// Función Expresada
let countCharacters2 = (string = "") => {
    (!string) 
    ? console.warn("No ingresaste ninguna cadena de texto") 
    : console.info(`La cadena de texto "${string}" contiene ${string.length} caracteres.`)
}

// countCharacters2();
// countCharacters2("Hola, mi nombre es Marcelo Barredo");