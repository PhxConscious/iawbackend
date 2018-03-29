
exports.up = function(knex, Promise) {
    return knex.schema.createTable('payment', function(table){
        table.increments('payment_id');
        table.string('id');
        table.string('email');
        table.timestamp('created_at').default(knex.fn.now());
        table.string('client_ip');
        table.integer('created');
        table.boolean('livemode');
        table.string('object');
        table.string('type');
        table.boolean('used');
    });
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('payment');
};
