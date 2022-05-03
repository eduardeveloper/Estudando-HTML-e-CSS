const pessoas = [
    {id: 3, nome: 'Eduardo'},
    {id: 2, nome: 'Paulo'},
    {id: 1, nome: 'Aldenora'},
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

// for (const pessoa of pessoas.values()) {
//     console.log(pessoas);
// }

novasPessoas.delete(2);
console.log(novasPessoas);