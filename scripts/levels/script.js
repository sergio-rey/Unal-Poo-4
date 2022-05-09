let cuadrado,
  trianguloGrande,
  trianguloGrande2,
  trianguloMediano,
  trianguloPequeño,
  trianguloPequeño2,
  romboide;

let cuadradoF,
  trianguloGrandeF,
  trianguloGrande2F,
  trianguloMedianoF,
  trianguloPequeñoF,
  trianguloPequeño2F,
  romboideF;

let buttonRedirect, buttonClear, buttonNew;

let pName, levels, idLevel;

let width = 500,
  height = 500;

const SCALING = 0.7;

function redirect() {
  window.location.replace("./index.html");
}

function newLevel() {
  alert("Nuevo Nivel");
}

function validate() {
  alert("Nivel Validado");
}

function preload() {
  levels = loadJSON("http://127.0.0.1:5500/data/levels.json");
}

function setup() {
  if (!idLevel) {
    idLevel = 0;
  }

  createCanvas(width, height);
  cuadrado = new Cuadrado(color("yellow"), (size = 100));
  trianguloGrande = new Triangulo(color("blue"), (size = 200));
  trianguloGrande2 = new Triangulo(color("orange"), (size = 200));
  trianguloMediano = new Triangulo(color("red"), (size = 141));
  trianguloPequeño2 = new Triangulo(color("magenta"), (size = 100));
  trianguloPequeño = new Triangulo(color("indigo"), (size = 100));
  romboide = new Romboide(color("green"), (size = 50));

  cuadradoF = new Cuadrado(
    color("white"),
    (position = levels[idLevel].pieces.cuadrado.position),
    (rotation = levels[idLevel].pieces.cuadrado.rotation),
    (size = 100)
  );
  trianguloGrandeF = new Triangulo(
    color("white"),
    (position = levels[idLevel].pieces.trianguloGrande.position),
    (rotation = levels[idLevel].pieces.trianguloGrande.rotation),
    (size = 200)
  );
  trianguloGrande2F = new Triangulo(
    color("white"),
    (position = levels[idLevel].pieces.trianguloGrande2.position),
    (rotation = levels[idLevel].pieces.trianguloGrande2.rotation),
    (size = 200)
  );
  trianguloMedianoF = new Triangulo(
    color("white"),
    (position = levels[idLevel].pieces.trianguloMediano.position),
    (rotation = levels[idLevel].pieces.trianguloMediano.rotation),
    (size = 141)
  );
  trianguloPequeño2F = new Triangulo(
    color("white"),
    (position = levels[idLevel].pieces.trianguloPequeño2.position),
    (rotation = levels[idLevel].pieces.trianguloPequeño2.rotation),
    (size = 100)
  );
  trianguloPequeñoF = new Triangulo(
    color("white"),
    (position = levels[idLevel].pieces.trianguloPequeño.position),
    (rotation = levels[idLevel].pieces.trianguloPequeño.rotation),
    (size = 100)
  );
  romboideF = new Romboide(
    color("white"),
    (position = levels[idLevel].pieces.romboide.position),
    (rotation = levels[idLevel].pieces.romboide.rotation),
    (rotacionY = levels[idLevel].pieces.romboide.rotationY),
    (size = 50)
  );

  // Configuracion y creacion del nombre del juego

  pName = createElement("h1", levels[idLevel].name);

  //  Configuracion y creacion de los botones

  let xButton = (screen.width / 2 - width / 2) / 2 - 100;

  buttonRedirect = createButton("Inicio");
  buttonRedirect.mousePressed(redirect);
  buttonRedirect.position(xButton, 60);

  buttonNew = createButton("Nuevo Nivel");
  buttonNew.mousePressed(newLevel);
  buttonNew.position(xButton, 140);

  buttonClear = createButton("Verificar");
  buttonClear.mousePressed(validate);
  buttonClear.position(xButton, 220);
}

function draw() {
  background("#2c2b2b");

  displayPiece([
    cuadrado,
    trianguloGrande,
    trianguloGrande2,
    trianguloMediano,
    trianguloPequeño,
    trianguloPequeño2,
    romboide,
  ]);
}

function KeyPressed() {
  if (key === "n") {
    newLevel();
  }
}

// by Sergio and Camilo 2022
