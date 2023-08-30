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

  actIa: "La reja estaba electrificada ¡recibes una descarga electrica!",

  actIab:
    "Vaya! sientes que tu salud mental va bajando, actualmente tu contador de sanidad lo veras reflejado en el contenedor amarillo, ten cuidado! si llega a 0 posiblemente no sepamos mas de ti...",

  actIac:
    "Decides explorar el jardín en busca de alguna salida o alguna pista. Caminas sin rumbo fijo entre las plantas, evitando las más sospechosas o peligrosas. De repente, ves una casa al fondo del jardín. Es una casa antigua y deteriorada, con las ventanas rotas y la pintura desconchada. Parece abandonada desde hace años. Pero decides acercarte, llegas a la puerta te sientes incómodo en esta casa. Sientes que no deberías estar aquí, que hay algo malo en este lugar, pero te da curiosidad entrar. ¿que decides hacer?",

  actIad:
    "Decides explorar la casa, a pesar del mal presentimiento que te da. Tal vez encuentres algo que te ayude a escapar del jardín, o al menos a entender qué está pasando...Recorres las habitaciones de la casa, buscando algo de interés. Pero no encuentras nada más que muebles viejos y rotos, objetos inservibles y basura acumulada... de pronto, sientes algo bajo tus pies, das un paso atrás y notas que estabas pisando un objeto puntiagudo, oxidado, en muy mal estado... te agachas para verlo de cerca... es... es... ¿Que decides hacer? ",

  actIae:
    "Has tomado lo que parece un picahielo y se ha agregado a tu invetario",

  actIaf:
    "Estás a punto de salir, cuando ves una puerta cerrada al final del pasillo. Te llama la atención, porque es la única puerta que no está abierta. Te acercas a la puerta y la examinas. Tiene un letrero que dice “SÓTANO”. Está cerrada con un candado. Buscas algo con lo que romper el candado. Ves un martillo en el suelo, junto a unos clavos oxidados...Lo coges y golpeas el candado con fuerza. Tras varios intentos, logras romperlo... bajas por las escaleras, esta muy oscuro y huele a humedad, llegas a lo que parece ser un espacio amplio... se ven varias formas de todos los tamaños entre la penumbra.. ¿que decides hacer? ",

  actIag:
    "Exploras el sótano, hay un olor nauseabundo que te hace taparte la nariz. Oyes el goteo de agua y el crujido de ratas, en eso agarras algo con forma cilindrica, de metal, una linterna! la enciendes y ves varias estanterías llenas de frascos, botellas y latas. Algunos contienen líquidos de colores, otros tienen etiquetas con nombres extraños. Te acercas a una de las estanterías y coges uno de los frascos. Tiene un líquido verde y viscoso dentro. La etiqueta dice “EXTRACTO DE MANDRÁGORA” Te preguntas qué es eso, y para qué sirve. ¿Qué haces? ",

  actIah:
    "Destapas el frasco y acercas tu nariz. Inhalas el aroma del líquido verde, De repente, sientes un mareo y una sensación de vértigo. El sótano se vuelve borroso y distorsionado. Oyes voces y risas en tu cabeza. Te das cuenta de que has cometido un grave error. Empiezas a ver cosas que no están ahí, o que no deberían estar ahí. Ves monstruos y fantasmas saliendo de las sombras, plantas que se mueven y te atacan, sangre y fuego por todas partes...estas perdiendo cordura rapidamente.... ",

  actIai:
    "Estás atrapado en una espiral de terror y locura. No sabes qué es real y qué no. No sabes cómo salir de este infierno...Pierdes 20 puntos de cordura..",
};
