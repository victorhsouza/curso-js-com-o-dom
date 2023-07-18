var nota1 = document.querySelector("#nota1");
var nota2 = document.querySelector("#nota2");
var nota3 = document.querySelector("#nota3");
var nota4 = document.querySelector("#nota4");
var media = document.querySelector("#media");
var situacao = document.querySelector("#situacao");
var btnCalcular = document.querySelector("#calcular");

function calcular() {
  if (
    nota1.value == "" ||
    nota2.value == "" ||
    nota3.value == "" ||
    nota4.value == ""
  ) {
   
  } else {
    let n1 = Number(nota1.value);
    let n2 = Number(nota2.value);
    let n3 = Number(nota3.value);
    let n4 = Number(nota4.value);

    let notas = [n1,n2,n3,n4]

   

    let mediaAluno = (n1 + n2 + n3 + n4) / 4;

    media.value = mediaAluno;

    if (mediaAluno >= 7) {
      situacao.value = "Aprovado";
    } else if (mediaAluno >= 4) {
      situacao.value = "Recuperação";
    } else {
      situacao.value = "Reprovado";
    }

    nota1.value = "";
    nota2.value = "";
    nota3.value = "";
    nota4.value = "";

    nota1.focus();
  }
}
btnCalcular.addEventListener("click", calcular);
