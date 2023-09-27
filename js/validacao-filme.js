const cadastroBtn = document.getElementById("cadastroBtn");
const streamingCheckbox = document.getElementById("streaming");

let filmes = JSON.parse(localStorage.getItem('filmes'))

if (filmes == null) {
  filmes = []
  localStorage.setItem('filmes', JSON.stringify(filmes))
}

function salvarFilme(novoFilme) {
  filmes.push(novoFilme)
  localStorage.setItem('filmes', JSON.stringify(filmes))
}

streamingCheckbox.addEventListener('change', (event) => {
  cadastroBtn.disabled = !event.currentTarget.checked;
})

function contemErros() {
  var contemErro = false

  const camposDeTextoEData = document.querySelectorAll("input[type=text], input[type=date]");

  camposDeTextoEData.forEach(campo => {
    if (!campo.value.trim()) {
      campo.classList.add("error");
      contemErro = true
    } else {
      campo.classList.remove("error");
    }
  });

  const classificacao = document.querySelector('input[name="classificacao"]:checked');
  if (classificacao == null) {
    document.getElementById("classificacaoLabel").classList.add("error")
    contemErro = true
  } else {
    document.getElementById("classificacaoLabel").classList.remove("error")
  }

  return contemErro
}

function construirObjetoComValores() {
  const campoNomeBrasil = document.getElementById('nome_brasil')
  const campoNomeOriginal = document.getElementById('nome_original')
  const campoDiretor = document.getElementById('diretor')
  const campoDataEstreia = document.getElementById('data_estreia')
  const campoClassificacao = document.querySelector('input[name="classificacao"]:checked');
  const campoGenero = document.getElementById('genero')

  return {
    nomeBrasil: campoNomeBrasil.value,
    nomeOriginal: campoNomeOriginal.value,
    diretor: campoDiretor.value,
    dataEstreia: campoDataEstreia.value,
    classificacao: campoClassificacao.value,
    genero: campoGenero.value
  }
}

cadastroBtn.addEventListener('click', (event) => {
  event.preventDefault()

  if (contemErros()) {
    alert('Foram encontrados erros na página. Por favor, verifique.')
  } else {
    const objetoComValores = construirObjetoComValores()
    salvarFilme(objetoComValores)
  }
})
