function inversion(){
    // CAPTURAMOS LOS ELEMENTOS 
    const cNombres = document.getElementById("nombres").value;
    const cEmail = document.getElementById("email").value; 
    const cMonto = document.getElementById("monto-invert").value; 
    const cTiempo = document.getElementById("tiempo-invers").value; 

    const preSimulacion = document.querySelector(".pre-simulation"); 
    const postSimulacion = document.querySelector(".post-simulation"); 

    const showNombre = document.getElementById("nombres-show"); 
    const showEmail = document.getElementById("email-show"); 

    const showTiempo = document.getElementById("tiempo-show"); 
    const showInteres = document.getElementById("interes-show"); 

    const showTotal = document.getElementById("total-show");
    const showGanancia = document.getElementById("ganancia-show"); 


    postSimulacion.classList.remove("disabled"); 
    preSimulacion.classList.add("disabled");

    showNombre.innerText = cNombres; 
    showEmail.innerText = cEmail; 


      

   switch (cTiempo) {
    case "1":
        showTiempo.innerText = "12 Meses"; 
        showInteres.innerText = "0.8%"; 
        let Ganancia1 = 0.096 * parseInt (cMonto)  ;
        let Total1 = parseInt(cMonto) + Ganancia1; 
        showGanancia.innerText = Ganancia1;   
        showTotal.innerText = Total1;   
        
        break;

    case "2":
        showTiempo.innerText = "24 Meses"; 
        showInteres.innerText = "1.3%"; 
        let Ganancia2 = 0.312 * parseInt (cMonto);
        let Total2 = parseInt(cMonto) + Ganancia2; 
        showGanancia.innerText = Ganancia2;   
        showTotal.innerText = Total2;  
        break;

    case "3":
        showTiempo.innerText = "36 Meses"; 
        showInteres.innerText = "1.7%";  
        let Ganancia3 = 0.612 * parseInt (cMonto);
        let Total3 = parseInt(cMonto) + Ganancia3; 
        showGanancia.innerText = Ganancia3;   
        showTotal.innerText = Total3;  
        
        break;
   
    default:
        break;
   }

   
}



