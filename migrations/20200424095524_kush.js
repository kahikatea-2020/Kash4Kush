
exports.up = function(knex) {
  return knex.schema.createTable('kush', table => {
    table.integer('strain_id').primary
    table.json('comments_arr')
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('kush')
};
