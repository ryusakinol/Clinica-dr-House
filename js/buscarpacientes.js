let bton = document.querySelector("#buscar-paciente");
    bton.addEventListener("click", function(){
        let xhr = new XMLHttpRequest;
        xhr.open("GET", "https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
        xhr.addEventListener("load", function(){

            let errorAjax = document.querySelector("#error-ajax")
            if(xhr.status == 200){
                errorAjax.classList.add("invisible")
                let respuesta = xhr.responseText;
                let pacientes = JSON.parse(respuesta)
                
                pacientes.forEach(function(paciente){
                    adicionarPacienteEnLaTabla(paciente);
                });
            }  else{
                errorAjax.classList.remove("invisible")
            }
              
           });
        xhr.send();
    });