exports.up = function(knex, Promise) {
    return knex.schema.createTable('analytics_table', function(table){
        table.string('analytics_goals');
        table.boolean('google_analytics_installed');
        table.boolean('facebook_pixel');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('analytics_table');
};