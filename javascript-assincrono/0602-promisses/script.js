// // const promessa = new Promise((resolve, reject) => {
// //   let condicao = true;
// //   if (condicao) {
// //     resolve("Estou pronto!");
// //   } else {
// //     reject(Error("Um erro ocorreu na promisse"));
// //   }
// // });

// // promessa.then((resolucao) => {
// //   console.log(resolucao);
// // });

// // Assíncrono
// /* A Promisse não fará sentido quando dentro da mesma for executado apenas código síncrono. O poder dela está na execução de código assíncrono que executará o resolve() ao final dele. */

// const promessa = new Promise((resolve, reject) => {
//   let condicao = true;
//   if (condicao) {
//     setTimeout(() => {
//       resolve({ nome: "Daniel", idade: 30 });
//     }, 100);
//   } else {
//     reject("A promessa retornou um erro!");
//   }
// });

// promessa.then((resolucao) => {
//   // console.log(resolucao);
// });

// // Encadeamento de then() => then().then()
// /* O método then() retorna uma função. Podemos colocar then() após then() e fazer um encadeamento de promessas. O valor do primeiro argumento de cada then será o valor do retorno anterior */

// const novaPromessa = new Promise((resolve, reject) => {
//   resolve("Etapa 1");
// });

// // novaPromessa
// //   .then((resolucao) => {
// //     console.log(resolucao); // Etapa 1
// //     return "Etapa 2";
// //   })
// //   .then((resolucao) => {
// //     console.log(resolucao);
// //     return "Etapa 3";
// //   })
// //   .then((resolucao) => {
// //     console.log(resolucao);
// //     return "Etapa 4";
// //   })
// //   .then((resolucao) => resolucao + 1)
// //   .then((resolucao) => console.log(resolucao));

// // catch()
// /* O método catch(), do protótipo de Promisses, adciona um callback a promise que será ativada caso a mesma seja rejeitada. */

// const novaPromessa2 = new Promise((resolve, reject) => {
//   let condicao = false;
//   if (condicao) {
//     resolve("Promessa Resolvida");
//   } else {
//     reject("Promessa Rejeitada");
//   }
// });

// novaPromessa2
//   .then((resolucao) => {
//     console.log(resolucao);
//   })
//   .catch((rejeicao) => {
//     console.log(rejeicao);
//   });

// // then(resolve, reject)
// /* Podemos passar a função que será ativada caso a promise seja rejeitada, direto no método then(), como segundo argumento */

// const novaPromessa3 = new Promise((resolve, reject) => {
//   let condicao = false;
//   if (condicao) {
//     resolve("Resolvido!");
//   } else {
//     reject("Indeferido");
//   }
// });

// novaPromessa3.then(
//   (resolucao) => {
//     console.log(resolucao);
//   },
//   (reject) => {
//     console.log(reject);
//   }
// );

// // finally()
// /* Executará o callback assim que a promise terminar. A diferença é que o finally() será executado independente do resultado, se for resolvido ou rejeitado.*/

// const new_Promise = new Promise((resolve, reject) => {
//   let condicao = true;
//   if (condicao) {
//     resolve("Resolvida!");
//   } else {
//     reject("Rejeitada");
//   }
// });

// new_Promise.finally(() => {
//   console.log("Finally");
// });

// Promise.all()
/* Um método do construtor Promise. Retornará uma nova promise assim que todas as promises dentro dela forem resolvidas ou pelo menos uma for rejeitada. A resposta é uma array com as respostas de cada promise. */
const login = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Usuário logado.");
  }, 1000);
});

const dados = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Dados carregados.");
  }, 1500);
});

const carregouTudo = Promise.all([login, dados]);
carregouTudo.then((resolucao) => {
  console.log(resolucao);
});

// Promise.race()
/* Método do contrutor Promise. Retornará uma promise assim que a primeira promise for resolvida ou rejeitada. Essa nova promise terá a resposta da primeira resolvida */

const userName = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Nome de usuário válido");
  }, 1000);
});

const userPassword = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Senha correta, login realizado!");
  }, 2000);
});

const userLogin = Promise.race([userName, userPassword]);
userLogin.then((resolucao) => {
  console.log(resolucao);
});
