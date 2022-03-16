let tarjeta = document.querySelector("div#tarjeta"); /* VA PEGADO DIV#TARJETA */
let titulo = document.querySelector("h1");
let imagen = document.querySelector("img");
let youtube = document.querySelector("a#link_youtube");
let wikipedia = document.querySelector("a#link_wikipedia");

function arreglandoPagina() {
  tarjeta.classList.add("card");
  titulo.classList.remove('titulo-feo');
  imagen.setAttribute("src", "https://www.youtube.com/img/desktop/yt_1200.png");
  youtube.hasAttribute("href");
  return(wikipedia.getAttribute("href"));
}

console.log(arreglandoPagina())
