console.log(
  "Bienvenido, esta será tu bitacora para mantener tu cordura al margen y poder plasmar lo ùltimo que hagas si no sales de este lugar..."
);

const usuario = {};

let nombre = prompt(
  "Despiertas muy confundido...no sabes cómo llegaste aquí, ni quién te ha traído.. tratas de recordar quien eres..\n \n ¿quien eres? ¿como te llamas? "
);

usuario.nombre = nombre;

let edad = prompt(
  "Poco a poco vas entrando en si, te das cuenta que estas rodeado de muchas plantas extrañas y un olor desconocido... intestas recordar \n \n ¿que edad tienes? "
);

usuario.edad = edad;

usuario.cordura = 100;

console.log(usuario);

window.alert(
  "Estás atrapado en un extraño jardín lleno de plantas y flores exóticas, pero también de peligros y amenazas, \n \n Para sobrevivir y escapar del jardín, tendrás que explorar sus rincones, resolver sus enigmas, y evitar los peligros. \n \n Pero también tendrás que cuidar tu cordura. El jardín afecta a tu mente, y te hace ver y oír cosas que no son reales. Cada vez que te enfrentes a una situación de terror o estrés, perderás cordura. Si tu cordura llega a 0, perderás el control y te volverás loco. \n \n Puedes recuperar cordura encontrando objetos o lugares que te den seguridad o tranquilidad. ¿Serás capaz de escapar del jardín? ¿O te convertirás en su próxima víctima? "
);

// controles de cordura
function sustCordura(num1, num2) {
  return num1 - num2;
}

function sumCordura(num1, num2) {
  return num1 + num2;
}

function statusCordura() {
  console.warn("Tu cordura es de:  " + usuario.cordura + "!");
}

let es1 = prompt(
  "ya recordando tu nombre " +
    usuario.nombre +
    " logras calmarte un poco miras a tu alrededor. Estás rodeado de plantas y flores de todos los colores y formas. Algunas son hermosas y fragantes, otras son extrañas y repulsivas. El sol brilla con fuerza en el cielo azul, y una brisa suave mece las hojas. \n \n Ves las rejas metálica que rodea el jardín, es alta y sólida, con puntas afiladas en la parte superior. Parece imposible saltarla o romperla \n \n Te acercas a las rejas y que haces? \n \n  a) la tocas para ver si de algun modo se puede doblar \n \n  b) te das media vuelta y tratas de seguir ubicandote \n \n (solo escriba la letra (a) o (b)"
);

while (es1 != "a" && es1 != "b") {
  console.log("Por favor solo escriba una opción, a o b");

  es1 = prompt("Por favor solo escriba una opción, a o b");
}

if (es1 === "a") {
  usuario.cordura = sustCordura(usuario.cordura, 10);
  statusCordura();
  window.alert(
    "Está electrificada. Una descarga te recorre el brazo y te hace retroceder con un grito."
  );
} else if (es1 === "b") {
  usuario.cordura = sustCordura(usuario.cordura, 0);
  statusCordura();
}

let es1A = prompt(
  "Decides explorar el jardín en busca de alguna salida o alguna pista. Caminas sin rumbo fijo entre las plantas, evitando las más sospechosas o peligrosas.\n \n De repente, ves una casa al fondo del jardín. Es una casa antigua y deteriorada, con las ventanas rotas y la pintura desconchada. Parece abandonada desde hace años... \n \n  te vas acercando a ella cuando de repente sientes que pisas algo, miras hacia abajo y ves un mechero, se ve oxidado pero puede funcionar... que haces? \n \n  a) lo dejas, se ve en mal estado y no sabes de quien es.. \n \n  b) lo tomas y lo guardas, quizas sea útil"
);

const inventario = [];

es1A = es1A.trim().charAt(0).toUpperCase();

switch (es1A) {
  case "A":
    console.warn("No tomas nada, tu inventario está vacio");
    break;

  case "B":
    inventario.push("mechero");
    alert("has agarrado: " + inventario);
    break;

  default:
    console.log("No has ingresado una opcion valida");
}

console.log("tu inventario se ha actualizado , tienes :" + inventario);
console.log(inventario);
