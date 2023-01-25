//Um array com nomes
const lista1 = ["João", "Maria", "José"];
console.log(lista1);

//Um array com lista de compras
const lista2 = ["Arroz", "Feijão", "Batata"];
console.log(lista2);

//Um array com nível acadêmico
const lista3 = ["Médio", "Técnico", "Superior"];
console.log(lista3);

//A partir da posição 1, foram adicionados outros 2 itens ("Item 1" e "Item 2"). No segundo argumento, são quantos itens a frente você deseja deletar, neste caso não foi nenhum (zero).
lista1.splice(1,0,"Item 1","Item 2")
console.log(lista1);