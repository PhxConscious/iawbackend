let express = require('express');
let router = express.Router();
let knex = require('../db/knex');

/* GET users listing. */
router.get('/', function(req, res) {
    knex('chats').select()
        .then(chats => res.send(chats))
});

router.get('/:chatId', function(req, res) {
  knex.select().table('chats')
    .where("chat_id", req.params.chatId)
    .then(chat => res.send(chat))
})

router.post('/new', function(req, res) {
  let mes = JSON.stringify(req.body.messages);
  let us = JSON.stringify(req.body.users);
  console.log('resp', mes, us)
  knex('chats')
    .insert({
      chat_id: req.body.chat_id,
      name: req.body.name,
      messages: mes,
      users: us
    })
    .returning("*")
    .then(data => {
      res.send(data)
    })
})

router.put('/edit/:chatId', function(req, res) {
  let us = JSON.stringify(req.body.users);
  knex('chats')
    .select()
    .where("chat_id", req.params.chatId)
    .then(old => {
      let tempMsgs = old[0].messages.messages;
      let newMsgs = tempMsgs.concat(req.body.message)
      knex('chats')
        .select()
        .where("chat_id", req.params.chatId)
        .update({
          name: req.body.name,
          messages: {messages:newMsgs},
          users: us
        })
        .returning("*")
        .then(updated => res.send(updated))

    })
})


// before the edit
// router.put('/edit/:chatId', function(req, res) {
//   let mes = JSON.stringify(req.body.messages);
//   let us = JSON.stringify(req.body.users);
//   knex('chats')
//     .where("chat_id", req.params.chatId)
//     .update({
//       name: req.body.name,
//       messages: mes,
//       users: us
//     })
//     .returning("*")
//     .then(data => {
//       res.send(data)
//     })
// })

module.exports = router;
