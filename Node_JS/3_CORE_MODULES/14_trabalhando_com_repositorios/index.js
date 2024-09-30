const fs = require('fs');

if(fs.existsSync('./minhapasta')){
    console.log('Existe!')
}else{
    console.log('Não existe')
    fs.mkdirSync('minhapasta')
}


