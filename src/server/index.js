import express from 'express'
const app = express()
import api from 'src/server/api'

import mongoose from 'mongoose'

mongoose.connect('mongodb://tvify:tvifyusrmdb@localhost/tvify')

/*
 * app.use() registra middleware que se ejecutan de fomra secuencial cada vez que ingresa un request
 * express.static() es un middleware que sirve archivos estaticos
 */
app.use(express.static('public'))

/*
 * Middlewares
 * 
 * Para procesar cookies debo usar un middleware. Express no ofrece un mecanismo
 * para obtenerlos parseados mediantes el mismo, para eso hay que usar algún módulo como:
 * https://www.npmjs.com/package/cookie-parser se usa como un middleware de Express.
 * Lo mismo se da con los formularios, debo utilizar otro middleware (también viene un módulo npm)
 * https://www.npmjs.com/package/body-parser
 * Eriquesen el objeto request con propiedades.
 */
app.use('/api/votes', (req,res, next) => {
  console.log('Middleware 1')
  next()
})

app.use('/api/vote', (req,res, next) => {
  console.log('Middleware 2')
  console.log('GET /votes')
  next()
  // res.json(votes)
  // se puede devolver en lugar de next() una rta por ejemplo para manejar errores
})

app.use('/api', api)

/*
 * Iniciamos el servidor web, que lo hace express que a su vez usa el modulo nativo de node http
 */
app.listen(3000, () => { console.log('Servidor iniciado con Express en el puerto 3000') })