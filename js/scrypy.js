const form = document.querySelector("form"),
        nextbtn= document.querySelector(".nextbtn"),
        backbtn= document.querySelector(".backbtn"),
        allInput= document.querySelectorAll(".first input");

nextbtn.addEventListener("click",() =>{
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');            
        }else{
            form.classList.remove('secActive');
            
        }
    })
})

backbtn.addEventListener("click",() =>  form.classList.remove('secActive'));