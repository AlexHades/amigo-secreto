let amigos = [];

function agregarAmigo() { 
    let nombre = document.getElementById("amigo").value;
    if (nombre === "") {
        return alert("Por favor, inserte un nombre.");
    }
    amigos.push(nombre);
    document.getElementById("amigo").value = "";
    console.log(amigos);
    mostrarAmigos();
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos"); // Obtener el elemento de la lista
    lista.innerHTML = ""; // Limpiar la lista antes de mostrar
    // Iterar sobre el array de amigos y crear un elemento li para cada uno
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
    lista.style.display = amigos.length > 0 ? "block" : "none"; // Mostrar u ocultar la lista
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar el resultado anterior
    resultado.style.display = "block"; // Asegurarse de que el resultado esté visible
}

function sortearAmigo() {
    if (amigos.length === 0) {
        return alert("No hay amigos para sortear.");
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    let resultado = document.getElementById("resultado");
    let lista = document.getElementById("listaAmigos");
    resultado.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
    lista.style.display = "none";
}