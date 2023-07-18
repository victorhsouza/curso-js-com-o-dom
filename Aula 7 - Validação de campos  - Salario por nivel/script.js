var horas = document.getElementById('input-horas')
var nivel = document.getElementsByName('nivel')
var salario = document.getElementById('salario')
var btnCalcular = document.getElementById('calcular')


function calcularSalario(){
    let h = Number(horas.value)
    let n1 = 20
    let n2 = 35
    let n3 = 50

    if(nivel[0].checked){
        var salarioFinal = h * n1
    } else if(nivel[1].checked){
        var salarioFinal = h * n2
    } else{
        var salarioFinal = h * n3
    }

    salario.value = salarioFinal.toLocaleString('pt-br',{
        style: 'currency',
        currency: 'BRL'
    })
}

btnCalcular.addEventListener('click',calcularSalario)