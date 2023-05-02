var Enemigo = function (
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
  this.indiceEnemigo = 0;

  // Asignar las coordenadas aleatorias como posición inicial
};

Enemigo.prototype = Object.create(Element.prototype);
Enemigo.prototype.constructor = Enemigo;

Enemigo.prototype.buscarProtagonista = function (protagonista) {
  var ex = this.getPosicionX();
  var ey = this.getPosicionY();
  var gx = protagonista.getPosicionX();
  var gy = protagonista.getPosicionY();

  if (ex < gx) {
    ex += 0.5;
  } else if (ex > gx) {
    ex -= 0.5;
  }

  if (ey < gy) {
    ey += 0.5;
  } else if (ey > gy) {
    ey -= 0.5;
  }

  this.setPosicionX(ex);
  this.setPosicionY(ey);
  this.actualizarIndices();
};

Enemigo.prototype.detectarColisionProtagonista = function (protagonista) {
  if (
    this.getPosicionX() <
      protagonista.getPosicionX() + protagonista.getAncho() &&
    this.getPosicionX() + this.getAncho() > protagonista.getPosicionX() &&
    this.getPosicionY() <
      protagonista.getPosicionY() + protagonista.getAlto() &&
    this.getAlto() + this.getPosicionY() > protagonista.getPosicionY()
  ) {
    // Colisión detectada, restar vida del protagonista

    // Posicionar el enemigo y el protagonista
    return true;
  }
  return false;
};

Enemigo.prototype.dibujar = function (context) {
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

Enemigo.prototype.actualizarIndices = function () {
  this.indiceGeneral++;

  if (this.indiceGeneral % 30 == 0) {
    this.indiceEnemigo++;

    if (this.indiceEnemigo >= 4) {
      this.indiceEnemigo = 0;
    }
  }

  var nuevaPosX = this.indiceEnemigo * this.getAncho();

  this.setX(nuevaPosX);
};

Enemigo.prototype.randomPosition = function () {
  this.fax = Math.floor(
    Math.random() * (espaiDeJoc.canvas.width - this.getAncho())
  );
  this.fay = Math.floor(
    Math.random() * (espaiDeJoc.canvas.height - this.getAlto())
  );
  this.setPosicionX(this.fax);
  this.setPosicionY(this.fay);
  this.setX(this.fax);
};

// Clase Enemigo1 (subclase de Enemigo)
var Enemigo1 = function (
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
  Enemigo.call(
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

Enemigo1.prototype = Object.create(Enemigo.prototype);
Enemigo1.prototype.constructor = Enemigo1;

Enemigo1.prototype.atacar = function (protagonista) {
  if (this.detectarColisionProtagonista(protagonista)) {
    this.randomPosition();
    protagonista.poscionarProtagonista();
    protagonista.actualizarVida(-1);
  }
};

// Clase Enemigo2 (subclase de Enemigo)
var Enemigo2 = function (
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
  Enemigo.call(
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

Enemigo2.prototype = Object.create(Enemigo.prototype);
Enemigo2.prototype.constructor = Enemigo2;

Enemigo2.prototype.atacar = function (protagonista) {
  if (this.detectarColisionProtagonista(protagonista)) {
    puntuacio.restarPuntos();
    this.randomPosition();
    protagonista.poscionarProtagonista();

    // protagonista.actualizarVida(1);
  }
};

// Clase Enemigo3 (subclase de Enemigo)
var Enemigo3 = function (
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
  Enemigo.call(
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

Enemigo3.prototype = Object.create(Enemigo.prototype);
Enemigo3.prototype.constructor = Enemigo3;

Enemigo3.prototype.atacar = function (protagonista) {
  if (this.detectarColisionProtagonista(protagonista)) {
    puntuacio.restarPuntos();
    this.randomPosition();
    // protagonista.poscionarProtagonista();
    var posX = Math.floor(
      Math.random() * (espaiDeJoc.canvas.width - this.getAncho())
    );
    var posY = Math.floor(
      Math.random() * (espaiDeJoc.canvas.height - this.getAlto())
    );
    protagonista.setPosicionY(posY);
    protagonista.setPosicionX(posX);
    // protagonista.actualizarVida(1);
  }
};
