const ALTURA_MINIMA: number = 1.3;
let alturaUsuario: number = Number(prompt("Ingrese su altura en metros"));

if (alturaUsuario >= ALTURA_MINIMA) {
  console.log("Usted puede subirse a este juego");
} else {
  console.log(
    "Usted no cumple con la altura minima requerida para este juego, su altura ingresada es:",
    alturaUsuario
  );
}
//montañarusa
