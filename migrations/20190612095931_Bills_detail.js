exports.up = function(knex, Promise) {
    knex.schema.hasTable('Bill_detail').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('Bill_detail', function (table) {
                table.increments('id');
                table.integer('id_bill').unsigned();
                table.foreign('id_bill').references('id').inTable('Bills');
                table.integer('id_product').unsigned();
                table.foreign('id_product').references('id').inTable('Product');
                table.integer('quantity');
                table.string('unit', 50);
            });
        }
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Bills_detail');
};
