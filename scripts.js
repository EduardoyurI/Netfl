let botaosom = document.querySelector(".botao-som")
let video = document.querySelector (".video")
let botao = document.querySelector(".link2")
let modal = document.querySelector(".modal")


botaosom.addEventListener("click", ligaSom)
function ligaSom(){
   video.muted = false
}

botao.addEventListener("click", mostrarModal)
modal.addEventListener("click", esconderModal)


function mostrarModal(){
    modal.style.display = "block"
}

function esconderModal (){
    modal.style.display = "none"
}


    

