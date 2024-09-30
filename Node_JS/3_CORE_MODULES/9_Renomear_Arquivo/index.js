const fs = require('fs')

fs.rename('arquivo.txt', 'novoarquivo.txt', function(err){
    if(err){
        console.log(err)
        retunr
    }

    console.log('Arquivo alterado')
})