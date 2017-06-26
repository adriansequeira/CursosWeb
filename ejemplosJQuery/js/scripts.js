//$("p").hide();
/*$(document).ready(function(){ // se espera a que el dom esté listo y entonces ejecuta la funcion
	$("p").hide(); //asi no hay que llamar el scripts.js al final del documento
})
 
$(function(){ //esta es una forma abreviada al document.ready anterior
	$("p").hide();
})


$("p")
.addClass("info")
.css("color","red");


$(".dos") //recorriendo el dom para seleccionar elemento
.siblings()
.andSelf()
.css("color","red");

var $p = $("p");

$("button").on("click",function(){
	$p.css("color","red");
})


$("p").on("click",function(){ //al hacer clic en el parrafo lo pinta de rojo
	$(this).css("color","red");
})

$("button")
.on("mouseenter",function(){
	$p.css("color","red");
}).on("mouseleave",function(){
	$p.css("color","initial");
})*/

var $p = $("p");

$("button").on("click",function(){
	$p.attr("id","mensaje");
})

function cambiar() {

    document.getElementById("uno").innerHTML = "Adiós!";
    }