// ==== Height e Width ====
/* Estão são as propriedades e métodos dos objetos Element HTMLElement, a maioria delas são Read Only */

const animaisSection = document.querySelector(".animais");
console.log(animaisSection.clientHeight); // retorna o height + padding
console.log(animaisSection.offsetHeight); // height + padding + border
console.log(animaisSection.scrollHeight); // height total, mesmo dentro do scroll

// Isso vale também para o Width

// ==== offsetTop e offsetLeft ====
/* O offsetTop retorna a distância entre o topo do elemento e o topo da página. Já o offsetLeft retorna a distância entre o canto esquerdo do elemento e o canto esquerdo da página. */

const primeiroH2 = document.querySelector("h2");

console.log(primeiroH2.offsetTop); // 202px até o topo
console.log(primeiroH2.offsetLeft); // 130px até a esquerda

// ==== getBoudingClientRect() ====
/* Método que retorna um objeto (DOMRect) com valores de width, height, distância do elemento e mais */

console.log(primeiroH2.getBoundingClientRect()); // retorna um objeto (DOMRect)

const h2Rect = primeiroH2.getBoundingClientRect();

if (h2Rect.top < 0) {
  console.log("Passou do H2");
}

// ==== Window ====

console.log(window.innerWidth); // width da janela
console.log(window.outerWidth); // width da janela + ferramenta do desenvolvedor
console.log(window.innerHeight); // height da janela
console.log(window.outerHeight); // height da janela + barra do navegador
console.log(window.pageYOffset); // distância total do scroll horizontal
console.log(window.pageXOffset); // distância total do scroll vertical

if (window.innerWidth < 800) {
  console.log("Página menor que 800");
}

// ==== matchMedia() ====
/* Utilize um media-querie, como no CSS, para verificar a largura do browser */

const small = window.matchMedia("(max-width: 700px)"); // retorna o matches, que de acordo com a condição retornará um valor booleano.

if (small.matches) {
  console.log("Usuário Mobile");
} else {
  console.log("Usuário Desktop");
}

// Ex:
const width500 = window.matchMedia("(max-width:500px)");
const primeiraImg = document.querySelector("img");

if (width500.matches) {
  primeiraImg.setAttribute("src", "img/imagem1-alt.jpg");
  console.log("A imagem da Raposa mudou!");
} // abaixo de 700px a imagem da raposa é trocada. É necessário dar refresh na página.
