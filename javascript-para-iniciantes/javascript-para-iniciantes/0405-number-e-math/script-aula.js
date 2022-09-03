// Number e Math

// === Number ===
/* É a construtora de números, todo número possui as propriedades e métodos do prototype de Number. Number também possui alguns métodos separdos. */

const ano = 2022;
const preco = new Number(99);

// *** Number.isNaN() e Number.isInteger() ***
/* isNaN() é um método de Number, ou seja, não faz parte to protótipo. isInteger() verifica se é uma integral. */

Number.isNaN(NaN); // true
Number.isNaN(5); // false
Number.isNaN("a"); // false

Number.isInteger(20); // true
Number.isInteger(20.1); // false

// *** Number.parseFloat() e Number.parseInt() ***
/* parseFloat() serve para retornarmos um número a partir de uma string. A String deve começar com um número. parseInt recebe também um segundo parâmetro que é o Radix, 10 é para decimal. */

parseFloat("99.50"); // mesma função sem o Number
Number.parseFloat("99.50"); // 99.50
Number.parseFloat("100 reais"); // 100
Number.parseFloat("R$100"); //NaN

parseInt("99.50", 10); //99
Number.parseInt("99.50", 10); //99
Number.parseInt(5.43434355555, 10); // 5
Number.parseInt("100 reais", 10); // 100

// * Float possui decimal, Integer não.

// *** n.toFixed(decimais) ***
/* Arredonda o número com base no total de casas decimais do argumento. É um método direto do protótipo. */

const preco2 = 2.99;
+preco2.toFixed(); // 3 - esse método retorna uma string, para transformar em número, colocamos o + na frente

const precoCarro = 1000.455;
precoCarro.toFixed(2); // 1000.46

const precoTV = 1499.99;
precoTV.toFixed(); // 1500

(45.99).toFixed(4); // 45.9900
(45.99).toFixed(); // 46

// *** n.toString(radix) ***
/* Transforma o número em uma string com base no Radix. Use o 10 para o sistema decimal. */

const preco4 = 2.99;
preco.toString(10); // '2.99'

// *** n.toLocaleString(lang, options) ***
/* Formata o número de acordo com a língua e opções passadas.*/

let valor = 48.49;

const valor1 = valor.toLocaleString("pt-br", {
  style: "currency",
  currency: "BRL",
});
const valor2 = valor.toLocaleString("en-us", {
  style: "currency",
  currency: "USD",
});

console.log(valor1); // R$ 48,48
console.log(valor2); // $48.49

// === Math ===
/* É um OBJETO nativo que possui propriedades e métodos de expressões matemáticas comuns. */

Math.PI; // 3.14159
Math.E; // 2.718
Math.LN10; // 2.303

// *** Math.abs(), Math.ceil(), Math.floor(), Math.round() ***
/* abs() retorna o valor absoluto, ou seja, transforma negativo em positivo. ceil() arredonda para cima, retornando sempre uma integral e floor para baixo. round() arredonda para o número integral mais próximo.*/

Math.abs(-5.5); // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.2); // 5 - arrendoda sempre pra cima
Math.floor(4.3); // 4
Math.floor(4.8334); // 4 - arredonda sempre pra baixo
Math.round(4.8334); // 5 - arredonda de maneira normal
Math.round(4.3); // 4

// *** Math.max(), Math.min(), Math.random ***
/* max() retorna o maior número de uma lista de argumentos, min() o menor número e random() um número aleatório entre 0 e 1..*/

console.log(Math.max(4, 8, 14, 2, 42, 3)); // retorna 42
console.log(Math.min(4, 8, 14, 2, 42, 3)); // retorna 2

console.log(Math.random()); // retorna um valor quebrado entre 0 e 1

Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500); // entre 0 e 500
Math.floor(Math.random() * (72 - 32 + 1)) + 32;
// Math.floor(Math.random() * (max - min + 1)) + min;
