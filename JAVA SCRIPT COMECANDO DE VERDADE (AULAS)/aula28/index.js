// Mozilla developer
// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras - umDia); // 01/01/1970 Timestamp unix ou época unix
// console.log(data.toString());
//const data = new Date(2021, 6, 24, 15, 35, 10);

// const data = new Date('2021-06-24T16:42:00');
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1); // Mês começa do 0
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Sec', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia da semana', data.getDay()); // 0 = Domingo, 6 = Sábado
// console.log(data.toString());


function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const sec = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);





