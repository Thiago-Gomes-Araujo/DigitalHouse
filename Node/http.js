const http = require('http');
http.createServer((req, res) =>
{
    res.writeHead(200, {"Content-Type": "text/html:meta charset=utf-8"});
    //res.end("Meu primeiro servidor!!!");
    switch(req.url)
    {
        case '/':
            res.end('Index');
            break;
        case '/contato':
            res.end("Seu Contato");
            break;
        default: 
            res.end("Endereço nao encontrado");
            break;
    }
}).listen(80);