let express = require('express');
let router = express.Router();
let knex = require('../db/knex');


router.get('/', function(req, res) {
    knex("expert_user_join").select()
      .then(data => res.send(data))
});

router.get('/experts/:user_id', function(req, res) {
  knex("expert_user_join").select()
    .where("user_id", req.params.user_id)
    .then(data => res.send(data))
})

router.get('/users/:expert_id', function(req, res) {
  knex("expert_user_join").select()
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

module.exports = router;
