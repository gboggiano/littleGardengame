console.log(
  "Bienvenido, este será el tablero de investigaciones y tu herramienta de aventura, tu diario , bitaciora u obituario..."
);

const userName = prompt(
  "A pesar de la insististencia de tu familia de que no vayas a ESE lugar, has decidido investigar el misterio que rodea la isla 'little garden', \n\n Para saber el nombre del cuerpo a reco.. perdón, el nombre del investigador.. es decir el tuyo... necesito que lo escribas "
);

console.log(" mucha suerte " + userName);

let firstChoise = prompt(
  "es muy importante que entiendas el riesgo que esto conlleva " +
    userName +
    " necesito que me digas si estas seguro, escribe 'si' de querer continuar o 'no' para regresar y dejar esta tonteria atrás "
);

if (firstChoise == "si") {
  console.log("Zarpemos a little garden");
} else {
  console.log(
    " me temo que si no es un 'si' rotundo debves volver ahora mismo, adios "
  );

  debugger;
}

console.log(
  "hemos zarpado a little garden, toma del barco lo que necesites, pero antes de pasar a eso, te doy un poco de contexto... "
);

console.log(
  "Se dice que esa isla está maldita, gente desaparece, navegantes oyen gritos al pasar cerca de ella, pero la realidad es que se sopecha que debe haber una persona tras todo este escandalo, no se sabe mucho mas, así que manos a la obra y preparate que breve llegamos...  "
);

console.log(
  "Al llegar al puerto, se nota el aire enrarecido, es asfixiante, por suerte la tripulacion tiene mascaras que filtran el aire, sin eso, la muerte es segura (creemos), asì que es mejor no perderla si?"
);

let secondChoise = prompt(
  "Te enfrentas a tu primera desición que realmente tiene efecto, \n \n La resistencia de tu máscara es de 100pts, así que mucho cuidado el camino que tomes, tienes que bajar del bote, puedes hacerlo  caminando a través del muelle que está en malas condiciones o saltando a la orilla y caminar hasta la caseta del puerto, que harás? \n\n (a) Caminar, (b) Saltar, por favor escribe solo la letra"
);

let mask = 100;
let options = 0;

if (secondChoise == "a") {
  options = 15;
  console.log(
    "Al caminar por el  muelle te has caido por su mal estado, golepandote brazos, y cabeza..."
  );
} else if (secondChoise == "b") {
  options = 10;
  console.log(
    "Te has lanzado del bote, a pesar que el agua amortigua un poco la caida, caes mal y te resientes un poco la pierna "
  );
} else {
  console.log("opcion invalida");
}

function sustra(num1, num2) {
  return num1 - num2;
}

let resultado = sustra(100, options);
console.log("Te restan " + resultado + " puntos de tu mascara");

let thirdChoise = prompt(
  "Sabiendo el status de tu mascara ( " +
    resultado +
    " ) te enfrentas a otro escenario \n\n La caseta del encargado del muelle parece vacia, hay una penumbra que apenas te deja ver adentro, sin embargo percibes un fuerte olor que proviene de la construccion \n\n Te propones a investigar, entonces, que haces? \n\n (a) Rompes un vidrio para tratar de llegar al picaporte de la puerta, (b) Tratas de forzar la puerta empujandola a ver si se abre (c) Tratas de llamar al encargado o alguien a los gritos (tienes una mascara recuerda) o (d) decides seguir hacia el espeso bosque de la isla "
);

let resultadoDos;

switch (thirdChoise) {
  case "a":
    resultadoDos = resultado - 20;
    console.log(
      "Te has cortado con el vidrio! sangras mucho, la mascara salió afectada has perdido 20 puntos, restan: " +
        resultadoDos +
        " de tu mascara"
    );
    break;
  case "b":
    resultadoDos = resultado - 5;
    console.log(
      "La puerta se abre con fuerza y te golpea de retuque, pero sin nada que lamentar has perdido 5 puntos, te restan:  " +
        resultadoDos +
        " de tu mascara"
    );
    break;
  case "c":
    resultadoDos = resultado - 0;
    console.log(
      "no ocurre nada, al parecer nadie oye... o eso parece, no pierdes nada, tus puntos son:  " +
        resultadoDos +
        " de tu mascara"
    );
    break;
  case "d":
    resultadoDos = resultado - 0;
    console.log(
      "decides avanzar en el medio de la penumbra... nunca mas vuelves... has perdido "
    );

    break;
  default:
    console.warn("Ingresa una opción Válida");
    break;
}

if (thirdChoise == "d") {
  alert(" Te has perdido en el bosque y nunca regresastre... Game Over");
  debugger;
}

let fourthChoise = prompt(
  "Bien, pensemos con calma, tu contador de resistencia de la mascara está en  " +
    resultadoDos +
    " \n\n Todo es muy raro estas seguro que querer seguir? piensatelo bien, cuando estes listo escribe 'si' o 'no' "
);

while (fourthChoise != "si" && fourthChoise != "no") {
  console.log(
    "Esta bien, entiendo que estes nervioso pero necesito que lo escribas..."
  );

  fourthChoise = prompt(
    "entonces " +
      userName +
      " si o no ? te preguntaré cuantas veces sea necesario "
  );
}

if (fourthChoise == "no") {
  alert(
    " Sabia decisión, te montas nuevamente en tu barco y regresas sano y salvo con tu familia.. Adios"
  );
  debugger;
}
