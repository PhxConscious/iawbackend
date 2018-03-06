exports.up = function(knex, Promise) {
    return knex.schema.createTable('company_table', function(table){
        table.string('company_name');
        table.string('company_email');
        table.string('company_phone');
        table.string('brand_id');
        table.string('company_goals');
        table.string('company_content_creator');
        table.string('company_username');
        table.string('company_password');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('company_table');
};