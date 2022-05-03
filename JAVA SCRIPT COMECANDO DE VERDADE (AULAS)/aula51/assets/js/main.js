// return
// Retorna um valor


// function criaPessoa(nome, sobrenome) {
//   return { nome, sobrenome };
// }

// const p1 = criaPessoa('Eduardo', 'Santos');
// const p2 = {
//   nome: 'Joao',
//   sobrenome: 'Oliveira'
// };

// console.log(typeof p1);
// console.log(typeof p2);

// function falaFrase(comeco) {
//   function falaResto(resto) {
//     return comeco + ' ' + resto;
//   }
//   return falaResto;
// }

// const fala = falaFrase('Olá');
// const resto = fala('mundo!');

// console.log(resto);

// function duplica(n) {
//   return n * 2;
// }

// function triplica(n) {
//   return n * 3;
// }

// function quadriplica(n) {
//   return n * 4;
// }

// console.log(duplica(2));
// console.log(triplica(2));
// console.log(quadriplica(2));

function criaMultiplicador(multiplicador) {
  // multiplicador
  return function(n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica  = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));