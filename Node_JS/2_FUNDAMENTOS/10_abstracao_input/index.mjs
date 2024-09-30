import inquirer from 'inquirer'; 

const calcMedia = (obj)=>{
    let value1 = parseInt(obj.p1);
    let value2 = parseInt(obj.p2);
    let result = (value1 + value2) / 2;
    console.log(result);
}

inquirer.prompt([{
    name: 'p1', message: 'Qual a sua nota?',
},{
    name: 'p2', message: 'Qual a sua outra nota?', 
}]).then((answers)=>{

    calcMedia(answers);

}).catch(err => console.log(err));