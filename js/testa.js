//funcion borrar lementos

function deleteElements(item) {
  let elements = item.children;
  for (let i = elements.length - 1; i >= 0; i--) {
    item.removeChild(elements[i]);
  }
}
//

function validation(e) {
  e.preventDefault();
  let form = e.target;
  let inputA = form.children[1].value;
  let inputB = form.children[3].value;
  let buttonA = form.children[4].value;

  // funcion borrar elementos ---------

  if ((inputA && inputB) == "") {
    alert("Los campos no pueden ir vacios");
    return;
  } else {
    // localStorage.clear();
    localStorage.setItem("Usuario", inputA); //usamos localStorage en lugar de sessionStorage
    localStorage.setItem("Edad", inputB); //usamos localStorage en lugar de sessionStorage
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
  let p = document.createElement("p"); //usamos var en lugar de let
  p.id = "p";
  sectionText.appendChild(p);
  let span = document.createElement("span"); //usamos var en lugar de let
  span.id = "span";
  span.style.fontWeight = "bold";
  span.textContent = option;
  p.appendChild(span);

  // creacion de array que muestra las opciones

  let options = []; //usamos let en lugar de const

  if (option == "Beginning") {
    p.textContent = "Bienvenido al juego de opciones. Has elegido la opción ";
    options = ["A", "B"];
  } else if (option == "A") {
    p.textContent = "Has escogido la opcion A";
    options = ["C", "D"];
  } else if (option == "B") {
    p.textContent = "Has escogido la opcion B";
    options = ["E", "F"];
  } else {
    p.textContent = "Final";
    options = ["Beginning"];
  }

  let br = document.createElement("br");
  sectionText.appendChild(br);

  //bucle para crear los botones segun la cantidad de opciones

  for (let i = 0; i < options.length; i++) {
    let buttonG = document.createElement("button");
    buttonG.id = "button" + i;
    buttonG.textContent = options[i];
    sectionText.appendChild(buttonG);

    //

    buttonG.addEventListener("click", function () {
      showScene(this.textContent);
    });
  }
}
//
window.addEventListener("load", function () {
  formWelcome.addEventListener("submit", validation);
});
