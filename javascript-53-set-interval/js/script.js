//O setInterval executa uma tarefa em tempo real na página
function aCon(){
    tempo = setInterval(function(){
        var cronometro = document.getElementById("div-1").innerHTML;
        var soma = parseInt(cronometro) + 1;
        document.getElementById("div-1").innerHTML = soma;
    }, 1000);
}

//O clearInterval cancela a execução do setInterval
function bCon(){
    clearInterval(tempo);
    document.getElementById("texto2").innerHTML = "Parado!"
}