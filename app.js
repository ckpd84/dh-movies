const http = require('http');
const fs = require("fs");

const data = require("./data/index");

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    // Route System
	switch (req.url) {
		// Home
		case '/':
            res.end('Home');
            //llamar a home
			break;
		// En cartelera
		case '/en-cartelera':
			res.end('En cartelera');
			break;
		case '/mas-votadas':
			res.end('Más Votadas');
			break;
		case '/sucursales':
			res.end('Sucursales');
			break;
		case '/contacto':
			res.end('Contacto');
			break;
		case '/preguntas-frecuentes':
			res.end('Preguntas Frecuentes');
			break;
		default:
			res.end('404 not found')}
    // ??
}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));