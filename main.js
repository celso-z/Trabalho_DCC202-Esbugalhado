import { atualizaTabuleiro, getColunaValidaJogador, setTabelaJogador, jogadaValidaCPU, setTabelaCPU, verificaFimJogador, verificaFimCPU, quemGanhou } from "./jogo.js";
var dadoJogador = document.getElementById('dice1');
var jogarDado = document.getElementById('jogar-dado');

jogarDado.onclick   = function () {Rodada();};

function rollDice() {

  var valorDadoAtual   = Math.floor((Math.random() * 6) + 1);

  for (var i = 1; i <= 6; i++) {
    dadoJogador.classList.remove('show-' + i);
    if (valorDadoAtual === i) {
      dadoJogador.classList.add('show-' + i);
    }
  }
  dadoJogador.classList.add('show-' + valorDadoAtual);
  return valorDadoAtual;
}

function rodadaJogador(){
  if(verificaFimJogador()) alert("O jogo acabou " + quemGanhou() + " foi vencedor");
  let linhaJogada = -1;
  let valorDado = rollDice();
  
  while(linhaJogada == -1){
    let input = prompt("Digite a coluna desejada (1-3) da esquerda para a direita: "); 
    if(input == null) continue;
    linhaJogada = getColunaValidaJogador(input);
    if (linhaJogada == -1) {
      alert("Coluna completa, selecione outra coluna");
    }else{
      setTabelaJogador(linhaJogada, input-1, valorDado)
    }
  }
  atualizaTabuleiro();
}

function rodadaCPU(){
  if(verificaFimCPU()) alert("O jogo acabou " + quemGanhou() + " foi vencedor");
  let coordenadas = [];
  coordenadas = jogadaValidaCPU();
  setTabelaCPU(coordenadas[0], coordenadas[1], rollDice());
  atualizaTabuleiro();
}

function Rodada(){
  jogarDado.style.visibility = "hidden";
  rodadaJogador();
  
  setTimeout(() => {
    rodadaCPU();
    jogarDado.style.visibility = "visible";
  }, "2500");
}

atualizaTabuleiro();