// 1 - var, let e const; 

var x = 10;
var y = 15;

if (y > 10) {
    var x = 5;
    console.log(x);
}
console.log(x);

let a = 10;
let b = 15; 

if (b > 10){
    let a = 5; 
    console.log(a);
}
console.log(a);

// 2 - arrow function 

const sum = function(a, b){
    return a + b; 
}

const arrowSum = (a , b) => a + b;

console.log(sum(6, 6));

console.log(arrowSum(10,10));

const greeting = (name) => {
    if(name){
        return "Hello "+ name; 
    } else { 
        return "Hello";  
    }
}

console.log(greeting("Patrick"));
console.log(greeting());

// 3 - filter 

const arr = [1,2,3,4,5,6,7,8,9];

const highNumbers = arr.filter((n) => {
    if(n >= 5){
        return n
    }
})

console.log(highNumbers);

const freeLancer = [
    { name: "Patrick", active: false},
    { name: "Marco", active: true},
    { name: "Janete", active: false},
    { name: "Ana Lucia", active: true},
]

const activeFreeLancer = freeLancer.filter((acti) => acti.active);
 
console.log(activeFreeLancer)

// 4 - map 

const products = [
    {name: "Suco Laranja", price: 4.75, category: "Suco"},
    {name: "Coca Cola", price: 8.75, category: "Refri"},
    {name: "Agua Mineral", price: 1.75, category: "Agua"},
    {name: "Suco Maracuja", price: 5.75, category: "Suco"},
]

products.map((product)=>{
    if(product.category === "Suco"){
        product.onSale= true;
    }
})

console.log(products)

// 5 - template literals 

const name = "Patrick";
const age = 20; 

console.log(`Ola ${name} seja bem vindo !!`)

// 6 - destruturing

const fruits = ["Maça","Banana","Mamão"];

const [f1,f2,f3] = fruits; 

console.log(f1,f3)

const productDetails = {
    name: "Mouse",
    price: 39.99, 
    category: "Periférico",
    color: "Cinza"
}

const { name: productName,price,category,color} = productDetails;

console.log(productName,price);

// 7 - spread operator 

const a1 = [1,2,3];
const a2 = [4,5,6];

const a3 = [...a1,...a2]; 

console.log(a3);

const a4 = [0, ...a3, 7];

console.log(a4);

// 8- classes 

class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    productWithDiscount(discount){
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product("Camisa gola V",20);

console.log(shirt);
console.log(shirt.productWithDiscount(10));
console.log(shirt.productWithDiscount(15));

// 9 - herança

class productWithAttributes extends Product {

    constructor(name, price, colors){
        super(name, price)
        this.colors = colors; 
    }

    showColors(){
        console.log("As cores são:")
        this.colors.forEach((color)=>{
            console.log(color);
        })
    }
}

const hat = new productWithAttributes("Chapéu", 15.99,["Preto","Amarelo","Verde"]);

console.log(hat.colors);
console.log(hat);
console.log(hat.showColors());