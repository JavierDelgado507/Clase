// Definición del objeto Element
function Element(imagen, x, y, ancho, alto, posicionX, posicionY, anchoPantalla, altoPantalla) {
  // Atributos privados
  var _imagen = imagen;
  var _x = x;
  var _y = y;
  var _ancho = ancho;
  var _alto = alto;
  var _posicionX = posicionX;
  var _posicionY = posicionY;
  var _anchoPantalla = anchoPantalla;
  var _altoPantalla = altoPantalla;
  
  this.dibujar = function(ctx) {
    ctx.drawImage(
      _imagen,
      _posicionX,
      _posicionY,
      _ancho,
      _alto,
      _x,
      _y,
      _anchoPantalla,
      _altoPantalla
    );
  };

  // Métodos públicos para acceder y actualizar los atributos privados
  this.getImagen = function() {
    return _imagen;
  }
  this.setImagen = function(imagen) {
    _imagen = imagen;
  }

  this.getX = function() {
    return _x;
  }
  this.setX = function(x) {
    _x = x;
  }

  this.getY = function() {
    return _y;
  }
  this.setY = function(y) {
    _y = y;
  }

  this.getAncho = function() {
    return _ancho;
  }
  this.setAncho = function(ancho) {
    _ancho = ancho;
  }

  this.getAlto = function() {
    return _alto;
  }
  this.setAlto = function(alto) {
    _alto = alto;
  }

  this.getPosicionX = function() {
    return _posicionX;
  }
  this.setPosicionX = function(posicionX) {
    _posicionX = posicionX;
  }

  this.getPosicionY = function() {
    return _posicionY;
  }
  this.setPosicionY = function(posicionY) {
    _posicionY = posicionY;
  }

  this.getAnchoPantalla = function() {
    return _anchoPantalla;
  }
  this.setAnchoPantalla = function(anchoPantalla) {
    _anchoPantalla = anchoPantalla;
  }

  this.getAltoPantalla = function() {
    return _altoPantalla;
  }
  this.setAltoPantalla = function(altoPantalla) {
    _altoPantalla = altoPantalla;
  }
}
