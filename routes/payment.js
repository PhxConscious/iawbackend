let express = require('express');
let router = express.Router();
let knex = require('../db/knex');

/* GET users listing. */
router.post('/', function(req, res) {
  console.log("body", req.body)
  knex('payment')
    .insert({
      id: req.body.token.id,
      email: req.body.token.email,
      client_ip: req.body.token.client_ip,
      created: req.body.token.created,
      livemode: req.body.token.livemode,
      object: req.body.token.object,
      type: req.body.token.type,
      used: req.body.token.used
    })
    .returning("*")
    .then(data=>{
      console.log("data1", data)
      knex('payment').select()
      .where("id", req.body.token.id)
      .then(data=>{
        console.log("data2", data)
        res.send(data)
      })
    })

});


module.exports = router;
