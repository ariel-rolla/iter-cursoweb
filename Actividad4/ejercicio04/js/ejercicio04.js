/*
Dado el siguiente array:
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Mostrar el contenido en forma inversa:
10, 9, 8, 7, 6, 5, 4, 3, 2, 1

SE PODRIA USAR .REVERSE()
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i=numeros.length - 1; i >= 0; i--){
    console.log(numeros[i]);
}

