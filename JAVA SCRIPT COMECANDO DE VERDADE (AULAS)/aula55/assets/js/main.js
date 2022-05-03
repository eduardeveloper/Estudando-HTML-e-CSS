// IIFE -> Immediately invoked function expression
(function (idade, peso, altura) {

const sobrenome = 'Santos';
function criaNome(nome) {
  return nome + ' ' + sobrenome;
}

function falaNome() {
  console.log(criaNome('Eduardo'));
}

falaNome();
console.log(idade, peso, altura);

})(30, 80, 1.75);

(function() {

})();

// const nome = 'Qualquer coisa';