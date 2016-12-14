import express from 'express'
const app = express()

/*
 * app.use() registra middleware que se ejecutan de fomra secuencial cada vez que ingresa un request
 * express.static() es un middleware que sirve archivos estaticos
 */
app.use(express.static('public'))

/*
 * Endpoints: metodo (verbo) + URL
 * Funciones arrow
 */
// GET /votes
app.get('/votes', (req, res) => {
  
})

// POST /vote/<id>
app.post('/vote/:id', (req, res) => {
  
})

/*
 * Iniciamos el servidor web, que lo hace express que a su vez usa el modulo nativo de node http
 */
app.listen(3000, () => {
  console.log('Servidor iniciado con Express en el puerto 3000')
})