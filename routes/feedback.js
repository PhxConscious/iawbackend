let express = require('express');
let router = express.Router();
let knex = require('../db/knex');


router.get('/', function(req, res) {
    knex("feedback").select()
      .then(data => res.send(data))
});

router.get('/user/:firebase_id', function(req, res) {
  knex("feedback").select()
    .where("firebase_id", req.params.firebase_id)
    .then(data => res.send(data))
});

router.get('/comment/:feedback_id', function(req, res) {
  knex("feedback").select()
    .where("feedback_id", req.params.feedback_id)
    .then(data => res.send(data))
});

router.post('/new/:firebase_id', function(req, res) {
  knex('feedback')
    .insert({
      comment: req.body.comment,
      firebase_id: req.params.firebase_id
    })
    .returning("*")
    .then(data => {
      res.send(data)
    })
})

module.exports = router;
