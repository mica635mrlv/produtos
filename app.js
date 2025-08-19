'use strict'

import produtos from "./produtos_atualizados.json" with {type: "json"}

console.log (produtos.atualizados)

function criarProduto (produto) {
    // const body = document.querySelector('body')

    // const container = document.createElement('div')
    // container.className = 'container'

    // const imagem = document.createElement('img')
    // const nome = document.createElement('span')
    // const cargo = document.createElement('p')

    // imagem.src = `./img/${funcionario.imagem}`
    // nome.textContent = funcionario.nome
    // cargo.textContent = funcionario.cargo

    // body.appendChild(container)
    // container.appendChild(imagem)
    // container.appendChild(nome)
    // container.appendChild(cargo)
}

produtos.forEach(criarProduto)