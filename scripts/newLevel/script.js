let cuadrado,
  trianguloGrande,
  trianguloGrande2,
  trianguloMediano,
  trianguloPequeño,
  trianguloPequeño2,
  romboide;

let button, buttonNew, nameLevel, nameLevelText, levels;
let width = 500,
  height = 500;

let level;

const SCALING = 0.7;

function redirect(x) {
  window.location.replace("./levels.html");
}

function newLevel() {
  level = {
    name: nameLevelText,
    pieces: {
      trianguloGrande: {
        position: [trianguloGrande._position.x, trianguloGrande._position.y],
        rotation: trianguloGrande._rotation,
      },
      trianguloGrande2: {
        position: [trianguloGrande2._position.x, trianguloGrande2._position.y],
        rotation: trianguloGrande2._rotation,
      },
      trianguloMediano: {
        position: [trianguloMediano._position.x, trianguloMediano._position.y],
        rotation: trianguloMediano._rotation,
      },
      trianguloPequeño: {
        position: [trianguloPequeño._position.x, trianguloPequeño._position.y],
        rotation: trianguloPequeño._rotation,
      },
      trianguloPequeño2: {
        position: [
          trianguloPequeño2._position.x,
          trianguloPequeño2._position.y,
        ],
        rotation: trianguloPequeño2._rotation,
      },
      cuadrado: {
        position: [cuadrado._position.x, cuadrado._position.y],
        rotation: cuadrado._rotation,
      },
      romboide: {
        position: [romboide._position.x, romboide._position.y],
        rotation: romboide._rotation,
        rotationY: romboide._rotationY,
      },
    },
  };

  if (!!nameLevelText) {
    let i = 0;
    while (!!levels[i]) {
      i++;
    }
    levels[i] = level;
    saveJSON(levels, "levels.json", true);
  } else {
    alert("Modifica el nombre del nivel");
  }
}

function changeName() {
  nameLevelText = this.value();
}

function preload() {
  levels = loadJSON("http://127.0.0.1:5500/data/levels.json");
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
      this._position = createVector(random(0, width), random(0, height));
      this._color = color("yellow");
    },
    shape: function () {
      push();
      quad(-100, 0, 0, -100, 100, 0, 0, 100);
      pop();
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
      this._position = createVector(random(0, width), random(0, height));
      this._rotation = 1.5708;
      this._color = color("blue");
    },
    shape: function () {
      push();
      triangle(-200, 100, 0, -100, 200, 100);
      pop();
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
      this._position = createVector(random(0, width), random(0, height));
      this._rotation = 3.14159;
      this._color = color("orange");
    },
    shape: function () {
      push();
      triangle(-200, 100, 0, -100, 200, 100);

      pop();
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
      this._position = createVector(random(0, width), random(0, height));
      this._color = color("red");
    },
    shape: function () {
      push();
      triangle(-150, 50, 50, -150, 50, 50);
      pop();
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
      this._position = createVector(random(0, width), random(0, height));
      this._color = color("magenta");
    },
    shape: function () {
      push();
      triangle(-50, 0, 50, -100, 50, 100);
      pop();
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
      this._position = createVector(random(0, width), random(0, height));
      this._color = color("indigo");
    },
    shape: function () {
      push();
      triangle(-100, 50, 0, -50, 100, 50);
      pop();
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
      this._position = createVector(random(0, width), random(0, height));
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

  nameLevel = createInput("Nombre del nivel");
  nameLevel.position(20, 260);
  nameLevel.input(changeName);

  button = createButton("Niveles");
  button.mousePressed(redirect);
  button.position(20, 100);

  buttonNew = createButton("Crear");
  buttonNew.mousePressed(newLevel);
  buttonNew.position(20, 180);
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
