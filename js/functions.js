// Funcion para borrar elementos

function deleteElements(item) {
  let elements = item.children;
  for (let i = elements.length - 1; i >= 0; i--) {
    item.removeChild(elements[i]);
  }
}

// funcion de agregar botones

// Caja de bienvenida , donde estará el form

formWelcome.addEventListener("submit", validation);
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

// este bloque trae la info de SessionStorage, la convierte a numero, luego la compara con una condicion de edad y si es cierta borra los elementos del HTML dentro del formulario para dar pasea otra seccion

let ageString = sessionStorage.getItem("Edad");
let ageValidation = parseInt(ageString, 10);

for (let i = 1; i <= ageValidation; i++) {
  console.log(i);

  deleteElements(formWelcome);
  // let divTexto = texto;
  // let divOpciones = opciones;

  // let testA1 = document.createElement("div");
  // testA1.innerHTML = `${divTexto}`;
  // formWelcome.appendChild(testA1);
}

if (ageValidation >= 18) {
  console.log("El usuario es mayor de edad");
} else {
  console.log("El usuario es menor de edad");
}

// funcion para mostrar las escenas
function showScene(option) {
  sectionText.innerHTML = "";
  let = document.createElement("p");
  p.id = "p";
  sectionText.appendChild(p);
  let span = document.createElement("span");
  span.id = "span";
  span.style.fontWeight = "bold";
  span.textContent = option;
  p.appendChild(span);

  // creacion de array que muestra las opciones

  const options = [];

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

    //Evento click para llamar funcion showScene con las oppciones correspondientes

    buttonG.addEventListener("click", function () {
      showScene(this.textContent);
    });
  }
}
