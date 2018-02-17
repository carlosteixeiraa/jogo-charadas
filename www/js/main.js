var api;

$.getJSON("https://api.myjson.com/bins/lru49", (resposta) => {
    
    //console.log(resposta.palavras)
    api = resposta.palavras;
    var palavra = random();
    $('#palavra').text(palavra.palavra);
    

});

var random = () => {

    var randomp = api[Math.floor(Math.random() * 4)];
    return randomp;
};

$("#fechar").on("click", () => {
    $("#ajuda").fadeOut(300);
});

$("#jogar").on("click", () => {
    $("#jogo").fadeIn(100);
    contador();
});

$("#bajuda").on("click", () => {
    //$("#ajuda").css("display", "block"); 
    $("#ajuda").fadeIn(300);
});

$("#denovo").on("click", () => {
    //$("#ajuda").css("display", "block"); 
    $("#perdeu").fadeOut(200);
    $("#jogar").css("display", "block"); 
    segundos = document.getElementById('tempo').innerHTML = 60;
    clearTimeout(repetir);
});


let segundos;

function contador() {

  segundos = document.getElementById('tempo').innerHTML;
  $("#jogo").css("background", "#009688"); 

  function mudarPalavra() {

    if(segundos === 10 || segundos === 20 || segundos === 30 || segundos === 40 || segundos === 50) {
        var palavra = random();
        $('#palavra').text(palavra.palavra);    
        $("#jogo").css("background", "#F44336");
    } else {
        $("#jogo").css("background", "#009688"); 
    }

    //console.log(tempo)

    }

    setInterval(mudarPalavra, 1000);

  if (segundos <= 6) {

    function vermelho() {
        $("#jogo").css("background", "#F44336"); 
    }

    function azul() {
        $("#jogo").css("background", "#009688"); 
    }

    setTimeout(vermelho, 600);
    setTimeout(azul, 500);


    if(segundos <= 0) {

        $("#jogo").css("display", "none");
        $("#perdeu").css("display", "grid");


    }


  }

  segundos--;

  tempo = document.getElementById('tempo');
  tempo.innerHTML = segundos;
  repetir = setTimeout(contador, 1000);
} 

// Movimentos ./para depois 
window.addEventListener("posicao", handleOrientation, true);

function posicao(event) {

    console.re.log(event.absolute)
    console.re.log(event.alpha)
    console.re.log(event.beta)
    console.re.log(event.gamma)

}