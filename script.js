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


//Criando 25 pixels no quadro de pixel

let quadroDePixel = document.getElementById("pixel-board")

for (index = 1; index <= 25; index += 1) {
    let pixel = document.createElement("div")
    pixel.style.backgroundColor ="white"
    pixel.style.width = "50px"
    pixel.style.height = "50px"
    pixel.style.border = "solid black 1px"
    pixel.className = "pixel"
    quadroDePixel.appendChild(pixel)
}