const tabuleiroJogador = document.getElementById("tabuleiro1");
const tabuleiroCPU = document.getElementById("tabuleiro2");
const placarJogo = document.getElementById("placar");

var tabelaJogador = [ [0,0,0], [0,0,0], [0,0,0]];
var tabelaCPU = [[0,0,0], [0,0,0], [0,0,0]];
let pontosJogador = 0, pontosCPU = 0;

export function calculaPontosColuna(coluna){
    let result = 0;
    let duplicidades = {};
    coluna.forEach(function (x) { duplicidades[x] = (duplicidades[x] || 0) + 1; });
    for(let i = 1; i <= 6; i++){
        if(duplicidades[i] != undefined) result += i * duplicidades[i] * duplicidades[i];
    }
    return result;
}

export function atualizaTabuleiro(){
    let linhasJogador = tabuleiroFromTabela(tabelaJogador);
    linhasJogador.forEach(function(x) {tabuleiroJogador.appendChild(x)});
    let linhasCPU = tabuleiroFromTabela(tabelaCPU);
    linhasCPU.forEach(function(x) {tabuleiroCPU.appendChild(x)});
    atualizaPlacar();
}

function getColuna(tabela, indexColuna){
    return tabela.map(function(value,index) { return value[indexColuna]; })
}

function tabuleiroFromTabela(tabela){
    let rows = [];
    /*const row = document.createElement('tr');
    row.innerHTML += '<th>' + calculaPontosColuna(tabela[0]) + '</th>';
    row.innerHTML += '<th>' + calculaPontosColuna(tabela[1]) + '</th>';
    row.innerHTML += '<th>' + calculaPontosColuna(tabela[2]) + '</th>';
    rows.push(row);*/
    
    for(let i = 0; i < 3; i++){
        const row = document.createElement('tr');
        for(let j = 0; j < 3; j++){
            row.innerHTML += '<td>' + tabela[i][j];
            /*switch(tabela[i][j]){
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
            }*/
        }
        rows.push(row);
    }
    const row = document.createElement('tr');
    row.innerHTML += '<th>' + calculaPontosColuna(getColuna(tabela,0)) + '</th>';
    row.innerHTML += '<th>' + calculaPontosColuna(getColuna(tabela,1)) + '</th>';
    row.innerHTML += '<th>' + calculaPontosColuna(getColuna(tabela,2)) + '</th>';
    rows.push(row);
    return rows;
}

function atualizaPlacar(){
    let somatorioPontosJogador = calculaPontosColuna(getColuna(tabelaJogador, 0)) + calculaPontosColuna(getColuna(tabelaJogador, 1)) + calculaPontosColuna(getColuna(tabelaJogador, 2));
    pontosJogador = somatorioPontosJogador;
    let somatorioPontosCPU = calculaPontosColuna(getColuna(tabelaCPU, 0)) + calculaPontosColuna(getColuna(tabelaCPU, 1)) + calculaPontosColuna(getColuna(tabelaCPU, 2));
    pontosCPU = somatorioPontosCPU;
    placarJogo.innerHTML = pontosJogador + ' - ' + pontosCPU;
}