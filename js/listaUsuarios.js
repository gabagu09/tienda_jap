var tabla = document.querySelector('#tablaUsuarios');
var listaUsuarios = obtener_localStorage("listaUsuarios");
var tdNombreU = document.createElement('td');
var tdApellidoU = document.createElement('td');
var tdEmailU = document.createElement('td');
var fila = document.createElement('tr');

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


for(var i=0 ; i<listaUsuarios.length ; i++){
    var clonFila = fila.cloneNode();
    tabla.appendChild(clonFila);

    var clontdNombreU = tdNombreU.cloneNode();
    clontdNombreU.textContent = listaUsuarios[i].nombre;
    clonFila.appendChild(clontdNombreU);

    var clontdApellidoU = tdApellidoU.cloneNode();
    clontdApellidoU.textContent = listaUsuarios[i].apellido;
    clonFila.appendChild(clontdApellidoU);

    var clontdEmailU =  tdEmailU.cloneNode();
    clontdEmailU.textContent = listaUsuarios[i].email;
    clonFila.appendChild(clontdEmailU);

    // var clontdDescGame =  tdDescGame.cloneNode();
    // clontdDescGame.textContent ="-" + listaJuegos[i].descuento + "%";
    // clonFila.appendChild(clontdDescGame);

    // var clonButModificar =  butModificar.cloneNode();
    // clonButModificar.textContent ="modificar";
    // clonButModificar.setAttribute("id", i);
    // clonFila.appendChild(clonButModificar);
}