class controlPantallas{
  constructor(){
    this.estadoPantalla = "inicio";
  }
  
  cambiarPantalla(nuevaPantalla) {
    this.estadoPantalla = nuevaPantalla;
  }
  
  obtenerEstadoActual(){
    return this.estadoPantalla;
  }
  
  dibujarPantallaActual(){
    if (this.estadoPantalla === "inicio") {
      this.mostrarPantallaInicio();
    } else if(this.estadoPantalla === "instrucciones") {
      this.mostrarPantallaInstrucciones();
    } else if (this.estadoPantalla === "jugando") {
      juego.iniciarJuego();
    } else if (this.estadoPantalla === "perdiste") {
      this.mostrarPantallaPerdiste();
    } else if (this.estadoPantalla === "ganaste") {
      this.mostrarPantallaGanaste();
    } else if (this.estadoPantalla === "Creditos"){
      this.mostrarPantallaCreditos();
    }
  }

  //  detectar teclas segin pantalla
  teclaPresionada(key) {
    if (this.estadoPantalla === "perdiste" && (key === 'r' || key === 'R')) {
      this.cambiarPantalla("inicio");
    }
  }
  
  mostrarPantallaInicio(){
    textFont(fuentePixel);
    background(0);
    imageMode(CORNER);
    image(portadaImg, 0,0, width, height);
    //transparencia asi se aprecia mejor el texto 
    fill(0, 150);
    rect(0,0, width, height);
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Mas alla del jardin", width / 2, height / 2 - 40 );
    textSize(22);
    text("Presiona enter para comenzar.", width / 2, height / 2 + 20);
    text("Presiona I para ver instrucciones.", width / 2, height / 2 + 60);
    text("Presiona C para ver creditos.", width / 2, height / 2 + 100);
  }
  
  mostrarPantallaInstrucciones(){
    imageMode (CORNER);
    image (instruccionesImg, 0,0, width, height);
    //transparencia
    fill(0,150);
    rect(0,0, width, height);
    textFont(fuentePixel);
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Instrucciones", width/2, 50);
    textSize(22);
    text("1. Usa las flechas de tu teclado para moverte.", width / 2, 120);
    text("Arriba - Abajo - Izquierda - Derecha.", width / 2, 150);
    text("2. Evita que el sapo te toque!", width / 2, 180);
    text("3.Si sobrevivis 30 segundos, ganas :)", width / 2, 210);
    text("4.Si te toca el sapo, perdes :(", width / 2, 240);
    textSize(16);
    text("Presiona B para volver al inicio.", width/2, 330);
    

  }
  
  mostrarPantallaCreditos(){
    imageMode (CORNER);
    image(creditosImg, 0,0, width,height);
    //transparecia
    fill(0,150);
    rect(0,0, width, height);
    textFont(fuentePixel);
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Creditos", width / 2, height / 2 - 40);
    textSize(22);
    text("Marina Vergara y Ramiro Pereyra", width / 2, height / 2 + 20);
    text("Presiona B para volver al inicio", width / 2, height - 50);
  }

  mostrarPantallaPerdiste() {
    imageMode (CORNER);
    image (perdisteImg, 0,0, width, height);
    //transparencia asi se aprecia el texto 
    fill(0,150);
    rect(0,0, width, height);
    textFont(fuentePixel);
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("¡PERDISTE!", width / 2, height / 2 - 40);
    textSize(22);
    text("Presiona R para volver a intentar.", width / 2, height / 2 + 20);
  }
  
  mostrarPantallaGanaste(){
    imageMode(CORNER);
    image(ganasteImg, 0,0, width, height);
    //transparencia para que se aprecie el texto 
    fill(0, 150); 
    rect(0, 0, width, height);
    textFont(fuentePixel);
    fill(255);
    textSize(32);
    textAlign(CENTER,CENTER);
    text("¡GANASTE!", width / 2, height / 2 - 40);
    textSize(22);
    text("Te salvaste de que te descubran!", width / 2, height / 2+10);
    text("presiona R para jugar otra vez.", width / 2 , height/2 + 60);
}
}
