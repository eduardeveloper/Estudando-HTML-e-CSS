/*
Object.value
Object.entries
Object.getOwnPropertyDescriptor(o, 'prop')
Object.assign(des, any)
... (spread)

// já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = { nome: 'Produto', preco: 1.8, material: 'porcelana' };
//console.log(Object.entries(produto)); 
for(let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);
}