class Menu {
  constructor() {
    this.botonIniciar = new Boton(
      width / 2,
      height / 2 - 40,
      200,
      60,
      "INICIAR JUEGO",
      () => {
        estado = "juego";
      }
    );

    this.botonInstrucciones = new Boton(
      width / 2,
      height / 2 + 30,
      200,
      60,
      "INSTRUCCIONES",
      () => {
        estado = "instrucciones";
      }
    );

    this.botonCreditos = new Boton(
      width / 2,
      height / 2 + 100,
      200,
      60,
      "CRÉDITOS",
      () => {
        estado = "creditos";
      }
    );
  }

  dibujar() {
    background(20, 20, 50);

    fill(255);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("Gravity Falls - Mini Juego", width / 2, 120);

    this.botonIniciar.dibujar();
    this.botonInstrucciones.dibujar();
    this.botonCreditos.dibujar();
  }

  click() {
    this.botonIniciar.click();
    this.botonInstrucciones.click();
    this.botonCreditos.click();
  }
}
