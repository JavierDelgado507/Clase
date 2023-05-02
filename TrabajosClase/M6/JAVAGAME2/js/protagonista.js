// Definición del objeto Protagonista que hereda del objeto Element
function Protagonista(x, y, width, height) {
  Element.call(this, x, y, width, height);

  this.teclasPulsadas = {};
  this.espaiDeJoc = espaiDeJoc; // Asignar la instancia de EspaiDeJoc a una propiedad en Protagonista

  document.addEventListener('keydown', (event) => {
    this.teclasPulsadas[event.key] = true;
  });

  document.addEventListener('keyup', (event) => {
    this.teclasPulsadas[event.key] = false;
  });
}

// Herencia del objeto Element al objeto Protagonista
Protagonista.prototype = Object.create(Element.prototype);
Protagonista.prototype.constructor = Protagonista;

// Métodos para moverse con las teclas de flecha
Protagonista.prototype.moverArriba = function () {
  if (this.teclasPulsadas['w']) {
    if (this.getPosicionY() - 5 > 0) {
      this.posicionY -= 10;
      this.x = 90;
    }
  }
};

Protagonista.prototype.moverAbajo = function () {
  if (this.teclasPulsadas['s']) {
    const canvasAltura = this.espaiDeJoc.getHeight();
    if (this.getPosicionY() + this.getAltoPantalla() + 5 < canvasAltura) {
      this.posicionY += 10;
      this.x = 0;
    }
  }
};

Protagonista.prototype.moverIzquierda = function () {
  if (this.teclasPulsadas['a']) {
    if (this.getPosicionX() - 5 > 0) {
      this.posicionX -= 10;
      this.x = 45;
    }
  }
};

Protagonista.prototype.moverDerecha = function () {
  if (this.teclasPulsadas['d']) {
    const canvasAncho = this.espaiDeJoc.getWidth();
    if (this.getPosicionX() + 5 + this.getAnchoPantalla() < canvasAncho) {
      this.posicionX += 10;
      this.x = 135;
    }
  }
};

// Método para detectar colisiones con los enemigos y los objetos
Protagonista.prototype.detectarColision = function (objeto) {
  if (
    this.x < objeto.x + objeto.width &&
    this.x + this.width > objeto.x &&
    this.y < objeto.y + objeto.height &&
    this.y + this.height > objeto.y
  ) {
    return true;
  } else {
    return false;
  }
};

// Método para dibujar al protagonista en el canvas
// Método para dibujar al protagonista en el canvas
Protagonista.prototype.dibujar = function (ctx) {
  const george = new Image();
  george.src = '../assets/george.png';
  const posicionGeorge = 0;
  const indiceGeorge = 0;
  const anchoGeorge = 45;
  const altoGeorge = 55;
  const gx = this.getPosicionX();
  const gy = this.getPosicionY();

  ctx.drawImage(
    george, // Imagen George
    posicionGeorge, // Posicion X en la imagen
    indiceGeorge * altoGeorge, // Posicion Y en la imagen
    anchoGeorge, // Ancho de la imagen
    altoGeorge, // Alto de la imagen
    gx, // Posicion X en el canvas
    gy, // Posicion Y en el canvas
    this.getAnchoPantalla(), // Ancho en el canvas
    this.getAltoPantalla() // Alto en el canvas
  );
};
