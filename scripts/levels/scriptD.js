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

let button, buttonClear, buttonNew;

let pName, levels, i, m;

let idLevel, StoredLevels, x;

let width = 500,
height = 500;

const SCALING = 0.7;


function redirect() {
window.location.replace("./index.html");
}

function redirectNew() {
window.location.replace("./new.html");
}

function preload() {
levels = loadJSON("http://127.0.0.1:5500/data/levels.json");
}

function validate() {
if (
  cuadrado.pick(cuadradoF._position) &&
  trianguloGrande.pick(trianguloGrandeF._position) &&
  trianguloGrande2.pick(trianguloGrande2F._position) &&
  trianguloMediano.pick(trianguloMedianoF._position) &&
  trianguloPequeño.pick(trianguloPequeñoF._position) &&
  trianguloPequeño2.pick(trianguloPequeño2F._position) &&
  romboide.pick(romboideF._position)
) {
  alert("Felicidades, has completado el nivel!");
  i++;
} else {
  alert("No se ha completado el nivel");
}
}

function initPieces() {
cuadradoF = {
  _position: createVector(),
  _rotation: levels[i].pieces.cuadrado.rotation,
  _edge: 400 / 2.66,
  _color: color("red"),
  randomize: function () {
    this._position = createVector(
      levels[i].pieces.cuadrado.position[0],
      levels[i].pieces.cuadrado.position[1]
    );
    this._color = color("black");
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

trianguloGrandeF = {
  _position: createVector(),
  _rotation: 0,
  _edge: 150,
  _color: color("red"),
  randomize: function () {
    this._position = createVector(
      levels[i].pieces.trianguloGrande.position[0],
      levels[i].pieces.trianguloGrande.position[1]
    );
    this._rotation = levels[i].pieces.trianguloGrande.rotation;
    this._color = color("black");
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

trianguloGrande2F = {
  _position: createVector(),
  _rotation: 0,
  _edge: 150,
  _color: color("red"),
  randomize: function () {
    this._position = createVector(
      levels[i].pieces.trianguloGrande2.position[0],
      levels[i].pieces.trianguloGrande2.position[1]
    );
    this._rotation = levels[i].pieces.trianguloGrande2.rotation;
    this._color = color("black");
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

trianguloMedianoF = {
  _position: createVector(),
  _rotation: 0,
  _edge: 150,
  _color: color("red"),
  randomize: function () {
    this._position = createVector(
      levels[i].pieces.trianguloMediano.position[0],
      levels[i].pieces.trianguloMediano.position[1]
    );
    this._color = color("black");
    this._rotation = levels[i].pieces.trianguloMediano.rotation;
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

trianguloPequeñoF = {
  _position: createVector(),
  _rotation: levels[i].pieces.trianguloPequeño.rotation,
  _edge: 150,
  _color: color("red"),
  randomize: function () {
    this._position = createVector(
      levels[i].pieces.trianguloPequeño.position[0],
      levels[i].pieces.trianguloPequeño.position[1]
    );
    this._color = color("black");
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

trianguloPequeño2F = {
  _position: createVector(),
  _rotation: levels[i].pieces.trianguloPequeño2.rotation,
  _edge: 150,
  _color: color("red"),
  randomize: function () {
    this._position = createVector(
      levels[i].pieces.trianguloPequeño2.position[0],
      levels[i].pieces.trianguloPequeño2.position[1]
    );
    this._color = color("black");
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

romboideF = {
  _position: createVector(),
  _rotation: 0,
  _edge: 150,
  _rotationY: false,
  _color: color("red"),
  randomize: function () {
    this._position = createVector(
      levels[i].pieces.romboide.position[0],
      levels[i].pieces.romboide.position[1]
    );
    this._rotation = levels[i].pieces.romboide.rotation;
    _rotationY = levels[i].pieces.romboide.rotationY;
    this._color = color("black");
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
}

function setup() {
i = 0;
while (!!levels[i]) {
  i++;
}

i = int(random(0, i));

createCanvas(width, height);

//   Cuadrado Amarrillo
cuadrado = {
  _position: createVector(),
  _rotation: 0,
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
  pick: function (vector, margin = 50) {
    let difx = vector.x - this._position.x;
    let dify = vector.y - this._position.y;

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
  pick: function (vector, margin = 50) {
    let difx = vector.x - this._position.x;
    let dify = vector.y - this._position.y;

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
  pick: function (vector, margin = 50) {
    let difx = vector.x - this._position.x;
    let dify = vector.y - this._position.y;

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
  pick: function (vector, margin = 50) {
    let difx = vector.x - this._position.x;
    let dify = vector.y - this._position.y;

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
  pick: function (vector, margin = 50) {
    let difx = vector.x - this._position.x;
    let dify = vector.y - this._position.y;

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
  pick: function (vector, margin = 50) {
    let difx = vector.x - this._position.x;
    let dify = vector.y - this._position.y;

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
  pick: function (vector, margin = 50) {
    let difx = vector.x - this._position.x;
    let dify = vector.y - this._position.y;

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

initPieces();

cuadradoF.randomize();
trianguloGrandeF.randomize();
trianguloGrande2F.randomize();
trianguloMedianoF.randomize();
trianguloPequeñoF.randomize();
trianguloPequeño2F.randomize();
romboideF.randomize();

cuadrado.randomize();
trianguloGrande.randomize();
trianguloGrande2.randomize();
trianguloMediano.randomize();
trianguloPequeño.randomize();
trianguloPequeño2.randomize();
romboide.randomize();

pName = createP(levels[i].name);
pName.position(20, 20);

button = createButton("Inicio");
button.mousePressed(redirect);
button.position(20, 100);

buttonNew = createButton("Crear Nivel");
buttonNew.mousePressed(redirectNew);
buttonNew.position(20, 180);

buttonClear = createButton("Validar");
buttonClear.mousePressed(validate);
buttonClear.position(20, 260);
}

function draw() {
background(180);

displayPiece(cuadradoF);
displayPiece(trianguloGrandeF);
displayPiece(trianguloGrande2F);
displayPiece(trianguloMedianoF);
displayPiece(trianguloPequeñoF);
displayPiece(trianguloPequeño2F);
displayPiece(romboideF);

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