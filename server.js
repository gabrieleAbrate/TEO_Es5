const header = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/html'
};

const http = require('http');
const url = require('url');
const dispatcher = require('dispatcher');
const disp = new dispatcher(header);

disp.addServizio('/saluto', (req, res) => {
    res.writeHead(200, header);
    
    // recupero dei parametri attraverso la query (dati in GET)
    let parametri = url.parse(req.headers.host + req.url, true).query;

    res.end('ciao ' + parametri.nome);
}); 

let server = http.createServer(gestioneRichieste);
server.listen(1337);
console.log('Server in ascolto sulla porta 1337');

function gestioneRichieste(req, res){
    disp.smista(req, res);
}