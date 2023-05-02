import { EspaiDeJoc } from '../assets/hierba.jpg';

function Joc() {
  this.espaiDeJoc = new EspaiDeJoc(800, 600, "./../JAVAGAME/assets/hierba.jpg");
  this.puntuacio = this.puntuacio;
  const imgProtagonista = new Image();
  imgProtagonista.src = "./../JAVAGAME/assets/george.png";
  this.protagonista = new Protagonista(imgProtagonista, 0, 0, 45, 45, 0, 0, 45 , 45,this.espaiDeJoc);
  this.enemics = [];
  this.recompenses = [];
  this.teclasPulsadas = {};

  this.crearEnemic = function() {
    // crear enemic y añadirlo al array de enemics
  };
  
  this.crearRecompensa = function() {
    // crear recompensa y añadirla al array de recompenses
  };

  // métodos para actualizar el estado del juego
  this.actualizar = function() {
    // actualizar la posición del protagonista y de los enemigos
    this.protagonista.moverArriba();
    this.protagonista.moverAbajo(this.espaiDeJoc.canvas.height);
    this.protagonista.moverIzquierda();
    this.protagonista.moverDerecha();
  };
  
  this.detectarColisiones = function() {
    // detectar colisiones entre el protagonista y los enemigos/recompensas
  };
  
  this.dibujar = function() {
    // Llama al método dibujar de EspaiDeJoc para dibujar el fondo
    this.espaiDeJoc.dibujar();
    
    // Dibujar el protagonista
    this.protagonista.dibujar(this.espaiDeJoc.ctx);
  };

  var that = this; // Guardamos la referencia del objeto actual

  function loop() {
    that.actualizar();
    that.detectarColisiones();
    that.dibujar();

    requestAnimationFrame(loop);
  }

  loop();
}

var joc = new Joc();
