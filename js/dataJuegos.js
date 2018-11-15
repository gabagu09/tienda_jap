var dataJuegos = [
    {   "titulo": "gta V", //
        "imagen": "image/gta-portada.jpg",
        "precio" : "57", 
        "descuento" : "10", 
        "descripcion": "El super GTA V", 
        "categoria": "action",  
        "imgExtra" : ["image/150.png", "image/150.png", "image/150.png"]
    },
    {   "titulo": "Fornite",
        "imagen": "image/Fornite.jpg",
        "precio" : "12",
        "descuento" : "10",
        "descripcion": "ajdkdgfkd",
        "categoria": "action",
        "imgExtra" : ["image/150.png", "image/150.png", "image/150.png"]
    },
    {   "titulo": "Minecraft",
        "imagen": "image/minecraft.jpg",
        "precio" : "10",
        "descuento" : "10",
        "descripcion": "ajdkdgfkd",
        "categoria": "adventure",
        "imgExtra" : ["image/150.png", "image/150.png", "image/150.png"]
    },
    {   "titulo": "Fifa 19",
        "imagen": "image/Fifa19.jpg",
        "precio" : "35",
        "descuento" : "10",
        "descripcion": "ajdkdgfkd",
        "categoria": "sports",
        "imgExtra" : ["image/150.png", "image/150.png", "image/150.png"]
    },
    {   "titulo": "Pes 19",
        "imagen": "image/Pes19.jpg",
        "precio" : "35",
        "descuento" : "10",
        "descripcion": "ajdkdgfkd",
        "categoria": "sports",
        "imgExtra" : ["image/150.png", "image/150.png", "image/150.png"]
    }, 
    {   "titulo": "The Forest",
        "imagen": "image/TheForest.jpg",
        "precio" : "49",
        "descuento" : "0",
        "descripcion": "ajdkdgfkd",
        "categoria": "adventure",
        "imgExtra" : ["image/150.png", "image/150.png", "image/150.png"]
    },
    {   "titulo": "The Witcher 3",
        "imagen": "image/theWitcher3.jpg",
        "precio" : "33",
        "descuento" : "0",
        "descripcion": "ajdkdgfkd",
        "categoria": "rpg",
        "imgExtra" : ["image/150.png", "image/150.png", "image/150.png"]
    },
    {   "titulo": "Call of Duty",
        "imagen": "image/CallOfDuty.jpeg",
        "precio" : "45",
        "descuento" : "15",
        "descripcion": "ajdkdgfkd",
        "categoria": "shooters",
        "imgExtra" : ["image/150.png", "image/150.png", "image/150.png"]
    },
    {   "titulo": "Counter Strike Go",
        "imagen": "image/cs-go-2.jpg",
        "precio" : "40",
        "descuento" : "7",
        "descripcion": "ajdkdgfkd",
        "categoria": "shooters",
        "imgExtra" : ["image/150.png", "image/150.png", "image/150.png"]
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
        if( titulo.toLowerCase() == listaJuegos[i].titulo.toLowerCase()){
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


// var posItemData;
// alert(posItemData + "dataJuego");