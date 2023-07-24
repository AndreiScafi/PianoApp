const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
}


const teclas = document.querySelectorAll(".oitava > div");

function desmarcar(tecla){
    tecla.classList.remove("selecionada");
}

teclas.forEach(function(tecla){
    tecla.onmousedown = function(){
        tecla.classList.add("selecionada");
    }

    tecla.onmouseup = () => desmarcar(tecla);

    tecla.onmouseleave = () => desmarcar(tecla);
    
})