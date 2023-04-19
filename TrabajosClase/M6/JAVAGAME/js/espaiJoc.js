function EspaiDeJoc(width, height, imageUrl) {
  this.canvas = document.getElementById('miCanvas');
  this.ctx = this.canvas.getContext('2d');
  this.canvas.width = width;
  this.canvas.height = height;
  
  // Cargar la imagen con un objeto Image
  this.imagen = new Image();
  this.imagen.src = imageUrl;
  var that = this;
  this.imagen.onload = function() {
    // Establecer la imagen como el patrón de relleno del contexto de dibujo
    that.pat = that.ctx.createPattern(that.imagen, 'repeat');
    that.dibujar();
  };
};

EspaiDeJoc.prototype.dibujar = function() {
  // Limpiar el canvas
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  
  // Dibujar el fondo
  this.ctx.fillStyle = this.pat;
  this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
};

EspaiDeJoc.prototype.getHeight = function() {
  return this.canvas.height;
};