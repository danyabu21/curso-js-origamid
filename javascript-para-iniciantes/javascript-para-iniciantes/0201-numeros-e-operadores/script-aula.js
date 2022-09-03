// ==== Números ====

var idade = 30;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000 (a quantidade de zeros após o número 2) - precisão para até 15 dígitos

console.log(exp);

// ==== Operadores Aritméticos Binários ====

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // (2*2*2*2) = 16
var modulo = 14 % 5; // resto da divisão = 4

// * lembrando que soma (+) em strings serve para concatenar

// ==== Operadores Aritméticos (Strings) ====

var somaString = "100" + 50; // 10050 - concatenou e retonou uma string
var subtracaoString = "100" - 50; // 50 - nesse caso a string foi convertida para numero e retornou um number, pois é impossível diminuir uma string

var multiplicacaoString = "100" * "2"; // 200 - mesma coisa do caso acima, retorno um number.

var divisaoString = "100" / 2; //50 - mesmo caso acima, retorna um number

// ==== NaN ====
//É possível verificar se uma variável é NaN ou não com a função isNaN()

var divisaoStringEspecial = "comprei 10" / 2; // NaN - Not a Number, como há strings que não são números, se torna impossível a conversão, tento como resultado algo que não é um número.

var testeNaN = "1000 maças" * 2;
console.log(testeNaN);

console.log(isNaN(testeNaN)); //true - sempre retorna um valor booleano
console.log(isNaN(multiplicacaoString)); //false

// ==== Precedência Aritmética ===
// A ordem importa

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = (20 / 2) * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

// ==== Operadores Aritméticos Unários ====

var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

var decremento = 5;
console.log(decremento--); // 5
console.log(decremento); // 4

var decremento2 = 5;
console.log(--decremento2); // 4
console.log(decremento2); // 4

// O + e - tenta transformar o valor seguinte em número

var frase = "Isso é um teste";
+frase; // NaN
-frase; // NaN

var idade = "28";
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

// O - antes de um número torna ele negativo
