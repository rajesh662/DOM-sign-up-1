let form = document.querySelector("form");
form.addEventListener("submit",function(para) {
    para.preventDefault();
    let number = document.querySelector(".sign-input").value;
    let text = document.querySelector(".sign-name").value;
    let email = document.querySelector(".sign-email").value;
    let result = document.querySelector(".result");
    if((number==="") || isNaN(number) ||(text==="")||(email==="")){

        result.innerHTML="please registration";
        result.style.color="red";

    }

    else{
        result.innerHTML="sign-up success your email ";
        result.style.color="red";
    }

    
});