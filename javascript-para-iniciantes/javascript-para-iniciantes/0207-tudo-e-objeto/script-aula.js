// ==== Tudo é Objeto =====

/* Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos */

var nome = "Daniel";

console.log(nome.length); // 6
console.log(nome.toLowerCase()); // daniel
console.log(nome.toUpperCase()); // DANIEL
console.log(nome.charAt(1)); // a
console.log(nome.replace("iel", "")); // Dan
// os códigos acima não alteram a variável, podemos pegá-los e armazená-los dentro de outras variáveis e usar como quiser.

console.log(nome); // Daniel

/* Um string herda propriedades e métodos do construtor String() */

var altura = 1.8;

console.log(altura.toString()); // '1.8'
console.log(altura.toFixed()); // '2'

// ==== DOM (Document Object Model) ====

/* Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM. */

var btn = document.querySelector(".btn");

function mudarCorBtn() {
  btn.classList.toggle("azul");
}

btn.addEventListener("click", mudarCorBtn);

console.log(btn); // <a href="/" class="btn">Clique</a>
console.log(btn.innerText); // CLIQUE
