// === Prototype ===
/* A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada. */

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const andre = new Pessoa("Andre", 28);

console.log(Pessoa.prototype); // retorna o objeto
console.log(
  andre.prototype
); /* Retorna undefined, pois o andre é um objeto. E o prototype só existe em funções */

// === funcao.protype ===

/* É possível adicionar novas propriedades e métodos ao objeto prototype */

Pessoa.prototype.andar = function () {
  return this.nome + " andou";
};

Pessoa.prototype.nadar = function () {
  return this.nome + " nadou";
};

console.log(Pessoa.prototype); // retorna o objeto, agora com os métodos incluidos

// === Acesso ao Protótipo ===
/* O objeto criado utilizando o construtor, possui acesso aos métodos e propriedades do protótipo deste contrutor. Lembrando, prototype é uma propriedade de funções apenas. */

const daniel = new Pessoa("Daniel", 30);
daniel.nome;
daniel.idade;
daniel.andar();
daniel.nadar();

// === proto ===
/* O novo objeto acessa os métodos e propriedades do protótipo através da propriedade __proto__. É papel da engine fazer essa busca, não devemos falar com __proto__ diretamente. */

// Acessam o mesmo método
// mas __proto__ não terá
// acesso ao this.nome

daniel.andar();
daniel.__proto__.andar();

// === Herança de protótipo ===
/* O objeto possui acesso aos métodos e propriedades do protótipo do construtor responsável por criar este objeto. O objeto abaixo possui acesso a métodos que nunca definimos, mas serão herdados do protótipo Object. */

Object.prototype;
daniel.toString();
daniel.isPrototypeOf();
daniel.valueOf();

// === Construtores nativos ===
/* Objetos, Funções, Números, Strings e outros tipos de dados são criados utilizando construtores. Esses construtores possuem um protótipo com propriedades e métodos, que poderão ser acessadas pelo tipo de dado. */

const pais = "Brasil";
const cidade = new String("Rio");

pais.charAt(0); // B
cidade.charAt(0); // R

String.prototype;

// === É possível acessar a funçãoi do protótipo ===
/* É comum, principalmente em códigos mais antigos, o uso direto de funções do protótipo do construtor Array. */

const lista = document.querySelectorAll("li");

// Transforma em uma array
const listaArray = Array.prototype.slice.call(lista);

// Existe também o método Array.from()

// ==== Método do Objeto vs Protótipo ===
/* Nos objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados ao protótipo */

Array.prototype.slice.call(lista);
Array.from(lista);

// Retorna uma lista com os métodos / propriedades
Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype);

// dado.constructor.name, retorna o nome do construtor;

// === Apenas os métodos do protótipo são herdados ===
// [1, 2, 3].slice(); // existe
// [1, 2, 3].from(); // não existe

// === Entenda o Que está Sendo Retornado ===
/* Os métodos e propriedades acessado com o . são referentes ao tipo de dados que é retornado antes desse . */

const Carro = {
  marca: "Ford",
  preco: 2000,
  acelerar() {
    return true;
  },
};

// Carro; // Object
// Carro.marca; // string
// Carro.preco; // Number
// Carro.acelerar; // function
// Carro.acelerar(); // boolean
// Carro.marca.chartAt; // function
// Carro.marca.chartAt(0); // string

// Verifique o nome do construtor com .constructor.name


console.log(Carro.marca.constructor.name); // string
