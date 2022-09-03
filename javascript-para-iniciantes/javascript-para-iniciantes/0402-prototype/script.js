// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome} `;
};

const daniel = new Pessoa("Daniel", "Yabu", 30);
console.log(daniel.nomeCompleto());
// Liste os métodos acessados por
// dados criados com
Object.getOwnPropertyNames(NodeList.prototype);
// NodeList - entries, for.Each, item, keys, values
Object.getOwnPropertyNames(HTMLCollection.prototype);
// HTMLCollection - item, namedItem, Symbol
Object.getOwnPropertyNames(Document.prototype);
// Document - adoptNode, apend, captureEvents

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li; // HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // undefined , não existe constructor de null e undefined

// Qual o construtor do dado abaixo:

li.hidden.constructor.name; // String
