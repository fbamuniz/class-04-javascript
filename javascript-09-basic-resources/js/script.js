//O Math.random() Gera um número aleatório entre 0 e 100
let num1, num2;
num1 = Math.random() * 100;
document.getElementById("div-1").innerHTML = num1;

//O Math.floor() faz arredondamento para baixo
num2 = 2.6;
document.getElementById("div-2").innerHTML = Math.floor(num2);

//O Math.round() faz arredondamento para cima
document.getElementById("div-3").innerHTML = Math.round(num2);

//O Math.sqrt() enconrta a raiz quadrada
document.getElementById("div-4").innerHTML = Math.sqrt(num1);

//No Math.pow(2,3) declara-se a base e o expoente da potência
document.getElementById("div-5").innerHTML = Math.pow(2,3)

//O substr(3,6) remove String no início e final da frase
loremIpsum = "Lorem ipsum dolor sit amet consectetur adipisicing"
document.getElementById("div-6").innerHTML = loremIpsum.substr(2,9)

//Aplica maiúsculo na String
document.getElementById("div-7").innerHTML = loremIpsum.toUpperCase();

//Aplica minúsculo na String
document.getElementById("div-8").innerHTML = loremIpsum.toLowerCase();