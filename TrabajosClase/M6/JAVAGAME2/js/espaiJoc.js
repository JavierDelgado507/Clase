export function EspaiDeJoc(ancho, alto, rutaFondo) {
  this.ancho = ancho;
  this.alto = alto;

  // Cargar la imagen de fondo y definir el patrón de relleno
  this.fondo = new Image();
  this.fondo.src = rutaFondo;

  // Definir el método para pintar el fondo en el canvas
  this.pintarFondo = function(ctx) {
    var patron = ctx.createPattern(this.fondo, "repeat");
    ctx.fillStyle = patron;
    ctx.fillRect(0, 0, this.ancho, this.alto);
  }
}
