let filmes = JSON.parse(localStorage.getItem('filmes'))

if (filmes == null) {
  filmes = []
  localStorage.setItem('filmes', JSON.stringify(filmes))
}

filmes.forEach(filme => {
  adicionarFilmeNaTabela(filme)
});

function adicionarFilmeNaTabela(filme) {
  const tabela = document.getElementById('filmes')
  const tr = document.createElement('tr')

  const tdNomeBrasil = document.createElement('td')
  const tdNomeOriginal = document.createElement('td')
  const tdDiretor = document.createElement('td')
  const tdDataEstreia = document.createElement('td')
  const tdClassificacao = document.createElement('td')
  const tdGenero = document.createElement('td')

  tdNomeBrasil.innerText = filme.nomeBrasil
  tdNomeOriginal.innerText = filme.nomeOriginal
  tdDiretor.innerText = filme.diretor
  tdDataEstreia.innerText = filme.dataEstreia
  tdClassificacao.innerText = filme.classificacao
  tdGenero.innerText = filme.genero

  tr.appendChild(tdNomeBrasil)
  tr.appendChild(tdNomeOriginal)
  tr.appendChild(tdDiretor)
  tr.appendChild(tdDataEstreia)
  tr.appendChild(tdClassificacao)
  tr.appendChild(tdGenero)

  tabela.appendChild(tr)
}
