// Var's

var sk = {
  nome: "SK Gamming",
  img: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Skgaminglogo.jpg",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var navi = {
  nome: "Natus Vincere",
  img:
    "https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/NaVi_logo.svg/1200px-NaVi_logo.svg.png",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var fanatic = {
  nome: "Fanatic",
  img: "https://fontmeme.com/images/fnatic-logo-font.png",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var liquid = {
  nome: "Team Liquid",
  img:
    "https://wikiimg.tojsiabtv.com/wikipedia/en/thumb/f/f1/Team_Liquid_logo.svg/1200px-Team_Liquid_logo.svg.png",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var g2 = {
  nome: "G2",
  img:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQnNw5vcuBlefx9q_6ck2QX6X1gRqv4wWYhQ&usqp=CAU",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var times = [sk, navi, fanatic, liquid, g2];
var itimes = times.length;

// Function's

function calculaPontos(time) {
  var pontos = time.vitorias * 3 + time.empates;
  return pontos;
}

function exibeTimesNaTela(times) {
  var elemento = "";
  for (var i = 0; i < times.length; i++) {
    elemento += "<tr><td><img class='imgTime' src='" + times[i].img + "'></td>";
    elemento += "<td>" + times[i].nome + "</td>";
    elemento += "<td>" + times[i].vitorias + "</td>";
    elemento += "<td>" + times[i].empates + "</td>";
    elemento += "<td>" + times[i].derrotas + "</td>";
    elemento += "<td>" + times[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" +
      i +
      ")'>Vitória</button><button onClick='retirarVitoria(" +
      i +
      ")'>X</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" +
      i +
      ")'>Empate</button><button onClick='retirarEmpate(" +
      i +
      ")'>X</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" +
      i +
      ")'>Derrota</button><button onClick='retirarDerrota(" +
      i +
      ")'>X</button></td>";
    elemento +=
      "<td><button onclick='removerTime(" + i + ")'>Remover</button></td>";
    elemento += "</tr>";
  }
  var tabelaTimes = document.getElementById("tabelaTimes");
  tabelaTimes.innerHTML = elemento;
}

function adicionarVitoria(i) {
  var time = times[i];
  time.vitorias++;
  time.pontos = calculaPontos(time);
  exibeTimesNaTela(times);
  perdeu(i);
}

function adicionarEmpate(i) {
  var time = times[i];
  time.empates++;
  time.pontos = calculaPontos(time);
  exibeTimesNaTela(times);
  empatou(i);
}

function adicionarDerrota(i) {
  var time = times[i];
  time.derrotas++;
  time.pontos = calculaPontos(time); // Não calcula nada, pois não adiciona ou perde pontos.
  exibeTimesNaTela(times);
  ganhou(i);
}

function ganhou(i) {
  if (i < itimes - 1) {
    var time0 = times[i + 1];
    time0.vitorias++;
    time0.pontos = calculaPontos(time0);
    exibeTimesNaTela(times);
  } else {
    var time1 = times[0];
    time1.vitorias++;
    time1.pontos = calculaPontos(time1);
    exibeTimesNaTela(times);
  }
}

function perdeu(i) {
  if (i < itimes - 1) {
    var time0 = times[i + 1];
    time0.derrotas++;
    time0.pontos = calculaPontos(time0);
    exibeTimesNaTela(times);
  } else {
    var time1 = times[0];
    time1.derrotas++;
    time1.pontos = calculaPontos(time1);
    exibeTimesNaTela(times);
  }
}

function empatou(i) {
  if (i < itimes - 1) {
    var time0 = times[i + 1];
    time0.empates++;
    time0.pontos = calculaPontos(time0);
    exibeTimesNaTela(times);
  } else {
    var time1 = times[0];
    time1.empates++;
    time1.pontos = calculaPontos(time1);
    exibeTimesNaTela(times);
  }
}

function retirarVitoria(i) {
  var retirarVitoria = times[i];
  retirarVitoria.vitorias = 0;
  retirarVitoria.pontos = calculaPontos(retirarVitoria);
  var retirarVitoria = times[i + 1];
  retirarVitoria.derrotas = 0; // Nao rodou no ultimo
  retirarVitoria.pontos = calculaPontos(retirarVitoria);
  exibeTimesNaTela(times);
}

function retirarEmpate(i) {
  var retirarEmpate = times[i];
  retirarEmpate.empates = 0;
  retirarEmpate.pontos = calculaPontos(retirarEmpate);
  var retirarEmpate = times[i + 1];
  retirarEmpate.empates = 0;
  retirarEmpate.pontos = calculaPontos(retirarEmpate);
  exibeTimesNaTela(times);
}

function retirarDerrota(i) {
  var retirarDerrota = times[i];
  retirarDerrota.derrotas = 0;
  retirarDerrota.pontos = calculaPontos(retirarDerrota);
  var retirarDerrota = times[i + 1];
  retirarDerrota.vitorias = 0;
  retirarDerrota.pontos = calculaPontos(retirarDerrota);
  exibeTimesNaTela(times);
}

function adicionarTime() {
  var timeNovo = document.getElementById("novoTeam").value;
  var imgNovo = document.getElementById("novoImg").value;
  var novoTime = {
    nome: timeNovo,
    img: imgNovo,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  times.push(novoTime);
  exibeTimesNaTela(times);
  document.getElementById("novoTeam").value;
}

function removerTime(i) {
  times.splice(i, 1);
  exibeTimesNaTela(times);
}

function limparTabela(times) {
  for (var i = 0; i < times.length; i++) {
    times[i].vitorias = 0;
    times[i].empates = 0;
    times[i].derrotas = 0;
    times[i].pontos = 0;
    exibeTimesNaTela(times);
  }
}

// function atualizaClassificacao() {
//   times.sort(function (a, b) {
//     if (a.pontos > b.pontos) {
//       return -1;
//     }
//     if (a.pontos < b.pontos) {
//       return 1;
//     }
//     // se o mesmo ponto ordena por vitorias
//     if (a.vitorias > b.vitorias) {
//       return -1;
//     }

//     if (a.vitorias < b.vitorias) {
//       return 1;
//     }

//     //se pontos e vitorias iguais
//     return 0;
//   });
//   exibeTimesNaTela();
//   document.querySelector("atualizaClassificacao()").innerHTML = ;
// }

// Call's

sk.pontos = calculaPontos(sk);
navi.pontos = calculaPontos(navi);
fanatic.pontos = calculaPontos(fanatic);
liquid.pontos = calculaPontos(liquid);
g2.pontos = calculaPontos(g2);

exibeTimesNaTela(times);

// function validaImagem(texto) {
//   if (
//     texto.endsWith("jpeg") ||
//     texto.endsWith("jpg") ||
//     texto.endsWith("gif") ||
//     texto.endsWith("png") ||
//     texto.endsWith("svg")
//   ) {
//     console.log("endereço válido");
//     return true;
//   } else {
//     console.error("O endereço não é de formato válido. (jpeg,jpg,gif,png,svg)");
//     document.querySelector(".tide").innerHTML =
//       "<img src='https://i.imgur.com/tVr2T3S.png'> <p> AHHHHH algo está errado. O endereço da imagem não é de um formato válido. (jpeg,jpg,gif,png,svg)";
//     return false;
//   }
// }