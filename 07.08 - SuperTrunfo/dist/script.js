var python = {
  nome: "Python",
  img:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png",
  atributos: {
    processamento: 6,
    sintaxe: 10,
    popularidade: 10
  }
};
var java = {
  nome: "Java",
  img:
    "https://upload.wikimedia.org/wikipedia/pt/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png",
  atributos: {
    processamento: 7,
    sintaxe: 6,
    popularidade: 9
  }
};
var javaScript = {
  nome: "JavaScript",
  img:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
  atributos: {
    processamento: 10,
    sintaxe: 8,
    popularidade: 8
  }
};
var cSharp = {
  nome: "C# (CSharp)",
  img: "https://static.cdnlogo.com/logos/c/27/c.svg",
  atributos: {
    processamento: 9,
    sintaxe: 7,
    popularidade: 7
  }
};
var cpp = {
  nome: "C++",
  img:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png",
  atributos: {
    processamento: 9,
    sintaxe: 6,
    popularidade: 6
  }
};

var cartas = [python, java, javaScript, cSharp, cpp];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * cartas.length);

  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * cartas.length);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  var textoResultado = "";
  if (valorCartaJogador > valorCartaMaquina) {
    textoResultado = "<p class='resultado-final'> Você venceu!! </p>";
  } else if (valorCartaMaquina > valorCartaJogador) {
    textoResultado = "<p class='resultado-final'> Você perdeu </p>";
  } else {
    textoResultado = "<p class='resultado-final'> Empate </p>";
  }

  divResultado.innerHTML = textoResultado;
  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.img})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      ": " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");

  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.img})`;

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      ": " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

// function jogarNovamente() {
//   var divCartasJogador = document.getElementById("carta-jogador");
//   var divCartasMaquina = document.getElementById("carta-maquina");
//   var elementoResultado = document.getElementById("resultado");
//   divCartasJogador.innerHTML = "<h3></h3>";
//   divCartasJogador.removeAttribute("style");
//   divCartasMaquina.innerHTML = "<h3></h3>";
//   divCartasMaquina.removeAttribute("style");
//   elementoResultado.innerHTML = "<p></p>";
//   document.getElementById("btnSortear").disabled = false;
//   document.getElementById("btnJogar").disabled = true;
//   document.getElementById("btnJogarNovamente").disabled = true;
// }