// Clase Protagonista que hereda de la clase Elemento
class Protagonista extends Elemento {
    constructor(x, y, width, height) {
      super(x, y, width, height);
      this.speed = 5; // velocidad del protagonista
      this.vidas = 3; // número de vidas iniciales
      this.puntuacion = 0; // puntuación inicial
    }
  
    // método para mover al protagonista hacia la izquierda
    moverIzquierda() {
      this.x -= this.speed;
    }
  
    // método para mover al protagonista hacia la derecha
    moverDerecha() {
      this.x += this.speed;
    }
  
    // método para mover al protagonista hacia arriba
    moverArriba() {
      this.y -= this.speed;
    }
  
    // método para mover al protagonista hacia abajo
    moverAbajo() {
      this.y += this.speed;
    }
  
    // método para detectar colisiones con otros elementos
    detectarColision(elemento) {
      if (
        this.x < elemento.x + elemento.width &&
        this.x + this.width > elemento.x &&
        this.y < elemento.y + elemento.height &&
        this.y + this.height > elemento.y
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
  