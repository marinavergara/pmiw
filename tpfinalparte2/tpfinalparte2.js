//Marina Vergara 120383/9 comisión 2
//link 

let juego;
let sapoImg, protagonistasImg, fondoImg, PortadaImg, ganasteImg, PerdisteImg, creditosImg, instruccionesImg, moverSonido, fondoSonido, fuentePixel;

function preload(){
  sapoImg = loadImage('data/sapo.png');
  protagonistasImg = loadImage('data/protagonistas.png');
  fondoImg = loadImage ('data/fondo.jpg');
  portadaImg = loadImage('data/portada.jpg');
  ganasteImg = loadImage ('data/ganaste.jpg');
  perdisteImg = loadImage ('data/perdiste.jpg');
  creditosImg = loadImage ('data/creditos.jpg');
  instruccionesImg = loadImage ('data/instrucciones.jpg');
  moverSonido = loadSound ('data/mover.mp3');
  fondoSonido = loadSound ('data/fondo.mp3');
  fuentePixel = loadFont ('fuentes/Tomeoftheunknown-3gL3.ttf');
}

function setup() {
  createCanvas(640, 480);
  pantallas = new controlPantallas();
  juego = new Juego(pantallas);
}


function draw() {
  pantallas.dibujarPantallaActual();
}

function keyPressed() {

  //se avisa a la clase pantallas
  pantallas.teclaPresionada(key);

  //pantalla inicio
  if (pantallas.obtenerEstadoActual()=== "inicio"){
    if (keyCode === ENTER){
      userStartAudio(); //habilita el audio al apretar enter
      juego.reiniciarJuego();
      pantallas.cambiarPantalla("jugando");
    } else if (key === 'i' || key === 'I'){
      pantallas.cambiarPantalla("instrucciones");
    } else if (key === 'c' || key === 'C'){
      pantallas.cambiarPantalla("Creditos");
    }

  //instrucciones
  } else if (pantallas.obtenerEstadoActual() === "instrucciones" &&
            (key === 'b' || key === 'B')) {

    pantallas.cambiarPantalla("inicio");

  //creditos
  } else if (pantallas.obtenerEstadoActual() === "Creditos" &&
            (key === 'b' || key === 'B')) {

    pantallas.cambiarPantalla("inicio");

  //perdiste-ganaste
  } else if (
      pantallas.obtenerEstadoActual() === "perdiste" ||
      pantallas.obtenerEstadoActual() === "ganaste"
  ) {

    if (key === 'r' || key === 'R') {
      juego.reiniciarJuego();
      pantallas.cambiarPantalla("inicio");
    }
  }
}
