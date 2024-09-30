import chalk from 'chalk';

const nota = 5;

if(nota >= 6){
    console.log(chalk.green('Parabens pela nota: ',nota))
}else{
    console.log(chalk.bgRed.bold('Mais sorte na proxima: ',nota))
}

 