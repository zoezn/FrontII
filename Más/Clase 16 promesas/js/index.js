
  console.log("Bienvenidos al Banco Digital");

let miPrimeraPromise = new Promise((resolve, reject) => {

    const cuentaBancaria = {
        estado: "activa",
        usuario: "Michael Scott",
        cajaDeAhorros:  1000000
    };

    setTimeout(function () {

        if (cuentaBancaria.cajaDeAhorros < 1) {
            reject({
                mensaje: "Fondos insuficientes en la cuenta."
            });
        } else if (cuentaBancaria.estado != "activa") {
            reject({
                mensaje: "La cuenta no se encuentra activa."
            });
        } else {
            resolve({
                mensaje: "La transacción se realizó con éxito."
            });
        }

    }, 2500);

});


const cajero = document.querySelector('.bancaMobile')


miPrimeraPromise
.then((respuesta) => {
    cajero.innerHTML = `<h4>${respuesta.mensaje}</h4>`
})
.catch((err) => {
    cajero.innerHTML = `<h4>${err.mensaje}</h4>`
    console.log(err);
});

console.log(miPrimeraPromise)

