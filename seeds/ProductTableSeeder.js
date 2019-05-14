exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Product').del()
    .then(function () {
      // Inserts seed entries
      return knex('Product').insert([
        {
          id: 1,
          id_type: 1, 
          id_promotion: 1,
          name: 'IphoneX',
          price: 24000000,
          warranty: 2,
          image: 'iphonex.jpg',
          description: 'Day la san pham Iphone moi nhat'
        },
        {
          id: 2,
          id_type: 2, 
          id_promotion: 1,
          name: 'SamSung Galaxy S10',
          price: 24000000,
          warranty: 2,
          image: 'samsungs10.jpg',
          description: 'Day la san pham samsung moi nhat'
        },
        {
          id: 3,
          id_type: 2, 
          id_promotion: 1,
          name: 'SamSung Galaxy Fold',
          price: 40000000,
          warranty: 2,
          image: 'samsungsfold.jpg',
          description: 'Day la san pham samsung moi nhat'
        },
      ]);
    });
};
