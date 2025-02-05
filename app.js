// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];


function agregarAmigo(){
    limpiarCaja();
    let nuevoNombre = document.getElementById('amigo').value;
    if ( nuevoNombre!= "") {
        listaAmigos.push(nuevoNombre);
        mostrarNombres();
    }else {
        alert("Ingrese un Nombre valido ");
    }  
    limpiarIngresoNombres(); 
}

function mostrarNombres() {
    let lista = document.getElementById('listaAmigos');
    for (let index = 0; index < listaAmigos.length; index++) {
        console.log("Entra");
        let elemetosLista = document.createElement("li");
        elemetosLista.textContent = listaAmigos[index];
        lista.appendChild(elemetosLista);
    }
}

function limpiarCaja() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
}

function limpiarIngresoNombres() {
    document.querySelector('#amigo').value = "";
}

function sortearAmigo(){
    let seleccionado = document.getElementById('listaAmigos');
    let numero = listaAmigos.length;  
    let numAleatorio = Math.floor(Math.random()*numero);   
    limpiarCaja();
    seleccionado.textContent = "El amigo secreto es: " +listaAmigos[numAleatorio];
    
}