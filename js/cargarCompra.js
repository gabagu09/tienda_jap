var juegos = [ 
    {   "name": "gtaV",
        "img": "image/gta-portada.jpg",
        "precio" : "12",
        "descuento" : "10",
        "descripcion": "ajdkdgfkd",
        "categoria": "action",
        "imgExtra" : ["image/gtaV-1.jpg","image/gtaV-2.jpg"]
    },
    {   "name": "Fornite",
        "img": "image/Fornite.jpg",
        "precio" : "12",
        "descuento" : "10",
        "descripcion": "ajdkdgfkd",
        "categoria": "action",
        "imgExtra" : []
    },
    {   "name": "Minecraft",
        "img": "image/minecraft.jpg",
        "precio" : "12",
        "descuento" : "10",
        "descripcion": "ajdkdgfkd",
        "categoria": "adventure",
        "imgExtra" : []
    },
    {   "name": "Fifa 19",
        "img": "image/Fifa19.jpg",
        "precio" : "12",
        "descuento" : "10",
        "descripcion": "ajdkdgfkd",
        "categoria": "sports",
        "imgExtra" : []
    },
    {   "name": "Pes 19",
        "img": "image/Pes19.jpg",
        "precio" : "12",
        "descuento" : "10",
        "descripcion": "ajdkdgfkd",
        "categoria": "sports",
        "imgExtra" : []
    }, 
    {   "name": "The Forest",
        "img": "image/TheForest.jpg",
        "precio" : "12",
        "descuento" : "0",
        "descripcion": "ajdkdgfkd",
        "categoria": "adventure",
        "imgExtra" : []
    },
    {   "name": "The Witcher 3",
        "img": "image/theWitcher3.jpg",
        "precio" : "12",
        "descuento" : "0",
        "descripcion": "ajdkdgfkd",
        "categoria": "rpg",
        "imgExtra" : []
    },
]



//LOCAL STORAGE
// Recibo la "lista" que quiero gurdar en el local storage y el "nombre" con el que voy a guardar
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

//Cargar los datos del producto que voy a Comprar

var infoGameCompra = document.querySelector('.infoGameCompra');
var pNameGame = document.createElement('p');
// var pPrecioGame = document.createElement('p');
var pDescGame = document.createElement('p');

var compra = obtener_localStorage("compra");
if (compra.length != 0){
	pNameGame.textContent = "Titulo: "+ " " + juegos[compra[0]].name;
	infoGameCompra.appendChild(pNameGame);
	// pPrecioGame.textContent = "Valor: "+ " " +"$" + listaJuegos[compra[0]].precio;
	// infoGameCompra.appendChild(pPrecioGame);
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
	localStorage.removeItem('compra');
	// document.location.href= "store.html";
}