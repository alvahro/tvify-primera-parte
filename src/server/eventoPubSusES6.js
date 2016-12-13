const fs = require('fs')
const EventEmitter = require('events')
/*
 * Todavía Node no soporta lo siguiente, ni en la ver 7.2.1
 * Se usa Babel
 * import fs from 'fs'
 * import EventEmitter from 'events'
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
    const self = this
    readFileText(self.name, function (content) {
      self.emit('end', content)
    }) 
  }
}

console.log(typeof TextReader)

let reader = new TextReader('./apuntes.txt')

console.log(reader instanceof TextReader)

console.log(reader instanceof EventEmitter)

reader.on('end', function (content) {
  console.log(content)
})

reader.read()

console.log('ultima instruccion')