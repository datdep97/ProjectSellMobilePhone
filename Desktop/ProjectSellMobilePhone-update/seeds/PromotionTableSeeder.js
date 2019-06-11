exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Promotion').del()
    .then(function () {
      // Inserts seed entries
      return knex('Promotion').insert([
        {
          id: 1,
          name: '10%',
          content: 'Cung nhieu phu kien di kem',
        },
      ]);
    });
};
