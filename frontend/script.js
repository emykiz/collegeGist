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


const data = [
  {
      head1:"Admission into Emediong",
      head2:"university of emediong",
      head3:"we bring good tiding",
      news:"seriously i am good"
  },
  {
    head1:"Admission into peter",
    head2:"university of peter",
    head3:"we bring good peter",
    news:"seriously i am peter"
  },
  {
    head1:"Admission into john",
    head2:"university of johm",
    head3:"we bring good johm",
    news:"seriously i am johm"
  },
  {
    head1:"Admission into game",
    head2:"university of game",
    head3:"we bring good game",
    news:"seriously i am game"
  },
  {
    head1:"Admission into destiny",
    head2:"university of destuim",
    head3:"we bring good destomu",
    news:"seriously i am ghggj"
  },
  {
    head1:"Admission into Emediong",
    head2:"university of emediong",
    head3:"we bring good tiding",
    news:"seriously i am good"
  },
  {
    head1:"Admission into peter",
    head2:"university of peter",
    head3:"we bring good peter",
    news:"seriously i am peter"
  },
  {
    head1:"Admission into john",
    head2:"university of johm",
    head3:"we bring good johm",
    news:"seriously i am johm"
  },
  {
    head1:"Admission into precious",
    head2:"university of joy",
    head3:"we bring good precious",
    news:"seriously i am precious"
  },
  {
    head1:"Admission into king",
    head2:"university of destuim",
    head3:"we bring good destomu",
    news:"seriously i am ghggj"
  },
  {
    head1:"Admission into file",
    head2:"file oh",
    head3:"we bring good file",
    news:"seriously i am file"
  },
  {
    head1:"Admission into john",
    head2:"university of johm",
    head3:"we bring good johm",
    news:"seriously i am johm"
  },
  {
    head1:"Admission into Emediong",
    head2:"university of emediong",
    head3:"we bring good tiding",
    news:"seriously i am good"
  },
  {
      head1:"Admission into john",
      head2:"university of johm",
      head3:"we bring good johm",
      news:"seriously i am johm"
  },
  {
    head1:"Admission into game",
    head2:"university of game",
    head3:"we bring good game",
    news:"seriously i am game"
  },
  {
    head1:"Admission into john",
    head2:"university of johm",
    head3:"we bring good johm",
    news:"seriously i am johm"
  },
  {
    head1:"Admission into file",
    head2:"file oh",
    head3:"we bring good file",
    news:"seriously i am file"
  },
  {
    head1:"Admission into precious",
    head2:"university of joy",
    head3:"we bring good precious",
    news:"seriously i am precious"
  },
  {
    head1:"Admission into game",
    head2:"university of game",
    head3:"we bring good game",
    news:"seriously i am game"
  },
  {
    head1:"Admission into destiny",
    head2:"university of destuim",
    head3:"we bring good destomu",
    news:"seriously i am ghggj"
  },
  {
    head1:"Admission into revi ",
    head2:"university of destuim",
    head3:"we bring good destomu",
    news:"seriously i am ghggj"
  },
  {
    head1:"Admission into deside",
    head2:"university of destuim",
    head3:"we bring good destomu",
    news:"seriously i am ghggj"
  },
  {
    head1:"Admission into revi ",
    head2:"university of destuim",
    head3:"we bring good destomu",
    news:"seriously i am ghggj"
  },
  {
    head1:"Admission into contr",
    head2:"university of destuim",
    head3:"we bring good destomu",
    news:"seriously i am ghggj"
  },
  {
    head1:"Admission into destiny",
    head2:"university of destuim",
    head3:"we bring good destomu",
    news:"seriously i am ghggj"
  }, 
  {
    head1:"Admission into peter",
    head2:"university of destuim",
    head3:"we bring good destomu",
    news:"seriously i am ghggj"
  }, 
  {
    head1:"Admission into wgy",
    head2:"university of destuim",
    head3:"we bring good destomu",
    news:"seriously i am ghggj"
  }, 
  {
    head1:"Admission into dgruioo",
    head2:"university of destuim",
    head3:"we bring good destomu",
    news:"seriously i am ghggj"
  }, 
  {
    head1:"Admission into believe",
    head2:"university of destuim",
    head3:"we bring good destomu",
    news:"seriously i am ghggj"
  }, 
  {
    head1:"Admission into gather",
    head2:"university of destuim",
    head3:"we bring good destomu",
    news:"seriously i am ghggj"
  },
  {
    head1:"Admission into dgruioo",
    head2:"university of destuim",
    head3:"we bring good destomu",
    news:"seriously i am ghggj"
  },
  {
    head1:"Admission into wgy",
    head2:"university of destuim",
    head3:"we bring good destomu",
    news:"seriously i am ghggj"
  }, 
  {
    head1:"Admission into dgruioo",
    head2:"university of destuim",
    head3:"we bring good destomu",
    news:"seriously i am ghggj"
  }, 
  {
    head1:"Admission into believe",
    head2:"university of destuim",
    head3:"we bring good destomu",
    news:"seriously i am ghggj"
  }, 
];
window.booksPerPage = 5;
window.curr = 1;
data.slice(0,booksPerPage).forEach((obj) => {
  document.getElementById("data").innerHTML += `<h1 class="head1">${obj.head1}</h1>
                                                    <h1 class="head2">${obj.head2}</h1>
                                                    <h6 class="head3">${obj.head3}</h6>
                                                    <div class="news-flex">
                                                        <div>

                                                        </div>
                                                        <p class="news-deatails">
                                                            ${obj.news}
                                                            <span>[continue...]</span>
                                                        </p>`;
});
function changeData(index) {
  document.querySelectorAll("button")[window.curr].classList.remove("active");
  document.querySelectorAll("button")[index].classList.add("active");
  let showData = data.slice((index-1)*booksPerPage,index*booksPerPage);
  document.getElementById("data").innerHTML = "";
  showData.forEach((obj) => {
      document.getElementById("data").innerHTML += `<h1 class="head1">${obj.head1}</h1>
      <h1 class="head2">${obj.head2}</h1>
      <h6 class="head3">${obj.head3}</h6>
      <div class="news-flex">
          <div>

          </div>
          <p class="news-deatails">
              ${obj.news}
              <span>[continue...]</span>
          </p>`;;
  });
  window.curr = index;
}

function next() {
  if (window.curr < 10) {
      changeData(window.curr+1);
  }
}

function prev() {
  if (window.curr > 1) {
      changeData(window.curr-1);
  }
}