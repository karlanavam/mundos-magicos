var modal = document.getElementsByClassName("modal")[0];

var modal2 = document.getElementsByClassName("parrafo")[0];

modal.addEventListener("click",siguiente);
document.getElementById("seleccion1").addEventListener("change",myFunction)

function siguiente(){
    modal.className = "parrafo";
    modal2.className = "modal2";
}

function myFunction() {

    
    var algo =document.getElementById("seleccion1").value ;
    
    if(algo == "coche"){
        var algo2 = document.getElementById("oculto");
        console.log(algo2);
        algo2.id ="select2";var algo3 = document.getElementsByClassName("ocultacion")[0].style.display = "none";
        document.getElementById("seleccion1").disabled="disabled";
        
        document.getElementsByTagName("span")[0].innerText = "¿Ahora que hacemos?";
        
    } else{
        var algo3 = document.getElementsByClassName("ocultacion")[0].style.display = "block"
    }
   
    
}