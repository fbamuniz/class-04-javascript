 //Criando um array
 nomes = new Array;

 //Inserindo nomes aleatórios no array
 for(x=0;x<=2;x++){
     nomes[x] = prompt("Digite o " + (x+1) + "º nome:");
 }
 
 //Mostrando a lista de nomes de forma ordenada (QuickSort/InsertionSort)
 document.write(nomes.sort());        