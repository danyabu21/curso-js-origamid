// ==== Array ====
/* É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável */

var videoGames = [
  "PS5",
  "Xbox S/X",
  "Nintendo Switch",
  "Sega Saturn",
  "SNES",
  "NeoGeo",
];

// Acessamos um elemento da array utilizando [numero]
// Array é base 0

// ==== Métodos e propriedades de uma Array
console.log(videoGames); // array
videoGames.pop(); // remove o último item e retorna o mesmo.
console.log(videoGames[0]); // PS5
console.log(videoGames[1]); // Xbox S/X
videoGames.push("3DS", "PS2"); // Adiciona ao final da Array

console.log(videoGames.length); // 7

/* Existem diversos outros métodos, como map, reduce, forEach. */

// ==== For Loop ====
// Faz algo repedidamente até que uma determinada condição seja atingida.

console.log("For Loop");

for (i = 0; i <= 10; i++) {
  console.log(i); // retorna de 0  a 10 no console
}

// o For Loop possui 3 partes : início, condição e incremento

// for (inicio; condição; incremento) {}

// While Loop
// Menos utilizado que o For

console.log("While Loop");
var n = 11;
while (n <= 20) {
  console.log(n);
  n++;
}

//  ==== Arrays e Loops ====

for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
}

//  ==== Break ====
/* O loop irá para caso encontre a palavra break */

var listaDeJogos = [
  "Castlevania",
  "Hollow Knight",
  "Suikoden 2",
  "FF Tatics",
  "Bom de Guerra",
  "The Last of Us",
];
for (var jogo = 0; jogo < listaDeJogos.length; jogo++) {
  console.log(listaDeJogos[jogo]);
  if (listaDeJogos[jogo] === "Bom de Guerra") {
    break; // a execução do código para quando a condição é atingida
  }
}

// ==== forEach ====

/* É um método que executa uma função para item da Array. É uma forma bastante utilizada e mais simples de utilizarmos um loop com Arrays(ou Array-Like) */

var cidades = ["Tokyo", "Londres", "Viena", "Salvador", "Florença"];

cidades.forEach((cidade, index, array) => {
  console.log(cidade);
  console.log(index);
  console.log(array);
});
// o argumento cidade será atribuído dinamicamente
// podemos passar os seguintes parâmetros: item, index, array
