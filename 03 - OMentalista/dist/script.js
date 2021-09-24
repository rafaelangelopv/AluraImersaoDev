//----------------<script>----------------//

var numeroAleatorio = parseInt(Math.random() * 11);
var tentativa = 0;

function Adivinhar() {
  if (tentativa < 3) {
    var chute = parseInt(document.getElementById("valor").value);

    if (chute >= 0 && chute <= 10) {
      if (chute == numeroAleatorio) {
        document.getElementById("resultado").innerHTML =
          "Parabéns! Você acertou. O número é exatamente: " + numeroAleatorio;
        numeroAleatorio = parseInt(Math.random() * 11);
        tentativa = 0;
        return 0;
      } else {
        if (chute < numeroAleatorio) {
          document.getElementById("resultado").innerHTML =
            "Não...eu penso grande! Cuidado, restam apenas: " +
            (2 - tentativa) +
            " tentativas!";
        } else {
          document.getElementById("resultado").innerHTML =
            "Calma...um pouco menor! Respire, restam apenas: " +
            (2 - tentativa) +
            " tentativas!";
        }
      }
      if (tentativa == 2) {
        tentativa = 0;
        document.getElementById("resultado").innerHTML =
          "Impossível entrar na minha mente! Suas chances acabaram. O número era " +
          numeroAleatorio;
        numeroAleatorio = parseInt(Math.random() * 11);
        return;
      }
      tentativa++;
    } else {
      document.getElementById("resultado").innerHTML =
        "Digite um número entre 0 e 10";
    }
  }
}

//----------------Botao Desistir----------------//

function desistir() {
  var elementoResultado = document.getElementById("resultado");
  elementoResultado.innerHTML =
    "Espero você novamente... O número é: " + numeroAleatorio;
}

//----------------Botao Limpar----------------//

function limparResultado() {
  document.getElementById("valor").value = " ";
}