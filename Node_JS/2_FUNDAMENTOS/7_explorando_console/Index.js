const x = 10; 
const y = 'Algum texto'
const z = [1,2]

console.log(x,y,z);

// contagem de impressões
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)

// variavel entre string
console.log("O nome é %s, teste teste", y);

// limpar o console 

setTimeout(() =>{
    console.clear()
},5000)

