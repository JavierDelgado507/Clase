// Declaración Funcional de Objeto Juego
function Juego() {
    // Atributos
    this.espacioDeJuego = new EspacioDeJuego();
    this.puntuacion = new Puntuacion();
    this.protagonista = new Protagonista();
    this.enemigos = [];
    this.recompensas = [];
  
    // Métodos
    this.crearEnemigo = function() {
      // Lógica para crear un enemigo y añadirlo al array de enemigos
    }
  
    this.crearRecompensa = function() {
      // Lógica para crear una recompensa y añadirla al array de recompensas
    }
  
    this.detectarColisiones = function() {
      // Lógica para detectar colisiones entre el protagonista, los enemigos y las recompensas
    }
  
    this.actualizarEstado = function() {
      // Lógica para actualizar el estado del juego (posiciones, vidas, puntuación, etc.)
    }
  
    this.dibujar = function() {
      // Lógica para dibujar el juego en el canvas
    }
  
    this.iniciar = function() {
      // Lógica para inicializar el juego (crear el canvas, añadir los listeners de teclado, etc.)
    }
  
    this.actualizar = function() {
      // Lógica para actualizar el juego (detectar colisiones, actualizar estado, dibujar, etc.)
    }
  
    // Constructor
    this.iniciar();
  }
  
