export class Element  {
    constructor(x, y, ancho, alto, imagen, posicionX, posicionY, indice) {
      this.x = x;
      this.y = y;
      this.ancho = ancho;
      this.alto = alto;
      this.imagen = imagen;
      this.posicionX = posicionX;
      this.posicionY = posicionY;
      this.indice = indice;
      this.velocidad = velocidad;
    }
  
    // métodos para obtener los atributos
    getX() {
      return this.x;
    }
  
    getY() {
      return this.y;
    }
  
    getWidth() {
      return this.ancho;
    }
  
    getHeight() {
      return this.alto;
    }
  
    getImage() {
      return this.imagen;
    }
  
    getPosicionX() {
      return this.posicionX;
    }
  
    getPosicionY() {
      return this.posicionY;
    }
  
    getIndice() {
      return this.indice;
    }
  
    getVelocidad() {
      return this.velocidad;
    }
  
    // métodos para actualizar los atributos
    setX(x) {
      this.x = x;
    }
  
    setY(y) {
      this.y = y;
    }
  
    setWidth(ancho) {
      this.ancho = ancho;
    }
  
    setHeight(alto) {
      this.alto = alto;
    }
  
    setImage(imagen) {
      this.imagen = imagen;
    }
  
    setPosicionX(posicionX) {
      this.posicionX = posicionX;
    }
  
    setPosicionY(posicionY) {
      this.posicionY = posicionY;
    }
  
    setIndice(indice) {
      this.indice = indice;
    }
  
    setVelocidad(velocidad) {
      this.velocidad = velocidad;
    }
  
    // métodos para dibujar el elemento en el canvas
    dibujar(ctx) {
      ctx.drawImage(
        this.imagen,
        this.posicionX,
        this.indice * this.alto,
        this.ancho,
        this.alto,
        this.x,
        this.y,
        this.ancho,
        this.alto
      );
    }
  }
  