function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

class Piece {
  constructor(
    color,
    position = [0, 0],
    rotation = 0,
    random = true,
    size = 100,
    rotacionY = false
  ) {
    this._rotation = rotation;
    this._color = color;
    this._size = size;
    this._rotationY = rotacionY;

    if (random) {
      this._position = createVector(
        getRandomInt(0, width),
        getRandomInt(0, height)
      );
    } else {
      this._position = createVector(position[0], position[1]);
    }
  }
  display = () => {
    push();
    this.shape();
    pop();
  };

  getColor = () => {
    return this._color;
  };

  getPosition = () => {
    return this._position;
  };

  setPosition = (position) => {
    this._position = position;
  };

  getRotation = () => {
    return this._rotation;
  };

  setRotation = (rotation) => {
    this._rotation = rotationY;
  };

  getRotationY = () => {
    return this._rotationY;
  };

  setRotationY = (rotacionY) => {
    this._rotationY = rotacionY;
  };
}

class Cuadrado extends Piece {
  shape = () => {
    quad(-this._size, 0, 0, -this._size, this._size, 0, 0, this._size);
  };
}

class Romboide extends Piece {
  shape = () => {
    if (this._rotationY) {
      quad(
        this._size,
        -this._size / 2,
        -this._size,
        -this._size * 2.5,
        -this._size,
        this._size * 1.5,
        this._size,
        this._size * 3.5
      );
    } else {
      quad(
        -this._size,
        -this._size / 2,
        this._size,
        -this._size * 2.5,
        this._size,
        this._size * 1.5,
        -this._size,
        this._size * 3.5
      );
    }
  };
}

class Triangulo extends Piece {
  shape = () => {
    triangle(
      -this._size,
      this._size / 2,
      0,
      -this._size / 2,
      this._size,
      this._size / 2
    );
  };
}

function displayPiece(pieces) {
  pieces.forEach(function (piece) {
    push();
    translate(piece.getPosition());
    rotate(piece.getRotation());
    fill(piece.getColor());
    scale(SCALING);
    piece.shape();
    pop();
  });
}