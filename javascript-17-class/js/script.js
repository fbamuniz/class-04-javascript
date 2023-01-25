//Criando um objeto do jeito clássico
/*const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2020,
}*/

//Criando uma "fábrica" de objetos Carro
class Carro{
    constructor(valor1, valor2, valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzinar(){
        return this.modelo + ": Som!";
    }
}

//Criando um objeto na nova versão do javascript (2015)
const uno = new Carro("Fiat", "Uno", 2023);

//Criando um objeto na nova versão do javascript (2015)
const gol = new Carro("Volks", "Gol", 2023);

//Visualizando o objeto
console.log(uno);

//Visualizando o objeto
console.log(gol.marca);

//Visualizando o objeto
console.log(gol.buzinar());

//Modificando o valor de uma propriedade
gol.ano = 2020;

//Visualizando o objeto
console.log(gol.ano);