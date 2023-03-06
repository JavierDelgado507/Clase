$(document).ready(function() {

  var player1Icona = 'X';
  var player2Icona = 'O';

  //settings for liveBoard: 1 is cpuIcon, -1 is playerIcon, 0 is empty
  var taulerJoc = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  var liniesGuanyadores = [    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  //UI
  function pintaTauler(tauler) {
    tauler.forEach(function(el, i) {
      var squareId = '#' + i.toString();
      if (el === -1) {
        $(squareId).text(player1Icona);
      } else if (el === 1) {
        $(squareId).text(player2Icona);
      }
    });
    $('.square:contains(X)').addClass('x-marker');
    $('.square:contains(O)').addClass('o-marker');
    
    $('.square').hover(function() {
      var currentSquare = $(this);
      var squareIndex = currentSquare.attr('id');
      if (taulerJoc[squareIndex] === 0) {
        currentSquare.text(currentPlayer === -1 ? player1Icona : player2Icona);
      }
    }, function() {
      var currentSquare = $(this);
      var squareIndex = currentSquare.attr('id');
      if (taulerJoc[squareIndex] === 0) {
        currentSquare.text("");
      }
    });
  }

  function animaLineaGuanyadora(a, b, c) {
    document.getElementById(a).classList.add("blink");
    document.getElementById(b).classList.add("blink");
    document.getElementById(c).classList.add("blink");
  }
  
  


  //GAMEPLAY
  function iniciaJoc() {
    $('.square').removeClass('blink');
    taulerJoc = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    $('.square').text("").removeClass('o-marker x-marker');
    pintaTauler(taulerJoc);
  }

  function comprovaGuanyador() {
    for (var i = 0; i < liniesGuanyadores.length; i++) {
      var line = liniesGuanyadores[i];
      var sum = taulerJoc[line[0]] + taulerJoc[line[1]] + taulerJoc[line[2]];
      if (sum === 3 || sum === -3) {
        animaLineaGuanyadora(line[0], line[1], line[2]);
        return sum / 3; // Return 1 for player2Icona, -1 for player1Icona
      }
    }
    // Return 0 for tie
    return taulerJoc.every(function(el) { return el !== 0 }) ? 0 : null;
  }

  var currentPlayer = 1;

  $('.square').on('click', function() {
    var squareIndex = $(this).attr('id');
    if (taulerJoc[squareIndex] === 0) {
      taulerJoc[squareIndex] = currentPlayer;
      pintaTauler(taulerJoc);
      var winner; 
      winner = comprovaGuanyador();
      if (winner !== null) {
        if (winner === 0) {
          setTimeout(function() {
            alert('Empate!');
          }, 200);
        } else if (winner === 1) {
          setTimeout(function() {
             alert('Jugador 2 gana!');
           }, 200);
        } else {
           setTimeout(function() {
             alert('Jugador 1 gana!');
           }, 200);
        }
        setTimeout(function() {
          iniciaJoc();
        }, 200);
      } else {
        currentPlayer = -currentPlayer;
      }
    }
  });


  iniciaJoc();

});
