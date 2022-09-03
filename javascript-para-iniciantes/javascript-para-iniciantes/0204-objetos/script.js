// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var dadosPessoais = {
  nome: "Daniel",
  sobrenome: " Yabu",
  idade: 30,
  peso: 90,
};
// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function () {
  return `Meu nome completo é ${this.nome}${this.sobrenome}`;
};

console.log(dadosPessoais.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var meuFuturoCarro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

meuFuturoCarro.preco = 3000;

console.log(meuFuturoCarro.preco);

// Crie uma propriedade no objeto anterior, que mostre o ano do carro
meuFuturoCarro.anoDeCompra = 2024;
console.log(meuFuturoCarro.anoDeCompra);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "homem") {
      return "O cachorro latiu.";
    } else {
      return "O cachorro não fez nada.";
    }
  },
};

console.log(cachorro.latir("homem"));
console.log(cachorro.latir("mulher"));
