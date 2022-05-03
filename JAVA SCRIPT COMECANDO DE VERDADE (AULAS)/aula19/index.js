/*
Primitivos (imutáveis) - string number boolen undefined, null (bigint, symbol)

Referência (mútavel) - array, object, function - Padssados por referência


*/
// //          0123
// let a ='A';
// let b = a; // Cópia
// console.log(a, b);

// a = 'Outra coisa';
// console.log(a, b);

// let a = [1, 2, 3];
// let b = [...a];
// let c = b;


// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// a.push('Eduardo');

const a = {
    nome: 'Eduardo',
    sobrenome: 'Santos'
}; 
const b = {...a};

a.nome = 'Otavio';
console.log(a);
console.log(b);

