//----------------<script>----------------//

var listaTitulos = [
  "Alura",
  "Rocketseat",
  "DigitalInnovationOne",
  "Udemy",
  "MDN",
  "DevDocs",
  "W3Schools",
  "StackOverflow"
];
var listaLinks = [
  "https://www.alura.com.br",
  "https://rocketseat.com.br",
  "https://digitalinnovation.one",
  "https://www.udemy.com",
  "https://developer.mozilla.org",
  "https://devdocs.io",
  "https://www.w3schools.com",
  "https://stackoverflow.com"
];
var listaLogos = [
  "https://i.pinimg.com/originals/49/72/6e/49726e65f6b35c2e8e366a16c0734fb7.png",
  "https://raw.githubusercontent.com/Rocketseat/awesome/master/assets/logo_rocketseat.png",
  "https://hermes.digitalinnovation.one/site/images/logo-footer.png",
  "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
  "https://www.logo.wine/a/logo/MDN_Web_Docs/MDN_Web_Docs-Logo.wine.svg",
  "https://devdocs.io/images/icon-320.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/2175px-W3Schools_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png"
];

var mostrar = document.getElementById("conteudo");

Imprimir();

function Imprimir() {
  var codigoImprimir = "";
  for (var i = 0; i < listaTitulos.length; i++) {
    codigoImprimir +=
      "<h2>" +
      listaTitulos[i] +
      "</h2>" +
      "<a href='" +
      listaLinks[i] +
      "' target='_blank'" +
      ">" +
      "<img src=" +
      listaLogos[i] +
      " title=" +
      listaTitulos[i] +
      "></a>";
  }
  mostrar.innerHTML = codigoImprimir;
}

function Adicionar() {
  var titulos = document.getElementById("titulos").value;
  var logos = document.getElementById("logos").value;
  var links = document.getElementById("links").value;

  listaTitulos[listaTitulos.length] = titulos;
  listaLogos[listaLogos.length] = logos;
  listaLinks[listaLinks.length] = links;

  Imprimir();
}

//----------------Verificar existencia----------------//

// var existe = false;
// var j = listaTitulos.length;
// for (var i = 0; i < j; i++) {
//   if (listaTitulos[i][0] == titulos) {
//     var existe = true;
//   }
// }
// if (existe == true) {
//   alert("Esta referência já existe!");
// } else {
//   Adicionar();
// }

//----------------Botao Limpar----------------//

function limparInput() {
  document.getElementById("titulos").value = "";
  document.getElementById("logos").value = "";
  document.getElementById("links").value = "";
}

//----------------Base Aula 04----------------//

// var listaFilmes = [];

// for (var i = 0; i < listaFilmes.length; i++) {
//   var banner = "<img src=" + listaFilmes[i] + ">";
//   listaFilmes.innerHTML = banner;
// }

// function adicionar() {
//   var inputUrl = document.getElementById("url").value;
//   var adicionarFilme = document.write("<img src=" + listaFilmes[i] + ">");
// }
