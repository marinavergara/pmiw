class Juego {
  constructor(pantallas) {
    this.pantallas = pantallas;
    this.jugador = new Jugador(protagonistasImg);
    this.bicho = new Enemigo(sapoImg);
    //tiempo de juego
    this.contadorTiempo = 0; //cuadro por frame
    this.tiempoMaximo = 1800 // 30s 
  }

  reiniciarJuego() {
    //vuelve a ponerlos en sus posiciones iniciales al reiniciar el juego
    this.jugador.x = 100;
    this.jugador.y = 100;
    this.bicho.x = width / 2;
    this.bicho.y = height / 3;
    this.bicho.tiempo = 0 //reinicio de movimiento del sapo 
    this.contadorTiempo = 0 //reinicia el contador de tiempo 

    //reinicio de noise del sapo
    this.bicho.tiempo = 0;
    fondoSonido.stop();
  }

  iniciarJuego() {
    
   //sonido de fondo para cuando arranque el juego
   if (!fondoSonido.isPlaying()){
     fondoSonido.setLoop(true); //bucle
     fondoSonido.setVolume(0.3);//determina el volumen
     fondoSonido.play();//arranca la musica
   }
    background(0); //limpia todo a negro 
    imageMode(CORNER);
    image(fondoImg, 0, 0, width, height);
    //personajes
    this.jugador.mostrar();
    this.bicho.correr();
    this.bicho.mostrar();
    // movimiento con flechas del jugador
    let dx = 0;
    let dy = 0;
    if (keyIsDown(LEFT_ARROW)) dx = -1;
    if (keyIsDown(RIGHT_ARROW)) dx = 1;
    if (keyIsDown(UP_ARROW)) dy = -1;
    if (keyIsDown(DOWN_ARROW)) dy = 1;
    this.jugador.mover(dx, dy);
    // colisión
    if (this.bicho.haLlegadoAJugador(this.jugador)) {
      fondoSonido.stop();
      this.pantallas.cambiarPantalla("perdiste");
    }
    //aumento del contador de tiempo
    this.contadorTiempo = this.contadorTiempo + 1;
    
    //mostrar tiempo en la pantalla
    fill(0);
    textSize(20);
    textAlign(LEFT, TOP);
    text("Tiempo: " + int(this.contadorTiempo / 60), 20, 20);
    
    //si llega a 30s gana 
    if (this.contadorTiempo >= this.tiempoMaximo) {
      fondoSonido.stop();
      this.pantallas.cambiarPantalla("ganaste");
    }
  }
}
