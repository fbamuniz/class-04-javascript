# JavaScript
![NPM](https://img.shields.io/npm/l/react)
# Introdução

O JavaScript foi originalmente desenvolvido sob o nome de Mocha, posteriormente teve seu nome modificado para LiveScript e, por fim, JavaScript. LiveScript foi o nome oficial da linguagem quando ela foi lançada pela primeira vez na versão beta do navegador [Netscape](#) 2.0, em setembro de 1995, mas teve seu nome alterado em um anúncio conjunto com a [Sun Microsystems](#), em dezembro do mesmo ano, quando foi implementado no navegador Netscape, versão 2.0B3.

O fundador do JavaScript foi [Brendan Eich](#), que nasceu em 1961 nos Estados Unidos. O programador iniciou sua carreira na [Silicon Graphics](#), trabalhando por sete anos em sistemas operacionais e sistemas de rede; depois atuou por três anos na MicroUnity Systems Engineering.

Eich ficou realmente conhecido por seu trabalho na Netscape e na [Mozilla](#). Na Netscape Communications Corporation, começou a trabalhar em abril de 1995, justamente no JavaScript. Depois ajudou a fundar a Mozilla.org em 1998, atuando como arquiteto-chefe. Quando a AOL desativou a divisão para o navegador Netscape em julho de 2003, Eich ajudou a fomentar a Mozilla Foundation.

Abaixo, um exemplo da sintaxe do JavaScript.

```javascript
//O setTimeout permite que uma tarefa seja executada em background
function aCon(){
    document.getElementById("div-1").innerHTML = "Contando..."
    tempo = setTimeout(function(){
        document.getElementById("div-1").innerHTML = "Executou!"
    }, 5000);
}

//O clearTimeout cancela a execução do setTimeout
function pCon(){
    clearTimeout(tempo);
    document.getElementById("div-1").innerHTML = "Parado!"
}
```

## A evolução do JavaScript
O JavaScript tem um papel fundamental na evolução da Web, pois a ideia central da Internet era ser uma plataforma aberta para todos. Foi superimportante que a sua principal linguagem de programação também fosse aberta, sem controle centralizado de corporações e de fácil aprendizado. O JavaScript conseguiu, inclusive, eliminar os temíveis “plug-ins de terceiros” de navegadores, quando vivíamos uma Internet cheia de ferramentas proprietárias e com a performance ruim. A principal vantagem é que todos os navegadores competiam por uma implementação mais rápida de JavaScript; enquanto isso, os desenvolvedores e os usuários saíam ganhando, daí o JS ficou cada vez melhor por causa dessa concorrência em cima do mesmo produto.

## Principais características do JavaScript
Dentre as principais qualidades do JavaScript são a possibilidade e a facilidade em testar a linguagem de forma rápida, o que contribui para o desenvolvedor visualizar o resultado do seu código. Com [Node.js](#), a linguagem rompeu a barreira da web, e isso é muito significativo na hora de escolher uma linguagem para trabalhar. 

A [ECMA](#) (European Computer Manufacturers Association) é uma organização sem fins lucrativos que desenvolve os padrões para hardware de computadores, comunicações e linguagens de programação e é reconhecida por muitos como o principal lado positivo do JavaScript, pois a fundação faz um trabalho de desenvolvimento contínuo e descentralizado com o JavaScript. A ECMA coordena um grupo que tem participação colaborativa de empresas que implementam o run-time do JS, como Mozilla, Google, Microsoft e Apple, além da participação de desenvolvedores Web que representam as comunidades de desenvolvimento.

## A versão ES6 (ou ES2015).
O JavaScript sempre teve sua força na Web e no servidor, e isso se tornou um diferencial, mas com o avanço tecnológico algumas dúvidas pairam no ar sobre a evolução da linguagem. Desenvolvedores apostam fortemente em tendências que devem acompanhar o JavaScript, como a de aplicativos para desktop, que, por incrível que pareça, já é um novo nicho de desenvolvimento utilizando a linguagem (como Spotify etc.). Hoje o JavaScript conta com classes, módulos, templates, promisses e destructuring; conceitos que realmente faziam falta para os desenvolvedores. 

Abaixo, um exemplo de código JavaScript, utilizando o paradigma de classes:
```javascript
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
```

No vídeo abaixo da IlustraDev, é apresentado um pequeno resumo do que é o JavaScript e sua aplicabilidade. 

[![Assista ao vídeo](https://img.youtube.com/vi/IJvVx2HMbNk/maxresdefault.jpg)](https://www.youtube.com/watch?v=IJvVx2HMbNk)

## Referências

- JavaScript. Mozilla, disponível em: [https://developer.mozilla.org](https://developer.mozilla.org/pt-BR/docs/Glossary/JavaScript). Acesso em: 28 de jan. de 2023.
- JavaScript – 20 anos de história e construção da web. iMasters, disponível em: [https://imasters.com.br](https://imasters.com.br/front-end/javascript-20-anos-de-historia-e-construcao-da-web). Acesso em: 28 de jan. de 2023.

# Como executar

## Front end Web
Pré-requisitos: 
- Visual Studio Code
- GIT

```bash
# clonar repositório
git clone https://github.com/fbamuniz/class-04-jquery3.git

```

## Bibliografia das aulas

- DUCKETT, J. HTML e CSS: Projete e Construa Websites. Rio de Janeiro: Alta Books. 2016.
- MEYER, E. S. CSS – técnicas profissionais para um layout moderno. Porto Alegre: Bookman, 2011.


# Autor

Prof. Frederico Barbosa Muniz<br>
https://linktr.ee/fbamuniz
