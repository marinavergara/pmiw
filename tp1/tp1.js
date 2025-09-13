//marina vergara comision 1 legajo 120383/9
//youtube:https://youtu.be/ED5UOmcWy0I


let pintura;
let pintura2;
let tam;
let tam2;
let cant;
let X;
let Y;

function preload(){
  obra = loadImage("data/obra.png");
}

function setup(){
  createCanvas(800,400);
  obra.resize(400,400);
  tam =40;
  tam2=18;
  cant=20;
  pintura = color (255);
  pintura2 = color(0);
}

function draw (){
  background (0);
  image (obra, 0,0);
  print (mouseSobreLaDerecha());
  cuadrados (0,0);
  circulitos(0,0);
}

function keyPressed() {
  if ((key==='-') && (cant  <= 60) && (tam2 <=90) ) {
    cant++;
    tam= width/cant;
    tam2=width/(cant*2);
  
  } else if ((key==='+') && (cant  <= 60) && (tam2 <=90) ) {
    cant--;
    tam= width/cant;
    tam2=width/(cant*2);
  }
  
  if (key===' ') {
    cant = 20;
    tam2 = 17;
    tam= 40;
    pintura= color (255);
    pintura2= color (0);
  }
}
function mouseDragged(){
  let X=map(mouseX, 0, width, 0, 255);
  let Y= map(mouseY, 0, height, 0, 255);
  pintura =color(X, random(255), Y);
}
