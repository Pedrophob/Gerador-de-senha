let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#value");
let password = document.querySelector("#password");

let containerPassoword = document.querySelector("#container__password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
};

buttonElement.addEventListener("click" , () =>{
    generatorPassword();
})

function generatorPassword(){

    let pass = "";

    for(let i = 0 , n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
        
    }
    containerPassoword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

password.addEventListener("click", () =>{
    copyPassoword();
})

function copyPassoword(){
    alert("Senha copiada!")
    navigator.clipboard.writeText(novaSenha)
}

