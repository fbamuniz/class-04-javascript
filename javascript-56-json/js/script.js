//Objeto carro
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2022,
    motor: ["1.0","1.4"]
}

//Não funciona, pq ele é abstrato
//document.getElementById("texto").innerHTML = carro;

//Converter o objeto para texto. A propriedade fica com aspas
let carroTexto = JSON.stringify(carro);

//Mostra das as propriedades do objeto
//document.getElementById("texto").innerHTML = carroTexto;

//Mostrar somente o modelo. Não funciona, pois é texto. Precisa converter
//console.log(carroTexto.modelo)

//Converter texto pra objeto
let carroObjeto = JSON.parse(carroTexto);
console.log(carroObjeto.modelo)
console.log(carroObjeto.motor[1])