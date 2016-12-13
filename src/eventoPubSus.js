/*
 * EVENTOS Y PATROS PUBLISHER/SUSCRIBERS
 * IMPREMENTACION DE OOP EN ES5
 * 
 * Publisher: entidad (clase) que emite eventos
 * Suscribers: otras entidades (una o varias funciones) que se suscriben a los eventos
 * del publisher y cuando el publisher emite determinado evento estos lo capturan y hacen algo
 * 
 * Min 22
 */

var fs = require('fs')
var EventEmitter = require('events')
var util = require('util')
// implementa herencia entre funciones (o estas llamadas clases de ES5)
var inherits = util.inherits
 
function readFileText (name, callback) {
  process.nextTick(function () {
    var content = fs.readFileSync(name) // instruccion/funcion sincronica
    callback(content.toString())    
  })
 }
 
/*
 * Clase creada "a lo" ES5 (ECMAScript version 5), como una funcion
 * A esta clase la puedo instanciar con "new" y la variable this va a contener sus propiedade (vars o metodos/funciones)
 * Herencia en ES5:
 * Vamos a hacer que herede de EventEmitter y así poder hacer que nuestra clase emita eventos
 * Herencia con BORROWING OF THE PROTOTYPE, PROTOTYPE CHAIN y SUPER CONSTRUCTOR
 */ 
function TextReader (name) { // actua como el constructor de la "clase"
  EventEmitter.call(this) // inicializa la clase EventEmiter (mediante su "constructor") con nuestra clase/funcion: HERENCIA
  this.name = name // this refiere a la misma funcion, name es como una propiedad de la clase 
}

var readerBi = new TextReader('./apuntes.txt')
var readerBiCons = readerBi.constructor
var readerBiProt = readerBi.__proto__
console.log(readerBi instanceof EventEmitter)

// Copia las propiedades de EventEmiter en TextReader
inherits(TextReader, EventEmitter) // Lo mimso que Child.prototype = new Parent(); Child.prototype.constructor = Child;

var readerAi = new TextReader('./apuntes.txt')
var readerAiCons = readerAi.constructor
var readerAiProt = readerAi.__proto__
readerAiProt2 = readerAiProt.__proto__
console.log(readerAi instanceof EventEmitter)

// Agregar un método a nuestra case bajo el paradigma de ES5
TextReader.prototype.read = function () {
  var self = this
  readFileText(this.name, function (content) { // this refiere a TextReader
    // Evento: leo un archivo de forma asicnronica y cuando termine emito un evento y ese evento se llama 'end'
    self.emit('end', content) // nombre del evento y los datos de ese evento. Funcion sincrona: https://nodejs.org/dist/latest-v6.x/docs/api/events.html#events_emitter_emit_eventname_args
  }) 
}

/*
 * https://nodejs.org/dist/latest-v6.x/docs/api/events.html#events_emitter_on_eventname_listener
 * Implementacion de un suscriber: agregar un listener (to the end of the listeners) a el evento llamado 'end'
 * mediante el metodo on() de EventEmiter
 */
var reader = new TextReader('./apuntes.txt')

reader.on('end', function (content){ // parametros: nombre del evento y listener
  console.log(content)
})

/*
 * Podria ir antes de reader.on() y funcionaria pero solo porque read es asincronica
 * y tardaria mas que la suscripcion al evento reader.on(), pero ña buen practica es
 * definir todas las suscripciones primero
 */
reader.read()

console.log('Ultima instruccion')