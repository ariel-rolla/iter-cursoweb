
const numeros = [2, 8, 9, 16, 54, 65]

const nombres = ["jorge", "dario", "patricio", "carlos", "rodrigo", "jorge"]

// 1) Dado un array de números, escribir una función que calcule la suma de todos los números del array.

let sumaNros = (numeros) => {
    let suma = 0
    for (numero of numeros){
        suma = suma + numero
    }
    return suma
}

//2) Dado un array de strings, escribir una función que devuelva la concatenación de todos los strings.

let concatenarString = (palabras) => {
    let concatenado = ""
    for (palabra of palabras){
        concatenado = concatenado + palabra
    }
    return concatenado
}

// 3) Dado un array de números, escribir una función que devuelva un array con todos los números mayores a 10.

let mayoresA10 = (numeros) => numeros.filter( numero => numero>10 )

// 4) Dado un array de números, escribir una función que devuelva la suma de todos los números del array que sean pares.


let sumaPares = (numeros) => {
    pares = numeros.filter ( numero => numero%2==0)
    let suma = 0
    for (nroPar of pares){
        suma = suma + nroPar
    }
    return suma
}

// 5) Mediante el uso del método indexOf y splice, desarrollar una función que reciba un array de strings y un stringEliminar, la misma función nos devolverá un array sin el elemento que se eliminó. En caso de no tener el elemento a eliminar se deberá retornar null.


let eliminarString = (arrayStrings, stringEliminar) => {
    indexAeliminar = arrayStrings.indexOf(stringEliminar)
    if (indexAeliminar>=0){
        arrayStrings.splice(indexAeliminar,1)
        return arrayStrings
    }else {
        return null
    }
}


//6) Dado un array de nombres y un nombreDeLista, se deberá crear una función llamada crearLista que retorne un string con el siguiente formato.

let crearLista = (nombres, nombreDeLista) => {
    console.log("Lista de "+ nombreDeLista)
    for (let i=0; i<nombres.length; i++){
        console.log(i+1+") "+nombres[i])
    }
}

// 7) Dado un array de strings y un stringBuscado, elaborar una función que retorne la cantidad de veces que apareció en el array el stringBuscado.

let cantidadString = (palabras, stringBuscado) => {
    cantidadPalabra = 0
    for(palabra of palabras){
        if (palabra == stringBuscado) {
            cantidadPalabra++
        }
    }
    return cantidadPalabra
}

// 8) Crear un array vacio llamado gananciasMensuales.
//Crear una función llamada vender, que reciba una cantidadVendida, un precio y un nombreDeProducto. La misma deberá agregar el precio total al array de gananciasMensuales.

const gananciasMensuales = []

let vender = (cantidadVendida, precio, nombreDeProducto) => gananciasMensuales.push(cantidadVendida*precio)


// 9) Crear un array vacio llamado gastosMensuales.
//  Crear una función llamada comprar, que reciba una cantidadComprada, un precio y un nombreDeProducto. La misma deberá agregar el total al array de gastosMensuales.

const gastosMensuales = []

let comprar = (cantidadComprada, precio, nombreDeProducto) => gastosMensuales.push(cantidadComprada*precio)


//10) Dado el array gastosMensuales y gananciasMensuales, desarrollar una función que nos retorne la gananciasMensuales. La misma se deduce de la diferencia entre la suma de valores del array de gastosMensuales y el de gananciasMensuales. (se puede usar la función hecha en el punto 1).

let gananciasTotalMensuales = () => sumaNros(gananciasMensuales)-sumaNros(gastosMensuales)