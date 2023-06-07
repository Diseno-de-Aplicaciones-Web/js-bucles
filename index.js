/* // while básico
const secreto = "42"
let resposta

while ( secreto !== resposta ) {
    resposta = prompt("Dime un número")
}
alert("Atinaches!")
*/

/*
// do while
const secreto = "42"
let resposta
do {
    resposta = prompt("Dime un número")
} while ( secreto !== resposta ) 
alert("Atinaches!")
 */

// while + contador
/* let contador = 0
while (contador < 10) {
    console.log("Contado", contador)
    contador++
} */

// procesar array con while
/* let contador = 0
const datos = ["a", "b", "c", "d"]
while (contador < datos.length) {
    console.log(datos[contador])
    contador++
} */

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