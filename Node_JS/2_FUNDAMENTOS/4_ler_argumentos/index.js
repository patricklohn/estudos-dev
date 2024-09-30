// nome

console.log(process.argv);

const args = process.argv.slice(2)

console.log(args);

const nome = args[0].split('=')[1];
const prevNome = args[0].split('=')[0];

console.log(prevNome+": "+nome);

const idade = args[1].split('=')[1];
const prevIdade = args[1].split('=')[0];

console.log(prevIdade+": "+idade);

