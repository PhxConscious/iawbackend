exports.up = function(knex, Promise) {
    return knex.schema.createTable('social_profiles_table', function(table){
        table.string('facebook_goals');
        table.string('facebook_page');
        table.string('facebook_group');
        table.string('twitter_goals');
        table.string('twitter_lists');
        table.string('google_business_goals');
        table.string('linkedin_goals');
        table.string('linkedin_company_profiles');
        table.string('linkedin_employee_profile');
        table.string('linkedin_group');
        table.string('instagram_goals');
        table.string('instagram_username');
        table.string('instagram_password');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('social_profiles_table');
};