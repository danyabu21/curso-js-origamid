import outSideClick from "./outside-click.js";

export default function initMenuMobile() {
  const menuBtn = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const listenerEvents = ["click", "touchstart"];
  if (menuBtn) {
    function openMenu(event) {
      event.preventDefault();
      menuBtn.classList.add("active");
      menuList.classList.add("active");
      outSideClick(menuList, ["click", "touchstart"], () => {
        menuBtn.classList.remove("active");
        menuList.classList.remove("active");
      });
    }

    listenerEvents.forEach((userEvents) => {
      menuBtn.addEventListener(userEvents, openMenu);
      menuBtn.addEventListener(userEvents, openMenu);
    });
  }
}
