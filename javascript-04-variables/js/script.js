//Para variáveis com mais de uma palavra, use o padrão camelCase
let meuCurso, pessoaFisica, pessoaJuridica;

//Declaração de variáveis, sem tipagem (String, int, float)
var a, b;

//Palavras reservadas: https://www.w3schools.com/js/js_reserved.asp

//Atribuição de valores nas variáveis
a = 10;
b = "Fred";

//A saída retornará NaN (Not a Number)
resultado = a * b;
alert(resultado);

var n1, n2;
n1 = prompt("Digite o n1");
n2 = prompt("Digite o n2");
media = (n1+n2)/2

//O resultado de 7+7 será 77/2=38.5, errado!
alert(media)

//Necessário a conversão com parseInt() ou parseFloat()
media = (parseInt(n1)+parseInt(n2))/2

//O resultado de 7+7 será 14/2=7, correto!
alert(media)

//Variável let, a torna única, não podendo repeti-la
let nome, sobrenome;
nome = "Fred";
sobrenome = " Barbosa";

//Concatenação é o ato de unir
document.write(nome + sobrenome);

//Variáveis const fixam o mesmo valor, mesmo dentro de blocos {}
const x = 100;