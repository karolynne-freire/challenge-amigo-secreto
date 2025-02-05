//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    const lista = document.getElementById("listaAmigos");

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (listaDeAmigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    listaDeAmigos.push(nome);
    
    const li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);
    
    input.value = "";
    input.focus();
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }
    
    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceSorteado];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 ${amigoSorteado} foi sorteado! 🎉</li>`;
}