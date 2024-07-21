class Tarea {
    ejercicio1(opcion) {
        let resp = document.getElementById("resp");
        let msg = "";

        if (opcion === "8") {
            msg = `<span class="correcto">${opcion} Respuesta Correcta, Excelente</span><br>`;
        } else {
            msg = `<span class="incorrecto">${opcion} Respuesta incorrecta, siga intentando</span><br>`;
        }
        resp.innerHTML = msg;
    }

    ejercicio2(opcion) {
        let resp = document.getElementById("resp");
        let msg = "";

        if (opcion === "20") {
            msg = `<span class="correcto">${opcion} Respuesta Correcta, Excelente</span><br>`;
        } else {
            msg = `<span class="incorrecto">${opcion} Respuesta incorrecta, siga intentando</span><br>`;
        }
        resp.innerHTML = msg;
    }

    ejercicio3(opcion) {
        let resp = document.getElementById("resp");
        let msg = "";

        if (opcion === "40") {
            msg = `<span class="correcto">${opcion} Respuesta Correcta, Excelente</span><br>`;
        } else {
            msg = `<span class="incorrecto">${opcion} Respuesta incorrecta, siga intentando</span><br>`;
        }
        resp.innerHTML = msg;
    }

    ejercicio4(opcion) {
        let resp = document.getElementById("resp");
        let msg = "";

        if (opcion === "32") {
            msg = `<span class="correcto">${opcion} Respuesta Correcta, Excelente</span><br>`;
        } else {
            msg = `<span class="incorrecto">${opcion} Respuesta incorrecta, siga intentando</span><br>`;
        }
        resp.innerHTML = msg;
    }

    // Lógica de Comparaciones
    ejercicio5(opcion) {
        let resp = document.getElementById("resp");
        let msg = "";

        if (opcion === "8") {
            msg += `<span class="correcto">Respuesta Correcta</span><br>`;
            msg += `<span class="correcto">El número: ${opcion} es mayor que el número 5</span><br>`;
        } else {
            msg += `<span class="incorrecto">Respuesta Incorrecta</span><br>`;
            msg += `<span class="incorrecto">El número: ${opcion} es menor que el número 8</span><br>`;
        }
        resp.innerHTML = msg;
    }

    ejercicio6(opcion) {
        let resp = document.getElementById("resp");
        let msg = "";

        if (opcion === "Maria") {
            msg += `<span class="correcto">Respuesta Correcta</span><br>`;
            msg += `<span class="correcto">${opcion} tiene 14 años es mayor que Juan</span><br>`;
        } else if (opcion === "Juan") {
            msg += `<span class="incorrecto">Respuesta Incorrecta</span><br>`;
            msg += `<span class="incorrecto">${opcion} tiene 12 años es menor que Maria</span><br>`;
        }
        resp.innerHTML = msg;
    }

    ejercicio7(opcion) {
        let resp = document.getElementById("resp");
        let msg = "";

        if (opcion === "Laura") {
            msg += `<span class="correcto">Respuesta Correcta</span><br>`;
            msg += `<span class="correcto">${opcion} de 7 años es más joven que Pedro</span><br>`;
        } else {
            msg += `<span class="incorrecto">Respuesta Incorrecta</span><br>`;
            msg += `<span class="incorrecto">${opcion} de 9 años es mayor que Laura</span><br>`;
        }
        resp.innerHTML = msg;
    }

    // Introducción a Condicionales
    ejercicio8(opcion) {
        let resp = document.getElementById("resp");
        let msg = "";

        if (opcion === "Paragua" || opcion === "Abrigo" || opcion === "Gorra") {
            msg = `<span class="correcto">${opcion} respuesta correcta</span><br>`;
        } else {
            msg = `<span class="incorrecto">${opcion} respuesta incorrecta</span><br>`;
        }
        resp.innerHTML = msg;
    }

    ejercicio9(opcion) {
        let resp = document.getElementById("resp");
        let msg = "";

        if (opcion === "Alfombra") {
            msg = `<span class="correcto">${opcion} Respuesta Correcta</span><br>`;
        } else {
            msg = `<span class="incorrecto">${opcion} Respuesta Incorrecta</span><br>`;
        }
        resp.innerHTML = msg;
    }

    ejercicio10(opcion) {
        let resp = document.getElementById("resp");
        let msg = "";

        if (opcion === "balcón") {
            msg = `<span class="correcto">${opcion} respuesta correcta</span><br>`;
        } else {
            msg = `<span class="incorrecto">${opcion} respuesta incorrecta</span><br>`;
        }
        resp.innerHTML = msg;
    }

    ejercicio11(opcion) {
        let resp = document.getElementById("resp");
        let msg = "";

        if (opcion === "Botella") {
            msg = `<span class="correcto">${opcion} respuesta correcta</span><br>`;
        } else {
            msg = `<span class="incorrecto">${opcion} respuesta incorrecta</span><br>`;
        }
        resp.innerHTML = msg;
    }
}

let tarea = new Tarea();
