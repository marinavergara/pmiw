function cuadrados ( x,  y){
  for (let x=0;x<cant; x++){
    for (let y=0;y<cant ;y++){
      if ((x+y)%2===0){
        fill (pintura2);
      }else {
        fill(pintura);
      }
      rect ((x*tam)+400, (y*tam),tam, tam);
    }
  }
}
function circulitos (i, j){
  for (let i=0; i<cant; i++){
    for (let j=0; j<cant; j++){
      noStroke();
      if ((i+j)%2===0){
        fill (pintura);
      }else {
        fill (pintura2);
      }
      ellipse ((i*tam+tam/2)+400, (j*tam+tam/2), tam2,tam2);
    }
  }
}
function mouseSobreLaDerecha(){
  if (mouseX> width/2){
    return true;
  }else{
    return false;
  }
}
