let filtrar = document.querySelector("#filtrar-tabla");
filtrar.addEventListener("input", function(){  //EVENTO INPUT
    let pacientes =  document.querySelectorAll(".paciente");

    if(this.value.length > 0){
      for (let i = 0; i < pacientes.length; i++) {
          let paciente = pacientes[i];
          let = tdNombre = paciente.querySelector(".info-nombre");
          let = nombre = tdNombre.textContent;
          let expresion = new RegExp(this.value, "i");  //espresiones regulares para realizar busquedas sofisticada para hacer filtos.

          if(!expresion.test(nombre)){
              paciente.classList.add("invisible");
          }else{
              paciente.classList.remove(".invisible")
          }
        }

    } else {
        for (let i = 0; i < pacientes.length; i++) {
            let paciente = pacientes[i];
            paciente.classList.remove("invisible");
        }
    }
})