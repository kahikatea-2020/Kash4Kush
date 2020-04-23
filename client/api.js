import request from 'superagent'

const strainsURL = 'http://localhost:3000/api/v1/strains/'

const commentsURL = 'http://localhost:3000/api/v1/comments/'

export function getWeed () {
  return request.get(`${strainsURL}/${id}`)
    .then(response => response.body)
}

export function getComments (id) {
  return request.get(`${commentsURL}/${id}`)
    .then(response => response.body)
}

export function addComment (comment) {
  return request.post(`${commentsURL}/${id}`)
    .send(comment)
    .then(response => response.body)
}
