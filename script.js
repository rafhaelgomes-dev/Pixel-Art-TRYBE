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


//Gerando Cores aleatórias
function gerarCorAleatoria() {
    let numeroseLetrasPossiveis = '0123456789ABCDEF';
    let codigoCorHexadecimal = '#';
    
    for (let i = 0; i < 6; i++) {
        codigoCorHexadecimal = codigoCorHexadecimal + numeroseLetrasPossiveis[Math.floor(Math.random() * 16)];
    }
    
    return codigoCorHexadecimal;
    
  }
 
//Adicionando cores, tamanho e borda na Paleta

corPreta.style.backgroundColor = "black"
corPreta.style.width = "50px"
corPreta.style.height ="50px"
corPreta.style.border = "1px solid black"

corAzul.style.backgroundColor = gerarCorAleatoria()
corAzul.style.width = "50px"
corAzul.style.height ="50px"
corAzul.style.border = "1px solid black"

corVermelha.style.backgroundColor = gerarCorAleatoria()
corVermelha.style.width = "50px"
corVermelha.style.height ="50px"
corVermelha.style.border = "1px solid black"

corVerde.style.backgroundColor = gerarCorAleatoria()
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

let classPixel = document.getElementsByClassName("pixel")
function limparPixels () {
     
     for(index = 0; index < classPixel.length; index +=1) {
          
        classPixel[index].style.backgroundColor = "white"

     }

}

//calcula tamanho do bord dinâmicamente
let tamanhoBoard = document.getElementById("pixel-board")
let altura = parseInt(pixels[0].style.height)
let largura = parseInt(pixels[0].style.width)

tamanhoBoard.style.width = (largura + 2) * 5 +"px"
tamanhoBoard.style.height = (altura + 2) * 5 +"px"

//Adiciona opção para a pessoa usuária escolher o tamanho dos pixels

let caixaDeTexto = document.getElementById("board-size")
let botaoMudarTamanho = document.getElementById("generate-board")

botaoMudarTamanho.addEventListener("click", tamanhoQuadroPixels)
caixaDeTexto.addEventListener("input", recebeValor)

// Recebe o valor digitado no input 

function recebeValor(){
    let valor= caixaDeTexto.value
    console.log(valor)
    return valor
  
}


let nodeList = quadroDePixel.children
function tamanhoQuadroPixels() {
    
      
      
      if(recebeValor() >= 5 && recebeValor() <= 50){
    //apagar pixels anteriores
       quadroDePixel.innerText = ""
    //  cria novos pixels
     let tamanhoQuadrado = recebeValor() * recebeValor ()

     for (index = 1; index <= tamanhoQuadrado; index += 1) {
        let pixel = document.createElement("div")
        pixel.style.backgroundColor ="white"
        pixel.style.width = "40px"
        pixel.style.height = "40px"
        pixel.style.border = "solid black 1px"
        pixel.className = "pixel"
        quadroDePixel.appendChild(pixel)
    }

    tamanhoBoard.style.width = (largura + 2) * recebeValor() +"px"
    tamanhoBoard.style.height = (altura + 2) * recebeValor() +"px"
      
      } else if (recebeValor() < 5 && recebeValor() > 0) {

        quadroDePixel.innerText = ""
        for (index = 1; index <= 25; index += 1) {
           let pixel = document.createElement("div")
           pixel.style.backgroundColor ="white"
           pixel.style.width = "40px"
           pixel.style.height = "40px"
           pixel.style.border = "solid black 1px"
           pixel.className = "pixel"
           quadroDePixel.appendChild(pixel)
       }

       tamanhoBoard.style.width = (largura + 2) * 5 +"px"
       tamanhoBoard.style.height = (altura + 2) * 5 +"px"
        
      } else if (recebeValor() > 50) {

        quadroDePixel.innerText = ""
        for (index = 1; index <= 2500; index += 1) {
            let pixel = document.createElement("div")
            pixel.style.backgroundColor ="white"
            pixel.style.width = "40px"
            pixel.style.height = "40px"
            pixel.style.border = "solid black 1px"
            pixel.className = "pixel"
            quadroDePixel.appendChild(pixel)
        }

        tamanhoBoard.style.width = (largura + 2) * 50 +"px"
        tamanhoBoard.style.height = (altura + 2) * 50 +"px"

      } else {
          alert("Board inválido!")
      }
   }
