var express = require('express')
var app = express()

/*
 * app.use() registra middleware que se ejecutan de fomra secuencial cada vez que ingresa un request
 * express.static() es un middleware que sirve archivos estaticos
 */
app.use(express.static('public'))

/*
 * Endpoints: metodo (verbo) + URL
 */
// GET /votes
app.get('/votes', function (req, res) {
  
})

app.listen(3000, function () {
  console.log('Servidor iniciado con Express en el puerto 3000')
})