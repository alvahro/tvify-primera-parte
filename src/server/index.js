import express from 'express'
const app = express()
import api from 'src/server/api'

const votes = {}

/*
 * app.use() registra middleware que se ejecutan de fomra secuencial cada vez que ingresa un request
 * express.static() es un middleware que sirve archivos estaticos
 */
//app.use(express.static('public'))
//
//app.use('/api/votes', (req,res, next) => {
//  console.log('Middleware 1')
//  next()
//})
//
//app.use('/api/votes', (req,res, next) => {
//  console.log('Middleware 2')
//  console.log('GET /votes')
//  res.json(votes)
//  // se puede devolver en lugar de next() una rta por ejemplo para manejar errores
//})

app.use('/api', api)

/*
 * Iniciamos el servidor web, que lo hace express que a su vez usa el modulo nativo de node http
 */
app.listen(3000, () => { console.log('Servidor iniciado con Express en el puerto 3000') })