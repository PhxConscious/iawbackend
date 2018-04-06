exports.up = function(knex, Promise) {
    return knex.schema.createTable('chats', function(table){
        table.increments('chat_id');
        table.string('name');
        table.json('messages');
        table.json('users');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('chats');
};
