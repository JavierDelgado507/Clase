export class Element {
  constructor(imagen, x, y, ancho, alto, posicionX, posicionY, anchoPantalla, altoPantalla) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.imagen = imagen;
    this.posicionX = posicionX;
    this.posicionY = posicionY;
    this.anchoPantalla = anchoPantalla;
    this.altoPantalla = altoPantalla;
    
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
  
    getAnchoPantalla(){
      return this.anchoPantalla;
    }
    
    getAltoPantalla(){
      return this.altoPantalla;
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
  
    setAnchoPantalla(anchoPantalla){
      this.anchoPantalla = anchoPantalla
    }

    setAltoPantalla(altoPantalla){
      this.altoPantalla = altoPantalla
    }
    // métodos para dibujar el elemento en el canvas
    dibujar(ctx) {
      ctx.drawImage(
        this.imagen,
        this.x,
        this.y,
        this.ancho,
        this.alto,
        this.posicionX,
        this.posicionY,
        this.ancho ,
        this.alto
      );

    }
    
  }
  