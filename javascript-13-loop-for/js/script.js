//Estrutura de repetição: for
  /*for (let numero=1; numero<=3; numero++){
    document.write (numero + "<br>");
  }*/

//Repetição aninhada
/*for (let numero1=1; numero1<=3; numero1++){
    document.write (numero1 + "<br>");
    for (let numero2=1; numero2<=3; numero2++){
        document.write (numero2 + "<br>");
     }
}*/

//Repetição aninhada com imagens
for (let vermelho=1; vermelho<=3; vermelho++){
    document.write("<div id='div-1'>" + vermelho + "</div>");
    for (let azul=1; azul<=3; azul++){
        document.write("<div id='div-2'>" + azul + "</div>");
     }
}

