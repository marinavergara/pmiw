class Enemigo {
  constructor(imagen) {
    this.sapoImg = imagen;
    this.x = width / 2;
    this.y = height / 3;
    this.tamano = 100;
    this.tiempo = random(1000);
  }

  correr() {
    this.tiempo += 0.007; //define a qué velocidad va
    this.x = width * noise(this.tiempo);
    this.y = height * noise(this.tiempo + 5000);
  }

  mostrar() { //mostrar al sapo
    imageMode(CENTER);
    image(this.sapoImg, this.x, this.y, this.tamano, this.tamano);
  }

  haLlegadoAJugador(jugador) {
    return dist(this.x, this.y, jugador.x, jugador.y) <
           (this.tamano / 2 + jugador.tamano / 2);
  }
}
