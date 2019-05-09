const bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('admin').del()
    .then(function () {
      // Inserts seed entries
      return knex('admin').insert([
        {
          id: 1,
          username: 'admin',
          passworld: bcrypt.hashSync('123456', 10),
        },
      ]);
    });
};
