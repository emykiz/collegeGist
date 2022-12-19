
// Create Account Validation

const sOrganization = document.getElementById('department');
const Createname = document.getElementById('name');
const phoneEmail = document.getElementById('phone');
const Email = document.getElementById('email');
const createPassword = document.getElementById('password2');
const check1 = document.getElementById('check1');
const check2 = document.getElementById('check2');
const createBtn = document.querySelector('.create-acct');
const orgErrorMsg = document.querySelector('.organization-error-msg');
const fullnameErrorMsg = document.querySelector('.fullname-error-msg');
const emailErrormsg = document.querySelector('.email-error-msg');
const PhoneErrormsg = document.querySelector('.phone-error-msg');
const passwordErrorMsg = document.querySelector('.password-error-msg')
const Signup = document.querySelector('.sign-up')
createBtn.onclick = (e)=>{
    if(sOrganization.value == ""){
        sOrganization.style.border = '1px solid red'
        orgErrorMsg.style.display = 'block'
        orgErrorMsg.style.color = 'red';
        e.preventDefault()
    }
    else if(Createname.value ===""){
        Createname.style.border = '1px solid red'
        fullnameErrorMsg.style.display = 'block'
        fullnameErrorMsg.style.color = 'red'
        e.preventDefault()
    }
    else if(phoneEmail.value ===""){
        phoneEmail.style.border = '1px solid red'
        PhoneErrormsg.style.display = 'block'
        PhoneErrormsg.style.color = 'red'
        e.preventDefault()
    }
    else if(Email.value ===""){
        Email.style.border = '1px solid red'
        emailErrormsg.style.display = 'block'
        emailErrormsg.style.color = 'red'
    }
    else if(createPassword.value ===""){
        createPassword.style.border = '1px solid red'
        passwordErrorMsg.style.display = 'block'
        passwordErrorMsg.style.color = 'red'
        e.preventDefault()
    }
    else{
        sOrganization.style.border = '1px solid #C4C4C4'
    }
}



sOrganization.onblur = function (){
    if(sOrganization.value == ""){
        sOrganization.style.border = '1px solid red'
        orgErrorMsg.style.display = 'block'
        orgErrorMsg.style.color = 'red'
    }
    else{
        sOrganization.style.border = '1px solid #C4C4C4';
        Createname.style.border = '1px solid #C4C4C4';
        phoneEmail.style.border = '1px solid #C4C4C4'
        createPassword.style.border = '1px solid #C4C4C4'
    }
}
sOrganization.onfocus = function(){
    orgErrorMsg.style.display = 'none'
}

Createname.onblur = ()=>{
    if(Createname.value ===""){
        Createname.style.border = '1px solid red'
        fullnameErrorMsg.style.display = 'block'
        fullnameErrorMsg.style.color = 'red'
    }
    else{
        Createname.style.border = '1px solid #C4C4C4'
    }
}
Createname.onfocus = ()=>{
    fullnameErrorMsg.style.display = 'none'
}

phoneEmail.onblur = ()=>{
    if(phoneEmail.value ===""){
        phoneEmail.style.border = '1px solid red'
        PhoneErrormsg.style.display = 'block'
        PhoneErrormsg.style.color = 'red'
    }
    else{
        phoneEmail.style.border = '1px solid #C4C4C4'
    }
}
phoneEmail.onfocus = ()=>{
    PhoneErrormsg.style.display = 'none'
}

createPassword.onblur = ()=>{
    if(createPassword.value ===""){
        createPassword.style.border = '1px solid red'
        passwordErrorMsg.style.display = 'block'
        passwordErrorMsg.style.color = 'red'
    }
    else{
        createPassword.style.border = '1px solid #C4C4C4'
    }
}
createPassword.onfocus = ()=>{
    passwordErrorMsg.style.display = 'none'
}

Email.onblur = ()=>{
    if(Email.value ===""){
        Email.style.border = '1px solid red'
        emailErrormsg.style.display = 'block'
        emailErrormsg.style.color = 'red'
    }
    else{
        Email.style.border = '1px solid #C4C4C4'
    }
}
Email.onfocus = ()=>{
    emailErrormsg.style.display = 'none'
}

Signup.onclick = ()=>{
    if(check1.checked && check2.checked){
        createBtn.disabled = false;
        createBtn.style.backgroundColor = '#B2002D'
    }
    else{
        createBtn.disabled = true;
        createBtn.style.backgroundColor = '#747373a4'
    }
}

// End of create Account Validation



//Login Validation

// id="phone/email"
// id="password"
// class="login-btn

const loginBtn = document.querySelector('.login-btn')
const passwordError = document.querySelector('.password-error-message');
const phoneError = document.querySelector('.phone-error-message')
const Password = document.getElementById('password');

loginBtn.onclick = (e)=>{
    if(PhoneEmail.value ===""){
        PhoneEmail.style.border = '1px solid red'
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
        PhoneEmail.style.border = '1px solid #C4C4C4'
        Password.style.border = '1px solid #C4C4C4'
    }

}
PhoneEmail.onblur =()=>{
    if(PhoneEmail.value ===""){
        PhoneEmail.style.border = '1px solid red'
        phoneError.style.display = 'block'
        phoneError.style.color = 'red'
    }
    else{
        PhoneEmail.style.border = '1px solid #C4C4C4'
    }
}
PhoneEmail.onfocus = ()=>{
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

