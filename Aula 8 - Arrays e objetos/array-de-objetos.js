var pessoas = [
    {nome: "Victor", idade: 27, dirige: true},
    {nome: "Amanda", idade: 26, dirige: true},
    {nome: "Miguel", idade: 5, dirige: false},
]

for(var i = 0; i < pessoas.length; i++){
    console.log(`Nome: ${pessoas[i].nome}`)
    console.log(`Idade: ${pessoas[i].idade}`)
    console.log(`Dirige: ${pessoas[i].dirige ? 'sim' : 'nao'}`)
    console.log()
}
