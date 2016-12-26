/*
 * Módulo API
 */

import express from 'express'
import Vote from 'src/server/models'

const router = express.Router()

/*
 * API RESTful
 * 
 * Endpoints: metodo (verbo) + URL
 * Funciones arrow
 * Express devuelve un 404 por default si no encuenta un recurso
 */

// var votes = {}


// GET /api/votes
router.get('/votes', (req, res) => {
  /*
   * Siguiendo con el paradigma API RESTful todo respuesta tiene que tener:
   * HTTP Status code: si no especifico express pone el 200 (Ok)
   */
  console.log('GET /votes')
  // funcion asincronica.
  Vote.find({}, (err, docs) => {
    res.json(docs)
  }) // Es un método de mongoose no de mongodb si bien muchos son parecidos
})

// POST /api/vote/<id>
router.post('/vote/:id', (req, res) => {
  /*
   * Espress paresea la URL y busca siertos substring que cumpla con ciertas condiciones,
   * si encuentra un ":" si lo que viene es un numero lo va a tomar como un parametro y toma el nombre
   * que se especificó arriba.
   */
  let id = req.params.id
  if (votes[id] === undefined) {
    votes[id] = 1
  } else {
    votes[id] = votes[id] + 1    
  }  
  
  res.json({ votes: votes[id] })
})

export default router