//remove para elimir, this= esto es  una palabra reservada , dblclick = captura un doble clic, event bubling = propaga eventos 
//event target es el ejecutor del evento, parentNode = sube una gerarquias y elimina el padre. setTimeOut = para colocar intervalo de tiempo. 


let tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("dblclick", function(event){

    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500)
})




