const readline = require("readline").createInterface({
    input: process.stdin, 
    output: process.stdout,
})

readline.question('Qual a sua linguagem fvr de programação?',(language)=>{
    console.log('A sua llinguage fvr seria o ' + language)
    readline.close()
})

