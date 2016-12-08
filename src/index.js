/**
 * Module Dependencies
 */

var http = require('http')
var fs = require('fs')

console.log('Servidor web NodeJS para tvify')

/*
 * Es asincronica porque es una funcion asincronica porque en su implementacion
 * llaama a otra funcion asincronica. Por lo tanto, uno de sus parametros tiene 
 * que ser un "callback"
 * Por convencion, el callback es el utltimo parametro
 */
function serveStatic(name, callback) {
  fs.readFile('./public/' + name, function (err, data) {
    if (err) {
      return callback(err)
    }
    callback(err, data.toString())
  })
}

var server = http.createServer(function (request, response) {
  console.log('Recibi un request para ' + request.url)
  switch (request.url) {
    case '/':
      serveStatic('index.html', function (err, content) {
	response.end(content)
      })
      break;
    case 'app.js':
      serveStatic('apps.js', function (err, content) {
	response.end(content)
      })
      break
    case 'app.css':
      serveStatic('apps.css', function (err, content) {
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