function asignarPadawans(nombre, planeta, edad, estatura, clasificacion) {
  let padawans = {
    nombre: nombre,
    planeta: planeta,
    edad: edad,
    estatura: estatura,
  };
  console.log(padawans);
  clasificacion(padawans);
}

asignarPadawans("Luis", "Planetica", 16, 1.6, function (padawans) {
  if (padawans.edad >= 15) {
    console.log("Manejo del sable de Luz");
  } else if (padawans.edad < 15) {
    console.log("Manejo de la fuerza");
  }
});
