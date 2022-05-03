//Factory function (Função fábrica)
//Constructor function (Função construtora)

function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome, 
    sobrenome,
//getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

//Setter    
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },

    fala(assunto = 'falando sobre NADA') {
      return `${this.nome} está ${this.assunto}.`;
    },
    
    altura: a,
    peso: p,

    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Eduardo', 'Santos', 1.75, 67);
const p2 = criaPessoa('Paulo', 'César', 1.90, 90);
const p3 = criaPessoa('Maria', 'Aldenora', 1.65, 62)

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);