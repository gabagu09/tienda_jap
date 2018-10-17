var infoGameCompra = document.querySelector('.infoGameCompra');
var pNameGame = document.createElement('p');
var pPrecioGame = document.createElement('p');
var pDescGame = document.createElement('p');

//LOCAL STORAGE
// Recibo la "lista" que quiero gurdar en el local storage y el "nombre" con el que voy a guardar
function guardar_localStorage(lista, nombre) {
	localStorage.setItem(nombre, JSON.stringify(lista));
}
//
function obtener_localStorage(clave) {
	var l = localStorage.getItem(clave);
	if(l == null) {
		lista = [];
	}else{
		lista = JSON.parse(l);
	}
	return lista;
}
// Fin LOCAL STORAGE

var compra = obtener_localStorage("compra");
if (compra.length != 0){
	pNameGame.textContent = compra[compra.length-1].name;
	infoGameCompra.appendChild(pNameGame);
	pPrecioGame.textContent = "$" + compra[compra.length-1].precio;
	infoGameCompra.appendChild(pPrecioGame);
	if (compra[compra.length-1].descuento !== 0){
    	pDescGame.textContent = "-"+ compra[compra.length-1].descuento+"%";
    	infoGameCompra.appendChild(pDescGame);
	}
}
else{
	var mensaje = document.createElement('p');
	mensaje.textContent = "su compra fue cancelada";
	infoGameCompra.appendChild(mensaje);
}


var cancelar = document.querySelector('.cancelar');
cancelar.onclick = function (){
	localStorage.removeItem('compra');
	document.location.href= "games.html";
}

var formatoGame = document.querySelector('#formatoGame');
var datosEnvio = document.querySelector('.datosEnvio');
formatoGame.onchange = function(){
	if (formatoGame.value == "CD/DVD"){
		datosEnvio.style.display = "block";
	}
	else{
		datosEnvio.style.display = "none" ;
	}
}
