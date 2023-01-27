/* 
Es para dar funcionalidad a una pagina
Sirve para automatizar procesos
Se ejecuta en el navegador y lo interpreta el motor v8
Debilmente tipado
JS es case sensitive: distingue entre mayusculas y minusculas
Variables: Es un espacio reservado en la memoria para relacionar un dato
Tipos de datos
Operadores: =
Opereadores aritmeticos: + - / * %
TEMAS DE HOY:
Comparadores:
Operadores Logicos:
Condicionales:
Bucles:
*/






/* Comparadores: */

//Devuelven valores de tipo booleano ( true/ false)
//Necesito almenos 2 datos para comparar

// > : es mayor a

// < : es menor a

// >= : es mayor o igual a

// <= : es menor o igual a

/* let edadDeLean = 28
let edadDeMati = 28
console.log(edadDeLean >= edadDeMati) */


// == : es igual a 

// != : es distinto de

/* let nombre = "Ariel"
let nombreGuardado = "ariel"
console.log(nombre != nombreGuardado ) */

// === : es estrictamente igual

// !== : es estrictamente distinto de


//Ejercitacion

// es verdad que 29 es igual a "hola"

// la temperatura de ayer (28) es superior o igual a la temperatura de hoy (30)

/* 
let numero = 29
let palabra = "hola"
console.log( numero === palabra )
let temperaturaAyer = 28
let temperaturaHoy = 30
console.log(temperaturaAyer >= temperaturaHoy)
*/


//Operadores Logicos:

//NOT
//AND y logico, && (andpersand)
//OR



/* let nombre = prompt("ingrese su nombre")
let edad = prompt("ingrese su edad")
let nombreDelJefe = "Pedro"
let edadDelJefe = 89 */

//Caso 1 AND
//si el nombre y la edad son iguales a el nombre y la edad del jefe decir true

/* if(nombre === nombreDelJefe && Number(edad) === edadDelJefe){
    console.log("sos el jefe")
} */

//Caso 2 OR
// Si el nombre o la edad son iguales a el nombre o la edad del jefe decir que somos el jefe por consola

/* if (Number(edad) === edadDelJefe || nombre === nombreDelJefe){
    console.log("sos el jefe")
} */

// Tablas de la verdad 

//AND

//true && true = true

//true && false = false

//false && false = false

//OR

//true || true = true

// true || false = true

// false || false = false



// NOT
/* 
let estoyDormido = true
let estoyDespierto = !estoyDormido
 */

//Condicionales

//if 
/* let nombre = "mati"
if(nombre === "mati"){
    console.log("soy mati")
}else if ( nombre === "pepe"){
    console.log("soy pepe")
}else{
    console.log("No soy mati")
} */

//pidan al usuario una edad si la edad es mayor o igual a 21, poner por consola "es mayor y puede manejar", si la edad es menor a 21 pero mayor o igual a 18, Poner por consola "es mayor pero no puede manejar". Es menor a 18 poner por consola "es menor de edad".


//Switch

// Pedir un numero al usuario, si el numero es 2, decir "juan", si el numero es 5, decir "pepe", si el numero es 20, decir "lucas". Si no escribio alguno de esos numeros decir "valor invalido"

/* let numero = Number(prompt("ingrese un numero")) */

/* if(numero === 2 || numero === 1){
    console.log("juan")
}else if(numero === 5){
    console.log("pepe")
}else if(numero === 20){
    console.log("lucas")
}else{
    console.log("valor invalido")
} */

/* switch(numero){
    case 1:
    case 2:
        console.log("juan");
        break
    case 5:
        console.log("pepe")
        break
    case 20: 
        console.log("lucas")
        break
    default:
        console.log("valor invalido")
}
 */



/*Solicitar al usuario una operacion 
entre "sumar" o "restar" y solicitar un numero a y un numero b
si el usuario elije sumar, mostrar por alerta el resutado de la suma es: resultado
si el usuario elije restar, mostrar por alerta el resultado de la resta es: resultado
si el usuario coloco cualquier cosa que no sea lo anterior, mostrar por alerta un "ingrese una operacion valida"
*/



// pedir el a y el b para sumar/restar (prompt)

// pedir una operacion (prompt)

//comprobar que es lo que me puso el usuario

/* 
let numeroA = Number(prompt ("Ingrese un numero"))
let numeroB = Number(prompt ("ingrese un numero"))
let operacionElegida = prompt ("Elija una operacion")
switch (operacionElegida) {
    case "+":
    console.log (numeroA + numeroB)
        break;
    case "-":
        console.log (numeroA - numeroB)
        break;
    default:
        console.log("Ingrese una operacion valida")
} */

/* let operacion = prompt("ingrese una operacion: sumar  o restar")
let numeroUno = prompt("ingrese primer numero")
let numeroDos = prompt("ingrese segundo numero")
if(operacion == "sumar" || operacion == "restar"){
    alert("eligio la operacion "+ operacion )
}
if(operacion == "sumar"){
    let resultado = Number(numeroUno) + Number(numeroDos);
    console.log("el resultado es " + resultado)}
    else if (operacion == "restar"){
    let resultado = Number(numeroUno) - Number(numeroDos);
    console.log("el resultado es " + resultado)} else {
    console.log("ingrese una opcion valida")
    } */