
const { error } = require('console')
const fs = require('fs')
const path = require('path')
const chalk = require('chalk').default

try{
//            modulo-fs      diretorio arquivo codificação
const arquivo = fs.readFileSync(path.join(__dirname, '/festa.md'),'utf-8')
   console.log(chalk.green ('arquivo carregado com sucesso!'))
   console.log(arquivo)
} catch (erro) {
   console.log(chalk.bgYellowBright.red('atencao ⚠, erro a frente'))
    console.log(chalk.blue.bgred.bold("deu ruim🟥"))
    console.log(error.message)

    }