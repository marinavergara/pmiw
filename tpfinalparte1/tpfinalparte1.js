let imagenes = [];
let estado = 0;
let escrito = [
  "Carta a Una señorita en Paris.",
  "Creditos.",
  "El narrador escribe una carta a Andrée, desde su departamento en Buenos Aires.",
  "Confiesa que tiene un problema insólito.",
  "Describe la primera vez que vomito un conejo de forma inesperada y decide entonces.",
  "Sara, asustada y convencida de que el hombre está loco, llama a la policía.",
  "Decide ocultar el hecho, pero le preocupa cómo manejar la situación.",
  "Sigue vomitando aún más conejitos y el caos crece en el departamento.",
  "El narrador se siente atrapado e incapaz de controlar la situación.",
  "Agotado y sin salida, el narrador es abrumado por el caos de los conejitos. Desesperado toma una decisión trágica.",
  "La dosis de pastillas no fue la correcta para terminar con su vida.",
  "Luego de la masacre, el departamento está en un silencioso caos.",
  "La culpa lo carcome tanto que se siente perseguido por las almas de los conejos.",
  "Tanta es la angustia del narrador que decide abandonar el departamento.",
  "Decide pedirle ayuda a un amigo cercano.",
  "Su amigo, como último recurso, lo lleva con un psiquiatra.",
];

function preload() {
  for (let i = 0; i < 16; i++) {
    imagenes[i] = loadImage("data/imagen" + i + ".jpeg");
  }
}

function setup() {
  createCanvas(640, 480);
  textSize(16); // Tamaño de texto ajustado
  for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].resize(640, 480);
  }
}

function draw() {
  background(200);
  fill(250);

  if (estado >= 0 && estado < imagenes.length) {
    let img = imagenes[estado];
    let x = width / 2; //centro del canvas en x
    let y = height / 2; //centro del canvas en y 

    cargarImagenes(img, x, y, img.width, img.height, CENTER);
    text(escrito[estado], 120, 240, 400);

    // Se dibujan los botones
    if (estado === 0 || estado === 1) {
      dibujaBoton("Comenzar", width / 2 - 100, height * 0.75, 165, 50);
      dibujaBoton("Créditos", width / 2 + 100, height * 0.75, 165, 50);
    } else if (estado === 2) {
      dibujaBoton("Siguiente", width - 100, height - 50, 100, 50);
    } else if (estado === 3) {
      dibujaBoton("Vomita Conejos", width / 2 + 100, height * 0.75, 165, 50);
      dibujaBoton("Mató a Alguien", width / 2 - 100, height * 0.75, 165, 50);
    } else if (estado === 4) {
      dibujaBoton("Trata de Ocultarlo", width / 2 - 100, height * 0.75, 165, 50);
      dibujaBoton("Se lo cuenta a Sara", width / 2 + 100, height * 0.75, 165, 50);
    } else if (estado === 5) {
      dibujaBoton("Lo meten preso", width / 2, height * 0.75, 100, 50);
    } else if (estado === 6) {
      dibujaBoton("Acepta la situación y se los queda", width / 2 + 150, height * 0.75, 275, 50);
      dibujaBoton("Se deshace de los conejos", width / 2 - 150, height * 0.85, 260, 50);
    } else if (estado === 7) {
      dibujaBoton("Continúa soportando la invasión", width / 2, height * 0.75, 270, 50);
    } else if (estado === 8) {
      dibujaBoton("Pide ayuda", width / 2 - 150, height * 0.75, 100, 50);
      dibujaBoton("Se suicida", width / 2, height * 0.75, 100, 50);
      dibujaBoton("Mata a todos los conejos", width / 2 + 150, height * 0.75, 260, 50);
    }
  }
}

function cargarImagenes(imag, x, y, ancho, alto, alinea) {
  imageMode(alinea); //Alinea la imagen
  if (imag) {
    image(imag, x, y, ancho, alto); //Dibuja las imagenes en el canvas
  }
}

function dibujaBoton(txt, x, y, w, h) {
  push();
  rectMode(CENTER);
  if (botonSobreMouse(x, y, w, h)) {
    fill(20, 200, 0);
  } else {
    fill(100);
  }
  rect(x, y, w, h); //dibuja el botón
  textAlign(CENTER, CENTER);
  fill(255);
  text(txt, x, y); // Mostrar el texto en el botón
  pop();
}

function botonSobreMouse(x, y, w, h) {
  return (mouseX > x - w / 2 && mouseX < x + w / 2 && mouseY > y - h / 2 && mouseY < y + h / 2);
}

function mousePressed() {
  //Aavnzar a los estados al hacer clic en los botones
  if (estado === 0) {
    if (botonSobreMouse(width / 2 + 100, height * 0.75, 165, 50)) { // boton "creditos"
      estado = 1;
    } else if (botonSobreMouse(width / 2 - 100, height * 0.75, 165, 50)) { // boton "comenzar"
      estado = 2;
    }
  }else if (estado === 1) { 
    if (botonSobreMouse(width / 2 - 100, height * 0.75, 165, 50)) { 
      estado = 0;
    }
  } else if (estado === 2) {
    if (botonSobreMouse(width - 100, height - 50, 100, 50)) { //boton "siguiente"
      estado = 3;
    }
  } else if (estado === 3) {
    if (botonSobreMouse(width / 2 + 100, height * 0.75, 165, 50)) { //boton vomita conejos
      estado = 4;
    } else if (botonSobreMouse(width / 2 - 100, height * 0.75, 165, 50)) { // boton "mató a alguien"
      estado = 0;
    }
  } else if (estado === 4) {
    if (botonSobreMouse(width / 2 - 100, height * 0.75, 165, 50)) { //boton " trata de ocultarlo"
      estado = 6;
    } else if (botonSobreMouse(width / 2 + 100, height * 0.75, 165, 50)) { // boton " se lo cuenta a sara
      estado = 5;
    }
  } else if (estado === 5) {
    if (botonSobreMouse(width / 2, height * 0.75, 100, 50)) { //boton "lo meten preso"
      estado = 0;
    }
  } else if (estado === 6) {
    if (botonSobreMouse(width / 2 + 150, height * 0.75, 275, 50)) { // boton acepta la situación""
      estado = 7;
    }
  } else if (estado === 7) {
    if (botonSobreMouse(width / 2 -150, height * 0.75, 260, 50)) { //boton "se deshace de los conejos"
      estado = 8;
    }
  } else if (estado === 8) {
    if (botonSobreMouse(width / 2 - 150, height * 0.75, 100, 50)) { // boton "pide ayuda"
      estado = 14;
    } else if (botonSobreMouse(width / 2, height * 0.75, 100, 50)) { // boton " se suicida"
      estado = 9;
    } else if (botonSobreMouse(width / 2 + 150, height * 0.75, 260, 50)) { // boton " mata a todos los conejos"
      estado = 11;
    }
  }
} 
