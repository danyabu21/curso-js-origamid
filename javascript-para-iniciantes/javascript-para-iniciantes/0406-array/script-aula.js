// === Arrays ===
/* Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays, boolean, number, functions, objects e mais. */

const instrumentos = ["Guitarra", "Baixo", "Violão"];
const precos = [49, 99, 69, 89];

const dados = [
  new String("Tipo 1"),
  ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
  /* Nunca veremos esse tipo de array na prática, até por que, quanto mais diferentes dentro de uma array, mais lenta pra acessá-la.  */
];

dados[2]("Ford");
dados[1][2].cor; // azul

// === Construção de Arrays ===
/* Toda array herda os métodos e propriedades do protótipo do construtor Array. */

const carro = new Array("Mustang", "Fiat", "Honda");

carro[0]; // Mustang
carro[2] = "Ferrari"; // subustitui Honda por Ferrari
carro[3] = "Kia"; // Adicinou o item à array
carro[10] = "Toyota"; // Quando adicionamos o item dessa forma, ela cria uma array com itens vazio, nesse caso item 4 ao item 11. Isso deixa a array um pouco lenta. Mas nada que refletirá no código.

console.log(carro);
console.log(carro.length); // retorna o tamanho dessa array
console.log(--carro.length); // esse comando sempre acessa o último item da array, é último para caso não saibamos o tamanho dessa array.

// === Array.from() ===
/* Array.from() é um método utilizado para transformar array-like objects, em uma array. */

const nodeItens = document.querySelectorAll("li"); // NodeList
console.log(nodeItens);
const arrayLi = Array.from(nodeItens); // converteu em Array
console.log(arrayLi);

// Objetos array-like são construídos da seguinte forma:

const obj = {
  0: "teste1",
  1: "teste2",
  2: "teste3",
  length: 3, // Para o objeto possa ser uma array-like é obrigatório ter a propriedade lentgh. Caso não tenha, ao tranformarmos em uma array, será uma array vazia. Caso coloque um length maior do que o de itens existentes, a array será preenchida com propriedades undefined.
};

const objArray = Array.from(obj);

// === Array.isArray() ===
/* Simplesmente verificar se o valor passado dentro do argumento é uma array e retorna um valor booleano. */

Array.isArray(nodeItens); // false (é uma array-like)
Array.isArray(arrayLi); // true

// === Array.of(), Array() , newArray() ===
/* Existem vaárias formas de se criar uma nova Array. A palavra chave new não é necessária para utilizar o construtor Array. */

Array.of(10); // [10] - vai criar uma array apenas com o agumento passado.
Array.of(1, 2, 8, 3, 9, 6);
// simplesmente passamos o argumentos e é criado a array com esses argumentos.

new Array(1, 7, 9, 3, 66);
new Array(5); // caso seja passado dessa forma, o JS entenderá que estamos querendo criar uma array vazia com cinco itens

Array(5); // mesmo princípio do exemplo anterior
Array(2, 77, 9, 1, 77); // cria uma array com os argumentos passamos.

// === Propriedades e métodos do Prototype ===
/*[].length retorna o tamanho da array */

const frutasArray = ["Banana", "Pera", "Maçã", ["Uva Verde", "Uva Roxa"]];

frutasArray.length; //4 itens
frutasArray[0].length; // 6
frutasArray[3].length; // 2 itens
frutasArray[3][1].length; // 8 - está verificando a quantidade de caracteres da string dentro da array que está dentro da frutasArray

// *** Métodos moficadores ***

// === [].sort() ===
/* Os próximos métodos que vamos falar sobre, são métodos modificadores (mutator methods). Além de retornarem um valor, eles modificam a array original. [].sort() organiza a pelo unicode. */

const instrumentosArray = ["Guitarra", "Baixo", "Bateria", "Piano"];
instrumentosArray.sort();
console.log(
  instrumentosArray
); /* ['Baixo', 'Bateria', 'Guitarra', 'Piano'] - No caso de strings, esse método organiza por ordem alfaética.*/

const numerosArray = [32, 21, 33, 43, 1, 12, 8];
numerosArray.sort();
console.log(
  numerosArray
); /* [1, 12, 21, 32, 33, 43, 8] - No caso de número, a array será organizada alfanumericamente, caracter por caracter. */

// === [].unshift() e [].push() ===
/* [].unshift() adiciona elementos ao início da array e retorna o length da mesma. [].push() adiciona elementos ao final da array e retorna o length da mesma. */

const arraySelecoes = ["Argentina", "França", "Suiça", "Alemanha"];
console.log(arraySelecoes);
console.log(arraySelecoes.length);
arraySelecoes.unshift("Inglaterra", "Brasil"); // adionou os argumentos no início da Array
console.log(arraySelecoes);
console.log(arraySelecoes.length);

arraySelecoes.push("Japão", "Italia"); // adicnou os argumento no final da Array
console.log(arraySelecoes);
console.log(arraySelecoes.length);

// === []shift() e [].pop() ===
/* [].shift() remove o primeiro elemento da array e retorna o mesmo. [].pop() remove o último elemento da array e retorna o mesmo. */

arraySelecoes.shift(); // removeu o primeiro item da Array - 'Brasil'
console.log(arraySelecoes);
arraySelecoes.pop(); // removeu o último item da Array - 'Italia'
console.log(arraySelecoes);

// === []reverse() ===
/* Esse método simplesmente reverte a ordem da Array e a retorna. */

arraySelecoes.reverse();
console.log(arraySelecoes);

// === []splice() ===
/* [].splice(index, remover, item1, item2, ...) adiciona valores na array a partir do index. Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens). */

arraySelecoes.splice(2, 0, "Senegal"); // Adicinou 'Senegal' após 'Alemanha' e não removeu nenhum item da Array. O retorno dessa função é a quantidade de itens removidos, nesse caso, nenhum.
console.log(arraySelecoes);

arraySelecoes.splice(3, 3, "Polônia"); // O segundo argumento remove a quantidade de itens após o index no primeiro argumento e retorna o(s) valore(s) removiddos.

console.log(arraySelecoes); // ['Japão', 'Alemanha', 'Senegal', 'Polônia', 'Brasil']

// === []copyWithin() ===
/*[].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele irá utilizar como inicio o 0 e final o valor total da array. */

itensArray = ["item1", "item2", "item3", "item4", "item5"];
console.log(itensArray);
itensArray.copyWithin(2, 0, 2);
console.log(itensArray);
itensArray.copyWithin(-1); // nesse caso ele copiou o 'item1' para o final
console.log(itensArray);

// === []fill() ===
/*[].fill(valor, inicio, final) preenche a array com o valor, do início até o fim.*/

arrayFrutas = ["Graviola", "Roman", "Cereja", "Pessego", "Mamão", "Melância"];
console.log(arrayFrutas);
arrayFrutas.fill("Morango", 2, 5); // esse método simplesmente vai preencher toda a array com o argumento passado. O segundo argumento indica à partir de qual item deve haver alteração. O terceiro argumento mostra onde a modificação deve parar.
console.log(arrayFrutas);

// *** Métodos de Acesso ***

// === []concat() ===
/* Diferente dos métodos moficadores, os métodos de acesso não modificam a array original, apenas retornam uma array modificada. O métodos [].concat() irá concatenar a array com o valor passado. */

const transporteArray1 = ["Carro", "Moto", "Caminhão"];
const transporteArray2 = ["Avião", "Helicóptero"];

console.log(transporteArray1.concat(transporteArray2)); // ['Carro', 'Moto', 'Caminhão', 'Avião', 'Helicóptero']

const outrosTransportesArray = ["Quadrículo"].concat(
  // poderia  passar a array vazia também []
  transporteArray1,
  transporteArray2,
  "Van",
  "Ônibus"
);

console.log(outrosTransportesArray); // ['Quadrículo', 'Carro', 'Moto', 'Caminhão', 'Avião', 'Helicóptero', 'Van', 'Ônibus']

// === [].includes(), [].indexOf() e [].lastIndexOf ===
/* [].includes(valor) verifica se a array possui o valor e retorna true ou false. [].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor na array. Já o [].lastIndexOf(valor) retorna o index do último. */

const linguagensLista = ["HTML", "CSS", "JS", "C", "Phyton", "JS"];

linguagensLista.includes("HTML"); // true - vai verificar se esse argumento existe e retorna um valor booleano.
linguagensLista.includes("Ruby"); // false
linguagensLista.includes("HTML" || "html"); // Como ele está verificando um valor booleano, podemos passar condições dentro dele.

linguagensLista.indexOf("CSS"); // verificar se tem e retorna o seu PRIMEIRO Index
linguagensLista.indexOf("JS"); // No caso, há mais de um 'JS' na Array, ele retornará o primeiro encontrado.
linguagensLista.lastIndexOf("JS"); // Para retornar o último, utilizamos esse argumento
linguagensLista.lastIndexOf("C++"); // Caso seja passado um argumento que não existe na array, o método retornará o -1.

// === [].join(separdor) ===
/* [].join(separador) junta todos os valores da array e retorna uma string com eles. Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array. */

linguagensLista.join(); // 'HTML,CSS,JS,C,Phyton,JS' - a virgula é adicionada por padrão
linguagensLista.join(" "); // 'HTML CSS JS C Phyton JS'
linguagensLista.join("-_-"); // 'HTML-_-CSS-_-JS-_-C-_-Phyton-_-JS'

const htmlSting = "<h2>Título Principal</h2>";
htmlString = htmlSting.split("h2");
htmlString = htmlString.join("h1");

console.log(htmlString);

// === [].slice() ===
/* [].slice(inicio, final) retorna os itens da array começando pelo início e indo até o valor de final. */

// const linguagensLista = ["HTML", "CSS", "JS", "C", "Phyton", "JS"];

linguagensLista.slice(3); //  ['C', 'Phyton', 'JS']
linguagensLista.slice(1, 4); //  ['CSS', 'JS', 'C'] // o segundo argumento é o break, ele retorna o último item antes do index passado como argumento.

// É muito comum usar esse método para clocar uma array

novaLinguagemLista = linguagensLista.slice(2, 5);
console.log(novaLinguagemLista); // ['JS', 'C', 'Phyton']
novaLinguagemLista2 = linguagensLista.slice(); // como não foi passado nenhum argumento, a array será clonada por completa.
console.log(novaLinguagemLista2);
