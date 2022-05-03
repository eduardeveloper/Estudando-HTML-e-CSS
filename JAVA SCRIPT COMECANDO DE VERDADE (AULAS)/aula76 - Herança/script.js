// Produto = aumento, desconto 
// Camiseta = cor, Caneca = material
function Produto(nome, preço) {
    this.nome = nome;
    this.preco = preço;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
}

Camiseta.prototype = Object.create(Produto.prototype);

const Camiseta = new Camiseta('Regata', 7.5, 'Preta');
Camiseta.aumento(10);
console.log(Camiseta);