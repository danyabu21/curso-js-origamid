// Destructuging
/* Permite a desestruturação de Arrays e Objetos. Atribuindo suas propriedades à novas variáveis. */

const carro = {
  marca: "Fiat",
  ano: 2022,
  portas: 4,
};

// Objeto
/* Para objeto, passamos as propriedades dentro de {} chaves e atribuímos ao objeto. */

const { marca, ano, portas } = carro;

console.log(marca);
console.log(ano);
console.log(portas);

/* A vantagem de usar usar o Destructuring em objetos é que a manipulação de dados será mais fácil. Principalmente quando temos uma grande profundidade de objetos. EX: */

const cliente = {
  nome: "Daniel",
  compras: {
    digitais: {
      livros: ["Livro 1", "Livro 2"],
      videos: ["Videos JS", "Video HTML"],
    },
    fisicas: {
      cadernos: ["Caderno 1"],
    },
  },
};

// Pra acessar as propriedades livros e vídeos sem destructuring:

console.log(cliente.compras.digitais.livros);
console.log(cliente.compras.digitais.videos);

// Com destructuring:

// const { livros, videos } = cliente.compras.digitais; // é necessário ir no nível em que a propriedade se encontra no objeto
// console.log(livros);
// console.log(videos);
// const { cadernos } = cliente.compras.fisicas;
// console.log(cadernos);

// Podemos aninhas as desestruturação:

const {
  digitais,
  fisicas,
  digitais: { livros, videos },
} = cliente.compras;

/* Lembrando que se trata de criação de variáveis, nesse caso, foram criadas quatro. */

console.log(digitais);
console.log(fisicas);
console.log(livros, videos);

/* O nome das variáveis tem que ser iguais ao nomes das propriedades que estamos querendo acessar, ao contrário, o JS não saberia o que queremos acessar.  */

const pessoa = {
  nome: "Daniel",
  idade: 30,
  pais: "Brasil",
};

/* Caso seja necessário mudar, podemos atribuir um novo nome para variável. */

const { nome: nomePessoa } = pessoa;
console.log(nomePessoa); // Daniel

// Valor inicial
/* Caso uma propriedade não exista, o valor padrão dela será undefined. Porém, é possível modificar este valor no momento da desestruturação. */

const { nome, idade, pais, email = "email@contato.com", cpf } = pessoa;

console.log(nome, idade, pais, email, cpf); // Daniel, 30, Brasil, email@contato.com, undefined.
// * Caso exista uma propriedade no objeto e um novo valor for passado, o valor dentro do objeto terá maior importância, sobreescrevendo o valor novo.

// Arrays
/* Para desestruturar array's, é necessário colocar as variáveis dentre [] colchetes. E diferente de Objetos, em Arrays, o nome da variável não precisa ser igual ao do item acessado. Outra coisa diferente, é que se for atribuido uma variável onde não existe valor pra ela na array, retornará um erro ao invés do undefined do objeto.  */

const frutas = ["Uva", "Banana", "Tomate"];

// Sem destructuring

const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];

// Com destructuring

const [fruta1, fruta2, fruta3] = frutas;
console.log(fruta1, fruta2, fruta3);

// Podemos até declarar diversas variáveis assim:

const [primeiro, segundo, terceiro] = ["item1", "item2", "item3"];
console.log(primeiro, segundo, terceiro); // item1 item2 item3

// Argumentos
/* Se uma função espera receber como argumento um objeto, podemos desestruturar ele no momento da declaração */

function handleEvent({ key, keyCode }) {
  console.log(key, keyCode);
}

document.addEventListener("keyup", handleEvent);
