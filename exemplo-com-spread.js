// EXEMPLO OPERADOR SPREAD COM OBJ

const dadosAdicionais = {
    rua: "Bertolo simão de oliveira",
    numeor: 23
}

const pessoa = {
    name: "Iasmin",
    idade: 29,
    ...dadosAdicionais
}

console.log(pessoa)

// PODE SER UTILIZADO PARA DESESTRUTURAR O ARRAY E OBJETO