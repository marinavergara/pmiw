//Carta a una señorita en Paris
//Marina Vergara, Iara Sepúlveda. Comisión 1

let imagenes = []; 

let estado = 0; 

let escrito = [];

function preload() {
  for (let i=0; i<4; i++) {
    imagenes [i] = loadImage("data/imagen"+i+".jpeg");
  }
}

function cargarTexto(){
  escrito[0] = "El narrador escribe una carta a Andrée, desde su departamento en Buenos Aires.";
  escrito[1]= "Confiesa que tiene un problema insólito.";
  escrito[2] = "Describe la primera vez que vomitó un conejo de forma inesperada y decide entonces: (tratar de ocultarlo/contárselo a Sara).";
  escrito [3]= "Sara, asustada y convencida de que el hombre está loco, llama a la policía.";
}
function setup() {
  createCanvas (640, 480);
  textSize(20);
  cargarTexto(); 
 for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].resize(640, 480); 
  }
}


function draw() {
  background(200);
  fill(250);
 if (estado >= 0 && estado < imagenes.length) { // Verificar que el estado sea válido
    let img = imagenes[estado];
    let x = width / 2; // Centro del canvas en x
    let y = height / 2; // Centro del canvas en y

    cargarImagenes(img, x, y, img.width, img.height, CENTER); // Usar CENTER
    text(escrito[estado], 120,240,400);
  }
}

function mousePressed() {
  estado++; // Cambiar de estado al presionar el mouse
  if (estado >= imagenes.length) {
    estado = 0; // Reiniciar el estado si supera el límite
  }
}

function cargarImagenes(imag, x, y, ancho, alto, alinea) {
  imageMode(alinea); // Alinear la imagen
  image(imag, x, y, ancho, alto); // Dibujar la imagen en el canvas
}
