


// const { default: axios } = require("axios");

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











var header;
header = document.querySelector('header');
console.log(header);
var navitem;
navitem = document.querySelectorAll("nav > ul > li a");
var count = 0;
var image_url = [
    // 'back.jpg',
    'Ellipse 7.png',
    //'back3.jpg',
    'pencil.png',
    // 'back5.jpg',
    'MGH Group Logo.png',
    // 'back7.jpg',
];
function checkbgcolor(count) {
  if (count === 0) {
      navitem.forEach(function (a) { return a.style.color = "rgb(116,79,99)"; });
     // menu.style.background = "rgba(96,125,139,0.49)";
  }
  else {
      navitem.forEach(function (a) { return a.style.color = "black"; });
     // menu.style.background = "none";
  }
}
var getdot = document.querySelectorAll('.dot_move > .dot');
console.log(getdot);
var nextDom = document.querySelector('.move > .next');
var prevDom = document.querySelector('.move > .prev');
var nexts = function () {
    if (window.innerWidth >= 350) {
        getdot.forEach(function (element) {
            element.classList.remove("active");
        }); //making all the dot boxes unactive
        if (count < image_url.length - 1) {
            ++count;
            header.style.backgroundImage = "url(img/".concat(image_url[count], ")");
            getdot[count].classList.add("active"); //making the position of the below dot active when the image is displayed in that position
            checkbgcolor(count); //check the background color
        }
        else {
            count = 0;
            header.style.backgroundImage = "url(img/".concat(image_url[count], ")");
            getdot[count].classList.add("active");
            checkbgcolor(count);
        }
    }
    else {
        header.style.backgroundImage = "none";
    }
};
var prevs = function () {
    if (window.innerWidth >= 350) {
        getdot.forEach(function (element) {
            element.classList.remove("active");
        }); //making all the dot boxes unactive
        if (count > 0) {
            --count;
            header.style.backgroundImage = "url(img/".concat(image_url[count], ")");
            getdot[count].classList.add("active");
            checkbgcolor(count);
        }
        else {
            count = image_url.length - 1;
            header.style.backgroundImage = "url(img/".concat(image_url[count], ")");
            getdot[count].classList.add("active");
            checkbgcolor(count);
        }
    }
    else {
        header.style.backgroundImage = "none";
    }
};
var inter = setInterval(nexts, 1000);
window.innerWidth <= 350 ? clearInterval(inter) : null; //stop the interval on smaller screen
prevDom === null || prevDom === void 0 ? void 0 : prevDom.addEventListener('click', prevs);
nextDom === null || nextDom === void 0 ? void 0 : nextDom.addEventListener('click', nexts);



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

setInterval(moveToNextSlide, 3000)