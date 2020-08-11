const soma = function (x, y){
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)//7
imprimirResultado(3, 4, soma)//7
imprimirResultado(3, 4, function(x, y){
    return x - y
})//-1
imprimirResultado(3, 4, (x, y) => x * y)//12

const pessoa = {
    falar: function(){
        console.log('Opa!')
    },

    falar2(){
        console.log('hello!')
    }//Versao ES6
}

pessoa.falar()//opa!
pessoa.falar2()//hello!