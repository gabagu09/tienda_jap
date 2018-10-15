
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
var pCompGame = document.createElement('p');

function obtener_localStorage(clave) {
	var l = localStorage.getItem(clave);
	if(l == null) {
		lista = [];
	}else{
		lista = JSON.parse(l);
	}
	return lista;
}

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
    
}
