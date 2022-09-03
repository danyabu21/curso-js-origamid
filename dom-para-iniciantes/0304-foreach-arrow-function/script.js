// 1 - Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll("p");

paragrafos.forEach((paragrafo) => {
  console.log(paragrafo);
  // 2 - Mostre o texto dos parágrafos no console
  console.log(paragrafo.innerText);
});

// 3 - Como corrigir os erros abaixo:

/*const imgs = document.querySelectorAll('img');

imgs.forEach(item, index => {
  console.log(item, index);
});

let i = 0;
imgs.forEach( => {
  console.log(i++);
});

imgs.forEach(() => i++);*/

// Resolução:

const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  // adição dos () fechando os argumentos
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  // adição dos (), mesmo sem nenhum argumento, é necessário o fechamento.
  console.log(i++);
});

imgs.forEach(() => i++); // Não há erro, sintaxe correta para uma function com apenas uma linha de código.
