// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const cepInput = document.querySelector(".cep");
const cepBtn = document.querySelector(".btn-cep");
const enderecoContainer = document.querySelector(".endereco");
enderecoContainer.style.display = "none";

function enviarCEP(event) {
  event.preventDefault();
  const url = fetch(`https://viacep.com.br/ws/${cepInput.value}/json/`);
  url.then((response) => {
    response.json().then((endereco) => {
      const logradouro = document.querySelector(".logradouro");
      const bairro = document.querySelector(".bairro");
      const localidade = document.querySelector(".localidade");
      const uf = document.querySelector(".uf");
      logradouro.innerText = endereco.logradouro;
      bairro.innerText = endereco.bairro;
      localidade.innerText = endereco.localidade;
      uf.innerText = endereco.uf;
      enderecoContainer.style.display = "block";
    });
  });
}

cepBtn.addEventListener("click", enviarCEP);

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

setInterval(() => {
  const valorBitcoin = fetch("https://blockchain.info/ticker");
  valorBitcoin.then((response) => {
    response.json().then((valor) => {
      const outputBitcoinValor = document.querySelector(".bitcoin-valor");
      outputBitcoinValor.innerText = valor.BRL.buy.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    });
  });
}, 1000);
