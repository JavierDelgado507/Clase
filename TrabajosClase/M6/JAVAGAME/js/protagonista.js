var Protagonista = function (
  imagen,
  x,
  y,
  ancho,
  alto,
  posicionX,
  posicionY,
  anchoPantalla,
  altoPantalla,
  vida
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

  // Inicializar teclas pulsadas como un objeto vacío
  this.teclasPulsadas = {};

  this.velocidad = 1;
  this.vida = vida;
  this.indiceGeneral = 0;
  this.indiceGeorge = 0;
  this.vidaInicial = this.getVida();
  this.setVida(this.vidaInicial);
  // Agregar un event listener para detectar cuando se presiona una tecla
  document.addEventListener("keydown", (event) => {
    this.teclasPulsadas[event.key] = true;
  });

  // Agregar un event listener para detectar cuando se suelta una tecla
  document.addEventListener("keyup", (event) => {
    this.teclasPulsadas[event.key] = false;
  });
};

Protagonista.prototype = Object.create(Element.prototype);
Protagonista.prototype.constructor = Protagonista;

Protagonista.prototype.getVida = function () {
  return this.vida;
};

Protagonista.prototype.setVida = function (nuevaVida) {
  this.vida = nuevaVida;
};

Protagonista.prototype.actualizar = function () {
  if (this.teclasPulsadas["w"]) {
    if (this.getPosicionY() > 0) {
      this.setPosicionY(this.getPosicionY() - this.velocidad);
      this.setX(90);
      console.log("arriba");
    }
  }
  if (this.teclasPulsadas["s"]) {
    if (
      this.getPosicionY() + this.getAltoPantalla() + 5 <
      espaiDeJoc.canvas.height
    ) {
      this.setPosicionY(this.getPosicionY() + this.velocidad);
      this.setX(0);
      console.log("abajo");
    }
  }
  if (this.teclasPulsadas["a"]) {
    if (this.getPosicionX() - 5 > 0) {
      this.setPosicionX(this.getPosicionX() - this.velocidad);
      this.setX(45);
      console.log("izquierda");
    }
  }
  if (this.teclasPulsadas["d"]) {
    if (
      this.getPosicionX() + 5 + this.getAltoPantalla() <
      espaiDeJoc.canvas.width
    ) {
      this.setPosicionX(this.getPosicionX() + this.velocidad);
      this.setX(135);
      console.log("derecha");
    }
  }
  this.actualizarIndices();
};

Protagonista.prototype.dibujar = function (context) {
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

Protagonista.prototype.actualizarIndices = function () {
  this.indiceGeneral++;

  if (this.indiceGeneral % 20 == 0) {
    this.indiceGeorge++;

    if (this.indiceGeorge >= 4) {
      this.indiceGeorge = 0;
    }
  }

  var nuevaPosY = this.indiceGeorge * this.getAlto();

  this.setY(nuevaPosY);
};

Protagonista.prototype.actualizarVida = function (cantidad) {
  this.setVida(this.getVida() + cantidad);

  if (this.getVida() == 0) {
    // Si la vida es menor o igual a cero, mostrar mensaje de game over
    alert("Game over!");
    // Detener el juego
    pausado = true;
    cancelAnimationFrame(loop);
  }
};

Protagonista.prototype.dibujarVida = function (context) {
  var vidaSpan = document.getElementById("vida");
  vidaSpan.innerText = this.getVida();
};

Protagonista.prototype.poscionarProtagonista = function () {
  this.setPosicionX(espaiDeJoc.canvas.width / 2 - this.getAncho() / 2); //Coordenada X aleatoria
  this.setPosicionY(espaiDeJoc.canvas.height / 2 - this.getAlto() / 2); //Cpordenada y aleatoria
};

Protagonista.prototype.reiniciarVida = function () {
  this.setVida(this.vidaInicial);
};

Protagonista.prototype.aumentarVelocidad = function (factor) {
  this.velocidad *= factor;
};

Protagonista.prototype.reiniciarVelocidad = function () {
  this.velocidad = 1;
};
