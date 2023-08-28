formWelcome.addEventListener("submit", validation);

// ----- funcion para borrar elementos HTML ---

function deleteElements(item) {
  let elements = item.children;
  for (let i = elements.length - 1; i >= 0; i--) {
    item.removeChild(elements[i]);
  }
}

// ----- funcion que resta o suma la vida del jugador ------
function healthSum(num1, num2) {
  return num1 + num2;
}

function healthSus(num1, num2) {
  return num1 - num2;
}

// ---funcion para remover del inventario todo despues de volver a comenzar

function deleteInv(inv) {
  inv.splice(0, 1);
}

// ---- funcion para crear inventario y mostrarlo
function showInv() {
  invBut = document.createElement("button");
  invBut.innerHTML = `Inventario`;
  invBut.classList = "btn btn-outline-info";
  sectionText.append(invBut);
  invBut.addEventListener("click", function () {
    alert(invent.join(","));
  });
}

// ----- funcion para recibir el input del usuario ---
function validation(e) {
  // e.preventDefault();
  let form = e.target;
  let inputA = form.children[1].value;
  let inputB = form.children[3].value;
  let buttonA = form.children[4].value;

  if ((inputA && inputB) === "") {
    alert("Los campos no pueden ir vacios");
    return;
  } else {
    sessionStorage.setItem("Usuario", inputA);
    sessionStorage.setItem("Edad", inputB);
  }
}

// validar que dentro de session storage el usuario sea mayor de edad --

let ageString = sessionStorage.getItem("Edad");
let ageValidation = parseInt(ageString, 10); // indicar decimales para que tome los 2 numeros --

//recorre hasta el numero  que indicó el usuario para validar si es mayor o menor --
for (let i = 1; i <= ageValidation; i++) {
  console.log(i);
}

// llame a la funcion que borra todo el HTML y deja espacio para el espacio de texto --
if (ageValidation >= 18) {
  console.log("El usuario es mayor de edad");
  showScene("Ir al inicio");
  deleteElements(formWelcome);
} else {
  console.log("El usuario es menor de edad");
}

// -------  funcion que estructura e inicia el juego -----//

function showScene(option) {
  sectionText.innerHTML = "";
  let p = document.createElement("p");
  p.className = "p"; //uso una clase en lugar de un id
  p.style.color = "#d9d9d9";
  p.style.lineHeight = "25px";
  sectionText.appendChild(p);
  let span = document.createElement("span");
  span.className = "span"; //uso una clase en lugar de un id
  span.style.fontWeight = "bold";
  span.textContent = option;
  p.appendChild(span);

  // creacion de array donde se almacenan las opciones

  let options = [];

  switch (option) {
    case "Ir al inicio":
      p.textContent =
        "Hola " +
        sessionStorage.getItem("Usuario") +
        ", estás atrapado en un extraño jardín lleno de plantas y flores exóticas, pero también de peligros y amenazas. No sabes cómo llegaste aquí, ni quién te ha traído. Lo único que sabes es que tienes que escapar antes de que sea demasiado tarde. El jardín está rodeado por una alta verja metálica, que impide tu salida. Dentro del jardín hay una casa abandonada, que parece ser la única construcción humana en este lugar. Tal vez allí encuentres alguna pista o alguna forma de salir. Pero ten cuidado, el jardín no es lo que parece. Hay cosas que se mueven entre las sombras, y sonidos que te helarán la sangre. Algunas plantas son carnívoras, y otras tienen propiedades alucinógenas. Y lo peor de todo, hay alguien más en el jardín, alguien que no quiere que salgas.... ";
      options = ["Vamos"];
      break;
    case "Vamos":
      p.textContent =
        "Te despiertas en medio del jardín, tumbado sobre el césped. Estás confundido y desorientado. No recuerdas nada de lo que ha pasado antes de llegar aquí. Lo último que recuerdas es estar en tu casa, preparándote para ir a dormir. Buscas alguna señal de civilización, alguna forma de comunicarte con el exterior. Pero no ves nada más que naturaleza salvaje, ni siquiera hay un camino o una senda por donde recorrer, solo estas tu y una mochila vacia a tu espalda. Entonces ves una verja metálica que rodea el jardín. Es alta y sólida, con puntas afiladas en la parte superior. Parece imposible saltarla o romperla... ¿que haces?";
      options = [
        "Tratar de forzarla con  la mano a ver si  cede de alguna manera",
        "No hacer nada y estudiar mi entorno",
      ];
      showInv();
      break;
    case "Tratar de forzarla con  la mano a ver si  cede de alguna manera":
      p.textContent =
        "La reja estaba electrificada ¡recibes una descarga electrica!";
      health.sanity = healthSus(health.sanity, 10);
      options = ["Te recuperas del Shock"];
      break;
    case "Te recuperas del Shock":
      p.textContent =
        "Vaya! sientes que tu salud mental va bajando, actualmente tu contador de sanidad está en  " +
        health.sanity +
        " ten cuidado! si llega a 0 posiblemente no sepamos mas de ti";
      options = ["Avanzar"];
      showInv();
      break;
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
    case "Avanzar":
      p.textContent =
        "Decides explorar el jardín en busca de alguna salida o alguna pista. Caminas sin rumbo fijo entre las plantas, evitando las más sospechosas o peligrosas. De repente, ves una casa al fondo del jardín. Es una casa antigua y deteriorada, con las ventanas rotas y la pintura desconchada. Parece abandonada desde hace años. Pero decides acercarte, llegas a la puerta te sientes incómodo en esta casa. Sientes que no deberías estar aquí, que hay algo malo en este lugar, pero te da curiosidad entrar. ¿que decides hacer?";
      options = [
        "Empujar la puerta en mal estado y entrar",
        "Nop! darte media vuelta y explorar el jardin",
      ];
      showInv();
      break;
    case "Empujar la puerta en mal estado y entrar":
      p.textContent =
        "Decides explorar la casa, a pesar del mal presentimiento que te da. Tal vez encuentres algo que te ayude a escapar del jardín, o al menos a entender qué está pasando...Recorres las habitaciones de la casa, buscando algo de interés. Pero no encuentras nada más que muebles viejos y rotos, objetos inservibles y basura acumulada... de pronto, sientes algo bajo tus pies, das un paso atrás y notas que estabas pisando un objeto puntiagudo, oxidado, en muy mal estado... te agachas para verlo de cerca... es... es... ¿Que decides hacer? ";
      options = ["Tomar objeto", "Pasar de el y seguir explorando"];
      showInv();
      break;

    case "Tomar objeto":
      invent.push("Picahielo");
      console.log(invent);
      p.textContent =
        "Has tomado lo que parece un picahielo y se ha agregado a tu invetario";
      options = ["Seguir adelante"];
      break;

    case "Seguir adelante":
      p.textContent =
        "Estás a punto de salir, cuando ves una puerta cerrada al final del pasillo. Te llama la atención, porque es la única puerta que no está abierta. Te acercas a la puerta y la examinas. Tiene un letrero que dice “SÓTANO”. Está cerrada con un candado. Buscas algo con lo que romper el candado. Ves un martillo en el suelo, junto a unos clavos oxidados...Lo coges y golpeas el candado con fuerza. Tras varios intentos, logras romperlo... bajas por las escaleras, esta muy oscuro y huele a humedad, llegas a lo que parece ser un espacio amplio... se ven varias formas de todos los tamaños entre la penumbra.. ¿que decides hacer?  ";
      options = [
        "Tratar de caminar hasta toparme con algo",
        "Dar media vuelta y regresar por donde vine",
      ];
      showInv();
      break;

    case "Nop! darte media vuelta y explorar el jardin":
      p.textContent =
        "Esta linea de la historia será entregada en el proyecto final, por favor prueba la otra opción";
      options = ["Ok lo espero!"];
      break;

    default:
      p.textContent =
        "Te doy las gracias " +
        sessionStorage.getItem("Usuario") +
        " por probar este proyecto, la version final estará lista pronto y tendrá una cantidad de correciones y efectos interesantes, no desesperes! lo bueno se hace esperar ;)";
      options = ["Ir al inicio"];
      deleteInv(invent);
      break;
  }

  let br = document.createElement("br");
  sectionText.appendChild(br);

  //bucle para crear los botones segun la cantidad de opciones

  for (let i = 0; i < options.length; i++) {
    let buttonG = document.createElement("button");
    buttonG.id = "button" + i + option; //genero un id único para cada botón, usando el índice y la opción
    buttonG.textContent = options[i];
    buttonG.classList = "btn btn-secondary";
    buttonG.style.display = "flex";
    buttonG.style.flexDirection = "column";
    buttonG.style.gap = "20px";
    buttonG.style.marginTop = "20px";

    sectionText.append(buttonG);

    //

    buttonG.addEventListener("click", function () {
      showScene(this.textContent);
    });
  }
}
