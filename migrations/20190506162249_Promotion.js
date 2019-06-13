exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('Promotion', function(table) {
        table.increments('id');
        table.string('name', 50).notNullable();
        table.string('content', 200).notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("Promotion");
};
exports.config = { transaction: false };
