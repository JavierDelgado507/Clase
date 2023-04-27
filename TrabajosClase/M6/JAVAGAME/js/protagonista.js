var Protagonista = function(imagen, x, y, ancho, alto, posicionX, posicionY, anchoPantalla, altoPantalla, espaiDeJoc) {
  Element.call(this, imagen, x, y, ancho, alto, posicionX, posicionY, anchoPantalla, altoPantalla);
  this.teclasPulsadas = {};
  var self = this;
  var indice = 0;

  this.moverArriba = function() {
    if (self.teclasPulsadas['w']) {
      if(self.getPosicionY() - 5 > 0) {
        self.posicionY -= 10;
        self.spriteY = self.alto * 2; // Ajustar a la fila correspondiente en la imagen
        indice++;
        console.log("Indice: " + indice);
      }
    }
  };

  this.moverAbajo = function() {
    if (self.teclasPulsadas['s']) {
      const canvasAltura = self.espaiDeJoc.getHeight();
      if (self.getPosicionY() + self.getAltoPantalla() + 5 < canvasAltura) {
        self.posicionY += 10;
        self.spriteY = 0; // Ajustar a la fila correspondiente en la imagen
        indice++;
        console.log("Indice: " + indice);
      }
    }
  };

  this.moverIzquierda = function() {
    if (self.teclasPulsadas['a']) {
      if(self.getPosicionX() - 5 > 0){
        self.posicionX -= 10;
        self.spriteY = self.alto; // Ajustar a la fila correspondiente en la imagen
        indice++;
        console.log("Indice: " + indice);
      }
    }
  };

  this.moverDerecha = function() {
    if (self.teclasPulsadas['d'] ) {
      const canvasAncho = self.espaiDeJoc.getWidth();
      if (self.getPosicionX() + 5 + self.getAnchoPantalla() < canvasAncho) {
        self.posicionX += 10;
        self.spriteY = self.alto * 3; // Ajustar a la fila correspondiente en la imagen
        indice++;
        console.log("Indice: " + indice);
      }
    }
  };

  this.draw = function(ctx) {
    var img = this.imagen;
    ctx.drawImage(
      img,
      self.spriteX,
      self.spriteY,
      self.ancho,
      self.alto,
      self.posicionX,
      self.posicionY,
      self.anchoPantalla,
      self.altoPantalla
    );
  };
}

Protagonista.prototype = Object.create(Element.prototype);
Protagonista.prototype.constructor = Protagonista;
