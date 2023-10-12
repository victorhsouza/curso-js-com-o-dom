var numeros = [5,8,4,8,6,7,9,11,10]

var pessoas = [
    {id: 1, nome: "Victor", idade: 29},
    {id: 20, nome: "Amanda", idade: 19},
    {id: 30, nome: "Miguel", idade: 19},
    {id: 45, nome: "Pedro", idade: 20},
]

var idade = pessoas.every((pessoa)=> pessoa.idade > 18)

console.log(idade)

// var verifica = numeros.every((numero)=>numero < 12)

// console.log(verifica)