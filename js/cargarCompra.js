var juegos = dataJuegos;
var compra = obtener_sessionStorage("compra");

// Crear Los elementos donde voy a mostrar info sobre el juego que estoy por comprar

var infoGameCompra = document.querySelector('.infoGameCompra');
var pNameGame = document.createElement('p');
var pDescGame = document.createElement('p');
var pPrecioUnidad = document.createElement('p');

// Crear Los elementos de la tabla donde voy a mostrar la info de la compra
var tabla = document.querySelector('table');
var tdValorUnidad = document.createElement('td');
var tdValorCompra = document.createElement('td');
var tdValorDescuentos = document.createElement('td');
var tdValorImpuestos = document.createElement('td');
var tdValorEnvio = document.createElement('td');
var tdValorTotal = document.createElement('td');
var fila = document.createElement('tr');

tabla.appendChild(fila);

if (compra.length != 0){
	pNameGame.textContent = "Titulo: "+ " " + juegos[compra[0]].titulo;
	infoGameCompra.appendChild(pNameGame);
	pPrecioUnidad.textContent = "Valor por unidad: "+ " " +"$" + juegos[compra[0]].precio;
	infoGameCompra.appendChild(pPrecioUnidad);
	if (juegos[compra[0]].descuento !== 0){
    	pDescGame.textContent = "El SUPER Descuento "+"-"+ juegos[compra[0]].descuento +"%";
    	infoGameCompra.appendChild(pDescGame);
	}

	tdValorUnidad.textContent = juegos[compra[0]].precio
	fila.appendChild(tdValorUnidad);
	tdValorCompra.textContent = juegos[compra[0]].precio;
	fila.appendChild(tdValorCompra);
	tdValorDescuentos.textContent = calcularDescuento(juegos[compra[0]].precio, juegos[compra[0]].descuento)
	fila.appendChild(tdValorDescuentos);

	tdValorImpuestos.textContent = calcularMasIVA(calcularDescuento(juegos[compra[0]].precio, juegos[compra[0]].descuento)).toFixed(2);
	fila.appendChild(tdValorImpuestos);

	tdValorEnvio.textContent = "No corresponde";
	fila.appendChild(tdValorEnvio);

	tdValorTotal.textContent = calcularMasIVA(calcularDescuento(juegos[compra[0]].precio, juegos[compra[0]].descuento)).toFixed(2);
	fila.appendChild(tdValorTotal);
}
else{
	var mensaje = document.createElement('p');
	mensaje.textContent = "Su compra fue cancelada con exito";
    infoGameCompra.appendChild(mensaje);
	document.location.href= "store.html";
	tabla.removeChild(fila);
}

// FIN Cargar los datos del producto que voy a Comprar

var cancelar = document.querySelector('.cancelar');
cancelar.onclick = function (){
	sessionStorage.removeItem('compra');
}

// MOSTRAR EL VALOR DE LA COMPRA

var inputCantJuegos = document.querySelector('#cantItems');
var cantJuegos = inputCantJuegos.value;
var preSumaItems = Number(juegos[compra[0]].precio) * cantJuegos;
var preSumaItemsDescuentoIva = calcularMasIVA(calcularDescuento(juegos[compra[0]].precio, juegos[compra[0]].descuento)).toFixed(2)


// Se asocia la funcion mostrarPrecio a eventos en inputCantJuegos
inputCantJuegos.addEventListener('change',mostrarPrecio);
inputCantJuegos.addEventListener('keyup',mostrarPrecio);

// Calcula e Imprime el valor de la Compra teniendo en cuenta la cantidad de items que quiero comprar
// se imprime el valor de: la suma de los items, la sumas de estos teniendo en cuenta el descuento y luego teniendo en cuena el IVA
function mostrarPrecio(){
	cantJuegos = inputCantJuegos.value;
	preSumaItems = Number(precio(compra[0])) * cantJuegos;

	tdValorCompra.textContent = preSumaItems; 

	var preSumaItemsDescuento = calcularDescuento(preSumaItems,juegos[compra[0]].descuento).toFixed(2);
	tdValorDescuentos.textContent = preSumaItemsDescuento;

	var preSumaItemsDescuentoIva = calcularMasIVA(preSumaItemsDescuento).toFixed(2);
	tdValorImpuestos.textContent =preSumaItemsDescuentoIva;

	tdValorTotal.textContent =preSumaItemsDescuentoIva;

	tipo(preSumaItemsDescuentoIva,cantJuegos); ////
}

// FIN MOSTRAR EL VALOR DE LA COMPRA



//Formto del Juego
var infoCostos = document.querySelector('.infoCostos');
var conEnv;
var inputFormatoGame = document.querySelector('#formatoGame');
var datosEnvio = document.querySelector('.datosEnvio');
var dirEnv = document.querySelector('#dirEnvio');

inputFormatoGame.onchange = function(){
	if (formatoGame.value == "CD/DVD"){
		datosEnvio.style.display = "block";
		
		dirEnv.setAttribute("required", true);
		tipo(preSumaItemsDescuentoIva, inputCantJuegos.value);
	}
	else{
		
		dirEnv.setAttribute("required", false);
		datosEnvio.style.display = "none";
		tdValorEnvio.textContent = "No corresponde";
		mostrarPrecio();
	}
}

var tipoEnvio = document.querySelector('#tipoEnvio');


tipoEnvio.addEventListener('change', tipo);

function tipo(subTotal, cantidad){
	cantidad = inputCantJuegos.value;
	preSumaItems = Number(precio(compra[0])) * cantidad;
	var preSumaItemsDescuento = calcularDescuento(preSumaItems,juegos[compra[0]].descuento)
	var preSumaItemsDescuentoIva = calcularMasIVA(preSumaItemsDescuento);
	subTotal = preSumaItemsDescuentoIva;
	var conEnv;
	if(datosEnvio.style.display == "block"){
		if (tipoEnvio.value == "comun + 0,5%"){
			conEnv = calcularAumento(subTotal, 0.5);
			conEnv =conEnv.toFixed(2);
			tdValorEnvio.textContent = conEnv;
		}
		else if (tipoEnvio.value == "especial + 2%"){
			conEnv = calcularAumento(subTotal, 2);
			conEnv =conEnv.toFixed(2);
			tdValorEnvio.textContent = conEnv;
		}
		else{
			conEnv = calcularAumento(subTotal, 5);
			conEnv =conEnv.toFixed(2);
			tdValorEnvio.textContent = conEnv;
		}
		tdValorTotal.textContent = conEnv;
	}
}

// FIN Calcular el Valor de la compra con el tipo de envio


function calcularDescuento(valor, descuento){
	return Number(valor) - (Number(valor) * (descuento / 100));
}

function calcularAumento(valor, aumento){
	return Number(valor) + (Number(valor) * (aumento / 100));
}

function calcularMasIVA(valor){
	return Number(valor) + (Number(valor) * (22 / 100))
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

// alert(posItemData + "cargarCompra");