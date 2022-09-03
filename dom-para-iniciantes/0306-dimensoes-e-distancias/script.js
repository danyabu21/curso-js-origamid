// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector("img");

console.log(primeiraImg.offsetTop);

// Retorne a soma da largura de todas as imagens
function somarImagens() {
  const imagens = document.querySelectorAll("img");
  let soma = 0;
  imagens.forEach((imagem) => {
    soma += imagem.offsetWidth;
  });
  console.log(soma);
}

window.onload = function () {
  somarImagens();
};

/* Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)*/

const links = document.querySelectorAll("a");
links.forEach((link) => {
  const linkWidth = link.getBoundingClientRect().width;
  const linkHeight = link.getBoundingClientRect().height;
  console.log(link);
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(`${link} - Esse link possui boa acessibilidade.`);
  } else {
    console.log(`${link} - Esse link não possui boa acessibilidade.`);
  }
});

/*Se o browser for menor que 720px, adicione a classe menu-mobile ao menu*/
const smallWindow = window.matchMedia("(max-width: 720px)");

if (smallWindow.matches) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
} else {
}
