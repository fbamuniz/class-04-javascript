/* Operadores de comparação: > < >= <= == != */
var n, m, resultado1, resultado2;

n = 10; 
m = "10";

//Verifica se os valores são iguais, indiferente da tipagem
resultado1 = (n == m);  

//Deve retornar True ou False. Neste caso, True
alert("Resultado 1: " + resultado1) 

//Verifica se os valores e a tipagem são iguais
resultado2 = (n === m); 

//Deve retornar True ou False. Neste caso, False
alert("Resultado 2: " + resultado2)