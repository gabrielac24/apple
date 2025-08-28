const http = require('http');

const app = http.createServer((Request, Response)=> {
    Response.writeHead(200, {'Content-Type': 'application/json' })
    Response.end('servidor node iniciado')
})

const PORT = 3000
app.listen(PORT)
console.log('Servidor levantado en el puerto 3000')