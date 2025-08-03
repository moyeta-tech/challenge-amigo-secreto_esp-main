// Inicio del código del challenge amigo secreto

let amigos = [];

function agregarAmigo(){ // Funcion para agregar amigo a la hora de apretar el boton Agregar
    let entrada = document.getElementById("amigo");
    if(entrada.value == ""){
        return alert("Por favor, inserte un nombre")
    } else {
        amigos.push(entrada.value);
        entrada.value = "";
        console.log(amigos);
    }

    actualizarLista() /* Llamamos a la funcion de actualizarLista para que al 
    presionar el boton Agregar se muestren los datos del array amigos enlistados
    
    */

}

function actualizarLista(){ // Definicion de la funcion ActualizarLista
        let listaDesordenada = document.getElementById("listaAmigos")
        let li = document.createElement("li");
        for(let amigo of amigos){
            li.innerHTML = amigo
        }
        listaDesordenada.appendChild(li);
    }

    function sortearAmigo(){ /* Definicion de funcion sortearAmigo 
        donde utilizamos Math.random() para elegir un elemento al azar en el arreglo 
        y utilizarlo como indice */

        let amigoSorteado = Math.floor(Math.random() * amigos.length);
        if(amigos.length > 0){
            let respuestaListaDesordenada = document.getElementById("resultado");
            let respuestaLi = document.createElement("li");
            respuestaLi.innerHTML = `El amigo secreto sorteado es: ${amigos[amigoSorteado]}`
            respuestaListaDesordenada.appendChild(respuestaLi);
        } else {
            alert("Array vacío");
        }
        console.log(amigos[amigoSorteado]);
    }

