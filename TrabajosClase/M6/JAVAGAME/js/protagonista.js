import { Element } from './element.js';

export class Protagonista extends Element {
  constructor(imagen, x, y, ancho, alto, posicionX, posicionY, anchoPantalla, altoPantalla, espaiDeJoc) {
    super(imagen, x, y, ancho, alto, posicionX, posicionY, anchoPantalla, altoPantalla, espaiDeJoc);

    this.teclasPulsadas = {};
  
    document.addEventListener('keydown', (event) => {
      this.teclasPulsadas[event.key] = true;
    });


    document.addEventListener('keyup', (event) => {
      this.teclasPulsadas[event.key] = false;
    });
  }

  moverArriba() {
    if (this.teclasPulsadas['w']) {
      this.posicionY -= 10;
      this.x = 90;
      
    }
  }

  moverAbajo() {
    if (this.teclasPulsadas['s'])  {
     
        this.posicionY += 10;
        this.x = 0;
    
    }
  }
  
  

  moverIzquierda() {
    if (this.teclasPulsadas['a']) {
      this.posicionX -= 10;
      this.x = 45;
    }
  }

  moverDerecha() {
    if (this.teclasPulsadas['d'] ) {
      this.posicionX += 10;
      this.x = 135;
    }
  }

  detectarColisiones() {

  }
}