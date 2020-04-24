import request from 'superagent'

const strainsURL = '/api/v1/strains/'

const commentsURL = '/api/v1/comments/'

export function getWeed (strainId) {
  return request.get(`${strainsURL}${strainId}`)
    .then(response => response.body)
}

export function getComments (strainId) {
  return request.get(`${commentsURL}${strainId}`)
    .send({ id: strainId })
    .then(response => response.body)
}

export function addComment (strainId, comment) {
  return getComments(`${strainId}${strainId}`)
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
