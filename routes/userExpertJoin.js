let express = require('express');
let router = express.Router();
let knex = require('../db/knex');


router.get('/', function(req, res) {
    knex("expert_user_join").select()
      .then(data => res.send(data))
});

router.get('/experts/:user_id', function(req, res) {
  console.log(req.params.user_id)
  knex("expert_user_join").join("user_table", "expert_user_join.user_id", "user_table.firebase_id").select()
    .where("firebase_id", req.params.user_id)

    .then(data => res.send(data))
})

router.get('/users/:expert_id', function(req, res) {
  knex("expert_user_join").join("user_table", "expert_user_join.user_id", "user_table.firebase_id").select("expert_id", "first_name", "last_name", "firebase_id", "user_email", "user_phone", "user_progress")
    .where("expert_id", req.params.expert_id)
    .then(data=> res.send(data))
})

router.get('/freeusers', function(req,res) {
  knex.select("*").from("user_table").leftOuterJoin('expert_user_join', "user_table.firebase_id", "expert_user_join.user_id").where(
    {
      expert_id:null,
      isExpert:false,
      isAdmin:false
    })
    .then(data => res.send(data))
})

router.post("/new", function(req, res) {
  knex("expert_user_join").insert({
    expert_id: req.body.expert_id,
    user_id: req.body.user_id
  }).returning("*")
  .then(data => {
    res.send(data)
  })
})

router.delete('/:user_id', function(req, res, next) {
  knex('expert_user_join')
    .where('user_id', req.params.user_id)
    .del()
    .returning("*")
    .then(data => {
      res.send(data)
  })
})

module.exports = router;
