class Jugador {
  constructor(imagen) {
    //propiedades iniciales
    this.protagonistasImg = imagen;
    this.x = 100;
    this.y = 100;
    this.tamano = 100;   // hitbox real
    this.ancho  = 100;
    this.alto   = 130;
    this.velocidad = 5; //control de la velocidad
    
  
  }
  
  mostrar() {
    imageMode(CENTER);
    let ratio = this.protagonistasImg.width / this.protagonistasImg.height; //ratio permite que la imagen no se deforme
    image(this.protagonistasImg, this.x, this.y, this.tamano * ratio, this.tamano);
  }
  
   mover(dx, dy) {
    //movimiento en ejes x,y al tocar la felcha
    if(dx!==0 || dy!==0){
    this.x += dx * this.velocidad;
    this.y += dy * this.velocidad;
    
    if(!moverSonido.isPlaying()){
      moverSonido.setVolume(0.6);
      moverSonido.play();
    }
   }

    //limita los bordes del canvas
    this.x = constrain(this.x, this.tamano / 2, width - this.tamano / 2);
    this.y = constrain(this.y, this.tamano / 2, height - this.tamano / 2);

  }
}