const express = require('express')
const request = require('superagent')

const routes = express.Router()

const db = require('./db')

module.exports = routes

// GET /

routes.get('/api/v1/comments', (req, res) => {
  db.getComments(req.body.id)
    .then(comments => {
      res.json(JSON.parse(comments.commentsArr))
    })
    .catch(() => res.json([]))
})

routes.get('/api/v1/strains/:id', (req, res) => {
  const desc = request.get(`strainapi.evanbusse.com/WjCIlRU/strains/data/desc/${req.params.id}`).then(desc => JSON.parse(desc.text).desc)
  const effects = request.get(`strainapi.evanbusse.com/WjCIlRU/strains/data/effects/${req.params.id}`).then(effects => JSON.parse(effects.text))
  const flavors = request.get(`strainapi.evanbusse.com/WjCIlRU/strains/data/flavors/${req.params.id}`).then(flavors => JSON.parse(flavors.text))
  Promise.all([desc, effects, flavors]).then(results => res.json({ desc: results[0], effects: results[1], flavors: results[2] }))
})

routes.put('/api/v1/comments', (req, res) => {
  db.addComment(req.body)
    .then(() => res.send('heck yessss'))
    .catch(err => res.send(err.message))
})

routes.post('/api/v1/comments', (req, res) => {
  db.addStrainAndComment(req.body)
    .then(() => res.send('heck yessss'))
    .catch(err => res.send(err.message))
})

// export function addComment (strainId, comment) {
//   return request.post(commentsURL)
//     .send({ id: strainId, comment: comment })
//     .then(response => response.body)
// }
