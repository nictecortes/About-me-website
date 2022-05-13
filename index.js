const iconoMenu = document.getElementById("menu-hamburguesa");

iconoMenu.addEventListener("click", () => {
  console.log(document.getElementById("menu-hamburguesa").classList);
  document.getElementById("menu-hamburguesa").classList.remove("menu-overlay");
});
const menu = document.getElementsByClassName("menu-icon");
menu[0].addEventListener("click", () => {
  console.log("-------------------");
  document.getElementById("menu-hamburguesa").classList.add("menu-overlay");
});
