import outSideClick from "./outside-click.js";

export default function initDropDownMenu() {
  const dropDownsMenu = document.querySelectorAll("[data-dropdown]");

  dropDownsMenu.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");
    outSideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("active");
    });
  }
}
