const fs = require('fs')
const EventEmitter = require('events')
/*
 * Todavía Node no soporta lo siguiente, ni en la ver 7.2.1
 * Se usa Babel
 * import fs from 'fs'
 * import EventEmitter from 'events'
 */

/*
 * En ES6 no existen las propiedades o métodos privados. Se esperaría que esta
 * funcion sea privada y de la clase pero ES6 no lo soporta. O la pongo en la clase 
 * y es pública o la dejo afuera. La dejo afuera porque no hace ref a la var this
 * 
 * Por cli se puede utilizar el comando babel para generar un archivo con la transformación a ES5 y ver como babel hace la transf
 * https://platzi.com/clases/nodejs/concepto/3-persistencia-de-datos-con-mongodb/a-taller-y-feedback-ecmascript-6-uso-de-clases/material/
 */
function readFileText (name, callback) { // Async
  process.nextTick(function () {
    let content = fs.readFileSync(name) // instruccion/funcion sincronica
    callback(content.toString())    
  })
 }
 
class TextReader extends EventEmitter {
  constructor(name) {
    super()
    this.name = name
  }
  read () {
//   const self = this
//   readFileText(self.name, function (content) {
//     self.emit('end', content)
//  })
    // Las funciones "arrow" mantienen el scope relativo a la clase de la variable this  
    readFileText(self.name, conten t => {
      this.emit('end', content)
    }) 
  }
}
// Si modularizaramos este archivo usaríamos
exports default new TextReader('./apuntes.txt')

console.log(typeof TextReader)

let reader = new TextReader('./apuntes.txt')

console.log(reader instanceof TextReader)

console.log(reader instanceof EventEmitter)

reader.on('end', function (content) {
  console.log(content)
})

reader.read()

console.log('ultima instruccion')