// ==== classList ====

/* Retorna uma lista (array-like) com as classes do elemento. Permite adicionar, remover, trocar e verificar se contém. */

const menu = document.querySelector(".menu");

console.log(menu.classList); // retorna uma DOMTokenList com todas as classes do elemento

console.log(menu.classList[1]); // por se tratar de uma array-like, posso acessar determinada classe do elemento

menu.classList.add("ativo"); // adicionou a classe 'ativo' ao elemento
menu.classList.add("teste", "teste2"); // adicionou duas classes ao elemento. Podemos adicionar quantas classes quisermos usando esse método.
menu.classList.remove("menu2"); // removeu a classe 'menu2' do elemento
menu.classList.toggle("menu2"); // adiciona a classe quando não tem e remove quando tem.
menu.classList.contains("ativo"); // verificar se o elemento contém a classe informada e retorna um valor booleano.
menu.classList.replace("ativo", "inativo"); // subistitui a classe 'ativo' por 'inativo'.

// Antes da implementação dos métodos add/remove. A adição e a remoção de classes eram feitos da seguinte maneira.

console.log(menu.className); // retorna uma string com as classes do elemento

//menu.className = "nova-classe"; - isso subistitui todas as classes por essa única classe passada como string. Para adicionar mais classes sem subistitur a(s) anterior(es) usamos a seguinte linha de comando:

menu.className = menu.className + " nova-classe"; // concatenamos as classes com uma sting com a nova classe antecedida de um espaço na string,para o nome da nova classe não ficar colada junto ao nome da anterior.

// ==== attributes ====
// Retorna um objeto chamado NamedNodeMap(array-like) com os atributos do elemento.

const animais = document.querySelector(".animais");

console.log(animais.attributes); // retornar uma lista com os atributos do elemento. Nesse caso, o elemento possui os atributos class e ID, podendo ser acessados:
console.log(animais.attributes[0]); // retorna class
console.log(animais.attributes.class); // retorna class
console.log(animais.attributes[1]); // retorna ID
console.log(animais.attributes.id); // retorna ID
console.log(animais.attributes["data-texto"]); // retorna o data-texto

// ==== getAttribute & setAttribute ====
/* Métodos que retornarm ou definem de acordo com o atributo selecionado */

const img = document.querySelector("img");

img.getAttribute("src"); // retorna o valor do src, no caso o caminho da imagem
img.setAttribute("alt", "É uma Raposa"); // Adiona caso não exite e sobrescreve caso já exista.
img.setAttribute("naoexiste", "Esse atributo não existe"); // inclusive podemos passar um atributo que não existe e o mesmo será adicionado ao elemento.
img.getAttribute("alt"); // retorna o valor texto alternativo
img.hasAttribute(
  "alt"
); /* verificar se o elemento possui o atributo selecionado e retorna um valor booleano */

// O uso desses métodos é muito comum

// ==== Read Only vs Writable ====
/*
const animais = document.querySelector('.animais');

animais.className; // string com o nome das classes
animais.className = 'azul'; // substitui completamente a string
animais.className += ' vermelho'; // adiciona vermelho à string

animais.attributes = 'class="ativo"'; // não funciona, read-only

* Lembre-se que podemos modificar o valor de uma propriedade objeto.propriedade = ''
 */
