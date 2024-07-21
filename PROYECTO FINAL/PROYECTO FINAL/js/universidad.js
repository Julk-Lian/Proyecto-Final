class Universidad{
    ejercicio1(opcion){
        let num1, num2, resp, msg = ""
        num1 = document.getElementById("numero1").value
        num1 = parseInt(num1)
        num2 = document.getElementById("numero2").value
        num2 = parseInt(num2)
        resp = document.getElementById("resp")  
        if (opcion === "Sumar") {
            msg += "La suma es: "+ (num1 + num2)+ "<br>"
            msg += "explicacion: " + num1 + " + " + num2 + " = " + (num1 + num2) + "<br>"
        } 
        if (opcion === "Restar") {
            msg += "La resta es: "+ (num1 - num2)+ "<br>" 
            msg += "explicacion: " + num1 + " - " + num2 + "=" + (num1 - num2) + "<br>"   
        }
        if (opcion === "Multiplicar") {
            msg += "La multiplicacion es: "+ (num1 * num2) + "<br>"
            msg += "explicacion: " + num1 + " * " + num2 + "=" + (num1 * num2) + "<br>"
        } 
        if (opcion === "Dividir") {
            if (num2 !== 0) {
                msg += "La division es: "+ (num1 / num2) + "<br>"
                msg += "explicacion: " + num1 + " / " + num2 + "=" + (num1 / num2) + "<br>"

            } else {
                msg += "No se puede dividir por cero" + "<br>"
            }
        }
        resp.innerHTML = msg
    }
    ejercicio2() {
        let numero, resp, msg = ""
        numero = document.getElementById("numero-conversion").value
        resp = document.getElementById("resp")

        if (/^[01]+$/.test(numero)) {
            let decimal = parseInt(numero, 2)
            msg += "Hexadecimal: " + decimal.toString(16).toUpperCase() + "<br>"
            msg += "Explicación: La conversión de binario a hexadecimal de " + numero + " es " + decimal.toString(16).toUpperCase() + "<br>"
        } else if (/^[0-9A-Fa-f]+$/.test(numero)) {
            let decimal = parseInt(numero, 16)
            msg += "Binario: " + decimal.toString(2) + "<br>"
            msg += "Explicación: La conversión de hexadecimal a binario de " + numero + " es " + decimal.toString(2) + "<br>"
        } else {
            msg += "Por favor, ingrese un número binario o hexadecimal válido." + "<br>"
        }

        resp.innerHTML = msg
    }

    ejercicio3() {
        let numero, resp, msg = ""
        numero = document.getElementById("numero-conversion").value
        numero = parseInt(numero);
        resp = document.getElementById("resp")

        if (numero >= 0) {
            msg += "Decimal: " + parseInt(numero, 2) + "<br>"
            msg += "explicacion: La conversión de binario a decimal de " + numero + " es " + parseInt(numero, 2) + "<br>"

            msg += "Binario: " + numero.toString(2) + "<br>"
            msg += "explicacion: La conversión de decimal a binario de " + numero + " es " + numero.toString(2) + "<br>"
        } else {
            msg += "Por favor, ingrese un número válido." + "<br>"
        }

        resp.innerHTML = msg
    }
    ejercicio_u1() {
        let text = document.getElementById("text").value.toLowerCase()
        let characters = text.length
        let vowels = new Set(text.match(/[aeiou]/gi) || []).size
        let consonants = new Set(text.match(/[bcdfghjklmnñpqrstvwxyz]/gi) || []).size
        let spaces = (text.match(/\s/g) || []).length
        let words = (text.match(/\b\w+\b/g) || []).length
        let digits = (text.match(/\d/g) || []).length

        document.getElementById("txtCharacters").value = characters
        document.getElementById("txtVowels").value = vowels
        document.getElementById("txtConsonants").value = consonants
        document.getElementById("txtSpaces").value = spaces
        document.getElementById("txtWords").value = words
        document.getElementById("txtDigits").value = digits

        console.log("Characters: ", characters)
        console.log("Vowels: ", vowels)
        console.log("Consonants: ", consonants)
        console.log("Spaces: ", spaces)
        console.log("Words: ", words)
        console.log("Digits: ", digits)
    }
    ejercicio_u2() {
        let text = document.getElementById("text_2").value
        let inverted = text.split("").reverse().join("")
        document.getElementById("txtInverted").value = inverted
    }
    ejercicio_u3() {
        let phrase1 = document.getElementById("phrase1").value.trim()
        let phrase2 = document.getElementById("phrase2").value.trim()
        let words1 = phrase1.split(/\s+/).filter(word => word).length
        let words2 = phrase2.split(/\s+/).filter(word => word).length
        let largestPhrase = ""

        if (words1 > words2) {
            largestPhrase = phrase1
        } else if (words2 > words1) {
            largestPhrase = phrase2
        } else {
            largestPhrase = "Ambas frases tienen la misma cantidad de palabras"
        }

        document.getElementById("phrase_largest").innerHTML = largestPhrase
        console.log("Frase 1 palabras: ", words1)
        console.log("Frase 2 palabras: ", words2)
        console.log("Frase más larga: ", largestPhrase)
    }

    ejercicio_u4() {
        let numero_convertir = document.getElementById("number").value
        let numeros = numero_convertir.split(',').map(Number)
        let numeros_primos = this.obtenerPrimos(numeros)
        document.getElementById("number_prime").value = numeros_primos.join(', ')
    }

    esPrimo(num) {
        if (num <= 1) return false
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false
        }
        return true
    }

    obtenerPrimos(arr) {
        return arr.filter(this.esPrimo)
    }

    ejercicio_u5() {
        let numbers = document.getElementById("number").value.split(',').map(num => parseInt(num.trim()))
        let result = []
        let msg = ""

        function isPerfectNumber(num) {
            if (num < 2) return false
            let sum = 1
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    sum += i
                    if (i !== num / i) sum += num / i
                }
            }
            return sum === num
        }

        numbers.forEach(num => {
            if (isPerfectNumber(num)) {
                result.push(num);
            }
        });

        if (result.length > 0) {
            msg += "Números Perfectos: " + result.join(', ') + "<br>"
            msg += "Explicación: Los números perfectos son aquellos que son iguales a la suma de sus divisores positivos excluyendo el propio número.<br>"
        } else {
            msg += "No se encontraron números perfectos en el arreglo proporcionado.<br>"
        }

        document.getElementById("result_text").innerHTML = msg
    }

    ejercicio6() {
        let notasInput = document.getElementById("notas").value.trim()
        let resp = document.getElementById("resp")
        let msg = ""
        let notasArray = notasInput.split(',').map(num => parseFloat(num.trim()))
        
        if (notasArray.length === 0 || notasArray.some(isNaN)) {
            msg += "Por favor, ingrese un arreglo de notas válido." + "<br>"
        } else {
            let total = notasArray.reduce((acc, val) => acc + val, 0)
            let promedio = total / notasArray.length
            let frequency = {}
            let maxFreq = 0
            let moda = []

            notasArray.forEach(num => {
                frequency[num] = (frequency[num] || 0) + 1
                if (frequency[num] > maxFreq) {
                    maxFreq = frequency[num]
                }
            })

            for (let num in frequency) {
                if (frequency[num] === maxFreq) {
                    moda.push(num);
                }
            }

            msg += "Promedio: " + promedio.toFixed(2) + "<br>"
            msg += "Explicación: El promedio de las notas es " + promedio.toFixed(2) + ", que se obtiene sumando todas las notas y dividiendo entre el número de notas.<br>"

            if (moda.length === 1) {
                msg += "Moda: " + moda[0] + "<br>"
                msg += "Explicación: La moda es el valor que más veces se repite en el arreglo, en este caso " + moda[0] + ".<br>"
            } else if (moda.length > 1) {
                msg += "Moda: " + moda.join(', ') + "<br>"
                msg += "Explicación: Hay varias modas, ya que varios valores se repiten el mismo número de veces. Las modas son " + moda.join(', ') + ".<br>"
            } else {
                msg += "Moda: No hay moda, ya que todos los valores se repiten con la misma frecuencia.<br>"
            }
        }

        resp.innerHTML = msg
    }
}
let universidad = new Universidad