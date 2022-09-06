const controles = document.forms[0];
const cssText = document.querySelector(".css");
const btnEl = document.querySelector(".btn");

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;
  btnEl.style.color = name;
  btnEl.style.backgroundColor = value;
}

controles.addEventListener("change", handleChange);
