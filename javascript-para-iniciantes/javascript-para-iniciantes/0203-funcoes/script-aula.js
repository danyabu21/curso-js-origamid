// ===== Funções =====

/* É um bloco de código que pode ser executadou ou reutilizado quantas vezes forem necessárias. Valores podem ser passados por uma função e a mesma retorna outro valor */

function areaDoQuadrado(lado) {
  return lado * lado;
}

// Acima temos uma Function declaration - Declaração de Função
// Não é necessario usar o return

areaDoQuadrado(4); // função ativada com parâmetro 4

// Podemos declarar uma função e já utilizá-la:

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7000....
console.log(total);

// parentêses sempre executam uma função

// ===== Parâmetros e Argumentos =====

// Ao criar uma função, você pode definir parâmetros.
// Ao executar uma função, você pode passar argumentos.

// No exemplo abaixo, não foi necessário o uso do return:

function calcularMedia(nota1, nota2, nota3) {
  // parâmetros
  let media = (nota1 + nota2 + nota3) / 3;
  console.log(`Sua notas foram: ${nota1}, ${nota2} e ${nota3}`);
  if (media > 7) {
    console.log(
      `A sua média final foi: ${media}. Parabéns, você está aprovado!`
    );
  } else {
    console.log(
      `A sua média final foi: ${media}. Infelizmente está abaixo do requisito mínimo, com isso você está reprovado!`
    );
  }
}

// Outro exemplo:

calcularMedia(10, 8, 6); // argumentos

function imc(peso, altura) {
  // parâmetros
  let imc = peso / altura ** 2;
  return imc;
}

imc(80, 1.8); // argumentos
imc(75, 1.71); // argumentos

// Parênteses executa a função:

function corFavorita(cor) {
  if (cor === "Azul") {
    return "Você gosta do céu!";
  } else if (cor === "Verde") {
    return "Você gosta da natureza!";
  } else if (cor !== "Azul" && cor !== "Verde") {
    return `Você não gosta nem de azul e nem de verde, você gosta de ${cor}`;
  }
}

// Se apenas definirmos uma função com o funcition e não executarmos/chamar/invocar a mesma, nada do que estiver dentro dela irá acontecer

// console.log(corFavorita("Rosa"));

// ===== Argumentos podem ser funções =====

// Chamadas de Callback, geralmente são funções que ocorrem após algum evento.

//Ex:

addEventListener("click", function () {
  console.log("clicou!");
});

// A função nativa addEventListener() possui dois argumentos
// Primeiro a string 'click' - é o tipo de evento
// Segundo é uma função anônima

/* Funções anônimas são aquelas em que o nome da função não é definida, escritas como function(){} ou () =>{} */

// A mesma função de cima, porém com uma estrutura mais usada:

function ativarClique() {
  console.log("CLICOU!");
}

addEventListener("click", ativarClique);

// ===== A função pode ou não retornar um valor =====

/* Quando não definimos um return, ela irá retornar undefined. O código interno da função é executado normalmente, independe de existir valor no return ou não. E quando uma função retorna um valor, ela só retorna UM valor */

function imc2(peso, altura) {
  let imc2 = peso / altura ** 2;
  console.log(imc2);
}

imc2(89, 1.7); // retorna o imc
console.log(imc2(89, 1.7)); // retornar o imc e undefined.

// ===== Valores retornados =====

/* Um função pode retornar qualquer tipo de dado e até outras funções */

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Por favor, informe sua idade!";
  } else if (idade >= 60) {
    return "Você está na terceira idade!";
  } else {
    return "Você ainda não chegou a terceira idade!";
  }
}
// O ideal é que uma função retorne apenas um tipo de dado específico. Caso se algum código retornasse um valor booleano, por exemplo.

console.log(terceiraIdade(70));
console.log(terceiraIdade(50));
console.log(terceiraIdade("Olá"));

// ===== Escopo =====

/* Variáveis e funções definidas dentro de um bloco{}, não são vísiveis fora dele. */

var totalPaises = 193;
function faltaVisitarPaises(paisesVisitados) {
  return `Ainda falta visitar ${totalPaises - paisesVisitados} países.`;
}

/* console.log(totalPaises); // retorna um erro: totalPaises is not defined. Pois estamos pedindo para exibir no console uma variável que não é enxergada fora do escopo da função. Caso queira usar uma variável que necessita ser usado dentro de uma função e fora dele também, é só criamos a variável fora, antes da função, isso se chama escopo léxico */

console.log(faltaVisitarPaises(100));
console.log(totalPaises);

// ===== Escopo Léxico =====
/* Funções conseguem acessar variáveis que foram criadas no contexto pai. */
//* Podemos ter função dentro de função:

var profissao = "Desenvolvedor Front-end";

function dados() {
  var nome = "Daniel";
  var idade = 31;

  function outrosDados() {
    var cidade = "Caruaru-PE";
    var idade = 30;
    return `O meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e estou estudando para ser ${profissao}.`;
  }
  return outrosDados();
}

console.log(dados()); // retorna dados, com a idade sendo a definida dentro da função filha da função dados();
//console.log(outrosDados()); // retorna um erro pois a função está dentro do escopo da função pai, assim como variáveis que são definidas dentro do escopo.

// ===== Hoisting =====

/* Assim como acontece com variáveis, antes de executar uma função, o JS 'move' todas as funções declaradas para a memoría, pra depois receber uma atribuição de valor. */

//Ex:

imc3(94, 1.8); // imc aparece no console.

function imc3(peso, altura) {
  var imc3 = peso / altura ** 2;
  console.log(imc3);
}

// como existe o hoisting, podemos chamar a função antes mesmo de ele ser declarada.

console.log(estado);
var estado = "Pernambuco"; // nesse caso retorna undefined

var pais = "Brasil";
console.log(pais); // retorna Brasil.
