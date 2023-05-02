function Puntuacio() {
    this.puntuacio = 0;
    this.vida = 3;
  }
  
  Puntuacio.prototype.actualizarPuntuacio = function(valor) {
    this.puntuacio += valor;
  };
  
  Puntuacio.prototype.actualizarVida = function(valor) {
    this.vida += valor;
  };
  