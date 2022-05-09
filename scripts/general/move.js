const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

function mouseDragged() {
    let color = get(mouseX, mouseY);
    let vector = createVector(mouseX, mouseY);
  
    if (equals(color, [0, 0, 255, 255])) {
      // Azul
      trianguloGrande.setPosition(vector);
    } else if (equals(color, [255, 165, 0, 255])) {
      // Naranja
      trianguloGrande2.setPosition(vector);
    } else if (equals(color, [75, 0, 130, 255])) {
      // Magenta
      trianguloPequeño2.setPosition(vector);
    } else if (equals(color, [255, 255, 0, 255])) {
      // Amarillo
      cuadrado.setPosition(vector);
    } else if (equals(color, [255, 0, 255, 255])) {
      // Indigo
      trianguloPequeño.setPosition(vector);
    } else if (equals(color, [0, 128, 0, 255])) {
      // Verde
      romboide.setPosition(vector);
    } else if (equals(color, [255, 0, 0, 255])) {
      // Rojo
      trianguloMediano.setPosition(vector);
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
      trianguloGrande.setRotation(trianguloGrande.getRotation() - rotationD);
    } else if (equals(color, [255, 165, 0, 255])) {
      // Naranja
      trianguloGrande2.setRotation(trianguloGrande2.getRotation() - rotationD);
    } else if (equals(color, [75, 0, 130, 255])) {
      // Magenta
      trianguloPequeño2.setRotation(trianguloPequeño2.getRotation() - rotationD);
    } else if (equals(color, [255, 255, 0, 255])) {
      // Amarillo
      cuadrado.setRotation(cuadrado.getRotation() - rotationD);
    } else if (equals(color, [255, 0, 255, 255])) {
      // Indigo
      trianguloPequeño.setRotation(trianguloPequeño.getRotation() - rotationD);
    } else if (equals(color, [0, 128, 0, 255])) {
      // Verde
      romboide.setRotation(romboide.getRotation() - rotationD);
    } else if (equals(color, [255, 0, 0, 255])) {
      // Rojo
      trianguloMediano.setRotation(trianguloMediano.getRotation() - rotationD);
    }
  }
  
  function doubleClicked() {
    let color = get(mouseX, mouseY);
  
    if (equals(color, [0, 128, 0, 255])) {
      // Verde
      if (romboide.getRotationY()) {
        romboide.setRotationY(false);
      } else {
        romboide.setRotationY(true);
      }
    }
  }
  