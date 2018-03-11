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

    knex('user_table')
      .insert({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        user_email: req.body.user_email,
        user_phone: req.body.user_phone,
        firebase_id: req.body.firebase_id,
        user_progress: req.body.user_progress
      })
      .returning("*")
      .then(data => {
      knex('user_table').select().where("firebase_id", req.body.firebase_id).then(user=> res.send(user))
    })
});


//Show single user
router.get('/:firebase_id', function (req, res, next) {
    knex.select().table(`user_table`)
        .where("firebase_id", req.params.firebase_id)
        .then(user => {
            res.send(user)
        })
});

router.put('/:firebase_id', function (req, res, next) {
    knex(`user_table`)
        .where("firebase_id", req.params.firebase_id)
        .update({
            "user_progress": req.body.userProgress,
        })
        .then(user => {
            knex('user_table').select().then(user => res.send(user))
        })
});





module.exports = router;
