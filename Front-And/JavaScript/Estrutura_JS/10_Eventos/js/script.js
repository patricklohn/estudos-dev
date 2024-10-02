// 1 - adcionando eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click",function(){
    console.log("Clicou no button");
})

// 2- removendo o evento

const temEvento = document.querySelector("#temEvento");

function mens(){
    console.log("Esta funcionando");
};

temEvento.addEventListener("click",mens);

const retiraEvento = document.querySelector("#other-btn");

retiraEvento.addEventListener("click", () =>{
    console.log("Evento removido");
    temEvento.removeEventListener("click", mens);
})

// 3 - argumento do evento 

const myTitle= document.querySelector("#my-title");

myTitle.addEventListener("click", (event)=>{
  console.log(event);  
  console.log(event.srcElement);  
  console.log(event.offsetX);  
  console.log(event.pointerType);  
  console.log(event.target);  
})

// 4 - propagação

const containerBtn = document.querySelector("#btn-container");
const BtnDiv = document.querySelector("#div-btn");

containerBtn.addEventListener("click", ()=> {
    console.log("Evento 1");
})

BtnDiv.addEventListener("click", (e)=> {
    e.stopPropagation();
    console.log("Evento 2");
})

// 5 - ações default

const a = document.querySelector("a");

a.addEventListener("click",(e)=>{
    e.preventDefault()

    console.log("Evento ancora não funciona")
})

// 6 - Eventos de tecla

document.addEventListener("keyup",(e)=>{
    console.log(`Soltou a tecla ${e.key}`);
})

document.addEventListener("keydown",(e)=>{
    console.log(`Pressionou a tecla ${e.key}`);
})

// 7 - Outros eventos de mouse 

const mouse = document.querySelector("#mouse");

mouse.addEventListener("mousedown",()=>{
    console.log("Mouse pressionado");
})
mouse.addEventListener("mouseup",()=>{
    console.log("Mouse solto");
})
mouse.addEventListener("dblclick",()=>{
    console.log("Mouse click duplo");
})

// 8 - Movimento do mouse
/* 
document.addEventListener("mousemove",(e)=>{
    console.log(`no eixo X:${e.x}`);
    console.log(`no eixo Y:${e.y}`);
})
*/

// 9 - evento de scroll 

window.addEventListener("scroll",(e)=>{
    if(window.pageYOffset == 200){
        console.log("Passamos de 200px");
    }
})

// 10 - evento de focus/blur

const input = document.querySelector("#my-input");

input.addEventListener("focus",(e)=>{
    console.log("Entrou no input");
})

input.addEventListener("blur",(e)=>{
    console.log("Saiu no input");
})

// 11 - evento de carregamento

window.addEventListener("load", ()=>{
    console.log("A página carregou!");
})

window.addEventListener("beforeunload", (e) =>{
    e.preventDefault();
    e.returnValue = "";
} )

// 12 - debounce 

const debounce = (f, delay) => {
    let timeout;

    return (...arguments) => {
    if(timeout){
        clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
        f.apply(arguments)
    }, delay);
    }
}

window.addEventListener("mousemove", debounce(() =>{
    console.log("Executando evento apos 1 second");
},1000));

