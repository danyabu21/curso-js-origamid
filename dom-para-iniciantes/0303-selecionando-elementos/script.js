// Retorne no console todas as imagens do site
const allImgs = document.querySelectorAll("img");

allImgs.forEach((img) => {
  console.log(img);
});

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens = document.querySelectorAll('img[src^="img/imagem"]');
imagens.forEach((imagem) => {
  console.log(imagem);
});

// Selecione todos os links internos (onde o href começa com #)
const linkInternos = document.querySelectorAll('[href^="#"]');
linkInternos.forEach((link) => {
  console.log(link);
});

// Selecione o primeiro h2 dentro de .animais-descricao

const primeiroH2 = document.querySelector(".animais-descricao h2");
console.log(primeiroH2, primeiroH2.innerText);

// Selecione o último p do site

const paragrafos = document.querySelectorAll("p");
console.log(paragrafos[--paragrafos.length]);
