// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 18;
var idadeIrma1 = 25;
var idadeIrma2 = 27;

if (minhaIdade > (idadeIrma1 && idadeIrma2)) {
  console.log("Eu sou o mais velho!");
} else if (idadeIrma1 > (minhaIdade && idadeIrma2)) {
  console.log("Karin é a mais velha");
} else {
  console.log("Marin é a mais velha");
}


// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2; // truthy

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; // truthy
var idade = 28; // truthy
var possuiDoutorado = false; // falsy
var empregoFuturo; // falsy
var dinheiroNaConta = 0; // falsy

console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta
);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

switch ((brasil, china)) {
  case brasil > china:
    console.log(
      `A população brasileira é maior que a chinesa em ${
        brasil - china
      } milhões de habitantes`
    );
    break;
  default:
    console.log(
      `A população chinesa é maior que a brasileira em ${
        china - brasil
      } milhões de habitantes`
    );
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso"); // false
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão"); // 'Cão'
} else {
  console.log("Falso");
}
