let cuadrado,
  trianguloGrande,
  trianguloGrande2,
  trianguloMediano,
  trianguloPequeño,
  trianguloPequeño2,
  romboide;

let buttonRedirect, buttonClear, buttonNew;

let pName;

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

function setup() {

  createCanvas(width, height);

  // Configuracion y creacion del nombre del juego 

  pName = createElement("h1", "Nombre del Nivel");

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
  background('#2c2b2b');

  // displayPiece([
  //   cuadrado,
  //   trianguloGrande,
  //   trianguloGrande2,
  //   trianguloMediano,
  //   trianguloPequeño,
  //   trianguloPequeño2,
  //   romboide,
  // ]);
}

function displayPiece(pieces) {
  pieces.forEach(function (piece) {
    push();
    translate(piece._position);
    rotate(piece._rotation);
    fill(piece._color);
    scale(SCALING);
    piece.shape();
    pop();
  });
}

// by Sergio and Camilo 2022
