//Um array com nomes
const lista1 = ["João", "Maria", "José", "Pedro", "Joana", "Carlos"];
console.log(lista1);

//Um array com lista de compras
const lista2 = ["Arroz", "Feijão", "Batata"];
console.log(lista2);

//Um array com nível acadêmico
const lista3 = ["Médio", "Técnico", "Superior"];
console.log(lista3);

//Um array com números aleatórios
const lista4 = [30, 11, 05, 88, 100, 1258, 13];
console.log(lista4);

//Ordem crescente alfabética, ex: 100, 11, 1258, 13, 30, 5, 88
lista4.sort();
console.log(lista4);

//Ordem crescente numérica, ex: 5, 11, 13, 30, 88, 100, 1258
lista4.sort(function(a,b){return a-b});
console.log(lista4);

//Ordem decrescente numérica, ex: 1258, 100, 88, 30, 13, 11, 5
lista4.sort(function(a,b){return b-a});
console.log(lista4);