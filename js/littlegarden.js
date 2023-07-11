// Mensaje de Bienvenida en consola

console.log(
  "Bienvenido, este será el tablero de investigaciones y tu herramienta de aventura, tu diario , bitaciora u obituario..."
);

const userName = prompt(
  "A pesar de la insististencia de tu familia de que no vayas, has decidido investigar el misterio que rodea la isla 'little garden', para saber el nombre del cuerpo a reco.. perdón, el nombre del investigador.. es decir el tuyo... necesito que lo escribas "
);

console.log("se bienvenido y mucha suerte " + userName);

let firstChoises = prompt(
  "es muy importante que entiendas el riesgo que esto conlleva " +
    userName +
    " necesito que me digas si estas seguro, escribe 'si' de querer continuar o 'no' para regresar y dejar esta tonteria atrás "
);

while (firstChoises != "si" && firstChoises != "no") {
  console.log(
    "entiendo que estas nervioso, pero es importante que me digas si o no"
  );

  console.log("es necesario que sea confirmado esta decisión");

  let firstChoises = prompt(
    "entonces " +
      userName +
      " si o no ? te preguntaré cuantas veces sea necesario "
  );
}

console.log(
  "hemos zarpado a little garden, toma los objetos necesarios para invesigar, pero antes de pasar a eso, te doy un poco de contexto... "
);
