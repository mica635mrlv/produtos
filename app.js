'use strict'

import produtos from "./produtos_atualizados.json" with {type: "json"}

document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");

  let html = `
    <div class="container-produtos" id="container-produtos">
      <h1>Festival de Descontos</h1>
      <div class="container-1" id="container-1">
        ${produtos.slice(0, 5).map(produto => `
          <div class="card">
            <img src="./img/${produto.imagem}" alt="${produto.nome}">
            <p><b>${produto.nome}</b></p>
            <p>Descrição: ${produto.descricao}</p>
            <p><b>R$ ${produto.preco.toFixed(2)}</b></p>
            <p>Categoria: ${produto.categoria}</p>
            <p>Classificação: ${produto.classificacao}</p>
          </div>
        `).join('')}
      </div>

      <h1>Tecnologia com preço de Black Friday</h1>
      <div class="container-2" id="container-2">
        ${produtos.slice(5).map(produto => `
          <div class="card">
            <img src="./img/${produto.imagem}" alt="${produto.nome}">
            <p><b>${produto.nome}</b></p>
            <p>Descrição: ${produto.descricao}</p>
            <p><b>R$ ${produto.preco.toFixed(2)}</b></p>
            <p>Categoria: ${produto.categoria}</p>
            <p>Classificação: ${produto.classificacao}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  main.innerHTML = html;
});

// function criarCard(produto) {
//   const card = document.createElement("div");
//   card.classList.add("card");

//   card.innerHTML = `
//     <img src="./img/${produto.imagem}" alt="${produto.nome}">
//     <p><b>${produto.nome}</b></p>
//     <p>Descrição: ${produto.descricao}</p>
//     <p><b>R$ ${produto.preco}</b></p>
//     <p>Categoria: ${produto.categoria}</p>
//     <p>Classificação: ${produto.classificacao}</p>
//   `;

//   return card;
// }

// function criarMain() {
//   const main = document.querySelector("main");

//   const containerProdutos = document.createElement("div");
//   containerProdutos.classList.add("container-produtos");
//   containerProdutos.id = "container-produtos";

//   const titulo1 = document.createElement("h1");
//   titulo1.textContent = "Festival de Descontos";

//   const container1 = document.createElement("div");
//   container1.classList.add("container-1");
//   container1.id = "container-1";

//   // Título 2 e container-2
//   const titulo2 = document.createElement("h1");
//   titulo2.textContent = "Tecnologia com preço de Black Friday";

//   const container2 = document.createElement("div");
//   container2.classList.add("container-2");
//   container2.id = "container-2";

//   // Adiciona os 5 primeiros ao container-1, e o resto ao container-2
//   produtos.forEach((produto, index) => {
//     const card = criarCard(produto);
//     if (index < 5) {
//       container1.appendChild(card);
//     } else {
//       container2.appendChild(card);
//     }
//   });

//   // Monta a estrutura
//   containerProdutos.appendChild(titulo1);
//   containerProdutos.appendChild(container1);
//   containerProdutos.appendChild(titulo2);
//   containerProdutos.appendChild(container2);
//   main.appendChild(containerProdutos);
// }

// document.addEventListener("DOMContentLoaded", criarMain);