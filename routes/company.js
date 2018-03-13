let express = require('express');
let router = express.Router();
let knex = require('../db/knex');

/* GET company listing. */
router.get('/', function (req, res) {
    knex.raw('select * from company_table')
        .then(function (data) {
            res.send(data.rows);
        })
});


router.get('/:company_id', function (req, res, next) {
    knex.select().table(`company_table`)
        .where("company_id", req.params.company_id)
        .then(company => {
            knex('company_table').select()
                .where("company_id", req.params.company_id)
                .then(company => res.send(company))
        })
});


// this route returns a list of all the companies associated with given firebase_id
router.get('/list/:firebase_id', function (req, res, next) {
    knex.from('company_table')
        .innerJoin('user_company_join', 'company_table.company_id', 'user_company_join.company_id')
        .select().where('user_company_join.firebase_id', req.params.firebase_id)
        .then(companies => {
            res.send(companies)
        })
});

//Post new company to database
router.post('/new/:company_id', function (req, res, next) {
    knex('company_table')
        .insert({
            company_id: req.params.company_id,
            company_name: req.body.company_name,
            company_email: req.body.company_email,
            company_phone: req.body.company_phone,
            company_content_creator: req.body.company_content_creator,
            company_brand_id: req.body.company_brand_id,
            company_primary_goal: req.body.company_primary_goal,
            company_style_guide: req.body.company_style_guide,
            company_website: req.body.company_website,
            google_search_goals: req.body.google_search_goals,
            google_business_profile: req.body.google_business_profile,
            instagram_username: req.body.instagram_username,
            instagram_goals: req.body.instagram_goals,
            facebook_page_url: req.body.facebook_page_url,
            facebook_goals: req.body.facebook_goals,
            twitter_username: req.body.twitter_username,
            twitter_goals_id: req.body.twitter_goals,
            linkedin_profile_url: req.body.linkedin_profile_url,
            linkedin_goals: req.body.linkedin_goals,
            google_plus_profile_url: req.body.google_plus_profile_url,
            google_plus_goals: req.body.google_plus_goals,
            youtube_url: req.body.youtube_url,
            vimeo_url: req.body.vimeo_url,
            youtube_vimeo_goals: req.body.youtube_vimeo_goals,
            pinterest_profile: req.body.pinterest_profile,
            pinterest_goals: req.body.pinterest_goals,
            yelp_business_profile: req.body.yelp_business_profile,
            yelp_goals: req.body.yelp_goals,
            better_business_bureau_profile: req.body.better_business_bureau_profile,
            better_business_bureau_goals: req.body.better_business_bureau_goals
        })
        .returning("*")
        .then(data => {
            knex('company_table').select().where("company_id", req.params.company_id).then(company => res.send(company))
        })
});

router.put('/new/:company_id', function (req, res, next) {
    console.log("company", req.body)
    knex('company_table')
        .update({
            company_id: req.params.company_id,
            company_name: req.body.company_name,
            company_email: req.body.company_email,
            company_phone: req.body.company_phone,
            company_content_creator: req.body.company_content_creator,
            company_brand_id: req.body.company_brand_id,
            company_primary_goal: req.body.company_primary_goal,
            company_style_guide: req.body.company_style_guide,
            company_website: req.body.company_website,
            google_search_goals: req.body.google_search_goals,
            google_business_profile: req.body.google_business_profile,
            instagram_username: req.body.instagram_username,
            instagram_goals: req.body.instagram_goals,
            facebook_page_url: req.body.facebook_page_url,
            facebook_goals: req.body.facebook_goals,
            twitter_username: req.body.twitter_username,
            twitter_goals_id: req.body.twitter_goals,
            linkedin_profile_url: req.body.linkedin_profile_url,
            linkedin_goals: req.body.linkedin_goals,
            google_plus_profile_url: req.body.google_plus_profile_url,
            google_plus_goals: req.body.google_plus_goals,
            youtube_url: req.body.youtube_url,
            vimeo_url: req.body.vimeo_url,
            youtube_vimeo_goals: req.body.youtube_vimeo_goals,
            pinterest_profile: req.body.pinterest_profile,
            pinterest_goals: req.body.pinterest_goals,
            yelp_business_profile: req.body.yelp_business_profile,
            yelp_goals: req.body.yelp_goals,
            better_business_bureau_profile: req.body.better_business_bureau_profile,
            better_business_bureau_goals: req.body.better_business_bureau_goals
        })
})
    .returning("*")
    .then(data => {
        knex('company_table').select().where("company_id", req.params.company_id).then(company => res.send(company))
    })
})
;

// router.post('/new', function (req, res, next) {
//     knex.raw(`insert into company_table (company_name, company_email, company_phone, brand_id, company_goals, company_content_creator, company_username, company_password ) values (
//     '${req.body.company_name}',
//     '${req.body.company_email}',
//     '${req.body.company_phone}',
//     '${req.body.brand_id}',
//     '${req.body.company_goals}',
//     '${req.body.company_content_creator}',
//     '${req.body.company_username}',
//     '${req.body.company_password}'
//     )`)
//         .then(() => {
//             res.send('success')
//         })
// });

module.exports = router;
