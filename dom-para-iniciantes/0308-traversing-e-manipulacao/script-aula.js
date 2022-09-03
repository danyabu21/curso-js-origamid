// === outerHTML, innerHTML, innerText ===
/* Propriedades que retornam uma string contendo o html ou ttexto. É possível atribuit um novo valor para as mesmas element.innerText = 'Novo Texto'*/

const titulo = document.querySelector(".titulo");

console.log(titulo.outerHTML); // todo o HTML do elemento (inclusive ele mesmo)
console.log(titulo.innerHTML); // todo o HTML interno desse elemento
console.log(titulo.innerText); // todo texto, sem tags

titulo.innerText = "<h1>Título alterado por innerHTML</h1>"; // a tag é texto
titulo.innerHTML = "<h1>Título alterado por innerHTML</h1>"; // a tag é adicionada ao documento e renderizada

// === Traversing ===

/* Como navegar pelo DOM, utilizando suas propriedades e métodos */

const lista = document.querySelector(".animais-lista");

console.log(lista.parentElement); // retorna o pai do elemento
console.log(lista.parentElement.parentElement); // retorna o pai do pai. Podemos utilizar essa sequência quantas vezes quisermos

console.log(lista.previousElementSibling); // retorna o elemento acima
console.log(lista.nextElementSibling); // retorna o elemento abaixo

console.log(lista.children); // retorna uma HTMLCollection com os filhos
console.log(lista.children[0]); // retorna o primeiro filho
console.log(lista.children[--lista.children.length]); // retorna o ultimo filho

// podemos continuar selecionando dentro da lista:

const lisInterna = lista.querySelectorAll("li"); //retorna todas as li's
console.log(lisInterna);

const ultimaLi = lista.querySelector("li:last-child");
console.log(ultimaLi); // também retorna o ultimo li

// === Element vs Node ===

/* Element's representam um elemento html, ou seja, uma tag. Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais */

console.log(lista.childNodes); // retorna uma NodeList com todos os nodes do elemento.
console.log(lista.previousSibling); // node anterior ao elemento
console.log(lista.nextSibling); // node posterior ao elemento
console.log(lista.firstChild); // retorna o primeiro filho Node

// Geralmente estamos buscando um elemento e não de qualquer node em si.

// === Manipulando elementos ===
/* É possível mover elementos no DOM com métodos de Node */
const animais = document.querySelector(".animais");
const contato = document.querySelector(".contato");
const tituloContato = contato.querySelector("h1");
const mapa = document.querySelector(".mapa");

// animais.appendChild(tituloContato); // move o titulo e acrescenta como ultimo filho do elemento onde está sendo adicionado o método
contato.insertBefore(animais, mapa); // insere animais antes do mapa
contato.replaceChild(lista, mapa); // substituiu o mapa pela lista
contato.removeChild(tituloContato); // removeu o titulo de contato

// === Novos Elementos ===
/* Podemos criar novos elementos com o método createElement() */

const faq = document.querySelector(".faq");
const novoH1 = document.createElement("h1");
novoH1.innerText = "Novo Título da Sessão";
novoH1.classList.add("titulo");
faq.appendChild(novoH1);

// === Clonar Elementos ===
/* Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior é necessário usar o método cloneNode() */

const titulo1 = document.querySelector("h1");
const titulo2 = document.querySelector("h1");
const titulo3 = titulo1;
// titulo1, titulo2 e titulo3 são todos iguais

const cloneTitulo = titulo1.cloneNode(true); //O true sinaliza para incluir os filhos, caso false, ele trás apenas a tag que engloba o elemento. Com isso clonamos o titulo 'FAQ' e...
contato.appendChild(cloneTitulo); // adicionamos como ultimo filho do elemento contato
