/*
 * Modularizacion. Recursos de mi proyecto.
 */

var fs = require('fs')

/*
 * Es asincronica porque es una funcion asincronica porque en su implementacion
 * llaama a otra funcion asincronica. Por lo tanto, uno de sus parametros tiene 
 * que ser un "callback"
 * Por convencion, el callback es el utltimo parametro
 */
module.exports.serveStatic = function serveStatic(name, callback) {
  fs.readFile('./public/' + name, function (err, data) {
    if (err) {
      return callback(err)
    }
    callback(err, data.toString())
  })
}