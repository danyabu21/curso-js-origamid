// ==== Seleção de Elementos ====

// #ID
/* getElementById seleciona e retornar elementos do DOM, buscando pelo ID do mesmo. */

const animaisSection = document.getElementById("animais");
console.log(animaisSection); // retorna a section com ID animais
const contatoSection = document.getElementById("contato");
console.log(contatoSection); // retorna a section com ID contato

const naoExiste = document.getElementById("testes");
console.log(naoExiste); // retorna null caso não exista

// .Class e <Tag>
/* getElementByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada no documento. */

const gridSection = document.getElementsByClassName("grid-section");
const contato = document.getElementsByClassName("grid-section contato");
console.log(gridSection[0]); // retorna a primeira section que possue a classe 'grid-section'.
console.log(gridSection); // retorna uma HTMLCollection com todos os elementos que possuem a classe em questão.
console.log(contato); // retorna uma HTMLCollection apenas os elementos que possuem as duas classes em questão ao mesmo tempo.

const ul = document.getElementsByTagName("ul");
console.log(ul); // seleciona todas as Ul's e retorna uma HTMLCollection

// ==== Seletor Geral Único ====
/* querySelector retorna o PRIMEIRO elemento que combina com o seu 
seletor CSS */

const animais = document.querySelector(".animais");
console.log(animais); // retorna o primeiro elemento que possui a classe '.animais'

const contato2 = document.querySelector("#contato");
console.log(contato); //retorna o primeiro elemento que possui o ID '#contato'

const ultimoItem = document.querySelector(".animais-lista li:last-child");
console.log(ultimoItem); //retorna a <li>Leão</li>

const linkExterno = document.querySelector('[href^="https://"]');
console.log(linkExterno); // retornou o primeiro elemento que possui o href começando com o caminho em questão.

const primeiroUl = document.querySelector("ul");
console.log(primeiroUl); // retorna a primeira <ul> do documento.

const navItem = primeiroUl.querySelector("li");
console.log(navItem); // retorna a primeira <li> dentro do primeiroUl

// ==== Seletor Geral Lista ====
/* querySelectorAll retorna TODOS os elementos compatíveis com o seletor CSS em uma NodeList. Uma NodeList, igualmente ao HTMLCollection, é uma ArrayLike, porém estática. */

const gridSections = document.querySelectorAll(".grid-section");
console.log(gridSections); // retorna uma NodeList com todos os elementos que possuem a classe em questão.
console.log(gridSection[1]); // retornar o segundo elemento.

const listas = document.querySelectorAll("ul");
console.log(listas); // retorna uma NodeList com todas as <uls>

const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg); //retorna uma NodeList com todas as imagens que se encontram dentro dos elementos que possuem a classe em questão.

// ==== Diferenças entre NodeList e HTMLCollection
/* A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática. ==== */

// Ao vivo e estática:

const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

// adicionando uma classe 'grid-section' na primeira ul, para exemplificar
primeiroUl.classList.add("grid-section");

console.log(
  gridSectionHTML
); /* 4 itens - atualizou a quantidade de elementos na lista, devido a adição da classe na UL*/
console.log(gridSectionNode); // 3 itens - se manteve estático, não houve adição de elementos na lista.

// ==== Array-Like ====
/* HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas no NodeList. É possível transformar uma array-like em uma array real, utilizando o método Array.from(elemento) */

const gridSectionArrayLike = document.querySelectorAll(".grid-section");

gridSectionArrayLike.forEach((section, index, array) => {
  section.classList.add("azul"); // adiciona a classe 'azul' ao item
  console.log(index); // retorna o index do item na array
  console.log(array); // retorna a array completa
});
