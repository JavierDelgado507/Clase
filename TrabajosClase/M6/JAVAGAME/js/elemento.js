function Element(x, y, width, height) {
    // Atributos privados
    var _x = x;
    var _y = y;
    var _width = width;
    var _height = height;
  
    // Métodos públicos para acceder y modificar atributos
    this.getX = function() {
      return _x;
    }
  
    this.setX = function(x) {
      _x = x;
    }
  
    this.getY = function() {
      return _y;
    }
  
    this.setY = function(y) {
      _y = y;
    }
  
    this.getWidth = function() {
      return _width;
    }
  
    this.setWidth = function(width) {
      _width = width;
    }
  
    this.getHeight = function() {
      return _height;
    }
  
    this.setHeight = function(height) {
      _height = height;
    }
  }
       