const nome = 'Eduardo';

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = 'Eduadinho';
  falaNome();
}

usaFalaNome();