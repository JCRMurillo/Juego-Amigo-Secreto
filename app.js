let listaDeAmigos = [];
function agregarAmigo(){
    let nuevoAmigo = document.getElementById('amigo').value.trim();
    if (nuevoAmigo === ""){
        alert("Porfavor ingrese un nombre valido")
        limpiarCaja();
    } 

    listaDeAmigos.push(nuevoAmigo);
    actualizarListaDeAmigos();
    limpiarCaja();
    
}

function limpiarCaja(){
    let valorCaja = document.getElementById("amigo").value = " ";
}

function actualizarListaDeAmigos(){
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";

    for (let amigo of listaDeAmigos) {
        let elementoLista = document.createElement("div");
        elementoLista.textContent = amigo;
        listaHTML.appendChild(elementoLista);
    }
}
function sortearAmigo(){
    let numeroDeAmigos = listaDeAmigos.length;
    if (numeroDeAmigos === 0){
        alert("no hay ningun nombre para ser sorteado");
        return;
    }
    if (numeroDeAmigos <= 2){
        alert("Necesita mas de dos nombres para hacer el sorteo");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random()*numeroDeAmigos);
    let AmigoSorteado = document. getElementById("resultado").textContent = listaDeAmigos[indiceAleatorio];
    
}
