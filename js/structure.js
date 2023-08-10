// contain structure vars, objetcs and arrays

const mainJs = document.getElementsByTagName("main")[0];

// structure that will display the main game with Styles

const sectionDisplay = document.createElement("section");
sectionDisplay.style.padding = "20px";
const displayContainer = document.createElement("div");
const formWelcome = document.createElement("form");
formWelcome.setAttribute("id", "welcomeBox"); // Id set
formWelcome.style.display = "flex";
formWelcome.style.flexDirection = "column";
formWelcome.style.gap = "10px";
const sectionText = document.createElement("div");

//bootstrap responsive property
displayContainer.classList = "container-md";

//anidation
mainJs.appendChild(sectionDisplay);
sectionDisplay.append(displayContainer);
displayContainer.appendChild(formWelcome);
displayContainer.appendChild(sectionText);

// welcome message box
// input and button creation and styles
const labelA = document.createElement("label");
labelA.innerHTML = `<h2>Nombre:</h2>`;
const inputA = document.createElement("input");
inputA.style.padding = ".5rem 1rem";
const labelB = document.createElement("label");
labelB.innerHTML = `<h2>Edad:</h2>`;
const inputB = document.createElement("input");
inputB.style.padding = ".5rem 1rem";
const buttonA = document.createElement("button");
buttonA.style.padding = ".5rem 1rem";
buttonA.innerHTML = `<h2> Listo! </h2>`;

//bootstrap style
buttonA.classList = "btn btn-outline-warning";

// 2 anidation
formWelcome.appendChild(labelA);
formWelcome.appendChild(inputA);
formWelcome.appendChild(labelB);
formWelcome.appendChild(inputB);
formWelcome.appendChild(buttonA);

// var to be used in welcomeBox validation

const welcomeBoxvali = document.getElementById("welcomeBox");
