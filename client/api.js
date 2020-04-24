import request from 'superagent'

const strainsURL = 'http://localhost:3000/api/v1/strains/'

const commentsURL = 'http://localhost:3000/api/v1/comments/'

export function getWeed (strainId) {
  return request.get(strainsURL)
    .send({ id: strainId })
    .then(response => response.body)
}

export function getComments (strainId) {
  return request.get(commentsURL)
    .send({ id: strainId })
    .then(response => response.body)
}

export function addComment (strainId, comment) {
  return getComments(strainId)
    .then(res => {
      if (res === []) {
        request.post(commentsURL)
          .send({ id: strainId, comment: comment })
          .then(response => response.body)
      } else {
        request.put(commentsURL)
          .send({ id: strainId, newComment: comment, oldComments: res })
          .then(response => response.body)
      }
    })
}
