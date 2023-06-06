const nav = document.getElementById("navlinks");
const menu = document.getElementById('menubutton');
const mobilemenu = document.querySelector('.mobilemenu')
window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 725px)").matches) {
    nav.classList.add("w3-hide");
    menu.classList.remove("w3-hide");
    mobilemenu.classList.remove("w3-hide");
  } else {
    nav.classList.remove("w3-hide");
    menu.classList.add("w3-hide");
    mobilemenu.classList.add("w3-hide");
  }
});

if (window.matchMedia("(max-width: 725px)").matches) {
  nav.classList.add("w3-hide");
  menu.classList.remove("w3-hide");
  mobilemenu.classList.remove("w3-hide");
} else {
  nav.classList.remove("w3-hide");
  menu.classList.add("w3-hide");
  mobilemenu.classList.add("w3-hide");
}

menu.addEventListener('click', ()=>{
    mobilemenu.classList.toggle('menu-active')
})
