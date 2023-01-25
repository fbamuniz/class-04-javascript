//Estrutura condicional: if/else
let nota;
nota = 10;

    //É possível usar somente o if, sem o else
 	if(nota > 10 || nota < 0) {
        document.getElementById("div-1").innerHTML = "Inválida";
 	} else if(nota < 2) {
		document.getElementById("div-1").innerHTML = "Reprovado";
	} else if(nota >= 2 && nota < 6) {
		document.getElementById("div-1").innerHTML = "Recuperação";
	} else {
        document.getElementById("div-1").innerHTML = "Aprovado!";
    }