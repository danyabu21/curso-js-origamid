// === Constructor Function ===
/* Criar um objeto é simples, basta definirmos uma variável e iniar a definição do seu valor com chaves {}. Mas e se precisarmos criar um novo objeto, com as mesma características do anterior? */

const carro = {
  marca: "Marca",
  preco: 0,
};

const honda = carro;
honda.marca = "Honda";
honda.preco = 4000;

const fiat = carro;
fiat.marca = "Fiat";
fiat.preco = 2000;

console.log(carro);
console.log(honda);
console.log(fiat);
// carro, honda e fiat estão apenas apontando para o mesmo objeto.

/* Para criarmos um novo objeto, podemos utilizar uma Constructor Function, ou seja, Funções construtoras que são responsáveis por construir novos objetos sempre que chamamos a mesma. */

function Carro() {
  this.marca = "Marca";
  this.preco = 0;
}

// Ao criarmos esse tipo de função, por boas práticas, utilizamos o Pascal Case, sempre iniciando o nome da função com letra maiúscula.

const volks = new Carro();
volks.marca = "Volkswagen";
volks.preco = 1000;

console.log(volks);

const alfaRomeo = new Carro();
alfaRomeo.marca = "Alfa Romeo";
alfaRomeo.preco = 7000;

console.log(alfaRomeo);
// Agora sim, possuimos dois objetos distintos, derivados do objeto constructor Carro()

// === new Keyword ===
/* A palavra chave new é responsável por criar um novo objeto baseado na função que passamos a frente dela. */

/*

Ex:

function Carro() {
  this.marca = "Marca";
  this.preco = 0;
}


const honda = new Carro()
1 - Cria um novo objeto vazio
honda = {}

2 - Define o protótipo de honda igual ao protótipo de Carro
honda.prototype = Carro.prototype

3 - Aponta a variável this para o objeto
this = honda

4 - Executa a função, substituindo this pelo objeto
honda.marca = 'Marca';
honda.preco = 0;

5 - Retorna o novo Objeto
return honda = {
  marca: 'Marca',
  preco: 0,
}
*/

// === Parâmetros e Argumentos ===
/* Podemos passar argumentos que serão utilizados no momento da criação
do objeto */

function Automovel(marca, preco) {
  this.marca = marca;
  this.preco = preco;
}

const ferrari = new Automovel("Ferrari", 100000);
console.log(ferrari);
const maserati = new Automovel("Maserati", 90000);
console.log(maserati);

// === this Keyword ===
/* O this faz referência ao próprio objeto construído com a Constructor Function */

function Carro2(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this); // aqui todo o objeto ja foi construido, então ele retorna o objeto criado abaixo.
}

const mazda = new Carro2("Mazda", 5000);
/* Retornou:
 Carro2 {marca: 'Mazda', preco: 6000}
marca: "Mazda"
preco: 6000 <- preço já com a taxa aplicada dentro da função
[[Prototype]]: Object */


