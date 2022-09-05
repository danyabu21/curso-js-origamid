// Podemos selecionar o formulário da maneira já conhecida:

const form1 = document.querySelector("#contato");
// ou através do comando a seguir, especifica pra formulários.
const form2 = document.forms[0];
const formElements = document.forms[0].elements; /*essa propriedade 
retornará uma HTMLCollection apenas com os inputs/textarea presentes 
no formulário. Lembrando que é uma array-like, podemos acessar os elementos usando o bracket ou pelo nome ou id do input. */

// É comum utilizarmos inputs de formulários para criarmos uma interface entre funções de JavaScript e o usuário final do site. Para isso, precisamos aprender a pegar os valores dos formulários.
// Para selecionar o valor:

const nameElValue = document.forms[0].elements[0].value;
// console.log(nameElValue); // Daniel

// Values
/* A propriedade value retorna o valor do elemento no formulário. Se adicionarmos um callback ao keyup(tecla levantar), podemos ficar de olho no evento e puxar o valor sempre que ele mudar. Outro evento utilizado é o 'change' que dispara sempre que o input e mudado. */

const form = document.getElementById("contato");

function handleKeyUp(event) {
  console.log(event.target.value);
}
form.addEventListener("change", handleKeyUp); // nesse caso, podemos adicionar o evento ao formulário ou diretamente no document..
