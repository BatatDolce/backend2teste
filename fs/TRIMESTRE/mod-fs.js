const fs = require('fs')
//            modulo-fs      diretorio arquivo codificação
const arquivo = fs.readFileSync(__dirname+'/festa.md','utf-8')
console.log(arquivo)