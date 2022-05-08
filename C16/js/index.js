console.log("Banca Mobile");
const cartelBanco = document.querySelector('.bancaMobile');
const btnConsultar = document.querySelector('button');

btnConsultar.addEventListener('click', function () {

    cartelBanco.classList.remove('oculto');

    const promesaBanco = new Promise((resolve, reject) => {

        const cuenta = {
            nombre: "Michael Scott",
            estadoActivo: true,
            fondos: 10
        };

        setTimeout(function () {

            if (cuenta.estadoActivo != true) {
                reject({
                    mensaje: "Cuenta inactiva, petición rechazada.",
                    estatus: "x450"
                })
            } else if (cuenta.fondos < 100) {
                reject({
                    mensaje: "Fondos insuficientes.",
                    estatus: "z420"
                })
            } else {
                resolve({
                    mensaje: "Pago realizado con éxito",
                    estatus: "c200"
                })
            }

        }, 5500)

    });

    promesaBanco.then(respuesta => {
        console.log("Respuesta resuelta:");
        console.log(respuesta);
        cartelBanco.innerHTML = `<h5>${respuesta.mensaje}</h5>`;
        cartelBanco.style.border = "3px solid green";
    }).catch(error => {
        console.log("Respuesta rechazada");
        console.log(error);
        cartelBanco.innerHTML = `<h5>${error.mensaje}</h5>`;
        cartelBanco.style.border = "3px solid red";
    });

});

// CONSIGNA MESA
// Crear una funcion que reciba como parametro un mesaje de error,
//  la funcion debe presentar en pantalla el contenido del mensaje maquetado en el html
// Finalmente despues de 5 segundos la funcion debe recargar la página.

