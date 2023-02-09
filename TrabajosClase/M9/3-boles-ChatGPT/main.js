const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const numboles = 25;
let boles = [];

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;


function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
  return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
}

class Bola {

  constructor(x, y, velX, velY, color, tamany) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.tamany = tamany;
  }

  dibuixar() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.tamany, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    this.x += this.velX;
    this.y += this.velY;

    if ((this.x + this.tamany) >= width || (this.x - this.tamany) <= 0) {
      this.velX = -(this.velX);
    }

    if ((this.y + this.tamany) >= height || (this.y - this.tamany) <= 0) {
      this.velY = -(this.velY);
    }
  }
  collisio() {
    for (let j = 0; j < boles.length; j++) {
      if (!(this === boles[j])) {
        const dx = this.x - boles[j].x;
        const dy = this.y - boles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.tamany + boles[j].tamany) {
          this.velX = -(this.velX);
          this.velY = -(this.velY);
          boles[j].velX = -(boles[j].velX);
          boles[j].velY = -(boles[j].velY);
          this.color = randomRGB();
          boles[j].color = randomRGB();
        }
      }
    }
  }
}

while (boles.length < numboles) {
  const tamany = random(10, 20);
  const x = random(tamany, width - tamany);
  const y = random(tamany, height - tamany);
  const velX = random(-7, 7);
  const velY = random(-7, 7);
  const color = randomRGB();

  boles.push(new Bola(x, y, velX, velY, color, tamany));
}

function animate() {
  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < boles.length; i++) {
    boles[i].dibuixar();
    boles[i].update();
    boles[i].collisio();
  }
}

setInterval(animate, 10);