fetch("./dados.json")
  .then((r) => r.json())
  .then((json) => {
    json.forEach((item) => {
      // console.log(item.aula);
    });
  });

const config = {
  player: "Google",
  tempo: 25.5,
  aula: "2.1 JavaScript",
};

const configOnString = JSON.stringify(config);
// console.log(configOnString);

const stringToJson = JSON.parse(configOnString);
// console.log(stringToJson);

localStorage.config = configOnString;
console.log(JSON.parse(localStorage.config));
