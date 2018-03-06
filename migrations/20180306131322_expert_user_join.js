exports.up = function(knex, Promise) {
    return knex.schema.createTable('expert_user_join', function(table){
        table.integer('user_id');
        table.integer('expert_id');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('expert_user_join');
};