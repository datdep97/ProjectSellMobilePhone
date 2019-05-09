exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('Admin', function(table) {
        table.increments('id');
        table.string('fullname', 50).notNullable();
        table.integer('age', 10).notNullable();
        table.text('address', 50).notNullable();
        table.tinyInteger('gender').notNullable();
        table.integer('phone', 20).notNullable();
        table.string('username', 50).notNullable();
        table.string('password', 50).notNullable();
        table.string('avatar', 50).notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("Admin");
};
exports.config = { transaction: false };
