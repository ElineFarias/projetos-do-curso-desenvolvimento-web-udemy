var altura = 0
var largura = 0

function ajustarTamanhoPalcoJogo() {
  altura = window.innerHeight
  largura = window.innerWidth
}

ajustarTamanhoPalcoJogo()

var posicaoX = Math.floor(Math.random() * largura)
var posicaoY = Math.floor(Math.random() * altura)

var mosca = document.createElement('img')
mosca.src = 'imagens/mosca.png'
mosca.className = "mosca1"
mosca.style.left = posicaoX + 'px'
mosca.style.top = posicaoY + 'px'

document.body.appendChild(mosca)