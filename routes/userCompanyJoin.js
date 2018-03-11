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

router.get('/:firebase_id', function(req, res) {
    knex.raw(`select * from user_company_join where firebase_id = '${req.params.firebase_id}'`)
        .then(function(data) {
            res.send(data.rows)
        })
});

router.post('/new/:firebase_id', function(req, res) {
    let randomNumber = randomNumberGen();
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
