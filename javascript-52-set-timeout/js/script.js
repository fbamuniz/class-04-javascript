//O setTimeout permite que uma tarefa seja executada em background
function aCon(){
    document.getElementById("div-1").innerHTML = "Contando..."
    tempo = setTimeout(function(){
        document.getElementById("div-1").innerHTML = "Executou!"
    }, 5000);
}

//O clearTimeout cancela a execução do setTimeout
function pCon(){
    clearTimeout(tempo);
    document.getElementById("div-1").innerHTML = "Parado!"
}