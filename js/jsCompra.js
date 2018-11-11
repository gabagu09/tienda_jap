
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
// Fin LOCAL STORAGE ds

//Cargar los datos del producto que voy a Comprar

var infoGameCompra = document.querySelector('.infoGameCompra');
var pNameGame = document.createElement('p');
// var pPrecioGame = document.createElement('p');
var pDescGame = document.createElement('p');

var compra = obtener_localStorage("compra");
var listaJuegos = obtener_localStorage("listaJuegos");
if (compra.length != 0){
	pNameGame.textContent = "Titulo: "+ " " + listaJuegos[compra[0]].name;
	infoGameCompra.appendChild(pNameGame);
	// pPrecioGame.textContent = "Valor: "+ " " +"$" + listaJuegos[compra[0]].precio;
	// infoGameCompra.appendChild(pPrecioGame);
	if (listaJuegos[compra[0]].descuento !== 0){
    	pDescGame.textContent = "El SUPER Descuento "+"-"+ listaJuegos[compra[0]].descuento+"%";
    	infoGameCompra.appendChild(pDescGame);
	}
}
else{
	var mensaje = document.createElement('p');
	mensaje.textContent = "Su compra fue cancelada con exito";
	infoGameCompra.appendChild(mensaje);
}

// FIN Cargar los datos del producto que voy a Comprar


var cancelar = document.querySelector('.cancelar');
cancelar.onclick = function (){
	localStorage.removeItem('compra');
	document.location.href= "games.html";
}

var pPrecioGame = document.createElement('p');
var inputCantJuegos = document.querySelector('#cantItems');
var cantJuegos = inputCantJuegos.value;
var preSumaItems = Number(listaJuegos[compra[0]].precio) * cantJuegos;
pPrecioGame.textContent = "Valor: "+ " " +"$" + preSumaItems;
infoGameCompra.appendChild(pPrecioGame);

// onkeyup
inputCantJuegos.onchange = function(){
	cantJuegos = inputCantJuegos.value;
	preSumaItems = Number(listaJuegos[compra[0]].precio) * cantJuegos;
	pPrecioGame.textContent = "Valor: "+ " " +"$" + preSumaItems;
	
}




var infoCostos = document.querySelector('.infoCostos');
var pConEnv = document.createElement('p');
var conEnv;
var formatoGame = document.querySelector('#formatoGame');
var datosEnvio = document.querySelector('.datosEnvio');
formatoGame.onchange = function(){
	if (formatoGame.value == "CD/DVD"){
		datosEnvio.style.display = "block";
		var dirEnv = document.querySelector('#dirEnvio');
		dirEnv.setAttribute("required", true);
	}
	else{
		datosEnvio.style.display = "none" ;
		
	}
}

//JDSHJKHDHKHFGDSKFGDSK
var pConDesc = document.createElement('p');
var conDesc = (Number(listaJuegos[compra[0]].precio) - (Number(listaJuegos[compra[0]].precio) * (Number(listaJuegos[compra[0]].descuento)/100)));
pConDesc.textContent = "Precio - Descuento=  $" + conDesc ;
infoCostos.appendChild(pConDesc);

var tipoEnvio = document.querySelector('#tipoEnvio');
var pMasIVA = document.createElement('p');
// var pConEnv = document.createElement('p');

tipoEnvio.onchange = function(){
	if (tipoEnvio.value == "comun"){
		conEnv = (conDesc + (conDesc * (0.5 /100)));
		pConEnv.textContent = "(Precio-descuento)+  Envio=  $" + Math.round(conEnv);
		infoCostos.appendChild(pConEnv);
	}
	else if (tipoEnvio.value == "especial"){
		conEnv = (conDesc + (conDesc * (2/100)));
		pConEnv.textContent = "(Precio-descuento)+  Envio=  $" +  Math.round(conEnv);
		infoCostos.appendChild(pConEnv);
	}
	else{
		conEnv = (conDesc + (conDesc * (5/100)))
		pConEnv.textContent = "(Precio-descuento)+  Envio=  $" +  Math.round(conEnv);
		infoCostos.appendChild(pConEnv);
	}
	var masIVA = conEnv +(conEnv * 0,22);
	pMasIVA.textContent ="(Precio-descuento)+ Envio + IVA=  $" +  Math.round(masIVA);
	infoCostos.appendChild(pMasIVA);
}

	// var pMasIVA = document.createElement('p');
	// var masIVA = conEnv +(conEnv * 0,22);
	// pMasIVA.textContent ="(Precio-descuento) + IVA=  $" + masIVA;
	// infoCostos.appendChild(pMasIVA);


	// var juego = [ objjuego1 , obrj2 , hdasshdhdsfhhsdf]GFDGFD