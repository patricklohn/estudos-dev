// 1 - métodos

const animal ={ 
    nome: "bob",
    latir: function() {
        console.log("AU AU");
        console.log("Latido");
    }
};

console.log(animal.nome);

animal.latir();

// 2 -  aprofundando em metodos 

const pessoa = { 
    nome: "Patrick",
    
    getNome: function(){
        return this.nome;
    },

    setNome: function(outroNome){
        this.nome = outroNome;
    },

}

console.log(pessoa.getNome());

pessoa.setNome("Ednaldo Pereira");
console.log(pessoa.nome);

// 3 - prototype
const text = "asd";

console.log(Object.getPrototypeOf(text));

// 4 - mais sobre prototype 

const myObject ={
    a:"Teste Objeto Herdado ",
};

console.log(Object.getPrototypeOf(myObject));

console.log

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);

console.log(mySecondObject.a);

// 5 - Classes basicas 

const cachorro = { 
    raca: null,
    pawas: 4,
    blood: null,
};

const pastorAlemao = Object.create(cachorro)

pastorAlemao.raca = "Pastor Alemão";
pastorAlemao.blood = "Raça pura";

const viraLata = Object.create(cachorro);
viraLata.raca = "Vira Lara";
viraLata.blood = "Misturado";

console.log(`Cachorros disponiveis: \n${pastorAlemao.raca}: ${pastorAlemao.blood} \n${viraLata.raca}: ${viraLata.blood}.`)

console.log(Object.getPrototypeOf(pastorAlemao));
console.log(Object.getPrototypeOf(viraLata));

// 6 - função construtora; 

function criarCahorro(nome,raca){
    const cachorro = Object.create({});

    cachorro.nome = nome; 
    cachorro.raca = raca; 

    return cachorro;
} 

const bina = criarCahorro("Bina","Vira Lata");

console.log(bina);

const piery = criarCahorro("Piery","Vira Lata");

console.log(piery);

// 7 - funções como classes 

function Cachorro(nome, raca) { 
    this.nome = nome; 
    this.raca = raca;
}

const husky = new Cachorro("Ozzy","Husky");

console.log(husky);

// 8 - metodos na função construtora

Cachorro.prototype.uivar = function() {
    console.log("Auuuu!");
}
console.log(Cachorro.prototype);

husky.uivar();

// 9 - Classes ES6

class CachorroClasse {
    constructor(nome, raca){
        this.nome = nome;
        this.raca = raca;
    }
}

const luna = new CachorroClasse("Luna", "Labrador");

console.log(luna);

console.log(Object.getPrototypeOf(luna));

// 10 - mais sobre classes 

class Caminhao { 
    constructor(eixos,cor){
        this.eixos = eixos; 
        this.cor = cor;
    }

    descreverCaminhao(){
        console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`); 
    }

};

const scania = new Caminhao(6, "Red"); 

console.log(scania);

scania.descreverCaminhao();

// 11 - override 

class Humano {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

const patrick = new Humano("Patrick",20);

console.log(patrick);

console.log(Humano.prototype.idade);
Humano.prototype.idade = "NaoDefinidada"; 
console.log(patrick);
console.log(Humano.prototype.idade);

// 12 - Symbol 
class Aviao {
    constructor(motores,ascentos,marca){
        this.motores = motores
        this.ascentos = ascentos
        this.marca = marca 
    }
 }

const asas = Symbol()

Aviao.prototype[asas] = 2;

const boeing = new Aviao(2,250,"boeing");
console.log(boeing[asas])
console.log(boeing)

// 13 - getter e setter 
class Post{
    constructor(titulo,descricao,tags) {
        this.titulo = titulo;
        this.descricao = descricao; 
        this.tags = tags;
    }

    get exibirTitulos(){
        return `Você está lendo: ${this.titulo}`;
    }

    set adicionarTags(tags) {
        const tagsArrays = tags.split(", ");
        this.tags = tagsArrays;
    }
}

const myPost = new Post("Banda","Teste de get e setter",);
console.log(myPost);
console.log(myPost.exibirTitulos);

myPost.adicionarTags = "Programação, Teste, erro";

console.log(myPost);

// 14 - Herança

class Mamifero{
    constructor(patas){
        this.patas = patas;
    }
}

class Lobo extends Mamifero { 
    constructor(patas, nome){
        super(patas, patas)
        this.nome= nome;
    }
}

const shark = new Lobo(4,"shark");
console.log(shark); 

// 15 - instanceof 

console.log(shark instanceof Lobo);

console.log(Lobo instanceof Mamifero);

console.log(new Lobo(4,"teste") instanceof Mamifero);