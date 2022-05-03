const verdadeira = true;

// Let tem escopo de bloco {... bloco}

let nome = 'Eduardo'; // criando
var nome2 = 'Eduardo';


if (verdadeira) {
    let nome = 'Luiz'; // criando
    // console.log(nome, nome2);

    if(verdadeira) {
        let nome = 'Outra coisa';
        console.log(nome, nome2);
    }
}