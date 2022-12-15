const menuIcon = document.querySelector(".menu-icon");
const lines = document.querySelectorAll(".menu-icon div");
console.log(menuIcon);
const hide = document.querySelector('.hide')
menuIcon.addEventListener("click", () => {
    console.log("yes");
  for (i = 0; i < lines.length; i++) {
    lines[i].classList.toggle("animate");
    lines[i].classList.remove("start")
    lines[i].classList.toggle("animation")
    hide.classList.toggle("hide-style")
  }
  // hide.style.visibility = 'visible'

});