//Cargar canvas
var gr=document.getElementById("lienzo");
var papel=gr.getContext("2d");

// Crear objetos
var fond={
  url:"tile.png",
  loadOk: false
}
var cerdo={
  url:"cerdo.png",
  loadOk: false
}
var pollo={
  url:"pollo.png",
  loadOk:false
}
var vaca={
  url:"vaca.png",
  loadOk:false
}

//funcion aleatorio
function randm(min,max){
  var res=Math.floor(Math.random()*(max-min+1))+min;
  return res;
}
