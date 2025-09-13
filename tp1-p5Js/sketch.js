//https://youtu.be/VYJT5kctW74
let ref; 
let cantidad = 5; 
let franjas = 8; 
let onda = true; 

let c1, c2, c3, c4;


function preload() {
  ref = loadImage("diseno.png");  
}


function setup() {
  createCanvas(800, 400);  
  rectMode(CENTER); 
  noStroke(); 

  // Defino colores iniciales
  c1 = color(0);
  c2 = color(255);
  c3 = color(255, 0, 255);
  c4 = color(0, 255, 0);
}

function draw() {
  background(255);

 
  image(ref, 0, 0, 400, 400);

  let tam = 400.0 / cantidad; 

  for (let i = 0; i < cantidad; i++) {
    for (let j = 0; j < cantidad; j++) {
      let x = 400 + j * tam;
      let y = i * tam;
      let offset = 0;

      if (onda) {
        offset = calcularOffset(i);

        if (j % 2 === 0) {
          x += offset;
        } else {
          x -= offset;
        }
      }

      let cx = x + tam / 2;
      let cy = y + tam / 2;

      dibujarCuadrados(cx, cy, tam);
    }
  }
}


function calcularOffset(fila) {
  return sin(radians(fila * 30 + frameCount * 2)) * 6;
}


function dibujarCuadrados(cx, cy, tam) {
  push();
  translate(cx, cy);

  let paso = tam / franjas;

  for (let i = franjas; i > 0; i--) {
    let s = i * paso;

    if (i % 4 === 0) fill(c1);
    else if (i % 4 === 1) fill(c2);
    else if (i % 4 === 2) fill(c3);
    else fill(c4);

    rect(0, 0, s, s);
  }

  pop();
}


function keyPressed() {
  if (keyCode === UP_ARROW && cantidad < 10) {
    cantidad++;
  } else if (keyCode === DOWN_ARROW && cantidad > 1) {
    cantidad--;
  } else if (key === 'w' || key === 'W') {
    onda = !onda;
  } else if (key === 'r' || key === 'R') {
    resetear();
  } else if (key === 'p' || key === 'P') {
    cambiarColores();
  }
}


function mousePressed() {
  franjas = int(map(mouseX, 400, width, 4, 20));
}


function resetear() {
  cantidad = 5;
  franjas = 8;
  onda = true;

  c1 = color(0);
  c2 = color(255);
  c3 = color(255, 0, 255);
  c4 = color(0, 255, 0);
}

 
function cambiarColores() {
  c1 = color(random(255), random(255), random(255));
  c2 = color(random(255), random(255), random(255));
  c3 = color(random(255), random(255), random(255));
  c4 = color(random(255), random(255), random(255));
}
