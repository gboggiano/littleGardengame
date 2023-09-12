const mainJs = document.getElementsByTagName("main")[0];

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
const sectionApi = document.createElement("section");
sectionApi.style.backgroundColor = "#241c45";
sectionApi.setAttribute("class", "apiBoxsection");
sectionApi.style.display = "flex";
sectionApi.style.flexDirection = "column";
sectionApi.style.textAlign = "center";
sectionApi.style.padding = "30px ";
const sectionApidiv = document.createElement("div");

//--
displayContainer.classList = "container-md";

//-- Nesting
mainJs.appendChild(sectionDisplay);
sectionDisplay.append(displayContainer);
displayContainer.appendChild(formWelcome);
displayContainer.appendChild(sectionText);
displayContainer.appendChild(iframe);
mainJs.appendChild(sectionApi);
sectionApi.appendChild(sectionApidiv);

//-- Botones y etiquetas
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
buttonA.classList = "btn btn-outline-warning";
const Apilabel = document.createElement("label");
Apilabel.innerHTML = `<p> Mi pasión siempre han sido los videojuegos de terror, no te pierdas esta lista de recomendados...- (listados de test / conexión con API - mockAPI y JSONplaceholder))</p>`;
Apilabel.style.color = "#fafafa";
const Apibutton = document.createElement("button");
Apibutton.innerHTML = `<h5> Muestrame por consola (Hacker Style)</h5>`;
// Apibutton.style.padding = ".3rem 1rem";
Apibutton.style.margin = "2%";
Apibutton.classList = "btn btn-outline-danger";
const ApibuttonTwo = document.createElement("button");
ApibuttonTwo.innerHTML = `<h5> Muestrame en pop-up</h5>`;
// ApibuttonTwo.style.padding = ".3rem 1rem";
ApibuttonTwo.style.margin = "2%";
ApibuttonTwo.classList = "btn btn-outline-success";

// --
formWelcome.appendChild(labelA);
formWelcome.appendChild(inputA);
formWelcome.appendChild(labelB);
formWelcome.appendChild(inputB);
formWelcome.appendChild(buttonA);
sectionApidiv.appendChild(Apilabel);
sectionApidiv.appendChild(Apibutton);
sectionApidiv.appendChild(ApibuttonTwo);

// objeto que representa vida de usuario
const health = {
  sanity: 100,
};

// Array que recibe input del usuario
let invent = [];

// Objeto con la historia del juego
let mainStory = {
  beginning:
    "Hola " +
    sessionStorage.getItem("Usuario") +
    ", estás atrapado en un extraño jardín lleno de plantas y flores exóticas, pero también de peligros y amenazas. No sabes cómo llegaste aquí, ni quién te ha traído. Lo único que sabes es que tienes que escapar antes de que sea demasiado tarde. El jardín está rodeado por una alta verja metálica, que impide tu salida. Dentro del jardín hay una casa abandonada, que parece ser la única construcción humana en este lugar. Tal vez allí encuentres alguna pista o alguna forma de salir. Pero ten cuidado, el jardín no es lo que parece. Hay cosas que se mueven entre las sombras, y sonidos que te helarán la sangre. Algunas plantas son carnívoras, y otras tienen propiedades alucinógenas. Y lo peor de todo, hay alguien más en el jardín, alguien que no quiere que salgas.... ",

  actI: "Te despiertas en medio del jardín, tumbado sobre el césped. Estás confundido y desorientado. No recuerdas nada de lo que ha pasado antes de llegar aquí. Lo último que recuerdas es estar en tu casa, preparándote para ir a dormir. Buscas alguna señal de civilización, alguna forma de comunicarte con el exterior. Pero no ves nada más que naturaleza salvaje, ni siquiera hay un camino o una senda por donde recorrer, solo estas tu y una mochila vacia a tu espalda. Entonces ves una verja metálica que rodea el jardín. Es alta y sólida, con puntas afiladas en la parte superior. Parece imposible saltarla o romperla... ¿qué haces?",

  actIa: "La reja estaba electrificada ¡recibes una descarga electrica!",

  actIab:
    "Vaya! sientes que tu salud mental va bajando, actualmente tu contador de sanidad lo veras reflejado en el contenedor amarillo, ten cuidado! si llega a 0 posiblemente no sepamos mas de ti...",

  actIac:
    "Decides explorar el jardín en busca de alguna salida o alguna pista. Caminas sin rumbo fijo entre las plantas, evitando las más sospechosas o peligrosas. De repente, ves una casa al fondo del jardín. Es una casa antigua y deteriorada, con las ventanas rotas y la pintura desconchada. Parece abandonada desde hace años. Pero decides acercarte, llegas a la puerta te sientes incómodo en esta casa. Sientes que no deberías estar aquí, que hay algo malo en este lugar, pero te da curiosidad entrar. ¿Qué decides hacer?",

  actIad:
    "Decides explorar la casa, a pesar del mal presentimiento que te da. Tal vez encuentres algo que te ayude a escapar del jardín, o al menos a entender qué está pasando...Recorres las habitaciones de la casa, buscando algo de interés. Pero no encuentras nada más que muebles viejos y rotos, objetos inservibles y basura acumulada... de pronto, sientes algo bajo tus pies, das un paso atrás y notas que estabas pisando un objeto puntiagudo, oxidado, en muy mal estado... te agachas para verlo de cerca... es... es... un picahielo! ",

  actIae:
    "Has tomado lo que parece un picahielo y se ha agregado a tu invetario",

  actIaf:
    "Estás a punto de salir, cuando ves una puerta cerrada al final del pasillo. Te llama la atención, porque es la única puerta que no está abierta. Te acercas a la puerta y la examinas. Tiene un letrero que dice “SÓTANO”. Está cerrada con un candado. Buscas algo con lo que romper el candado. Ves un martillo en el suelo, junto a unos clavos oxidados...Lo coges y golpeas el candado con fuerza. Tras varios intentos, logras romperlo... bajas por las escaleras, esta muy oscuro y huele a humedad, llegas a lo que parece ser un espacio amplio... se ven varias formas de todos los tamaños entre la penumbra.. ¿qué decides hacer? ",

  actIag:
    "Exploras el sótano, hay un olor nauseabundo que te hace taparte la nariz. Oyes el goteo de agua y el crujido de ratas, en eso agarras algo con forma cilindrica, de metal, una linterna! la enciendes y ves varias estanterías llenas de frascos, botellas y latas. Algunos contienen líquidos de colores, otros tienen etiquetas con nombres extraños. Te acercas a una de las estanterías y coges uno de los frascos. Tiene un líquido verde y viscoso dentro. La etiqueta dice “EXTRACTO DE MANDRÁGORA” Te preguntas qué es eso, y para qué sirve. ¿Qué haces? ",

  actIah:
    "Destapas el frasco y acercas tu nariz. Inhalas el aroma del líquido verde, De repente, sientes un mareo y una sensación de vértigo. El sótano se vuelve borroso y distorsionado. Oyes voces y risas en tu cabeza. Te das cuenta de que has cometido un grave error. Empiezas a ver cosas que no están ahí, o que no deberían estar ahí. Ves monstruos y fantasmas saliendo de las sombras, plantas que se mueven y te atacan, sangre y fuego por todas partes...estas perdiendo cordura rapidamente.... ",

  actIai:
    "Estás atrapado en una espiral de terror y locura. No sabes qué es real y qué no. No sabes cómo salir de este infierno...Pierdes 20 puntos de cordura..",

  actIaj:
    "Te recompones un poco, pero los efectos estan presentes, deberías subir, salir de la casa y tomar aire fresco, quizás buscar algo que ayude a quitar este malestar intenso... ¿qué harás? ",

  actIak:
    "Subes entonces, caminas tambalenadote...un poco desorientado, llegas al final de la escalera... ves el pasillo... sigues hacia la puerta principal.. antes abierta ahora parece.. cerrada?...sientes que no estás solo, detectas una presencia detrás de ti, que se acerca sigilosamente, sientes una respiración en tu nuca, y un aliento caliente en tu oído...",

  actIal:
    "Un hombre viejo y decrépito, con el pelo canoso y la piel arrugada. Tiene los ojos inyectados en sangre, y la boca llena de dientes podridos.. te dice: - Hola, mi querido invitado. Me alegra que hayas disfrutado de mi jardín. Es una obra de arte, ¿no crees? Cada planta, cada flor, cada animal… Todo tiene su propósito y su función... y quiero que tu formes parte de ella... ah!..veo que la curiosidad te ganó y abriste uno de mis frascos del sótano, así que estas muriendo... que pena..no vale la pena contarte de que va todo esto... - EL ANCIANO TE ATACA! ¿qué harás? ",

  actIam:
    "El hombre se te echa encima, no lo habias notado pero el anciano lleva empuñada una hoja de metal oxidada, como hacerle frente?... en eso recuerdas que llevas un picahielo en tu inventario!, lo sacas, pero el viejo logra darte de lleno en el pecho, un corte profundo, el dolor es intenso!, tu como puedes lanzas golpes con el picahielo, pero no logras darle!, el viejo vuelve a cargar contra ti, y en un golpe de suerte, logras clavarle el picahielo en en ojo derecho... es un golpe es letal!, el agresor cae en el acto bajo un chorro de sangre... sin embargo tu tambien estás seriamente herido...sumado al envenenamiento por inhalación.. la cosa no pinta bien.. ",

  actIan:
    "Realmente no estás bien... a duras penas puedas mantenerte integro, la hoja oxidada no solo te ha hecho un corte profundo, sino que al parecer tenia una neurotoxina, nuevamente empiezas alucinar..no importa lo que haga... sientes que te desvaneces entre vomitos de sangre y un profundo dolor... hace frío... pierdes 20 puntos de cordura y 60 puntos más por el corte envenendado... ",

  actIFin:
    "Tu cuerpo yace al lado del cadáver del anciano putrefacto... tu historia ha llegado hasta aquí, quién sabe,  si hubieses tomado otras decisiones tu destino pudiese haber sido otro...",

  mainEnd:
    "Te doy las gracias " +
    sessionStorage.getItem("Usuario") +
    " por probar este proyecto hecho totalmente en Javascript, si bien es Académico, está hecho con  cariño para sumarlo a mi portfolio, desde ya te agradezco nuevamente si quieres sumar algo contructivo, o dejar algún comentario.",

  actIba:
    "Sigues explorando el sótano, entre tanto trastes hay libros viejos, estantes llenos de polvo, en uno de los muebles ves un frasco con una etiqueta 'Antiséptico' , es evidente que puede ser útil, lo tomas y lo metes en tu mochila... -Se ha agregado a tu inventario 'Antiséptico'-",

  acIbb:
    "Podemos pasar horas en este lugar, porque es enorme, pero tienes que volver a centrarte en tu objetivo principal, salir de este maldito lugar, por eso decides subir a la planta superior. Llegas arriba, y te dirijes hacia la entrada principal, la puerta que antes habias dejado abierta ahora está cerrada, parado ante ella una figura de un hombre viejo se deja ver, está decrépito, con el pelo canoso y la piel arrugada, con los ojos inyectados en sangre, y la boca llena de dientes podridos.. te dice: - Hola, mi querido invitado. Me alegra que hayas disfrutado de mi jardín. Es una obra de arte, ¿no crees? Cada planta, cada flor, cada animal… Todo tiene su propósito y su función... y quiero que tu formes parte de ella... - ¿Qué haces? ",

  acIbc:
    "Quiero que seas parte de mi jardín. Quiero que seas mi nueva creación. Quiero que seas mi obra maestra, hablo de la transformación. Estoy hablando de la fusión. Estoy hablando de la vida eterna. Sí, la vida eterna. La vida eterna en el jardín. La vida eterna como una planta....Una planta hecha con tu carne y tu sangre, con tu mente y tu alma...",

  acIbd:
    "El hombre se te echa encima, no lo habias notado pero el anciano lleva empuñada una hoja de metal oxidada, como hacerle frente?... en eso recuerdas que llevas un picahielo en tu inventario!, lo sacas, pero el viejo logra darte de lleno en el pecho, un corte profundo, el dolor es intenso!, tu como puedes lanzas golpes con el picahielo, pero no logras darle!, el viejo vuelve a cargar contra ti, y en un golpe de suerte, logras clavarle el picahielo en en ojo derecho... es un golpe es letal!, el agresor cae en el acto bajo un chorro de sangre... sin embargo tu tambien estás seriamente herido...",

  acIbe:
    "la hoja oxidada no solo te ha hecho un corte profundo, sino que al parecer tenia una neurotoxina, nuevamente empiezas alucinar..pierdes 20 puntos de cordura y 60 puntos más por el corte envenendado... ",

  acIbf:
    "Al aplicarte el antiséptico has parado la hemorragia, el ardor que produce el químico al contacto con la herida te recompone... ganas 50 puntos de cordura!",

  acIbg:
    "Observas el cuerpo sin vida del viejo, luce mas desagradable tirado en el piso, el olor que despide es indescriptible, estas a punto de salir de la mansión, cuando notas al lado del despojo humano un manojo de.. llaves!!!.. estas seguro que pueden sacarte de este infierno... las agarras y te encaminas por la puerta principal...herido y con un poco de esperanzas sabes que antes debes atravesar todo el jardín... será que podrás sobrevivir?",

  acIbh:
    "Esta pertenece a la segunda parte de la historia o mejor dicho, a un camino paralelo, el cual está en construcción! la historia en proceso de creación y espero traerla lo mas rápido posible.. lo bueno se hace esperar!",

  acIbi:
    "Corres hacia el anciano, por alguna razón todo tu cuerpo dice que debes pelear, pero también mientras te acercas en carrera notas que no se mueve, no se inmuta, no te importa! Estas decidido a pegar primero… el anciano esboza una sonrisa.. deja ver sus dientes marrones y podridos… en eso sientes como tu pie derecho se hunde en la madera, has pisado una tabla podrida! Tu pie se ancla y el peso de tu cuerpo ejerce una presión enorme sobre la pierna rompiéndola en una dantesca escena… tu pierna forma una especie de L…el dolor es horrible... empiezas a desvanecerte... solo ves la pútrida boca del viejo con esos dientes marrones acercándose a ti...",

  acIbj:
    "A medida que vas recobrando la conciencia, sientes mucho dolor… abres los párpados lentamente para encontrarte en una camilla.. no sientes ni los brazos ni las piernas… tratas de inclinarte para ver donde estas o que esta pasando, solo para encontrarte con el horror mas profundo que hubieses imaginado… te han amputado todas las extremidades!.. No lo puedes creer, no! Es un sueño!..no puede estar pasando..! En medio de tu conmoción  escuchas la voz del anciano : -'Mi querido espécimen, no luches , la conversión ha comenzado, hoy serás parte de mi mayor trabajo… un hombre que trasciende y se transforma en una planta de carne y sangre.. alma y flora juntos.. hoy dejas de existir como hombre y te levantarás como una nueva especie!'-...",

  acIbk:
    "Corres en direccion contraria, giras la cabeza rápidamente hacia el anciano el cual esboza una sonrisa.. deja ver sus dientes marrones y podridos.. no te persigue...en eso sientes como tu pie derecho se hunde en la madera, has pisado una tabla podrida! Tu pie se ancla y el peso de tu cuerpo ejerce una presión enorme sobre la pierna rompiéndola en una dantesca escena… tu pierna forma una especie de L…el dolor es horrible... empiezas a desvanecerte... solo ves la pútrida boca del viejo con esos dientes marrones acercándose a ti...",

  acIbl:
    "Prefieres dejar el sótano en paz, no parece muy seguro, por eso decides subir a la planta superior. Llegas arriba, y te dirijes hacia la entrada principal, la puerta que antes habias dejado abierta ahora está cerrada, parado ante ella una figura de un hombre viejo se deja ver, está decrépito, con el pelo canoso y la piel arrugada, con los ojos inyectados en sangre, y la boca llena de dientes podridos.. te dice: - Hola, mi querido invitado. Me alegra que hayas disfrutado de mi jardín. Es una obra de arte, ¿no crees? Cada planta, cada flor, cada animal… Todo tiene su propósito y su función... y quiero que tu formes parte de ella... - ¿Qué haces?  ",

  acIbm:
    "Quiero que seas parte de mi jardín. Quiero que seas mi nueva creación. Quiero que seas mi obra maestra, hablo de la transformación. Estoy hablando de la fusión. Estoy hablando de la vida eterna. Sí, la vida eterna. La vida eterna en el jardín. La vida eterna como una planta....Una planta hecha con tu carne y tu sangre, con tu mente y tu alma...",

  acIbn:
    "El hombre se te echa encima, no lo habias notado pero el anciano lleva empuñada una hoja de metal oxidada, como hacerle frente?... en eso recuerdas que llevas un picahielo en tu inventario!, lo sacas, pero el viejo logra darte de lleno en el pecho, un corte profundo, el dolor es intenso!, tu como puedes lanzas golpes con el picahielo, pero no logras darle!, el viejo vuelve a cargar contra ti, y en un golpe de suerte, logras clavarle el picahielo en en ojo derecho... es un golpe es letal!, el agresor cae en el acto bajo un chorro de sangre... sin embargo tu tambien estás seriamente herido...",

  acIbo:
    "La hoja oxidada no solo te ha hecho un corte profundo, sino que al parecer tenia una neurotoxina, nuevamente empiezas alucinar..pierdes 20 puntos de cordura y 60 puntos más por el corte envenendado... ",

  acIbp:
    "Lamentablemente no tienes nada para frenar el sangrado, el corte es muy profundo... tratas de pararte pero caes al suelo, pierdes mucha sangre...sientes un mareo y una sensación de vértigo Oyes voces y risas en tu cabeza...pierdes 20 puntos de cordura...",

  acIbq:
    "Sabes que llegó tu momento... te liberarás del jardín maldito.. pero sin tu cuerpo...",

  acIext:
    "Buscas desesperadamente entre tanto traste, pero las alucinaciones son mas y mas fuertes, voces de ultratumba van y vienen... el dolor de cabeza se hace insoportable, vomitas, trastabillas y caes…sientes que te desvaneces… todo se vuelve negro...",
};
