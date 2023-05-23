/* 
Dados dos arrays con números, determinar cuál es el número menor teniendo en cuenta a ambos.
Ej:
let array1 = [50, 20, 30, 10, 125, 2]
let array2 = [50, 3, 10, 9, 15, 80, 36, 60, 45]
La salida esperada es “2”, ya que es el número menor de los dos arrays
*/

let array1 = [50, 20, 30, 10, 125, 2];
let array2 = [50, 3, 10, 9, 15, 80, 36, 60, 45];

let menor1 = array1[0]
let menor2 = array2[0]

for (numero of array1){
    if (numero < menor1){
        menor1 = numero;
    }
}

for (numero of array2){
    if (numero < menor2){
        menor2 = numero;
    }
}

if (menor1<menor2){
    console.log(menor1);
}else{
    console.log(menor2);
}