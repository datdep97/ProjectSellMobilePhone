exports.up = function(knex, Promise) {
    knex.schema.hasTable('Bills').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('Bills', function (table) {
                table.increments('id');
                table.integer('id_customer').unsigned();
                table.foreign('id_customer').references('id').inTable('Customer');
                table.dateTime('date_order').notNullable();
                table.integer('total').notNullable();
                table.integer('payment_status').notNullable();
                table.text('note', 100).notNullable();
            });
        }
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Bills');
};
