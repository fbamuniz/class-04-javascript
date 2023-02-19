//Um array com nomes
const lista1 = ["João", "Maria", "José"];
console.log(lista1);

//Um array com lista de compras
const lista2 = ["Arroz", "Feijão", "Batata"];
console.log(lista2);

//Um array com nível acadêmico
const lista3 = ["Médio", "Técnico", "Superior"];
console.log(lista3);

//Subtitui todos os valores. O segundo argumento informa a partir de qual índice ocorrerá a substituição e o terceiro onde ele deve parar. Logo, ambos formam o intervalo da modificação
lista1.fill("Fred",0,0);
console.log(lista1);