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
