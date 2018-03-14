exports.up = function(knex, Promise) {
    return knex.schema.createTable('expert_user_join', function(table){
        table.increments('expert_user_id');
        table.string('user_id');
        table.string('expert_id');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('expert_user_join');
};
