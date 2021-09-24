function Converter() {
  var valorEmAnosLuz = parseFloat(document.getElementById("valor").value);
  var valorEmKm = (valorEmAnosLuz * 9461000000000).toLocaleString("pt-BR");

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = valorEmAnosLuz + " Ano(s)-luz = " + valorEmKm + " Km";
  elementoValorConvertido.innerHTML = valorConvertido;
}