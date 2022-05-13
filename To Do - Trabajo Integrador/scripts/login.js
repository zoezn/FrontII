window.addEventListener("load", function () {
  /* ---------------------- obtenemos variables globales ---------------------- */
  const form = document.querySelector("form");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");

  const urlBase = "https://ctd-fe2-todo.herokuapp.com/v1";


  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const usuario = {
      email: email.value,
      password: password.value,
    };
    const settings = {
      method: "POST",
      body: JSON.stringify(usuario),
      headers: {
        "Content-Type": "application/json",
      },
    };
    realizarLogin(settings);
  });

  
  function realizarLogin(settings) {
    fetch(`${urlBase}/users/login`, settings)
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
