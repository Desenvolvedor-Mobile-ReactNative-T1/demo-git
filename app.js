// Contador simples - versão 1.0
let contador = 0;

var elementoValor = document.getElementById("valor");
var btnMais = document.getElementById("btn-mais");
var btnMenos = document.getElementById("btn-menos");
var btnReset = document.getElementById("btn-reset");

function atualizarTela() {
  elementoValor.textContent = contador;
}

btnMais.addEventListener("click", function () {
  contador = contador + 1;
  atualizarTela();
});

btnMenos.addEventListener("click", function () {
  contador = contador - 1;
  atualizarTela();
});

btnReset.addEventListener("click", function () {
  contador = 0;
  atualizarTela();
});

atualizarTela();
