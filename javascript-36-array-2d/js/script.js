//Cria uma matriz multidimensional (2D) 3x3    
const matriz = [[1,2,3],[4,5,6],[7,8,9]];
        
//O resultado do for aninhado é uma matriz 3x3
for(let linha=0; linha<3; linha++){
    for(let coluna=0; coluna<3; coluna++){        
        document.write(matriz[linha][coluna]);
    }    
document.write("<br>");
}