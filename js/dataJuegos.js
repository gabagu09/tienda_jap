var dataJuegos = [
    {   "titulo": "gtaV", //
        "imagen": "image/gta-portada.jpg",
        "precio" : "57", 
        "descuento" : "10", 
        "descripcion": "El super GTA V", 
        "categoria": "action",  
        "imgExtra" : []
    },
    {   "titulo": "Fornite",
        "imagen": "image/Fornite.jpg",
        "precio" : "12",
        "descuento" : "10",
        "descripcion": "ajdkdgfkd",
        "categoria": "action",
        "imgExtra" : []
    },
    {   "titulo": "Minecraft",
        "imagen": "image/minecraft.jpg",
        "precio" : "12",
        "descuento" : "10",
        "descripcion": "ajdkdgfkd",
        "categoria": "adventure",
        "imgExtra" : []
    },
    {   "titulo": "Fifa 19",
        "imagen": "image/Fifa19.jpg",
        "precio" : "12",
        "descuento" : "10",
        "descripcion": "ajdkdgfkd",
        "categoria": "sports",
        "imgExtra" : []
    },
    {   "titulo": "Pes 19",
        "imagen": "image/Pes19.jpg",
        "precio" : "12",
        "descuento" : "10",
        "descripcion": "ajdkdgfkd",
        "categoria": "sports",
        "imgExtra" : []
    }, 
    {   "titulo": "The Forest",
        "imagen": "image/TheForest.jpg",
        "precio" : "12",
        "descuento" : "0",
        "descripcion": "ajdkdgfkd",
        "categoria": "adventure",
        "imgExtra" : []
    },
    {   "titulo": "The Witcher 3",
        "imagen": "image/theWitcher3.jpg",
        "precio" : "12",
        "descuento" : "0",
        "descripcion": "ajdkdgfkd",
        "categoria": "rpg",
        "imgExtra" : []
    },
]

var listaJuegos= dataJuegos;
 
//return true cuando existe titulo
function hayJuego(titulo){
    var encontre = false;
    var i = 0;
    while(!encontre && (i<listaJuegos.length)){
        if( titulo == listaJuego[i].titulo){
             encontre = true;
        }
        else{
            i++;
        }
    }
    return encontre;
}
 //return la posicion de titulo en el arreglo
 //si tutulo no este return -1
function posJuego(titulo){
    var encontre = false;
    var i = 0;
    while(!encontre && (i<listaJuegos.length)){
        if( titulo == listaJuego[i].titulo){
             encontre = true;
        }
        else{
            i++;
        }
    }
    if (encontre){
        return i;
    }else{
        return -1;
    }
    
}


function precio(posJuego){
    return listaJuegos[posJuego].precio;
}


var posItem=[];