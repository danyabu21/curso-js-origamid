// === String ===
/* É a construtora de strings, toda string possui as propriedades e métodos do prototype de String. */

const comida = "Sushi";
const agua = new String("Água");
const frase = "A melhor comida";

// *** str.lenght ***
/* Propriedade com o total de caracteres da string */

console.log(comida.length); // 5
console.log(frase.length); // 15
comida[0]; // S
frase[0]; // A
console.log(frase[frase.length - 1]); // a
console.log(frase[--frase.length]); // a

// *** str.charAt(n)***
/* Retorna o caracter de acordo com index de(n). É a mesma forma de acessar um index, porém usando um método. */

const linguagem = "JavaScript";

console.log(linguagem.charAt(0)); // J
console.log(linguagem.charAt(4)); // S
console.log(linguagem.charAt(linguagem.length - 1)); // t

// *** str.concat(str2, str3,...) ***
/* Concatena Strings e retorna o resultado */

const fraseLinguagem = "A melhor linguagem é: ";
const fraseCompleta = fraseLinguagem.concat(linguagem, "!");
console.log(fraseCompleta);

// *** str.includes(search, position) ***
/* Procura pela string exata dentro de outra string. A procura é CASE SENSITIVE. */

const fruta = "Banana";
const ListaFrutas = "Maçã, Banana, Melancia, Jambo";

ListaFrutas.includes(fruta); // true
ListaFrutas.includes("Jambo"); // true
fruta.includes(ListaFrutas); // false
ListaFrutas.includes(fruta, 14); // false - index 14 = M

// *** str.endsWith(search) e str.startsWith(search) ***
/* Procura pela string exata dentro de outra string. A procura é CASE SENSITIVE. */

console.log(fruta.startsWith("Ba")); // true
console.log(fruta.startsWith("ba")); // false
console.log(fruta.endsWith("na")); // true

// *** str.slice(start, end) ***
/* Corta a string de acordo com os valores de start e end. */

const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de Fornecedor";
const transacao3 = "Taxa de camisas";

transacao1.slice(0, 4); // Depó
transacao2.slice(0, 5); // Depós
transacao3.slice(0, 4); // Taxa
transacao3.slice(0, transacao3.length - 1); // Taxa de Camisa, cortou o último caractere

transacao1.slice(12); // ele corta os 12 primeiros caracteres e retornar 'cliente'
transacao2.slice(-2); // ele corta os 2 ultimos caracteres e retornar 'or'
transacao1.slice(3, 6); // ósi

// *** str.substring(start, end) ***
/* Corta o string de acordo com os valores de start e end. Não funciona com valores negativos como o slice. */

linguagem.substring(3, 5); // aS
linguagem.substring(0, 4); // Java
linguagem.substring(4); // Script
linguagem.substring(-3); // JavaScript - como não funciona com valores negativos, o método irá retornar a string completa

// *** str.indexOf(serach) e str.lastIndexOf(search)***
/* Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado. */

const instrumentoMusical = "Guitarra";
instrumentoMusical.indexOf("G"); // 0
instrumentoMusical.indexOf("a"); // 4
instrumentoMusical.lastIndexOf("a"); // 7
instrumentoMusical.indexOf("r"); // 5
instrumentoMusical.lastIndexOf("r"); // 6

// *** str.padStart(n, str) e str.padEnd(n, str)***
/* Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n=10, ela passará a ter 10 caracteres. O preenchimneto é feito com espaços, caso não seja declarado o segundo argumento. */

const preco = "R$ 99,00";
console.log(preco.padStart(20)); //             R$ 99,00
console.log(preco.padStart(20, ".")); // ............R$ 99,00
console.log(preco.padStart(20, "-")); // ------------R$ 99,00
console.log(preco.padEnd(20, "-")); // R$ 99,00------------

const listaPrecos = ["R$99,00", "R$200,00", "R$10000,00"];

listaPrecos.forEach((item) => {
  console.log(item.padStart(15, "."));
});

// retornando:
/* 
........R$99,00
.......R$200,00
.....R$10000,00 */

// *** str.repeat(n)***
/* Repete a string (n) vezes */

const fraseRepeat = "Ta";

console.log(fraseRepeat.repeat(5)); // TaTaTaTaTa
console.log(fruta.repeat(3)); // BananaBananaBanana

// *** str.replace(regExp|substr, newstr|Function)***
/* Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar */

let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
listaItens = listaItens.replace(/[ ]+/g, ", "); // buscando todos os espaços e substituindo por , + espaço
console.log(listaItens); // Camisa, Bonés, Calças, Bermudas, Vestidos, Saias
listaItens = listaItens.replace("Camisas", "Shirts");
console.log(listaItens); // Shirts, Bonés, Calças, Bermudas, Vestidos, Saias

listaItens = listaItens.replace(/[s]+/g, "*"); // substituiu todos os 's' por *. o g significa global. Caso não passemos uma regular expression, será substituido apenas o primeiro item encontrado
console.log(listaItens); // Shirt*, Boné*, Calça*, Bermuda*, Ve*tido*, Saia*

// Ex: trocando todas as , por  .
let precos = "R$1200,43";

precos = precos.replace(",", ".");
console.log(precos); // R$1200.43

// *** str.split(padrao)***
/* Divide a string de acordo com o padrão passado e retorna uma array */

let listaProdutos = "Fogão Geladeira Mesa Sofá Notebook";

const arrayLista = listaProdutos.split(" "); // parte os itens a cada espaço encontrado, retornando uma array com cada produto
console.log(arrayLista);

/* 
0: "Fogão"
1: "Geladeira"
2: "Mesa"
3: "Sofá"
4: "Notebook" */

const arrayLista2 = listaProdutos.split(""); // caso seja passada uma string vazia, será retornado uma array de string por string
console.log(arrayLista2);
/* ['F', 'o', 'g', 'ã', 'o', ' ', 'G', 'e', 'l', 'a', 'd', 'e', 'i', 'r', 'a', ' ', 'M', 'e', 's', 'a', ' ', 'S', 'o', 'f', 'á', ' ', 'N', 'o', 't', 'e', 'b', 'o', 'o', 'k'] */

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");
const novoHtml = htmlArray.join("section");

console.log(htmlText);
console.log(htmlArray);
console.log(novoHtml);

// *** str.toLowerCase() e srt.toUpperCase()***
/* Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários. */

const sexo1 = "Feminino";
const sexo2 = "feminino";
const sexo3 = "FEMININO";

sexo1.toLowerCase() === "feminino"; // true
sexo2.toLowerCase() === "feminino"; // true
sexo3.toLowerCase() === "feminino"; // true

// *** str.trim(), str.trimStart(), str.trimEnd()***
/* Remove espaço em branco do inínio, ou final de uma string */

const valor = " R$23.00 ";
valor.trim(); // "R$23.00";
valor.trimStart(); // "R$23.00 ";
valor.trimEnd(); // " R$23.00";
