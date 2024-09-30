import inquirer from 'inquirer'; 
import chalk from 'chalk';

inquirer.prompt([{
    name: 'n1', message: "Qual o seu nome?"
},{
    name: 'y1', message: "Qual a sua idade?"
}
]).then((data)=>{
    console.log(chalk.bgYellow.black(`O seu nome seria ${data.n1} e sua idade seria ${data.y1}!!!!`)); 
    setTimeout(()=>{
        console.clear()
    },5000)
}).catch(err => console.log(err));