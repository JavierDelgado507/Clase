function Joc() {
    this.espaiDeJoc = new EspaiDeJoc(800, 600, "url('./../JAVAGAME/assets/hierba.jpg')");
    this.puntuacio = this.puntuacio
    this.protagonista = new Protagonista(0, 0, 45, 45, "url('./../JAVAGAME/assets/betty.png')", 0, 0, 1);
    this.enemics = [];
    this.recompenses = [];
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
  };
  
  Joc.prototype.detectarColisiones = function() {
    // detectar colisiones entre el protagonista y los enemigos/recompensas
  };
  
  Joc.prototype.dibujar = function() {
    const ctx = this.espaiDeJoc.ctx;
    ctx.fillStyle = ctx.createPattern(this.espaiDeJoc.imagen, 'repeat');
    ctx.fillRect(0, 0, this.espaiDeJoc.width, this.espaiDeJoc.height);
    ctx.drawImage(this.puntuacio);
  };
  
  var joc = new Joc();

function buclePrincipal() {
  joc.actualizar();
  joc.detectarColisiones();
  joc.dibujar();

  // solicitar la siguiente animación del bucle principal
requestAnimationFrame(buclePrincipal);
}


