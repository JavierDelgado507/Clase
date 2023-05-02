var Recompensa = function (
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
  Element.call(
    this,
    imagen,
    x,
    y,
    ancho,
    alto,
    posicionX,
    posicionY,
    anchoPantalla,
    altoPantalla
  );
  this.indiceGeneral = 0;
  this.indiceRecompensa = 0;
};

Recompensa.prototype = Object.create(Element.prototype);
Recompensa.prototype.constructor = Recompensa;

Recompensa.prototype.dibujar = function (context) {
  context.clearRect(0, 0, this.getAnchoPantalla(), this.getAltoPantalla());
  context.drawImage(
    this.getImagen(),
    this.getX(),
    this.getY(),
    this.getAncho(),
    this.getAlto(),
    this.getPosicionX(),
    this.getPosicionY(),
    this.getAnchoPantalla(),
    this.getAltoPantalla()
  );
};

Recompensa.prototype.actualizarIndices = function () {
  this.indiceGeneral++;

  if (this.indiceGeneral % 30 == 0) {
    this.indiceRecompensa++;

    if (this.indiceRecompensa >= 4) {
      this.indiceRecompensa = 0;
    }
  }

  var nuevaPosX = this.indiceRecompensa * this.getAncho();

  this.setX(nuevaPosX);
};

Recompensa.prototype.randomPosition = function () {
  this.fax = Math.floor(
    Math.random() * (espaiDeJoc.canvas.width - this.getAncho())
  );
  this.fay = Math.floor(
    Math.random() * (espaiDeJoc.canvas.height - this.getAlto())
  );
  this.setPosicionX(this.fax);
  this.setPosicionY(this.fay);
};

Recompensa.prototype.detectarColision = function (protagonista) {
  var gx = protagonista.getPosicionX();
  var gy = protagonista.getPosicionY();
  var anchoGeorge = protagonista.getAncho();
  var altoGeorge = protagonista.getAlto();
  var mdx = this.getPosicionX();
  var mdy = this.getPosicionY();
  var anchoMoneda = this.getAncho();
  var altoMoneda = this.getAlto();

  if (
    gx < mdx + anchoMoneda &&
    gx + anchoGeorge > mdx &&
    gy < mdy + altoMoneda &&
    gy + altoGeorge > mdy
  ) {
    return true;
  }
  return false;
};

var Recompensar = function (
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
  Recompensa.call(
    this,
    imagen,
    x,
    y,
    ancho,
    alto,
    posicionX,
    posicionY,
    anchoPantalla,
    altoPantalla
  );
};

// Clase para la recompensa que otorga puntos al jugador
var RecompensaPuntos = function (
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
  Recompensa.call(
    this,
    imagen,
    x,
    y,
    ancho,
    alto,
    posicionX,
    posicionY,
    anchoPantalla,
    altoPantalla
  );
};

RecompensaPuntos.prototype = Object.create(Recompensa.prototype);
RecompensaPuntos.prototype.constructor = RecompensaPuntos;

RecompensaPuntos.prototype.darPuntos = function () {
  if (this.detectarColision(joc.protagonista)) {
    puntuacio.sumarPuntos();
    this.randomPosition();
  }
};

// Clase para la recompensa que otorga vida al jugador
var RecompensaVida = function (
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
  Recompensa.call(
    this,
    imagen,
    x,
    y,
    ancho,
    alto,
    posicionX,
    posicionY,
    anchoPantalla,
    altoPantalla
  );
};

RecompensaVida.prototype = Object.create(Recompensa.prototype);
RecompensaVida.prototype.constructor = RecompensaVida;

RecompensaVida.prototype.darVida = function (protagonista) {
  if (this.detectarColision(protagonista)) {
    protagonista.actualizarVida(+1);
    this.randomPosition();
  }
};

// Clase para la recompensa que otorga velocidad al protagonista
var RecompensaVelocidad = function (
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
  Recompensa.call(
    this,
    imagen,
    x,
    y,
    ancho,
    alto,
    posicionX,
    posicionY,
    anchoPantalla,
    altoPantalla
  );
};

RecompensaVelocidad.prototype = Object.create(Recompensa.prototype);
RecompensaVelocidad.prototype.constructor = RecompensaVelocidad;

RecompensaVelocidad.prototype.darVelocidad = function (protagonista) {
  if (this.detectarColision(protagonista)) {
    protagonista.aumentarVelocidad(2);
    setTimeout(function () {
      protagonista.reiniciarVelocidad();
    }, 5000);
    this.randomPosition();
  }
};
