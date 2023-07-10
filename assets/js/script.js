const input=document.querySelectorAll("#input-foot")
input.forEach((input)=>{
    input.addEventListener("keyup",(evento)=>{
        const valor=evento.target.value;
        if(valor.length>=1){
            evento.target.nextElementSibling.classList.add("fijar");
        }else{
            evento.target.nextElementSibling.classList.remove("fijar");
        }
    })
});

