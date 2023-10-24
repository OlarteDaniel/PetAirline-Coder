let btnIzq = document.querySelector(".btn-izquierda"),
    btnDer = document.querySelector(".btn-derecha"),
    slider = document.querySelector("#slider"),
    usuarios = document.querySelectorAll(".usuario");

let operacion = 0,
    contador = 0,
    cantidadUsuarios = 100 / usuarios.length;

let stars = document.querySelectorAll(".star");    

btnIzq.addEventListener("click", function(){
    contador--;
    if(contador < 0){
        contador = usuarios.length-1;
        operacion = cantidadUsuarios * (usuarios.length-1);
        slider.style.transform = 'translate(-' + operacion +'%)';
        slider.style.transition = 'none';
        return;
    }
    operacion = operacion - cantidadUsuarios ;
    slider.style.transform = 'translate(-' + operacion +'%)';
    slider.style.transition = "all ease .6s";
    
    
});

btnDer.addEventListener("click", function(){
    if(contador >= usuarios.length-1){
        contador = 0;
        operacion = 0;
        slider.style.transform = 'translate(-' + operacion +'%)';
        slider.style.transition = 'none';
        console.log(contador);
        return;
    }
    contador++;
    operacion = operacion + cantidadUsuarios;
    slider.style.transform = 'translate(-' + operacion +'%)';
    slider.style.transition = "all ease .6s";
    
});

stars.forEach(function (star, index){
    star.addEventListener("click", function(){
        for (let i=0; i<=index; i++){
            stars[i].classList.add("checked");
            stars[i].style.transition = "all ease .3s";
        }
        for (let i=index+1; i<stars.length; i++) {
            stars[i].classList.remove("checked");
            stars[i].style.transition = "all ease .3s";
        }
    })
})


