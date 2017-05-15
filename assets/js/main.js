// entrar a pagina

var boton = document.getElementById('botoncito');
boton.addEventListener("click",entrar);

function entrar(){
  var univeso = document.getElementById("universo");
  var inicio=document.getElementById("conetenedor-general");
  inicio.style.display="none";
  universo.style.display="block";

}
