// 1 - strict
"use strict";

//teste = "teste";

const teste = "teste";

// const undefined = 10; 

//delete [].length;

// 2 - console.log

let a = 1;
let b = 2; 

if (a == 1){
    a = b + 2;
}

console.log(a);

// outro exemplo 
/*let c = -8; 
let d = 3; 
console.log(c+d);
*/

// 3 - debugger

/*let c = 1; 
let d = 2; 

if(c == 1){
    c = d + 2
};
debugger;
let dTheEnd = 0;
for (let i = 0 ; i<d ; i++){
    if(i == 10){
        dTheEnd = d;
        break;
    }else{
        d = d+ 2;
        console.log(d)
    }
}

console.log(dTheEnd + "The End");
debugger;
*/

// 4 - Tratamento de dados

function checkNumber(n){
    const isNumber = Number(n);

    if(Number.isNaN(isNumber)){
        console.log("Não é um numero");
        return;
    }
    
    console.log("Valor Correto!");
    return isNumber;
}

let z = 10 + 10;

checkNumber(z);
checkNumber("10");
checkNumber({});
checkNumber("Dez");

// 5 - exceptions

let x = 10; 

if (x != 11){
    //throw new Error("O valor de x não pode ser diferente de 11");
}

// 6 - try catch

try {
    const soma = x + y;
} catch(error){
    console.log(`Erro no programa: ${error}`);
}

// 7 - finally 

try {
    const value = checkNumber("abc");
    if(!value){
        throw new Error("Valor divergente");
    }
}catch(error){
    console.log("Erro de execução"+ error); 
}finally{ 
    console.log("Codigo executado");
}

// 8 -  asserion

function checkArray(arr){
    if(arr.length === 0){
        throw new Error("O array precisa ter elementos");
    }else{
        console.log(`O array tem ${arr.length} elementos`);
    }
}

checkArray([]);
const arrayTeste = ["patrick","teste"];
checkArray(arrayTeste);
checkArray([1])