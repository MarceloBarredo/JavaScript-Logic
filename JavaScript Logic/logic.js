// EJERCICIO 6: Función que determine la cantidad de veces que una palabra se repite en una cadena de texto, independientemente de su longitud.

const repeatedWord = (string, word) => {
    if (!string) console.warn("No ingresaste ninguna cadena de texto")
    else if (!word) console.warn("Ingresar por lo menos una palabra para su busqueda")
    else if (typeof word !== 'string') console.warn("Solo se permiten caracteres validos")
    else {
        let index = 0
        let count = 0
        
        while(index !== -1) {
            index = string.indexOf(word, index) 
            if (index !== -1) {
                index++;
                count++;
            }
        }

        console.info(
            (count) 
            ? `La palabra "${word}" aparece en ${count} oportunidad/es`
            : `La palabra "${word}" no aparece en la cadena de texto`
        )

    }
}

repeatedWord();
repeatedWord("Hola mundo");
repeatedWord("Hola mundo", "hello");
repeatedWord("Hola mundo, en que bello mundo estamos", "mundo");



// EJERCICIO 5: Función que invierta el orden de las palabras de una cadena de texto y cada uno de sus caracteres. Devolver la cadena invertida.

const reverseString = (string) => {

    //Metodo 1: 
    // if (!string) console.warn("No ingresaste ninguna cadena de texto")
    // else {
    //     let invertedChain = string.split("").reverse().join("")
    //     console.info(invertedChain) 
    // }

    //Metodo 2:
    if (!string) console.warn("No ingresaste ninguna cadena de texto")
    else {
        let invertedChain = []
        for (let i = string.length - 1; i >= 0; i--) {
            // console.info(string[i])
            invertedChain.push(string[i])
        }
        console.info(invertedChain.join(""))
    }
}

// reverseString();
// reverseString("Hola, mi nombre es Marcelo")


// EJERCICIO 4: Función que repita una cadena de texto la cantidad de veces que sea especificada.

const repeatString = (string = "", repeater) => {
    if (!string) console.warn("No ingresaste ninguna cadena de texto")
    else if (repeater === 0) console.warn("La cantidad de veces a repetir no puede ser 0")
    else if (Math.sign(repeater) === -1) console.warn("La cantidad de veces a repetir no puede ser negativa")
    else if (!repeater) console.warn("No ingresaste ninguna cantidad para repetir la cadena de texto")
    else if (!Number.isInteger(repeater)) console.warn("El valor ingresado no es un número")
    else console.info(`La cadena de texto "${string}" es repetida ${repeater} veces y su resultado es: ${string.repeat(repeater)}`)
}

// repeatString();
// repeatString("Hola a todos ");
// repeatString("Hola a todos ", "a");
// repeatString("Hola a todos ", -1);
// repeatString("Hola a todos ", 0);
// repeatString("Hola a todos ", 4);



// EJERCICIO 3: Función que a partir de una cadena de texto, devuelva el texto recortado segun el número de caracteres especificada.

const cutString = (string = "", length) => {
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

const splitString = (string = "", spliter) => {
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
const countCharacters2 = (string = "") => {
    (!string) 
    ? console.warn("No ingresaste ninguna cadena de texto") 
    : console.info(`La cadena de texto "${string}" contiene ${string.length} caracteres.`)
}

// countCharacters2();
// countCharacters2("Hola, mi nombre es Marcelo Barredo");