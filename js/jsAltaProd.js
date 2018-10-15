

var form = document.querySelector('#formAdminAlta');

form.onsubmit = function altajuego(){
    
    var nombre = document.getElementById('namegame').value;
    var dirImg = document.getElementById('imgport').value;
    var cat = document.getElementById('cat').value;
    var descr = document.getElementById('description').value;
    var precio =document.getElementById('valor').value;
    var desc = document.getElementById('descuento').value;
    if(desc == ""){
        desc = 0;
    }
    var juego={  // Cereo el objeto juego y le inicializo todos sus atributos 
        name : nombre,
        img :dirImg,
        categoria : cat,
        descicion : descr,
        precio :precio,
        descuento : desc
    };
    //obtengo "listaJuegos" del local Storage
    var lista = obtener_localStorage("listaJuegos");  
    // agrego el juego que cree anteriormente a la lista
    lista.push(juego);
    // guardo en el local storage el nuevo juego agregado a la lista 
    guardar_localStorage(lista, "listaJuegos");   
}

/*FUNCIONES LOCALSTORAGE*/

// Recibo la "lista" que quiero gurdar en el local storage y el "nombre" con el que voy a guardar
function guardar_localStorage(lista, nombre) {
	localStorage.setItem(nombre, JSON.stringify(lista));
}

// me devuelve una "lista" del local sotarge pero ya como objeto 
function obtener_localStorage(clave) {
	var l = localStorage.getItem(clave);
	if(l == null) {
		lista = [];
	}else{
		lista = JSON.parse(l);
	}
	return lista;
}