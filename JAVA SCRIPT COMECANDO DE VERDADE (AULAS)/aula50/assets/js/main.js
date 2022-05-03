//argumentos que sustenta todos os argumentos enviados
// function funcao(a, b = 2, c= 4) {
//   console.log(a + b + c);
// }

// funcao(2, undefined, 20);

// function funcao({nome, sobrenome, idade}) {
//   console.log(nome, sobrenome, idade);
// }

// let obj = {nome: 'Eduardo', sobrenome: 'Santos', idade: 30};
// funcao(obj);

// function conta(operador, acumulador, ...numeros) {
//   for(let numero of numeros) {
//     if (operador === '+')acumulador += numero;
//     if (operador === '-')acumulador -= numero;
//     if (operador === '/')acumulador /= numero;
//     if (operador === '*')acumulador *= numero;
//   }

//   console.log(acumulador);
// }
// conta('*', 1, 20, 30, 40, 50);

const conta = (...args) => {
  console.log(args);
};

conta('+', 1, 20, 30, 40, 50);
