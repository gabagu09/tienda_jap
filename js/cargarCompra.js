var juegos = dataJuegos;
var compra = obtener_sessionStorage("compra");

//Cargar los datos del producto que voy a Comprar

var infoGameCompra = document.querySelector('.infoGameCompra');
var pNameGame = document.createElement('p');
// var pPrecioGame = document.createElement('p');
var pDescGame = document.createElement('p');
var pPrecioUnidad = document.createElement('p');

// Cargar 
var tabla = document.querySelector('table');
var tdValorUnidad = document.createElement('td');
var tdValorCompra = document.createElement('td');
var tdValorDescuentos = document.createElement('td');
var tdValorImpuestos = document.createElement('td');
var tdValorEnvio = document.createElement('td');
var tdValorTotal = document.createElement('td');
var fila = document.createElement('tr');

tabla.appendChild(fila);

tdValorUnidad.textContent = juegos[compra[0]].precio
fila.appendChild(tdValorUnidad);
tdValorCompra.textContent = juegos[compra[0]].precio
fila.appendChild(tdValorCompra);
tdValorDescuentos.textContent = calcularDescuento(juegos[compra[0]].precio, juegos[compra[0]].descuento)
fila.appendChild(tdValorDescuentos);

tdValorImpuestos.textContent = calcularMasIVA(calcularDescuento(juegos[compra[0]].precio, juegos[compra[0]].descuento)).toFixed(2);
fila.appendChild(tdValorImpuestos);

tdValorEnvio.textContent = "No corresponde";
fila.appendChild(tdValorEnvio);

tdValorTotal.textContent = calcularMasIVA(calcularDescuento(juegos[compra[0]].precio, juegos[compra[0]].descuento)).toFixed(2);
fila.appendChild(tdValorTotal);

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
pPrecioGame.textContent = "Valor por " + cantJuegos + " unidad/es con descuento: " + " " +"$" + calcularDescuento(preSumaItems,juegos[compra[0]].descuento) ;
infoGameCompra.appendChild(pPrecioGame);

var preSumaItemsDescuentoIva = calcularMasIVA(calcularDescuento(juegos[compra[0]].precio, juegos[compra[0]].descuento)).toFixed(2)




// Se asocia la funcion mostrarPrecio a eventos en inputCantJuegos
inputCantJuegos.addEventListener('change',mostrarPrecio);
inputCantJuegos.addEventListener('keyup',mostrarPrecio);

// Calcula e Imprime el valor de la Compra teniendo en cuenta la cantidad de items que quiero comprar
// se imprime el valor de: la suma de los items, la sumas de estos teniendo en cuenta el descuento y luego teniendo en cuena el IVA
function mostrarPrecio(){
	cantJuegos = inputCantJuegos.value;
	preSumaItems = Number(precio(compra[0])) * cantJuegos;

	pPrecioGame.textContent = "Valor por " + cantJuegos + " unidad/es con descuento: " + " " +"$" + calcularDescuento(preSumaItems,juegos[compra[0]].descuento);
	tdValorCompra.textContent = preSumaItems; 

	var preSumaItemsDescuento = calcularDescuento(preSumaItems,juegos[compra[0]].descuento)
	tdValorDescuentos.textContent = preSumaItemsDescuento;

	var preSumaItemsDescuentoIva = calcularMasIVA(preSumaItemsDescuento);
	tdValorImpuestos.textContent =preSumaItemsDescuentoIva;

	tdValorTotal.textContent =preSumaItemsDescuentoIva;

	tipo(preSumaItemsDescuentoIva,cantJuegos); ////
}
// FIN MOSTRAR EL VALOR DE LA COMPRA



//Formto del Juego
var infoCostos = document.querySelector('.infoCostos');
var pConEnv = document.createElement('p');
var conEnv;
var inputFormatoGame = document.querySelector('#formatoGame');
var datosEnvio = document.querySelector('.datosEnvio');

inputFormatoGame.onchange = function(){
	if (formatoGame.value == "CD/DVD"){
		datosEnvio.style.display = "block";
		var dirEnv = document.querySelector('#dirEnvio');
		dirEnv.setAttribute("required", true);
		tipo(preSumaItemsDescuentoIva, inputCantJuegos.value);
	}
	else{
		datosEnvio.style.display = "none";
		tdValorEnvio.textContent = "No corresponde";
		mostrarPrecio();
		infoCostos.removeChild(pConEnv);
	}
}

var tipoEnvio = document.querySelector('#tipoEnvio');


tipoEnvio.addEventListener('change', tipo);

function tipo(subTotal, cantidad){
	cantidad = inputCantJuegos.value;
	preSumaItems = Number(precio(compra[0])) * cantidad;
	var preSumaItemsDescuento = calcularDescuento(preSumaItems,juegos[compra[0]].descuento)
	var preSumaItemsDescuentoIva = calcularMasIVA(preSumaItemsDescuento);
	// if(subTotal == -1){
		subTotal = preSumaItemsDescuentoIva;
	// }
	var conEnv;
	if(datosEnvio.style.display == "block"){
		if (tipoEnvio.value == "comun + 0,5%"){
			// mostrarPrecio();

			conEnv = calcularAumento(subTotal, 0.5);
			conEnv =conEnv.toFixed(2);
			pConEnv.textContent = "Precio total +  Envio=  $" + conEnv;

			tdValorEnvio.textContent = conEnv;
		}
		else if (tipoEnvio.value == "especial + 2%"){
			// mostrarPrecio();
			conEnv = calcularAumento(subTotal, 2);
			conEnv =conEnv.toFixed(2);
			pConEnv.textContent = "Precio total +  Envio=  $" + conEnv;
			tdValorEnvio.textContent = conEnv;
		}
		else{
			// mostrarPrecio();
			conEnv = calcularAumento(subTotal, 5);
			conEnv =conEnv.toFixed(2);
			pConEnv.textContent = "Precio total +  Envio=  $" +  conEnv;
			tdValorEnvio.textContent = conEnv;
		}
		infoCostos.appendChild(pConEnv);
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