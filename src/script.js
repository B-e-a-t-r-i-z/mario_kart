var jogador1 = {
  nome: "Mario",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var jogador2 = {
  nome: "Luidi",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var lsJogadores = [jogador1, jogador2];

var elementoTabela = document.getElementById("tabelaJogadores");

exibirNaTela();

function exibirNaTela() {
  
  var resultado = "";  
  var i = 0;
  while (i < lsJogadores.length) {
    resultado += `
    <tr>
      <td>${lsJogadores[i].nome}</td>
      <td>${lsJogadores[i].vitoria}</td>
      <td>${lsJogadores[i].empate}</td>
      <td>${lsJogadores[i].derrota}</td>
      <td>${lsJogadores[i].pontos}</td>
      <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
      <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
      <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
    </tr>
    `;
  i++;
  }
  elementoTabela.innerHTML = resultado
}

function adicionarVitoria(jogador) {
   lsJogadores[jogador].vitoria++
   lsJogadores[jogador].pontos++
   exibirNaTela();
}

function adicionarEmpate(jogador) {
   lsJogadores[jogador].empate++;
   lsJogadores[jogador].pontos++;
   exibirNaTela(); 
  
}

function adicionarDerrota(jogador) {
   lsJogadores[jogador].derrota++;
   exibirNaTela(); 
  
}
