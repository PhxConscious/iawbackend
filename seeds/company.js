exports.seed = function (knex, Promise) {
    return knex('company_table').del()
        .then(function () {
            return knex('company_table').insert([
                {
                    company_id: '1234567890',
                    company_name: 'test company_name',
                    company_email: "test company_email",
                    company_phone: "5555555555",
                    company_content_creator: 'test company content creator',
                    company_brand_id: "test_brand_id",
                    company_primary_goal: "test company_goals",
                    company_style_guide: "test style guide",
                    company_website: 'test.com',
                    google_search_goals: 'be the only search result for any query',
                    google_business_profile: 'test.google.com',
                    instagram_username: 'test@instagram',
                    instagram_goals: 'money',
                    instagram_bio: "we're a mom and pop shop",
                    facebook_page_url: 'blah.facebook.com',
                    facebook_goals: 'become ceo',
                    twitter_username: '@test_co',
                    twitter_goals: 'become number one',
                    linkedin_profile_url: 'test@linkedin',
                    linkedin_goals: 'test info',
                    google_plus_profile_url: 'K??',
                    google_plus_goals: 'become popular',
                    youtube_url: 'test.youtube.com',
                    vimeo_url: 'test@vimeo.com',
                    youtube_vimeo_goals: 'become famous',
                    pinterest_profile: 'test@pinterest.com',
                    pinterest_goals: 'become number one',
                    yelp_business_profile: 'test@yelp.com',
                    yelp_goals: '10 star rating',
                    better_business_bureau_profile: 'test@bbb.com',
                    better_business_bureau_goals: '100%',
                    insta_goal1: 'learn the secrets',
                    insta_goal2: 'of winning friends',
                    insta_goal3: 'and influencing people',
                    cloudbased_storage_locale: 'www.yermomsbasement.com',
                }
            ]);
        });
};
