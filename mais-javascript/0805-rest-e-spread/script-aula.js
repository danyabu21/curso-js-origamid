// Parâmetros

/* Nem todos os parâmetros que definimos são utilizados quando uma função é executada, devido a falta de argumentos. Por isso é importante nos prepararmos para caso estes argumentos não sejam declarados. Exemplo:  */

function retornarPerimetro(lado, totalLados) {
  return lado * totalLados;
}

console.log(retornarPerimetro(10, 4)); //
console.log(retornarPerimetro(10)); // NaN, pois o segundo argumento retornou como undefined

// Uma forma muito comum de evitar esse tipo de resultado é:

function retornarPerimetroQuadrado(lado, totalLados) {
  totalLados = totalLados || 4; // caso o primeiro valor seja falsy, o 4 será atribuido à variável
  return lado * totalLados;
}

console.log(retornarPerimetroQuadrado(8, 4)); // 32
console.log(retornarPerimetroQuadrado(8)); // 32

// Com o ES6 existe uma forma mais simples de resolver esse problema e podemos usar esse métodos em qualquer função que receba parâmetros:

function perimetroForma(lado, ladoTotal = 4) {
  // passando dessa forma, terá o mesmo efeito do código anterior, o ES6 irá entender que se não houver argumento para o segundo parâmetro, o mesmo passará a ser 4
  return lado * ladoTotal;
}

console.log(perimetroForma(4, 4)); // 16
console.log(perimetroForma(4)); // 16

// Arguments(palavra-chave)

/* A palavra chave arguments é um objeto Array-like criado dentro
da função. Esse objeto contém os valores dos argumentos. Como é uma array-like, podemos passar os seus métodos ou transformá-la em array e obter acessos aos argumentos do mesmo. Com isso podemos fazer o quiser com esses argumentos. */

function perimetroForma2(lado, totalLados) {
  const argumentsArray = Array.from(arguments);
  return argumentsArray.reduce((atual, acumulador) => {
    return atual * acumulador;
  });
}

console.log(perimetroForma2(4, 10)); // 100

// Parâmetro Rest
/* É possível declarar um parâmetro utilizando ... na frente do mesmo. Assim, todos os argumentos que passarmos na ativação da função, ficarão dentro do parâmetro. Só pode haver UM parâmetro rest por função e ele deve sempre ser o último.  */

function mostrarGanhadores(premio, ...ganhadores) {
  return ganhadores.forEach((ganhador) => {
    console.log(`Parabéns ${ganhador}, você ganhou um ${premio}!`);
  });
}

mostrarGanhadores("Carro", "João", "Maria", "José", " Xavier");

function mostrarNumeros(n1, n2, ...outrosnumeros) {
  return outrosnumeros.forEach((numero) => {
    console.log(n1 + n2 + numero);
  });
}

console.log(mostrarNumeros(1, 2, 3, 4, 5, 6));

// Arguments vs Rest
/* Apesar de serem parecidos, o parâmetro rest e a palavra chave arguments possuem grandes diferenças. Sendo Rest uma Array e arguments sendo um objeto Array-like */

// Operador Spread
/* Assim como o Rest, o operador Spread também utiliza os ... para ser ativado. Porém o Spread não é um parâmetro, ele é usado em array e irá distribuir um item iterável, um por um e pode ser usado como um argumento */

const frutas = ["Limão", "Abacaxi", "Morango"];
const hortalicas = ["Hortelã", "Agrião", "Rúcula"];
const legumes = ["Abóbora", "Pepino", "Acelga"];

const comidas = [...frutas, "Batata", "Melão", ...hortalicas, ...legumes];
console.log(
  comidas
); /*retornou um array com todos os itens das arrays passados com o spread. ['Limão', 'Abacaxi', 'Morango', 'Batata', 'Melão', 'Hortelã', 'Agrião', 'Rúcula', 'Abóbora', 'Pepino', 'Acelga']*/

// Spread como argumento
/* O Spread pode ser muito útil para funções que recebem uma lista de argumentos ao invés de uma array. */

const listaNumeros = [14, 21, 7, 99, 5, 74, 25, 65, 12, 81];
const maiorNumero = Math.max(...listaNumeros); // usando o spread como argumento, iterando sobre cada item da array listaNumeros.
// Poderia até iterar a array listaNumeros com reduce e retornar condições para que o maior número fosse encontrado. Mas o spread simplifica isso tudo.
console.log(maiorNumero); // 9

function listaAprovados(resultado, ...alunos) {
  return alunos.forEach((aluno) => {
    console.log(`Parabéns ${aluno}, você ${resultado}!!!`);
  });
}

const listaAlunos = ["Daniel", "Carina", "Marin", "Sarah"];

console.log(listaAprovados("Passou de ano", ...listaAlunos));

// Transformar em Array usando Spread
/* Podemos transformar uma Array-like em Array apenas utilizando o spread */

const botoes = document.querySelectorAll("button");
const botoesArray = [...botoes];

console.log(botoes); // Nodelist(Array-like)
console.log(botoesArray); // Array

const frase = "JavaScript é foda!";
const fraseArray = [...frase]; // Deu um split em cada uma das letras e transformou em uma Array com cada letra como um item.

console.log(fraseArray);
