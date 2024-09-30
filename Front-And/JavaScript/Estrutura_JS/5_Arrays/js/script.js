// 1 - arrays 

const lista = [1, 2, 3, 4, 5];

console.log(lista);
console.log(typeof lista);

const userName = ["Patrick",20,1.68];
console.log(userName);

// 2 - Mais sobre arrays 

const arr = ["Patrick", "Vanessa", "Janete"];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// 3 - propriedades 

const numbers = [4,5,6];

console.log(numbers.length);
console.log(numbers["length"]);

const myName = "Patrick"; 
console.log(myName.length);

// 4 - métodos 
const otherNumbers = [1,2,3];

const allNumbers = otherNumbers.concat(numbers);

console.log(allNumbers);

const text = "algum texto"; 

console.log(text.toUpperCase());
console.log(typeof text.toUpperCase);

// 5 - Objetos

const person = {
    name: "Patrick",
    age: 20, 
    job: "Programador",

};

console.log(person);
console.log(person.name);
console.log(person.name.length);

// 6 - criando e deletando propriedades

const car ={
    engine: 1.6,
    brand: "Chevrolet",
    Model: "Onix",
    Km: 49500, 
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.Km; 

console.log(car);

// 7 - Mais sobre objeto 

const obj = {
    a: "tete",
    b: true,
};

const obj2 = {
    c:[],
};

Object.assign(obj2,obj);
console.log(obj2);

// 8 - conhecendo melhor o objeto 

console.log(Object.keys(obj));
console.log(Object.keys(obj2));

console.log(Object.entries(obj2));

// 9 - Mutação 

const a = {
    name: "patrick", 
}; 

const b = a;

console.log(a);
console.log(b);

a.age = 31; 

console.log(a);
console.log(b);

delete b.age; 

console.log(a);
console.log(b);

// 10 - loop em array 

const user = ["Matheus","João","Pedro","Miguel","Patrick"];

for(let i=0; i< user.length; i++){
    console.log(user[i]);
}

// 11 - push e pop
const array = ["a","b","c"];

array.push("d");

console.log(array);
console.log(array.length);

array.pop();
console.log(array);

// 12 - shift e unshift
const array1 = ["a","b","c"];

array1.unshift("d");

console.log(array1);
console.log(array1.length);

array1.shift();
console.log(array1);

// 13 - indexOF e lastIndexOf

const myPoupa = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"]

console.log(myPoupa.indexOf("Maçã"));
console.log(myPoupa.indexOf("Abacate"));
console.log(myPoupa.lastIndexOf("Abacate"));

console.log(myPoupa[myPoupa.indexOf("Morango")]);

// 14 - Slice

const testeSlice = ["a", "b","c","d","e","f"];

const subAray = testeSlice.slice(2,5);
const subAray2 = testeSlice.slice(2,4 + 1);
const subAray3 = testeSlice.slice(2);

console.log(testeSlice);
console.log(subAray);
console.log(subAray2);
console.log(subAray3);

// 15 - foreach 

const nums = [1,2,3,4,5];
nums.forEach((numero) => {
    console.log(`O numero é ${numero}`);
});

const elementsArray =[
    {title: "Evento 01", category: "Php"},
    {title: "Evento 02", category: "Js"},
    {title: "Evento 03", category: "JAVA"},
];

elementsArray.forEach((dados)=>{
    console.log(`Eventos do banco de dados ${dados.title}`);
    console.log(`Categoria do evento ${dados.category}`);
});

// 16 - includes 

const brands = ["bmw", "mitsubishi", "vmw", "volvo", "scania"];
console.log(brands.includes("volvo"));
console.log(brands.includes("kia"));

// 17 - reverse 

const reverseTest = [1,2,3,4,5];
reverseTest.reverse();

console.log(reverseTest);

// 18 - trim

const trimtTeste = "   \n  Testando";
console.log(trimtTeste);

console.log(trimtTeste.trim());

// 19 - padstart

const testePadStar = "20";

testePadStarAlterado = testePadStar.padStart(8,"0");
testePadStarEnd = testePadStar.padEnd(8,"0");

console.log(testePadStarAlterado);
console.log(testePadStarEnd);

// 20 - split

const frase = "O rato roeu a ropa do rei de Roma";

console.log(frase);
console.log(frase.length);

const fraseSeparada = frase.split(" ");
console.log(fraseSeparada)
console.log(fraseSeparada.length)

// 21 - join 

const fraseDeNovo = fraseSeparada.join(" ");
console.log(fraseDeNovo);

const itensEstoque = ["Cadeira", "Notebook", "Teclado", "Mouse"];
const fraseDeCompra = `Materias em baixa de estoque que precisam ser comprados: ${itensEstoque.join(", ")} !`;
console.log(fraseDeCompra);

// 22 - repeat

const palavra = "testando "; 
console.log(palavra.repeat(5))

// 23 - rest operator 

const somaInfinita = (...args) => {
    let total = 0; 

    for(let i =0; i< args.length; i++){
        total += args[i];
    };

    return total;
};

console.log(somaInfinita(1,2,60,10)); 

// 24 for of 

const somaInfinita2 = (...args) => {
    let total = 0;

    for(nume of args){
        total += nume;
    }

    return total; 
};

console.log(somaInfinita2(1,2,60,10)); 

// 25 - destruturing em objetos

const userDetailes = {

    name:"Patrick", 
    age:20,
    phone:48996823464,

};
//const name1 = userDetailes.name; 

const {name, age, phone} = userDetailes;

console.log(`Seu nome é ${name} voce tem ${age} anos e seu numero é ${phone}`);


// 26 - destruturing em array 

const myList = ["avião", "helitotoro", "carro", "jetski"];

const [VeiculoA, VeiculoH, veiculoC, veiculoJ] = myList;

console.log(VeiculoA + " e " + VeiculoH );

// 27 - JSON

const myJson = '{"name": "Patrick", "Skills": [21,50,20]}'

// 28 - JSON para objeto e objeto para JSON

const myOteste = JSON.parse(myJson);
console.log(myOteste);

const myExportJson = JSON.stringify(myOteste);
console.log(myExportJson);



