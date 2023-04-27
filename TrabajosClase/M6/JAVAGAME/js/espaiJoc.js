var crearEspaiDeJoc = function(canvas, ancho, alto, imagen) {
  var espaiDeJoc = {};

  espaiDeJoc.canvas = canvas;
  espaiDeJoc.context = canvas.getContext('2d');
  espaiDeJoc.width = ancho;
  espaiDeJoc.height = alto;

  espaiDeJoc.getWidth = function() {
    return espaiDeJoc.width;
  }

  espaiDeJoc.getHeight = function() {
    return espaiDeJoc.height;
  }

  espaiDeJoc.dibuixarFons = function() {
    var patro = espaiDeJoc.context.createPattern(imagen, 'repeat');
    espaiDeJoc.context.fillStyle = patro;
    espaiDeJoc.context.fillRect(0, 0, espaiDeJoc.width, espaiDeJoc.height);
  }

  espaiDeJoc.esborrar = function() {
    espaiDeJoc.context.clearRect(0, 0, espaiDeJoc.width, espaiDeJoc.height);
  }

  return espaiDeJoc;
};
