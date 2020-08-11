//estrategias 1 para gerar parametros padroes
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1())
console.log(soma1(5))
console.log(soma1(1, 2, 3))
console.log(soma1(0, 0, 0))

//estrategia 2, 3 e 4 para gerar valor padrao
function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1//Aqui o 1 é o indice
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2())
console.log(soma2(5))
console.log(soma2(1, 2, 3))
console.log(soma2(0, 0, 0))

//valor padrao ES2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3())
console.log(soma3(5))
console.log(soma3(1, 2, 3))
console.log(soma3(0, 0, 0))