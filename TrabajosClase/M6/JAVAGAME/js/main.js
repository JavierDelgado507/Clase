const canvas = document.getElementById("miCanvas");
canvas.width = "800";
canvas.height = "600";

const anchoGeorge = 48;
const altoGeorge = 48;
const anchoMoneda = 16;
const altoMoneda = 16;
const anchoFantasma = 64;
const altoFantasma = 64;
const altoEspada = 32;
const anchoEspada = 32;

let indiceGeneral = 0;
let indiceGeorge = 0;
let indiceMonedaDorada = 0;
let indiceMonedaTransparente = 0;
let indiceFantasmaAzul = 0;
let indiceFantasmaNegro = 0;
let posicionGeorge = 0;

let gx;
let gy;
let mdx;
let mdy;
let mty;
let mtx;
let fax;
let fay;
let fnx;
let fny;
let sx;
let sy;

//ctx == context
const ctx = canvas.getContext("2d");

const fondo = new Image();
fondo.src = "./../JAVAGAME/assets/hierba.jpg";

const george = new Image();
george.src = "./../JAVAGAME/assets/george.png";

const monedaDorada = new Image();
monedaDorada.src = "./../JAVAGAME/assets/coin_avr_color.png";

const monedaTransparente = new Image();
monedaTransparente.src = "./../JAVAGAME/assets/coin_avr.png";

const fantasmaAzul = new Image();
fantasmaAzul.src = "./../JAVAGAME/assets/fantasmaAzul.png";

const fantasmaNegro = new Image();
fantasmaNegro.src = "./../JAVAGAME/assets/fantasmaNegro.png";

const sword = new Image();
sword.src = "./../JAVAGAME/assets/sword.png";

const yase = new Image();
yase.src = "./../JAVAGAME/assets/yase.png";

fondo.onload = function () {
  //UNA sola Vez
  posicionarGeorge();
  posicionarMonedaDorada();
  posicionarMonedaTransparente();
  posicionarFantasmaAzul();
  posicionarFantasmaNegro();
  posicionarSword();
  

  //Dibujar se ejecuta en bucle
  dibujar();
};
function posicionarGeorge() {
  gx = canvas.width / 2 - anchoGeorge / 2; //Coordenada X aleatoria
  gy = canvas.height / 2 - altoGeorge / 2; //Cpordenada y aleatoria
}

function posicionarMonedaDorada() {
  mdx = Math.floor(Math.random() * (canvas.width - anchoMoneda * 2));
  mdy = Math.floor(Math.random() * (canvas.height - altoMoneda * 2));
}

function posicionarMonedaTransparente() {
  mtx = Math.floor(Math.random() * (canvas.width - anchoMoneda * 2));
  mty = Math.floor(Math.random() * (canvas.height - altoMoneda * 2));
}

function posicionarFantasmaAzul() {
  fax = Math.floor(Math.random() * (canvas.width - anchoFantasma * 2));
  fay = Math.floor(Math.random() * (canvas.height - altoFantasma * 2));
}

function posicionarFantasmaNegro() {
  fnx = Math.floor(Math.random() * (canvas.width - anchoFantasma * 2));
  fny = Math.floor(Math.random() * (canvas.height - altoFantasma * 2));
}

function posicionarSword() {
  sx = Math.floor(Math.random() * (canvas.width - anchoEspada * 2));
  sy = Math.floor(Math.random() * (canvas.height - altoEspada * 2));
}

// document,addEventListener('keyup', (event) => {
//   delete this.keysPressed[event.key] === 's';
// });

// document.addEventListener('keydown', (event) =>{
//   keysPressed[event.key] = true;
//   if(keysPressed['Control'] && event.key == 'x'){
//     alert(event.key);
//   }
// } );

// document.addEventListener('keyup', (event) => {
//   delete keysPressed[event.key];
// });

// Objeto que almacena el estado de las teclas
const teclasPulsadas = {};

// Agregar un event listener para detectar cuando se presiona una tecla
document.addEventListener('keydown', (event) => {
  teclasPulsadas[event.key] = true;
});

// Agregar un event listener para detectar cuando se suelta una tecla
document.addEventListener('keyup', (event) => {
  teclasPulsadas[event.key] = false;
});

document.addEventListener("keydown", function (event) {
 if (teclasPulsadas['s'] && teclasPulsadas['d'] ){
    if (gx + 5 + anchoGeorge < canvas.width && gy + 5 + altoGeorge < canvas.height) {
      gx += 5;
      gy += 5;
      posicionGeorge = 135;
    }
  }else if (teclasPulsadas['s'] && teclasPulsadas['a'] ){
    if (gx + 5 + anchoGeorge < canvas.width && gy - 5 > 0 ) {
      gx -= 5;
      gy += 5;
      posicionGeorge = 45;
    }
  }else if (teclasPulsadas['w'] && teclasPulsadas['a'] ){
    if (gx + 5 + anchoGeorge < canvas.width && gx - 5 > 0 ) {
      gx -= 8;
      gy -= 8;
      posicionGeorge = 45;
    }
  }else if (teclasPulsadas['s']) {
    if (gy + 5 + altoGeorge < canvas.height) {
      gy += 10;
      posicionGeorge = 0;
      
    }
  }else if (teclasPulsadas['w'] && teclasPulsadas['d'] ){
    if (gx + 5 + anchoGeorge < canvas.width && gy - 5 > 0 ) {
      gx += 8;
      gy -= 8;
      posicionGeorge = 135;
    }
  } else if (teclasPulsadas['w']) {
    if (gy - 5 > 0) {
      gy -= 10;
      posicionGeorge = 90;
    }
  } else if (teclasPulsadas['a']) {
    if (gx - 5 > 0) {
      gx -= 10;
      posicionGeorge = 45;
    }
  } else if (teclasPulsadas['d']) {
    if (gx + 5 + anchoGeorge < canvas.width) {
      gx += 10;
      posicionGeorge = 135;
    }
  }
});

function fantasma() {
  if (fax < gx) {
    fax += 0.5;
  } else if (fax > gx) {
    fax -= 0.5 ;
  }

  if (fay < gy) {
    fay += 0.5;
  } else if (fay > gy) {
    fay -= 0.5;
  }
}

function fantasmaNegroMover() {
  if (fnx < gx) {
    fnx += 0.5;
  } else if (fnx > gx) {
    fnx -= 0.5;
  }

  if (fny < gy) {
    fny += 0.5;
  } else if (fny > gy) {
    fny -= 0.5;
  }
  }


function colisionEntreFantasma(){
  if (
    fax < fnx + anchoFantasma &&
    fax + anchoFantasma > fnx &&
    fay < fny + altoFantasma &&
    fay + altoFantasma > fny
  ) {
    // Hay colisión entre los fantasmas
    if (fnx > fax) {
      // Mover el primer fantasma hacia la izquierda
      fnx += 0.5;
      fny += 0.5;
      fax -= 0.5;
      fay -= 0.5;
    } else {
      // Mover el primer fantasma hacia la derecha
      fnx -= 0.5;
      fny -= 0.5;
      fax += 0.5;
      fay += 0.5;
    }
}
}

function colisionMonedes() {
  if (
    gx < mdx + anchoMoneda &&
    gx + anchoGeorge > mdx &&
    gy < mdy + altoMoneda &&
    gy + altoGeorge > mdy
  ) {
    posicionarMonedaDorada();
  }

  if (
    gx < mtx + anchoMoneda &&
    gx + anchoGeorge > mtx &&
    gy < mty + altoMoneda &&
    gy + altoGeorge > mty
  ) {
    posicionarMonedaTransparente();
  }
}

function dibujar() {
  //LIMPIAR CANVAS
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //PATRON CON LA IMAGEN DEL FONDO
  const patron = ctx.createPattern(fondo, "repeat");
  ctx.fillStyle = patron;
  //PINTA EL FONDO EN EL CANVAS
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // ctx.drawImage(
  //   george, //Imagen George
  //   posicionGeorge, //Posicion X en la imagen
  //   indiceGeorge * altoGeorge, //Posicion Y en la Imagen
  //   anchoGeorge, //Ancho de la Imagen
  //   altoGeorge, //Alto de la imagen
  //   gx, //Posicion X en la pantalla
  //   gy, //Posicion Y en la pantalla
  //   anchoGeorge, //Ancho en la pantalla
  //   altoGeorge //Alto en la pantalla
  // );

    ctx.drawImage(
    george, //Imagen George
    posicionGeorge, //Posicion X en la imagen
    indiceGeorge * altoGeorge, //Posicion Y en la Imagen
    anchoGeorge, //Ancho de la Imagen
    altoGeorge, //Alto de la imagen
    gx, //Posicion X en la pantalla
    gy, //Posicion Y en la pantalla
    anchoGeorge, //Ancho en la pantalla
    altoGeorge //Alto en la pantalla
  );

  ctx.drawImage(
    monedaDorada, //Imagen moneda Dorada
    indiceMonedaDorada * anchoMoneda, //Posicion X en la imagen
    0, //Posicion Y en la Imagen
    anchoMoneda, //Ancho de la Imagen
    altoMoneda, //Alto de la imagen
    mdx, //Posicion X en la pantalla
    mdy, //Posicion Y en la pantalla
    anchoMoneda * 1.5, //Ancho en la pantalla
    altoMoneda * 1.5 //Alto en la pantalla
  );

  ctx.drawImage(
    monedaTransparente, //Imagen moneda Dorada
    indiceMonedaDorada * anchoMoneda, //Posicion X en la imagen
    0, //Posicion Y en la Imagen
    anchoMoneda, //Ancho de la Imagen
    altoMoneda, //Alto de la imagen
    mtx, //Posicion X en la pantalla
    mty, //Posicion Y en la pantalla
    anchoMoneda * 1.5, //Ancho en la pantalla
    altoMoneda * 1.5 //Alto en la pantalla
  );

  ctx.drawImage(
    fantasmaAzul, //Imagen moneda Dorada
    indiceFantasmaAzul * anchoFantasma, //Posicion X en la imagen
    0, //Posicion Y en la Imagen
    anchoFantasma, //Ancho de la Imagen
    altoFantasma, //Alto de la imagen
    fax, //Posicion X en la pantalla
    fay, //Posicion Y en la pantalla
    anchoFantasma * 0.9, //Ancho en la pantalla
    altoFantasma * 0.9 //Alto en la pantalla
  );

  ctx.drawImage(
    fantasmaNegro, //Imagen moneda Dorada
    indiceFantasmaNegro * anchoFantasma, //Posicion X en la imagen
    0, //Posicion Y en la Imagen
    anchoFantasma, //Ancho de la Imagen
    altoFantasma, //Alto de la imagen
    fnx, //Posicion X en la pantalla
    fny, //Posicion Y en la pantalla
    anchoFantasma * 0.8, //Ancho en la pantalla
    altoFantasma * 0.8 //Alto en la pantalla
  );

  ctx.drawImage(
    sword, //Imagen moneda Dorada
    0, //Posicion X en la imagen
    0, //Posicion Y en la Imagen
    anchoFantasma, //Ancho de la Imagen
    altoFantasma, //Alto de la imagen
    sx, //Posicion X en la pantalla
    sy + 15, //Posicion Y en la pantalla
    anchoEspada * 2, //Ancho en la pantalla
    altoEspada * 2 //Alto en la pantalla
  );


  if (indiceGeneral % 10 == 0) {
    indiceMonedaDorada++;
   

    if (indiceMonedaDorada % 2 == 0) {
      indiceGeorge++;
      
    }

    if (indiceGeorge % 20 == 0){
      indiceFantasmaAzul++;
      indiceFantasmaNegro++;
    }
  }

  indiceGeneral++;

  if (indiceGeorge >= 4) {
    indiceGeorge = 0;
  }

  if (indiceMonedaDorada >= 8) {
    indiceMonedaDorada = 0;
  }

  if (indiceFantasmaAzul >= 4) {
    indiceFantasmaAzul = 0;
  }
  if (indiceFantasmaNegro >= 4) {
    indiceFantasmaNegro = 0;
  }
  if (indiceGeneral >= 1000000) {
    indiceGeneral = 0;
  }

  colisionMonedes();
  fantasma();
  fantasmaNegroMover();
  colisionEntreFantasma()
  
  // setInterval(dibujar,100);

  requestAnimationFrame(dibujar);
}
