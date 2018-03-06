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

//Post new company to database
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
