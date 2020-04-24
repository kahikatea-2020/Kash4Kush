const knex = require('knex')
const config = require('../knexfile').development
const connection = knex(config)

module.exports = {
  getComments,
  addComment,
  addStrainAndComment
}

function getComments (id, db = connection) {
  return db('kush').where('strain_id', id).select('comments_arr as commentsArr').first()
}

function addComment (newCom, db = connection) {
  const { id, oldComments, newComment } = newCom
  const newArr = [...oldComments, newComment]
  return db('kush').where('strain_id', id).update({ strain_id: id, comments_arr: JSON.stringify(newArr) })
}

function addStrainAndComment (newStrain, db = connection) {
  return db('kush').insert({ strain_id: newStrain.id, comments_arr: JSON.stringify([newStrain.comment]) })
}
