const mainJs = document.getElementsByTagName("main")[0];

const spacetotest = document.createElement("span");
spacetotest.innerHTML = "";
mainJs.appendChild(spacetotest);

let texto = "this is a test, exploring differents styles etc";
let intervalo = 100;

efectoEscritura(spacetotest, texto, intervalo);

//

function efectoEscritura(elemento, texto, intervalo) {
  let i = 0; // índice de la letra actual
  let timer = setInterval(function () {
    // temporizador que se ejecuta cada intervalo milisegundos
    if (i < texto.length) {
      // si no se ha llegado al final del texto
      elemento.innerHTML += texto.charAt(i); // se agrega la letra actual al elemento
      i++; // se incrementa el índice
    } else {
      // si se ha llegado al final del texto
      clearInterval(timer); // se detiene el temporizador
    }
  }, intervalo);
}




case "No hacer nada y estudiar mi entorno":
  case "Ok lo espero!":
    p.textContent =
      "Decides explorar el jardín en busca de alguna salida o alguna pista. Caminas sin rumbo fijo entre las plantas, evitando las más sospechosas o peligrosas. De repente, ves una casa al fondo del jardín. Es una casa antigua y deteriorada, con las ventanas rotas y la pintura desconchada. Parece abandonada desde hace años. Pero decides acercarte, llegas a la puerta te sientes incómodo en esta casa. Sientes que no deberías estar aquí, que hay algo malo en este lugar, pero te da curiosidad entrar. ¿que decides hacer?";
    options = [
      "Empujar la puerta en mal estado y entrar",
      "Nop! darte media vuelta y explorar el jardin",
    ];
    showInv();
    break;