const bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Admin').del()
    .then(function () {
      // Inserts seed entries
      return knex('Admin').insert([
        {
          id: 1,
          fullname: "Kim Viet Anh",
          age: 18,
          address: "Ha Noi",
          gender: 1,
          phone: 01234567,
          username: 'admin',
          password: bcrypt.hashSync('123456', 10),
          avatar: "vanh.jpg"
        },
      ]);
    });
};
