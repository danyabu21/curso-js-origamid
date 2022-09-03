// Exemplo real, criando um objeto simples:

// const Dom = {
//   seletor: "li",
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     this.element().classList.add("ativo");
//   },
// };

// // caso queira alterar o seletor:
// Dom.ativar();
// Dom.seletor = "ul";
// Dom.ativar();

// Agora usando uma constructor function:

function Dom(seletor) {
  this.element = function () {
    return document.querySelector(seletor);
  };
  this.ativar = function (classe) {
    this.element().classList.add(classe);
  };
}

const li = new Dom("li");
li.ativar("ativo-li");

const lastLi = new Dom("li:last-child");
lastLi.ativar("ativo-last-li");

const ul = new Dom("ul");
ul.ativar("ativo-ul");
const h1 = new Dom("h1");
h1.ativar("ativo-h1");
