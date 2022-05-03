// function criaPesssoa (nome, sobrenome, idade) {
//     return {nome, sobrenome, idade};
//     };
// }

// const pessoa1 = criaPesssoa('Eduardo', 'Santos', 30);
// const pessoa2 = criaPesssoa('Juliana', 'Silva', 30);
// const pessoa3 = criaPesssoa('Maria', 'Oliveira', 30);
// const pessoa4 = criaPesssoa('Jean', 'Moreira', 30);
// const pessoa5 = criaPesssoa('Rafael', 'Godoy', 30);

// console.log(pessoa1.nome, pessoa2.nome);

const pessoa1 = {
    nome: 'Eduardo',
    sobrenome: 'Santos',
    idade: 30,

    fala () {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade () {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();