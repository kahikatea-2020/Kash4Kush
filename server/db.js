
const knex = require('knex')
const config = require('../knexfile').development
const connection = knex(config)

module.exports={
  getComments,
  addComment
}

function getComments(id, db = connection) {
  return db('kush').where('strain_id', id).select('comments_arr as commentsArr').first()
}

function addComment(newComment, db = connection) {
  return db('kush').insert(newComment)
}