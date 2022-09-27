async function puxarDados() {
  const responseAluno = await fetch("./clientes.json");
  const jsonAluno = await responseAluno.json();
  const reponseDados = await fetch("./dados.json");
  const jsonDados = await reponseDados.json();
  const paragrafosEL = document.querySelectorAll("p");
  paragrafosEL[0].innerText = jsonAluno.nome;
  paragrafosEL[1].innerText = jsonDados.aula;
}

puxarDados();

// Qual a diferença entre usar concatenação de fetch().then() e usar async await?
/* A diferença é a sintaxe mais limpa, facilitando o desenvolvimento.  */

// Try / Catch
/* Para lidarmos com erros nas promisses, podemos utilizar o try e o catch. */

async function buscarProdutos() {
  try {
    const produtoResponse = await fetch("./produtos.json");
    const produtoJSON = await produtoResponse.json();
    const tituloProduto = document.querySelector("[data-produto]");
    const precoProduto = document.querySelector("[data-preco]");
    tituloProduto.innerText = produtoJSON[0].nome;
    precoProduto.innerText = produtoJSON[0].preco;
  } catch (erro) {
    console.log(erro);
  }
}

buscarProdutos();

// Iniciar Fetch ao mesmo tempo
/* Não precisamos esperar um Fetch para começarmos outro. Porém precisamos esperar a resposta resolvida do fetch para transformarmos a reponse em JSON */

async function buscarDados() {
  const fetchCliente = fetch("./clientes.json");
  const fetchDados = fetch("./dados.json");

  const jsonCliente = await (await fetchCliente).json();
  const jsonDados = await (await fetchDados).json();
  console.log(jsonCliente, jsonDados);
}

buscarDados();

// Promise
/* O resultado da expressão à frente de await tem que ser uma promise. E o retorno do await será sempre o resultado desta promise.  */

async function asyncSemPromisse() {
  // O console não irá esperar
  await setTimeout(() => {
    console.log("Depois de 1s");
  }, 1000);
  console.log("acabou"); // executou antes do setTimeout
}

asyncSemPromisse();

async function iniciarAsync() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      console.log("Depois de 2s");
    }, 2000);
  });
  console.log("Esperou o setTimeout");
}

iniciarAsync();
