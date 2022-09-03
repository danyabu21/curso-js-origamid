// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

function addAtivo(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove("ativo");
  });
  event.currentTarget.classList.toggle("ativo");
}

linksInternos.forEach((link) => {
  link.addEventListener("click", addAtivo);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const allElements = document.querySelectorAll("body *");

function showElement(event) {
  console.log(event.currentTarget);
}

allElements.forEach((element) => {
  element.addEventListener("click", showElement);
});
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function removeElement(event) {
  // event.currentTarget.remove();
}

allElements.forEach((element) => {
  element.addEventListener("click", removeElement);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

const bodyDocument = document.querySelector("body");

function fontSize(event) {
  if (event.key === "t") {
    document.documentElement.classList.toggle("large-font");
  } else if (event.key === "a") {
    bodyDocument.classList.toggle("azul");
  } else if (event.key === "1") {
    bodyDocument.classList.toggle("verde");
  }
}

window.addEventListener("keydown", fontSize);
