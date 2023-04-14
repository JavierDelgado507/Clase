import { Protagonista } from './protagonista.js';

function Joc() {
  this.espaiDeJoc = new EspaiDeJoc(800, 600, "./../JAVAGAME/assets/hierba.jpg");
    this.puntuacio = this.puntuacio
    const imgProtagonista = new Image();
    imgProtagonista.src = "./../JAVAGAME/assets/betty.png";
    this.protagonista = new Protagonista(
      imgProtagonista, // imagen
      0, // x
      0, // y
      45, // ancho
      45, // alto
      0, // posicionX
      0, // posicionY
      45, // anchoPantalla
      45 // altoPantalla
    );
    console.log(this.protagonista);
    this.enemics = [];
    this.recompenses = [];
    this.teclasPulsadas = {};
  }
  
  
  Joc.prototype.crearEnemic = function() {
    // crear enemic y añadirlo al array de enemics
  };
  
  Joc.prototype.crearRecompensa = function() {
    // crear recompensa y añadirla al array de recompenses
  };
  
  // métodos para actualizar el estado del juego
  Joc.prototype.actualizar = function() {
    // actualizar la posición del protagonista y de los enemigos
    this.protagonista.moverArriba(this.teclasPulsadas);
    this.protagonista.moverAbajo(this.teclasPulsadas);
    this.protagonista.moverIzquierda(this.teclasPulsadas);
    this.protagonista.moverDerecha(this.teclasPulsadas);

    // en el evento keydown de la ventana
window.addEventListener('keydown', (evento) => {
  this.teclasPulsadas[evento.key] = true;
});

// en el evento keyup de la ventana
window.addEventListener('keyup', (evento) => {
  this.teclasPulsadas[evento.key] = false;
});
    
  };
  
  Joc.prototype.detectarColisiones = function() {
    // detectar colisiones entre el protagonista y los enemigos/recompensas
  };
  
Joc.prototype.dibujar = function() {
  const ctx = this.espaiDeJoc.ctx;

  // Limpiar el canvas
  ctx.clearRect(0, 0, this.espaiDeJoc.width, this.espaiDeJoc.height);

  // Dibujar el fondo
  ctx.fillStyle = ctx.createPattern(this.espaiDeJoc.imagen, 'repeat');
  ctx.fillRect(0, 0, this.espaiDeJoc.width, this.espaiDeJoc.height);

  // Dibujar el protagonista
  this.protagonista.dibujar(ctx);
};

var joc = new Joc();

function bucle() {
  joc.actualizar();
  joc.detectarColisiones();
  joc.dibujar();

  requestAnimationFrame(bucle);
}

requestAnimationFrame(bucle);
