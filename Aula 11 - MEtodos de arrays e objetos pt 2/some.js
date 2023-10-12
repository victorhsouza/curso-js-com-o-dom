var numeros = [5,8,4,8,6,7,9,11,10]

var pessoas = [
    {id: 1, nome: "Victor", idade: 29},
    {id: 20, nome: "Amanda", idade: 15},
    {id: 30, nome: "Miguel", idade: 5},
    {id: 45, nome: "Pedro", idade: 10},
]

var idade = pessoas.some((pessoa)=>pessoa.idade > 18)
console.log(idade)

// var verificaNumero = numeros.some((numero)=>numero < 4)
// console.log(verificaNumero)