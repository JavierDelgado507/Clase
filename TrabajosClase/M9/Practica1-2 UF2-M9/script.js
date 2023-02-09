
function iniciar(){
    var playBoton = document.getElementById('play');
    var pauseBoton = document.getElementById('pausar');
    var rewindBoton = document.getElementById('retrocceder');
    var avanzarBoton = document.getElementById('avanzar');
    var stopBoton = document.getElementById('stop');
    var video=document.getElementById('video');

    pauseBoton.addEventListener('click' , presionarPause , false);
    playBoton.addEventListener('click', presionarPlay, false);
    rewindBoton.addEventListener('click', retrocceder,false);
    avanzarBoton.addEventListener('click', avanzar ,false);
    stopBoton.addEventListener('click' ,stop ,false);
    
    video.addEventListener('pause', function(){
        playBoton.style.display = 'inline';
        pauseBoton.style.display = 'none';
    });
    video.addEventListener('play', function(){
        playBoton.style.display = 'none';
        pauseBoton.style.display = 'inline';
    });

}
video.play();

function presionarPlay(){
    var video=document.getElementById('video');
    video.play();
}

function presionarPause(){
    var video=document.getElementById('video');
    video.pause();
}

function retrocceder(){
    var video =document.getElementById('video');
    video.currentTime-= 5;
}

function avanzar(){
    var video = document.getElementById('video');
    video.currentTime+= 5;
}

function stop(){
    var video = document.getElementById('video');
    video.currentTime = 0;
}

window.addEventListener('load',  iniciar , false);