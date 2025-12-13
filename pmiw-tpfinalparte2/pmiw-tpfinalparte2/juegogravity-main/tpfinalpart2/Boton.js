class Boton {
  constructor(x, y, w, h, texto, accion) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.texto = texto;
    this.accion = accion;
  }

  dibujar() {
    rectMode(CENTER);
    fill(255, 150);
    rect(this.x, this.y, this.w, this.h, 10);

    fill(0);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(this.texto, this.x, this.y);
  }

  click() {
    if (
      mouseX > this.x - this.w / 2 &&
      mouseX < this.x + this.w / 2 &&
      mouseY > this.y - this.h / 2 &&
      mouseY < this.y + this.h / 2
    ) {
      this.accion();
    }
  }
}
