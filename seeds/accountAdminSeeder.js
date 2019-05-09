const bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Admin').del()
    .then(function () {
      // Inserts seed entries
      return knex('Admin').insert([
        {
          id: 1,
          fullname: 'Hai jiong',
          age: 80, 
          address: 'Ngoc Khanh error',
          gender: 1,
          phone: '696969699',
          username: 'admin',
          password: bcrypt.hashSync('123456', 10),
          avatar: 'baylac.jpg'
        },
      ]);
    });
};
