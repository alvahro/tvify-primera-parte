/**
 * Module Dependencies
 */

var http = require('http')
/*
 * JavaScript por defecto no soporta modularizacion, por esto NodeJS usa una libreria
 * llamada CommonJS que incorpora la funcion require() y el objeto module con su atributo export (module.export)
 */
var assets = require('./assets.js')

console.log('Servidor web NodeJS para tvify')

var server = http.createServer(function (request, response) {
  console.log('Recibi un request para ' + request.url)
  switch (request.url) {
    case '/':
      assets.serveStatic('index.html', function (err, content) {
	response.end(content)
      })
      break;
    case '/app.js':
      assets.serveStatic('app.js', function (err, content) {
	response.end(content)
      })
      break
    case '/app.css':
      assets.serveStatic('app.css', function (err, content) {
	response.end(content)
      })      
      break
    default:
      response.statusCode = 404
      response.end('Not found');
      break
  }
})

server.listen(3000, function () {
  console.log('Servidor iniciado en el puero 3000')
})