// === [].forEach() ===
/* [].forEach(callback(itemAtual, index, array)) a função de callback é executada para cada item da array. Ela possui três argumentos, itemAtual (valor do item da array), index (index do valor na array) e array (array original). */

// const carros = ["Mercedes", "Audi", "Volvo"];

// carros.forEach((item, index, array) => {
//   console.log(item.toUpperCase(), index, array);
// });

// quando modificamos o argumento array dentro forEach, a array original é modificada.
// Porém a melhor forma de alterar uma array não é usando forEach(). Nesse caso usaremos o map(). A diferença é que o map retorna sempre uma array e forEach retorna undefined. O objetivo do forEach não é o retorno em si, mas a ação que deve executar.
// sempre que precisar de uma nova array derivada de uma array anterior, se usa map. Caso você queira fazer uma ação com cada item de uma array, se usa o forEach()
// const paises = ["Brasil", "Inglaterra", "EUA", "Japão"];
// const retornoForEach = paises.forEach((pais) => {
//   console.log(pais.toUpperCase());
// });

// console.log(retornoForEach); // undefined

// const cores = ["Azul", "Amarelo", "Branco", "Preto"];

// const retornoMap = cores.map((cor, index) => {
//   return cor.toUpperCase();
// });

// console.log(retornoMap); //  ['AZUL', 'AMARELO', 'BRANCO', 'PRETO']

// const numeros = [1, 25, 72, 45, 2, 44];
// const numerosX2 = numeros.map((numero) => numero * 2);

// console.log(numerosX2); // [2, 50, 144, 90, 4, 88]

// === [].map() com Objetos ===

/* Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto. */

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const tempoAulas = aulas.map((aula) => aula.min);
// console.log(tempoAulas); // [15, 10, 20, 25]

// === [].reduce() ===
/* [].reduce(callback(acumulador, valorAtual, index, array), valorInicial) executa a função de callback para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior. */

// const aulas2 = [10, 25, 30];
// const total2 = aulas2.reduce((acumulador, atual) => {
//   return acumulador + atual;
// }, 0);
// console.log(total2); // 65

// === Reduce passo a passo ===

/* O primeiro parâmetro do callback é o valor do segundo argumento passado no reduce(callback, inicial) durante a primeira iteração. Nas iterações seguintes este valor passa a ser o retornado pela anterior. */
/*
const aulas = [10, 25, 30];

// 1
aulas.reduce((0, 10) => {
  return 0 + 10;
}, 0); // retorna 10

// 2
aulas.reduce((10, 25) => {
  return 10 + 25;
}, 0); // retorna 35

// 3
aulas.reduce((35, 30) => {
  return 35 + 30;
}, 0); // retorna 65
*/

// === Reduce passo a passo2 ===

/* Se não definirmos o valor inicial do acumulador, ele irá pular a primeira iteração e começara a partir da segunda. Neste caso o valor do acumulador será o valor do item da primeira iteração. */
/*
const aulas = [10, 25, 30];

// 1
aulas.reduce((10, 25) => {
  return 10 + 25;
}) // retorna 35

// 2
aulas.reduce((35, 30) => {
  return 35 + 30;
}) // retorna 65
*/

// === maior valor com [].reduce() ===

// const numeros2 = [10, 25, 60, 5, 35, 10];

// const maiorNumero = numeros2.reduce((anterior, atual) => {
//   // return anterior < atual ? atual : anterior;
//   if (anterior > atual) {
//     return anterior;
//   } else {
//     return atual;
//   }
// }, 0);

// console.log(maiorNumero); //60

// === Podemos retornar outros valores com reduce ===

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const listaAulas = aulas.reduce((acumulador, aula, index) => {
//   acumulador[index] = aula.nome;
//   return acumulador;
// }, {});

// console.log(listaAulas);

// === Passo a passo do reduce ===

/* // 1
aulas.reduce(({}, {nome: 'HTML 1', min: 15}, 0) => {
  {}[0] = 'HTML 1';
  return {0: 'HTML 1'};
}, {})

// 2
aulas.reduce(({0: 'HTML 1'}, {nome: 'HTML 2', min: 10}, 1) => {
  {0: 'HTML 1'}[1] = 'HTML 2';
  return {0: 'HTML 1', 1: 'HTML 2'};
}, {})

// 3
aulas.reduce(({0: 'HTML 1', 1: 'HTML 2'}, {nome: 'CSS 1', min: 20}, 2) => {
  {0: 'HTML 1', 1: 'HTML 2'}[2] = 'CSS 1';
  return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'};
}, {})

// 4
aulas.reduce(({0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}, {nome: 'JS 1', min: 25}, 3) => {
  {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}[3] = 'JS 1';
  return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1', 3: 'JS 1'};
}, {})
 */

// === [].reduceRight() ===
/* Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita. */

// const frutas = ["Banana", "Pêra", "Uva"];

// const frutasRight = frutas.reduceRight((acc, fruta) => acc + " " + fruta);
// const frutasLeft = frutas.reduce((acc, fruta) => acc + " " + fruta);

// console.log(frutasRight); // Uva Pêra Banana
// console.log(frutasLeft); // Banana Pêra Uva

// === [].some() ===
/* [].some(), se pelo menos um return da iteração for thuthy, ele retorna true */

// const frutas = ["Banana", "Pêra", "Uva"];

// const temUva = frutas.some((item) => {
//   return item === "Uva";
// });

// console.log(temUva); // true

// === [].every() ===

/* [].every(), se TODOS os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false. */

// const frutas = ["Banana", "Pêra", "Uva", ""];

// const arrayCheias = frutas.every((fruta) => {
//   return fruta;
// });

// console.log(arrayCheias); // retorna False, pois o item '' é um valor falsy

// const numeros = [36, 8, 77, 14, 21, 6, 12];

// const numerosMaiores = numeros.every((numero) => {
//   return numero > 3;
// });

// console.log(numerosMaiores);

// === [].find() e [].findIndex() ===
/* [].find(), retorna o valor atual da primeira iteração que retornar um valor truthy. Já o [].findIndex(), ao invés de retornar o valor, retorna o index deste valor na array. */

// const frutas = ["Banana", "Pêra", "Uvas", "Maçã"];

// const indexUva = frutas.findIndex((fruta) => {
//   return fruta === "Uvas"; // 2
// });

// console.log(indexUva);

// const numeros = [36, 8, 77, 14, 21, 6, 12, 222, 458];

// const numeroMaiorQue100 = numeros.find((numero) => {
//   return numero > 100;
// });

// console.log(numeroMaiorQue100); // 222 retorna o primeiro item que for verdadeiro

// === [].filter() ===
/* [].filter(), retorna uma array com a liosta de valores que durante a sua iteração retornaram um valor truthy */

// const frutas = ["Banana", "Pêra", 0, "Uvas", "Maçã", "", undefined, NaN];

// const apenasTruthy = frutas.filter((item) => {
//   return item;
// });

// console.log(apenasTruthy);

// const idades = [36, 8, 77, 14, 21, 6, 12, 18, 22, 7, 2, 4];

// const maiorDeIdade = idades.filter((idade) => {
//   return idade >= 18;
// });

// console.log(maiorDeIdade);

// // []filter() em objeto

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const maiores15 = aulas.filter((aula) => {
//   return aula.min > 15;
// });

// console.log(maiores15);
