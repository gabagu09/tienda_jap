var formSignUp = document.querySelector('#formSignUp');

formSignUp.onsubmit = function(){ 
    var nombre = document.getElementById('name').value;
    // var dirImg = document.getElementById('imgport');
    var apellido = document.getElementById('apel').value;
    var mail = document.getElementById('mail').value;
    var contraseña  =document.getElementById('pass').value;
    if ( !hayUsuario() ){
        var usuario={  // Cereo el objeto juego y le inicializo todos sus atributos 
            nombre : nombre,
            apellido : apellido,
            email : mail,
            contraseña : contraseña,
        };
        var lista = obtener_localStorage("listaUsuarios"); 
        lista.push(usuario);
        guardar_localStorage(lista, "listaUsuarios");
        alert("Bienvenido");
    }
    else{
        alert("el usuario ya existe"); 
    }
             
}

function hayUsuario(){
    var lista = obtener_localStorage("listaUsuarios");
    var mail = document.getElementById('mail').value;
    // var contraseña  =document.getElementById('pass').value;
    var encontre = false;
    var i = 0;
    while(!encontre && (i<lista.length)){
        if(mail == lista[i].email){
             encontre = true;
        }
        else{
            i++;
        }
    }
    return encontre;
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
