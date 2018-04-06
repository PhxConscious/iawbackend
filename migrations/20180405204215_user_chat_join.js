exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_chats_join', function(table){
        table.increments('user_chats_id');
        table.string('user_id');
        table.integer('chat_id');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user_chats_join');
};
