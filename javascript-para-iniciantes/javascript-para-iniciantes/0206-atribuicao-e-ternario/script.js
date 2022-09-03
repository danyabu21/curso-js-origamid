// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
console.log(`O valor inicial de Scroll é: ${scroll}`);
scroll += 500;
console.log(`O novo valor de Scroll é: ${scroll}`);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var Credito = possuiCarro && possuiCasa ? "Dar crédito." : "Não dar Crédito.";
console.log(Credito);
