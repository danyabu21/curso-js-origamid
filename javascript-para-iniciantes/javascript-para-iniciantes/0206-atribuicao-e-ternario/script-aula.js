// ==== Operadores de atribuição ====

let x = 5;
let y = 10;

x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y  (0)
x **= y; // x = x ** y (9765625)

// ==== Operador Ternário ====
// Abreviação de condicionais if e else

let idade = 18;
let podeBeber = idade >= 18 ? "Pode Beber" : "Não pode beber";
console.log(podeBeber);

// estrutura = condição ? true : false
/* Geralmente é utilizado quando é necessário atribuir um valor
à uma variável, dependendo de uma condição */
// podemos atribuir mais de uma condicional se for o caso
/* Não faz sentido retornar um valor booleano em um operador ternário, pois a própria condição por si própria já retorna isso */

let chuva = false;
let distancia = parseFloat(prompt("Digite a distância da viajem em Km"));
/* toda variável inserida no prompt é convertida para string, então convertemos para um número decimal usando o parseFloat() e dentro adicionamos o prompt() para solicitarmos um valor para o usuário */
let transporte =
  distancia <= 250 && chuva ? "Dá pra ir de carro!" : "Melhor ir de avião!";
console.log(transporte);
