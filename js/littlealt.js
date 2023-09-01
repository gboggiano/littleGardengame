formWelcome.addEventListener("submit", validation);

function deleteElements(item) {
  let elements = item.children;
  for (let i = elements.length - 1; i >= 0; i--) {
    item.removeChild(elements[i]);
  }
}

function healthSum(num1, num2) {
  return num1 + num2;
}

function healthSus(num1, num2) {
  return num1 - num2;
}

function deleteInv(inv) {
  inv.splice(0, 1);
}

function showInv() {
  invBut = document.createElement("button");
  invBut.innerHTML = `Inventario`;
  invBut.classList = "btn btn-outline-info";
  sectionText.append(invBut);
  invBut.addEventListener("click", function () {
    Swal.fire({ text: invent.join(",") });
  });
}

function showSanit() {
  saniBut = document.createElement("button");
  saniBut.innerHTML = health.sanity;
  saniBut.classList = "btn btn-warning";
  saniBut.style.marginLeft = "50%";
  sectionText.appendChild(saniBut);
}

function validation(e) {
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

let ageString = sessionStorage.getItem("Edad");
let ageValidation = parseInt(ageString, 10);

for (let i = 1; i <= ageValidation; i++) {
  console.log(i);
}

if (ageValidation >= 18) {
  showScene("Ir al inicio");
  deleteElements(formWelcome);
} else {
  console.log("El usuario es menor de edad");
}

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

function showScene(option) {
  sectionText.innerHTML = "";
  let p = document.createElement("p");
  p.className = "p";
  p.style.fontSize = "30px";
  p.style.color = "#d9d9d9";
  p.style.lineHeight = "40px";
  p.style.textShadow = "3px 1px 8px black";
  p.style.marginBottom = "7%";
  sectionText.appendChild(p);

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
      options = ["Tomar objeto"];
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
      writteEffect(p, mainStory.acIbb, 25);
      options = [
        "Preguntar : quién eres? cómo salgo de aquí?",
        "TOMAR LA INICIATIVA y ATACAR",
      ];
      showInv();
      showSanit();
      break;
    case "Preguntar : quién eres? cómo salgo de aquí?":
      writteEffect(p, mainStory.acIbc, 25);
      options = ["que caraj...!"];
      showInv();
      showSanit();
      break;
    case "que caraj...!":
      writteEffect(p, mainStory.acIbd, 25);
      options = ["Mirarte la herida del pecho"];
      showInv();
      showSanit();
      break;
    case "Mirarte la herida del pecho":
      writteEffect(p, mainStory.acIbe, 25);
      health.sanity = healthSus(health.sanity, 80);
      options = ["Espera el Antiséptico! voy aplicarmelo"];
      showInv();
      showSanit();
      break;
    case "Espera el Antiséptico! voy aplicarmelo":
      writteEffect(p, mainStory.acIbf, 25);
      health.sanity = healthSum(health.sanity, 50);
      options = ["Observar el cadaver del anciano"];
      showInv();
      showSanit();
      break;
    case "Observar el cadaver del anciano":
      writteEffect(p, mainStory.acIbg, 25);
      options = ["No voy a morir aquí! vamos!"];
      showInv();
      showSanit();
      break;
    case "No voy a morir aquí! vamos!":
    case "Nop! darte media vuelta y explorar el jardin":
      writteEffect(p, mainStory.acIbh, 25);
      options = ["La espero con ansias!"];
      showInv();
      showSanit();
      break;
    case "TOMAR LA INICIATIVA y ATACAR":
      writteEffect(p, mainStory.acIbi, 25);
      options = ["...."];
      showInv();
      showSanit();
      break;
    case "....":
      writteEffect(p, mainStory.acIbj, 25);
      options = ["Cerrar los ojos y aceptar el final del camino"];
      showInv();
      showSanit();
      break;
    case "CORRER!":
      writteEffect(p, mainStory.acIbk, 25);
      options = ["...."];
      showInv();
      showSanit();
      break;
    case "Dar media vuelta y regresar por donde vine":
      writteEffect(p, mainStory.acIbl, 25);
      options = [
        "Preguntar : quién eres? cómo salgo de aquí?.",
        "TOMAR LA INICIATIVA y ATACAR",
      ];
      showInv();
      showSanit();
      break;
    case "Preguntar : quién eres? cómo salgo de aquí?.":
      writteEffect(p, mainStory.acIbm, 25);
      options = ["que caraj..!"];
      showInv();
      showSanit();
      break;
    case "que caraj..!":
      writteEffect(p, mainStory.acIbn, 25);
      options = ["Mirarte la herida del pecho, no luce bien"];
      showInv();
      showSanit();
      break;
    case "Mirarte la herida del pecho, no luce bien":
      writteEffect(p, mainStory.acIbo, 25);
      health.sanity = healthSus(health.sanity, 80);
      options = ["Buscar algo para parar la hemorragia!"];
      showInv();
      showSanit();
      break;

    case "Buscar algo para parar la hemorragia!":
      writteEffect(p, mainStory.acIbp, 25);
      options = ["No tengo nada!"];
      showInv();
      showSanit();
      break;
    case "No tengo nada!":
      writteEffect(p, mainStory.acIbq, 25);
      health.sanity = healthSus(health.sanity, 20);
      options = ["Dejarte llevar...no hay nada que hacer"];
      showInv();
      showSanit();
      break;
    case "Seguir explorando el sótano en busqueda de algo que pueda curarme":
      writteEffect(p, mainStory.acIext, 25);
      options = ["...."];
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

  for (let i = 0; i < options.length; i++) {
    let buttonG = document.createElement("button");
    buttonG.id = "button" + i + option;
    buttonG.textContent = options[i];
    buttonG.classList = "btn btn-outline-primary";
    buttonG.style.display = "flex";
    buttonG.style.flexDirection = "column";
    buttonG.style.gap = "20px";
    buttonG.style.marginTop = "20px";

    sectionText.append(buttonG);

    buttonG.addEventListener("click", function () {
      showScene(this.textContent);
    });
  }
}
