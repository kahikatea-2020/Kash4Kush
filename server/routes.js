const express = require('express')

const routes = express.Router()

const db = require('./db')

module.exports = routes

//GET /

routes.get('/api/v1/comments', (req, res) => {
  db.getComments(req.body.id)
    .then(comments => {
      res.json(JSON.parse(comments.commentsArr))
    })
    .catch(() => res.json([]))
})

// /api/v1/strains
// export function getWeed () {
//   return request.get(strainsURL)
//     .then(response => response.body)
// }


// /api/v1/comments
// export function getComments (strainId) {
//   return request.get(commentsURL)
//     .send(strainId)
//     .then(response => response.body)
// }

// export function addComment (comment) {
//   return request.post(commentsURL)
//     .send(comment)
//     .then(response => response.body)
// }
