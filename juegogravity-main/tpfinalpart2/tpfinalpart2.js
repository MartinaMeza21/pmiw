//https://youtu.be/CfJCPxGBES8 MEZA MARTINA ROCIO ALDERETE
let estado = "menu";
let sistema;
let fondo, imgJugador, imgCaramelo, imgPodrido;
let menu;
let sonidoGanar, sonidoPerder;

function preload() {
  fondo = loadImage("assets/fondo.jpeg");
  imgJugador = loadImage("assets/jugador.png");
  imgCaramelo = loadImage("assets/caramelo.png");
  imgPodrido = loadImage("assets/podrido.png");

  sonidoGanar = loadSound("assets/sonido.ganar.mp3");
  sonidoPerder = loadSound("assets/sonido.perder.mp3");
}


function setup() {
  createCanvas(640, 480);
  sistema = new Sistema(15, 8);
  menu = new Menu();
}

function draw() {

  if (estado === "menu") {
    menu.dibujar();
    return;
  }

  if (estado === "instrucciones") {
    dibujarInstrucciones();
    return;
  }

  if (estado === "creditos") {
    dibujarCreditos();
    return;
  }

  if (estado === "ganaste" || estado === "perdiste") {
    sistema.draw();
    return;
  }

  if (estado === "juego") {
    imageMode(CORNER);
    image(fondo, 0, 0, width, height);

    sistema.update();
    sistema.draw();

    if (sistema.estado === "ganaste") estado = "ganaste";
    if (sistema.estado === "perdiste") estado = "perdiste";
  }
}


function dibujarInstrucciones() {
  background(30, 30, 90);

  fill(255);
  textAlign(CENTER, TOP);

  textSize(40);
  text("INSTRUCCIONES", width / 2, 60);

  textSize(22);
  textLeading(28); 

  text(
    "- Movete con las FLECHAS o con el MOUSE.\n" +
    "- JUNTA 10 caramelos para GANAR.\n" +
    "- Si tocás 3 caramelos podridos, PERDÉS.\n" +
    "- Presioná R para reiniciar en cualquier momento.",
    width / 2,
    150
  );

  fill(255, 200);
  rectMode(CENTER);
  rect(width / 2, height - 80, 200, 60, 15);

  fill(0);
  textSize(26);
  textAlign(CENTER, CENTER);
  text("VOLVER", width / 2, height - 80);
}

function dibujarCreditos() {
  background(10, 10, 40);

  fill(255);
  textAlign(CENTER, TOP);

  textSize(40);
  text("CRÉDITOS", width / 2, 60);

  textSize(22);
  textLeading(30);

  text(
    "Juego realizado por:\n" +
    "• Martina Ailen Meza\n" +
    "• Rocío Alderete Ramos\n\n" +
    "PMIW · Carrera Multimedia",
    width / 2,
    150
  );

  fill(255, 200);
  rectMode(CENTER);
  rect(width / 2, height - 80, 200, 60, 15);

  fill(0);
  textSize(26);
  textAlign(CENTER, CENTER);
  text("VOLVER", width / 2, height - 80);
}


function mousePressed() {

  if (estado === "menu") {
    menu.click();
    return;
  }

  if (estado === "instrucciones") {
    if (
      mouseX > width / 2 - 100 &&
      mouseX < width / 2 + 100 &&
      mouseY > height - 110 &&
      mouseY < height - 50
    ) {
      estado = "menu";
    }
    return;
  }

  if (estado === "creditos") {
    if (
      mouseX > width / 2 - 100 &&
      mouseX < width / 2 + 100 &&
      mouseY > height - 110 &&
      mouseY < height - 50
    ) {
      estado = "menu";
    }
    return;
  }

  if (estado === "juego") {
    sistema.mousePressed();
  }
}


function keyPressed() {
  if (key === "r" || key === "R") {
    if (estado === "juego" || estado === "ganaste" || estado === "perdiste") {
      sistema = new Sistema(15, 8);
      estado = "menu";
    }
  }
}
