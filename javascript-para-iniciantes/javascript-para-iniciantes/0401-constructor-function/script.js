// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(this.nome + " andou");
  };
}

// Crie 3 pessoas, João - 20 anos,
const joao = new Pessoa("João", 20);
console.log(joao);
console.log(joao.andar());

// Maria - 25 anos,
const maria = new Pessoa("Maria", 25);
console.log(maria);
console.log(maria.andar());

// Bruno - 15 anos
const bruno = new Pessoa("Bruno", 15);
console.log(bruno);
console.log(bruno.andar());

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  this.addClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    });
  };
  this.removeClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.remove(classe);
    });
  };
}

const listaItens = new Dom("li");
console.log(listaItens.elements);
listaItens.addClass("show");
listaItens.removeClass("show");

const ulTag = new Dom("ul");
ulTag.addClass("show-ul");
