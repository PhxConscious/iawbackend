let express = require('express');
let router = express.Router();
let knex = require('../db/knex');

let randomNumberGen = () => {
    let result = Math.random() * 100000000000;
    return Math.floor(result);
}

/* GET analytics listing. */
router.get('/', function(req, res) {
    knex.raw('select * from user_company_join')
        .then(function(data) {
            res.send(data.rows);
        })
});

router.get('/:firebase_id', function(req, res, next) {
  console.log("in correct route", req.params.firebase_id)
    knex("user_company_join").fullOuterJoin("company_table", "user_company_join.company_id", "company_table.company_id")
    .select("*")
    .where("user_company_join.firebase_id", req.params.firebase_id)
        .then(function(data) {
            res.send(data)
        })
});


router.post('/new/:firebase_id', function(req, res) {
    let randomNumber = randomNumberGen();
    console.log('userCompanyJoin', req.body)
    knex('user_company_join')
        .insert({
            firebase_id: req.params.firebase_id,
            company_id: randomNumber
        })
        .returning("*")
        .then(data => {
            knex('user_company_join').select().where("company_id", randomNumber).then(data=> res.send(data))
        })
});

module.exports = router;
