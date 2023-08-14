formWelcome.addEventListener("submit", validation);

// funcion para borrar elementos HTML ---

function deleteElements(item) {
  let elements = item.children;
  for (let i = elements.length - 1; i >= 0; i--) {
    item.removeChild(elements[i]);
  }
}

// funcion que resta o suma la vida del jugador --

function healthSum(num1, num2) {
  return num1 + num2;
}

function healthSus(num1, num2) {
  return num1 - num2;
}

// funcion para recibir el input del usuario ---
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

// llame a la funcion que borra todo el HTML y deja espacio para el espacio de texto
if (ageValidation >= 18) {
  console.log("El usuario es mayor de edad");
  showScene("Beginning");
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
    case "Beginning":
      p.textContent =
        "Hola " +
        sessionStorage.getItem("Usuario") +
        ", estás atrapado en un extraño jardín lleno de plantas y flores exóticas, pero también de peligros y amenazas. No sabes cómo llegaste aquí, ni quién te ha traído. Lo único que sabes es que tienes que escapar antes de que sea demasiado tarde. El jardín está rodeado por una alta verja metálica, que impide tu salida. Dentro del jardín hay una casa abandonada, que parece ser la única construcción humana en este lugar. Tal vez allí encuentres alguna pista o alguna forma de salir. \n \n Pero ten cuidado, el jardín no es lo que parece. Hay cosas que se mueven entre las sombras, y sonidos que te helarán la sangre. Algunas plantas son carnívoras, y otras tienen propiedades alucinógenas. Y lo peor de todo, hay alguien más en el jardín, alguien que no quiere que salgas.... ";
      options = ["Vamos"];
      break;
    case "Vamos":
      p.textContent =
        "Te despiertas en medio del jardín, tumbado sobre el césped. Estás confundido y desorientado. No recuerdas nada de lo que ha pasado antes de llegar aquí. Lo último que recuerdas es estar en tu casa, preparándote para ir a dormir. Buscas alguna señal de civilización, alguna forma de comunicarte con el exterior. Pero no ves nada más que naturaleza salvaje. Ni siquiera hay un camino o una senda por donde caminar. Entonces ves la verja metálica que rodea el jardín. Es alta y sólida, con puntas afiladas en la parte superior. Parece imposible saltarla o romperla... ¿que haces?";
      options = [
        "Tratar de doblarla o patearla a ver si puedes doblarla",
        "No hacer nada",
      ];
      break;
    case "Tratar de doblarla o patearla a ver si puedes doblarla":
      p.textContent = "recibes una descarga electrica!";
      health.sanity = healthSus(health.sanity, 10);
      options = ["Te recuperas del Shock"];
      break;
    case "Te recuperas del Shock":
      p.textContent =
        "vaya! sientes que tu sanidad mental va bajando, actualmente tienes " +
        health.sanity +
        " ten cuidado!";
      options = ["g", "h"];
      break;
    default:
      p.textContent = "Final";
      options = ["Beginning"];
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

    sectionText.appendChild(buttonG);

    //

    buttonG.addEventListener("click", function () {
      showScene(this.textContent);
    });
  }
}
