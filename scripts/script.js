let cuadrado,
  trianguloGrande,
  trianguloGrande2,
  trianguloMediano,
  trianguloPequeño,
  trianguloPequeño2,
  romboide;

let button, levels;

let width = 400,
  height = 400;

const SCALING = 1;

const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

function redirect() {
  window.location.replace("./levels.html");
}

function setup() {
  createCanvas(width, height);

  //   Cuadrado Amarrillo
  cuadrado = {
    _position: createVector(),
    _rotation: 0,
    _edge: 400 / 2.66,
    _color: color("red"),
    randomize: function () {
      this._position = createVector(200, 300);
      this._color = color("yellow");
    },
    shape: function () {
      push();
      quad(-100, 0, 0, -100, 100, 0, 0, 100);
      pop();
    },
    pick: function (vector, x, y, margin = 50) {
      let difx = vector.x - x;
      let dify = vector.y - y;

      if (
        difx < margin &&
        difx > margin - 2 * margin &&
        dify < margin &&
        dify > margin - 2 * margin
      ) {
        return true;
      }
      return false;
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
      this._position = createVector(100, 200);
      this._rotation = 1.5708;
      this._color = color("blue");
    },
    shape: function () {
      push();
      triangle(-200, 100, 0, -100, 200, 100);
      pop();
    },
    pick: function (vector, x, y, margin = 50) {
      let difx = vector.x - x;
      let dify = vector.y - y;

      if (
        difx < margin &&
        difx > margin - 2 * margin &&
        dify < margin &&
        dify > margin - 2 * margin
      ) {
        return true;
      }
      return false;
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
      this._position = createVector(200, 100);
      this._rotation = 3.14159;
      this._color = color("orange");
    },
    shape: function () {
      push();
      triangle(-200, 100, 0, -100, 200, 100);

      pop();
    },
    pick: function (vector, x, y, margin = 50) {
      let difx = vector.x - x;
      let dify = vector.y - y;

      if (
        difx < margin &&
        difx > margin - 2 * margin &&
        dify < margin &&
        dify > margin - 2 * margin
      ) {
        return true;
      }
      return false;
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
      this._position = createVector(350, 350);
      this._color = color("red");
    },
    shape: function () {
      push();
      triangle(-150, 50, 50, -150, 50, 50);
      pop();
    },
    pick: function (vector, x, y, margin = 50) {
      let difx = vector.x - x;
      let dify = vector.y - y;

      if (
        difx < margin &&
        difx > margin - 2 * margin &&
        dify < margin &&
        dify > margin - 2 * margin
      ) {
        return true;
      }
      return false;
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
      this._position = createVector(250, 200);
      this._color = color("magenta");
    },
    shape: function () {
      push();
      triangle(-50, 0, 50, -100, 50, 100);
      pop();
    },
    pick: function (vector, x, y, margin = 50) {
      let difx = vector.x - x;
      let dify = vector.y - y;

      if (
        difx < margin &&
        difx > margin - 2 * margin &&
        dify < margin &&
        dify > margin - 2 * margin
      ) {
        return true;
      }
      return false;
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
      this._position = createVector(100, 350);
      this._color = color("indigo");
    },
    shape: function () {
      push();
      triangle(-100, 50, 0, -50, 100, 50);
      pop();
    },
    pick: function (vector, x, y, margin = 50) {
      let difx = vector.x - x;
      let dify = vector.y - y;

      if (
        difx < margin &&
        difx > margin - 2 * margin &&
        dify < margin &&
        dify > margin - 2 * margin
      ) {
        return true;
      }
      return false;
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

  //   Romboide Verde
  romboide = {
    _position: createVector(),
    _rotation: 0,
    _edge: 150,
    _rotationY: false,
    _color: color("red"),
    randomize: function () {
      this._position = createVector(350, 125);
      this._rotation = 0;
      this._color = color("green");
    },
    shape: function () {
      if (this._rotationY) {
        push();
        quad(50, -25, -50, -125, -50, 75, 50, 175);
        pop();
      } else {
        push();
        quad(-50, -25, 50, -125, 50, 75, -50, 175);
        pop();
      }
    },
    pick: function (vector, x, y, margin = 50) {
      let difx = vector.x - x;
      let dify = vector.y - y;

      if (
        difx < margin &&
        difx > margin - 2 * margin &&
        dify < margin &&
        dify > margin - 2 * margin
      ) {
        return true;
      }
      return false;
    },
    // position setter
    set position(position) {
      this._position = position;
    },
    // position getter
    get position() {
      return this._position;
    },
    get romboide() {
      return true;
    },
  };

  romboide.randomize();

  button = createButton('Jugar');
  button.mousePressed(redirect);
}

function draw() {
  background(180);

  displayPiece(cuadrado);
  displayPiece(trianguloGrande);
  displayPiece(trianguloGrande2);
  displayPiece(trianguloMediano);
  displayPiece(trianguloPequeño);
  displayPiece(trianguloPequeño2);
  displayPiece(romboide);
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

// by Sergio and Camilo 2022
