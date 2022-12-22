// PASSWORD HIDE

const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const eye = document.querySelector('.Eye');
const eye2 = document.querySelector('.Eye2');
const hidePw = document.querySelector('.fa-eye-slash');
const hide2 = document.querySelector('.hide2');

eye.onclick = ()=>{
    password.type = 'text'
    eye.classList.add('hides');
    hidePw.classList.remove('hides');
}

hidePw.onclick = ()=>{
    password.type = 'password'
    hidePw.classList.add('hides');
    eye.classList.remove('hides');
}
// hidePw.onclick = ()=>{
//   password2.type = 'text';
//   eye2.classList.remove('hides');
//   hidePw.classList.add('hides');

// }
// eye2.onclick = ()=>{
//   password2.type = 'password'
//   eye2.classList.add('hides');
//   hidePw.classList.remove('hides');
// }

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


let slidePosition = 0;
const slides = document.getElementsByClassName('carousel-item');
const totalSlides = slides.length;

document.getElementById('next').addEventListener('click', function () {
  moveToNextSlide();
});
document.getElementById('prev').addEventListener('click', function () {
  moveToPrevSlide();
});

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel-visible');
    slide.classList.add('carousel-hidden');
  }

  slides[slidePosition].classList.add('carousel-visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}

setInterval(moveToNextSlide, 3000);





//
