// Mude a cor da tela para azul e depois para vermelho a cada 2s.
function changeBackground() {
  setInterval(() => {
    document.body.classList.toggle("active");
  }, 2000);
}
// changeBackground()

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const tempo = document.querySelector(".tempo");

let i = 0;
let timer;

function iniciarContagem() {
  timer = setInterval(() => {
    tempo.innerText = i++;
  }, 500);
  iniciar.setAttribute("disabled", "");
}

function pararContagem() {
  clearInterval(timer);
  iniciar.removeAttribute("disabled");
}

function resetarContagem() {
  tempo.innerText = 0;
  i = 0;
  iniciar.removeAttribute("disabled");
}

iniciar.addEventListener("click", iniciarContagem);
pausar.addEventListener("click", pararContagem);
pausar.addEventListener("dblclick", resetarContagem);
