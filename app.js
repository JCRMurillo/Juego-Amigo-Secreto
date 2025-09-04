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
        let elementoLista = document.createElement("a");
        elementoLista.textContent = amigo;
        listaHTML.appendChild(elementoLista);
    }
}
