const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

function mouseDragged() {
    let color = get(mouseX, mouseY);
    let vector = createVector(mouseX, mouseY);
  
    if (equals(color, [0, 0, 255, 255])) {
      // Azul
      trianguloGrande._position = vector;
    } else if (equals(color, [255, 165, 0, 255])) {
      // Naranja
      trianguloGrande2._position = vector;
    } else if (equals(color, [75, 0, 130, 255])) {
      // Magenta
      trianguloPequeño2._position = vector;
    } else if (equals(color, [255, 255, 0, 255])) {
      // Amarillo
      cuadrado._position = vector;
    } else if (equals(color, [255, 0, 255, 255])) {
      // Indigo
      trianguloPequeño._position = vector;
    } else if (equals(color, [0, 128, 0, 255])) {
      // Verde
      romboide._position = vector;
    } else if (equals(color, [255, 0, 0, 255])) {
      // Rojo
      trianguloMediano._position = vector;
    }
  }
  
  // Implement the mouseWheel function to set the piece rotation
  function mouseWheel(event) {
    let color = get(mouseX, mouseY);
    let rotationD;
  
    if (event.delta < 0) {
      rotationD = -0.02;
    } else {
      rotationD = 0.02;
    }
  
    if (equals(color, [0, 0, 255, 255])) {
      // Azul
      trianguloGrande._rotation = trianguloGrande._rotation - rotationD;
    } else if (equals(color, [255, 165, 0, 255])) {
      // Naranja
      trianguloGrande2._rotation = trianguloGrande2._rotation - rotationD;
    } else if (equals(color, [75, 0, 130, 255])) {
      // Magenta
      trianguloPequeño2._rotation = trianguloPequeño2._rotation - rotationD;
    } else if (equals(color, [255, 255, 0, 255])) {
      // Amarillo
      cuadrado._rotation = cuadrado._rotation - rotationD;
    } else if (equals(color, [255, 0, 255, 255])) {
      // Indigo
      trianguloPequeño._rotation = trianguloPequeño._rotation - rotationD;
    } else if (equals(color, [0, 128, 0, 255])) {
      // Verde
      romboide._rotation = romboide._rotation - rotationD;
    } else if (equals(color, [255, 0, 0, 255])) {
      // Rojo
      trianguloMediano._rotation = trianguloMediano._rotation - rotationD;
    }
  }
  
  function doubleClicked() {
    let color = get(mouseX, mouseY);
  
    if (equals(color, [0, 128, 0, 255])) {
      // Verde
      if (romboide._rotationY) {
        romboide._rotationY = false;
      } else {
        romboide._rotationY = true;
      }
    }
  }
  