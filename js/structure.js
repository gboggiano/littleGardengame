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

// array para el inventario

let invent = [];

//

let mainStory = {
  beginning:
    "Hola " +
    sessionStorage.getItem("Usuario") +
    ", estás atrapado en un extraño jardín lleno de plantas y flores exóticas, pero también de peligros y amenazas. No sabes cómo llegaste aquí, ni quién te ha traído. Lo único que sabes es que tienes que escapar antes de que sea demasiado tarde. El jardín está rodeado por una alta verja metálica, que impide tu salida. Dentro del jardín hay una casa abandonada, que parece ser la única construcción humana en este lugar. Tal vez allí encuentres alguna pista o alguna forma de salir. Pero ten cuidado, el jardín no es lo que parece. Hay cosas que se mueven entre las sombras, y sonidos que te helarán la sangre. Algunas plantas son carnívoras, y otras tienen propiedades alucinógenas. Y lo peor de todo, hay alguien más en el jardín, alguien que no quiere que salgas.... ",

  actI: "Te despiertas en medio del jardín, tumbado sobre el césped. Estás confundido y desorientado. No recuerdas nada de lo que ha pasado antes de llegar aquí. Lo último que recuerdas es estar en tu casa, preparándote para ir a dormir. Buscas alguna señal de civilización, alguna forma de comunicarte con el exterior. Pero no ves nada más que naturaleza salvaje, ni siquiera hay un camino o una senda por donde recorrer, solo estas tu y una mochila vacia a tu espalda. Entonces ves una verja metálica que rodea el jardín. Es alta y sólida, con puntas afiladas en la parte superior. Parece imposible saltarla o romperla... ¿que haces?",
};
