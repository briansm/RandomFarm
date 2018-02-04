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
  if(fond.loadOk==true){
    papel.drawImage(fond.imagen,0,0);
  }
  if(cerdo.loadOk==true){
    for(var v=0;v<4;v++){
    var x=randm(0,420);
    var y=randm(0,420);
    papel.drawImage(cerdo.imagen,x,y);
    }
  }
  if(pollo.loadOk==true){
    for(var v=0;v<10;v++){
    var x=randm(0,420);
    var y=randm(0,420);
    papel.drawImage(pollo.imagen,x,y);
      }
    }
  if(vaca.loadOk==true){
    var x=randm(0,420);
    var y=randm(0,420);
    papel.drawImage(vaca.imagen,x,y);

    }
}
