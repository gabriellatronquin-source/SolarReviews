

function mostrarMenu(){

    let menu = document.getElementById("menuPesquisa");

    if(menu.style.display=="block"){
        menu.style.display="none";
    }else{
        menu.style.display="block";
    }

}

function curtir(botao) {
  // Procura onde está o número de curtidas dentro do botão
  const contador = botao.querySelector('.count');
  
  // Pega o número atual
  let numeroAtual = parseInt(contador.textContent);

  // Se o botão já foi clicado (curtido)
  if (botao.classList.contains('curtido')) {
    botao.classList.remove('curtido');  // Tira o destaque visual
    contador.textContent = numeroAtual - 1; // Diminui 1 curtida
  } else {
    // Se ainda não foi clicado
    botao.classList.add('curtido');     // Adiciona o destaque visual
    contador.textContent = numeroAtual + 1; // Aumenta 1 curtida
  }
}