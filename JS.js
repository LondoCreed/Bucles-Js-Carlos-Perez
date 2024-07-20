    // ejercicio 1


/* 
let numeroP = parseInt(prompt("Ingrese un numero y le mostrare su tabla de multiplicar hasta el 10"))


for (let i = 1; i <= 10; i++) {
    console.log(numeroP * i);;
} */

    // ejercicio 2

/* let corta = 0
let total = 0

while (true) {
   
    let numeroIngreso = parseInt(prompt("Ingrese numeros para acumular, finalize con 0"))
    if(numeroIngreso === corta){
        gano = true
        console.log("se finalizo el ingreso, el total acumulado fue:" + total);
        break
    } else {
        console.log(numeroIngreso);
        total = total + numeroIngreso
        
    }
} */


    // ejercicio 3


/* let adivinanzaDos = 25
let ganaDos = false

for (let iDos = 0; ganaDos === false ; iDos++) {
    let numeroRecibido = parseInt(prompt("Adivine el numero en el rango 1 - 100"))
    if (numeroRecibido === adivinanzaDos) {
        ganaDos = true
        console.log("felicidades ganaste");

    } else if (numeroRecibido < adivinanzaDos){
        console.log("El numero es menor intenta de nuevo");
    }else{
        console.log("El numero es mayor intenta de nuevo");

    }
    
} */

    // ejercicio 4


/* let numeroPrimo = parseInt(prompt("introduce un numero para verificar si es primo o no"));
let residuos = 0;
    
if (numeroPrimo <= 1) {
  console.log("El numero ingresado debe ser mayor a 1, debido a que ningun numero igual o menor a 1 es primo, saluditos");
} else {
    for (let iTres = 2; iTres < numeroPrimo; iTres++) {
    if (numeroPrimo % iTres == 0) {
        residuos = 1;
        break;
    }
     }
    if (residuos == 1) {
    console.log("El numero no es primo");
    } else {
    console.log("El numero es primo");
    }
    } */

    // ejercicio 5

/* let numeroDiv = parseInt(prompt("Ingrese un numero para obtener sus divisores"))

for (let icuatro = 1; icuatro <= numeroDiv; icuatro++) {
    if(numeroDiv % icuatro === 0){
        console.log(icuatro);
    }  
} */

    // ejercicio 6

/* let dobles = ["mexico", "peru", "chile", "colombia", "argentina", "españa", "china", "korea", "inglaterra", "canada"]
console.log(dobles);

for (let icinco = 0; icinco < dobles.length; icinco++) {
    console.log(dobles[icinco]);
        
} */

    // ejercicio 7

/* let numerosAlDos = [2,4,6,8,10,12,14,16,18,20]
console.log(numerosAlDos);
    
for (let iseis = 0; iseis <= 9; iseis++) {
console.log(numerosAlDos[iseis] * 2);
} */

// ejercicio 8


/* let familiares = [
    {
      Parentesco: "Abuelo",
      Nombre: "Rene",
      Edad: "60",
      altura: "1.70m"
    },
    {
      Parentesco: "Abuela",
      Nombre: "Rita",
      Edad: "58",
      altura: "1.60m"
    },
    {
        Parentesco: "Hermano",
        Nombre: "Raul",
        Edad: "30",
        altura: "1.50m"
      },
      {
        Parentesco: "Hermano",
        Nombre: "Ricardo",
        Edad: "35",
        altura: "1.65m"
      },
      {
        Parentesco: "Primo",
        Nombre: "Alfonso",
        Edad: "35",
        altura: "1.68m"
      }
]

    
for (let iAvance = 0; iAvance < familiares.length; iAvance++) {
    console.log(
       `Hola soy ${familiares[iAvance].Nombre}, y soy ${familiares[iAvance].Parentesco} de la persona que esta haciendio este ejercicio, tengo ${familiares[iAvance].Edad} años, y mido ${familiares[iAvance].altura} mucho gusto`

    );
    
}
 */

// ejercicio 9

/* let inpares = [2,3,6,7,10,11,14,15,18,19]

for (let isiete = 0; isiete <= 10; isiete++) {
    
    if(inpares[isiete] % 2 === 0 ){
        console.log(inpares[isiete]);
    }
    
    
} */

    // ejercicio 10

/* let i = 0
let cierra = false
let sumaPares = 0
let SumaImpares = 0

while (cierra === false) {
    i++
    let paresImpares = parseInt(prompt("Introdusca numeros para ordenar y sumar, termine con 0"))
   
    if (paresImpares === 0) {
        cierra = true

    } else if (paresImpares % 2 === 0) {
        sumaPares = sumaPares + paresImpares
        
    }else{
        SumaImpares = SumaImpares + paresImpares
       
    }
}
console.log(`la suma de pares es: ${sumaPares}`);
console.log(`la suma de pares es: ${SumaImpares}`) */

    // ejercicio 11 

/* let mayor = [10,50,30,40,120,60,70,90,80,20]
let elMayor = mayor [0]

for (let iocho = 0; iocho < mayor.length; iocho++) {

    if (mayor[iocho] > elMayor) {
        elMayor = mayor[iocho]

    }
}
    console.log("el numero mas grande en el arreglo es: " + elMayor);
 */

        // ejercicio 12 

/* let menor = [10,50,30,40,120,60,70,90,80,20]
let elmenor = menor [0]

for (let iocho = 0; iocho < menor.length; iocho++) {

    if (menor[iocho] < elmenor) {
        elmenor = menor[iocho]

    }
}
console.log("el numero mas chico en el arreglo es: " + elmenor);
 */
        // ejercicio 13
        

/* let jugadorUno=prompt("Ingresa tu nombre jugador 1")
let jugadorDos=prompt("Ingresa tu nombre jugador 2")

while (true) {


    let playerUno = prompt("Jugador uno: Ingresa piedra, papel o tijeras")
    let playerDos = prompt("Jugador dos: Ingresa piedra, papel o tijeras")

    if (playerUno == "piedra" && playerDos == "tijeras") {
        console.log("Felicidades, ganaste: " + jugadorUno);
        break
    }else if (playerUno == "tijeras" && playerDos == "papel") {
        console.log("Felicidades, ganaste: " + jugadorUno);
        break
    }else if (playerUno == "papel" && playerDos == "piedra") {
        console.log("Felicidades, ganaste: " + jugadorUno);
        break
    }else if (playerDos == "piedra" && playerUno == "tijeras") {
        console.log("Felicidades, ganaste: " + jugadorDos);
        break
    }else if (playerDos == "tijeras" && playerUno == "papel") {
        console.log("Felicidades, ganaste: " + jugadorDos);
        break
    }else if (playerDos == "papel" && playerUno == "piedra") {
        console.log("Felicidades, ganaste: " + jugadorDos);
        break
    }else if (playerUno == playerDos){
        alert("Tenemos un empate, intenten de nuevo");
        
    }else{
        alert("Algun jugador ha ingreso un dato incorrecto, recuerden usar solo: piedra, papel o tijeras.... reintenten porfavor");
    
    }
} */

        // ejercicio 14



/* for (let aster = 1; aster <= 5; aster++) {
    let conca = ""

    for (let asterMas = 1; asterMas <= aster; asterMas++) {
        conca += "*  "
        
    }
    console.log(conca);
} */

        // ejercicio 15


/* for (let asterDos = 5; asterDos >= 1; asterDos--) {
    let concaDos = ""
    alert("")
    for (let asterMasDos = 1; asterMasDos <= asterDos; asterMasDos++) {
        concaDos += "*  "

    }
    console.log(concaDos);
} */


         // ejercicio 15


/* let desordenado = [10,50,30,40,120,60,70,90,80,20]

function ordenar(orden) {
    for (let iFinal = 0; iFinal < orden.length - 1; iFinal++) {
        for (let iFinalDos = 0; iFinalDos < orden.length - 1; iFinalDos++) {
            if (orden[iFinalDos] > orden[iFinalDos + 1]) {
                let o = orden[iFinalDos]
                orden[iFinalDos] = orden[iFinalDos + 1]
                orden[iFinalDos + 1] = o
            }
            
        }
        
    }
    return orden
} 

console.log(ordenar(desordenado)); */




         // ejercicio 15 version 2

/* function ordenar(orden) {
    for (let iFinal = 0; iFinal < orden.length - 1; iFinal++) {
        for (let iFinalDos = 0; iFinalDos < orden.length - 1; iFinalDos++) {
            if (orden[iFinalDos] > orden[iFinalDos + 1]) {
                [orden[iFinalDos],orden[iFinalDos + 1]] = [orden[iFinalDos + 1],orden[iFinalDos]]
            }
            
        }
        
    }
    return orden
} 

console.log(ordenar(desordenado)); */