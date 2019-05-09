exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('Customer', function(table) {
        table.increments('id');
        table.tinyInteger('gender').notNullable();
        table.string('name', 50).notNullable();
        table.string('email', 50).notNullable();
        table.text('address').notNullable();
        table.integer('phone', 20).notNullable();
        table.text('note', 100).notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("Customer");
};
exports.config = { transaction: false };
