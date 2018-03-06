exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_company_join', function(table){
        table.increments('id');
        table.boolean('user_id');
        table.boolean('company_id');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user_company_join');
};