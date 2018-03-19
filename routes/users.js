let express = require('express');
let router = express.Router();
let knex = require('../db/knex');

/* GET users listing. */
router.get('/', function(req, res) {
    knex('user_table').fullOuterJoin("expert_user_join", "user_table.firebase_id", "expert_user_join.user_id").select().whereNot({
      "isAdmin": true,
      "isExpert": true
    })
        .then(function(data) {
            res.send(data);
        })
});

router.get('/experts', function (req, res, next) {
  knex('user_table').select("user_id", "first_name", "last_name", "user_email", "user_phone", "firebase_id", "isExpert", "isAdmin")
    .where("isExpert", true)
    .then(experts => {
      res.send(experts)
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
            "isAdmin": req.body.isAdmin,
            "isExpert": req.body.isExpert
        })
        .then(user => {
            knex("user_table")
              .where("firebase_id", req.params.firebase_id)
                .then(user => res.send(user))
        })
});

router.delete('/:firebase_id', function(req, res, next) {
  knex('user_table')
    .where('firebase_id', req.params.firebase_id)
    .del()
    .returning("*")
    .then(data => {
      res.send(data)
  })
})



module.exports = router;
