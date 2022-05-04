let cuadrado,
  trianguloGrande,
  trianguloGrande2,
  trianguloMediano,
  trianguloPequeño,
  trianguloPequeño2,
  romboide;

let buttonRedirect;

let width = 400,
  height = 400;

const SCALING = 1;

function redirect() {
  window.location.replace("./levels.html");
}

function setup() {
  createCanvas(width, height);

  //   Cuadrado Amarrillo
  cuadrado = new Cuadrado(color("yellow"), [200, 300], 0, false, 100);

  //   Triangulo Grande Azul
  trianguloGrande = new Triangulo(
    color("blue"),
    [100, 200],
    1.5708,
    false,
    200
  );

  //   Triangulo Grande Naranja
  trianguloGrande2 = new Triangulo(
    color("orange"),
    [200, 100],
    3.14159,
    false,
    200
  );

  //   Triangulo Mediano Rojo
  trianguloMediano = new Triangulo(color("red"), [350, 350], -3.93, false, 141);

  //   Triangulo pequeño Magenta
  trianguloPequeño = new Triangulo(
    color("magenta"),
    [250, 200],
    -1.57,
    false,
    100
  );

  //   Triangulo pequeño Indigo
  trianguloPequeño2 = new Triangulo(color("indigo"), [100, 350], 0, false, 100);

  //   Romboide Verde
  romboide = new Romboide(color("green"), [350, 125], false, 0, false, 50);

  buttonRedirect = createButton("Jugar");
  buttonRedirect.mousePressed(redirect);
}

function draw() {
  background(180);

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
