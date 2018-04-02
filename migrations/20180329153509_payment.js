
exports.up = function(knex, Promise) {
    return knex.schema.createTable('payment', function(table){
        table.increments('payment_id');
        table.string('firebase_id');
        table.integer('amount');
        table.string('id');
        table.string('email');
        table.timestamp('created_at').default(knex.fn.now());
        table.string('client_ip');
        table.integer('created');
        table.boolean('livemode');
        table.string('object');
        table.string('type');
        table.boolean('used');
        table.string('name');
        table.string('address_line1');
        table.string('address_line2');
        table.string('address_city');
        table.string('address_country');
        table.string('address_state');
        table.string('address_zip');
        table.string('brand');
        table.string('exp_month');
        table.string('exp_year');
        table.string('last4');
        table.string('card_id');
    });
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('payment');
};
