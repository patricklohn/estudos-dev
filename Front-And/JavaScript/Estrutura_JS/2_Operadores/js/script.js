// -> Comentarios em uma linha
/*
    Comentarios em múltiplas linhas
*/

// 1 - Number

console.log (typeof 7); 
console.log (7); 

// 2 - Operações aritméticas

console.log (7+7);
console.log (10-5);
console.log (2*5);
console.log (10/5);
console.log (11/(10+(2*2-1-(1+1))));

// 3 - Special numbers

console.log(typeof Infinity);
console.log(typeof -Infinity);

console.log(12 * "teste");
console.log(NaN);

// 4 - Strings 

console.log("Um texto aspas duplas");
console.log(`Um texto com crases`);
console.log('Um texto aspas simples');
console.log(typeof "Hello World");

// 5 - Símbolos especiais em string

console.log(" Text em \n duas linhas");
console.log("Espaçamento de tab no JS \n\tComo esse exemplo");

// 6 - Concatenação 

console.log("Texto "+"de "+"concatenação ");
console.log("Bom dia "+"Patrick"+", Tudo bem ?");

// 7 - Interpolação

console.log(`A soma de 2 + 2 é: ${2 + 2}`);
console.log(`A soma de 2 + 2 é: ${"Quatro"}`);

// 8 - Boolean 

console.log(true);
console.log(false);
console.log(typeof true);


// 9 - Comparações

console.log(5 <= 5);
console.log(5 < 5);
console.log(5 > 20); 
console.log(10 > 5);
console.log(10 < 5);
console.log(20 < 50);
console.log(10 == 10);
console.log(10 == 9);
console.log(10 != 9);
console.log(typeof true);

// 10 - Idênticos 

console.log (9 == "9");
console.log (9 === "9");
console.log (9 != "9");
console.log (9 !== "9");


// 11 - Operadores lógicos 

console.log("Tabela verdade");
console.log(true && false);
console.log(true && true);
console.log(true || true);
console.log(false || true);
console.log(false || false);
console.log(! false);

console.log("Exemplos reais");
console.log(2>3 && 2<3);
console.log(4>3 && 2<3);
console.log(2>3 || 4<3);
console.log(4>3 || 4<3);
console.log(! 4<3);

// 12 - Empty Values 

console.log(typeof null, typeof undefined);

console.log(null == undefined);
console.log(null === undefined);

// 13 - Mudança de tipos 

console.log(5 * null);
console.log("teste" * 2);
console.log("10" + 1);