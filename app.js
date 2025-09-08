'use strict'

import produtos from "./produtos_atualizados.json" with {type: "json"}

function criarCard(produto) {
  const card = document.createElement("button");
  card.classList.add("card");

  function gerarEstrelas(classificacao) {
    let estrelas = "";

    for (let i = 0; i < 5; i++) {

      if (i < classificacao) {
        estrelas += "⭐";
      } else {
        estrelas += "☆";
      }
    }

    return estrelas;
  }

  card.innerHTML = `
    <img src="./img/${produto.imagem}" alt="${produto.nome}">
    <p><b>${produto.nome}</b></p>
    <p>Descrição: ${produto.descricao}</p>
    <p>${gerarEstrelas(produto.classificacao)}</p>
    <p><b>R$ ${produto.preco}</b></p>
    <p>Categoria: ${produto.categoria}</p>
  `;

  card.addEventListener("click", () => {
    alert("Produto foi adicionado no carrinho com sucesso!");
  });

  return card;
}

function criarMain() {
  const main = document.querySelector("main");

  const containerProdutos = document.createElement("div");
  containerProdutos.classList.add("container-produtos");
  containerProdutos.id = "container-produtos";

  const titulo1 = document.createElement("h1");
  titulo1.textContent = "Festival de Descontos";

  const container1 = document.createElement("div");
  container1.classList.add("container-1");
  container1.id = "container-1";

  const titulo2 = document.createElement("h1");
  titulo2.textContent = "Tecnologia com preço de Black Friday";

  const container2 = document.createElement("div");
  container2.classList.add("container-2");
  container2.id = "container-2";

  produtos.forEach((produto, index) => {
    const card = criarCard(produto);

    if (index < 5) {
      container1.appendChild(card);
    } else {
      container2.appendChild(card);
    }
    
  });

  containerProdutos.appendChild(titulo1);
  containerProdutos.appendChild(container1);
  containerProdutos.appendChild(titulo2);
  containerProdutos.appendChild(container2);
  main.appendChild(containerProdutos);
}

document.addEventListener("DOMContentLoaded", criarMain);