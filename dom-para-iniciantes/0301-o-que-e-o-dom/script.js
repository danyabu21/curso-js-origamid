// Retorne o url da página atual utilizando o objeto window
const href = window.location.href;
console.log(`A url dessa página é a seguinte: ${href}`);

// Seleciona o primeiro elemento da página que
// possua a classe ativo.

const primeiroAtivo = document.querySelector(".ativo");

console.log(
  `O primeiro elemento com a classe 'ativo' é o ${primeiroAtivo.innerText}`
);
// Retorne a linguagem do navegador
const idioma = window.navigator.language;
console.log(`O idioma do navegador é ${idioma}`);

// Retorne a largura da janela

const larguraDaJanela = window.innerWidth;
console.log(`A largura da janela é ${larguraDaJanela}px`);
