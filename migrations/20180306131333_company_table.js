exports.up = function(knex, Promise) {
    return knex.schema.createTable('company_table', function(table){
        table.string('company_id');
        table.string('company_name');
        table.string('company_email');
        table.string('company_phone');
        table.string('company_content_creator');
        table.string('company_brand_id');
        table.string('company_primary_goal');
        table.string('company_style_guide');
        table.string('company_website');
        table.string('google_search_goals');
        table.string('google_business_profile');
        table.string('instagram_username');
        table.string('instagram_goals');
        table.string('instagram_bio');
        table.string('facebook_page_url');
        table.string('facebook_goals');
        table.string('twitter_username');
        table.string('twitter_goals');
        table.string('linkedin_profile_url');
        table.string('linkedin_goals');
        table.string('google_plus_profile_url');
        table.string('google_plus_goals');
        table.string('youtube_url');
        table.string('vimeo_url');
        table.string('youtube_vimeo_goals');
        table.string('pinterest_profile');
        table.string('pinterest_goals');
        table.string('yelp_business_profile');
        table.string('yelp_goals');
        table.string('better_business_bureau_profile');
        table.string('better_business_bureau_goals');
        table.string('insta_goal1');
        table.string('insta_goal2');
        table.string('insta_goal3');
        table.string('cloudbased_storage_locale');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('company_table');
};
