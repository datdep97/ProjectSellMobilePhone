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
          name: 'Iphone X',
          price: 24000000,
          warranty: 2,
          image: 'iphonex.jpg',
          description: 'Day la san pham Iphone moi nhat'
        },
        {
          id: 2,
          id_type: 1, 
          id_promotion: 1,
          name: 'Iphone 8',
          price: 7900000,
          warranty: 2,
          image: 'iphone_8.jpg',
          description: 'Day la san pham Iphone moi nhat'
        },
        {
          id: 3,
          id_type: 1, 
          id_promotion: 1,
          name: 'Iphone Xs Gold',
          price: 17190000,
          warranty: 2,
          image: 'iphone_xs_gold.jpg',
          description: 'Day la san pham Iphone moi nhat'
        },
        {
          id: 4,
          id_type: 1, 
          id_promotion: 1,
          name: 'Iphone Xs Max Gold',
          price: 18900000,
          warranty: 2,
          image: 'iphone_xs_max_gold.jpg',
          description: 'Day la san pham Iphone moi nhat'
        },
        {
          id: 5,
          id_type: 2, 
          id_promotion: 1,
          name: 'SamSung Galaxy S10',
          price: 24000000,
          warranty: 2,
          image: 'samsungs10.jpg',
          description: 'Day la san pham samsung moi nhat'
        },
        {
          id: 6,
          id_type: 2, 
          id_promotion: 1,
          name: 'SamSung Galaxy Fold',
          price: 40000000,
          warranty: 2,
          image: 'samsungsfold.jpg',
          description: 'Day la san pham samsung moi nhat'
        },
        {
          id: 7,
          id_type: 2,
          id_promotion: 1,
          name: 'Samsung Galaxy A9',
          price: 8000000,
          warranty: 2,
          image: 'samsung_A9.jpg',
          description: 'Day la san pham samsung moi nhat'
        },
        {
          id: 8,
          id_type: 2,
          id_promotion: 1,
          name: 'Samsung Galaxy M20',
          price: 4190000,
          warranty: 2,
          image: 'samsung_M20.jpg',
          description: 'Day la san pham samsung moi nhat'
        },
        {
          id: 9,
          id_type: 2,
          id_promotion: 1,
          name: 'Samsung Galaxy S10 Black',
          price: 16950000,
          warranty: 2,
          image: 'samsung_s10_black.jpg',
          description: 'Day la san pham samusung moi nhat'                
        },
        {
          id: 10,
          id_type: 4,
          id_promotion: 1,
          name: 'Oppo A3s',
          price: 4090000,
          warranty: 2,
          image: 'Oppo_A3s.jpg',
          description: 'Day la san pham Oppo moi nhat'
        },
        {
          id: 11,
          id_type: 4,
          id_promotion: 1,
          name: 'Oppo F9',
          price: 6490000,
          warranty: 2,
          image: 'Oppo_f9.jpg',
          description: 'Day la san pham Oppo moi nhat'
        },
        {
          id: 12,
          id_type: 4,
          id_promotion: 1,
          name: 'Oppo F11',
          price: 8490000,
          warranty: 2,
          image: 'Oppo_F11.jpg',
          description: 'Day la san pham Oppo moi nhat'
        },
        {
          id: 13,
          id_type: 5,
          id_promotion: 1,
          name: 'Nokia Lumia 1520',
          price: 5600000,
          warranty: 2,
          image: 'nokia1.jpg',
          description: 'Nokia Lumia 1520'
        },
        {
          id: 14,
          id_type: 5,
          id_promotion: 1,
          name: 'Nokia Lumia 930',
          price: 5000000,
          warranty: 2,
          image: 'nokia2.jpg',
          description: 'Nokia Lumia 930'
        },
        {
          id: 15,
          id_type: 5,
          id_promotion: 1,
          name: 'Nokia 1280',
          price: 295000,
          warranty: 2,
          image: 'nokia3.jpg',
          description: 'Nokia 1280'
        },
        {
          id: 16,
          id_type: 3,
          id_promotion: 1,
          name: 'BlackBerry Key 2',
          price: 9790000,
          warranty: 2,
          image: 'blackberry_key2.png',
          description: 'BlackBerry Key 2'
        },
        {
          id: 17,
          id_type: 3,
          id_promotion: 1,
          name: 'BlackBerry Passport',
          price: 3200000,
          warranty: 2,
          image: 'blackberry_Passport.jpg',
          description: 'BlackBerry Passport'
        },
        {
          id: 18,
          id_type: 3,
          id_promotion: 1,
          name: 'BlackBerry Z10',
          price: 1200000,
          warranty: 2,
          image: 'blackberry_Z10.jpeg',
          description: 'BlackBerry Z10'
        }
      ]);
    });
};
