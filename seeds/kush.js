
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('kush').del()
    .then(function () {
      // Inserts seed entries
      return knex('kush').insert([
        {strain_id: 1, comments_arr: JSON.stringify(['dope dude'])},
        {strain_id: 2, comments_arr: JSON.stringify(['dope dude', 'high five']) },
        {strain_id: 3, comments_arr: JSON.stringify(['dope dude', 'high five', 'great stuff']) }
      ]);
    });
};
