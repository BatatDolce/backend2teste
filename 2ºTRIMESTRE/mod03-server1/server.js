const http = require ('node:http')
const { url } = require('node:inspector')
const path = require('node:path')
const fs = require('node:fs')
const porta 8005
    // carrega o caminho dos arquivos 
const home = path(_dirname, 'pages/index.html')
const home = path(_dirname, 'pages/sobre.html')

const server = http.createServer((req, res)=>{
    // qual imformacao eu tenho?
const urltratada = new URL(req.url, 'http://${req.headers.host}')//limpeza de URL
const recurso = urltratada.pathname // qual rota estamos?

if(recurso === '/') { //pagina inicial 
res.statusCode = 200
res. setHeader('conetent-type','text/html;charset=utf-8')
return res.end(fs.readFileSync(home, 'utf-8'))

 } if(recurso === '/') { // sobre nos 
res.statusCode = 200
res. setHeader('conetent-type','text/html;charset=utf-8')
return res.end(fs.readFileSync(sobre, 'utf-8'))
 } else {
res. statusCode = 401
res. setHeader('content-type','text/html; charset=utf-8')
res.end('401 nao autorizado')

 }

 
})

server.listen(porta,()=>{
 console.log('servidor rodando na porta ${porta}')

})
