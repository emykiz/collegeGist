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



// post connection to the backend
// async function getData(){
//   const postream = await fetch('https://localhost/api/posts');

//   const posts = await postream.json();
//   let i = 0;
//   window.booksPerPage = 5;
//   window.curr = 1;
//   posts.slice(0,booksPerPage).forEach(post =>{
//     i++;
//     document.getElementById("data").innerHTML += `<h1 class="head1">${post.head1}</h1>
//     <h1 class="head2">${post.head2}</h1>
//     <h6 class="head3">${post.head3}</h6>
//     <div class="news-flex">
//         <div>

//         </div>
//         <p class="news-deatails">
//             ${post.news}
//             <span>[continue...]</span>
//         </p>`;


//         function changeData(index) {
//           document.querySelectorAll("button")[window.curr].classList.remove("active");
//           document.querySelectorAll("button")[index].classList.add("active");
//           let showData = posts.slice((index-1)*booksPerPage,index*booksPerPage);
//           document.getElementById("data").innerHTML = "";
//           showData.forEach((obj) => {
//               document.getElementById("data").innerHTML += `<h1 class="head1">${obj.head1}</h1>
//               <h1 class="head2">${obj.head2}</h1>
//               <h6 class="head3">${obj.head3}</h6>
//               <div class="news-flex">
//                   <div>
        
//                   </div>
//                   <p class="news-deatails">
//                       ${obj.news}
//                       <span>[continue...]</span>
//                   </p>`;;
//           });
//           window.curr = index;
//         }
//         changeData();

//         function next() {
//           if (window.curr < 10) {
//               changeData(window.curr+1);
//           }
//         }
//         next()
        
//         function prev() {
//           if (window.curr > 1) {
//               changeData(window.curr-1);
//           }
//         }
//         prev();
//   })

// }
// getData();


// Users Registration
const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', registerUser);
console.log(registerForm)
async function registerUser(e){
   
   
    e.preventDefault();
    const sOrganization = document.getElementById('Organization').value;
    const Createname = document.getElementById('name').value;
    const phoneEmail = document.getElementById('phone/email2').value;
    const createPassword = document.getElementById('password2').value;
    const data = {
        'organization':sOrganization,
        'fullName':Createname,
        'email':phoneEmail,
        'password':createPassword,
    }
    console.log(data);
    const result = await fetch('http://localhost:4000/app/signup',{
            method:'POST',
            headers : {
                'Content-Type':'application/json',
                // "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(data)
          }).then(res=> res.json())
          if(result.status === 200){
            alert("successful registration");
            window.location.replace("index.html");
          }else{
            alert("Registration failed")
          }
      }

// LOGIN REGISTRATION
const loginForm = document.getElementById('login-form')
login.addEventListener('submit', loginUser)

async function loginUser(e){
    e.preventDefault();

    const email = document.getElementById('phone/email').value;
    const password = document.getElementById('password').value;

    const data = {
        'email':email, 
        'password':password
    }

   
    const result = await fetch('http://localhost:4000/app/login',{
        method:'POST',
        headers : {
            'Content-Type':'application/json',
            // "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data)
    }).then(res=> res.json())
    if(result.status === 200){
      alert("successful registration");
      window.location.replace("index.html");
    }else{
      alert("Registration failed")
    }
}
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
const datas =
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