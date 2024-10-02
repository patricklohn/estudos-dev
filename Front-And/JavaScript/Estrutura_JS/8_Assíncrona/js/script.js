//1 - setTimeout
console.log("Ainda não executou !");

setTimeout(function () {
    console.log("requisição assíncrona")
}, 10000);

console.log("Ainda não executou 2 !");

//2 - setInterval
console.log("Ainda não executou !");

//setInterval(()=>{
//    console.log("Intervalo assíncrono");
//}, 10000);

console.log("Ainda não executou !");

//3 - promises

const promessa = Promise.resolve(5 + 5);

console.log("Algum codigo");

promessa.then(value => {
    console.log(`A soma é ${value}`);
    return value;
})
    .then((value) => value - 1)
    .then((value) => console.log("Agora é " + value));

console.log("Algum codigo");

// 4 - falha na promise 

Promise.resolve(4 * "asd")
    .then((n) => {
        if (Number.isNaN(n)) {
            throw new Error("Valores inválidos");
        }
    })
    .catch((err) => console.log(`Um erro ocorreu:${err}`));

// 5 - Rejeitando Promises 
function checkNumber(n) {
    return new Promise((resolve, reject) => {
        if (n > 10) {
            resolve(`O número é maior que 10`);
        } else {
            reject(new Error("Número muito baixo"));
        }
    });
}

const a = checkNumber(20);
const b = checkNumber(10);

a.then((v) => console.log(`O Resultado é ${v}`)).catch((err) => console.log(`Ocorreu um erro ${err}`));
b.then((v) => console.log(`O Resultado é ${v}`)).catch((err) => console.log(`Ocorreu um erro ${err}`));

// 6 - Resolvendo varias promises

const p1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve(10);
    }, 1000)
})

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
    if (30 > 10) {
        resolve(30);
    } else {
        reject("Error!");
    }
})

Promise.all([p1, p2, p2]).then((values) => console.log(values));

// 7 - async functions 

async function somarComDelay(a, b) {
    return a + b
}

somarComDelay(2, 5).then((value) => {
    console.log("Valor da soma é: " + value);
})

// 8 - async Await

function resolveComDelay() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Resolveu a Promisse");
        }, 2000);
    })
}

async function chamadaAsync() { 
    console.log("Chamada a promise, e esperando o resultado");
    const result = await resolveComDelay()
    console.log(`O resultado chegou: ${result}`);

}

chamadaAsync();

// 9 - Generetors

function* generator(){
    yield 1;
    yield 2;
}

const gen = generator()

console.log(gen.next().value)
console.log(gen.next().value)


