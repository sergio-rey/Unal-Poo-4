let grid = true;
let cuadrado,
  trianguloGrande,
  trianguloGrande2,
  trianguloMediano,
  trianguloPequeño,
  trianguloPequeño2;

const SCALING = 1;

function setup() {
  createCanvas(430, 400);

  //   Cuadrado Amarrillo
  cuadrado = {
    _position: createVector(),
    _rotation: 0,
    _edge: 400 / 2.66,
    _color: color("red"),
    randomize: function () {
      this._position = createVector(215, 400 / 1.37);
      this._rotation = 0.785398;
      this._color = color("yellow");
    },
    shape: function () {
      push();
      rectMode(CENTER);
      rect(0, 0, this._edge, this._edge);
      pop();
    },
    pick: function (_x, _y) {
      console.error("pick lacks implementation!");
    },
    // position setter
    set position(position) {
      this._position = position;
    },
    // position getter
    get position() {
      return this._position;
    },
  };

  cuadrado.randomize();

    //   Triangulo Grande Azul
  trianguloGrande = {
    _position: createVector(),
    _rotation: 0,
    _edge: 150,
    _color: color("red"),
    randomize: function () {
      this._position = createVector(105, 200);
      this._rotation = 1.5708;
      this._color = color("blue");
    },
    shape: function () {
      push();
      triangle(-200, 104, -15, -109, 200, 104);
      pop();
    },
    pick: function (x, y) {
      console.error("pick lacks implementation!");
    },
    // position setter
    set position(position) {
      this._position = position;
    },
    // position getter
    get position() {
      return this._position;
    },
  };

  trianguloGrande.randomize();

//   Triangulo Grande Naranja
  trianguloGrande2 = {
    _position: createVector(),
    _rotation: 0,
    _edge: 150,
    _color: color("red"),
    randomize: function () {
      this._position = createVector(215, 100);
      this._rotation = 3.14159;
      this._color = color("orange");
    },
    shape: function () {
      push();
      triangle(-212, 100, 0, -84, 212, 100);
      pop();
    },
    pick: function (x, y) {
      console.error("pick lacks implementation!");
    },
    // position setter
    set position(position) {
      this._position = position;
    },
    // position getter
    get position() {
      return this._position;
    },
  };

  trianguloGrande2.randomize();

  //   Triangulo Mediano Rojo
  trianguloMediano = {
    _position: createVector(),
    _rotation: 0,
    _edge: 150,
    _color: color("red"),
    randomize: function () {
      this._position = createVector(365, 350);
      this._rotation = 2.35619;
      this._color = color("red");
    },
    shape: function () {
      push();
      triangle(-168, 80, -10, -80, 138, 70);
      pop();
    },
    pick: function (x, y) {
      console.error("pick lacks implementation!");
    },
    // position setter
    set position(position) {
      this._position = position;
    },
    // position getter
    get position() {
      return this._position;
    },
  };

  trianguloMediano.randomize();

  //   Triangulo pequeño Magenta
  trianguloPequeño = {
    _position: createVector(),
    _rotation: 0,
    _edge: 150,
    _color: color("red"),
    randomize: function () {
      this._position = createVector(266, 188);
      this._rotation = 4.78;
      this._color = color("magenta");
    },
    shape: function () {
      push();
      triangle(-95, 60, 0, -52, 105, 53);
      pop();
    },
    pick: function (x, y) {
      console.error("pick lacks implementation!");
    },
    // position setter
    set position(position) {
      this._position = position;
    },
    // position getter
    get position() {
      return this._position;
    },
  };

  trianguloPequeño.randomize();

  //   Triangulo pequeño Indigo
  trianguloPequeño2 = {
    _position: createVector(),
    _rotation: 0,
    _edge: 150,
    _color: color("red"),
    randomize: function () {
      this._position = createVector(108, 345);
      this._rotation = 0;
      this._color = color("indigo");
    },
    shape: function () {
      push();
      triangle(-104, 53, 0, -52, 105, 53);
      pop();
    },
    pick: function (x, y) {
      console.error("pick lacks implementation!");
    },
    // position setter
    set position(position) {
      this._position = position;
    },
    // position getter
    get position() {
      return this._position;
    },
  };

  trianguloPequeño2.randomize();
}

function draw() {
  background(180);
  if (grid) {
    gridHint(10);
  }
  displayPiece(cuadrado);
  displayPiece(trianguloGrande);
  displayPiece(trianguloGrande2);
  displayPiece(trianguloMediano);
  displayPiece(trianguloPequeño);
  displayPiece(trianguloPequeño2);
}

function displayPiece(piece) {
  push();
  // translate according to the piece position getter
  translate(piece.position);
  // Implement piece getters for the rotation and color
  rotate(piece._rotation);
  fill(piece._color);
  scale(SCALING);
  piece.shape();
  pop();
}

function gridHint(scale) {
  push();
  stroke(0, 255, 255);
  strokeWeight(1);
  let i;
  for (i = 0; i <= width / scale; i++) {
    line(i * scale, 0, i * scale, height);
  }
  for (i = 0; i <= height / scale; i++) {
    line(0, i * scale, width, i * scale);
  }
  pop();
}

function mouseDragged() {
//   cuadrado.position = createVector(mouseX, mouseY);
//   trianguloGrande.position = createVector(mouseX, mouseY);
//   trianguloGrande2.position = createVector(mouseX, mouseY);
//   trianguloPequeño.position = createVector(mouseX, mouseY);
//   trianguloPequeño2.position = createVector(mouseX, mouseY);
}

// Implement the mouseWheel function to set the piece rotation
function mouseWheel(event) {}

function keyPressed() {
  // toggle grid hint
  if (key === "g") {
    grid = !grid;
  }
}
