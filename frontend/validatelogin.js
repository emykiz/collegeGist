


//login
const loginBtn = document.querySelector('.login-btn')
const passwordError = document.querySelector('.password-error-message');
const phoneError = document.querySelector('.phone-error-message')
const Password = document.getElementById('password');
const Email2 = document.getElementById('email2');




loginBtn.onclick = (e)=>{
    if(Email2.value ===""){
        Email2.style.border = '1px solid red'
        phoneError.style.display = 'block'
        phoneError.style.color = 'red'
        e.preventDefault()
    }
    else if(Password.value ===""){
        Password.style.border = '1px solid red'
        passwordError.style.display = 'block'
        passwordError.style.color = 'red'
        e.preventDefault()
    }
    else{
        Email2.style.border = '1px solid #C4C4C4'
        Password.style.border = '1px solid #C4C4C4'
    }

}
Email2.onblur =()=>{
    if(Email2.value ===""){
        Email2.style.border = '1px solid red'
        phoneError.style.display = 'block'
        phoneError.style.color = 'red'
    }
    else{
        Email2.style.border = '1px solid #C4C4C4'
    }
}
Email2.onfocus = ()=>{
    phoneError.style.display = 'none'
}

Password.onblur =()=>{
    if(Password.value ===""){
        Password.style.border = '1px solid red'
        passwordError.style.display = 'block'
        passwordError.style.color = 'red'
    }
    else{
        Password.style.border = '1px solid #C4C4C4'
    }
}
Password.onfocus = ()=>{
    passwordError.style.display = 'none'
}
