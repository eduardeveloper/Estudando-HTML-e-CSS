//Construtora -> molde (classe)
function pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
}

//pessoa.prototype === pessoa1.__proto__

pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
};

//Instância
const pessoa1 = new pessoa('Eduardo', 'S.S.'); // <- Pessoa = Função construtora
const data = new Date(); // <- Date = Função construtora

console.dir(pessoa1);
console.dir(data);