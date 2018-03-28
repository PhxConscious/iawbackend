let express = require('express');
let router = express.Router();
let knex = require('../db/knex');


router.get('/', function(req, res) {
    knex("feedback").join("user_table", "feedback.firebase_id", "user_table.firebase_id").select("user_table.first_name", "user_table.last_name", "feedback.comment", "feedback.created_at", "feedback.feedback_id", "feedback.parent_id", "feedback.firebase_id")
      .where("parent_id", null)
      .then(data => res.send(data))
});

router.get('/user/:firebase_id', function(req, res) {
  knex("feedback").select()
    .where("firebase_id", req.params.firebase_id)
    .then(data => res.send(data))
});

router.get('/parent/:parent_id', function(req, res, next) {
  knex("feedback").join("user_table", "feedback.firebase_id", "user_table.firebase_id").select("user_table.first_name", "user_table.last_name", "feedback.comment", "feedback.created_at", "feedback.feedback_id", "feedback.parent_id", "feedback.firebase_id")
    .where("parent_id", req.params.parent_id)
    .then(data => res.send(data))
})

router.get('/comment/:feedback_id', function(req, res) {
  knex("feedback").select()
    .where("feedback_id", req.params.feedback_id)
    .then(data => res.send(data))
});

router.post('/new/:firebase_id', function(req, res) {
  knex('feedback')
    .insert({
      comment: req.body.comment,
      firebase_id: req.params.firebase_id,
      parent_id: req.body.parent_id
    })
    .returning("*")
    .then(data => {
      let theId = data[0].feedback_id
      knex("feedback").join("user_table", "feedback.firebase_id", "user_table.firebase_id").select("user_table.first_name", "user_table.last_name", "feedback.comment", "feedback.created_at", "feedback.feedback_id", "feedback.parent_id", "feedback.firebase_id")
      .where({
        feedback_id: theId
      })
      .then(data => {
        res.send(data)
      })

    })
})

module.exports = router;
