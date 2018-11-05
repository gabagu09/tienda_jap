
var juegos = [ 
    {   "name": "gtaV",
        "img": "image/gta-portada.jpg",
        "precio" : "12",
        "descuento" : "10",
        "descripcion": "ajdkdgfkd",
        "categoria": "action",
        "imgExtra" : []
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


for( var i=0 ; i<juegos.length ; i++){
    var clonDivGame = divGame.cloneNode();
    contenedor.appendChild(clonDivGame);
    var clonImgGame = imgGame.cloneNode();
    clonImgGame.src = juegos[i].img;
    clonDivGame.appendChild(clonImgGame);
 
    var clonDivInfoGame = divInfoGame.cloneNode();
    clonDivGame.appendChild(clonDivInfoGame);

    var clonpNameGame =  pNameGame.cloneNode();
    clonpNameGame.textContent = juegos[i].name;
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

var promociones = document.querySelector('#promociones');
var action = document.querySelector('#action');
var adventure = document.querySelector('#adventure');
var sports = document.querySelector('#sports');
var rpg = document.querySelector('#rpg');
var shooters = document.querySelector('#shooters');
var simulation = document.querySelector('#simulation');
var strategy = document.querySelector('#strategy');
promociones.onclick = function(){
    actualizarIndex();
    for( var i=0 ; i<juegos.length ; i++){
        if ((juegos[i].descuento !== 0) && (juegos[i].descuento !== "0") ){
            var clonDivGame = divGame.cloneNode();
            contenedor.appendChild(clonDivGame);
            var clonImgGame = imgGame.cloneNode();
            clonImgGame.src = juegos[i].img;
            clonDivGame.appendChild(clonImgGame);
        
            var clonDivInfoGame = divInfoGame.cloneNode();
            clonDivGame.appendChild(clonDivInfoGame);
        
            var clonpNameGame =  pNameGame.cloneNode();
            clonpNameGame.textContent = juegos[i].name;
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
}

action.onclick = function(){
  mostrarCategoria(action);
}


adventure.onclick = function(){
    mostrarCategoria(adventure);
}

sports.onclick = function(){
    mostrarCategoria(sports);
}

rpg.onclick = function(){
    mostrarCategoria(rpg);
}

shooters.onclick = function(){
    mostrarCategoria(shooters);
}

simulation.onclick = function(){
    mostrarCategoria(simulation);
}

strategy.onclick = function(){
    mostrarCategoria(strategy);
}

function actualizarIndex(){
	var lista = document.querySelector(".ctnMain");
	while (lista.hasChildNodes()) 
   		lista.removeChild(lista.firstChild);
} 

function mostrarCategoria(cat){
    actualizarIndex();
    for( var i=0 ; i<juegos.length ; i++){
        if (juegos[i].categoria == cat.id){
            var clonDivGame = divGame.cloneNode();
            contenedor.appendChild(clonDivGame);
            var clonImgGame = imgGame.cloneNode();
            clonImgGame.src = juegos[i].img;
            clonDivGame.appendChild(clonImgGame);
        
            var clonDivInfoGame = divInfoGame.cloneNode();
            clonDivGame.appendChild(clonDivInfoGame);
        
            var clonpNameGame =  pNameGame.cloneNode();
            clonpNameGame.textContent = juegos[i].name;
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
}



