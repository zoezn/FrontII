const nombreUsuario = document.querySelector("#nombre");
const contraseniaUsuario = document.querySelector("#pass");
const telefonoUsuario = document.querySelector("#tel");
const formulario = document.querySelector("form");
const checkbox = document.querySelectorAll("input[type=checkbox]");
const radio = document.querySelectorAll("input[type=radio]");

let usuario = {
  nombreCompleto: "",
  contra: "",
  tel: "",
  hobbiesSeleccionados: [],
  nacionalidad: "",
};

let span = document.createElement("span");
let nameError = document.querySelector("#nameError");

function normalizarDatos(nombre) {
  let nombreNormalizado = nombre.trim().toUpperCase();

  if (nombreNormalizado.length >= 50) {
    nombreUsuario.classList.add("error");
    nameError.appendChild(span);
    span.innerText = "Se excedio de la cantidad permitida de caracteres";
  } else {
    usuario.nombreCompleto = nombreNormalizado;
  }
}

nombreUsuario.addEventListener("blur", () =>
  normalizarDatos(nombreUsuario.value)
);

function validarContrasenia() {
  let strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,16})"
  );

  if (strongRegex.test(contraseniaUsuario.value)) {
    usuario.contra = contraseniaUsuario.value;
  } else {
    alert("Contrase;a invalida");
  }
  console.log(usuario);
}

contraseniaUsuario.addEventListener("change", () => validarContrasenia());

function validarTel(telefono) {
  usuario.tel = parseInt(telefono);
};

/* function validarHobbies() {
  if (usuario.hobbiesSeleccionados.length <= 4) {
    checkbox.forEach((hobbie) => {
      usuario.hobbiesSeleccionados.length <= 4 ? 
      hobbie.checked ? usuario.hobbiesSeleccionados.push(hobbie.id) : null
    });
  } else {
    null;
  }
} */

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  validarTel(telefonoUsuario.value);

  radio.forEach((nac) => {
    nac.checked ? (usuario.nacionalidad = nac.id) : null;
  });

  console.log(usuario);
});
