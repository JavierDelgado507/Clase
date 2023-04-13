function EspaiDeJoc(width, height ,image) {
    this.canvas = document.getElementById('miCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = width;
    this.canvas.height = height;
    
    // Establecer la imagen de fondo
    this.canvas.style.backgroundImage = image;
  }
    
  