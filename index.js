 // While básico

/*
const secreto = "42"
let resposta

while ( secreto !== resposta ) {
    resposta = prompt("Dime un número")
}
alert("Atinaches!")
*/

// While con break e continue

/* const secreto = "12"
let intento
while ( true ) {
    intento = prompt("Cal é o número?")
    if (intento === secreto) break // Sae á seguinte liña despois do bucle
    if ( secreto < intento ) {
        alert("Te has pasado")
        continue // Interrumpe este ciclo do bucle e regresa á condicion e
                    // se procede, ó seguinte ciclo do bucle.
    }
    if ( secreto > intento ) alert("Te has quedado corto")
}
alert("Atinaches!") */

// Do while

/*
const secreto = "42"
let resposta
do {
    resposta = prompt("Dime un número")
} while ( secreto !== resposta ) 
alert("Atinaches!")
 */

// While + contador

/* let contador = 0
while (contador < 10) {
    console.log("Contado", contador)
    contador++
} */

// Procesar array con while

/* let contador = 0
const datos = ["a", "b", "c", "d"]
while (contador < datos.length) {
    console.log(datos[contador])
    contador++
} */

/* let indice = 0
let total = 0

const articulos=[
    { nome: "Mazás", importe: 0.50 },
    { nome: "Peras", importe: 1.35 }
]

while ( indice < articulos.length ) {
    const item = articulos[indice]
    const precioItem = item.importe
    total = total + precioItem
    indice++
}
alert(total) */

// Gardar nun array SÓ os números divisibles entre dous

/* let contador = 0
const datos = [5, 3, 6, 8, 9, 12]
const resultados = []
while (contador < datos.length) {
    if ( datos[contador]%2 === 0 ) {
        resultados.push(datos[contador])
    }
    contador++
}
console.log(resultados) */

/* const datos = [
    {
        descripcion: "Patacas",
        importe: 33.99
    },
    {
        descripcion: "Leite",
        importe: 2.00
    },
    {
        descripcion: "Pan",
        importe: 2.25
    }
]

let contador = 0
let total = 0
while ( contador < datos.length) {
    const articuloActual = datos[contador]
    total += articuloActual.importe
    contador++
}
alert(total); */

// While recorriendo contador mientras tenga elementos

/* let indice = 0
let total = 0

const articulos=[
    { nome: "Mazás", importe: 0.50 },
    { nome: "Peras", importe: 1.35 }
]

while ( articulos.length > 0 ) {
    const item = articulos.pop()
    total += item.importe
}
alert(total)
console.log(articulos) */

// Pedir elementos mentras non alcancen unha cantidade

/* const opcions = []
const LIMITE_OPCIONS = 3
while ( opcions.length < LIMITE_OPCIONS ) {
    const opcion = prompt("Dame unha opcion:")
    opcions.push(opcion)
}
console.log(opcions); */

// For of

/* const datos = [
    {
        descripcion: "Patacas",
        importe: 33.99
    },
    {
        descripcion: "Leite",
        importe: 2.00
    },
    {
        descripcion: "Pan",
        importe: 2.25
    }
]

let total = 0
for ( let producto of datos ) {
    total = total + producto.importe
}
alert(total) */

// Clasificar elementos de array con for of

/* const articulos=[
    { nome: "Mazás", importe: 0.50 },
    { nome: "Peras", importe: 1.35 },
    { nome: "Kiwis", importe: 0.10 },
    { nome: "Ñames", importe: 1.55 },
]

const articulosBaratos = []
const articulosCaros = []

for ( let item of articulos ) {
    if (item.importe < 1) {
        articulosBaratos.push(item)
    } else {
        articulosCaros.push(item)
    }
}
console.log(articulosBaratos, articulosCaros) */

// For in

/* const usuarios = {
    "daniel": 100,
    "maria": 74,
    "ana": 1000,
    "perican": 132
}

let total = 0
for ( let clave in usuarios ) {
    total = total + usuarios[clave]
}
alert(total) */

// For ternario
// Uso común: for ( inicializar ; condicion ; incrementar ) 
// Cando executa cada expresión:
// for ( unha vez antes de primeira iteración ; antes de cada iteración ; despois de cada iteración )
/* const datos = [
    {
        descripcion: "Patacas",
        importe: 33.99
    },
    {
        descripcion: "Leite",
        importe: 2.00
    },
    {
        descripcion: "Pan",
        importe: 2.25
    }
]

let total = 0
for ( let indice = 0 ; indice < datos.length ; indice++ ) {
    total = total + datos[indice].importe
}
alert(total) */

// Anidación de bucles

/* const cidades = {
    madrid: [12, 13, 14, 12, 11],
    barcelona: [11, 13, 10],
    lira: [33, 42, 41, 40, 49]
}

// Primeiro bucle recorre os obxetos
for ( let nomeCidade in cidades ) {
    // Dentro do primeiro bucle temos acceso ó valor
    // de cada clave do obxeto.
    const temperaturas = cidades[nomeCidade]

    // Segundo bucle recorreo o array de cada clave do obxeto
    let sumaTemperatudas = 0
    for ( let temperatura of temperaturas) {
        // Destro do segundo bucle podemos acceder a cada temperatura do array
        sumaTemperatudas+=temperatura
    }

    const temperaturaMedia = sumaTemperatudas/temperaturas.length
} */


// Funciones

/* function calcularDesconto(producto, desconto = 0.1){
    return producto.importe * desconto
}

function aplicarDesconto(producto, desconto){
    return producto.importe - desconto
}

let producto = {
    descripcion: "Patacas",
    importe: 33.99
}

const desconto = calcularDesconto(producto)
const precioFinal = aplicarDesconto(producto, desconto)

console.log(precioFinal); */

// Funcións e variables
/* let valor = 11

function faiCousas() {
    // O que se declara na función, queda na funcion
    let valor = 42
    return valor
}

faiCousas()
console.log(valor); */