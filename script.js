// Capturando os elementos do HTML
const tituloElemento = document.getElementById('titulo');
const listaNaoOrdenadaElemento = document.getElementById('minha-lista-n-ordenada');
const linkElemento = document.getElementById('meu-link');
const listaOrdenadaElemento = document.getElementById('lista-ordenada');

// Adicionando conteúdo aos elementos
tituloElemento.innerText = 'Título Adicionado Dinamicamente';
linkElemento.innerText = 'Clique aqui para acessar o site';
linkElemento.setAttribute('target', '_blank'); // Abrir o link em uma nova aba

// Adicionando itens à lista não ordenada
for (let i = 1; i <= 3; i++) {
    const li = document.createElement('li');
    li.innerText = `Item ${i} na lista não ordenada`;
    listaNaoOrdenadaElemento.appendChild(li);
}

// Adicionando itens com links à lista ordenada
for (let i = 1; i <= 3; i++) {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = `https://site${i}.com`;
    link.innerText = `Link ${i}`;
    li.appendChild(link);
    listaOrdenadaElemento.appendChild(li);
}
