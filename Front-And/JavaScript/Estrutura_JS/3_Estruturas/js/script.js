// 1 - Variáveis 

let nome = "Patrick";
console.log(nome);

nome = "Patrick Lohn";
console.log(nome);

const idade = 20;
console.log(idade);

// 2 - Mais sobre varáveis

//let 2teste = "teste";
//let @teste = "teste1";

let a = 10, b = 20, c = 30;

console.log(a + b + c);

// 3 - Prompt

//const age =  prompt("Digite a sua idade:");
//console.log(`voce tem ${age} anos`);

// 4 - Alert

//alert("Testando o Alert");

/* Jogo de adivinhação 
alert("Vamos adivinhar um numero");
const adiv = prompt("Digite um numero de 1 a 10");
alert("Processando...");
alert(`Voce escolheu o numero ${adiv}`);
*/

// 5 - Math

console.log(Math.max(5, 3, 2, 10));
console.log(Math.min(5, 3, 2, 10));
console.log(Math.floor(5.14));
console.log(Math.ceil(5.14));

// 6 - Console

console.log("teste !");
console.error("Error !");
console.warn("Aviso !");

// 7 - if 

const m = 10;

if (m > 5) {
    console.log("M é maior que 5");
}

const user = "João";

if ("João" === user) {
    console.log(`Olá ${user}`);
}

if ("Maria" === user) {
    console.log(`Olá ${user}`);
}

// 8 - else 

const loggedIn = false
//if(loggeIn === true) =é igual= if(loggedIn);
if (loggedIn) {
    console.log("Esta liberado o uso!");
} else {
    console.log("Não esta liberado para uso!")
}

const q = 10;
const w = 15;

if (q > 5 && w > 20) {
    console.log("Correto!");
} else {
    console.log("errado !");
}

if (q > 5 || w > 20) {
    console.log("Correto!");
} else {
    console.log("errado !");
}

if (!(w > 20)) {
    console.log("Correto!");
} else {
    console.log("errado !");
}

// 9 - else if

if (1 > 2) {
    console.log("teste!");
} else if (2 > 3) {
    console.log("teste 2!");
} else if (4 <= 4) {
    console.log("teste 3!");
} else {
    console.error("Error!!!");
}

// 10 - while 

let p = 1

while (p < 5) {
    console.log(`contando ${p}`);
    p = p + 1;
}

/* Loop infinito
let p = 1
while(p < 5){
    console.log(`contando ${p}`);
}
*/

//11 - do while 

let o = 10;

do {
    console.log(`Valor de o: ${o}`)
    o--;
} while (o > 0);

// 12 - for

for (let i = 0; i < 10; i++) {
    console.log(`teste ${i} !`);
}
let r = 6;
for (r; r < 10; r++) {
    console.log(`teste ${r} !`);
}

// 13 - identação 

//sem identação 
for (let u = 1; u < 8; u++) {
    if (u === 5) {
        u = 7, console.log("U é igual a 5")
    } else { console.log("U não é o valor correto") }
};

//com identação
for (let z = 1; z < 8; z++) {
    if (z === 5) {
        z = 7;
        console.log("Z é igual a 5");
    } else {
        console.log("Z não é o valor correto")
    }
};

// 14 - break

for (let g = 20; g > 10; g--) {
    console.log(`O valor de g é: ${g}`);
    if (g === 15) {
        break;
    } else (console.log("Ainda não é 15"));
}

// 15 - continue

for (let s = 1; s < 10; s = s + 1) {
    // operador resto = %
    if (s % 2 === 0) {
        console.log("Número par!");
        continue;
    }
    console.log("numero impar " + s);
}


// 16 - switch 

const job = "Advogado";

switch (job) {
    case "Programador":
        console.log("Bem vindo Programador");
        break
    case "Advogado":
        console.log("Bem vindo Advogado");
        break
    case "Engenheiro":
        console.log("Bem vindo Engenherio");
        break
    default:
        console.log("Profissão não encontrada.");
}

