// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const section = document.querySelector("section");
const paragrafos = document.querySelectorAll("p");
const newparagrafos = Array.from(paragrafos);
const caracteresQtd = newparagrafos.reduce((acc, item) => {
  return acc + item.innerText.length;
}, 0);

console.log(caracteresQtd); // 655

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo) {
  const element = document.createElement(tag);
  classe ? element.classList.add(classe) : null;
  conteudo ? (element.innerHTML = conteudo) : null;
  return element;
}

console.log(criarElemento("h1", "show", "Novo Título"));

section.appendChild(criarElemento("h2", "ativo", "Novo subtítulo"));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, "h1", "titulo");
console.log(h1Titulo("Título Bind"));
