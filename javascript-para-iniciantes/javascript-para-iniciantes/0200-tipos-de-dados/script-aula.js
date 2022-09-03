var nome = "Daniel";
var idade = 30;
var time;
var cor = null;
var simbolo = Symbol();

console.log(typeof nome); // string
console.log(typeof idade); // number
console.log(typeof time); // undefined
console.log(typeof cor); // object - é normal retornar um objeto com atribuímos o valor null para ela.
console.log(simbolo); // Symbol()

var sobrenome = " Yabu";
var nomeCompleto = nome + sobrenome;
console.log(nomeCompleto);

// caso seja concatenado uma sting + number, o resultado sempre sera do tipo string

// ============== Template Strings
// No S6, temos a opção de usar o template string

var gols = 1000;
var frase1 = "Romário fez " + gols + " gols!";
var frase2 = `Romário fez ${gols} gols!`;
// Devemos passar expressões / variáveis dentro do ${}.

console.log(frase1);
console.log(frase2);
