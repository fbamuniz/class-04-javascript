//Objeto literal, com propriedade:valor
const carro = {
    marca: "Fiat",
    modelo: "Strada",
    ano: 2023,
    placa: "AAA-0000",
    buzinar: function(){alert("Som!")},
    mostrar: function(){return "A marca é " + this.marca}
};

//Abra o console no browser 
//console.log(carro)

//Exemplo 2
//console.log(carro.placa)

//Exemplo 3
//console.log(carro.["placa"])

//Exemplo 4
//carro.buzina();

//Exemplo 5
console.log(carro.mostrar())