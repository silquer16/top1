// Array para armazenar os itens do carrinho
let carrinhoItens = [];

// Função para adicionar itens ao carrinho
function adicionarAoCarrinho(nome, preco) {
    carrinhoItens.push({ nome, preco });
    atualizarCarrinho();
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
    const carrinhoLista = document.getElementById("carrinho");
    carrinhoLista.innerHTML = "";

    let total = 0;

    for (const item of carrinhoItens) {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.nome} - R$ ${item.preco}`;
        carrinhoLista.appendChild(listItem);

        total += item.preco;
    }

    const totalItem = document.createElement("li");
    totalItem.textContent = `Total: R$ ${total}`;
    carrinhoLista.appendChild(totalItem);
}

// Função para ver o resumo do carrinho
function verResumo() {
    // Crie uma página separada (resumo.html) e redirecione para ela
    window.location.href = "resumo.html";
}


// Array para armazenar os itens do carrinho
let carrinhoItens = [];

// Função para adicionar itens ao carrinho
function adicionarAoCarrinho(nome, preco) {
    carrinhoItens.push({ nome, preco });
    atualizarCarrinho();
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
    const carrinhoLista = document.getElementById("carrinho");
    carrinhoLista.innerHTML = "";

    let total = 0;

    for (const item of carrinhoItens) {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.nome} - R$ ${item.preco}`;
        carrinhoLista.appendChild(listItem);

        total += item.preco;
    }

    const totalItem = document.createElement("li");
    totalItem.textContent = `Total: R$ ${total}`;
    carrinhoLista.appendChild(totalItem);
}

// Função para ver o resumo do carrinho
function verResumo() {
    // Crie uma página separada (resumo.html) e redirecione para ela
    window.location.href = "resumo.html";
}
