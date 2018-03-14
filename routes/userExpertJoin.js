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

module.exports = router;
