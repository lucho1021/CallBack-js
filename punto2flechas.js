let robarPlanos = (id, despegarNave) => {
  if (id > 0 && id <= 10) {
    console.log("Accedimos al plano: " + id);
    despegarNave(null);
  } else {
    console.log("Accedimos a un plano falso");
    despegarNave("error");
  }
};

robarPlanos(11, (error) => {
  if (error) {
    console.log("Devolvete mpp");
  } else {
    console.log("Arrancando la nave");
  }
});
