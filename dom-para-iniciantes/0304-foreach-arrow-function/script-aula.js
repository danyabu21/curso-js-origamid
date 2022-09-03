// ==== forEach ====
/* Constantemente vamos selecionar uma lista de itens do DOM. A melhor forma para interagirmos com os mesmo é utilizando o método forEach. */

const imgs = document.querySelectorAll("img");

imgs.forEach(function (img) {
  console.log(img);
});

// ==== Parâmetros do forEach ====

/* O primeiro parâmetro é o callback, ou seja, uma função que será ativada a cada item. Essa função pode receber três parâmetros: valorAtual, index, array. */

const titulos = document.querySelectorAll(".titulo");

titulos.forEach(function (item, index, array) {
  console.log(item, index, array);
  // item retorna o elemento da NodeList
  // index retorna o index de cada elemento
  // array retorna a própria NodeList
});

// ==== forEach & Array ====

/* O forEach é um método de Array, alguns objetos array-like possuem esse método. Caso não possua, o ideal é tranformá-lo em uma array (ex: HTMLCollention). */

const gridSections = document.getElementsByClassName("grid-section"); // retorna uma HTMLCollection;
const gridSectionArray =
  Array.from(
    gridSections
  ); /* converteu para ARRAY, com isso temos todas as propriedades e métodos que uma array possui, possibilitando o uso do forEach().*/

gridSectionArray.forEach(function (item) {
  console.log(item);
});

// ==== Arrow Function ====
/* Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adcionar a fat arrow => após os parâmetros. */

const listas = document.querySelectorAll("ul");

listas.forEach((item) => {
  console.log(item);
});

// ==== Argumentos e parênteses ====

/* const imgs = document.querySelectorAll('img');

- Argumento único não precisa de parênteses
imgs.forEach(item =>{
  console.log(item)
});

- multiplos argumentos precisam de parênteses
imgs.forEach((item, index) =>{
  console.log(item, index)
}); 

- sem argumentos precisa de parênteses, mesmo vazio

let i = 0; 
imgs.forEach(()=>{
  console.log(i++);
});

* É melhor sempre utilizar parênteses.

*/

// ==== Return ====
/* É possível omitir as chaves {} para uma função que retorna apenas uma linha de código. */
/* const imgs = document.querySelectorAll('img);
imgs.forEach((item) => console.log(item))

* Ao usar essa sintaxe, não é permitido fechar a linha com ; 
*/
