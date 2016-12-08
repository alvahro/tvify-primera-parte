/**
 * Module Dependencies
 */

var fs = require('fs')
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

// import $ from 'jquery'
// import page from 'page'
// import { getShows, searchShows } from 'src/tvmaze-api-client'
// import renderShows from 'src/render'
// import $tvShowsContainer from 'src/tv-shows-container'
// import 'src/search-form'
// import qs from 'qs'
// 
// page('/', function (ctx, next) {
//   $tvShowsContainer.find('.tv-show').remove()
//   if (!localStorage.shows) {
//     getShows(function (shows) {
//       $tvShowsContainer.find('.loader').remove();
//       localStorage.shows = JSON.stringify(shows);
//       renderShows(shows);
//     })
//   } else {
//     renderShows(JSON.parse(localStorage.shows));
//   }
// })
// 
// page('/search', function (ctx, next) {
//   $tvShowsContainer.find('.tv-show').remove()
//   var $loader = $('<div class="loader">');
//   $loader.appendTo($tvShowsContainer);
//   const busqueda = qs.parse(ctx.querystring)
//   searchShows(busqueda, function (res) {
//     $loader.remove();
//     var shows = res.map(function (el) {
//       return el.show;
//     })
// 
//     renderShows(shows);
//   })
// })
// 
// var productionEnv = !!~window.location.host.indexOf('github.io')
// 
// if (productionEnv) {
//   page.base('/tvify')
// }
// 
// page()