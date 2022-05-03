// função construtora -> objetos
// função fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
  //Atributos ou metodos privados
  const ID = 123456;

  const metodoInterno = function() {

  };

  // Atributos ou metodos publicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function() {
    console.log(this.nome + ': Sou um metodo');
  };
}

const p1 = new Pessoa('Eduardo', 'Santos');
const p2 = new Pessoa('Luana', 'Silva');

console.log(p1.nome);
console.log(p2.nome);

p1.metodo();

// Pessoa.nome =