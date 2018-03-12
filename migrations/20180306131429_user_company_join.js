exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_company_join', function(table){
        table.increments('id');
        table.string('firebase_id');
        table.string('company_id');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user_company_join');
};