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

//objetos
fond.imagen=new Image();
fond.imagen.src=fond.url;
fond.imagen.addEventListener("load",dibfondo);

cerdo.imagen=new Image();
cerdo.imagen.src=cerdo.url;
cerdo.imagen.addEventListener("load",dibcerdo);

pollo.imagen=new Image();
pollo.imagen.src=pollo.url;
pollo.imagen.addEventListener("load",dibpollo);

vaca.imagen=new Image();
vaca.imagen.src=vaca.url;
vaca.imagen.addEventListener("load",dibvaca);

//funciones carga de imagenes
function dibfondo(){
  fond.loadOk=true;
  dibujar();
}
function dibcerdo(){
  cerdo.loadOk=true;
  dibujar();
}
function dibpollo(){
  pollo.loadOk=true;
  dibujar();
}
function dibvaca(){
  vaca.loadOk=true;
  dibujar();
}


//funcion dibujar
function dibujar(){

}
