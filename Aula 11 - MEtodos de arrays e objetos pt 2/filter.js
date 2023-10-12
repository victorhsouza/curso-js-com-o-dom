var numeros = [5,8,4,8,6,7,9,11,10]

var pessoas = [
    {id: 1, nome: "Victor", idade: 27},
    {id: 20, nome: "Amanda", idade: 26},
    {id: 30, nome: "Miguel", idade: 5},
    {id: 45, nome: "Pedro", idade: 20},
]


var idadePessoa = pessoas.filter((pessoa)=>pessoa.idade >= 20 && pessoa.nome.includes("o"))

console.log(idadePessoa)

// var pares = numeros.filter((numero)=>numero % 2 == 0)
