//Função simples de soma
function soma(v1,v2){
    return v1 + v2;
}
document.getElementById("div-1").innerHTML = soma(10,20);


//Função simples para conversão do dólar
function converterMoeda(dolarDia, dolarQtd){
    return dolarDia * dolarQtd;
}
document.getElementById("div-2").innerHTML = converterMoeda(5.13,6000);

//Estrutura de repetição como uma função
function loopDesenho(){
    for (let vermelho=1; vermelho<=3; vermelho++){
        document.write("<div id='div-x'>" + vermelho + "</div>");
        for (let azul=1; azul<=3; azul++){
            document.write("<div id='div-y'>" + azul + "</div>");
         }
    }
}
document.getElementById("body").innerHTML = loopDesenho();