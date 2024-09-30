const x = '10'

// checar se x é um número

if(!Number.isInteger(x)){
    throw new Error('O valor de x é string')
}

console.log('Continuando o codigo')