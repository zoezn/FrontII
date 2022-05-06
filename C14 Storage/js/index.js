/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado
- implementar el evento "submit", utilizarlo para guardar el comentario en un array
- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)
- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/

const formulario = document.forms[0];
const comentario = document.querySelector("#comentario");
const boton = document.querySelector("button");
const comentarios = document.querySelector(".comentarios");
const arrayComentarios = [];

function hacerComentario(){
    arrayComentarios.push(comentario.value);
    localStorage.setItem('comentarios', JSON.stringify(arrayComentarios));
    agregarComentarioNuevo();
}

function agregarComentarioNuevo(){
    comentarios.innerHTML += `<p>${comentario.value}</p>`
}

function renderizarComentariosViejos(){
    const comentariosPasados = JSON.parse(localStorage.getItem('comentarios'));
    for (let i = 0; i < comentariosPasados.length; i++) {
        arrayComentarios.push(comentariosPasados[i])
        comentarios.innerHTML += `
        <p>${comentariosPasados[i]}</p>
        `
    }
}

formulario.addEventListener("submit", e => {
    e.preventDefault();
    
    hacerComentario();
    formulario.reset();

})

window.addEventListener("load", () => {
    renderizarComentariosViejos();

})


