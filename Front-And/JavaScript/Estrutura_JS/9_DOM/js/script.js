// 1 - movendo pelo dom
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2 - selecionando por tag

const listItens = document.getElementsByTagName("li");
console.log(listItens)

// 3 - selecionando por ID

const title = document.getElementById("title");
console.log(title)

// 4 - selecionando por classe

const products = document.getElementsByClassName("product");
console.log(products);

// 5  - selecionando por CSS 

const productsQuery = document.querySelectorAll(".product");
console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");
console.log(mainContainer)

// 6 - inserBefore

const p = document.createElement("p");
const header = title.parentElement;

header.insertBefore(p, title);

// 7 - appendChild 
const navLinks = document.querySelector("nav ul");
const li = document.createElement("li");
navLinks.appendChild(li); 

// 8 - replaceChild 
const h2 = document.createElement("h2");
h2.textContent = "Meu novo Titulo";

header.replaceChild(h2, title);

// 9 - createTextNode

const myText = document.createTextNode("Agora vamos colocar mais um título");
const h3 = document.createElement("h3");
h3.appendChild(myText);
mainContainer.appendChild(h3);

// 10 - trabalhando com atributos 
const firstLink = navLinks.querySelector("a");

firstLink.setAttribute("href", "https://google.com")
firstLink.setAttribute("target", "_blank")

// 11 - altura e largura 

const footer = document.querySelector("footer");

console.log(footer.offsetHeight)
console.log(footer.offsetWidth)

console.log(footer.clientHeight)
console.log(footer.clientWidth)

// 12 - posição do elemento 

const product1 = products[0];

console.log(product1.getBoundingClientRect());

// 13 - CSS em JS

mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333";
mainContainer.style.paddingBottom = "20px";

// 14 - HTMLCollection 

for(const li of listItens) {
    li.style.backgoundColor = "red";
}