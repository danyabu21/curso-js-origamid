const doc = fetch("./doc.txt");
doc
  .then((resolucao) => {
    return resolucao.text();
  })
  .then((body) => {
    const conteudo = document.querySelector(".conteudo");
    conteudo.innerText = body;
  });

// fazendo requisição de uma API, com arquivo json
const cep = fetch("https://viacep.com.br/ws/55012380/json/");

cep
  .then((r) => r.json())
  .then((body) => {
    const endereco = document.querySelector(".endereco");
    endereco.innerHTML = body.bairro;
  });

// Podemos pegar um arquivo inteiro em HTML, transformá-lo em texto e inserir em uma div com o inner.HTML. A partir daí podemos manipular esses dados como um DOM qualquer.

const sobre = fetch("./sobre.html");
const div = document.createElement("div");

sobre
  .then((r) => r.text())
  .then((body) => {
    div.innerHTML = body;
    const titulo = div.querySelector("h1");
    document.querySelector("h1").innerText = titulo.innerText;
  });

// blob()
/* Um blob é um tipo de objeto utilizado na representação de dados de um arquivo. O blob pode ser utilizado para transformarmos requisições de imagens por exemplo. O blob gera um um URL único. */

const imagem = fetch("./img_1.jpg");

imagem
  .then((r) => r.blob())
  .then((body) => {
    const blobURL = URL.createObjectURL(body);
    const imgDom = document.querySelector("img");
    imgDom.src = blobURL;
  });

// clone() -> método do response
/* Ao utilizarmos os métodos anteriores, a resposta é modificada. Por isso existe o método clone, caso necessitemos transformar uma resposta em diferentes valores. */

const cep2 = fetch("https://viacep.com.br/ws/55012370/json/");

cep2.then((response) => {
  const response2 = response.clone();
  response.text().then((text) => {
    console.log(text);
  });
  response2.json().then((json) => {
    console.log(json);
  });
});

// .headers -> propriedade do response
/* É uma propriedade que possui cabeçalhos da requisição. É um tipo de dado iterável, então podemos utilizar o forEach para vermos cada um deles. */

const cep3 = fetch("https://viacep.com.br/ws/55012370/json/");

cep3.then((response) => {
  response.headers.forEach(console.log);
});

// .status e  .ok
/* Retorna o status da requisição. Se foi 404, 200, 202 e mais. O .ok retorna um valor booleano, sendo true para uma requisição de sucesso e false para uma sem sucesso. */

const docs = fetch("./docs");

docs.then((response) => {
  console.log(response.status, response.ok);
  if (response.status === 404) {
    console.log("Página não existe!");
  }
});

// .URL e .type
/* .URL retorna a url da requisição e .type retorna o tipo da resposta. Se o type for basic, significa que se trata de uma requisição local, dentro do próprio servidor. Se for cors, é uma requisição externa, mas permitida. */

const cep4 = fetch("https://viacep.com.br/ws/55012370/json/");

cep4.then((response) => {
  console.log(response.type); // cors
  console.log(response.url); // url
});
