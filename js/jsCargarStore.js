
// Defino las variables de todos lo que debo crear para mostrar el juego
var contenedor = document.querySelector('.ctnMain');
var divGame = document.createElement('div');
divGame.className ="divNiv2";
var imgGame = document.createElement('img');
var divInfoGame = document.createElement('div');
divInfoGame.className= "infoGameStore";
var pNameGame = document.createElement('p');
var pPrecioGame = document.createElement('p');
var pDescGame = document.createElement('p');
var butCompra = document.createElement('button');
butCompra.className="butCompra";


var listaJuegos = obtener_localStorage("listaJuegos");
var i;
for(i=0 ; i<listaJuegos.length ; i++){
    var clonDivGame = divGame.cloneNode();
    contenedor.appendChild(clonDivGame);
    var clonImgGame = imgGame.cloneNode();
    clonImgGame.value = listaJuegos[i].img;
    clonDivGame.appendChild(clonImgGame);

    // contenedor.appendChild(clonDivGame);
    var clonDivInfoGame = divInfoGame.cloneNode();
    clonDivGame.appendChild(clonDivInfoGame);

    var clonpNameGame =  pNameGame.cloneNode();
    clonpNameGame.textContent = listaJuegos[i].name;
    clonDivInfoGame.appendChild(clonpNameGame);
    var clonpPrecioGame =  pPrecioGame.cloneNode();
    clonpPrecioGame.textContent ="$" + listaJuegos[i].precio;
    clonDivInfoGame.appendChild(clonpPrecioGame);
    if (listaJuegos[i].descuento !== 0){
        var clonpDescGame =  pDescGame.cloneNode();
        clonpDescGame.textContent ="-" + listaJuegos[i].descuento + "%";
        clonDivInfoGame.appendChild(clonpDescGame);
    }
    var clonButCompra =  butCompra.cloneNode();
    clonButCompra.textContent ="Comprar";
    clonButCompra.setAttribute("id", i);
    // clonButCompra.value = i;
    clonDivInfoGame.appendChild(clonButCompra);
    
}

// Captura el evento clic en el boton 'comprar' de elgun juego de la store
var botones = document.querySelectorAll(".butCompra");
for (var x = 0; x < botones.length; x++) {
    botones[x].onclick = function() {
        // window.alert(this.id);
        var posItem = this.id;
        // window.alert(posItem);
        listaJuegos = obtener_localStorage("listaJuegos");
        var compra = obtener_localStorage("compra");
        var juego={  // Cereo el objeto juego y le inicializo todos sus atributos 
            name : listaJuegos[posItem].name,
            img : listaJuegos[posItem].img,
            categoria : listaJuegos[posItem].categoria,
            descicion : listaJuegos[posItem].descripcion,
            precio : listaJuegos[posItem].precio,
            descuento : listaJuegos[posItem].descuento
        };
        compra.push(juego);
        guardar_localStorage(compra, "compra");
        document.location.href= "compra.html";
    }
    
    // window.open (url:string,nombreVentana:string,caracteristicas :string)
}


//LOCAL STORAGE
// Recibo la "lista" que quiero gurdar en el local storage y el "nombre" con el que voy a guardar
function guardar_localStorage(lista, nombre) {
	localStorage.setItem(nombre, JSON.stringify(lista));
}
//
function obtener_localStorage(clave) {
	var l = localStorage.getItem(clave);
	if(l == null) {
		lista = [];
	}else{
		lista = JSON.parse(l);
	}
	return lista;
}