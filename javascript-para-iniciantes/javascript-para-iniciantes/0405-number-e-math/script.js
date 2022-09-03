// Retorne um número aleatório
// entre 1050 e 2000

const randomNum = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);

console.log(`Número aleatório: ${randomNum}`);

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";
const arrayNumeros = numeros.split(",");
const numeroMaximo = Math.max(...arrayNumeros);

console.log(`O maior número da Array: ${numeroMaximo}`);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total

const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

// Solução da aula:

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace("R$", "").trim().replace(",", ".");
  preco = +preco.toFixed(2);
  return preco;
}

let soma = 0;
listaPrecos.forEach((preco) => {
  soma += limparPreco(preco);
});

console.log(
  soma.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
);

/* Minha solução:


let listaPrecosSoma = 0;
function limparPrecos() {
  listaPrecos.forEach((preco) => {
    preco = preco.toUpperCase();
    preco = preco.replace(",", ".");
    preco = preco.replace("R$", "");
    preco = preco.trim();
    preco = Number.parseFloat(preco, 10);
    preco = +preco.toFixed(2);
    listaPrecosSoma += preco;
  });
  console.log(`A soma total dos valores é de R$ ${listaPrecosSoma}`);
}

limparPrecos();
*/
