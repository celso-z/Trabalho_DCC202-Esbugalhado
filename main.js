import { calculaPontosColuna, atualizaTabuleiro } from "./jogo.js";
var dadoJogador = document.getElementById('dice1');
var jogarDado = document.getElementById('jogar-dado');

jogarDado.onclick   = function () {rollDice();};

function rollDice() {

  var diceOne   = Math.floor((Math.random() * 6) + 1);
  console.log(diceOne);

  for (var i = 1; i <= 6; i++) {
    dadoJogador.classList.remove('show-' + i);
    if (diceOne === i) {
      dadoJogador.classList.add('show-' + i);
    }
  }
  dadoJogador.classList.add('show-' + diceOne);
}
gameLoop();
function gameLoop(){
    atualizaTabuleiro();
}