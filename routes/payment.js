let express = require('express');
let router = express.Router();
let knex = require('../db/knex');
let stripe = require('stripe')('sk_test_YUgCR5rqPmt6n01pgB8oDI7q')

/* GET users listing. */
router.post('/', function(req, res) {
  console.log("body", req.body)

  stripe.customers.create({
    email: req.body.email,
    source: req.body.id
  })
  .then(customer => {
    console.log('customer', customer)
    stripe.charges.create({
      amount: req.body.amount,
      description: "initial 3 month offering",
      currency: "usd",
      customer: customer.id
  })})
  .then(data => {
    knex('payment')
      .insert({
        id: req.body.id,
        email: req.body.email,
        client_ip: req.body.client_ip,
        created: req.body.created,
        livemode: req.body.livemode,
        object: req.body.object,
        type: req.body.type,
        used: req.body.used,
        firebase_id: req.body.firebase_id,
        amount: req.body.amount,
        name: req.body.card.name,
        address_zip: req.body.card.address_zip,
        address_line1: req.body.card.address_line1,
        address_line2: req.body.card.address_line2,
        address_city: req.body.card.address_city,
        address_country: req.body.card.address_country,
        address_state: req.body.card.address_state,
        brand: req.body.card.brand,
        exp_month: req.body.card.exp_month,
        exp_year: req.body.card.exp_year,
        last4: req.body.card.last4,
        card_id: req.body.card.card_id
      })
      .returning("*")
      .then(data=>{
        // console.log("data1", data)
        knex('payment').select()
        .where("id", req.body.id)
        .then(data=>{
          console.log("data2", data)
          res.send(data)
        })
      })
  })
});


module.exports = router;
