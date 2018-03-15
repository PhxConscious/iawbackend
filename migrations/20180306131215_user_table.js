exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_table', function(table){
        table.increments('user_id');
        table.string('first_name');
        table.string('last_name');
        table.string('user_email');
        table.string('user_phone');
        table.string('firebase_id');
        table.boolean('isExpert');
        table.boolean('isAdmin');
        table.json('user_progress');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user_table');
};
