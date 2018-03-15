
exports.up = function(knex, Promise) {
    return knex.schema.createTable('feedback', function(table){
        table.increments('feedback_id');
        table.string('firebase_id');
        table.string('comment');
        table.timestamp('created_at').default(knex.fn.now())
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('feedback');
};
