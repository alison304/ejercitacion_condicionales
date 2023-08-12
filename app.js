// Controlando el flujo de nuestras aplicaciones
/*let edad=20;
if(edad<18) {
console.log("No puede pasar al bar.")
}
else if(edad<21){
console.log("Puede pasar al bar, pero no puede tomar alcohol.")
}
else{
console.log("Puede pasar al bar y tomar alcohol.")
}*/

// Agrega caminos

// ● Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad
// inválida. Por favor ingrese un número válido."
// Importante: No se deberá mostrar ningún otro mensaje.
// ● Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a
// la mayoría de edad.
// ● Si su edad es impar decile en cualquiera de los mensajes: "¿Sabías que tu edad
// es impar?".
/*
let edad = 21;
if(edad < 0) {
    console.log("Error, edad inválida. Por favor ingrese un número válido.")
} else {
    if(edad < 18) {
        console.log("No puede pasar al bar.")
    } else if(edad < 21) {
        console.log("Puede pasar al bar, pero no puede tomar alcohol.")
    } else {
        console.log("Bienvenido, ¡Felicitaciones por haber llegado a la mayoria de edad!")
    }
    if (edad % 2 === 0 && edad != 0) {
        console.log("¿Sabías que tu edad es impar?")
    } else{
        console.log("Puede pasar al bar y tomar alcohol.")
    }
}
*/
// totalAPagar()
// Declarar una función llamada totalAPagar() que reciba como parametros, vehiculo y litrosConsumidos.
// A continuación, defina y realice los cálculos para obtener el total a pagar, teniendo en cuenta las siguientes consideraciones.
// ● Si el vehículo es “coche”, el precio por litro es de $86,
// ● Si es “moto” ha de ser $70.
// ● Si es “autobús” ha de ser $55.
// ● Si los litros consumidos están entre 0 y 25 se ha de añadir $50 al total a pagar.
// ● Si los litros consumidos es mayor a 25 se ha de añadir $25 al total a pagar.
const prompt = require("prompt-sync")({ sigint: true });
/*
function totalAPagar(vehiculo, litrosConsumidos) {
    if (!isNaN(litrosConsumidos)) {
        let precioPorLitro = 0
        let totalAPagar = 0
        if (vehiculo === "coche") {
            precioPorLitro = 86;
        } else if (vehiculo === "moto") {
            precioPorLitro = 70;
        } else if (vehiculo === "autobus") {
            precioPorLitro = 55;
        } else {
            console.log("Vehiculo incorrecto")
            return
        }
        totalAPagar = litrosConsumidos * precioPorLitro
        if (litrosConsumidos >= 0 && litrosConsumidos <= 25) {
            totalAPagar += 50
        } else if (litrosConsumidos > 25) {
            totalAPagar += 25
        }
        console.log(`El total a pagar es: $${totalAPagar}`)
    } else {
        console.log("Ingrese un numero valido de litros cosumidos")
    }
}

let typeOfVehiculo = prompt("Ingrese el tipo de vehiculo: ")
let numeroDeLitros = prompt("Ingrese el nro. de litros consumidos: ")

totalAPagar(typeOfVehiculo, numeroDeLitros)
*/
/*Local de sándwiches 
Necesitamos armar el sistema para un local de venta de sandwiches. Los clientes eligen el sandwich base que tiene un precio, y por cada seleccion siguiente se le suma el valor de su seleccion al precio, por ej, un sadwich base vegetariano con un precio x, despues selecciona pan negro con un precio y, por lo que su total a pagar seria x+y, y asi sucecivamente con el resto de los ingredientes. 
Como es un local que ya tenía un sistema previo, ellos ya tienen toda la interfaz donde el usuario elige cada ingrediente, lo que nos facilita el trabajo, ya que nosotros recibiremos los datos de la siguiente manera: 
Nos llega un string indicando el tipo de sándwich base. los mismos tienen un valor base diferente por cada selección: 
● Pollo = $150 (“pollo”) 
● Carne = $200 (“carne”) 
● Vegetariano (verduras asadas) = $100 (“veggie”)
Luego de eso el sistema les pregunta qué tipo de pan querrán, tienen para elegir entre otras 3 opciones, por lo que recibiremos también otro string con el tipo de pan deseado: 
● Blanco c/orégano y parmesano = $50 (“blanco”) 
● Negro c/avena = $60 (“negro”) 
● Sin gluten = $75 (“s/gluten”)  
Para finalizar, el sistema avanza preguntando al cliente si quiere los siguientes adicionales: 
● Queso = $20 
● Tomate = $15 
● Lechuga = $10 
● Cebolla = $15 
● Mayonesa = $5 
● Mostaza = $5 
Cada uno de estos adicionales están representados por booleanos, es decir true o false, dependiendo de si aceptan o no cada uno de los adicionales (nos llegan un total de 6 valores booleanos, uno por cada adicional). 
Nuestro trabajo es crear una función que reciba estos 8 parámetros (un string para el sandwich base, uno para el pan, y los 6 booleanos de los adicionales). La función deberá consultar primero que tipo de sándwich base se seleccionó, luego el tipo de pan, y por último deberá verificar que adicionales se seleccionaron. Por último deberá retornar el valor numérico del total a pagar del cliente. 
*/
/*
function pedidoTotal(sandwichBase, tipoPan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) {
    let precioBase;

    switch (sandwichBase) {
        case "pollo":
        precioBase = 150;
        break;
        case "carne":
        precioBase = 200;
        break;
        case "veggie":
        precioBase = 100;
        break;
        default:
        console.log("Sándwich base no reconocido.");
        return;
    }

    let precioPan;

    switch (tipoPan) {
        case "blanco":
        precioPan = 50;
        break;
        case "negro":
        precioPan = 60;
        break;
        case "s/gluten":
        precioPan = 75;
        break;
        default:
        console.log("Tipo de pan no reconocido.");
        return;
    }

    let totalAdicionales = 0;
    if (queso) totalAdicionales += 20;
    if (tomate) totalAdicionales += 15;
    if (lechuga) totalAdicionales += 10;
    if (cebolla) totalAdicionales += 15;
    if (mayonesa) totalAdicionales += 5;
    if (mostaza) totalAdicionales += 5;

    const totalAPagar = precioBase + precioPan + totalAdicionales;
    return totalAPagar;
    }

    const totalCliente = pedidoTotal("carne", "s/gluten", true, true, false, true, false, true);
    console.log(`Total a pagar : $${totalCliente}`);
*/
// Extra Bonus
//¿Cual es el número secreto?
/*Creemos una función que reciba un parámetro numérico, y verifique si el mismo es el número secreto. El número secreto deberá ser seleccionado de manera random de
entre 1 y 10 (investiga que hace la función Math.random()), en caso de ser correcto retorna un mensaje felicitando al usuario, y en caso de que no acierte, retorna un
mensaje de aliento junto con el número ingresado y el secreto.*/
/*
function numeroSecreto(numero) {
    if (typeof numero === 'number') {
        let numeroSecreto = Math.floor(Math.random() * (10 - 1 + 1) + 1)
        if (numeroSecreto === numero) {
            return `Felicidades adivinaste el numero secreto ${numeroSecreto} :)!!`
        } else {
            return `Sigue intentando el numero ingresado fue ${numero} y el numero secreto fue ${numeroSecreto} :(`
        }
    } else {
        return `No ingresaste un numero, intenta de nuevo!!` 
    }
}

console.log(numeroSecreto(5));
*/
// abrirParacaidas()
/*Crea una función llamada abrirParacaidas(), la cual recibe dos parámetros: velocidad y altura. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo siguiente:
● La velocidad debe ser menor a 1000 km/h
● La altura debe ser mayor o igual a 2000m y menor a 3000m*/
/*
function abrirParacaidas(velocidad, altura) {
    let info = "No abrir paracaidas aun";
    if (velocidad < 1000 && altura >= 2000 && altura < 3000)
    msg = "Abrir paracaidas!!!";
return info;
}

console.log(abrirParacaidas(900, 200));
*/
// Estructura switch
// Traductor Condicional
/*Usando la estructura switch, crea un programa en el que, si un usuario ingresa "casa","perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma
inglés.
En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le informe que la palabra ingresada es incorrecta.*/
/*
let ingresePalabras = "perro";
function traductor(word) {
    let traduccion = null;
    switch(word) {
    case "perro":
        traduccion = "dog";
        break;
    case "pelota":
        traduccion = "ball";
        break;
    case "arbol":
        traduccion = "tree";
        break;
    case "genio":
        traduccion = "genius";
        break;
    default:
        traduccion = "Palabra incorrecta!";
        break;
    }
    return traduccion;
}
console.log(traductor(ingresePalabras));
*/
// Valoración de Películas
/*Usando la estructura switch, pedile al usuario que valore la película que acaba de ver en:
● Muy Mala.
● Mala.
● Mediocre.
● Buena.
● Muy buena.
Acompaña cada valoración con un mensaje que indique si te lamentas o te alegras por su valoración.Por ejemplo, "Calificaste la película como Muy Mala. Lo lamentamos mucho.". 
En caso de que ingresara un valor distinto, mostrale el mensaje: "Ingresaste un valor inválido".Cuando el usuario haya valorado la película, agradecele su visita.*/
function valoracionPelicula(valoracion) {
    if (typeof valoracion === 'string') {
        switch (valoracion) {
            case 'Muy Mala':
                return `Calificaste la película como ${valoracion}. Lo lamentamos mucho.`
                break;
            case 'Mala':
                return `Calificaste la película como ${valoracion}. Lo lamentamos mucho.`
                break;
            case 'Mediocre':
                return `Calificaste la película como ${valoracion}. Lo lamentamos.`
                break;
            case 'Buena':
                return `Calificaste la película como ${valoracion}. Nos alegramos!!.`
                break;
            case 'Muy buena':
                return `Calificaste la película como ${valoracion}. Nos alegramos mucho!!.`
                break;

            default:
                return "Ingresaste un valor inválido"
                break;
        }
    } else {
        return `Intenta nuevamente. Ingresaste un numero, debemos escribir una valoracion de la lista`
    }
}

console.log(valoracionPelicula("Buena"));