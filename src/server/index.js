import express from 'express'
const app = express()

const votes = {}

/*
 * app.use() registra middleware que se ejecutan de fomra secuencial cada vez que ingresa un request
 * express.static() es un middleware que sirve archivos estaticos
 */
app.use(express.static('public'))

app.use('/api/votes', (req,res, next) => {
  console.log('Middleware 1')
  next()
})

app.use('/api/votes', (req,res, next) => {
  console.log('Middleware 2')
  console.log('GET /votes')
  res.json(votes)
  // se puede devolver en lugar de next() una rta por ejemplo para manejar errores
})

/*
 * API RESTful
 * 
 * Endpoints: metodo (verbo) + URL
 * Funciones arrow
 * Express devuelve un 404 por default si no encuenta un recurso
 */
// GET /votes
app.get('/votes', (req, res) => {
  /*
   * Siguiendo con el paradigma API RESTful todo respuesta tiene que tener:
   * HTTP Status code: si no especifico express pone el 200 (Ok)
   */
  res.json(votes)
})

// POST /vote/<id>
app.post('/vote/:id', (req, res) => {
  /*
   * Espress paresea la URL y busca siertos substring que cumpla con ciertas condiciones,
   * si encuentra un ":" si lo que viene es un numero lo va a tomar como un parametro y toma el nombre
   * que especifique arriba.
   */
  let id = req.params.id
  if (votes[id] === undefined) {
    votes[id] = 1
  } else {
    votes[id] = votes[id] + 1    
  }  
  
  res.json({ votes: votes[id] })
})

/*
 * Iniciamos el servidor web, que lo hace express que a su vez usa el modulo nativo de node http
 */
app.listen(3000, () => {
  console.log('Servidor iniciado con Express en el puerto 3000')
})