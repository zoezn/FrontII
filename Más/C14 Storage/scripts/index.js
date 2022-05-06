// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
    {
      id: 5,
      name: "Zoe",
      email: "asd",
      password: "123",
    },
  ],
};


const email = document.querySelector("#email-input");
const contrasenia = document.querySelector("#password-input");
const botonIniciarSesion = document.querySelector(".login-btn");
const iniciandoSesion = document.querySelector("div#loader");

function iniciarSesion() {
  const usuarios = baseDeDatos.usuarios;
  for (let i = 0; i < usuarios.length; i++) {
    if (
      usuarios[i].email == email.value &&
      usuarios[i].password == contrasenia.value
    ) {
      localStorage.setItem("email", email.value);
      localStorage.setItem("id", usuarios[i].id);
      localStorage.setItem("name", usuarios[i].name);
      iniciandoSesion.classList.toggle("hidden");
      ocultarInicioSesion();
      mensajeBienvenida();
      return console.log("Iniciaste sesion");
    } else {
      null;
    }
  }
}

function ocultarInicioSesion() {
  const form = document.querySelector("form");
  const h1 = document.querySelector("h1");
  form.classList.add("hidden");
  h1.classList.add("hidden");
}

function mensajeBienvenida() {
  const main = document.querySelector("main");
  const usuarioNombre = localStorage.getItem("name");
  main.innerHTML += `
  <h1>Bienvenido al sitio ${usuarioNombre}</h1>
  <button class="logout-btn" type="button">Cerrar sesión</button>
  `;
  const botonCerrarSesion = document.querySelector(".logout-btn");
  botonCerrarSesion.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
  });
}

window.addEventListener("load", function () {
  if (localStorage.getItem("email") == null) {
    botonIniciarSesion.addEventListener("click", () => {
      iniciarSesion();
    });
  } else {
    ocultarInicioSesion();
    mensajeBienvenida();
  }
});