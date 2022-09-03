// ===== Objetos =====

/* É um conjunto de variáveis e funções, que são chamadas de propriedades e métodos 

Ex:
*/

// Dentro da variável existem dados fixos que são chamados de propriedades

// ===== Criar um Objeto ====

// Um objeto é criado utilizando chaves {}

var carro = {};
var empresa = {};

console.log(typeof carro); // Object

var pessoa = {
  nome: "Daniel",
  sobrenome: "Yabu",
  idade: 30,
  hobby: "games",
  possuiFaculdade: false,
};

console.log(pessoa.hobby); // games
console.log(pessoa.nome); // Daniel
console.log(pessoa.possuiFaculdade); // false

// ===== Método =====

/* É uma propriedade que possui uma função no local do seu valor */

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimeto: function (lado) {
    return this.lados * lado; // usamos o this. para acessar a variável que está fora do método, mas dentro do objeto.
  },
};

console.log(quadrado.lados); // 4
console.log(quadrado.area(5)); // 25
console.log(quadrado.perimeto(6));

// ===== Métodos =====

// Abreviação de area: function(){} para area(){}, no ES6+.

var retangulo = {
  base: 120,
  area(altura) {
    // declarção de método sem a palavra function
    return this.base + altura;
  },
};

console.log(retangulo.area(60));

// ===== Organizar Código

/* Objetos servem para organizar o código em pequenas partes reutilizáveis */

Math.PI; //3.14
Math.random();

var pi = Math.PI;
console.log(pi); // 3.14

/* Math é um objeto nativo de JavaScript. Já percebeu que console é um objeto e log() um método? */

// ==== Dot Notation Get ====

/* Acesse propriedades de um objeto utilizando ponto */

var menu = {
  width: 800,
  height: 50,
  backgoundColor: "#84e",
};

var bg = menu.backgoundColor; // #84e
console.log(bg);

// ==== Dot Notation Set ====
/* Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma  */

menu.backgoundColor = "#000";
console.log(menu.backgoundColor);

// ==== Adicionar propriedades e métodos ====
/* Basta adicionar um nome depois do . para definir o valor. Se uma propriedade já existir, simplesmente será substituída. */

menu.color = "#fff";
menu.position = "fixed";

console.log(menu.color);
console.log(menu.position);

menu.andarCarro = function () {
  console.log("O Carro andou!");
};

menu.andarCarro();

// ==== This =====

var height = 200; // <= variável height do lado de fora do objeto
var menu2 = {
  width: 1000,
  height: 100,
  metadeHeight() {
    return (
      this.height / 2
    ); /* o this está retornando o menu2.height. Se não for usado, a função puxaria o valor da var heigth que está fora do objeto. Diferente da função fora de um objeto, o método tem acesso as variáveos criadas fora do objeto*/
  },
};

// ==== Protótipo de Herança ====
/* O objeto herda própriedades e métodos do objeto que foi utilizado para criar o mesmo. */

console.log(menu.hasOwnProperty("color")); // está checando se no meu objeto existe a propriedade em questão, retornando um valor booleano.
console.log(menu.hasOwnProperty("height")); // true
console.log(menu.hasOwnProperty("display")); // false
console.log(menu.hasOwnProperty("hasOwnProperty")); // false - ela possui a propriedade em questão, porém como herança e não como criação.
