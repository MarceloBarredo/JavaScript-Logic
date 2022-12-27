// Ejercicio 20 : Función que determina que un texto es un tipo de email válido.

const validateEmail = (email = undefined) => {
    if (email === undefined) return console.warn(`Debe ingresar por lo menos un email a evaluar`)
    if (typeof email !== 'string') return console.error(`"${email}" no es un tipo de email válido`)

    let regExp = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email)

    return (regExp)
     ? console.info(`"${email}", es un email válido`)
     : console.warn(`"${email}", NO es un email válido`)

}

// validateEmail();
// validateEmail([])
// validateEmail({})
// validateEmail("")
// validateEmail(123);
// validateEmail("Marcelo Barredo");
// validateEmail("123456");
// validateEmail(true)
// validateEmail("marcelo.abarredo@gmail.com")
// validateEmail("marcelo.abarredo@")
// validateEmail("@gmail.com")
// validateEmail("123@gmail.com")



// EJERCICIO 19 : Función que determina que un texto es un nombre válido. 

const validateName = (nombre = undefined) => {
    if (nombre === undefined) return console.warn(`Debe ingresar por lo menos un nombre a evaluar`)
    if (typeof nombre !== 'string') return console.error(`"${nombre}" no es un nombre válido`)

    // ^ --> Significa que no puede haber nada antes de la expresión a validar.
    // $ --> Significa que no puede haber nada despues de la expresión a validar.
    // [] --> Son agrupadores.
    // + --> Para que lo evalue por cada caracter que posee la cadena de texto.
    // \s --> Contempla los espacios en blanco.
    // g --> para que lo evalue en toda la cadena de texto y no solo en la primera coincidencia.

    let regExp = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜú\s]+$/g.test(nombre)

    return (regExp)
     ? console.info(`"${nombre}", es un nombre válido`)
     : console.warn(`"${nombre}", NO es un nombre válido`)
}

// validateName();
// validateName([])
// validateName({})
// validateName("")
// validateName(123);
// validateName("Marcelo Barredo");
// validateName("123456");
// validateName(true)



// EJERCICIO 18 : Función que determina la cantidad de vocales y consonantes en una cadena de texto dada.

const countVowelsAndConsonants = (string = undefined) => {
    if (string === undefined) return console.warn(`Debe ingresar por lo menos un texto a evaluar`)
    if (typeof string !== 'string') return console.error(`"${string}" no es una cadena de texto válida`)

    let vowels = 0
    let consonants = 0

    // Podriamos usar string.toLowerCase() para pasar todo a minuscula y evaluarlo asi. O su operacion inversa toUpperCase().

    for (const character of string) {
        if (/[AEIOUÜÁÉÍÓÚaeiouáéíóúü]/.test(character)) vowels++;
        if (/[BCDFGHJKLMNÑPQRSTVWXYZbcdfghjklmnñpqrstvwxyz]/.test(character)) consonants++;
    }

    console.info({
        string,
        vowels,
        consonants
    })
}

// countVowelsAndConsonants();
// countVowelsAndConsonants(2345);
// countVowelsAndConsonants("hola mundo");
// countVowelsAndConsonants("HOLA MUNDO");
// countVowelsAndConsonants("Mi nombre es Marcelo Alejandro Barredo");



// EJERCICIO 17 : Función que determina a partir de una fecha dada, cuantos años han transcurrido hasta la fecha actual o cuantos años faltan para dicha fecha.

const yearsPassed = (date = undefined) => {
    if (date === undefined) return console.warn(`Debe ingresar por lo menos una fecha`)
    if (!(date instanceof Date)) return console.error(`${date} no es una fecha válida`) 

    let todayDateInMS = new Date().getTime() //getTime me lo devuelve en milisegundos
    let diferenceDateInMS = todayDateInMS - (date.getTime())
    let yearsInMS = 1000 * 60 * 60 * 24 * 365

    let totalYears = Math.floor(diferenceDateInMS / yearsInMS)

    return (Math.sign(totalYears) === -1)
    ? console.info(`Faltan ${Math.abs(totalYears)} años para la fecha "${date}"`)
    : console.info(`Transcurrieron ${totalYears} años desde la fecha "${date}" hasta el día de hoy`)
    

}

// yearsPassed();
// yearsPassed(55);
// yearsPassed(new Date(2040, 11, 19)) //Los meses son indexados como los Arrays.
// yearsPassed(new Date(1992, 11, 19))



// EJERCICIO 16 : Función que devuelve el costo final despues de aplicar un cierto descuento a una cantidad dada.

const applyDiscount = (cost = undefined, discount = 0) => {
    if (cost === undefined) return console.warn(`Debe ingresar por lo menos un valor`)
    if (cost <= 0) return console.warn(`El valor del producto debe ser mayor y distinto de cero`)
    if (discount < 0) return console.warn(`El valor del descuento no puede ser menor a cero`)
    if (typeof cost !== 'number') return console.warn(`"${cost}" no es un valor numérico`)
    if (typeof discount !== 'number') return console.warn(`"${discount}" no es un valor numérico`)

    return console.info(`El costo del producto es de $${cost} y el descuento a aplicar es del ${discount}%, por lo que el costo final aplicado el descuento será de: $${cost - (cost * discount / 100)}`)

}

// applyDiscount();
// applyDiscount("a");
// applyDiscount(500, "a");
// applyDiscount(-200, 20);
// applyDiscount(500, -20);
// applyDiscount(500, 10);



// EJERCICIO 15 : Función que convierte números de base binaria a decimal y viceversa.

const convertBinaryToDecimal = (number = undefined, base = undefined ) => {
    if (number === undefined ) console.warn(`Debe ingresar por lo menos un valor númerico positivo`)
    if (base === undefined) console.warn("Debe ingresar una base a convertir")
    else if (typeof number !== "number") console.warn(`El valor "${number}" no es un número válido`)
    else if (typeof base !== "number") console.warn(`El valor "${base}" no es una base numérica válida`)
    else if (base === 2) { //Binario a Decimal
        console.info(`${number} en base ${base} = ${parseInt(number,base)} en base 10`)
    }
    else if (base === 10) { //Decimal a Binario
        console.info(`${number} en base ${base} = ${number.toString(2)} en base 2`)
    }
    else console.warn("El tipo de base a convertir no es válida")

}

// convertBinaryToDecimal();
// convertBinaryToDecimal(100);
// convertBinaryToDecimal("a",2);
// convertBinaryToDecimal(50,"abc");
// convertBinaryToDecimal(100,2);
// convertBinaryToDecimal(4,10);
// convertBinaryToDecimal(4,9);



// EJERCICIO 14 : Función que convierte una temperatura en grados Celsius a Farenheit y viceversa.

const convertTemp = (temp, scale) => {
    if (!temp && temp !== 0) console.warn(`Debe ingresar por lo menos una temperatura`)
    else if (typeof temp !== "number") console.warn(`El valor "${temp}" no es un número válido`)
    else if (!/C|F/.test(scale)) console.warn(`El Valor "${scale}" de escala no es reconocido`)
    else if (scale.toUpperCase() === "C") console.info(`${temp}°${scale} = ${(temp * (9/5)) + 32}°F`)
    else if (scale.toUpperCase() === "F") console.info(`${temp}°${scale} = ${(temp - 32) * (5/9)}°C`)
}

// convertTemp();
// convertTemp(0, "C")
// convertTemp("abc", "C")
// convertTemp(35, "L")
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