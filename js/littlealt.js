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
    Swal.fire({ text: invent.join(",") });
  });
}

// ----

function showSanit() {
  saniBut = document.createElement("button");
  saniBut.innerHTML = health.sanity;
  saniBut.classList = "btn btn-warning";
  saniBut.style.marginLeft = "50%";
  sectionText.appendChild(saniBut);
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

// -----

function writteEffect(element, text, interv) {
  let t = 0;
  let timer = setInterval(function () {
    if (t < text.length) {
      element.innerHTML += text.charAt(t);
      t++;
    } else {
      clearInterval(timer);
    }
  }, interv);
}

// -------  funcion que estructura e inicia el juego -----//

function showScene(option) {
  sectionText.innerHTML = "";
  let p = document.createElement("p");
  p.className = "p"; //uso una clase en lugar de un id
  p.style.fontSize = "30px";
  p.style.color = "#d9d9d9";
  p.style.lineHeight = "40px";
  p.style.textShadow = "3px 1px 8px black";
  p.style.marginBottom = "7%";
  sectionText.appendChild(p);
  //-----

  //-----
  // let span = document.createElement("span");
  // span.className = "span"; //uso una clase en lugar de un id
  // span.style.fontWeight = "bold";
  // span.textContent = option;
  // p.appendChild(span);
  // // writteEffect(p, p.textContent, 100);

  //

  // creacion de array donde se almacenan las opciones

  let options = [];

  switch (option) {
    case "Ir al inicio":
      writteEffect(p, mainStory.beginning, 25);
      options = ["Vamos"];
      break;
    case "Vamos":
      writteEffect(p, mainStory.actI, 25);
      options = [
        "Tratar de forzarla con  la mano a ver si  cede de alguna manera",
        "No hacer nada y estudiar mi entorno",
      ];
      showInv();
      showSanit();
      break;
    case "Tratar de forzarla con  la mano a ver si  cede de alguna manera":
      writteEffect(p, mainStory.actIa, 25);
      health.sanity = healthSus(health.sanity, 10);
      options = ["Te recuperas del Shock"];
      break;
    case "Te recuperas del Shock":
      writteEffect(p, mainStory.actIab, 25);
      options = ["Avanzar"];
      showInv();
      showSanit();
      break;
    case "Avanzar":
    case "No hacer nada y estudiar mi entorno":
      writteEffect(p, mainStory.actIac, 25);
      options = [
        "Empujar la puerta en mal estado y entrar",
        "Nop! darte media vuelta y explorar el jardin",
      ];
      showInv();
      showSanit();
      break;
    case "Empujar la puerta en mal estado y entrar":
      writteEffect(p, mainStory.actIad, 25);
      options = ["Tomar objeto", "Pasar de el y seguir explorando"];
      showInv();
      showSanit();
      break;

    case "Tomar objeto":
      invent.push("Picahielo");
      writteEffect(p, mainStory.actIae, 25);
      options = ["Seguir adelante"];
      break;

    case "Seguir adelante":
      writteEffect(p, mainStory.actIaf, 25);
      options = [
        "Tratar de buscar algo que pueda darme un poco de luz",
        "Dar media vuelta y regresar por donde vine",
      ];
      showInv();
      showSanit();
      break;

    case "Tratar de buscar algo que pueda darme un poco de luz":
      writteEffect(p, mainStory.actIag, 25);
      options = [
        "Abrir el frasco para revisarlo",
        "Dejar el frasco y seguir explorando el sótano",
      ];
      showInv();
      showSanit();
      break;
    case "Abrir el frasco para revisarlo":
      writteEffect(p, mainStory.actIah, 25);
      options = ["Tratar de serenarte"];
      showInv();
      showSanit();
      break;
    case "Tratar de serenarte":
      writteEffect(p, mainStory.actIai, 25);
      health.sanity = healthSus(health.sanity, 20);
      options = ["Toma un respiro profundo, concentrate!"];
      showInv();
      showSanit();
      break;
    case "Toma un respiro profundo, concentrate!":
      writteEffect(p, mainStory.actIaj, 25);
      options = [
        "Subir a la planta superior",
        "Seguir explorando el sótano en busqueda de algo que pueda curarme",
      ];
      showInv();
      showSanit();
      break;
    case "Subir a la planta superior":
      writteEffect(p, mainStory.actIak, 25);
      options = ["Darte la vuelta!"];
      showInv();
      showSanit();
      break;
    case "Darte la vuelta!":
      writteEffect(p, mainStory.actIal, 25);
      options = ["DEFENDERTE!", "CORRER!"];
      showInv();
      showSanit();
      break;
    case "DEFENDERTE!":
      writteEffect(p, mainStory.actIam, 25);
      options = [
        "Levantate! y sigue avazando",
        "Quédate en el suelo y tómate un momento",
      ];
      showInv();
      showSanit();
      break;
    case "Levantate! y sigue avazando":
    case "Quédate en el suelo y tómate un momento":
      writteEffect(p, mainStory.actIan, 25);
      health.sanity = healthSus(health.sanity, 80);
      options = ["..."];
      showInv();
      showSanit();
      break;
    case "...":
      writteEffect(p, mainStory.actIFin, 25);
      options = ["Mors solum initium est"];
      showInv();
      showSanit();
      break;

    case "Dejar el frasco y seguir explorando el sótano":
      invent.push("Antiséptico");
      writteEffect(p, mainStory.actIba, 25);
      options = ["Mochila a la espalda y seguimos!"];
      showInv();
      showSanit();
      break;
    case "Mochila a la espalda y seguimos!":
      writteEffect(p, mainStory.actIbb, 25);
      options = ["Preguntar : quién eres? cómo salgo de aquí?", ""];
      showInv();
      showSanit();
      break;
    case "Pasar de el y seguir explorando":
      writteEffect(p, mainStory.acIafDOS, 25);
      options = [
        "Tratar de buscar algo que pueda darme un poco de luz",
        "Dar media vuelta y regresar por donde vine",
      ];
      showInv();
      showSanit();
      break;

    default:
      writteEffect(p, mainStory.mainEnd, 25);
      options = ["Ir al inicio"];
      deleteInv(invent);
      health.sanity = 100;
      break;
  }

  let br = document.createElement("br");
  sectionText.appendChild(br);

  //bucle para crear los botones segun la cantidad de opciones

  for (let i = 0; i < options.length; i++) {
    let buttonG = document.createElement("button");
    buttonG.id = "button" + i + option; //genero un id único para cada botón, usando el índice y la opción
    buttonG.textContent = options[i];
    buttonG.classList = "btn btn-outline-primary";
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
