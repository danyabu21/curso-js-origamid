// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");
const cloneMenu = menu.cloneNode(true);

cloneMenu.classList.add("branco");
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq

const dl = document.querySelector("dl");
const primeiraDt = dl.children[0];
console.log(primeiraDt.innerText);
// Selecione o DD referente ao primeiro DT
const primeiraDD = primeiraDt.nextElementSibling;
console.log(primeiraDD.innerText);

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector(".faq");
const animais = document.querySelector(".animais");

faq.innerHTML = animais.innerHTML;
