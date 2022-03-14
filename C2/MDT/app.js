/* let eleccionPrompt = prompt("Elegi una opcion: 1=piedra, 2=papel, 3=tijera");
let eleccionUsuario = parseInt(eleccionPrompt); */
/* let eleccionComputadora = Math.floor(Math.random() * 3) + 1; */

function piedraPapeloTijera() {
  let eleccionPrompt = prompt("Elegi una opcion: 1=piedra, 2=papel, 3=tijera");
  let eleccionComputadora = Math.floor(Math.random() * 3) + 1;
  let eleccionUsuario = parseInt(eleccionPrompt);
  if (eleccionUsuario == eleccionComputadora) {
    console.log("Empate!");
  } else if (eleccionUsuario == 1 && eleccionComputadora == 2) {
    console.log("Perdiste!");
  } else if (eleccionUsuario == 1 && eleccionComputadora == 3) {
    console.log("Ganaste!");
  } else if (eleccionUsuario == 2 && eleccionComputadora == 1) {
    console.log("Ganaste!");
  } else if (eleccionUsuario == 2 && eleccionComputadora == 3) {
    console.log("Perdiste!");
  } else if (eleccionUsuario == 3 && eleccionComputadora == 1) {
    console.log("Perdiste!");
  } else if (eleccionUsuario == 3 && eleccionComputadora == 2) {
    console.log("Ganaste!");
  } else console.log("A mi me parece que te equivocaste");
  console.log(eleccionComputadora);
  console.log(eleccionUsuario);
  let seguirJugando = confirm("Queres seguir jugando?");
  if (seguirJugando == true) {
    piedraPapeloTijera();
  }
}

piedraPapeloTijera();
