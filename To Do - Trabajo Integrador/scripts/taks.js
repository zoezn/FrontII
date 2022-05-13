// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.
const jwt = localStorage.getItem("jwt");

if (jwt) {
  null;
} else {
  location.replace("./login.html");
}

/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener("load", function () {
  /* ---------------- variables globales y llamado a funciones ---------------- */
  const nuevaTarea = document.querySelector("#nuevaTarea");
  const formCrearTarea = document.querySelector("form");
  const btnCerrarSesion = document.querySelector("#btnCerrarSesion");
  const elementoNombre = document.querySelector("div.user-info p");
  const tareasPendientesContenedor =
    document.querySelector(".tareas-pendientes");
  const tareasTerminadasContenedor =
    document.querySelector(".tareas-terminadas");
  const cantFinalizadas = document.querySelector("#cantidad-finalizadas");
  



  const token = JSON.parse(jwt);

  const urlBase = "https://ctd-fe2-todo.herokuapp.com/v1";

  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */

  btnCerrarSesion.addEventListener("click", function () {
    localStorage.clear();
    location.replace("./login.html");
  });

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */

  function obtenerNombreUsuario() {
    const settings = {
      method: "GET",
      headers: {
        authorization: token,
      },
    };

    fetch(`${urlBase}/users/getMe`, settings)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        const nombreUsuario = data.firstName;
        elementoNombre.innerHTML = `
          ${nombreUsuario}
          `;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  obtenerNombreUsuario();

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
  /* -------------------------------------------------------------------------- */

  function consultarTareas() {
    const settings = {
      method: "GET",
      headers: {
        authorization: token,
      },
    };

    fetch(`${urlBase}/tasks`, settings)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        renderizarTareas(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  consultarTareas();

  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */

  formCrearTarea.addEventListener("submit", function (event) {
    event.preventDefault();
    const tarea = {
      description: nuevaTarea.value,
      completed: false,
    };
    const settings = {
      method: "POST",
      body: JSON.stringify(tarea),
      headers: {
        authorization: token,
        "Content-Type": "application/json",
      },
    };
    fetch(`${urlBase}/tasks`, settings)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        console.log(data);
        renderizar(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizar(tarea) {
    if (tarea.completed) {
      tareasTerminadasContenedor.innerHTML += `
      <li class="tarea" data-aos="fade-up">
        <div class="hecha">
          <i class="fa-regular fa-circle-check"></i>
        </div>
        <div class="descripcion">
          <p class="nombre">${tarea.description}</p>
        </div>
        <div class="cambios-estados">
          <button class="change completa" id="${tarea.id}" ><i class="fa-solid fa-rotate-left"></i></button>
          <button class="borrar" id="${tarea.id}"><i class="fa-regular fa-trash-can"></i></button>
        </div>
      </li>
      `;
    } else {
      tareasPendientesContenedor.innerHTML += `
      <li class="tarea" data-aos="fade-up">
      <div class="incompleta">
        <i class="fa-regular fa-circle-check"></i>
      </div>
      <div class="descripcion">
        <p class="nombre">${tarea.description}</p>
      </div>
      <div class="cambios-estados">
        <button class="change incompleta" id="${tarea.id}"><i class="fa-solid fa-rotate-left"></i></button>
        <button class="borrar" id="${tarea.id}"><i class="fa-regular fa-trash-can"></i></button>
      </div>
    </li>
      `;
    }
    
  }


  function renderizarTareas(listado) {
    let contador = 0;
    listado.forEach((tarea) => {
      if (tarea.completed) {
        contador++;
      }
      renderizar(tarea);
    });
    
    cantFinalizadas.innerHTML = contador;
  }

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado() {
    let botonesCambiarEstado = document.querySelectorAll(".change");
    console.log(botonesCambiarEstado)


   /*  botonesCambiarEstado.forEach((boton) => {
      boton.addEventListener("click", function () {
        if (boton.classList.contains("completa")) {
          
          boton.classList.add("incompleta");
          boton.classList.remove("completa");
        } else {
          console.log("anda")
          boton.classList.add("completa");
          boton.classList.remove("incompleta");
        }
      });
    }); */
  }

  botonesCambioEstado();

  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea() {}
});
