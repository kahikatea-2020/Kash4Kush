import request from 'superagent'

const strainsURL = 'http://localhost:3000/api/v1/strains/'

const commentsURL = 'http://localhost:3000/api/v1/comments/'

export function getWeed () {
  return request.get(strainsURL)
    .then(response => response.body)
}

export function getComments (strainId) {
  return request.get(commentsURL)
    .send({id: strainId})
    .then(response => response.body)
}

export function addComment (comment) {
  return request.post(commentsURL)
    .send(comment)
    .then(response => response.body)
}
