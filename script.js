//Criando Paleta de Cores
let main = document.getElementsByTagName("main")[0]
let corPreta = document.createElement("div")
let corAzul = document.createElement("div")
let corVerde = document.createElement("div")
let corVermelha = document.createElement("div")

main.appendChild(corPreta)
main.appendChild(corAzul)
main.appendChild(corVermelha)
main.appendChild(corVerde)

// Adicionando Id color-palette na div que vai ficar a Paleta de Cores

main.id = "color-palette"

// Adicionando Classe color nas cores da Paleta de cores

corPreta.className = "color"
corAzul.className = "color"
corVerde.className = "color"
corVermelha.className = "color"

//Adicionando cores, tamanho e borda na Paleta

corPreta.style.backgroundColor = "black"
corPreta.style.width = "50px"
corPreta.style.height ="50px"
corPreta.style.border = "1px solid black"

corAzul.style.backgroundColor = "blue"
corAzul.style.width = "50px"
corAzul.style.height ="50px"
corAzul.style.border = "1px solid black"

corVermelha.style.backgroundColor = "red"
corVermelha.style.width = "50px"
corVermelha.style.height ="50px"
corVermelha.style.border = "1px solid black"

corVerde.style.backgroundColor = "green"
corVerde.style.width = "50px"
corVerde.style.height ="50px"
corVerde.style.border = "1px solid black"


//Criando 25 pixels dinâmicamente no quadro de pixel

let quadroDePixel = document.getElementById("pixel-board")

for (index = 1; index <= 25; index += 1) {
    let pixel = document.createElement("div")
    pixel.style.backgroundColor ="white"
    pixel.style.width = "40px"
    pixel.style.height = "40px"
    pixel.style.border = "solid black 1px"
    pixel.className = "pixel"
    quadroDePixel.appendChild(pixel)
}

//Adicionando a class selected na cor preta

let elementoCorPreta = document.getElementsByClassName("color")[0]
elementoCorPreta.className = "color selected"

//Selecionando cores na paleta

function selecionaCor (event) {
    let classeSelected = document.getElementsByClassName("selected")[0]
    classeSelected.classList.remove("selected")
    event.target.className = "color selected"
}

corPreta.addEventListener("click", selecionaCor)
corAzul.addEventListener("click", selecionaCor)
corVerde.addEventListener("click", selecionaCor)
corVermelha.addEventListener("click", selecionaCor)

//Adicionando função para pintar pixel de acordo com a cor selecionada

let pixels = document.getElementsByClassName("pixel")

function pintarPixel (event) {
    let corSelecionada = document.getElementsByClassName("selected")[0]
    event.target.style.backgroundColor = corSelecionada.style.backgroundColor
}

//Adicionando em cada pixel o evento e a função que iŕa pintar
for (index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener("click", pintarPixel)
}

//Adicionando a função limpar ao botão 

let botaoLimpar = document.getElementById("clear-board")
botaoLimpar.addEventListener("click", limparPixels)

function limparPixels () {
     let classPixel = document.getElementsByClassName("pixel")
     for(index = 0; index < classPixel.length; index +=1) {
          
        classPixel[index].style.backgroundColor = "white"

     }

}