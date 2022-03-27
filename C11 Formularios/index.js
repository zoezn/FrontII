const nombreUsuario = document.querySelector("#nombre")
const contraseniaUsuario = document.querySelector("#pass")
const telefonoUsuario = document.querySelector("#tel")
const formulario = document.querySelector("form")
const checkbox = document.querySelectorAll("input[type=checkbox]")
const radio = document.querySelectorAll("input[type=radio]")


let usuario = {
    nombreCompleto: "",
    contra: "",
    tel: "",
    hobbiesSeleccionados: [],
    nacionalidad: ""
}


let span = document.createElement("span")
let nameError = document.querySelector("#nameError")



function normalizarDatos(nombre) {
    let n = nombre.trim().toUpperCase()
    if(n.length <= 50) {
        usuario.nombreCompleto = n
    }
    else {
        nombreUsuario.classList.add("error")
        nameError.appendChild(span)
        span.innerText = "Se excedio de la cantidad permitida de caracteres"

    }
}

function validarTel(tele) {
        usuario.tel = parseInt(tele) 
}

nombreUsuario.addEventListener("blur", () => {
    normalizarDatos(nombreUsuario.value)
})

contraseniaUsuario.addEventListener("change", () => {
    let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16})");

    if (strongRegex.test(contraseniaUsuario.value)) {
        usuario.contrasenia = contraseniaUsuario.value
    }
    else {
        alert("contra invalida")
    }
    console.log(usuario)
   })

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    validarTel(telefonoUsuario.value)

    checkbox.forEach( hobbie => {
    hobbie.checked ? usuario.hobbiesSeleccionados.push(hobbie.id) : null
    })

    radio.forEach( nac => {
    nac.checked ? usuario.nacionalidad = nac.id : null
    })

    console.log(usuario)
})











