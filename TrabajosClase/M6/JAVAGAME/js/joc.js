var crearJoc = function () {
  var joc = {};
  joc.espaiDeJoc = document.getElementById("miCanvas");
  joc.puntuacio = 0;
  joc.imgProtagonista = new Image();
  joc.imgProtagonista.src = "./../assets/george.png";
  joc.protagonista = new Protagonista(
    joc.imgProtagonista,
    0,
    0,
    48,
    48,
    0,
    0,
    48,
    48,
    10
  );

  joc.imagenEnemigo = new Image();
  joc.imagenEnemigo.src = "./../assets/fantasmaAzul.png";
  joc.enemigo1 = new Enemigo1(joc.imagenEnemigo, 50, 0, 64, 64, 50, 50, 64, 64);

  joc.imagenEnemigo2 = new Image();
  joc.imagenEnemigo2.src = "./../assets/fantasmaVerde.png";
  joc.enemigo2 = new Enemigo2(
    joc.imagenEnemigo2,
    50,
    0,
    64,
    64,
    50,
    50,
    64,
    64
  );

  joc.imagenEnemigo3 = new Image();
  joc.imagenEnemigo3.src = "./../assets/fantasmaNegro.png";
  joc.enemigo3 = new Enemigo3(
    joc.imagenEnemigo3,
    50,
    0,
    64,
    64,
    50,
    50,
    64,
    64
  );

  joc.imgMoneda = new Image();
  joc.imgMoneda.src = "./../assets/coin_avr_color.png";
  joc.moneda = new RecompensaPuntos(
    joc.imgMoneda,
    50,
    0,
    16,
    16,
    50,
    50,
    24,
    24
  );

  joc.imgVida = new Image();
  joc.imgVida.src = "./../assets/corazon.png";
  joc.vida = new RecompensaVida(joc.imgVida, 50, 0, 120, 145, 50, 50, 24, 24);

  joc.imgVelocidad = new Image();
  joc.imgVelocidad.src = "./../assets/coin_avr.png";
  joc.velocidad = new RecompensaVelocidad(
    joc.imgVelocidad,
    50,
    0,
    16,
    16,
    50,
    50,
    24,
    24
  );

  return joc;
};

var crearEspaiDeJoc = function () {
  var espaiDeJoc = {};
  espaiDeJoc.canvas = document.getElementById("miCanvas");
  espaiDeJoc.canvas.width = 800;
  espaiDeJoc.canvas.height = 600;
  espaiDeJoc.context = espaiDeJoc.canvas.getContext("2d");
  espaiDeJoc.imatgeFons = new Image();
  espaiDeJoc.imatgeFons.src = "../assets/hierba.jpg";

  espaiDeJoc.dibuixar = function () {
    // Dibujar el fondo
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    const patron = this.context.createPattern(this.imatgeFons, "repeat");
    this.context.fillStyle = patron;
  };
  return espaiDeJoc;
};

var crearPuntuacio = function () {
  var puntuacio = {};
  puntuacio.valor = 0;
  puntuacio.sumarPuntos = function () {
    puntuacio.valor++;
    document.getElementById("puntuacion").innerHTML = puntuacio.valor;
  };
  puntuacio.restarPuntos = function () {
    puntuacio.valor--;
    document.getElementById("puntuacion").innerHTML = puntuacio.valor;
  };
  puntuacio.reiniciar = function () {
    puntuacio.valor = 0;
    document.getElementById("puntuacion").innerHTML = puntuacio.valor;
  };
  return puntuacio;
};

var joc = crearJoc();
var puntuacion = crearPuntuacio();
var espaiDeJoc = crearEspaiDeJoc();
var puntuacio = crearPuntuacio();

joc.enemigo1.randomPosition();
joc.enemigo2.randomPosition();
joc.enemigo3.randomPosition();
joc.moneda.randomPosition();
joc.vida.randomPosition();
joc.protagonista.poscionarProtagonista();
let pausado = false;

function loop() {
  if (!pausado) {
    espaiDeJoc.dibuixar();
    joc.protagonista.actualizar();
    // Dibujar el protagonista
    joc.protagonista.dibujar(espaiDeJoc.context);

    // Dibujar los enemigos
    joc.enemigo1.dibujar(espaiDeJoc.context);
    joc.enemigo2.dibujar(espaiDeJoc.context);
    joc.enemigo3.dibujar(espaiDeJoc.context);
    // Actualizar la posición de los enemigos y comprobar si colisionan con el protagonista
    joc.enemigo1.buscarProtagonista(joc.protagonista);
    joc.enemigo2.buscarProtagonista(joc.protagonista);
    joc.enemigo3.buscarProtagonista(joc.protagonista);

    // Dibujar y actualizar la posición de la moneda, y comprobar si colisiona con el protagonista
    joc.moneda.dibujar(espaiDeJoc.context);
    joc.moneda.actualizarIndices();

    joc.vida.dibujar(espaiDeJoc.context);
    joc.vida.actualizarIndices();

    joc.moneda.darPuntos();

    joc.vida.darVida(joc.protagonista);

    joc.velocidad.dibujar(espaiDeJoc.context);
    joc.velocidad.actualizarIndices();
    joc.velocidad.darVelocidad(joc.protagonista);

    joc.protagonista.dibujarVida();

    joc.enemigo1.atacar(joc.protagonista);
    joc.enemigo2.atacar(joc.protagonista);
    joc.enemigo3.atacar(joc.protagonista);

    requestAnimationFrame(loop);
  }
}
loop();

var botonPausar = document.getElementById("boton-pausar");

botonPausar.addEventListener("click", function () {
  pausado = !pausado;

  if (pausado) {
    botonPausar.innerText = "Reanudar";
    botonPausar.classList.add("boton-reanudar");
    botonPausar.classList.remove("boton-pausar");
  } else {
    botonPausar.innerText = "Pausar";
    botonPausar.classList.add("boton-pausar");
    botonPausar.classList.remove("boton-reanudar");
    loop();
  }
});

var botonReiniciar = document.getElementById("reiniciar");
botonReiniciar.addEventListener("click", function () {
  joc.enemigo1.randomPosition();
  joc.enemigo2.randomPosition();
  joc.enemigo3.randomPosition();
  joc.moneda.randomPosition();
  joc.vida.randomPosition();
  joc.protagonista.poscionarProtagonista();
  puntuacio.reiniciar();

  console.log(joc.protagonista.getVida());
  if (joc.protagonista.getVida() == 0) {
    pausado = false;
    loop();
  }
  joc.protagonista.reiniciarVida();
});
