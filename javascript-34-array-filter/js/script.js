//Um array com nomes
const lista1 = ["João", "Maria", "José"];
console.log(lista1);

//Um array com lista de compras
const lista2 = ["Arroz", "Feijão", "Batata"];
console.log(lista2);

//Um array com nível acadêmico
const lista3 = ["Médio", "Técnico", "Superior"];
console.log(lista3);

//Um array com números aleatórios
const lista4 = [1, 4, 9, 16];

//Filtragem, somente maiores que 5
const maior5 = lista4.filter(filtragem);

function filtragem(value, index, array){
    return value > 5;
}
document.getElementById("div-1").innerHTML = maior5;