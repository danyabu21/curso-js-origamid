// ==== Document Object Model (DOM ====)

/* É uma interface que representa documentos HTML e XML através de Objetos. Com ela é possível manipular a estrutura, estilo e conteúdos destes documentos. */

console.log(window); /* window é o objeto global do browser e
 possui diferentes métodos e propriedades.*/

console.log(window.innerHeight); // retorna a altura do browser

/* Ao inspecionar elemento com o Chrome, você está vendo a representação oficial do DOM. */

/* window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades. Ex: */
// window.alert("Olá!");
// alert("Oi!");

// ==== Node ====

/* Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node. */

const titulo = document.querySelector("h1");
titulo; // h1
titulo.innerText; // Retornar o título 'Document Object Model (DOM)'
titulo.classList; // retorna as classes
titulo.id; // retornar o id
titulo.offsetHeight; // retorna a altura do elemento
titulo.addEventListener("click", callback); // ativa a função callback ao clicar no título.

function callback() {
  console.log(`Clicou em: ${titulo.innerText}`);
}

