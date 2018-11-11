var juegos = dataJuegos;

var contImagen = document.querySelector('.imagegame');
var imagen = document.createElement('img');

var compra = obtener_sessionStorage("compra");
imagen.setAttribute('src',juegos[compra[0]].imagen);
contImagen.appendChild(imagen);


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

