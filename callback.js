console.log("Iniciando....");

function ejecutarPrograma(finalizarPrograma) {
  setTimeout(function () {
    console.log("Procesando....");
    finalizarPrograma();
  }, 5000);
}

ejecutarPrograma(function () {
  console.log("Terminando...");
});
