var formSignIn = document.querySelector('#formSignIn');

formSignIn.onsubmit = function(){
    var lista = obtener_localStorage("listaUsuarios");
    var mail = document.getElementById('mail').value;
    var contraseña  =document.getElementById('pass').value;
    var encontre = false;
    var i = 0;
    while(!encontre && (i<lista.length)){
        if(mail == lista[i].email){
            if (contraseña == lista[i].contraseña){
                encontre = true;
            }
        }
        else{
            i++;
        }
    }
    if(encontre){
        alert("Bienvenido");
    }
    else{
        alert("La contrasela o el usuario son incorrectos"); 
    }
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

/* FIN FUNCIONES LOCALSTORAGE*/