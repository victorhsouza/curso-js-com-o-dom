var numeros = [5,8,4,8,6]
var pessoas = [
    {id: 1, nome: "Victor", idade: 27},
    {id: 20, nome: "Amanda", idade: 26},
    {id: 30, nome: "Miguel", idade: 5},
    {id: 45, nome: "Pedro", idade: 20},
]


pessoas.map((pessoa)=>{
    console.log(`Nome: ${pessoa.nome}`)
    console.log(`Idade: ${pessoa.idade}`)
    console.log()
})