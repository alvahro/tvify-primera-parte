/*
 * Creando funciones asincronicas porpias
 */

 var fs = require('fs')
 
 function readFileText (name, callback) {
   /*
    * process.nextTick() es una funcion de node que nos permite crear funciones
    * asincronicas, lo que hace es tomar nuestra función y ponerla en la cola de
    * eventos y luego llama al callback
    */
   process.nextTick(function () {
    var content = fs.readFileSync(name) // instruccion/funcion sincronica
    callback(content.toString())    
   })
 }
 
 readFileText('./apuntes.txt', function (content) {
   console.log(content)
 })
 
 console.log('Ultima instruccion')
 
 /*
  * Lo anterior se ejecuta una vez, lo que hace a modo de demostrativo es transformar
  * manualmente readFileSync en una funcion asincronica
  */
 