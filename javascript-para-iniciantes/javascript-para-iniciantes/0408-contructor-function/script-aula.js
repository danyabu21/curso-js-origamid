// Contructor Function

/* Podemos criar uma função através de sua função contrutora(algo que raramente será usado dessa forma). */

const funcaoPerimetro = new Function("lado", "return lado * 4"); // o primeiro argumento é o argumento da função. O segundo, é o miolo da função.

console.log(funcaoPerimetro(4)); // 16

// Propriedades de uma função

/* A primeira propriedade é a .length, onde será retornada a quantidade de argumento dessa função. A segunda é a .name, onde será retornado
o nome da função através de uma string. */

function somar(n1, n2, n3) {
  return n1 + n2 + n3;
}

console.log(somar(3, 1, 2)); // 6 <= Number
console.log(somar.length); // 3 argumentos
console.log(somar.name); // 'somar'
console.log(typeof somar.name); // string

// Métodos de uma função
// function.call()
/* function.call(this, arg1, arg2, ...) simplesmente executa a função. Sendo possível passarmos uma nova referência de this da mesma.
Esse método serve para qualquer função, inclusive o forEach(), map() e reduce() */

function hello(nome) {
  return `Hello World, Mr.${nome}!`;
}

console.log(hello("Daniel")); // "Hello World, Mr. Daniel!"
console.log(hello.call("Daniel")); // "Hello World!, Mr. undefined"
console.log(hello.call(null, "Daniel")); // "Hello World!, Mr. Daniel"

const comida = {
  nome: "Sushi",
  origem: "Japão",
};

const frutas = {
  nome: "Manga",
  origem: "Ásia",
};

function descreverAlimento(valor) {
  return `${this.nome} ${this.origem} - ${valor}`; // o this dessa função faz referência ao Window
}

console.log(descreverAlimento()); // undefined undefined pois o this não foi definido.
console.log(descreverAlimento.call()); // undefined undefined
console.log(descreverAlimento.call(comida, 100)); // Sushi Japão - 100 => sendo o 100 o argumento da função
console.log(descreverAlimento.call(frutas, 50)); // Manga Ásia - 50

// Com o call eu posso subistiuir por um novo objeto, lembrando que os objetos DEVEM ser iguais.

// call() e forEach()/ map()/ reduce()
const carros = ["Ferrari", "McLaren", "Renault", "Mercedes"];
const carrosJaponeses = ["Honda", "Toyota", "Mitsubishi", "Suzuki", "Mazda"];

carros.forEach((carro) => {
  console.log(carro); //"Ferrari", "McLaren", "Renault", "Mercedes"
});
// No caso das arrays, o this é a própria array que está sendo iterada
carros.forEach.call(carrosJaponeses, (carro) => {
  // substítuiu a referência do this, que passou a ser de carrosJaponeses
  console.log(carro); // "Honda", "Toyota", "Mitsubishi", "Suzuki", "Mazda"
});

// Exemplo real:

function DomSeletor(seletor) {
  this.element = document.querySelector(seletor);
}

DomSeletor.prototype.ativar = function (classe) {
  // criando o método dentro do prototipo da função construtora criada
  this.element.classList.toggle(classe); // adicionanando a classe ao elemento selectionado na função construtora
};

const ulElement = new DomSeletor("ul");
ulElement.ativar("ativar");

const liElement = new DomSeletor("li");
ulElement.ativar.call(liElement, "ativar");

// O mais comum é utilizar da maneira abaixo:

DomSeletor.prototype.ativar.call(liElement, "classeAtiva");

// call() e ArrayLike

const liList = document.querySelectorAll("li");

const filteredList = Array.prototype.filter.call(liList, (item) => {
  return item.classList.contains("ativar");
});

// caso não use o call, é necessário converter a array-like para uma array e aplicar a verificação direto nela

const newList = Array.from(liList);
const filter = newList.filter((item) => {
  return item.classList.contains("ativar");
});

// apply()
/* Funciona como o call, a única diferença é que passamos os argumentos através de uma array */
const maiorNumero = [2, 4, 6, 8, 10, 12, 14, 16];

console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 10
console.log(Math.max.call(null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 13)); // 13
console.log(Math.max.apply(null, maiorNumero)); // 16

// bind()
/* Diferente de call e apply,  bind() não irá executar a função, mas sim retornar a mesma com o novo contexto de this.*/

const sectionList = document.querySelectorAll("section");

const sectionListFilter = Array.prototype.filter.bind(sectionList, (item) => {
  return item.classList.contains("show");
});

console.log(sectionListFilter());

// Quando queromos reusar o código, utilizamos o bind(). Quando não, usamos o call() ou apply()

// Macete pra encurtar uma função e reutilizar
const $ = document.querySelectorAll.bind(document);

console.log($("li")); // li
console.log($("section")); // NodeList sections
