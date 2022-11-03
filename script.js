let passMatch = document.querySelector('#passMatch');
passMatch.style.display='none';
let flagcp=0;
let flage=0;
let flagp=0;
let pass = document.querySelector('#pwd');
let confPass = document.querySelector('#cpwd');
let lenErr = document.querySelector('#lenErr')
let numErr = document.querySelector('#numErr')
let pwd = document.querySelector('#pwd');
let email = document.querySelector('#email');
let cpwd = document.querySelector('#cpwd');
lenErr.style.display='none';
numErr.style.display='none';
confPass.addEventListener('blur',()=> {
    if(pass.value!=confPass.value) {
        flagcp=0;
        cpwd.style.cssText = 'border:2px solid red;';
        passMatch.style.display = 'block';
    }
    else {
        flagcp=1;
        cpwd.style.cssText = 'border:2px solid #E5E7EB;';
        passMatch.style.display = 'none';
    }
});
let pwdStatus = document.querySelector('#pwdStatus');
pass.addEventListener('change',()=> {
    if(pass.value!=confPass.value) {
        flagcp=0;
        passMatch.style.display = 'block';
    }
    else {
        flagcp=1;
        passMatch.style.display = 'none';
    }
    let pat1 = /[0-9]/;
    if(pass.value.length<6)
    lenErr.style.display='block';
    else
    lenErr.style.display='none';
    if(pat1.test(pass.value))
    numErr.style.display='none';
    else
    numErr.style.display='block';
    if(pass.value.length>=6 && pat1.test(pass.value)) {
        flagp=1;
        pwd.style.cssText = 'border:2px solid #E5E7EB;';
        pwdStatus.textContent='✔';
    }
    else {
        flagp=0;
        console.log("hi")
        pwd.style.cssText = 'border:2px solid red;';
        pwdStatus.textContent='❌';
    }
});
email.addEventListener('change',()=> {
    let pat1=/[a-z]@[a-z].[a-z]/;
    if(pat1.test(email.value)) {
        flage=1;
        email.style.cssText = 'border: 2px solid #E5E7EB';
    }
    else {
        let flage = 0;
        email.style.cssText = 'border: 2px solid red';
    }
});
function validateForm() {
    if(flagp && flagcp && flage)
    return true;
    else
    return false;
}