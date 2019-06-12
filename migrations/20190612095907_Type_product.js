exports.up = function(knex, Promise) {
    knex.schema.hasTable('Type_product').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('Type_product', function (table) {
                table.increments('id');
                table.string('name', 50).notNullable();
                table.text('description').notNullable();
                table.integer('status').notNullable();
            });
        }
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Type_product');
};
