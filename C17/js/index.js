// Aquí realizamos un la consulta de la promesa, esperando su respuesta asíncrona
fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data.results);
        renderizarDatosUsuario(data);
    });

function renderizarDatosUsuario(datos) {
    /* -------------------------------- CONSIGNA 1 -------------------------------- */
    // Aquí deben desarrollar una función que muestre en pantalla:
    // la foto, el nombre completo del usuario y su email.
    // Esto debe estar basado en la info que nos llega desde la API e insertarse en el HTML.
    const tarjeta = document.querySelector(".tarjeta");
    datos.results.map(person => {
        tarjeta. innerHTML = `
        <div class="tarjeta">           
            <img src=${person.picture.medium} alt="">
            <h3>${person.name.first}</h3>
            <p>${person.email}</p>
        </div>
        `
    })
    

    
}


/* --------------------------- CONSIGNA 2 (extra) --------------------------- */
// Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
// Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
// Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un click.

const boton = document.querySelector("#random");
boton.addEventListener('click', peticion);