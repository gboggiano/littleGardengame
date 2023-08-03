// console.log(document);

// //acceder al Body

// console.log(document.body);

// //acceder a la url por ejemplo de la web

// console.log(document.body.baseURI);

// //acceder al head

// console.log(document.head);

// //saber el nombre del nodo

// console.log(document.nodeName);

// //--------

// document es un objeto por eso se lo puedo asignar a una variable

// const docJs = document;

// console.log(docJs);

const bodyJs = document.body;

console.log(bodyJs);

const headJs = document.head;

// vamos a crear el objeto tittle dentro del documento, definimos la variable donde se va almacenar con create element

const titleJs = document.createElement("title");

// consologueamos

console.log(titleJs);

// quiero saber si ese elemento title tiene contenido para ello lo haremos así

console.log(titleJs.innerText); // inner text solo muestra texto y el de HTML estructura de HTML

// vamos asignarle algo, como si fuera una variable, lo hacemos con el metodo innerText

titleJs.innerText = "Landing";
console.log(titleJs);

// en este momento pudieramos pensar que va a cambiar el titulo de la tab y debería aparecer dentro de la etiqueta Head, pero no es así, ya que hay que agregarlo al head, para ello le agregamos un hijo (el title que acabamos de crear) con appenchild

headJs.appendChild(titleJs);

//.............

// vamos acceder al elemento header a traves de un ID, en este caso en el documento de HTML deberá tener un Id, para poder acceder necesitamos llamarlo con getElelementById

// le asignamos una variable

const headerJs = document.getElementById("header");

// si consologueamos nos aparecerá el elemento

console.log(headerJs);

//.........

// vamos agregarle un texto a un elemento del HTML por ejemplo a la seccion de sountrack

const sountrackJs = document.getElementById("soundtrack");

// compprobamos por consola que se muestre bien

console.log(sountrackJs);

// creamos un elemento

const h1 = document.createElement("h1");

// con el appen se lo agregamos a soundtrackJs

sountrackJs.appendChild(h1);

// consologuemos :

console.log(sountrackJs);

// y vamosa ver como aparece tanto en la consola como en el inspector del navegador, ahora le vamos agregar un texto

h1.innerHTML = "Prueba de Inner HTML";

// Puedo agregarle etiquetas tambien, usando los backstikcs, que permite usar el template stream, para agregar estructura HTML , vamos a ponerle la equiqueta strong dentro del h1

h1.innerHTML = `<strong>prueba de backsticks</strong>`;

//........................
// podemos manipular los estilos , recordando que van aparecer en linea

h1.style.color = "green";

// si quisiera por ejemplo agregar un fondo de color a una elemento

h1.style.backgroundColor = "grey";

// .......

//vamnos a asignarle una variable a los botones creados

const option1 = document.getElementById("option 1");
const option2 = document.getElementById("option 2");

// ahora le asignamos un valor con .value , es decir un atributo del boton

option1.value = "Opcion A";

// pero yo quiero ponerle un nombre al boton es decir que dentro del boton aparezca escrito algo, uso estonces Inner text

option1.innerText = "Camino de la izquierda";
option2.innerText = "Camino de la derecha";

// vamos asiganrle un estilo (recuerda que creará estilos en linea)

option1.style.backgroundColor = "yellow";
option2.style.backgroundColor = "blue";

// crear a partir de un array de  string un listado para un desplegable

// usamos la clase welcomeS

const links = ["Home", "Contact", "Ubicacion"];
