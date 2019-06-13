const bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Admin').del()
    .then(function () {
      // Inserts seed entries
      return knex('Admin').insert([
        {
          id: 1,
          fullname: "Phi Chi Dung",
          age: 22,
          address: "Kham Thien",
          gender: 1,
          phone: 911049026,
          username: 'admin',
          password: bcrypt.hashSync('123456', 10),
          avatar: "Rocker"
        },
      ]);
    });
};
