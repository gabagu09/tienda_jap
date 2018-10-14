

 var form = document.querySelector('#formAdminAlta');

form.onsubmit = function altajuego(){
    
    var nombre = document.getElementById('namegame').value;
    var dirImg = document.getElementById('imgport').value;
    var cat = document.getElementById('cat').value;
    var descr = document.getElementById('description').value;
    var precio =document.getElementById('valor').value;
    var juego={
        name : nombre,
        img :dirImg,
        categoria : cat,
        descicion : descr,
        precio :precio
    };
   
    var lista = obtener_localStorage("c");   
     lista.push(juego);
     guardar_localStorage(lista, "c");   
}

/*FUNCIONES LOCALSTORAGE*/
function guardar_localStorage(lista, nombre) {
	localStorage.setItem(nombre, JSON.stringify(lista));
}

function obtener_localStorage(clave) {
	var l = localStorage.getItem(clave);
	if(l == null) {
		lista = [];
	}else{
		lista = JSON.parse(l);
	}
	return lista;
}