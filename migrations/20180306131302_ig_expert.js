exports.up = function(knex, Promise) {
    return knex.schema.createTable('ig_expert', function(table){
        table.increments('expert_id');
        table.string('expert_first_name');
        table.string('expert_last_name');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('ig_expert');
};