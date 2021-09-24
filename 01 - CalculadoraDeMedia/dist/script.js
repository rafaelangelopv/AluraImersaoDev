function media() {
	var n1 = parseFloat(document.getElementById("n1").value);
	var n2 = parseFloat(document.getElementById("n2").value);
	var n3 = parseFloat(document.getElementById("n3").value);
	var n4 = parseFloat(document.getElementById("n4").value);

	var media = (n1 + n2 + n3 + n4) / 4;

	if (media >= 7 && media <= 10) {
		var media7 = document.getElementById("txtMedia");
		var txtMedia = "Parabéns!! O aluno está aprovado! Nota: " + media;
		media7.innerHTML = txtMedia;
	} else if (media >= 10) {
		var media10 = document.getElementById("txtMedia");
		var txtMedia =
			"Parabéns! O aluno está aprovado com nota máxima! Nota: " + media;
		media10.innerHTML = txtMedia;
	} else {
		var media6 = document.getElementById("txtMedia");
		var txtMedia = "Infelizmente, o aluno está reprovado. Nota: " + media;
		media6.innerHTML = txtMedia;
	}
}

function limparResultado() {
	document.getElementById("n1").value = " ";
	document.getElementById("n2").value = " ";
	document.getElementById("n3").value = " ";
	document.getElementById("n4").value = " ";
}