// Dado un array con 20 números, determinar cuál es número mayor.

const valores = [1,5,9,4,17,54,8,26,17,39,145,16,31,589,51,36,78,97,52,12];

let mayor = valores[0];

/*
for (valor of valores) {
    if(valor > mayor){
        mayor = valor;
    }
}
*/

valores.forEach(valor => {
    if(valor > mayor){
        mayor = valor;
    }
});

console.log(mayor);
