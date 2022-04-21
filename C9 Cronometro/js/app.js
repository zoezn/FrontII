window.addEventListener("load", function () {
  const valor = document.querySelector("#valor");
  const inicio = document.querySelector("#iniciar");
  const parar = document.querySelector("#stop");
  const acelerar = document.querySelector("#acelerar");
  const pausa = document.querySelector("#pausa");

  let contador = 0;

  function intervalo(velocidad){
    intervalo = setInterval(() => {
      valor.innerText = contador++;
    }, velocidad);
  }

  inicio.addEventListener("click", () => {
    intervalo(1000);
  });

  parar.addEventListener("click", () => {
    contador = 0;
    valor.innerText = 0;
    clearInterval(intervalo);
  });

  acelerar.addEventListener("click", () => {
    intervalo(500);
  });

  pausa.addEventListener("click", () => {
    clearInterval(intervalo);
  });

});


