// set up canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const numboles = 25;

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// functió per generar un número aleatori entre 2 valors
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// funció per generar un color aleatori
function randomRGB() {
  //@TODO3: Retornar un color aleatori rgb (exemple: rgb(valor,valor,valor) o #a1b2c3). Es pot aprofitar la funció random()
  return '';
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
     //@TODO 1: Dibuixar una circumferència. Per fer-ho utilitzarem la funció "arc()" a la posició x,y de radi "tamany". L'arc ha de començar a 0 i acabar en (2*Pi) per a que formi un cercle
   }

   update() {
     //@TODO5: A cada execució:
     //posició x de la bola incrementa tants píxels com la velocitat X
     //posició y de la bola incrementa tants píxels com la velocitat Y
     //D'aquesta manera la bola avançara X pixels (segons la velocitat x) i Y pixels (segons la velocitat y)

     //@TODO6: Hem d'evitar que les boles sortin del frame.
     // Hem de fer-les rebotar quan arribin i toquin la paret del canvas
     // Per a que rebotin:
     //   si ho fan a la paret dreta o esquerra, la velocitat x canvia de direcció (Per exemple, si té velocitat X positiva, passa aquesta a negativa. O si és negativa, passa a positiva)
     //   si ho fan a la paret d'adalt o abaix, la velocitat y canvia de direcció (Per exemple, si té velocitat Y positiva, passa aquesta a negativa.  O si és negativa, passa a positiva)
     // S'ha de tenir en compte el tamany de la bola. Aquesta ha de rebotar quan la superfície de la bola toqui la paret.

   }

   
   collisio() {
     //@TODO8:
     //Mirem la bola actual amb cadascuna de les boles per veure si es toquen. Si es toquen, el color de les 2 boles es canvien per un color aleatori nou.
     //
     //la distància entre dos punts és d=√((x_2-x_1)²+(y_2-y_1)²)
     //Si aquesta distancia és menor que la suma dels tamanys de les boles => llavors es toquen: canviem els colors de manera aleatòria de les 2 boles

   }

}

//CREACIÓ DE BOLES
const boles = [];

while (boles.length < numboles) {
   //tamany de la bola en pixels
   const tamany = random(10,20);


   //@TODO 2:
  //Els valors s'han de canviar
  //      x: número aleatori entre (el tamany de la bola) i (l'amplada de la finestra - tamany de la bola). Així forcem que la bola no sobrepassi la finestra al dibuxar-la
  //      y: número aleatori entre el (el tamany de la bola) i (l'alçada de la finestra - tamany de la bola). Així forcem que la bola no sobrepassi la finestra al dibuxar-la
  //      velocitat x: número aleatori entre -7 i 7 
  //      velocitat y: número aleatori entre -7 i 7
  //      color: color aleatori (utilitzar funció randomRGB)
  //      tamany: tamany
  //
  //paràmetres de bola: pos x, pos y, velX, velY, color, tamany
   const bola = new Bola(
      100,
      100,
      0,
      0,
      '#ffaaaa',
      50,
   );

  boles.push(bola);
}

function loop() {
   ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
   ctx.fillRect(0, 0,  width, height);

   for (const bola of boles) {
     bola.dibuixar();

     //@TODO4: activar update
     //bola.update();

     //@TODO7: activar collisio
     // bola.collisio();
   }

    //funció que executa loop a cada frame d'una animació.
    requestAnimationFrame(loop);
}


loop();
