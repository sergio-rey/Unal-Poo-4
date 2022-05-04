function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

class Cuadrado {
  constructor(
    color,
    position = [0, 0],
    rotation = 0,
    getRandomInt = true,
    size = 100
  ) {
    this._rotation = rotation;
    this._color = color;
    this._size = size;

    if (getRandomInt) {
      this._position = createVector(
        getRandomInt(0, width),
        getRandomInt(0, height)
      );
    } else {
      this._position = createVector(position[0], position[1]);
    }
  }

  shape = () => {
    push();
    quad(-this._size, 0, 0, -this._size, this._size, 0, 0, this._size);
    pop();
  };
}

class Romboide {
  constructor(
    color,
    position = [0, 0],
    getRandomInt = true,
    rotation = 0,
    rotacionY = false,
    size = 50
  ) {
    this._color = color;
    this._rotation = rotation;
    this._rotationY = rotacionY;
    this._size = size;

    if (getRandomInt) {
      this._position = createVector(getRandomInt(0, width), getRandomInt(0, height));
    } else {
      this._position = createVector(position[0], position[1]);
    }
  }
  shape = () => {
    push();
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
    pop();
  };
}

class Triangulo {
  constructor(
    color,
    position = [0, 0],
    rotation = 0,
    getRandomInt = true,
    size = 200
  ) {
    this._color = color;
    this._rotation = rotation;
    this._size = size;

    if (getRandomInt) {
      this._position = createVector(getRandomInt(0, width), getRandomInt(0, height));
    } else {
      this._position = createVector(position[0], position[1]);
    }
  }
  shape = () => {
    push();
    triangle(
      -this._size,
      this._size / 2,
      0,
      -this._size / 2,
      this._size,
      this._size / 2
    );
    pop();
  };
}
