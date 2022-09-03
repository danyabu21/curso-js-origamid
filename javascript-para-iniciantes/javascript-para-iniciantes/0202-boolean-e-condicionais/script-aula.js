//  ==== Boolean ====
// Existem dois valores booleanos false ou true.

var possuiGraduacao = true;
var possuiDoutourado = false;

// ==== Condicionais If e Else ====

/* Verificar se uma expressão é verdadeira com if, caso contrário o else será ativado */

if (possuiGraduacao) {
  console.log("Possui Graduação.");
} else {
  console.log("Não possui graduação.");
}
// retorna possui graduação e não executa o else
// O valor dentro dos parênteses sempre será avaliado em false ou true.

if (possuiDoutourado && possuiGraduacao) {
  console.log("Possui Doutourado e Graduação.");
} else if (possuiGraduacao) {
  console.log("Possui apenas graduação.");
} else {
  console.log("Não possui nem doutorado e nem graduação.");
}

// ==== Switch ====
/* Com o SWITCH você pode verificar se uma variável é igual à diferentes valore
utilizando o CASE. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave BREAK; para cancelar a continuação caso a condição seja atingida. O valor DEFAULT ocorrerá caso nenhuma das anteriores seja verdadeira */

var carro = "HB20";

switch (carro) {
  case "Fit":
    console.log("Seu carro é um Honda");
    break;
  case "Gol":
    console.log("Seu carro é um Volkswagen");
    break;
  case "HB20":
    console.log("Seu carro é um Hyundai");
    break;
  default:
    console.log("Carro não está na lista.");
}

// ==== Truthy e Falsy ====

// Existem valores que retornam true e outros que retornarm false quando verificamos em uma expressão booleana.

// Valores que retornam Falsy:

if (false);
if (0); // ou -0
if (NaN);
if (null);
if (undefined);
if (""); // ou "" ou ´´ - toda string vazia é falsy.

// Valores que retornam Truthy

if (true);
if (1);
if (" "); // A string não está vazia, existe um espaço.
if ("Daniel");
if (-5);
if ({}); // objeto vazio

// ==== Operador Lógico de Negação ! ====

/* O Operador !, bega uma operação booleana. Ou seja, !true é igual a false */

// Truthy

if (!true); //false
if (!1); //false
if (!""); //true;
if (!undefined); //true
if (!!" "); //true
if (!!""); //false

//* Podemos utilizar o !! para verificar se a expressão é truthy ou falsy

// ==== Operadores de comparação ====

// Sempre irá retornar um valor booleano

10 > 5; // true
5 > 10; // false
20 < 10; //false
10 <= 10; // true
10 >= 11; // false

/* O operador == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos === */

10 == "10"; // true
10 == 10; // true
10 === "10"; // false
10 === 10; // true
10 != 15; // true
10 != "10"; // false
10 !== "10"; // true

// ==== Operadores Lógicos && ====

/* && compara se uma expresão e a outra é verdadeira (para resultar como verdadeiro, é necessário que ambas as expressões sejam verdadeiras)*/

true && true; // true
true && false; // false
false && true; // false
"Gato" && "Cão"; // 'Cão' - true - o && retorná a última condição verdadeira
5 - 5 && 5 + 5; // 0 - false - o && retornará a primeira condição falsa
"Gato" && false; // false
5 >= 5 && 3 < 6; // true

/* Se ambos os valores forem true ele irá retornar o último valor verificado. Se algum valor for false, ele retornará o mesmo e não seguirá com a verificação para os demais valores */

// ==== Operadores Lógicos || ====

/* O || compara se uma expressão ou a outra é verdadeira. Ou seja, basta que uma condional seja verdadeira, para todo resto ser verdadeiro. */

true || true; // true
true || false; // true
false || true; // true
"Gato" || "Cão"; // 'Gato' - o || retorna a primeira condição verdadeira
5 - 5 || 5 + 5; // 10 - true
"Gato" || false; // 'Gato' - true
5 >= 5 || 3 < 6; // true
false || false; // false - para ser falso, as duas condições têm que ser falsas
