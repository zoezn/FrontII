/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */



/* --------------- PUNTO 1 --------------- */
function obtenerDatosDelUsuario() {
  let nombreUsuario = prompt("Introduzca su nombre");
  let anioUsuario = prompt("Introduzca su año de nacimiento");
  let ciudadUsuario = prompt("Introduzca su ciudad");
  let interesPorJsUsuario = confirm("Le interesa Javascript?");
  let anioActual = new Date().getFullYear();

  datosPersona.nombre = nombreUsuario;
  datosPersona.ciudad = ciudadUsuario;
  anioUsuario > anioActual ? datosPersona.edad = "Dato ingresado no válido" : datosPersona.edad = anioActual - anioUsuario;
  interesPorJsUsuario ? datosPersona.interesPorJs = "Sí" : datosPersona.interesPorJs = "No";
}



/* --------------- PUNTO 2 --------------- */
function renderizarDatosUsuario() {
  obtenerDatosDelUsuario();

  let nombre = document.querySelector("#nombre");
  let edad = document.querySelector("#edad");
  let ciudad = document.querySelector("#ciudad");
  let javascript = document.querySelector("#javascript");

  nombre.innerHTML = datosPersona.nombre;
  edad.innerHTML = datosPersona.edad;
  ciudad.innerHTML = datosPersona.ciudad;
  javascript.innerHTML = datosPersona.interesPorJs;
}



/* --------------------- PUNTO 3 --------------------- */
function recorrerListadoYRenderizarTarjetas() {
  let contenedor = document.querySelector("#fila");

  listado.forEach(
    (materia) =>
      (contenedor.innerHTML += `
      <div class='caja'>
      <img src=${materia.imgUrl} alt=${materia.lenguajes}/>
      <p class='lenguajes'>${materia.lenguajes}</p>
      <p class='bimestre'>${materia.bimestre}</p>
      </div>
    `)
  );

  materiasBtn.removeEventListener("click", recorrerListadoYRenderizarTarjetas);
}



/* --------------------- PUNTO 4 --------------------- */
function alternarColorTema() {
  let sitio = document.querySelector("#sitio");
  sitio.classList.toggle("dark");
}



/* --------------------- PUNTO 5 --------------------- */
let parrafoSobreMi = document.querySelector("#sobre-mi");

window.addEventListener("keypress", (event) => {
  if ((event.key = "F")) {
    parrafoSobreMi.classList.remove("oculto");
  }
});