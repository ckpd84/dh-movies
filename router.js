function route(req, url){
    switch (req.url) {
    case '/':
        res.end('Home');
        break;
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
        res.end('404 not found')
}
}
module.exports = route;
