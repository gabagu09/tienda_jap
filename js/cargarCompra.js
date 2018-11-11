var juegos = dataJuegos;


//Cargar los datos del producto que voy a Comprar

var infoGameCompra = document.querySelector('.infoGameCompra');
var pNameGame = document.createElement('p');
// var pPrecioGame = document.createElement('p');
var pDescGame = document.createElement('p');
var pPrecioUnidad = document.createElement('p');

var compra = obtener_sessionStorage("compra");
if (compra.length != 0){
	pNameGame.textContent = "Titulo: "+ " " + juegos[compra[0]].titulo;
	infoGameCompra.appendChild(pNameGame);
	pPrecioUnidad.textContent = "Valor por unidad: "+ " " +"$" + juegos[compra[0]].precio;
	infoGameCompra.appendChild(pPrecioUnidad);
	if (juegos[compra[0]].descuento !== 0){
    	pDescGame.textContent = "El SUPER Descuento "+"-"+ juegos[compra[0]].descuento +"%";
    	infoGameCompra.appendChild(pDescGame);
	}
}
else{
	var mensaje = document.createElement('p');
	mensaje.textContent = "Su compra fue cancelada con exito";
    infoGameCompra.appendChild(mensaje);
    document.location.href= "store.html";
}

// FIN Cargar los datos del producto que voy a Comprar

var cancelar = document.querySelector('.cancelar');
cancelar.onclick = function (){
	sessionStorage.removeItem('compra');
	// document.location.href= "store.html";
}

// MOSTRAR EL VALOR DE LA COMPRA
var pPrecioGame = document.createElement('p');
var inputCantJuegos = document.querySelector('#cantItems');
var cantJuegos = inputCantJuegos.value;
var preSumaItems = Number(juegos[compra[0]].precio) * cantJuegos;
pPrecioGame.textContent = "Valor por " + cantJuegos + " unidad/es: " + " " +"$" + calcularDescuento(preSumaItems,juegos[compra[0]].descuento) ;
infoGameCompra.appendChild(pPrecioGame);

// onkeyup
//onchange
inputCantJuegos.addEventListener('change',mostrarPrecio);
inputCantJuegos.addEventListener('keyup',mostrarPrecio);
function mostrarPrecio(){
	cantJuegos = inputCantJuegos.value;
	preSumaItems = Number(precio(compra[0])) * cantJuegos;
	pPrecioGame.textContent = "Valor por " + cantJuegos + " unidad/es: " + " " +"$" + calcularDescuento(preSumaItems,juegos[compra[0]].descuento);
	IVA();
}
// FIN MOSTRAR EL VALOR DE LA COMPRA

//Formto del Juego
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
		tipo();
	}
	else{
		datosEnvio.style.display = "none" ;
		infoCostos.removeChild(pConEnv);
	}
}

// Calcular el Valor de la compra con IVA

var masIVA = calcularAumento(calcularDescuento(preSumaItems,juegos[compra[0]].descuento), 22);	
masIVA =masIVA.toFixed(2);
function IVA(){	
	masIVA = calcularAumento(calcularDescuento(preSumaItems,juegos[compra[0]].descuento), 22);
	masIVA =masIVA.toFixed(2);
	pMasIVA.textContent = "Valor por " + cantJuegos + " unidad/es + IVA: " + " " +"$" + masIVA ;
}	
var pMasIVA = document.createElement('p');
infoGameCompra.appendChild(pMasIVA);

IVA();
// FIN Calcular el Valor de la compra con IVA

// Calcular el Valor de la compra con el tipo de envio

var tipoEnvio = document.querySelector('#tipoEnvio');


tipoEnvio.addEventListener('change', tipo);
function tipo(){
	var conEnv;
	if (tipoEnvio.value == "comun"){
		conEnv = calcularAumento(masIVA, 0.5);
		conEnv =conEnv.toFixed(2);
		pConEnv.textContent = "Precio total +  Envio=  $" + conEnv;
		
	}
	else if (tipoEnvio.value == "especial"){
		conEnv = calcularAumento(masIVA, 2);
		conEnv =conEnv.toFixed(2);
		pConEnv.textContent = "Precio total +  Envio=  $" + conEnv;
		
	}
	else{
		conEnv = calcularAumento(masIVA, 5);
		conEnv =conEnv.toFixed(2);
		pConEnv.textContent = "Precio total +  Envio=  $" +  conEnv;
		
	}
	infoCostos.appendChild(pConEnv);
}

// FIN Calcular el Valor de la compra con el tipo de envio


function calcularDescuento(valor, descuento){
	return Number(valor) - (Number(valor) * (descuento / 100))
}

function calcularAumento(valor, aumento){
	return Number(valor) + (Number(valor) * (aumento / 100))
}











//LOCAL STORAGE
// Recibo la "lista" que quiero gurdar en el local storage y el "nombre" con el que voy a guardar
function guardar_sessionStorage(lista, nombre) {
	sessionStorage.setItem(nombre, JSON.stringify(lista));
}

function obtener_sessionStorage(clave) {
	var l = sessionStorage.getItem(clave);
	if(l == null) {
		lista = [];
	}else{
		lista = JSON.parse(l);
	}
	return lista;
}