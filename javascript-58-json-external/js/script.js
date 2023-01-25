//Inclui Google Maps? Ia ficar bem legal!

function buscarCEP(){
    let input = document.getElementById("cep").value;

    const ajax = new XMLHttpRequest();
    ajax.open("GET", "https://viacep.com.br/ws/" + input + "/json/");
    ajax.send();

    ajax.onload = function(){
        document.getElementById("div-1").innerHTML = this.responseText;
        //Converteu para objeto
        let obj = JSON.parse(this.responseText);

        //Separou alguns valores
        let logradouro = obj.logradouro;
        let cidade = obj.localidade;
        let estado = obj.uf;

        document.getElementById("div-1").innerHTML =
        "Logradouro: " + logradouro +
        "<br>Cidade: " + cidade +11850
        "<br>UF: " + estado;

    }
}

/* Somente para fins de teste do Ajax */
function aCon(){
    tempo = setInterval(function(){
        var cronometro = document.getElementById("div-2").innerHTML;
        var soma = parseInt(cronometro) + 1;
        document.getElementById("div-2").innerHTML = soma;
    }, 1000);
}

function bCon(){
    clearInterval(tempo);
    document.getElementById("div-2").innerHTML = "Parado!"
}