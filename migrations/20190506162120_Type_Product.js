exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('Type_product', function(table) {
        table.increments('id');
        table.string('name', 50).notNullable();
        table.text('description').notNullable();
        table.tinyInteger('status').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("Type_product");
};
exports.config = { transaction: false };
