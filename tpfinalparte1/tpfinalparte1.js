// Marina Vergara Comisión 2
// Video: https://youtu.be/oVGThBTDkIA

let imagenes = [];
let sonido;
let sonidoMusica;
let sonidoClick;
let sonidoEmpieza = false;
let estado = 0;
let escrito = [];

function preload() {
  //texto
  escrito= loadStrings("data/texto.txt");
  //funcion para la musica
  sonidoMusica = loadSound("data/musica.mp3");
  sonidoClick = loadSound("data/click.mp3");
  for (let i = 0; i < 22; i++) {
    imagenes[i] = loadImage("data/imagen" + i + ".jpg");
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

    //rectangulo atras del texxto
    fill(240, 180);
    rect(120, 240, 400, 60, 05);

    fill (0);
    text(escrito[estado], 120, 245, 400);

    // Se dibujan los botones
    if (estado === 0 || estado === 1) {
      dibujaBoton("Iniciar", width / 2 - 100, height * 0.75, 165, 50);
      dibujaBoton("Créditos", width / 2 + 100, height * 0.75, 165, 50);
    } else if (estado === 2) {
      dibujaBoton("Siguiente", width - 100, height - 50, 100, 50);
    } else if (estado === 3) {
      dibujaBoton("Escuchar las advertencias", width / 2, height * 0.70, 275, 50);
      dibujaBoton("No lo escuchan y siguen por su cuenta", width / 2, height * 0.82, 275, 50);
    } else if (estado === 4) {
      dibujaBoton("Siguiente", width - 100, height - 50, 100, 50);
    } else if (estado === 5) {
      dibujaBoton("Siguiente", width - 100, height - 50, 100, 50);
    } else if (estado === 6) {
      dibujaBoton("Ignorar la escuela y seguir viaje", width / 2, height * 0.70, 275, 50);
      dibujaBoton("Animar a los estudiantes", width / 2, height * 0.82, 275, 50);
    } else if (estado === 7) {
      dibujaBoton("Indagar sobre el bosque", width / 2, height * 0.70, 275, 50);
      dibujaBoton("Solo pedir indicaciones", width / 2, height * 0.82, 275, 50);
    } else if (estado === 8) {
      dibujaBoton("Siguiente", width - 100, height - 50, 100, 50);
    } else if (estado === 9) {
      dibujaBoton("Siguiente", width - 100, height - 50, 100, 50);
    } else if (estado === 10) {
      dibujaBoton("Siguiente", width - 100, height - 50, 100, 50);
    } else if (estado === 11) {
      dibujaBoton("Mezclarte e improvisar", width / 2, height * 0.70, 275, 50);
      dibujaBoton("Esconderte", width / 2, height * 0.82, 275, 50);
    } else if (estado===12) {
      dibujaBoton("Siguiente", width - 100, height - 50, 100, 50);
    } else if (estado ===13) {
      dibujaBoton("Siguiente", width - 100, height - 50, 100, 50);
    } else if (estado ===14) {
      dibujaBoton("Descansar un momento", width / 2, height * 0.70, 275, 50);
      dibujaBoton("Seguir viaje", width / 2, height * 0.82, 275, 50);
    } else if (estado ===15){
      dibujaBoton("Siguiente", width - 100, height - 50, 100, 50);
    } else if (estado === 16){
      dibujaBoton("Siguiente", width - 100, height - 50, 100, 50);
    } else if(estado ===17 || estado === 20 || estado === 21){
      dibujaBoton("Inicio", width /2, height * 0.75, 100, 50);
    }else if (estado === 18){
      dibujaBoton("Contarle al leñador la verdad", width / 2, height * 0.70, 275, 50);
      dibujaBoton("Aceptar el trato para salvar a Greg", width / 2, height * 0.82, 275, 50);
    } else if (estado === 19){
      dibujaBoton("Siguiente", width - 100, height - 50, 100, 50);
    }
  }
}

function cargarImagenes(imag, x, y, ancho, alto, alinea) {
  imageMode(alinea); //Alinea la imagen
  if (imag) {
    image(imag, x, y, ancho, alto); //Dibuja las imagenes en el canvas
  }
}

function mousePressed() {
  // reproduce musica
  if (!sonidoEmpieza) {
    sonidoMusica.loop(); // reproduce el sonido en bucle
    sonidoEmpieza = true; // se cambia el estado a true
  }

  // reproduce click
  sonidoClick.play();


  //Aavnzar a los estados al hacer clic en los botones
  if (estado === 0) {
    if (botonSobreMouse(width / 2 + 100, height * 0.75, 165, 50)) { // boton "creditos"
      estado = 1;
    } else if (botonSobreMouse(width / 2 - 100, height * 0.75, 165, 50)) { // boton "Iniciar"
      estado = 2;
    }
  } else if (estado === 1) {
    if (botonSobreMouse(width / 2 - 100, height * 0.75, 165, 50)) {
      estado = 0;
    }
  } else if (estado === 2) {
    if (botonSobreMouse(width - 100, height - 50, 100, 50)) { //boton "siguiente"
      estado = 3;
    }
  } else if (estado === 3) {
    if (botonSobreMouse(width / 2, height * 0.70, 275, 50)) { //boton "escuchar advertencias"
      estado = 4;
    } else if (botonSobreMouse(width / 2, height * 0.82, 275, 50)) { // boton "siguen por su cuenta"
      estado = 5;
    }
  } else if (estado === 4) {
    if (botonSobreMouse(width - 100, height - 50, 100, 50)) { //boton " siguiente"
      estado = 6;
    } 
  } else if (estado === 5) {
    if (botonSobreMouse(width - 100, height - 50, 100, 50)) { //boton "siguiente"
      estado = 7;
    }
  } else if (estado === 6) {
    if (botonSobreMouse(width / 2, height * 0.70, 275, 50)) { // boton "ignoras a los estudiantes"
      estado = 10;
    } else if (botonSobreMouse (width / 2, height * 0.82, 275, 50)) { //boton "animar a los estudiantes"
      estado = 7;
    }
  } else if (estado === 7) {
    if (botonSobreMouse(width / 2, height * 0.70, 275, 50)) { // boton "indagar sobre el bosque y leñador"
      estado = 9;
    } else if (botonSobreMouse (width / 2, height * 0.82, 275, 50)) { //boton "no dar importancia y pedir indicaciones"
      estado = 8;
    }
  } else if (estado === 8) {
    if (botonSobreMouse(width - 100, height - 50, 100, 50)) { // boton "siguiente"
      estado = 11;
    } 
  } else if (estado === 9) {
    if (botonSobreMouse (width - 100, height - 50, 100, 50)) { //boton "siguiente"
      estado=10;
    }
  } else if (estado === 10) {
    if (botonSobreMouse(width - 100, height - 50, 100, 50)) { //boton "siguiente"
      estado = 11;
    }
  } else if (estado === 11) {
    if (botonSobreMouse(width / 2, height * 0.70, 275, 50)) { // boton " mezclarte e improvisar"
      estado = 12;
    } else if (botonSobreMouse(width / 2, height * 0.82, 275, 50)) { //"esconderse"
      estado =13;
    }
  } else if (estado ===12) {
    if (botonSobreMouse(width - 100, height - 50, 100, 50)) { //boton "siguiente"
      estado = 14;
    }
  } else if (estado === 13) {
    if (botonSobreMouse (width - 100, height - 50, 100, 50)) { //boton "siguiente"
      estado= 14;
    }
  } else if (estado ===14) {
    if (botonSobreMouse(width / 2, height * 0.70, 275, 50)) { // boton "descansar un momento"
      estado =15;
    } else if (botonSobreMouse(width / 2, height * 0.82, 275, 50)) {  // boton "seguir viaje"
    estado = 16;
  }
  }else if (estado ===15){
    if (botonSobreMouse (width - 100, height - 50, 100, 50)) { //boton "siguiente"
      estado= 18;
    } 
  } else if  (estado === 16){
    if (botonSobreMouse (width - 100, height - 50, 100, 50)) { //boton "siguiente"
      estado= 17;
    }
  }else if(estado ===17 || estado === 20 || estado === 21){
    if (botonSobreMouse ( width /2, height * 0.75, 100, 50)) { //boton "Inicio"
      estado= 0;
    }
  }else if (estado === 18){
    if (botonSobreMouse(width / 2, height * 0.70, 275, 50)) { // boton "contarle al leñador etc"
      estado =19;
    } else if (botonSobreMouse(width / 2, height * 0.82, 275, 50)) {  // boton "aceptar trato"
    estado = 21;
    }
  } else if (estado === 19){
    if (botonSobreMouse (width - 100, height - 50, 100, 50)) { //boton "siguiente"
      estado= 20;
    }
  }
}
    
