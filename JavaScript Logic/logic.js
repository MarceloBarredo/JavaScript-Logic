// EJERCICIO 14 : Función que convierte una temperatura en grados Celsius a Farenheit y viceversa.

const convertTemp = (temp, scale) => {
    if (!temp && temp !== 0) console.warn(`Debe ingresar por lo menos una temperatura`)
    else if (typeof temp !== "number") console.warn(`El valor "${temp}" no es un número válido`)
    else if (scale.toUpperCase() === "C") console.info((temp * (9/5)) + 32)
    else if (scale.toUpperCase() === "F") console.info((temp - 32) * (5/9))
}

// convertTemp();
// convertTemp(0, "C")
// convertTemp("abc", "C")
// convertTemp(40, "C")
// convertTemp(32, "F")
// convertTemp(68, "F")


// EJERCICIO 13 : Función que recibe un número y determina si es par o impar.

const isOddOrPair = (number) => {
    if (!number) console.warn(`Debe ingresar por lo menos un valor númerico, distinto de 0`)
    else if (typeof number !== "number") console.warn(`El valor "${number}" no es número`)
    else {
        return (number % 2 === 0)
        ? console.info(`El número ${number} es PAR`)
        : console.info(`El número ${number} es IMPAR`)
    }
}

// isOddOrPair();
// isOddOrPair("a");
// isOddOrPair(-3);
// isOddOrPair(-2);
// isOddOrPair(-1);
// isOddOrPair(0);
// isOddOrPair(1);
// isOddOrPair(2);
// isOddOrPair(3);



// EJERCICIO 12 : Función que recibe un número entero positivo y determina si este es primo o no. Un numero primero es aquel que solo es divisible por si mismo y 1.

const isPrime = (number) => {
    if (!number) console.warn(`Debe ingresar por lo menos un valor númerico entero positivo, mayor a 0.`)
    else if (typeof number !== "number") console.warn(`El valor "${number}" no es número entero positivo`)
    else if (!Number.isInteger(number)) console.warn (`El valor "${number}" no es entero positivo`)
    else if (Math.sign(number) !== 1 || number < 2) console.warn("Debe ingresar un número entero positivo mayor a 2")
    else {
        let boolean = true

        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                boolean = false 
                break;
            }         
        }

        return (boolean)
        ? console.info(`El número ${number} SI es primo`)
        : console.info(`El número ${number} NO es primo`)
    }
}

// isPrime();
// isPrime("a");
// isPrime(12.5);
// isPrime(1);
// isPrime(2)
// isPrime(3)
// isPrime(77)
// isPrime(97)



// EJERCICIO 11 : Función que recibe un número y debe calcular su factorial desde 1 hasta "n" valor.

const factorial = (number) => {
    if (!number) console.warn(`Debe ingresar por lo menos un valor númerico entero positivo, mayor a 0.`)
    else if (typeof number !== "number") console.warn(`El valor "${number}" no es número positivo`)
    else if (!Number.isInteger(number)) console.warn (`El valor "${number}" no es entero positivo`)
    else if (Math.sign(number) !== 1) console.warn("No es posible calcular el factorial de un número negativo o igual a 0")
    else {

        // // Metodo 1:
        // let indexNumber = 1
        // let accumulator = 1

        // while (indexNumber < number) {
        //     accumulator = accumulator * (indexNumber + 1)
        //     indexNumber++
        // }

        // console.info(accumulator)

        //Metodo 2:
        let accumulator = 1

        for (let i = 1; i <= number; i++) {
            accumulator *= i
            
        }

        console.info(`El factorial de ${number} es: ${accumulator}`)
    }
}

// factorial();
// factorial("abc");
// factorial(15.5);
// factorial(-3);
// factorial(0);
// factorial(5);
// factorial(8);



// EJERCICIO 10 : Función que recibe un número entero y evalua si este es capicúa o no (que se lee igual en un sentido y en el otro).

const palindromicNumber = (number) => {
    if (!number) console.warn("Debes ingresar por lo menos un número a evaluar")
    else if (typeof number !== "number") console.warn(`El valor "${number}" no es un número válido`)
    else if (!Number.isInteger(number)) console.warn("El número debe ser entero")
    else {
        let invertedNumber = parseFloat(number.toString().split("").reverse().join(""))

        if (number === invertedNumber) console.info(`El número ${number} es capicúa`)
        else console.info(`El número ${number} lamentablemente no es capicúa`)
            
    }
}

// palindromicNumber();
// palindromicNumber(50.5);
// palindromicNumber(101);
// palindromicNumber(152);
// palindromicNumber("a");



// EJERCICIO 9 : Función que genera un numero aleatorio entre cierto rango de valores dados, ambos extremos incluidos.

const generateRandomRangedValue = (minRange, maxRange) => {
    if (!minRange || !Number.isInteger(minRange)) console.warn("Debes ingresar por lo menos un valor de rango mínimo y debe ser numérico.")
    else if (!maxRange || !Number.isInteger(maxRange)) console.warn("Debes ingresar por lo menos un valor de rango máximo y debe ser numérico.")
    else {
        console.log(`El número generado aleatoriamente es: ${Math.floor(Math.random() * (maxRange - minRange + 1) + minRange)}`)
    }
}

// generateRandomRangedValue();
// generateRandomRangedValue(50);
// generateRandomRangedValue("a",65);
// generateRandomRangedValue(10,15);
// generateRandomRangedValue(1000,1300);



// EJERCICIO 8: Función que elimina un patrón de texto, de una cadena de texto.

const deletePattern = (string, pattern) => {
    if (!string) console.warn("No ingresaste ninguna palabra o cadena de texto")
    else if (!pattern) console.warn("No ingresaste ningún patrón a evaluar")
    else {
        console.info(string.replace(new RegExp(pattern,"ig"), ""))
    }
}

// deletePattern();
// deletePattern("xyz1 xyz2 xyz3 xyz4 xyz5 xyz6");
// deletePattern("xyz1 xyz2 xyz3 xyz4 xyz5 xyz6", "xyz");
// deletePattern("El perro se metio en su casa", "perro");



// EJERCICIO 7: Función que determina si una palabra o frase es palíndroma (que se puede leer igual de izquierda a derecha o derecha a izquierda).

const palindromeValidator = (string) => {
    if (!string) console.warn("No ingresaste ninguna palabra o cadena de texto")
    else {
        let normalString = string.toLowerCase()
        let invertedString = normalString.split("").reverse().join("")

        return (normalString === invertedString)
        ? console.info(`La palabra/frase "${normalString}" es palíndroma`)
        : console.info(`La palabra/frase "${normalString}" NO es palíndroma`)
        
    }
}

// palindromeValidator();
// palindromeValidator("salas");
// palindromeValidator("bathroom");
// palindromeValidator("Hoy es un hermoso dia")
// palindromeValidator("Cinco menos cinco")



// EJERCICIO 6: Función que determine la cantidad de veces que una palabra se repite en una cadena de texto, independientemente de su longitud, no debe ser case-sensitive.

const repeatedWord = (string, word) => {
    if (!string) console.warn("No ingresaste ninguna cadena de texto")
    else if (!word) console.warn("Ingresar por lo menos una palabra para su busqueda")
    else if (typeof word !== 'string') console.warn("Solo se permiten caracteres validos")
    else {
        let index = 0
        let count = 0
        
        while(index !== -1) {
            index = string.toLowerCase().indexOf(word.toLowerCase(), index) 
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

// repeatedWord();
// repeatedWord("Hola mundo");
// repeatedWord("Hola mundo", "hello");
// repeatedWord("Hola mundo, en que bello mundo estamos", "Mundo");
// repeatedWord("Hola mundo, en que bello mundo estamos", "mundo");



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