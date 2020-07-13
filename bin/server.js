// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
'use strict'


// Arquivo inicial que lida com a porta da API e funções de erro
// Importa o arquivo app.js


const http = require('http');
const debug = require('debug')('nodestr:server');

const app = require('../src/app');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log(`API rodando na porta ${port}`);

function normalizePort(val) {
	const port = parseInt(val, 10);

	if(isNaN(port)) return val;
	if(port >= 0) return port;

	return false;
}

function onError(err) {
	if (err.syscall || 'listen') throw err ?
		'Pipe ' + port :
		'Port ' + port;

	switch (err.code) {
		case 'EACCES':
			console.error(bind + ' requires elevated privileges');
			process.exit(1);
			break;

		case 'EADDRINUSE':
			console.error(bind + ' is already in use');
			process.exit(1);
			break;

		default:
			throw err;
	}
}

function onListening() {
	const addr = server.address();
	const bind = typeof addr === 'string'
		? 'pipe ' + adder
		: 'port ' + addr.port;
	debug('Listening on ' + bind);
}
