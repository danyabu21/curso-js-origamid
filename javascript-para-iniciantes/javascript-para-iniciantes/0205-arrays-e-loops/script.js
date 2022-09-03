// EXERCÍCIO

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

let copasVencidas = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

copasVencidas.forEach((copa) => {
  console.log(`O Brasil ganhou a copa de: ${copa}`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

for (let fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
  if (frutas[fruta] === "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

// let ultimaFruta = frutas[frutas[4]]; O problema de usar desse modo é que precisamos
// saber a quantidade de item da array.
let ultimaFruta = frutas[frutas.length - 1]; // modo mais correto de puxar o último item.
console.log(ultimaFruta);
