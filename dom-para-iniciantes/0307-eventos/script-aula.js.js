// #### Eventos ####

// === addEventListener ===
/* Adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento. */

const imagem = document.querySelector("img");

// - Podemos chamar o evento e criar a função anônima ou arrowFunction dentro do escopo.

imagem.addEventListener("click", function () {
  console.log("Você clicou na imagem (usando função anônima).");
});

imagem.addEventListener("click", () => {
  console.log("Você clicou na imagem (usando arrow function).");
});

// === Callback ===
// - É boa prática separar a função do callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima.

function mostrarClique() {
  console.log("Você clicou na imagem (declarando a função fora do evento).");
}
imagem.addEventListener("click", mostrarClique);

// === Event ===
/* O primeiro parâmetro do callback é referente ao evento que ocorreu. */

function clicarEvent(event) {
  console.log(
    event
  ); /* retorna um objeto com diversos métodos e propriedades.  */
}

imagem.addEventListener("click", clicarEvent);

// Propriedades do event

const animaisLista = document.querySelector(".animais-lista");

function callbackTarget(event) {
  console.log(event.currentTarget); // (this) retorna o objeto selecionado (animaisLista)
  console.log(event.target); // retorna o elemento, no caso a imagem, exato onde aconteceu o evento (haverá caso onde será o mesmo elemento do currentTarget)
  console.log(event.type); // retorna o tipo do evento
  console.log(event.path); // retorna o caminho do elemento onde ocorreu o evento
}

animaisLista.addEventListener("click", callbackTarget);

// event.preventDefault()
/* Previne o comportamento padrão do evento no browser. No caso de um link, por exemplo, irá previnir que o link seja ativado*/

const linkExterno = document.querySelector('a[href^="https"]');

function previnirLinkExterno(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener("click", previnirLinkExterno);

// this
/* A palavra chave this é uma polavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado. */
// Geralmente é igual ao currentTarget
const mapa = document.querySelector('[src^="img/mapa"]');

function handleMapa(event) {
  console.log(this); // retorna a imagem
  console.log(event.currentTarget); // também retorna a imagem
  console.log(
    this.getAttribute("src")
  ); /* podemos usar métodos e propriedades do objeto */
}
mapa.addEventListener("click", handleMapa);

// Diferentes eventos
/* Existem diversos eventos como click, scroll, resize, keydown (quando a tecla é pressionada), keyup(quando a tecla é solta), mouseenter(quando se passa o mouse em cima) e mais. Eventos podem ser adicionados a diferentes elementos, como o window e document também. */

const tituloSelecionado = document.querySelector("h1");

function handleEvent(event) {
  console.log(event.type, event);
}

tituloSelecionado.addEventListener("click", handleEvent);
tituloSelecionado.addEventListener("mouseenter", handleEvent);
window.addEventListener("scroll", handleEvent);
window.addEventListener("resize", handleEvent);
window.addEventListener("keydown", handleEvent);

// https://developer.mozilla.org/pt-BR/docs/Web/Events

// keyboard
/* Podemos adicionar atalhos para facilitar a navegação no site. */

const menu = document.querySelector("nav");

function handleKeyboard(event) {
  if (event.key === "a") {
    menu.classList.toggle("bg-azul");
  } else if (event.key === "v") {
    menu.classList.toggle("bg-verde");
  }
}

window.addEventListener("keydown", handleKeyboard);

// === forEach e eventos ===
/* O método addEventListener é adicionado à um único elemento. Então é necessário um loop entre elementos de uma lista, para adicionarmos o evento à cada um deles. */

const imgs = document.querySelectorAll("img");

function imgSrc(event) {
  const src = event.currentTarget.getAttribute("src");
}

imgs.forEach((img) => {
  img.addEventListener("click", imgSrc);
});
