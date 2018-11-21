var juegos = dataJuegos;
var compra = obtener_sessionStorage("compra");


// Mostrar la imagen de portada del juego
var contImagen = document.querySelector('.imagegame');
var imagen = document.createElement('img');
imagen.setAttribute('src', "../" + juegos[compra[0]].imagen);
contImagen.appendChild(imagen);
// FIN Mostrar la imagen de portada del juego


// Mostrar la datos generales del juego
var infoGame = document.querySelector('.infoGralgame')
var pTituloJuego = document.createElement('p');
var pGeneroJuego = document.createElement('p');
var pPrecioJuego = document.createElement('p');
var pDescuentoJuego = document.createElement('p');
var pDescripcionJuego = document.createElement('p');

pTituloJuego.textContent = juegos[compra[0]].titulo;
infoGame.appendChild(pTituloJuego);

pGeneroJuego.textContent = juegos[compra[0]].categoria;
infoGame.appendChild(pGeneroJuego);

pPrecioJuego.textContent = "$" + juegos[compra[0]].precio;
infoGame.appendChild(pPrecioJuego);

if ((juegos[compra[0]].descuento !== 0) && (juegos[compra[0]].descuento !== "0") ){
	pDescuentoJuego.textContent ="-" + juegos[compra[0]].descuento + "%";
	infoGame.appendChild(pDescuentoJuego);
}

pDescripcionJuego.textContent = "Descripción: "+ juegos[compra[0]].descripcion;
infoGame.appendChild(pDescripcionJuego);
// FIN Mostrar la datos generales del juego

// Boton de Compra
var butCompra =  document.createElement('button');
butCompra.textContent ="Comprar";
butCompra.className="butCompra";
butCompra.setAttribute("id", compra[0]);
infoGame.appendChild(butCompra); 

var posItem;

var capturabutCompra = document.querySelector('.butCompra');
capturabutCompra.onclick = function(){
	posItem = this.id;
	var compra = obtener_sessionStorage("compra");
	if (compra != null){
		compra = borrar_sessionStorage('compra');
		compra = obtener_sessionStorage('compra');
	}
	compra.push(posItem);
	guardar_sessionStorage(compra, "compra");
	document.location.href= "compra.html";
}
// Fin Boton de Compra


// CARGAR iMAGENES EXTRA 

var divImagenesExtra = document.querySelector('.imagenesExtra');
var imagenExtra = document.createElement('img');

var listaImagenesExtra = juegos[compra[0]].imgExtra;

function mostrarImagenesExtra(){
    for( var i=0 ; i<listaImagenesExtra.length ; i++){
        var clonImagenExtra = imagenExtra.cloneNode();
		// clonImagenExtra.setAttribute("src", listaImagenesExtra[i]);
		// clonImagenExtra.setAttribute("class", 'imgExt');
		clonImagenExtra.src = "../" + listaImagenesExtra[i];
		clonImagenExtra.className = "imgExt";
        divImagenesExtra.appendChild(clonImagenExtra);		
	}
}

mostrarImagenesExtra();

// FIN CARGAR iMAGENES EXTRA 


//SESSION STORAGE
// Recibo la "lista" que quiero gurdar en el local storage y el "nombre" con el que voy a guardar
function guardar_sessionStorage(lista, nombre) {
	sessionStorage.setItem(nombre, JSON.stringify(lista));
}
//
function obtener_sessionStorage(clave) {
	var l = sessionStorage.getItem(clave);
	if(l == null) {
		lista = [];
	}else{
		lista = JSON.parse(l);
	}
	return lista;
}

function borrar_sessionStorage(clave){
    sessionStorage.removeItem(clave);
}

