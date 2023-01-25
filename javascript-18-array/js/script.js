//Método 1: utilizamos colchetes
const lista1 = [
    "João",
    "Maria", 
    "José"
];
console.log(lista1);

//Método 2: instânciamos o tipo Array
const lista2 = new Array("Arroz", "Feijão", "Açúcar");
console.log(lista2);

//Método 3: criamos o array e depois populamos
const lista3 = [];
lista3[0] = "São Paulo";
lista3[1] = "Paraná";
lista3[2] = "Rio de Janeiro";
console.log(lista3);

//Criar um objeto (são mais simples)
const pessoaObj = {
    nome: "Fred",
    cidade: "Registro"
}
console.log(pessoaObj)

//Criar um array (são mais complexos, possuem mais recursos)
const pessoaArray = [
    "Fred",
    "Registro"
];
console.log(pessoaArray)

//Verifica se uma variável é um array
alert(Array.isArray(pessoaArray))