
exports.up = function(knex, Promise) {
    return knex.schema.createTable('lms_books', function(table){
        table.increments('book_id');
        table.string('name');
        table.jsonb('module');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('lms_books');
};
