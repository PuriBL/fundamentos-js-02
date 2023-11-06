// Closures: crea una función llamada contadorClosures que retome otra función. 
// Esta función interna debe mantener un contador interno y cada vez que se llame, 
// incrementa el contador y lo devuelve. Utilizar closures para lograr esto.

function contadorClosures () {
    let contador = 2

    return function () {
        contador ++ 
        return contador
    }
}
const incrementar = contadorClosures()

console.log(incrementar()) // 1
console.log(incrementar()) // 2