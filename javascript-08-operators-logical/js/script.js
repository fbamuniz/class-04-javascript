/* Operadores lógicos: && || ! */
var idade, verificar;
idade = 65;

verificar = (idade > 60 && idade < 70);

//Deve retornar True ou False. Neste caso, True
alert("Resultado 1: " + verificar) 

//O sinal de ! inverte a condição
verificar = !(idade > 60 && idade < 70);

//Deve retornar True ou False. Neste caso, False
alert("Resultado 2: " + verificar) 