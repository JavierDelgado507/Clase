var crearJoc = function() {
  var joc = {};
  joc.espaiDeJoc = document.getElementById("miCanvas");
  joc.puntuacio = 0;
  
  return joc;
};

var crearEspaiDeJoc = function() {
  var espaiDeJoc = {};
  espaiDeJoc.canvas = document.getElementById("miCanvas");
  espaiDeJoc.canvas.width = 800;
  espaiDeJoc.canvas.height = 600;
  espaiDeJoc.context = espaiDeJoc.canvas.getContext("2d");
  espaiDeJoc.imatgeFons = new Image();
  espaiDeJoc.imatgeFons.src = "./../assets/hierba.jpg";
  
  espaiDeJoc.dibuixar = function() {
    // Dibujar el fondo
    const patron = this.context.createPattern(this.imatgeFons, "repeat");
    this.context.fillStyle = patron;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
  return espaiDeJoc;
};



var crearPuntuacio = function() {
  var puntuacio = {};
  puntuacio.valor = 0;
  puntuacio.actualitzar = function() {
    puntuacio.valor++;
  };
  return puntuacio;
};

var joc = crearJoc();
var espaiDeJoc = crearEspaiDeJoc();
var puntuacio = crearPuntuacio();

// Loop de juego
function loop() {
  // Dibujar el canvas
  espaiDeJoc.dibuixar();

  // Solicitar un nuevo frame
  requestAnimationFrame(loop);
}

// Iniciar el loop
loop();

// ...
