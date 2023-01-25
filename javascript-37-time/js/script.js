//Trabalhamos com o objeto Date
let data = new Date();
console.log(data);

//Ano
let ano = data.getFullYear();
console.log(ano);

//Mês
let mes = data.getMonth();
console.log(mes);

//Otimizando o mês
const mesArray = [
    "JAN", 
    "FEV", 
    "MAR", 
    "ABR", 
    "MAI", 
    "JUN", 
    "JUL", 
    "AGO", 
    "SET", 
    "OUT", 
    "NOV", 
    "DEZ"
]

let mesMostrar = mesArray[data.getMonth()];
console.log(mesMostrar);

//Dia
let dia = data.getDate();
console.log(dia);

//Dia da semana
let semana = data.getDay();
console.log(semana);

//Hora
let hora = data.getHours();
console.log(hora);

//Minuto
let minuto = data.getMinutes();
console.log(minuto);

//Segundos
let segundo = data.getSeconds();
console.log(segundo);

//Milissegundos
let milissegundo = data.getMilliseconds();
console.log(milissegundo);

//Data brasileira 00/00/0000 00:00:00
let dataBr1 = data.toLocaleString("pt-br")
console.log(dataBr1);

//Data brasileira 00/00/0000
let dataBr2 = data.toLocaleString("pt-br",{dateStyle:"short"})
console.log(dataBr2);

//Tempo brasileiro 00:00:00
let dataBr3 = data.toLocaleString("pt-br",{timeStyle:"short"})
console.log(dataBr3);

//Comparar datas
var hoje = new Date();
var vencimento = new Date(2023,1,1);
console.log((hoje > vencimento)?"Venceu":"No prazo");

//Diferença em dias
var dataInicial = new Date();
var dataFinal = new Date(2023,11,31);
//O getTime pega o tempo em milissegundos
var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
//Arredonda e converter milissegundos para dias (h * min * seg * milisseg)
var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));
console.log(diferencaDias);