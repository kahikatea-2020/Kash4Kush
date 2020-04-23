
const knex = require('knex')
const config = require('./knexfile').development
const db = knex(config)

module.exports={
  getComments,
  addComment
}

function getComments() {
  return db('kush').select
}

function addComment() {
  return db('kush').select
}