let express = require('express');
let router = express.Router();
let knex = require('../db/knex');

/* GET users listing. */
router.get('/', function(req, res) {
    knex.raw('select * from user_table')
        .then(function(data) {
            res.send(data.rows);
        })
});

//Post new user to database
router.post('/new', function(req, res, next) {
    knex.raw(`insert into user_table (first_name, last_name, user_email, user_phone, firebase_id ) values (
    '${req.body.first_name}',
    '${req.body.last_name}',
    '${req.body.user_email}',
    '${req.body.user_phone}',
    '${req.body.firebase_id}'
    )`)
        .then(() => {
            res.send('success')
        })
});

//Show single user
router.get('/:id', function (req, res, next) {
    knex.select().table(`user_table`)
        .where("user_id", req.params.id)
        .then(user => {
            res.send(user)
        })
});

router.put('/:id', function (req, res, next) {
    console.log("put", req.body.userProgress)
    knex(`user_table`)
        .where("user_id", req.params.id)
        .update({
            "user_progress": req.body.userProgress,
        })
        .then(user => {
            knex('user_table').select().then(user => res.send(user))
        })
});

module.exports = router;
