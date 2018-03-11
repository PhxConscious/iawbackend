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


router.get('/:id', function (req, res, next) {
    knex.select().table(`company_table`)
        .where("company_id", req.params.id)
        .then(company => {
            knex('company_table').select().where("company_id", req.params.id).then(company=>res.send(company))
        })
});

//Post new company to database
router.post('/new', function(req, res, next) {
    knex('user_table')
      .insert({
        company_name: xxxxme,
        company_email: req.boxxxme,
        company_phone: req.body.user_email,
        brand_id: req.body.user_phone,
        company_goals: req.body.firebase_id,
        company_content_creator: req.body.user_progress,
        company_username: req.body.firebase_id,
        company_password: req.body.firebase_id
      })
      .returning("*")
      .then(data => {
      knex('user_table').select().where("firebase_id", req.body.firebase_id).then(user=> res.send(user))
    })
});







router.post('/new', function (req, res, next) {
    knex.raw(`insert into company_table (company_name, company_email, company_phone, brand_id, company_goals, company_content_creator, company_username, company_password ) values (
    '${req.body.company_name}',
    '${req.body.company_email}',
    '${req.body.company_phone}',
    '${req.body.brand_id}',
    '${req.body.company_goals}',
    '${req.body.company_content_creator}',
    '${req.body.company_username}',
    '${req.body.company_password}'
    )`)
        .then(() => {
            res.send('success')
        })
});

module.exports = router;
