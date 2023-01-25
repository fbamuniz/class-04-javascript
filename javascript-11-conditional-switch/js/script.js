//Estrutura condicional: switch
let farol;
farol = "vermelho";

switch (farol) {
	case "vermelho":
		document.body.style.backgroundColor = "red";
        document.getElementById("div-1").innerHTML = "Pare!";
		break
	case "amarelo":
		document.body.style.backgroundColor = "yellow";
        document.getElementById("div-1").innerHTML = "Atenção!";
		break
	case "verde":
		document.body.style.backgroundColor = "green";
        document.getElementById("div-1").innerHTML = "Siga!";
		break
	default:
		document.body.style.backgroundColor = "white";
        document.getElementById("div-1").innerHTML = "Cor inválida!";
}