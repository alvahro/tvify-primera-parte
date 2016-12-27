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
    if (err) {
      console.log(err)
      return res.sendStatus(500).json(err)
    }
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
  
  console.log('GET /vote/:id')
  
  /*
   * Funcion anonima que devuelve otra funcion anonima.
   * save() recibe un funcion callback. Se puede pasar como una variable que contenga 
   * una fucnion: save(onSave) o como el valor que retorna una función que a su vez es una funcion:
   * save(onSave()). Lo que logro con lo segundo en este caso, es tener en el contexto de la funcion
   * callback a la varianle "vote" que nececito y que la paso como parámetro.
   */  
  var onSave = vote => {
    return err => {
      if (err) {
	return res.sendStatus(500).json(err)
      }
      res.json(vote)
    }
  } 
  
  let id = req.params.id

  let vote = new Vote()
  
  Vote.findOne({ showId: id }, (err, doc) => {
    if (doc) {
      doc.count = doc.count + 1
      doc.save(onSave(doc))
    } else {
      let vote = new Vote()
      vote.showId = id
      vote.count = 1
      vote.save(onSave(vote))
    }
  })
})

export default router