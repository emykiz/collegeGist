// const loginForm = document.getElementById('login-form')
// loginForm.addEventListener('submit', loginUser)
// async function loginUser(e){
//     e.preventDefault();

//     const email = document.getElementById('email2').value;
//     const password = document.getElementById('password').value;
//     console.log(email);
//     console.log(password);
//     const data = {
//         'email':email, 
//         'password':password
//     }

   
//     // const result = await fetch('http://localhost:4000/app/login',{
//     //     method:'POST',
//     //     headers : {
//     //         'Content-Type':'application/json',
//     //         // "Access-Control-Allow-Origin": "*",
//     //     },
//     //     body: JSON.stringify(data)
//     // }).then(res=> res.json())
//     // // if(result.status === 200){
//     //   alert("successful login");
//     //   window.location.replace("index.html");
//     // // }else{
//     // //   alert("login failed")
//     // // }

//     try {
//         fetch('http://localhost:4000/api/auth/login',{
//             method:'POST',
//             headers : {
//                 'Content-Type':'application/json',
//                 // "Access-Control-Allow-Origin": "*",
//             },
//             body: JSON.stringify(data)
//         }).then(res=>{
//             if(res.status === 200){
//                 alert('login successfully')
//                 window.location.href = '/frontend/index.html';
//             }
//             else{
//                 alert('email or password not correct')
//             }
//             res.json().then(obj => {
//                 console.log(obj);
//                 console.log(obj['data']);
//             })
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }


// // Users Registration
// const registerForm = document.getElementById('register-form');
// registerForm.addEventListener('submit', registerUser);
// console.log(registerForm);
// async function registerUser(e){
   
   
//     e.preventDefault();
//     const sOrganization = document.getElementById('organization').value;
//     const Createname = document.getElementById('name').value;
//     const phone = document.getElementById('phone').value;
//     const department = document.getElementById('department').value;
//     const year = document.getElementById('year').value;
//     const dateofbirth = document.getElementById('dob').value;
//     const email = document.getElementById('email').value;
//     const programme = document.getElementById('programme').value;
//     const createPassword = document.getElementById('password2').value;
//     const data = {
//         'fullname':Createname,
//         'university':sOrganization,
//         'department':department,
//         'programme':programme,
//         'email':email,
//         'phone':phone,
//         'year':year,
//         'dateofbirth':dateofbirth,
//         'password':createPassword,
//     }
//     // console.log(data);
//     // const result = await fetch('http://localhost:4000/api/auth/register',{
//     //         method:'POST',
//     //         headers : {
//     //             'Content-Type':'application/json',
//     //             // "Access-Control-Allow-Origin": "*",
//     //         },
//     //         body: JSON.stringify(data)
//     //       }).then((res)=> res.json())
//     //       console.log(res.json());
//     //       // .then(json => console.log(json));
//     //       // console.log(result.status);
//     //       // if(res.json().statusCode === 200){
//     //       //   alert("successful registration");
//     //       alert("registration successful")
//     //         window.location.href = '/frontend/index.html';
//     //       // }else{
//     //       //   alert("Registration failed")
//     //       //   alert(result.err)
            
//     //       // }
//     //   }
//       try {
//         fetch('http://localhost:4000/api/auth/register',{
//             method:'POST',
//             headers : {
//                 'Content-Type':'application/json',
//                 // "Access-Control-Allow-Origin": "*",
//             },
//             body: JSON.stringify(data)
//         }).then(res=>{
//             console.log('finished fetching')
//             console.log(res);
//             console.log(res.status);
//             res.json().then(obj => {
//                 console.log(obj);
//                 console.log(obj['data']);
//             })
//             if(res.status === 200){
//                 alert('succesful registered')
//                 window.location.href = '/frontend/index.html';
//             }
//             else{
//                 alert(' registerztion failed')
//             }
          
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }





// post connection to the backend
async function getData(){
  const postream = await fetch('https://localhost/api/posts');

  const posts = await postream.json();
  console.log(postream);
  let i = 0;
  window.booksPerPage = 5;
  window.curr = 1;
  posts.slice(0,booksPerPage).forEach(post =>{
    i++;
    document.getElementById("data").innerHTML += `<h1 class="head1">${post.head1}</h1>
    <h1 class="head2">${post.head2}</h1>
    <h6 class="head3">${post.head3}</h6>
    <div class="news-flex">
        <div>

        </div>
        <p class="news-deatails">
            ${post.news}
            <span>[continue...]</span>
        </p>`;


        function changeData(index) {
          document.querySelectorAll("button")[window.curr].classList.remove("active");
          document.querySelectorAll("button")[index].classList.add("active");
          let showData = posts.slice((index-1)*booksPerPage,index*booksPerPage);
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
        changeData();

        function next() {
          if (window.curr < 10) {
              changeData(window.curr+1);
          }
        }
        next()
        
        function prev() {
          if (window.curr > 1) {
              changeData(window.curr-1);
          }
        }
        prev();
  })

}
getData();





Users Registration
const creat = document.getElementById('createPost');
registerForm.addEventListener('submit', registerUser);

async function createPost(e){
   
   
    e.preventDefault();
    const sOrganization = document.querySelector('whats-happening').value;
 
    const data = {
        'university':sOrganization,
    }
    // console.log(data);
    // const result = await fetch('http://localhost:4000/api/auth/register',{
    //         method:'POST',
    //         headers : {
    //             'Content-Type':'application/json',
    //             // "Access-Control-Allow-Origin": "*",
    //         },
    //         body: JSON.stringify(data)
    //       }).then((res)=> res.json())
    //       console.log(res.json());
    //       // .then(json => console.log(json));
    //       // console.log(result.status);
    //       // if(res.json().statusCode === 200){
    //       //   alert("successful registration");
    //       alert("registration successful")
    //         window.location.href = '/frontend/index.html';
    //       // }else{
    //       //   alert("Registration failed")
    //       //   alert(result.err)
            
    //       // }
    //   }
      try {
        fetch('http://localhost:4000/api/auth/register',{
            method:'POST',
            headers : {
                'Content-Type':'application/json',
                // "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(data)
        }).then(res=>{
            console.log('finished fetching')
            console.log(res);
            console.log(res.status);
            if(res.status === 200){
                alert('succesful registered')
                window.location.href = '/frontend/index.html';
            }
            else{
                alert(' registerztion failed')
            }
            res.json().then(obj => {
                console.log(obj);
                console.log(obj['data']);
            })
        })
    } catch (error) {
        console.log(error);
    }
}