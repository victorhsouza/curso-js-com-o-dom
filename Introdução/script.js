var numero1 = document.getElementById('n1')
var numero2 = document.getElementById('n2')
var resultado = document.getElementById('resultado')

function calcular(){
    let n1 = Number(numero1.value)
    let n2 = Number(numero2.value)

    let soma = n1 + n2

    resultado.value = soma

}