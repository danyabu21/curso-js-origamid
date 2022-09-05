const h1 = document.querySelector("h1");

console.log(Object.prototype.toString.call(h1)); // [object HTMLHeadingElement]
const htmlElement = document.querySelector("html");
console.log(Object.prototype.toString.call(htmlElement)); // [object HTMLHtmlElement]

console.log(h1.dataset); // retorna um DomStringMap com todos os data set disponíveis

// dataset
/* É uma propriedade de HTMLElement e é um objeto do tipo DomStringMap. Dentro dele existe uma coleção de chaves / valor, com todos os atributos do elemento html que começarem com data-. Podemos passar quantos data- desejarmos e o nome não importa para a linguagem. */

// podemos selecionar um elemento com os mesmo atributos do css

let divElement = document.querySelector("div"); //  por tag
divElement = document.querySelector("[data-cor]"); // pelo data-nome
divElement = document.querySelector("[data-cor='azul']"); //ou por data-nome="valor"
console.log(divElement.dataset); // retorna uma DomStringMap com todos os atributos data- dentro do divElement
/*
DOMStringMap {cor: 'azul', width: '500'}cor: "azul"width: "500"[[Prototype]]: DOMStringMap
 */

/* Quando uma DomStringMap retorna, o nome das propriedades são iguais aos nomes passados depois do data-. Caso seja um nome de dataset composto, "data-cor-padrao", o nome da propriedade será transformada em corPadrao. O data- facilidade o acesso do JS ao DOM. */

// Podemos acessar a propriedade normalmente, como fazemos em objetos.

console.log(divElement.dataset.cor); // azul
console.log(divElement.dataset.width); // 500

// Podemos também criar uma propriedade:

divElement.dataset.height = "1000"; //  propriedade foi criado no DOM.
divElement.dataset.bg = "Red"; //  propriedade foi criado no DOM.
//Podemos também, deletar uma propriedade:

delete divElement.dataset.bg; // Propriedade removidade do DOM

// Data Atributes
/* Os atributos e valores que começarem com data- poderão ser utilizados como forma de configuração
de plusgin e interações DOM/JS */

const spansElements = document.querySelectorAll("[data-anima]");

spansElements.forEach((span) => {
  span.classList.add(span.dataset.anima); //  atráves disso, podemos adiciona uma classe a cada span de acordo com o valor passado em seus respectivos data-anima.
});

// Data vs Class
//<div data-anima="left" data-tempo="1000">Exemplo Data</div>
//<div class="anima-left tempo-1000">Exemplo Classe</div>
/* Ambos funcionam da mesma forma, porém com a classe é mais complicada de manipular no quesito visual, organizacional e perfomático(no sentido de criação de código). */

// Nomenclatura
/* Por padrão, o JS não aceita traço(-) como carácter válido para nomear propriedades. Então qualquer
traço será removido e a letra seguinte tranformada em maiúscula. */

const pElement = document.querySelector('[data-anima-scroll="upper"]');

console.log(pElement.dataset); // {animaScroll: upper, tempoTotal: 200}
console.log(pElement.dataset.animaScroll); // upper
console.log(pElement.dataset.tempoTotal); // 200

// O mesmo vale para adcionar elementos:

pElement.dataset.valorTotal = 40; // no Dom ficará data-valor-total = 40;
