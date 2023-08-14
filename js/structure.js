// contain structure vars, objetcs and arrays

const mainJs = document.getElementsByTagName("main")[0];

// structure that will display the main game with Styles

const sectionDisplay = document.createElement("section");
sectionDisplay.style.padding = "20px";
sectionDisplay.style.backgroundColor = "#393053";
const displayContainer = document.createElement("div");
const formWelcome = document.createElement("form");
formWelcome.setAttribute("id", "welcomeBox"); // Id set
formWelcome.style.display = "flex";
formWelcome.style.flexDirection = "column";
formWelcome.style.gap = "10px";
const sectionText = document.createElement("div");
sectionText.setAttribute("id", "sectionTextbox");
sectionText.style.padding = "15px";
const iframe = document.createElement("iframe");
let sound = new Audio("./assets/ambient.mp3");
sound.autoplay = "true";
sound.play();
// iframe.src = "https://www.youtube.com/embed/CDWtH8eHeEU";
// iframe.width = "560";
// iframe.height = "315";
// iframe.title = "YouTube video player";
// iframe.frameborder = "0";
// iframe.allow =
//   "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
// iframe.allowfullscreen = true;
// Obtener el elemento donde se va a mostrar el vídeo
// let videoContainer = document.getElementById("video-container");
// Añadir el iframe como hijo del elemento

//bootstrap responsive property
displayContainer.classList = "container-md";

//Nesting
mainJs.appendChild(sectionDisplay);
sectionDisplay.append(displayContainer);
displayContainer.appendChild(formWelcome);
displayContainer.appendChild(sectionText);
displayContainer.appendChild(iframe);

// welcome message box
// input and button creation and styleså
const labelA = document.createElement("label");
labelA.innerHTML = `<h2>Nombre:</h2>`;
labelA.style.color = "#d9d9d9";
const inputA = document.createElement("input");
inputA.style.padding = ".5rem 1rem";
const labelB = document.createElement("label");
labelB.innerHTML = `<h2>Edad:</h2>`;
labelB.style.color = "#d9d9d9";
const inputB = document.createElement("input");
inputB.style.padding = ".5rem 1rem";
const buttonA = document.createElement("button");
buttonA.style.padding = ".5rem 1rem";
buttonA.innerHTML = `<h2> Listo! </h2>`;

//bootstrap style
buttonA.classList = "btn btn-outline-warning";

// 2 Nesting
formWelcome.appendChild(labelA);
formWelcome.appendChild(inputA);
formWelcome.appendChild(labelB);
formWelcome.appendChild(inputB);
formWelcome.appendChild(buttonA);

// Constante que marca la vida del jugador

const health = {
  sanity: 100,
};
