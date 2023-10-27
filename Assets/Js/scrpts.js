
let nav = document.querySelector("#nav");
let abrir = document.querySelector("#abrir");
let cerrar = document.querySelector("#cerrar");


let mostrarTexto_btn1 = document.getElementById('mostrarTexto_btn1');
let mostrarTexto1 = document.getElementById('mostrarTexto1');

let mostrarTexto_btn2 = document.getElementById('mostrarTexto_btn2');
let mostrarTexto2 = document.getElementById('mostrarTexto2');

let mostrarTexto_btn3 = document.getElementById('mostrarTexto_btn3');
let mostrarTexto3 = document.getElementById('mostrarTexto3');


abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",this.window.scrollY>0);
})


mostrarTexto_btn1.addEventListener("click", function(){
    mostrarTexto1.classList.toggle("mostrar");

    if(mostrarTexto1.classList.contains("mostrar")){
        mostrarTexto_btn1.innerHTML = "Leer Menos"
    }else{
        mostrarTexto_btn1.innerHTML = "Leer Más"        
    } 
});

mostrarTexto_btn2.addEventListener("click",function(){
    mostrarTexto2.classList.toggle("mostrar");

    if(mostrarTexto2.classList.contains("mostrar")){
        mostrarTexto_btn2.innerHTML = "Leer Menos"
    }else{
        mostrarTexto_btn2.innerHTML = "Leer Más"        
    }
})

mostrarTexto_btn3.addEventListener("click",function(){
    mostrarTexto3.classList.toggle("mostrar");

    if(mostrarTexto3.classList.contains("mostrar")){
        mostrarTexto_btn3.innerHTML = "Leer Menos"
    }else{
        mostrarTexto_btn3.innerHTML = "Leer Más"        
    }
})




