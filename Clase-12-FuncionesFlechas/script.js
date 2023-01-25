/* 7 */

/* function decirNombre(nombre){
    return alert("Hola " + nombre)
} */

const decirNombre = (nombre) => alert("Hola "+ nombre)

/* 8 */
/*
function saludar(nombre){
    return "Hola " + nombre 
}
 alert(saludar("Jorge"))  */

const saludar = (nombre) => "Hola " + nombre 
/* alert(saludar("Jorge")) */

/* 9 */

/* function sumar(a,b){
    return Number(a)+Number(b)
} */

const sumar = (a,b) => a+b

/* 10 */

/* function restar(a,b){
    return Number(a)-Number(b)
} */

const restar = (a,b) => a-b

/* 11 */

/* function calcular(operacion,a,b){
    if(operacion==="+"){
        return sumar(a,b)
    }else if (operacion==="-"){
        return restar(a,b)
    }else{
        return null
    }
} */

const calcular = (operacion,a,b) => {
    if(operacion==="+"){
        return sumar(a,b)
    }else if (operacion==="-"){
        return restar(a,b)
    }else{
        return null
    }
}

/* 12 */

/* function contarHasta(numero){
    for(let i=0; i <= numero; i = i+1){
        console.log(i)
    }
} */

const contarHasta = (numero) => {
    for(let i=0; i <= numero; i = i+1){
        console.log(i)
    }
}



function sumar1 (a,b){
    return a + b
}

/* Funcion en flecha, arrow function, si es mas de una linea con llave y return */
const sumar2 = (a,b) => a + b


const promedio = (a,b,c) => (Number(a)+Number(b)+Number(c))/3

const obtenerNombreCompleto = (nombre, apellido) => nombre +" "+apellido

const generarEmail = (usuario, dominio) => usuario+"@"+dominio+".com"

const puedeVerPelicula = (edad, tieneAutorizacion) => tieneAutorizacion || edad>=15


