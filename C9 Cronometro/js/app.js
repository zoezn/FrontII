window.addEventListener("load", function () {
  const valor = document.querySelector("#valor");
  const inicio = document.querySelector("#iniciar");
  const parar = document.querySelector("#stop");
  const acelerar = document.querySelector("#acelerar");

  let n = 0;

  let intervalo = function () {
    setInterval(() => {
      valor.innerText = n++;
    }, 1000);
  };

  let intervaloRapido = function () {
    setInterval(() => {
      valor.innerText = n++;
    }, 500);
  };

  inicio.addEventListener("click", () => {
    intervalo();
  });

  acelerar.addEventListener("click", () => {
    window.clearInterval(intervalo);
    intervaloRapido();
  });

  parar.addEventListener("click", () => {
    clearInterval();
    n = 0;
    valor.innerText = n;
  });
});
