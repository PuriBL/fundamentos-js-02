// Scope de bloque: Utiliza let para declarar una variable dentro de un bloque
// (if, for, etc,) Intenta acceder a esa variable fuera del bloque y observa si
// puedes acceder a ella.

if (true) {
    let variableBloque = 'Variable dentro del bloque'    
}
console.log(variableBloque) //Generará un error, variableBloque no está definida fuera
                            // del bloque
