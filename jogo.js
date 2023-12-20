const tabuleiroJogador = document.getElementById("tabuleiro1");
const tabuleiroCPU = document.getElementById("tabuleiro2");

var tabelaJogador = [ [0,0,0], [0,0,0], [0,0,0]];
var tabelaCPU = [[6,6,6], [0,0,0], [0,0,0]];
var pontosJogador, pontosCPU;

function calculaPontosColuna(coluna){
    result = 0;
    duplicidades = {};
    coluna.forEach(function (x) { duplicidades[x] = (duplicidades[x] || 0) + 1; });
    for(let i = 1; i <= 6; i++){
        if(duplicidades[i] != undefined) result += i * duplicidades[i] * duplicidades[i];
    }
    return result;
}


function atualizaTabuleiro(){
    for(let i = 0; i < 3; i++){
        const row = document.createElement('tr');
        for(let j = 0; j < 3; j++){
            switch(tabelaJogador[i][j]){
                case 0:{
                    row.innerHTML += '<td></td>';
                    break;
                }
                case 1:{
                    row.innerHTML += '<td>1</td>';
                    break;
                }
                case 2:{
                    row.innerHTML += '<td>2</td>';
                    break;
                }
                case 3:{
                    row.innerHTML += '<td>3</td>';
                    break;
                }
                case 4:{
                    row.innerHTML += '<td>4</td>';
                    break;
                }
                case 5:{
                    row.innerHTML += '<td>5</td>';
                    break;
                }
                case 6:{
                    row.innerHTML += '<td>6</td>';
                    break;
                }
            }
        }
        tabuleiroJogador.appendChild(row);
    }
}