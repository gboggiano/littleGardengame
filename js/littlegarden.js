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
  console.info("Tu cordura es de:  " + usuario.cordura + "!");
}

let es1 = prompt(
  "ya recordando tu nombre " +
    usuario.nombre +
    " logras calmarte un poco miras a tu alrededor. Estás rodeado de plantas y flores de todos los colores y formas. Algunas son hermosas y fragantes, otras son extrañas y repulsivas. El sol brilla con fuerza en el cielo azul, y una brisa suave mece las hojas. \n \n  ves la verja metálica que rodea el jardín. Es alta y sólida, con puntas afiladas en la parte superior. Parece imposible saltarla o romperla \n \n  Te acercas a la verja y que haces? a) la tocas para ver si de algun modo se puede doblar o b) te das media vuelta y tratas de seguir ubicanmdote (solo escriba la letra (a) o (b)"
);

while (es1 != "a" && es1 != "b") {
  console.log("Por favor solo escriba una opción, a o b");

  es1 = prompt("Por favor solo escriba una opción, a o b");
}

if (es1 === "a") {
  usuario.cordura = sustCordura(usuario.cordura, 10);
  statusCordura();
} else if (es1 === "b") {
  usuario.cordura = sustCordura(usuario.cordura, 0);
  statusCordura();
}

window.alert("tu cordura actual es de " + usuario.cordura);
