//

// Ejecutar la función deleteKeyfromStorage() al cargar la página usando el evento onload

//funcion borrar elementos

function deleteElements(item) {
  let elements = item.children;
  for (let i = elements.length - 1; i >= 0; i--) {
    item.removeChild(elements[i]);
  }
}
//

// funcion borrar key del local storage

// function deleteKeyfromStorage() {
//   localStorage.removeItem("Edad");
//   console.log("la edad ha sido borrada");
// }

//

function validation(e) {
  e.preventDefault();
  let form = e.target;
  let inputA = form.children[1].value;
  let inputB = form.children[3].value;
  let buttonA = form.children[4].value;

  // funcion borrar elementos

  if ((inputA && inputB) == "") {
    alert("Los campos no pueden ir vacios");
    return;
  } else {
    localStorage.removeItem("Usuario"); //borro el dato del usuario
    localStorage.removeItem("Edad"); //borro el dato de la edad
    localStorage.setItem("Usuario", inputA); //guardo el nuevo dato del usuario
    localStorage.setItem("Edad", inputB); //guardo el nuevo dato de la edad
  }
}

// este bloque trae la info de localStorage, la convierte a numero, luego la compara con una condicion de edad y si es cierta borra los elementos del HTML dentro del formulario para dar pasea otra seccion

let ageString = localStorage.getItem("Edad"); //usamos localStorage en lugar de sessionStorage
let ageValidation = parseInt(ageString, 10);

if (ageValidation >= 18) {
  console.log("El usuario es mayor de edad");
  deleteElements(formWelcome); //borramos los elementos del formulario
  showScene("Beginning"); //mostramos la escena inicial
} else {
  console.log("El usuario es menor de edad");
  //   deleteElements(formWelcome); //borramos los elementos del formulario
  //   showScene("Final"); //mostramos la escena finalå
}

// funcion para mostrar las escenas
function showScene(option) {
  sectionText.innerHTML = "";
  let p = document.createElement("p");
  p.className = "p"; //uso una clase en lugar de un id
  sectionText.appendChild(p);
  let span = document.createElement("span");
  span.className = "span"; //uso una clase en lugar de un id
  span.style.fontWeight = "bold";
  span.textContent = option;
  p.appendChild(span);

  // creacion de array que muestra las opciones

  let options = []; //usamos let en lugar de const

  switch (
    option //uso switch en lugar de else if
  ) {
    case "Beginning":
      p.textContent = "Bienvenido al juego de opciones. Has elegido la opción ";
      options = ["A", "B"];
      break;
    case "A":
      p.textContent = "Has escogido la opcion A";
      options = ["C", "D"];
      break;
    case "B":
      p.textContent = "Has escogido la opcion B";
      options = ["E", "F"];
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
    sectionText.appendChild(buttonG);

    //

    buttonG.addEventListener("click", function () {
      showScene(this.textContent);
    });
  }
}
//
// window.addEventListener("load", function () {
//   validation(e); //agrego esta línea para validar los datos del localStorage al cargar la página
//   formWelcome.addEventListener("submit", validation);
// });
