/*
Eduardo Santos tem 30 anos, pesa 80kg
tem 1.80 de altura e seu IMC é de 25.925925925925924
Eduardo Santos nasceu em 1990
*/

const nome = 'Eduardo';
const sobrenome = 'Santos';
const idade = 30;
const peso = 80;
const alturaEmM = 1.80;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM)
anoNascimento = 2019 - idade;

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
