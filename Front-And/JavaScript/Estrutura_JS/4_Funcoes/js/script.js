// 1 - criando uma função 

function olaMundo() {
    console.log("Hello Word");
};

olaMundo();

olaMundo();

const minhaFuncaoEmVariavel = function () {
    console.log("função em variável");
};

minhaFuncaoEmVariavel();

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro("Texto para impressão");

function calculadoraFrete(valorFrete, valorNota) {
    let valorFinalFrete = valorFrete * 100;
    let valorPorcentagemDoFrete1 = valorNota / valorFinalFrete;
    let valorPorcentagemDoFrete = valorPorcentagemDoFrete1 * 100;
    console.log(`O valor do frete referente a mercadoria da Nfe é de  ${valorPorcentagemDoFrete}%`);
}
calculadoraFrete(100, 1000);

// 2 - return

const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) {
    return n1 + n2;
}

const resultado = soma(a, b);

console.log(resultado);

function divisao(n1, n2) {
    return n1 / n2;
}

console.log(divisao(d, a));

// 3 - Escopo da função

let y = 20
function testandoEscopo() {
    let y = 10
    console.log("Y dentro da função é:" + y);
};
testandoEscopo();
console.log("Y fora da função é:" + y);

// 4 - Escopo aninhado 
let m = 10;

function escopoAninhado() {
    let m = 20;
    if (true) {
        let m = 30
        if (true) {
            let m = 40
            console.log(m)
        }
        console.log(m);
    }
    console.log(m);
}

escopoAninhado();
console.log(m);

// 5 - arrow function

const testeArrow = () => {
    console.log("Esta é uma arrow function !");
}

testeArrow();

/*const parOuImpar = (numero) => {
    let num = numero;
    let resultado = num % 2;
    if(resultado === 0){
        console.log("Este numero é um numero par");
    }else{
        console.log("Este numero é um numero impar");
    }
}
parOuImpar(9); 
*/

const parOuImpar = (n) => {
    if (0 === n % 2) {
        console.log("Par");
        return;
    }
    console.log("Impar");
}

parOuImpar(5);
parOuImpar(10);

// 6 - mais sobre arrow function 

const raizQuadrada = (x) => x * x;

console.log(raizQuadrada(5));
console.log(raizQuadrada(10));

// 7 - parametro opcionais 

const multiplication = (m, n) => {
    if (n === undefined) {
        return m * 2;
    } else {
        return m * n;
    }
}

console.log(multiplication(4));
console.log(multiplication(4, 3));

const greeting = (name) => {
    if (!name) {
        console.log("Olá");
        return;
    }
    console.log(`Olá ${name}`);
    return;
}

greeting("Patrick"); 
greeting(); 

// 8 - valor default; 

const customGreeting = (name, greet = "Olá") => {
    return `${greet} ${name}!`;
}

console.log(customGreeting("Patrick"));
console.log(customGreeting("João","Bom dia"));

// 9 - closure 

function someFunction() {
    let txt = "Alguma coisa"; 

    function display(){
        console.log(txt);
    }
    display();
}

someFunction();

// 10 - mais sobre closure 

const multiplicationClousure = (n) => {
    return (m) => {
        return n * m;
    };
};

const c1 = multiplicationClousure(4);
const c2 = multiplicationClousure(3); 

console.log(c1);
console.log(c2);

console.log(c1(5));
console.log(c2(2));

// 11 - recursão 

const untilten = (n,m) => {
    if(n < 10){
        console.log("A função parou de executar !");
    } else {
        const x = n - m; 
        console.log(x);

        untilten(x,m);
    }
}

untilten(100,9);