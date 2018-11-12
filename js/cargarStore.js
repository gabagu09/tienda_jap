var juegos = dataJuegos;

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

//La primera vez que cargo store muestro todos los juegos
function mostrarTodos(){
    for( var i=0 ; i<juegos.length ; i++){
        var clonDivGame = divGame.cloneNode();
        clonDivGame.setAttribute("id", i);
        contenedor.appendChild(clonDivGame);
        var clonImgGame = imgGame.cloneNode();
        clonImgGame.src = juegos[i].imagen;
        clonDivGame.appendChild(clonImgGame);
    
        var clonDivInfoGame = divInfoGame.cloneNode();
        clonDivGame.appendChild(clonDivInfoGame);

        var clonpNameGame =  pNameGame.cloneNode();
        clonpNameGame.textContent = juegos[i].titulo;
        clonDivInfoGame.appendChild(clonpNameGame);
        var clonpPrecioGame =  pPrecioGame.cloneNode();
        clonpPrecioGame.textContent ="$" + juegos[i].precio;
        clonDivInfoGame.appendChild(clonpPrecioGame);
        if ((juegos[i].descuento !== 0) && (juegos[i].descuento !== "0") ){
            var clonpDescGame =  pDescGame.cloneNode();
            clonpDescGame.textContent ="-" + juegos[i].descuento + "%";
            clonDivInfoGame.appendChild(clonpDescGame);
        }
        var clonButCompra =  butCompra.cloneNode();
        clonButCompra.textContent ="Comprar";
        clonButCompra.setAttribute("id", i);
        clonDivInfoGame.appendChild(clonButCompra);   
    }
}
mostrarTodos();


function actualizarIndex(){
	var lista = document.querySelector(".ctnMain");
	while (lista.hasChildNodes()) 
   		lista.removeChild(lista.firstChild);
} 

//Recibo una categoria y muestro todos los juegos que corresponden esa categoria
function mostrarCategoria(cat){
    actualizarIndex();
    for( var i=0 ; i<juegos.length ; i++){
        if (juegos[i].categoria == cat.id){
            var clonDivGame = divGame.cloneNode();
            clonDivGame.setAttribute("id", i);
            contenedor.appendChild(clonDivGame);
            var clonImgGame = imgGame.cloneNode();
            clonImgGame.src = juegos[i].imagen;
            clonDivGame.appendChild(clonImgGame);
        
            var clonDivInfoGame = divInfoGame.cloneNode();
            clonDivGame.appendChild(clonDivInfoGame);
        
            var clonpNameGame =  pNameGame.cloneNode();
            clonpNameGame.textContent = juegos[i].titilo;
            clonDivInfoGame.appendChild(clonpNameGame);
            var clonpPrecioGame =  pPrecioGame.cloneNode();
            clonpPrecioGame.textContent ="$" + juegos[i].precio;
            clonDivInfoGame.appendChild(clonpPrecioGame);
            if ((juegos[i].descuento !== 0) && (juegos[i].descuento !== "0") ){
                var clonpDescGame =  pDescGame.cloneNode();
                clonpDescGame.textContent ="-" + juegos[i].descuento + "%";
                clonDivInfoGame.appendChild(clonpDescGame);
            }
            var clonButCompra =  butCompra.cloneNode();
            clonButCompra.textContent ="Comprar";
            clonButCompra.setAttribute("id", i);
            clonDivInfoGame.appendChild(clonButCompra);   
        }
    }
    capturarBtnComprar();
    capturarBtnGame();
}


// Captura el evento clic en el boton 'comprar' de elgun juego de la store
function capturarBtnComprar(){
    var botones = document.querySelectorAll(".butCompra");
    for (var x = 0; x < botones.length; x++) {
        botones[x].onclick = function() {
            posItem[0] = this.id;
            var compra = obtener_sessionStorage("compra");
            if (compra != null){
                compra = borrar_sessionStorage('compra');
                compra = obtener_sessionStorage('compra');
            }
            compra.push(posItem);
            guardar_sessionStorage(compra, "compra");
            document.location.href= "compra.html";
        }
    }
}
capturarBtnComprar();

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


// Captura el evento clic sobre algun juego en la store
function capturarBtnGame(){
    var games = document.querySelectorAll(".divNiv2");
    for (var x = 0; x < games.length; x++) {
        games[x].onclick = function() {
            posItem[0] = this.id;
            var compra = obtener_sessionStorage("compra");
            if (compra != null){
                compra = borrar_sessionStorage('compra');
                compra = obtener_sessionStorage('compra');
            }
            compra.push(posItem);
            guardar_sessionStorage(compra, "compra");
            document.location.href= "game.html";
        }
    }
}
capturarBtnGame();

var cat = document.querySelector('#cat');

cat.onchange = function(){
    switch(cat.value){
        case "Todos":
        actualizarIndex();
        mostrarTodos();
        break;
    
    case "Promociones":
        actualizarIndex();
        for( var i=0 ; i<juegos.length ; i++){
            if ((juegos[i].descuento !== 0) && (juegos[i].descuento !== "0") ){
                var clonDivGame = divGame.cloneNode();
                clonDivGame.setAttribute("id", i);
                contenedor.appendChild(clonDivGame);
                var clonImgGame = imgGame.cloneNode();
                clonImgGame.src = juegos[i].imagen;
                clonDivGame.appendChild(clonImgGame);
            
                var clonDivInfoGame = divInfoGame.cloneNode();
                clonDivGame.appendChild(clonDivInfoGame);
            
                var clonpNameGame =  pNameGame.cloneNode();
                clonpNameGame.textContent = juegos[i].titulo;
                clonDivInfoGame.appendChild(clonpNameGame);
                var clonpPrecioGame =  pPrecioGame.cloneNode();
                clonpPrecioGame.textContent ="$" + juegos[i].precio;
                clonDivInfoGame.appendChild(clonpPrecioGame);
                
                    var clonpDescGame =  pDescGame.cloneNode();
                    clonpDescGame.textContent ="-" + juegos[i].descuento + "%";
                    clonDivInfoGame.appendChild(clonpDescGame);
            
                var clonButCompra =  butCompra.cloneNode();
                clonButCompra.textContent ="Comprar";
                clonButCompra.setAttribute("id", i);
                clonDivInfoGame.appendChild(clonButCompra);   
            }
        }
        capturarBtnComprar();
        break;
    case "Action":
        mostrarCategoria(action);
        break;
    case "Adventure":
        mostrarCategoria(adventure);
        break;
    case "Sports & Racing":
        mostrarCategoria(sports);
        break;
    case "RPG":
        mostrarCategoria(rpg);
        break;
    case "Shooters":
        mostrarCategoria(shooters);
        break;
    case "Simulation":
        mostrarCategoria(simulation);
        break;
    case "Strategy":
        mostrarCategoria(strategy);
        break;
    }
}