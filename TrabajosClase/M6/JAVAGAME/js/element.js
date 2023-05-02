var Element = function (
  imagen,
  x,
  y,
  ancho,
  alto,
  posicionX,
  posicionY,
  anchoPantalla,
  altoPantalla
) {
  // atributos privados
  var _imagen = imagen;
  var _x = x;
  var _y = y;
  var _ancho = ancho;
  var _alto = alto;
  var _posicionX = posicionX;
  var _posicionY = posicionY;
  var _anchoPantalla = anchoPantalla;
  var _altoPantalla = altoPantalla;

  this.dibujar = function (contexto) {
    contexto.drawImage(
      _imagen,
      _x,
      _y,
      _ancho,
      _alto,
      _posicionX,
      _posicionY,
      _anchoPantalla,
      _altoPantalla
    );
  };
  // métodos públicos para acceder y actualizar atributos privados
  this.getImagen = function () {
    return _imagen;
  };

  this.setX = function (nuevoX) {
    _x = nuevoX;
  };

  this.getX = function () {
    return _x;
  };

  this.setY = function (nuevoY) {
    _y = nuevoY;
  };

  this.getY = function () {
    return _y;
  };

  this.setAncho = function (nuevoAncho) {
    _ancho = nuevoAncho;
  };

  this.getAncho = function () {
    return _ancho;
  };

  this.setAlto = function (nuevoAlto) {
    _alto = nuevoAlto;
  };

  this.getAlto = function () {
    return _alto;
  };

  this.setPosicionX = function (nuevaPosicionX) {
    _posicionX = nuevaPosicionX;
  };

  this.getPosicionX = function () {
    return _posicionX;
  };

  this.setPosicionY = function (nuevaPosicionY) {
    _posicionY = nuevaPosicionY;
  };

  this.getPosicionY = function () {
    return _posicionY;
  };

  this.setAnchoPantalla = function (nuevoAnchoPantalla) {
    _anchoPantalla = nuevoAnchoPantalla;
  };

  this.getAnchoPantalla = function () {
    return _anchoPantalla;
  };

  this.setAltoPantalla = function (nuevoAltoPantalla) {
    _altoPantalla = nuevoAltoPantalla;
  };

  this.getAltoPantalla = function () {
    return _altoPantalla;
  };
};
