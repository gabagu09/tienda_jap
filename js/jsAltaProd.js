
 /* Recibir los datos del formuladrio de alta de productos y guardarlos en el local storage*/
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

/* FIN Recibir los datos del formuladrio de alta de productos y guardarlos en el local storage*/

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

/* FIN FUNCIONES LOCALSTORAGE*/

/*Cargar la tebla con info de todos los Juegos que tengo guardados*/

var tabla = document.querySelector('table');
var listaJuegos = obtener_localStorage("listaJuegos");
var tdNameGame = document.createElement('td');
var tdCatGame = document.createElement('td');
var tdPrecioGame = document.createElement('td');
var tdDescGame = document.createElement('td');
var fila = document.createElement('tr');
var butModificar = document.createElement('button');
butModificar.className="butModificar";

for(i=0 ; i<listaJuegos.length ; i++){
    var clonFila = fila.cloneNode();
    tabla.appendChild(clonFila);

    var clontdNameGame = tdNameGame.cloneNode();
    clontdNameGame.textContent=listaJuegos[i].name
    clonFila.appendChild(clontdNameGame);

    var clontdCatGame = tdCatGame.cloneNode();
    clontdCatGame.textContent = listaJuegos[i].categoria;
    clonFila.appendChild(clontdCatGame);

    var clontdPrecioGame =  tdPrecioGame.cloneNode();
    clontdPrecioGame.textContent ="$" + listaJuegos[i].precio;
    clonFila.appendChild(clontdPrecioGame);

    var clontdDescGame =  tdDescGame.cloneNode();
    clontdDescGame.textContent ="-" + listaJuegos[i].descuento + "%";
    clonFila.appendChild(clontdDescGame);

    var clonButModificar =  butModificar.cloneNode();
    clonButModificar.textContent ="modificar";
    clonButModificar.setAttribute("id", i);
    clonFila.appendChild(clonButModificar);
}

/* FIN Cargar la tebla con info de todos los Juegos que tengo guardados */

var botones = document.querySelectorAll(".butModificar");
for (var x = 0; x < botones.length; x++) {
    botones[x].onclick = function() {
        var posItem = this.id;
        listaJuegos = obtener_localStorage("listaJuegos");
        document.getElementById('namegame').value = listaJuegos[posItem].name;
        // document.getElementById('imgport').value = listaJuegos[posItem].img;
        document.getElementById('cat').value= listaJuegos[posItem].categoria;
        document.getElementById('description').value= listaJuegos[posItem].descripcion;
        document.getElementById('valor').value=listaJuegos[posItem].precio;
        document.getElementById('descuento').value=listaJuegos[posItem].descuento;
         
            // name : listaJuegos[posItem].name,
            // img : listaJuegos[posItem].img,
            // categoria : listaJuegos[posItem].categoria,
            // descicion : listaJuegos[posItem].descripcion,
            // precio : listaJuegos[posItem].precio,
            // descuento : listaJuegos[posItem].descuento
        
        // compra.push(juego);
        // guardar_localStorage(listaJuegos, "listaJuegos");
    }
}