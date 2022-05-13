window.addEventListener("load", function () {
  const formulario = document.querySelector("form");
  const nombre = document.querySelector("#nombre");
  const apellido = document.querySelector("#apellido");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const passwordRepetida = document.querySelector("#passwordRepetida");

  const urlBase = "https://ctd-fe2-todo.herokuapp.com/v1";

  /* -------------------------------------------------------------------------- */
  /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
  /* -------------------------------------------------------------------------- */
  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    const usuario = {
      firstName: nombre.value,
      lastName: apellido.value,
      email: email.value,
      password: password.value,
    };

    if (password.value == passwordRepetida.value) {
      console.log(usuario);
      const settings = {
        method: "POST",
        body: JSON.stringify(usuario),
        headers: {
          "Content-Type": "application/json",
        },
      };
      realizarRegister(settings);
    } else {
      alert("Las contraseñas no coinciden");
    }
  });

  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
  /* -------------------------------------------------------------------------- */
  function realizarRegister(configuraciones) {
    // creamos la consulta a la API
    fetch(`${urlBase}/users`, configuraciones)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem("jwt", JSON.stringify(data.jwt));
          location.replace("./mis-tareas.html");
        }
      })
      .catch((error) => {
        console.log("Error escuchando la promesa.");
        console.log(error);
      });
  }
});
