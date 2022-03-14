 let eleccionUsuario = prompt("Elegi: 1=piedra, 2=papel, 3=tijera");

 function piedraPapeloTijera() {
  let random = (Math.random() * 3 + 1);
  let elecciones = { 1: "piedra", 2: "papel", 3: "tijera" };

  if (elecciones == 'piedra' && random == 'piedra') {
    console.log("Empate");
  } else if (elecciones == 'piedra' && random == 'papel') {
    console.log("Perdiste");
  } else if (elecciones == 'piedra' && random == 'tijera') {
    console.log("Perdiste");
  } else if (elecciones == 'papel' && random == 'piedra') {
    console.log("Ganaste");
  } else if (elecciones == 'papel' && random == 'papel') {
    console.log("Empate");
  } else if (elecciones == 'papel' && random == 'tijera') {
    console.log("Ganaste");
  } else if (elecciones == 'tijera' && random == 'tijera') {
    console.log("Empate");
  } else if (elecciones == 'tijera' && random == 'papel') {
    console.log("Ganaste");
  } else if (elecciones == 'tijera' && random == 'piedra') {
    console.log("Perdiste");
  }
}

console.log(piedraPapeloTijera()); 

/* function 'piedra''Papel'o'Tijera'(elecciones){

    let 'piedra' = 1
    let 'papel' = 2
    let 'tijera' = 3

    let random = parseInt(Math.random() * 3 + 1)

    if (elecciones == 'piedra' && random == 'piedra') {
        console.log("Empate")
    } else if (elecciones == 'piedra' && random == 'papel') {
        console.log("Perdiste")
    } else if (elecciones == 'piedra' && random == 'tijera') {
        console.log("Ganaste")
    } else if (elecciones == 'papel' && random == 'piedra') {
        console.log("Ganaste")
    } else if (elecciones == 'papel' && random == 'papel') {
        console.log("Empate")
    } else if (elecciones == 'papel' && random == 'tijera') {
        console.log("Perdiste")
    } else if (elecciones == 'tijera' && random == 'piedra') {
        console.log("Perdiste")
    } else if (elecciones == 'tijera' && random == 'papel') {
        console.log("Ganaste")
    } else if (elecciones == 'tijera' && random == 'tijera') {
        console.log("Empate")
    }
}
console.log('piedra''Papel'o'Tijera'(1)); */

